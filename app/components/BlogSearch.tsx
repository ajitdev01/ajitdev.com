"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, Tag } from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface BlogSearchProps {
  initialPosts: BlogPost[];
}

export default function BlogSearch({ initialPosts }: BlogSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(initialPosts.map((p) => p.category)))];

  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Search and Category Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search blogs by title, tags, or content..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white shadow-sm transition-all text-gray-800 text-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                selectedCategory === category
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-white border-gray-200 text-gray-600 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blogs Output Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Category tag */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2.5 line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-[11px] text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded"
                    >
                      <Tag className="w-2.5 h-2.5 text-gray-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 border border-gray-200 rounded-2xl">
          <p className="text-gray-500 text-base">No blog posts found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
