import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Activity, Code, Star, CheckCircle } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "LeetCode DSA Statistics & Metrics | Ajit Dev",
  description: "Review Ajit Dev's LeetCode coding stats. Solved 450+ problems, algorithm complexity optimizations, tree/graph structures, and competitive contest ratings.",
  alternates: {
    canonical: "https://ajitdev.com/leetcode",
  },
};

export default function LeetcodePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/leetcode/#breadcrumb",
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
        "name": "leetcode",
        "item": "https://ajitdev.com/leetcode",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Ajit Dev's LeetCode handle?",
        "answer": {
          "@type": "Answer",
          "text": "His public LeetCode handle is ajitdev01, showing 450+ solved problems."
        }
      }
    ]
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={faqSchema} />

      <section className="py-16 md:py-24 bg-[#030712] min-h-screen text-slate-100 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-indigo-400 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-full border border-indigo-500/20 uppercase tracking-wider">
                <Code className="w-3.5 h-3.5" /> Algorithms
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              LeetCode DSA Metrics
            </h1>
          </div>

          <div className="p-8 mb-8 glass-panel space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Activity className="w-5 h-5 text-indigo-400" />
                Problem Solving Overview
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Problem-solving metrics dashboard showing algorithm solutions, complexity configurations, and visual progress trackers. Currently solved <strong className="text-indigo-400">450+ problems</strong> with a daily coding streak.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-3">Topical Roadmap & Milestones</h3>
              <ul className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Array Complexity Checks
                </li>
                <li className="flex items-center gap-2 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Dynamic Stack Traversal
                </li>
                <li className="flex items-center gap-2 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Graph Depth Search
                </li>
                <li className="flex items-center gap-2 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Dynamic Programming Memoization
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-3">Notes & Implementation Guidelines</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                We track problem solving daily to train memory optimization, study algorithmic complexity tradeoffs, and design optimal runtime systems.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-3">Learning Resources & Access</h3>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://leetcode.com/u/ajitdev01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-slate-900 border border-white/5 hover:border-indigo-500/25 text-xs font-semibold text-slate-300 rounded-xl transition-colors cursor-pointer"
                >
                  LeetCode Profile Link →
                </a>
                <Link
                  href="/dsa"
                  className="px-3.5 py-2 bg-slate-900 border border-white/5 hover:border-indigo-500/25 text-xs font-semibold text-slate-300 rounded-xl transition-colors cursor-pointer"
                >
                  DSA Practice Board →
                </Link>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-3xl p-6 mb-8">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Star className="w-4 h-4 text-indigo-400" />
              Related Subpages & Showcases
            </h3>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/devops" className="px-3.5 py-2 bg-slate-900/60 hover:bg-indigo-500/10 hover:text-indigo-455 border border-white/5 rounded-xl text-xs font-semibold text-slate-300 transition-all shadow-sm">DevOps Operations</Link>
              <Link href="/aws" className="px-3.5 py-2 bg-slate-900/60 hover:bg-indigo-500/10 hover:text-indigo-455 border border-white/5 rounded-xl text-xs font-semibold text-slate-300 transition-all shadow-sm">AWS Cloud Setup</Link>
              <Link href="/docker" className="px-3.5 py-2 bg-slate-900/60 hover:bg-indigo-500/10 hover:text-indigo-455 border border-white/5 rounded-xl text-xs font-semibold text-slate-300 transition-all shadow-sm">Docker Containerization</Link>
              <Link href="/system-design" className="px-3.5 py-2 bg-slate-900/60 hover:bg-indigo-500/10 hover:text-indigo-455 border border-white/5 rounded-xl text-xs font-semibold text-slate-300 transition-all shadow-sm">System Design Patterns</Link>
            </div>
          </div>

          {/* Contextual internal linking */}
          <footer className="mt-12 pt-8 border-t border-white/5">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Explore More Technical Guides</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
              <Link href="/devops" className="hover:text-indigo-400 transition-colors">DevOps Engineering</Link>
              <Link href="/aws" className="hover:text-indigo-400 transition-colors">AWS Operations</Link>
              <Link href="/cloud-security" className="hover:text-indigo-400 transition-colors">Cloud Security</Link>
              <Link href="/cyber-security" className="hover:text-indigo-400 transition-colors">Cybersecurity</Link>
              <Link href="/docker" className="hover:text-indigo-400 transition-colors">Docker Containers</Link>
              <Link href="/kubernetes" className="hover:text-indigo-400 transition-colors">Kubernetes Pods</Link>
              <Link href="/terraform" className="hover:text-indigo-400 transition-colors">Terraform IaC</Link>
              <Link href="/leetcode" className="hover:text-indigo-400 transition-colors">LeetCode Stats</Link>
              <Link href="/dsa" className="hover:text-indigo-400 transition-colors">DSA Roadmap</Link>
              <Link href="/system-design" className="hover:text-indigo-400 transition-colors">System Design</Link>
              <Link href="/about" className="hover:text-indigo-400 transition-colors">About Ajit Dev</Link>
              <Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact Me</Link>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
