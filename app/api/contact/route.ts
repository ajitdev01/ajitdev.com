import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || "nilam23192@gmail.com";
    const gmailPass = process.env.GMAIL_PASS || "ofnf fyke xqow qrep";
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "nilam23192@gmail.com";

    // Setup Nodemailer Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailSubject = subject
      ? `[Portfolio Inquiry] ${subject}`
      : `[Portfolio Contact] New message from ${name}`;

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

    // Send email via Gmail Nodemailer
    await transporter.sendMail({
      from: `"AJITDEV Contact Form" <${gmailUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: mailSubject,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Nodemailer API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send message via Nodemailer." },
      { status: 500 }
    );
  }
}
