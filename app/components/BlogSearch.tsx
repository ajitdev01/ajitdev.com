"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, Tag, X } from "lucide-react";
import { BlogPost } from "@/lib/blog";
import Fuse from "fuse.js";

interface BlogSearchProps {
  initialPosts: BlogPost[];
}

export default function BlogSearch({ initialPosts }: BlogSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [modalQuery, setModalQuery] = useState("");

  const modalInputRef = useRef<HTMLInputElement>(null);

  const categories = ["All", ...Array.from(new Set(initialPosts.map((p) => p.category)))];

  const fuse = useMemo(() => {
    return new Fuse(initialPosts, {
      keys: [
        { name: "title", weight: 0.4 },
        { name: "tags", weight: 0.25 },
        { name: "category", weight: 0.15 },
        { name: "description", weight: 0.1 },
        { name: "content", weight: 0.1 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
    });
  }, [initialPosts]);

  // Main Page filter
  const filteredPosts = useMemo(() => {
    let posts = initialPosts;
    if (query.trim() !== "") {
      const results = fuse.search(query);
      posts = results.map(r => r.item);
    }

    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesCategory;
    });
  }, [query, selectedCategory, initialPosts, fuse]);

  // Modal fuzzy search results
  const modalResults = useMemo(() => {
    if (modalQuery.trim() === "") {
      return [];
    }
    const results = fuse.search(modalQuery);
    return results.map(r => r.item);
  }, [modalQuery, fuse]);

  // Handle Escape shortcut to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Autofocus modal input when it opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        modalInputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const popularTerms = ["React", "DevOps", "Next.js", "Database", "AWS", "Security", "DSA"];

  const handlePopularTermClick = (term: string) => {
    setModalQuery(term);
    setTimeout(() => {
      modalInputRef.current?.focus();
    }, 10);
  };

  // Helper function for rendering highlighted text
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }
    const escapedHighlight = highlight.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(`(${escapedHighlight})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <mark key={index} className="bg-indigo-100 text-indigo-900 px-0.5 rounded font-semibold">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  // Recommendations for the modal suggestion state (when query is empty)
  const recommendations = useMemo(() => {
    return initialPosts.slice(0, 4);
  }, [initialPosts]);

  return (
    <div className="space-y-8">
      {/* Search and Category Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Input Button */}
        <div 
          onClick={() => setIsOpen(true)}
          className="relative w-full md:max-w-md cursor-pointer group"
        >
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-hover:text-indigo-500 transition-colors">
            <Search className="w-5 h-5" />
          </span>
          <input
            type="text"
            readOnly
            placeholder="Search blogs by title, tags, or content..."
            value={query}
            className="w-full pl-10 pr-20 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white shadow-sm transition-all text-gray-800 text-sm cursor-pointer"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-sans font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded">
              <span>Ctrl</span><span>K</span>
            </kbd>
          </div>
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

      {/* SEARCH MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
          {/* Backdrop */}
          <div 
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal content */}
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-gray-200/80 shadow-2xl overflow-hidden flex flex-col max-h-[75vh] animate-in fade-in zoom-in-95 duration-150">
            {/* Input Bar */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100 bg-gray-50/50">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                ref={modalInputRef}
                type="text"
                placeholder="Type to search articles..."
                value={modalQuery}
                onChange={(e) => setModalQuery(e.target.value)}
                className="flex-1 bg-transparent focus:outline-none text-base text-gray-800 placeholder-gray-400"
              />
              {modalQuery && (
                <button 
                  onClick={() => setModalQuery("")}
                  className="p-1 hover:bg-gray-200/60 rounded-full text-gray-400 hover:text-gray-600 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[9px] font-sans font-medium text-gray-400 bg-white border border-gray-200 rounded shadow-sm">
                ESC
              </kbd>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Popular Searches */}
              <div>
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                  Popular Queries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {popularTerms.map((term) => (
                    <button
                      key={term}
                      onClick={() => handlePopularTermClick(term)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                        modalQuery.toLowerCase() === term.toLowerCase()
                          ? "bg-indigo-50 border-indigo-200 text-indigo-700"
                          : "bg-white border-gray-200 text-gray-600 hover:border-indigo-300 hover:text-indigo-600"
                      }`}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Suggestions / Results */}
              {modalQuery.trim() === "" ? (
                <div>
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Recommended Articles
                  </h4>
                  <div className="space-y-2">
                    {recommendations.map((post) => (
                      <Link
                        key={`rec-${post.slug}`}
                        href={`/blog/${post.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/15 transition-all group"
                      >
                        <div className="flex flex-col gap-1 pr-4">
                          <span className="text-xs font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                            {post.title}
                          </span>
                          <span className="text-[11px] text-gray-500 line-clamp-1">
                            {post.description}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded uppercase flex-shrink-0">
                          {post.category}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : modalResults.length > 0 ? (
                <div>
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Search Results ({modalResults.length})
                  </h4>
                  <div className="space-y-2">
                    {modalResults.map((post) => (
                      <Link
                        key={`res-${post.slug}`}
                        href={`/blog/${post.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block p-3.5 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/15 transition-all group"
                      >
                        <div className="flex items-center justify-between gap-3 mb-1.5">
                          <h5 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                            {highlightText(post.title, modalQuery)}
                          </h5>
                          <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded uppercase flex-shrink-0">
                            {highlightText(post.category, modalQuery)}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-2.5">
                          {highlightText(post.description, modalQuery)}
                        </p>
                        <div className="flex items-center gap-3 text-[10px] text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readingTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 bg-gray-50 border border-gray-100 rounded-xl">
                  <p className="text-sm text-gray-500 font-semibold mb-1">No articles found matching "{modalQuery}"</p>
                  <p className="text-xs text-gray-400 mb-4">Try checking spelling or type another keyword.</p>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setModalQuery("")}
                      className="px-3 py-1 bg-white border border-gray-200 hover:border-indigo-500 hover:text-indigo-600 rounded-lg text-xs font-semibold text-gray-500 transition-colors"
                    >
                      Clear Search
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 bg-white border border-gray-200 rounded font-bold shadow-xs">ESC</span>
                to close
              </span>
              <span>
                Search powered by <strong className="text-gray-500">Fuse.js</strong>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
