import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import {
  parseJsonBody,
  validateContactForm,
  apiSuccess,
  apiError,
  methodNotAllowed,
} from "@/lib/validations";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// In-memory duplicate submission store (keyed by `${ip}:${email}`)
const submissionHistory = new Map<string, { lastSubmittedAt: number; messageHash: string }>();
const DUPLICATE_COOLDOWN_MS = 30_000; // 30 seconds

function getClientIp(req: NextRequest | Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  if (forwarded) return forwarded.split(",")[0].trim();
  if (realIp) return realIp.trim();
  return "unknown";
}

function cleanExpiredSubmissions() {
  if (submissionHistory.size > 2000) {
    const now = Date.now();
    for (const [key, val] of submissionHistory.entries()) {
      if (now - val.lastSubmittedAt > DUPLICATE_COOLDOWN_MS) {
        submissionHistory.delete(key);
      }
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await parseJsonBody(req);
    if (!body) {
      return apiError(
        "Invalid or empty JSON request body.",
        400,
        "INVALID_JSON"
      );
    }

    // Honeypot spam trap: real users won't fill this field
    const honeypot = body._gotcha || body.honeypot;
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      // Silently succeed to fool bots without sending email
      return apiSuccess(
        { sentAt: new Date().toISOString() },
        "Your message has been sent successfully!"
      );
    }

    // Validate inputs with sanitization and length checks
    const validation = validateContactForm(body);
    if (!validation.success) {
      return apiError(
        validation.errors[0]?.message || "Validation failed. Please verify your input.",
        400,
        "VALIDATION_ERROR",
        validation.errors
      );
    }

    const { name, email, subject, message } = validation.data;
    const ip = getClientIp(req);
    const submissionKey = `${ip}:${email}`;
    const now = Date.now();

    // Prevent spamming rapid duplicate submissions
    cleanExpiredSubmissions();
    const previous = submissionHistory.get(submissionKey);
    if (previous && (now - previous.lastSubmittedAt < DUPLICATE_COOLDOWN_MS)) {
      if (previous.messageHash === message) {
        return apiError(
          "Duplicate message detected. Please wait before submitting again.",
          429,
          "DUPLICATE_SUBMISSION"
        );
      }
    }

    const gmailUser = (
      process.env.GMAIL_USER ||
      "nilam23192@gmail.com"
    ).replace(/^["']|["']$/g, "").trim();

    const gmailPass = (
      process.env.GMAIL_PASS ||
      "ofnf fyke xqow qrep"
    ).replace(/^["']|["']$/g, "").replace(/\s+/g, "").trim();

    const receiverEmail = (
      process.env.CONTACT_RECEIVER_EMAIL ||
      "ajitk23192@gmail.com, nilam23192@gmail.com"
    ).replace(/^["']|["']$/g, "").trim();

    // Setup Nodemailer Gmail transporter with fallback and TLS resiliency
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    const mailSubject = subject
      ? `[Portfolio Inquiry] ${subject}`
      : `[Portfolio Contact] New message from ${name}`;

    const textContent = `
New Contact Form Submission from AJITDEV.com Portfolio

Sender: ${name}
Email: ${email}
Subject: ${subject || "General Inquiry"}

Message:
${message}
    `.trim();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 20px; text-align: center; color: white;">
          <h2 style="margin: 0;">New Contact Form Submission</h2>
          <p style="margin: 5px 0 0 0; font-size: 14px;">AJITDEV.com Portfolio</p>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px;">Sender:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
              <td style="padding: 8px 0;">${subject || "General Inquiry"}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="margin-top: 0; color: #1e293b;">Message:</h3>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #2563eb; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 12px; color: #64748b;">
          This email was sent from the contact form at <a href="https://ajitdev.com" style="color: #2563eb;">ajitdev.com</a>.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"AJITDEV Contact Form" <${gmailUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: mailSubject,
      text: textContent,
      html: htmlContent,
    });

    // Record submission for duplicate tracking
    submissionHistory.set(submissionKey, { lastSubmittedAt: now, messageHash: message });

    return apiSuccess(
      { sentAt: new Date().toISOString() },
      "Your message has been sent successfully!"
    );
  } catch (error: unknown) {
    const err = error as { code?: string; message?: string; command?: string; responseCode?: number };
    // Log full error server-side for Vercel observability, but NEVER leak credentials or stack trace to client
    console.error("Nodemailer API error details:", {
      code: err?.code,
      message: err?.message,
      command: err?.command,
      responseCode: err?.responseCode,
    });
    return apiError(
      "Failed to send message. Please try again later or email directly to support@ajitdev.com.",
      500,
      "INTERNAL_SERVER_ERROR"
    );
  }
}

export async function GET() {
  return methodNotAllowed(["POST"]);
}

export async function PUT() {
  return methodNotAllowed(["POST"]);
}

export async function PATCH() {
  return methodNotAllowed(["POST"]);
}

export async function DELETE() {
  return methodNotAllowed(["POST"]);
}
