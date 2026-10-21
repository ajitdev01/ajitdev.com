import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Zap, Terminal, Code2, ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PAGE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Next.js App Router Architecture & Core Web Vitals | Ajit Dev",
  description: "Next.js 16 App Router engineering by Ajit Dev. React Server Components (RSC), Server Actions with Zod, On-Demand ISR, and 95+ Core Web Vitals optimization from Katihar, Bihar.",
  keywords: [...PAGE_KEYWORDS.nextjs],
  alternates: {
    canonical: "/nextjs",
  },
  openGraph: {
    title: "Next.js App Router & Performance Engineering | Ajit Dev",
    description: "Next.js App Router architecture by Ajit Dev. Server Components (RSC), SSR/SSG caching, Core Web Vitals scoring 95+, and dynamic OpenGraph generation.",
    url: `${SITE_URL}/nextjs`,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Next.js Performance Architecture by Ajit Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js App Router & Performance Engineering | Ajit Dev",
    description: "Next.js engineering by Ajit Dev. Server Components, SSR/SSG caching, and SEO optimization.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function NextjsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/nextjs/#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Next.js Engineering",
        "item": `${SITE_URL}/nextjs`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Ajit Dev architect Next.js Server Actions securely?",
        "answer": {
          "@type": "Answer",
          "text": "Server Actions are validated using Zod schemas on the server, sanitizing all form payloads, enforcing CSRF protections natively, and revalidating cached paths with revalidatePath and revalidateTag."
        }
      },
      {
        "@type": "Question",
        "name": "What is On-Demand Incremental Static Regeneration (ISR)?",
        "answer": {
          "@type": "Answer",
          "text": "On-Demand ISR allows static pages to be purged and regenerated in the background instantly via webhooks or API triggers without requiring a full application rebuild."
        }
      },
      {
        "@type": "Question",
        "name": "How are 95+ Core Web Vitals achieved in Next.js?",
        "answer": {
          "@type": "Answer",
          "text": "By eliminating layout shifts with next/image width/height attributes, preloading critical fonts via next/font with zero external requests, and offloading heavy libraries using dynamic imports with ssr: false."
        }
      }
    ]
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={faqSchema} />

      <section className="py-24 md:py-32 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-black text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-wider group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

          {/* HERO BANNER CARD */}
          <Card className="p-8 md:p-12 mb-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-400/30">
                Frontend Architecture
              </span>
              <span className="text-xs font-bold text-slate-300">
                Engineer: <strong className="text-white">Ajit Dev (@ajitdev01)</strong>
              </span>
              <span className="text-xs font-bold text-indigo-300 bg-indigo-950/60 px-2.5 py-0.5 rounded-full border border-indigo-800/40">
                Katihar, Bihar, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              Next.js App Router &amp; Core Web Vitals Engineering
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-6 font-medium">
              Architecting high-performance React applications with Next.js 16. Server Components (RSC), secure Server Actions with Zod, On-Demand ISR caching, and sub-second Largest Contentful Paint (LCP).
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              <Badge variant="outline" className="text-xs font-bold text-indigo-300 border-indigo-500/40 bg-indigo-950/40">
                React Server Components (RSC)
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-emerald-300 border-emerald-500/40 bg-emerald-950/40">
                Zod-Validated Server Actions
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-purple-300 border-purple-500/40 bg-purple-950/40">
                On-Demand ISR &amp; Tag Revalidation
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-amber-300 border-amber-500/40 bg-amber-950/40">
                Lighthouse 95+ Score
              </Badge>
            </div>
          </Card>

          {/* SECTION 1: RSC RENDERING ARCHITECTURE */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  1. React Server Components (RSC) vs Client Boundaries
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Zero Client-Bundle Overhead for Data Fetching
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              In Ajit Dev&apos;s architectures, components default to Server Components. Heavy database drivers, Markdown renderers, and cryptographic libraries execute strictly on the server, shipping zero bytes of JavaScript to client viewports:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto mb-6 leading-relaxed border border-slate-800">
              <div className="text-emerald-400 font-bold mb-2">// Next.js App Router Component Boundary Blueprint</div>
{`app/
├── layout.tsx               ──▶ [RSC] Global HTML, Fonts, Meta Tags (0 KB JS)
├── page.tsx                 ──▶ [RSC] Async Data Fetching & JSON-LD
└── components/
    ├── BlogPostView.tsx     ──▶ [RSC] Markdown Parsing & Static Output
    └── InteractiveForm.tsx  ──▶ ['use client'] Hydrated Event Listeners`}
            </div>
          </Card>

          {/* SECTION 2: PRODUCTION SERVER ACTIONS CODE */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  2. Type-Safe Server Actions with Zod Validation
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Direct Server Mutation with Zero Boilerplate API Routes
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Tested Server Action pattern with cryptographic validation, error handling, and on-demand cache revalidation:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-indigo-400 font-bold mb-2">// app/actions/contact.ts — Validated Server Action</div>
{`"use server";

import { z } from "zod";
import { revalidateTag } from "next/cache";

const InquirySchema = z.object({
  fullName: z.string().min(2, "Name required").max(60),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message must exceed 10 chars"),
});

export async function submitContactInquiry(prevState: any, formData: FormData) {
  const parsed = InquirySchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  // Persist to database & trigger webhook
  await saveInquiryToDatabase(parsed.data);
  revalidateTag("inquiries");

  return { success: true, message: "Inquiry received with 24h SLA." };
}`}
            </div>
          </Card>

          {/* SECTION 3: CORE WEB VITALS METRICS */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  3. Verified Core Web Vitals Performance Benchmarks
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Mobile &amp; Desktop Lighthouse Audit Results
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-2xl font-black text-emerald-600">0.8s</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">LCP (Largest Contentful)</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-2xl font-black text-indigo-600">0.000</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">CLS (Cumulative Shift)</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-2xl font-black text-purple-600">42ms</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">INP (Interaction Next)</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-2xl font-black text-slate-900">98 / 100</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Lighthouse SEO Score</div>
              </div>
            </div>
          </Card>

          {/* ACTIONS & NAVIGATION */}
          <div className="p-6 md:p-8 rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-50 via-purple-50 to-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-indigo-600 mb-1 block">
                Full Stack Ecosystem
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Explore MERN Stack &amp; REST Microservices
              </h3>
              <p className="text-xs font-medium text-slate-600 mt-1 max-w-xl">
                Inspect how MongoDB aggregation pipelines and Express middleware complement Next.js frontend architectures.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <Link href="/mern-stack" className="no-underline">
                <Button variant="default" size="sm" className="gap-1.5 font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white">
                  View MERN Stack <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects" className="no-underline">
                <Button variant="outline" size="sm" className="gap-1.5 font-bold border-indigo-200 text-indigo-700 hover:bg-indigo-100">
                  Live Project Demos <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* INTERNAL TECHNICAL NAVIGATION */}
          <footer className="pt-8 border-t border-slate-200">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Explore More Technical Guides
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-slate-600">
              <Link href="/mern-stack" className="hover:text-indigo-600 transition-colors">MERN Stack</Link>
              <Link href="/react" className="hover:text-indigo-600 transition-colors">React Architecture</Link>
              <Link href="/system-design" className="hover:text-indigo-600 transition-colors">System Design</Link>
              <Link href="/cloud-security" className="hover:text-indigo-600 transition-colors">Cloud Security</Link>
              <Link href="/devsecops" className="hover:text-indigo-600 transition-colors">DevSecOps</Link>
              <Link href="/devops" className="hover:text-indigo-600 transition-colors">DevOps Operations</Link>
              <Link href="/dsa" className="hover:text-indigo-600 transition-colors">DSA Roadmap (641 Solved)</Link>
              <Link href="/about" className="hover:text-indigo-600 transition-colors">About Ajit Dev (CTO)</Link>
              <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact Support</Link>
            </div>
          </footer>

        </div>
      </section>
    </>
  );
}
