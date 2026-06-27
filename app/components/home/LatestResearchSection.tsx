import React from "react";
import Link from "next/link";
import { Cpu, Calendar, Clock, ArrowRight, Shield } from "lucide-react";
import { RESEARCH_DB } from "@/lib/research";

export default function LatestResearchSection() {
  // Convert Record to Array and take the first 3 entries (which cover Terraform, DevSecOps, etc.)
  const papers = Object.values(RESEARCH_DB).slice(0, 3);

  return (
    <section className="py-16 border-t border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <Cpu className="w-6 h-6 text-indigo-600" /> Technical Research & Whitepapers
            </h2>
            <p className="text-gray-500 text-sm mt-1">Systems design blueprints, low-level architecture audits, and cloud protocols</p>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-650 hover:text-indigo-800 transition-colors group"
          >
            Explore Systems Research
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {papers.map((paper) => {
            const Icon = paper.icon || Shield;
            return (
              <Link
                key={paper.slug}
                href={`/research/${paper.slug}`}
                className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {paper.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {paper.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50/50 px-2.5 py-0.5 rounded-full border border-indigo-100/50">
                      {paper.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-650 transition-colors leading-snug">
                    {paper.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {paper.summary}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-650 pt-6 mt-6 border-t border-gray-50 group-hover:gap-2.5 transition-all">
                  Read Whitepaper
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
