import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BookOpen,
  ArrowRight,
  Shield,
  Cpu,
  Terminal,
  Clock,
} from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { RESEARCH_DB } from "@/lib/research";
import { PAGE_KEYWORDS } from "@/lib/seo";
import { getCollectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ajit Dev Research – Cloud Security & Systems Engineering",
  description: "Explore Ajit Dev's research articles: deep dives on Docker containerization, Kubernetes, cloud security (Zero Trust, IAM), DevOps best practices, and system design.",
  keywords: [...PAGE_KEYWORDS.research],
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Ajit Dev Research – Cloud Security & Systems Engineering",
    description: "Explore Ajit Dev's research articles: deep dives on Docker containerization, Kubernetes, cloud security (Zero Trust, IAM), DevOps best practices, and system design.",
    url: "https://ajitdev.com/research",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajit Dev Systems Engineering & Security Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Dev Research – Cloud Security & Systems Engineering",
    description: "Explore Ajit Dev's research articles: deep dives on Docker, Kubernetes, Zero Trust, and AWS IAM.",
    images: ["https://ajitdev.com/og-image.png"],
  },
};

const RESEARCH_PAPERS = Object.values(RESEARCH_DB);

export default function ResearchIndexPage() {
  const collectionSchema = getCollectionPageSchema(
    "Ajit Dev Research – Cloud Security & Systems Engineering",
    "Explore Ajit Dev's research whitepapers on Docker containerization, Kubernetes, cloud security, and system architecture.",
    "https://ajitdev.com/research"
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/research/#breadcrumb",
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
        "name": "Research",
        "item": "https://ajitdev.com/research",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-24">
      <JSONLD schema={collectionSchema} />
      <JSONLD schema={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Link */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="small" className="gap-2 text-slate-500 font-extrabold">
              <ArrowLeft className="w-4 h-4 text-indigo-600" /> Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Banner Card */}
        <Card className="p-6 sm:p-10 mb-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-purple-50 via-white to-indigo-50 text-center shadow-xs">
          <div className="inline-flex p-4 rounded-2xl bg-purple-100 text-purple-600 mb-4">
            <BookOpen className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-2">
            Systems Engineering &amp; Security Research
          </h1>

          <p className="text-sm sm:text-base font-extrabold text-slate-700 mb-4">
            Whitepapers • Docker Internals • Linux Kernel Namespaces • Zero-Trust IAM Architectures
          </p>

          <div className="w-24 h-1 rounded-full bg-purple-600 mx-auto mb-6" />

          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="py-1 px-3 text-xs gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-600" /> Virtualization &amp; Containers
            </Badge>
            <Badge variant="success" className="py-1 px-3 text-xs gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-600" /> Zero Trust Security
            </Badge>
            <Badge variant="primary" className="py-1 px-3 text-xs gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-600" /> Linux Cgroups &amp; Namespaces
            </Badge>
          </div>
        </Card>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_PAPERS.map((paper) => {
            const IconComp = paper.icon;
            return (
              <Card
                key={paper.slug}
                className="p-6 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between transition-all duration-250 hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Badge variant="secondary" className="text-[10px] font-extrabold">
                      {paper.category}
                    </Badge>
                    <span className="text-xs font-bold text-slate-400">{paper.date}</span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <Link href={`/research/${paper.slug}`} className="no-underline">
                    <h3 className="font-black text-slate-900 text-lg leading-snug mb-2 hover:text-purple-600 transition-colors">
                      {paper.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm font-medium text-slate-500 line-clamp-3 leading-relaxed mb-4">
                    {paper.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {paper.readTime}
                  </span>
                  <Link href={`/research/${paper.slug}`} className="no-underline">
                    <Button variant="link" size="sm" className="gap-1 font-extrabold text-purple-600">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </div>
  );
}
