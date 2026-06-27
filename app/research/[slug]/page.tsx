import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Calendar, User } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { notFound } from "next/navigation";
import { RESEARCH_DB } from "@/lib/research";

// Define the static slugs for SSG
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
      canonical: `https://ajitdev.com/research/${slug}`,
    },
  };
}


export default async function ResearchDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const paper = RESEARCH_DB[slug];

  if (!paper) {
    notFound();
  }

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
    <>
      <JSONLD schema={breadcrumbSchema} />

      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen text-gray-800 relative overflow-hidden">
        {/* Soft Background Glow */}
        <div className="fixed inset-0 pointer-events-none select-none z-0" aria-hidden="true">
          <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Nav */}
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-650 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Research List
          </Link>

          {/* Header Metadata */}
          <div className="max-w-4xl mb-12 border-b border-gray-200 pb-8">
            <div className="flex flex-wrap gap-4 items-center text-xs text-gray-500 mb-4">
              <span className="px-2.5 py-1 bg-purple-50 text-purple-700 font-bold rounded-lg border border-purple-100 uppercase">
                {paper.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {paper.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {paper.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              {paper.title}
            </h1>
            <p className="text-gray-655 text-sm sm:text-base leading-relaxed mt-4">
              {paper.summary}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar Table of Contents */}
            <aside className="lg:col-span-3 hidden lg:block sticky top-28 bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                Table of Contents
              </h3>
              <nav aria-label="Table of contents navigation">
                <ul className="space-y-3">
                  {paper.sections.map((sect) => (
                    <li key={sect.id}>
                      <a
                        href={`#${sect.id}`}
                        className="text-xs text-gray-600 hover:text-indigo-650 transition-colors block leading-tight font-medium"
                      >
                        {sect.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content Area */}
            <article className="lg:col-span-9 space-y-10 max-w-none">
              {paper.sections.map((sect) => (
                <section key={sect.id} id={sect.id} className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                    {sect.heading}
                  </h2>
                  <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                    {sect.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                  {sect.codeBlock && (
                    <div className="relative rounded-xl overflow-hidden border border-gray-250 shadow-2xl bg-gray-950 p-4 font-mono text-xs text-slate-100">
                      <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-white/10 pb-2 mb-3">
                        <span>LANGUAGE: {sect.codeBlock.lang.toUpperCase()}</span>
                        <span>READ-ONLY</span>
                      </div>
                      <pre className="overflow-x-auto whitespace-pre">
                        <code>{sect.codeBlock.code}</code>
                      </pre>
                    </div>
                  )}
                </section>
              ))}

              {/* Author Info footer */}
              <div className="mt-12 p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm">
                  AK
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                    Written by Ajit Kumar
                    <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-bold rounded-full border border-indigo-150">Cloud & Security Specialist</span>
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    BCA cloud computing and security student, studying kernel namespaces, networking protocols, security pipelines, and competitive programming solutions.
                  </p>
                </div>
              </div>
            </article>

          </div>

        </div>
      </section>
    </>
  );
}
