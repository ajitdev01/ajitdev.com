import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, Calendar } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { RESEARCH_DB } from "@/lib/research";
import { getTechArticleSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return Object.keys(RESEARCH_DB).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const paper = RESEARCH_DB[slug];
  if (!paper) return {};
  
  return {
    title: `${paper.title} | Ajit Dev Research`,
    description: paper.summary,
    alternates: {
      canonical: `/research/${slug}`,
    },
    openGraph: {
      title: `${paper.title} — Ajit Dev Research`,
      description: paper.summary,
      type: "article",
      url: `https://ajitdev.com/research/${slug}`,
      publishedTime: paper.date,
      authors: ["https://ajitdev.com"],
      images: [
        {
          url: "https://ajitdev.com/og-image.png",
          width: 1200,
          height: 630,
          alt: paper.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${paper.title} | Ajit Dev Research`,
      description: paper.summary,
      images: ["https://ajitdev.com/og-image.png"],
    },
  };
}

export default async function ResearchDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const paper = RESEARCH_DB[slug];

  if (!paper) {
    notFound();
  }

  const techArticleSchema = getTechArticleSchema(paper);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://ajitdev.com/research/${slug}/#breadcrumb`,
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
      {
        "@type": "ListItem",
        "position": 3,
        "name": paper.title,
        "item": `https://ajitdev.com/research/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white pt-32 md:pt-40 pb-24">
      <JSONLD schema={techArticleSchema} />
      <JSONLD schema={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Link */}
        <div className="mb-6">
          <Link href="/research">
            <Button variant="ghost" size="small" className="gap-2 text-slate-500 font-extrabold">
              <ArrowLeft className="w-4 h-4 text-indigo-600" /> Back to Research List
            </Button>
          </Link>
        </div>

        {/* Paper Header Card */}
        <Card className="p-6 sm:p-10 mb-8 rounded-3xl border border-slate-200 bg-slate-50 shadow-xs">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary" className="font-extrabold">{paper.category}</Badge>
            <Badge variant="outline" className="font-bold gap-1">
              <Calendar className="w-3.5 h-3.5" /> {paper.date}
            </Badge>
            <Badge variant="outline" className="font-bold gap-1">
              <Clock className="w-3.5 h-3.5" /> {paper.readTime}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-3 leading-tight">
            {paper.title}
          </h1>

          <p className="text-base sm:text-lg font-bold text-slate-600 leading-relaxed">
            {paper.summary}
          </p>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar TOC */}
          <div className="hidden lg:block lg:col-span-3">
            <Card className="p-6 rounded-2xl border border-slate-200 bg-slate-50 sticky top-32 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-3">
                <BookOpen className="w-4 h-4 text-purple-600" /> Table of Contents
              </span>
              <nav className="flex flex-col gap-2">
                {paper.sections.map((sect) => (
                  <a
                    key={sect.id}
                    href={`#${sect.id}`}
                    className="text-xs font-bold text-slate-600 hover:text-purple-600 no-underline transition-colors leading-snug"
                  >
                    {sect.heading}
                  </a>
                ))}
              </nav>
            </Card>
          </div>

          {/* Main Paper Content */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            {paper.sections.map((sect) => (
              <div key={sect.id} id={sect.id} className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-200 pb-2">
                  {sect.heading}
                </h2>
                {sect.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed text-base font-medium">
                    {p}
                  </p>
                ))}
                {sect.codeBlock && (
                  <Card className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs overflow-x-auto shadow-xs">
                    <div className="flex justify-between text-slate-400 text-[11px] font-bold pb-2 mb-3 border-b border-slate-800">
                      <span>LANGUAGE: {sect.codeBlock.lang.toUpperCase()}</span>
                      <span>READ-ONLY</span>
                    </div>
                    <pre className="m-0">
                      <code>{sect.codeBlock.code}</code>
                    </pre>
                  </Card>
                )}
              </div>
            ))}

            {/* Author Bio Card */}
            <Card className="p-6 rounded-3xl border border-slate-200 bg-slate-50 mt-4 shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-black shrink-0">
                  AK
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-base">
                    Written by Ajit Kumar <Badge variant="primary" className="ml-2 text-[10px]">Cloud &amp; Security Specialist</Badge>
                  </h4>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    BCA cloud computing &amp; security student studying kernel namespaces, networking protocols, security pipelines, and competitive programming.
                  </p>
                </div>
              </div>
            </Card>

          </div>

        </div>

      </div>
    </div>
  );
}
