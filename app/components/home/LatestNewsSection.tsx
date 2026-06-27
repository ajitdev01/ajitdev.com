import React from "react";
import Link from "next/link";
import { Newspaper, Calendar, Tag, ArrowRight, ExternalLink } from "lucide-react";
import { NEWS_DATABASE } from "@/lib/news";

export default function LatestNewsSection() {
  const news = NEWS_DATABASE.slice(0, 3);

  return (
    <section className="py-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <Newspaper className="w-6 h-6 text-indigo-600" /> Technology News & Releases
            </h2>
            <p className="text-gray-500 text-sm mt-1">Industry releases, tools, AI innovations, and DevOps updates</p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-650 hover:text-indigo-800 transition-colors group"
          >
            Open News Hub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-650 font-bold uppercase text-[9px] tracking-wider">
                    <Tag className="w-3 h-3 text-indigo-500" />
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-650 transition-colors leading-snug">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-1.5 hover:text-indigo-800"
                  >
                    {item.title}
                  </a>
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-gray-400 pt-6 mt-6 border-t border-gray-50">
                <span>Source: {item.source}</span>
                <span className="text-indigo-600 font-bold uppercase tracking-wider text-[10px]">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
