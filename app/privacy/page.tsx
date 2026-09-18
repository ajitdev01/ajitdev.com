import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Ajit Dev — DevOps Engineer Portfolio India",
  description: "Complete privacy policy for Ajit Dev's DevOps and Cloud Security portfolio. Learn how your data is protected when contacting a Full Stack Developer from Katihar, Bihar.",
  alternates: {
    canonical: "https://ajitdev.com/privacy",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ajitdev.com/privacy",
      "url": "https://ajitdev.com/privacy",
      "name": "Privacy Policy | Ajit Dev — DevOps Engineer Portfolio India",
      "description": "Complete privacy policy for Ajit Dev's DevOps and Cloud Security portfolio. Learn how your data is protected when contacting a Full Stack Developer from Katihar, Bihar.",
      "inLanguage": ["en-IN", "en-US"],
      "isPartOf": {
        "@id": "https://ajitdev.com/#website"
      },
      "about": {
        "@id": "https://ajitdev.com/#person"
      },
      "datePublished": "2024-01-15",
      "dateModified": "2025-02-22"
    }
  ]
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Navigation Link */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="small" className="gap-2 text-slate-500 font-extrabold">
              <ArrowLeft className="w-4 h-4 text-indigo-600" /> Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Banner Card */}
        <Card className="p-6 sm:p-10 mb-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-center shadow-xs">
          <div className="inline-flex p-4 rounded-2xl bg-sky-100 text-sky-600 mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-2">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base font-extrabold text-slate-700 mb-4">
            Ajit Kumar (@ajitdev01) • DevOps Engineer &amp; Cloud Security Developer • Katihar, Bihar, India
          </p>

          <div className="w-24 h-1 rounded-full bg-sky-600 mx-auto mb-6" />

          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="success" className="py-1 px-3 text-xs gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> GDPR-Ready • 100% Transparency
            </Badge>
            <Badge variant="outline" className="py-1 px-3 text-xs gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> HTTPS/TLS 1.3 Encrypted
            </Badge>
            <Badge variant="outline" className="py-1 px-3 text-xs gap-1.5">
              <FileText className="w-3.5 h-3.5 text-indigo-600" /> Last Modified: February 2026
            </Badge>
          </div>
        </Card>

        {/* Content Section Cards */}
        <div className="flex flex-col gap-6">
          
          {/* Section 1 */}
          <Card className="p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <h2 className="text-xl font-black text-slate-900 mb-3">
              1. Introduction &amp; Transparency
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium mb-3">
              Welcome to <strong className="text-slate-900 font-extrabold">ajitdev.com</strong> — the professional portfolio of <strong className="text-slate-900 font-extrabold">Ajit Kumar</strong>, a <strong className="text-slate-900 font-extrabold">DevOps Engineer and Full Stack Developer</strong> based in <strong className="text-slate-900 font-extrabold">Katihar, Bihar, India</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
              Whether you are evaluating my cloud security portfolio, hiring for full stack engineering roles, or exploring DSA solutions, your data is handled with the same security principles applied to production server infrastructure.
            </p>
          </Card>

          {/* Section 2 */}
          <Card className="p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <h2 className="text-xl font-black text-slate-900 mb-3">
              2. Information Collected
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm font-medium text-slate-600 leading-relaxed">
              <li><strong className="text-slate-900 font-extrabold">Contact Form:</strong> Name, email address, subject line, and message content submitted voluntarily.</li>
              <li><strong className="text-slate-900 font-extrabold">Direct Email:</strong> Messages sent directly to <code className="bg-slate-100 px-1.5 py-0.5 rounded-md font-mono text-xs text-indigo-600">support@ajitdev.com</code> or <code className="bg-slate-100 px-1.5 py-0.5 rounded-md font-mono text-xs text-indigo-600">ajitk23192@gmail.com</code>.</li>
              <li><strong className="text-slate-900 font-extrabold">Technical Logs:</strong> Anonymized browser headers, device types, and HTTPS access logs.</li>
            </ul>
          </Card>

          {/* Section 3 Table */}
          <Card className="p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <h2 className="text-xl font-black text-slate-900 mb-4">
              3. Third-Party Service Providers
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-black text-slate-900">Service</TableHead>
                  <TableHead className="font-black text-slate-900">Purpose</TableHead>
                  <TableHead className="font-black text-slate-900">Data Shared</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-extrabold text-slate-900">Resend / Nodemailer</TableCell>
                  <TableCell>Contact form transmission</TableCell>
                  <TableCell>Name, Email, Message</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-extrabold text-slate-900">Vercel Hosting</TableCell>
                  <TableCell>Edge deployment</TableCell>
                  <TableCell>Temporary HTTPS access logs</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          {/* Section 4 Security */}
          <Card className="p-6 md:p-8 rounded-3xl border border-slate-800 bg-slate-950 text-white shadow-xs">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-400" /> 4. Security &amp; Zero-Trust Best Practices
            </h2>
            <ul className="list-none p-0 m-0 space-y-2 font-mono text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> TLS 1.3 / HTTPS Strict Transport Security (HSTS)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Zero persistent database storage for form submissions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Zero third-party advertising tracking cookies
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Minimal data retention &amp; automated log expiration
              </li>
            </ul>
          </Card>

        </div>

      </div>
    </div>
  );
}