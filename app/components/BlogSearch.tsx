"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  X,
} from "lucide-react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, query]);

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

  const filteredPosts = useMemo(() => {
    let posts = initialPosts;
    if (query.trim() !== "") {
      const results = fuse.search(query);
      posts = results.map(r => r.item);
    }
    return posts.filter((post) => {
      return selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase();
    });
  }, [query, selectedCategory, initialPosts, fuse]);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const modalResults = useMemo(() => {
    if (modalQuery.trim() === "") return [];
    return fuse.search(modalQuery).map(r => r.item);
  }, [modalQuery, fuse]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const popularTerms = ["React", "DevOps", "Next.js", "Database", "AWS", "Security", "DSA"];

  return (
    <div className="flex flex-col gap-8">
      
      {/* Search Input & Category Pills */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-[400px]">
          <Input
            placeholder="Search articles (Press Ctrl+K)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={() => setIsOpen(true)}
            startAdornment={<Search className="w-5 h-5 text-indigo-600" />}
            endAdornment={
              <span className="font-extrabold text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded-md text-[10px]">
                Ctrl K
              </span>
            }
            className="h-12 rounded-2xl font-bold text-sm bg-white cursor-pointer"
          />
        </div>

        {/* Categories Badges */}
        <Card className="p-2 rounded-2xl border border-slate-200 bg-white flex flex-wrap gap-1.5 shadow-xs">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <Badge
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={isActive ? "primary" : "outline"}
                className="py-1 px-3 text-xs font-extrabold cursor-pointer transition-all active:scale-95"
              >
                {category}
              </Badge>
            );
          })}
        </Card>
      </div>

      {/* Blog Cards Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedPosts.map((post) => (
              <Card
                key={post.slug}
                className="p-6 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between transition-all duration-250 hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="primary" className="text-[10px] font-extrabold">
                      {post.category}
                    </Badge>
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-600" /> {post.readingTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="no-underline">
                    <h3 className="font-black text-slate-900 text-base mb-2 line-clamp-2 hover:text-indigo-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm font-medium text-slate-500 mb-4 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] font-extrabold border-slate-200">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> {post.date}
                  </span>
                  <Link href={`/blog/${post.slug}`} className="no-underline">
                    <Button variant="link" size="sm" className="gap-1 font-extrabold text-indigo-600">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
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
            No engineering articles found matching your criteria.
          </p>
        </Card>
      )}

      {/* SEARCH MODAL DIALOG */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent onClose={() => setIsOpen(false)} className="p-6 max-w-xl">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
            <Search className="w-5 h-5 text-indigo-600 shrink-0" />
            <input
              type="text"
              placeholder="Search articles by title, tag, or topic..."
              value={modalQuery}
              onChange={(e) => setModalQuery(e.target.value)}
              autoFocus
              className="w-full text-base font-black text-slate-900 border-0 outline-hidden placeholder:text-slate-400 bg-transparent"
            />
          </div>

          <div className="mt-4 max-h-[400px] overflow-y-auto">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">
              Popular Topics
            </span>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {popularTerms.map((term) => (
                <Badge
                  key={term}
                  variant="outline"
                  onClick={() => setModalQuery(term)}
                  className="cursor-pointer hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 py-1 px-2.5 text-xs font-bold"
                >
                  {term}
                </Badge>
              ))}
            </div>

            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-3">
              {modalQuery.trim() === "" ? "Recommended Articles" : `Results (${modalResults.length})`}
            </span>

            <div className="flex flex-col gap-2">
              {(modalQuery.trim() === "" ? initialPosts.slice(0, 4) : modalResults).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="no-underline" onClick={() => setIsOpen(false)}>
                  <Card className="p-3.5 rounded-2xl border border-slate-200 hover:bg-slate-50 hover:border-indigo-200 flex items-center justify-between transition-colors shadow-none">
                    <div>
                      <h4 className="font-black text-slate-900 text-xs sm:text-sm">
                        {post.title}
                      </h4>
                      <span className="text-[11px] font-medium text-slate-500 block mt-0.5">
                        {post.readingTime} · {post.date}
                      </span>
                    </div>
                    <Badge variant="primary" className="text-[10px] font-extrabold shrink-0 ml-2">
                      {post.category}
                    </Badge>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}
