import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Newspaper, ArrowUpRight, Rss, Search, Calendar, Tag } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Latest Technology News Feed | Ajit Dev",
  description: "Browse the latest industry updates across Artificial Intelligence, Cloud Computing, Cybersecurity, DevOps tools, and Software Engineering frameworks.",
  alternates: {
    canonical: "https://ajitdev.com/news",
  },
};

const NEWS_MOCK_DATA = [
  {
    id: 1,
    title: "OpenAI Announces GPT-5 with Advanced Reasoning and Multimodal Actions",
    summary: "OpenAI has officially launched its next-generation reasoning model, GPT-5. The model boasts a 10x improvement in complex programming tasks and multi-agent coordination capabilities.",
    category: "AI",
    source: "TechCrunch",
    date: "June 27, 2026",
    link: "https://openai.com",
    tag: "OpenAI"
  },
  {
    id: 2,
    title: "Google Cloud Spanner Introduces Real-Time Multi-Region Graph Database Queries",
    summary: "At Google Cloud Next, Google announced graph database capabilities for Cloud Spanner, allowing developers to query highly interconnected datasets at global scale with zero downtime.",
    category: "Cloud",
    source: "Google Blog",
    date: "June 25, 2026",
    link: "https://cloud.google.com",
    tag: "Google"
  },
  {
    id: 3,
    title: "Critical Linux Kernel Privilege Escalation Vulnerability Patched (CVE-2026-9912)",
    summary: "Security researchers have identified and patched a zero-day memory corruption vulnerability in the Linux network packet processing queue that allowed root privilege escalation.",
    category: "Cybersecurity",
    source: "CVE Registry",
    date: "June 22, 2026",
    link: "https://kernel.org",
    tag: "Linux"
  },
  {
    id: 4,
    title: "Next.js 17 Beta Released with Dynamic Partial Hydration & Wasm Routing Engine",
    summary: "Vercel announced the beta of Next.js 17, featuring partial hydration that cuts Largest Contentful Paint (LCP) in half by streaming Wasm-compiled route descriptors.",
    category: "Programming",
    source: "Vercel Blog",
    date: "June 18, 2026",
    link: "https://nextjs.org",
    tag: "Next.js"
  },
  {
    id: 5,
    title: "Kubernetes 1.34 Core DNS Optimizations for 100k Node Scale",
    summary: "The CNCF has released Kubernetes 1.34. The key improvement is a total rewrite of CoreDNS connection cache pools, resolving lookup bottlenecks at massive scale.",
    category: "DevOps",
    source: "Kubernetes Blog",
    date: "June 15, 2026",
    link: "https://kubernetes.io",
    tag: "Kubernetes"
  },
  {
    id: 6,
    title: "Microsoft Open-Sources Copilot Agents SDK for Custom DevSecOps Pipelines",
    summary: "Microsoft has open-sourced its Copilot Agents SDK, allowing developers to construct AI-driven code auditing agents that hook directly into GitHub Actions pipelines.",
    category: "AI",
    source: "Microsoft Dev",
    date: "June 10, 2026",
    link: "https://microsoft.com",
    tag: "Microsoft"
  },
  {
    id: 7,
    title: "Docker Desktop Integrates Automatic WebAssembly WasmEdge Compilers",
    summary: "The latest Docker Desktop release includes native compilation runtimes for WasmEdge, enabling developers to package lightweight Wasm applications in standard containers.",
    category: "DevOps",
    source: "Docker Blog",
    date: "June 05, 2026",
    link: "https://docker.com",
    tag: "Docker"
  },
  {
    id: 8,
    title: "Terraform 2.0 Introduces Declarative Security Drift Management Engines",
    summary: "HashiCorp released Terraform 2.0. The release is headlined by automated drift-management systems that automatically roll back un-versioned cloud infrastructure alterations.",
    category: "DevOps",
    source: "HashiCorp Blog",
    date: "May 28, 2026",
    link: "https://hashicorp.com",
    tag: "Terraform"
  }
];

const CATEGORIES = ["All", "AI", "Cloud", "Cybersecurity", "Programming", "DevOps"];

export default function TechNewsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/news/#breadcrumb",
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
        "name": "News Hub",
        "item": "https://ajitdev.com/news",
      },
    ],
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />

      <section className="py-16 md:py-24 bg-[#030712] min-h-screen text-slate-100 relative overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
          <div className="absolute top-[15%] right-[20%] w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[15%] left-[20%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Nav */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-indigo-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Heading */}
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-500/10 text-pink-400 text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-pink-500/20">
              <Newspaper className="w-3.5 h-3.5" /> Industry Tracker
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Real-time Technology News Feed
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
              Stay updated on system design guidelines, cloud security warnings, artificial intelligence breakthroughs, and package update announcements.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 border-b border-white/5 pb-6">
            
            {/* Category selection */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
                    cat === "All"
                      ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                      : "bg-slate-900 border-white/5 text-slate-350 hover:text-indigo-400 hover:border-indigo-500/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Static RSS notice */}
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/50 border border-white/5 px-4 py-2 rounded-xl">
              <Rss className="w-4 h-4 text-orange-400" />
              <span>RSS / API Sync Interface Ready</span>
            </div>

          </div>

          {/* News Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {NEWS_MOCK_DATA.map((news) => (
              <div
                key={news.id}
                className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {news.date}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/5 text-slate-300 font-semibold text-[10px]">
                      <Tag className="w-3 h-3 text-indigo-400" />
                      {news.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                    <a href={news.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-1.5 hover:text-indigo-400">
                      {news.title}
                      <ArrowUpRight className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
                    </a>
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {news.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs pt-6 mt-6 border-t border-white/5 text-slate-500 font-semibold">
                  <span>Source: {news.source}</span>
                  <span className="text-indigo-400 hover:text-indigo-300 font-bold uppercase tracking-wider text-[10px]">
                    {news.category} Category
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
