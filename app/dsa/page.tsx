import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Award, Zap, Code, Star, LayoutGrid } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Data Structures & Algorithms (DSA) Dashboard | Ajit Dev",
  description: "Explore Ajit Dev's algorithm practice analytics. Features LeetCode stats (450+ solved), problem difficulty distributions, and a structured learning timeline.",
  alternates: {
    canonical: "https://ajitdev.com/dsa",
  },
};

const CATEGORIES = [
  { key: "arrays", name: "Arrays Data Structure", solved: 45, total: 50, color: "from-blue-500 to-indigo-500" },
  { key: "strings", name: "Strings Manipulation", solved: 38, total: 40, color: "from-purple-500 to-violet-500" },
  { key: "hashing", name: "Hashing & Hash Tables", solved: 30, total: 32, color: "from-pink-500 to-rose-500" },
  { key: "linked-list", name: "Linked Lists Nodes", solved: 25, total: 30, color: "from-emerald-500 to-teal-500" },
  { key: "stack", name: "Stack Data Structures", solved: 22, total: 25, color: "from-cyan-500 to-blue-500" },
  { key: "queue", name: "Queue Data Structures", solved: 15, total: 20, color: "from-amber-500 to-orange-500" },
  { key: "binary-search", name: "Binary Search Algorithms", solved: 28, total: 30, color: "from-rose-500 to-red-500" },
  { key: "backtracking", name: "Backtracking Algorithms", solved: 18, total: 20, color: "from-indigo-500 to-purple-500" },
  { key: "sliding-window", name: "Sliding Window", solved: 24, total: 25, color: "from-violet-500 to-fuchsia-500" },
  { key: "two-pointer", name: "Two Pointer Technique", solved: 26, total: 28, color: "from-teal-500 to-emerald-500" },
];

const CURRENTLY_LEARNING = [
  { topic: "Trees & BST", progress: 65, status: "Active Learning" },
  { topic: "Heaps / Priority Queues", progress: 40, status: "Active Learning" },
  { topic: "Greedy Algorithms", progress: 50, status: "Active Learning" },
  { topic: "Graph Algorithms", progress: 30, status: "Active Learning" },
  { topic: "Dynamic Programming (DP)", progress: 20, status: "Active Learning" },
  { topic: "System Design Concepts", progress: 45, status: "Active Learning" },
  { topic: "Object-Oriented Programming (OOP)", progress: 80, status: "Deepening" },
];

export default function DsaDashboardPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/dsa/#breadcrumb",
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
        "name": "DSA Hub",
        "item": "https://ajitdev.com/dsa",
      },
    ],
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />

      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen text-gray-800 relative overflow-hidden">
        {/* Soft Background Glows */}
        <div className="fixed inset-0 pointer-events-none select-none z-0" aria-hidden="true">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Nav */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Heading */}
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-indigo-100">
              <Code className="w-3.5 h-3.5" /> Problem Solving Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Data Structures & Algorithms Dashboard
            </h1>
            <p className="text-gray-655 text-sm sm:text-base leading-relaxed mt-2">
              Practicing complex problems in C++ and Java daily. Tracking coding statistics, patterns, and complexity tradeoffs.
            </p>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* LeetCode Distribution Card */}
            <div className="md:col-span-8 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    LeetCode Analytics
                  </h2>
                  <span className="text-xs text-indigo-600 font-semibold uppercase tracking-wide">Public Handle: ajitdev01</span>
                </div>
                
                {/* Visual Counters */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <div className="text-3xl font-black text-emerald-600">180</div>
                    <div className="text-[10px] text-gray-500 mt-1 uppercase font-bold">Easy Solved</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <div className="text-3xl font-black text-indigo-600">220</div>
                    <div className="text-[10px] text-gray-500 mt-1 uppercase font-bold">Medium Solved</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <div className="text-3xl font-black text-rose-600">50</div>
                    <div className="text-[10px] text-gray-500 mt-1 uppercase font-bold">Hard Solved</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-gray-700 mb-1 font-semibold">
                      <span>Easy Progress</span>
                      <span>180 / 200 (90%)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden border border-gray-200/50">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "90%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-gray-700 mb-1 font-semibold">
                      <span>Medium Progress</span>
                      <span>220 / 250 (88%)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden border border-gray-200/50">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: "88%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-gray-700 mb-1 font-semibold">
                      <span>Hard Progress</span>
                      <span>50 / 100 (50%)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden border border-gray-200/50">
                      <div className="h-full bg-rose-500 rounded-full" style={{ width: "50%" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-550">
                <span>Total Problems Solved: <strong className="text-gray-900 text-sm">450+</strong></span>
                <a
                  href="https://leetcode.com/u/ajitdev01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-650 hover:text-indigo-700 font-bold hover:underline"
                >
                  Verify on LeetCode →
                </a>
              </div>
            </div>

            {/* Streak & Achievements Card */}
            <div className="md:col-span-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-indigo-600" />
                  Achievements
                </h2>
                
                {/* Active streak */}
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100 text-indigo-600">
                    <Zap className="w-6 h-6 fill-indigo-100" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">180 Days</div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold">Daily Coding Streak</div>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">Contest Rating Peak</span>
                    <span className="font-bold text-gray-900">1,620+</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">NeetCode Roadmap</span>
                    <span className="font-bold text-gray-900">82% Complete</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">Contests Participated</span>
                    <span className="font-bold text-gray-900">12+ Matches</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Target Goal</div>
                <div className="text-xs text-gray-700 mt-1 font-semibold">Reach LeetCode Knight Badge (1800+ rating)</div>
              </div>
            </div>

          </div>

          {/* Contributions Heatmap Showcase */}
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-indigo-600" />
                Daily Practice Consistency Matrix
              </h2>
              <span className="text-xs text-gray-500">Mock coding heatmap matrix (2026 practice log)</span>
            </div>
            <div className="grid grid-flow-col grid-rows-7 gap-1.5 h-28 overflow-hidden select-none">
              {Array.from({ length: 280 }).map((_, i) => {
                const level = Math.random() > 0.35 ? (Math.random() > 0.6 ? (Math.random() > 0.7 ? "bg-indigo-500" : "bg-indigo-400") : "bg-indigo-200") : "bg-gray-100";
                return (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-xs transition-all duration-300 hover:scale-125 ${level}`}
                    title={`Day ${i + 1}`}
                  />
                );
              })}
            </div>
            <div className="flex items-center justify-between text-[10px] text-gray-400 mt-3 pt-2 border-t border-gray-100">
              <span>Less Active</span>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 bg-gray-100 rounded-xs" />
                <span className="w-2.5 h-2.5 bg-indigo-200 rounded-xs" />
                <span className="w-2.5 h-2.5 bg-indigo-400 rounded-xs" />
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-xs" />
              </div>
              <span>More Active</span>
            </div>
          </div>

          {/* Grid Layout of Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Category list */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                Topics Solved Breakdown
              </h2>
              <div className="space-y-4">
                {CATEGORIES.map((cat) => (
                  <div key={cat.key}>
                    <div className="flex justify-between items-center text-xs text-gray-700 mb-1">
                      <Link href={`/dsa/${cat.key}`} className="hover:text-indigo-600 font-semibold hover:underline">
                        {cat.name}
                      </Link>
                      <span className="text-[11px] text-gray-500">{cat.solved} / {cat.total} solved</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200/50">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: `${(cat.solved / cat.total) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Learning / Future topics */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-600" />
                Advanced Topics Roadmap (Currently Learning)
              </h2>
              <div className="space-y-4">
                {CURRENTLY_LEARNING.map((learn) => (
                  <div key={learn.topic}>
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="font-semibold text-gray-800">{learn.topic}</span>
                      <span className="text-[10px] text-gray-550 italic bg-gray-100 px-2 py-0.5 border border-gray-200/50 rounded-full">{learn.status}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200/50">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: `${learn.progress}%` }} />
                      </div>
                      <span className="text-[10px] font-bold text-gray-650 flex-shrink-0 w-8">{learn.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Study Notes Internal Linking Grid */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">Browse Topic Study Notes</h3>
            <div className="flex flex-wrap gap-2.5">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.key}
                  href={`/dsa/${cat.key}`}
                  className="px-3.5 py-2 bg-white hover:bg-indigo-650 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm"
                >
                  {cat.name}
                </Link>
              ))}
              <Link href="/dsa/trees" className="px-3.5 py-2 bg-white hover:bg-indigo-655 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">Trees Notes</Link>
              <Link href="/dsa/bst" className="px-3.5 py-2 bg-white hover:bg-indigo-655 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">BST Notes</Link>
              <Link href="/dsa/heap" className="px-3.5 py-2 bg-white hover:bg-indigo-655 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">Heaps Notes</Link>
              <Link href="/dsa/graph" className="px-3.5 py-2 bg-white hover:bg-indigo-655 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">Graphs Notes</Link>
              <Link href="/dsa/dynamic-programming" className="px-3.5 py-2 bg-white hover:bg-indigo-655 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">DP Notes</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
