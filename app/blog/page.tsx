import React from "react";
import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Cloud,
  ShieldCheck,
  Code,
} from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import BlogSearch from "@/app/components/BlogSearch";
import JSONLD from "@/app/components/JSONLD";
import { PAGE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ajit Dev Technical Blog – DevOps, Coding, DSA",
  description:
    "Read Ajit Dev's technical blog: tutorials and guides on Node.js, Next.js, Docker, Kubernetes, algorithms, and system design.",
  keywords: [...PAGE_KEYWORDS.blog],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Ajit Dev Technical Blog – DevOps, Coding, DSA",
    description: "Read Ajit Dev's technical blog: tutorials and guides on Node.js, Next.js, Docker, Kubernetes, algorithms, and system design.",
    url: "https://ajitdev.com/blog",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajit Dev Technical Engineering Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Dev Technical Blog – DevOps, Coding, DSA",
    description: "Read Ajit Dev's technical blog: tutorials and guides on Node.js, Next.js, Docker, Kubernetes, algorithms, and system design.",
    images: ["https://ajitdev.com/og-image.png"],
  },
};

export default function BlogArchivePage() {
  const posts = getAllPosts();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/blog/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ajitdev.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://ajitdev.com/blog",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What topics does Ajit Dev blog about?",
        "answer": {
          "@type": "Answer",
          "text": "Ajit Dev blogs about DevOps pipelines, Cloud Security audits, AWS cloud configurations, Next.js optimization, and DSA competitive programming.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I request a custom guide or collaboration?",
        "answer": {
          "@type": "Answer",
          "text": "Yes! Reach out via the /contact page or email support@ajitdev.com or ajitk23192@gmail.com for writing collaborations, custom playbooks, or contracts.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-24">
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={faqSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO BANNER CARD */}
        <Card className="p-6 sm:p-10 mb-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-center shadow-xs">
          <div className="inline-flex p-4 rounded-2xl bg-indigo-100 text-indigo-600 mb-4">
            <BookOpen className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-2">
            Technical Engineering Blog
          </h1>

          <p className="text-sm sm:text-base font-extrabold text-slate-700 mb-4">
            Cloud Security • DevOps &amp; Containers • System Architecture • MERN &amp; Next.js
          </p>

          <div className="w-24 h-1 rounded-full bg-indigo-600 mx-auto mb-6" />

          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="py-1 px-3 text-xs gap-1.5">
              <Cloud className="w-3.5 h-3.5 text-blue-600" /> AWS &amp; Cloud DevOps
            </Badge>
            <Badge variant="success" className="py-1 px-3 text-xs gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Cloud Security &amp; Auditing
            </Badge>
            <Badge variant="outline" className="py-1 px-3 text-xs gap-1.5">
              <Code className="w-3.5 h-3.5 text-indigo-600" /> Next.js &amp; Type-Safe Systems
            </Badge>
          </div>
        </Card>

        {/* CLIENT SEARCH & ARTICLES GRID */}
        <BlogSearch initialPosts={posts} />

      </div>
    </div>
  );
}
