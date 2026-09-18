import React from "react";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function LatestBlogsSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-indigo-600" /> Latest Publications & Articles
            </h2>
            <p className="text-gray-500 text-sm mt-1">Deep-dives on coding, low-level compilation, and systems engineering</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-650 hover:text-indigo-800 transition-colors group"
          >
            Explore All Posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-650 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-650 pt-6 mt-6 border-t border-gray-50 group-hover:gap-2.5 transition-all">
                Read Article
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
