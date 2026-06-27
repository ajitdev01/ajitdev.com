import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Shield, Cpu, Layers, Key, Terminal } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Technical Research & System Whitepapers | Ajit Dev",
  description: "Read technical research articles by Ajit Kumar. Detailed publications on Docker internals, Kubernetes architectures, Linux kernel system calls, and Zero Trust security models.",
  alternates: {
    canonical: "https://ajitdev.com/research",
  },
};

import { RESEARCH_DB } from "@/lib/research";

const RESEARCH_PAPERS = Object.values(RESEARCH_DB);


export default function ResearchIndexPage() {
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
    <>
      <JSONLD schema={breadcrumbSchema} />

      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen text-gray-800 relative overflow-hidden">
        {/* Soft Background Glow Effects */}
        <div className="fixed inset-0 pointer-events-none select-none z-0" aria-hidden="true">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Nav */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-650 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Heading */}
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-purple-100">
              <BookOpen className="w-3.5 h-3.5" /> Technical Publications
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Systems Engineering & Cloud Security Research
            </h1>
            <p className="text-gray-655 text-sm sm:text-base leading-relaxed mt-2">
              Whitepapers, logical blueprints, and detailed write-ups on container virtualization, kernel spaces, IAM trees, and zero-trust security layouts.
            </p>
          </div>

          {/* Grid of articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESEARCH_PAPERS.map((paper) => {
              const Icon = paper.icon;
              return (
                <div
                  key={paper.slug}
                  className="group relative rounded-3xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="px-2 py-0.5 bg-purple-50 border border-purple-100 rounded-lg text-purple-700 font-semibold">
                        {paper.category}
                      </span>
                      <span className="text-gray-500 font-semibold">{paper.date}</span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-purple-600 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-indigo-650 transition-colors leading-tight">
                      <Link href={`/research/${paper.slug}`}>{paper.title}</Link>
                    </h2>

                    <p className="text-gray-600 text-xs leading-relaxed">
                      {paper.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-6 mt-6 border-t border-gray-150">
                    <span className="text-gray-500 font-semibold">{paper.readTime}</span>
                    <Link
                      href={`/research/${paper.slug}`}
                      className="text-indigo-600 hover:text-indigo-755 font-bold hover:underline"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
