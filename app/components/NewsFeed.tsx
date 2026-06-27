"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Search, Calendar, Tag, Rss, ArrowUpRight } from "lucide-react";

import { NEWS_DATABASE, CATEGORIES } from "@/lib/news";

export default function NewsFeed() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // Reset page when criteria changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query, selectedCategory]);

  const filteredNews = useMemo(() => {
    return NEWS_DATABASE.filter((news) => {
      const matchesCategory =
        selectedCategory === "All" ||
        news.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesQuery =
        query.trim() === "" ||
        news.title.toLowerCase().includes(query.toLowerCase()) ||
        news.summary.toLowerCase().includes(query.toLowerCase()) ||
        news.tag.toLowerCase().includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNews.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredNews, currentPage]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-8">
      {/* Controls Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between border-b border-gray-200 pb-6">
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search news by topic or keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-800 text-xs shadow-sm transition-all"
          />
        </div>

        {/* Category selection */}
        <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
                cat === selectedCategory
                  ? "bg-indigo-650 text-white border-indigo-650 shadow-md shadow-indigo-500/20"
                  : "bg-white border-gray-200 text-gray-600 hover:text-indigo-650 hover:bg-indigo-50/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic RSS status */}
        <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 border border-gray-150 px-4 py-2 rounded-xl">
          <Rss className="w-4 h-4 text-orange-500" />
          <span className="font-semibold text-[10px]">CMS / RSS API Pipeline Active</span>
        </div>
      </div>

      {/* News Cards Grid */}
      {paginatedNews.length > 0 ? (
        <div className="space-y-10">
          <div className="grid md:grid-cols-2 gap-8">
            {paginatedNews.map((news) => (
              <div
                key={news.id}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1 text-gray-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {news.date}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-semibold text-[10px] uppercase">
                      <Tag className="w-3 h-3 text-indigo-500" />
                      {news.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-1.5 hover:text-indigo-650"
                    >
                      {news.title}
                      <ArrowUpRight className="w-4 h-4 text-gray-400 shrink-0 mt-1 group-hover:text-indigo-500 transition-colors" />
                    </a>
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {news.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs pt-6 mt-6 border-t border-gray-100 text-gray-550 font-semibold">
                  <span>Source: {news.source}</span>
                  <span className="text-indigo-600 font-bold uppercase tracking-wider text-[10px]">
                    {news.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 pt-6 border-t border-gray-150">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 rounded-xl border border-gray-200 bg-white text-xs font-bold text-gray-650 disabled:opacity-40 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                &larr; Prev
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? "bg-indigo-650 border-indigo-650 text-white shadow-md shadow-indigo-500/20"
                        : "bg-white border-gray-200 text-gray-600 hover:border-indigo-300 hover:text-indigo-600"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 rounded-xl border border-gray-200 bg-white text-xs font-bold text-gray-650 disabled:opacity-40 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Next &rarr;
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 border border-gray-200 rounded-2xl">
          <p className="text-gray-500 text-sm font-semibold">No news articles match your queries.</p>
          <p className="text-gray-400 text-xs mt-1">Try another category or verify spelling checks.</p>
        </div>
      )}
    </div>
  );
}
