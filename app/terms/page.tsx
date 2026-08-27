import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  ArrowLeft,
  Scale,
  Shield,
  CheckCircle2,
  HelpCircle,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Ajit Dev — DevOps Engineer Portfolio",
  description: "Complete terms and conditions for Ajit Dev's DevOps engineer portfolio. Covers intellectual property, acceptable use, liability, and legal compliance.",
  alternates: {
    canonical: "https://ajitdev.com/terms",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TermsOfService",
      "@id": "https://ajitdev.com/terms#terms",
      "name": "Terms of Service | Ajit Dev — DevOps Engineer Portfolio India",
      "url": "https://ajitdev.com/terms",
      "description": "Complete terms and conditions for Ajit Dev's DevOps engineer portfolio.",
      "inLanguage": ["en-IN", "en-US"],
      "dateModified": "2026-02-22",
      "datePublished": "2024-01-15"
    }
  ]
};

export default function Terms() {
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
        <Card className="p-6 sm:p-10 mb-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-center shadow-xs">
          <div className="inline-flex p-4 rounded-2xl bg-indigo-100 text-indigo-600 mb-4">
            <Scale className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-2">
            Terms of Service
          </h1>

          <p className="text-sm sm:text-base font-extrabold text-slate-700 mb-4">
            Ajit Kumar (@ajitdev01) • DevOps Engineer &amp; Cloud Security Developer
          </p>

          <div className="w-24 h-1 rounded-full bg-indigo-600 mx-auto mb-6" />

          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="py-1 px-3 text-xs gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-indigo-600" /> Legally Compliant
            </Badge>
            <Badge variant="success" className="py-1 px-3 text-xs gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-600" /> Indian IT Act 2000 &amp; GDPR Aligned
            </Badge>
            <Badge variant="warning" className="py-1 px-3 text-xs gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Freelance &amp; Consulting Ready
            </Badge>
          </div>
        </Card>

        {/* Content Section Cards */}
        <div className="flex flex-col gap-6">
          
          {/* Plain English Summary */}
          <Card className="p-6 md:p-8 rounded-3xl border border-indigo-200 bg-indigo-50/60 shadow-xs">
            <h2 className="text-lg font-black text-slate-900 mb-3">
              📌 Quick Plain English Summary
            </h2>
            <ul className="list-none p-0 m-0 space-y-2 text-sm font-medium text-slate-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-black">✓</span> This is an engineering portfolio showcasing software projects and cloud architectures.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-black">✓</span> Code and content belong to Ajit Kumar unless designated with an open-source license.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-black">✓</span> The contact form is for legitimate business and project inquiries.
              </li>
            </ul>
          </Card>

          {/* Section 1 */}
          <Card className="p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <h2 className="text-xl font-black text-slate-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
              By accessing or using <strong className="text-slate-900 font-extrabold">ajitdev.com</strong>, you agree to be bound by these Terms of Service. This portfolio website is operated by <strong className="text-slate-900 font-extrabold">Ajit Kumar</strong>, a DevOps Engineer and Full Stack Developer based in Katihar, Bihar, India.
            </p>
          </Card>

          {/* Section 2 */}
          <Card className="p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <h2 className="text-xl font-black text-slate-900 mb-3">
              2. Intellectual Property Rights
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
              All project documentation, architecture diagrams, and custom code examples presented on this site remain the intellectual property of Ajit Kumar unless an explicit MIT, Apache, or GPL license is specified in the corresponding GitHub repository.
            </p>
          </Card>

          {/* Section 3 FAQs Accordion */}
          <Card className="p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" /> Frequently Asked Questions
            </h2>

            <Accordion type="single">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Can I hire Ajit Kumar for DevOps or Full Stack consulting?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Ajit is available for full-time roles, contract work, and DevOps consulting. Contact support@ajitdev.com or use the contact form.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Are the portfolio projects open source?
                </AccordionTrigger>
                <AccordionContent>
                  Public repositories are available on GitHub under open-source licenses. Refer to each repository&apos;s LICENSE file for commercial usage terms.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

        </div>

      </div>
    </div>
  );
}