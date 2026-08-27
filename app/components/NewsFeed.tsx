"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import {
  Search,
  Calendar,
  Rss,
  ExternalLink,
} from "lucide-react";

import { NEWS_DATABASE, CATEGORIES } from "@/lib/news";

export default function NewsFeed() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

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
    <div className="flex flex-col gap-8">
      
      {/* Controls Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
        
        {/* Search */}
        <div className="w-full lg:w-[360px]">
          <Input
            placeholder="Search news by topic or keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            startAdornment={<Search className="w-4 h-4 text-indigo-600" />}
            className="h-11 rounded-2xl font-bold text-xs bg-white"
          />
        </div>

        {/* Category Filter Badges */}
        <Card className="p-2 rounded-2xl border border-slate-200 bg-white flex flex-wrap justify-center gap-1.5 shadow-xs">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <Badge
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                variant={isActive ? "primary" : "outline"}
                className="py-1 px-3 text-xs font-extrabold cursor-pointer transition-all active:scale-95"
              >
                {cat}
              </Badge>
            );
          })}
        </Card>

        {/* Dynamic RSS Status */}
        <Badge variant="warning" className="py-2 px-3 text-xs font-extrabold gap-1.5">
          <Rss className="w-3.5 h-3.5 text-amber-500" /> RSS Feed Pipeline Active
        </Badge>
      </div>

      {/* News Cards Grid */}
      {paginatedNews.length > 0 ? (
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paginatedNews.map((news) => (
              <Card
                key={news.id}
                className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between transition-all duration-250 hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" /> {news.date}
                    </span>
                    <Badge variant="outline" className="text-[10px] font-extrabold border-indigo-200 text-indigo-700 bg-indigo-50/50">
                      #{news.tag}
                    </Badge>
                  </div>

                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 no-underline mb-3"
                  >
                    <h3 className="font-black text-slate-900 text-lg leading-snug group-hover:text-indigo-600 transition-colors">
                      {news.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                  </a>

                  <p className="text-xs sm:text-sm font-medium text-slate-600 mb-6 leading-relaxed">
                    {news.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-500">
                    Source: <strong className="text-slate-900 font-extrabold">{news.source}</strong>
                  </span>
                  <Badge variant="secondary" className="text-[10px] font-extrabold">
                    {news.category}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-4">
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(p) => setCurrentPage(p)}
              />
            </div>
          )}
        </div>
      ) : (
        <Card className="p-12 text-center rounded-3xl border border-slate-200 bg-white">
          <p className="text-base font-extrabold text-slate-500">
            No news articles match your queries.
          </p>
        </Card>
      )}

    </div>
  );
}
