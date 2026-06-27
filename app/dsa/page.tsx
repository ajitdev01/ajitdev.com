"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Award, Zap, Code, Star, LayoutGrid, BarChart2, Calendar, Target, CheckCircle2, ChevronRight } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

const DSA_TOPICS = [
  { key: "arrays", name: "Arrays Data Structure", solved: 45, total: 50, completed: true, details: "Contiguous memory lists, sliding windows, and pointer operations." },
  { key: "strings", name: "Strings Manipulation", solved: 38, total: 40, completed: true, details: "Pattern matching algorithms, rolling hashes, and subsegment parsing." },
  { key: "hashing", name: "Hashing & Hash Tables", solved: 30, total: 32, completed: true, details: "Key-value indexes, resolving collisions, and custom bucket hashes." },
  { key: "two-pointer", name: "Two Pointer Technique", solved: 26, total: 28, completed: true, details: "Optimizing search spacing, sliding thresholds, and midpoint bounds." },
  { key: "sliding-window", name: "Sliding Window", solved: 24, total: 25, completed: true, details: "Dynamic expansion subsegments, finding maximum/minimum bounds in linear time." },
  { key: "binary-search", name: "Binary Search Algorithms", solved: 28, total: 30, completed: true, details: "Logarithmic ranges search, sorting checkpoints, and search boundaries." },
  { key: "stack", name: "Stack Data Structures", solved: 22, total: 25, completed: true, details: "LIFO queue memory arrays, matching brackets, and monotonic layouts." },
  { key: "queue", name: "Queue Data Structures", solved: 15, total: 20, completed: true, details: "FIFO buffers, priority queues, and double-ended queues." },
  { key: "linked-list", name: "Linked Lists Nodes", solved: 25, total: 30, completed: true, details: "Singly, doubly, and circular linked chains, loops detection, and node reversals." },
  { key: "recursion", name: "Recursion Loops", solved: 18, total: 20, completed: true, details: "Call stack execution chains, divide-and-conquer divisions, and recursive trees." },
  { key: "backtracking", name: "Backtracking Algorithms", solved: 18, total: 20, completed: true, details: "Recursive path finding, state restorations, and solving constraint puzzles." },
  { key: "trees", name: "Tree Data Structures", solved: 12, total: 30, completed: false, details: "Hierarchical parent-child node maps, traversing structures, and paths mapping." },
  { key: "bst", name: "Binary Search Trees", solved: 10, total: 25, completed: false, details: "Ordered tree nodes, balance conditions, AVL models, and node operations." },
  { key: "heap", name: "Heap & Priority Queues", solved: 8, total: 20, completed: false, details: "Min/Max binary heaps, bubble operations, and top-K elements extraction." },
  { key: "greedy", name: "Greedy Algorithms", solved: 12, total: 25, completed: false, details: "Optimal localized decisions, minimizing paths, and coin change solutions." },
  { key: "graph", name: "Graph Data Structures", solved: 8, total: 35, completed: false, details: "Nodes connected by edges, DFS/BFS traversals, path routing algorithms." },
  { key: "dynamic-programming", name: "Dynamic Programming (DP)", solved: 6, total: 40, completed: false, details: "Subproblem dependencies, tabulating states, and memory memoization." },
];

const DAILY_STATS = [
  { date: "June 27, 2026", solved: 4, difficulty: "2 Medium, 2 Easy", focus: "Binary Trees" },
  { date: "June 26, 2026", solved: 3, difficulty: "1 Hard, 2 Medium", focus: "Monotonic Stack" },
  { date: "June 25, 2026", solved: 5, difficulty: "4 Easy, 1 Medium", focus: "Two Pointers" },
  { date: "June 24, 2026", solved: 3, difficulty: "2 Medium, 1 Easy", focus: "Sliding Window" },
  { date: "June 23, 2026", solved: 4, difficulty: "1 Hard, 3 Medium", focus: "Graphs BFS" },
];

export default function DsaDashboardPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>("arrays");

  const activeTopicInfo = useMemo(() => {
    return DSA_TOPICS.find(t => t.key === selectedTopic) || DSA_TOPICS[0];
  }, [selectedTopic]);

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

  // SVG Chart calculation details (Easy: 180, Med: 220, Hard: 50 -> Total: 450)
  const totalSolved = 450;
  const easySolved = 180;
  const medSolved = 220;
  const hardSolved = 50;

  const easyPct = (easySolved / totalSolved) * 100;
  const medPct = (medSolved / totalSolved) * 100;
  const hardPct = (hardSolved / totalSolved) * 100;

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />

      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen text-gray-800 relative overflow-hidden">
        {/* Glow Effects */}
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

          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-indigo-100">
              <Code className="w-3.5 h-3.5" /> Problem Solving Engine
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Data Structures & Algorithms Dashboard
            </h1>
            <p className="text-gray-655 text-sm sm:text-base leading-relaxed mt-2">
              Competitive coding progress log. I practice daily algorithm structures in C++ and Java, focusing on runtime optimization, computational space hierarchies, and code maintainability.
            </p>
          </div>

          {/* Stats Summary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* LeetCode Distribution Chart Card */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row lg:flex-col xl:flex-row items-center gap-6 justify-between">
              <div className="space-y-4 flex-1">
                <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Difficulty Breakdown
                </h2>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-emerald-600 font-semibold">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Easy
                    </span>
                    <span className="font-bold text-gray-900">{easySolved} ({easyPct.toFixed(0)}%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-indigo-600 font-semibold">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Medium
                    </span>
                    <span className="font-bold text-gray-900">{medSolved} ({medPct.toFixed(0)}%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-rose-600 font-semibold">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Hard
                    </span>
                    <span className="font-bold text-gray-900">{hardSolved} ({hardPct.toFixed(0)}%)</span>
                  </div>
                </div>
              </div>

              {/* Dynamic SVG Donut Chart */}
              <div className="relative w-32 h-32 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Background Circle */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                  
                  {/* Easy Segment */}
                  <circle
                    cx="18" cy="18" r="15.915" fill="none"
                    stroke="#10b981" strokeWidth="3"
                    strokeDasharray={`${easyPct} ${100 - easyPct}`}
                    strokeDashoffset="0"
                  />
                  
                  {/* Med Segment */}
                  <circle
                    cx="18" cy="18" r="15.915" fill="none"
                    stroke="#6366f1" strokeWidth="3"
                    strokeDasharray={`${medPct} ${100 - medPct}`}
                    strokeDashoffset={`-${easyPct}`}
                  />
                  
                  {/* Hard Segment */}
                  <circle
                    cx="18" cy="18" r="15.915" fill="none"
                    stroke="#f43f5e" strokeWidth="3"
                    strokeDasharray={`${hardPct} ${100 - hardPct}`}
                    strokeDashoffset={`-${easyPct + medPct}`}
                  />
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent">
                  <span className="text-xl font-black text-gray-900">{totalSolved}</span>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Solved</span>
                </div>
              </div>
            </div>

            {/* Coding Achievements Card */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-indigo-600" /> Performance & Consistency
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-center">
                    <div className="text-2xl font-black text-indigo-600">180+</div>
                    <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mt-0.5">Day Streak</div>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-center">
                    <div className="text-2xl font-black text-purple-600">1,620</div>
                    <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mt-0.5">Contest Peak</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-500 font-medium">Daily Coding Goal</span>
                <span className="font-bold text-indigo-600 flex items-center gap-1">
                  <Target className="w-3.5 h-3.5" /> 3-5 Problems / Day
                </span>
              </div>
            </div>

            {/* Target Goals Card */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Target className="w-4 h-4 text-rose-500" /> Milestone Tracking
                </h2>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span>Completed Topics</span>
                      <span>11 / 17 (65%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: "65%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span>Next Level (Knight Badge)</span>
                      <span>1620 / 1800 (90%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500" style={{ width: "90%" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 text-right">
                <a
                  href="https://leetcode.com/u/ajitdev01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-indigo-650 hover:text-indigo-800 hover:underline"
                >
                  Verify LeetCode Profile &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Daily Consistency Matrix (Heatmap) */}
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-indigo-600" /> Daily Practice Matrix
              </h2>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Mock practice cells log (2026)</span>
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

          {/* Interactive Learning Progress Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
            
            {/* Topic selection list */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-4">
              <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" /> Target Roadmap & Topic Select
              </h2>
              
              <div className="max-h-[380px] overflow-y-auto pr-2 space-y-1.5 scrollbar-thin">
                {DSA_TOPICS.map((topic) => (
                  <button
                    key={topic.key}
                    onClick={() => setSelectedTopic(topic.key)}
                    className={`w-full p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      selectedTopic === topic.key
                        ? "bg-indigo-550 border-indigo-550 text-white shadow-sm"
                        : "bg-white border-gray-150 hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {topic.completed ? (
                        <CheckCircle2 className={`w-4 h-4 ${selectedTopic === topic.key ? "text-white" : "text-emerald-500"}`} />
                      ) : (
                        <Zap className={`w-4 h-4 ${selectedTopic === topic.key ? "text-white" : "text-amber-500 animate-pulse"}`} />
                      )}
                      {topic.name}
                    </span>
                    <span className={`text-[10px] font-bold ${selectedTopic === topic.key ? "text-white/80" : "text-gray-400"}`}>
                      {topic.solved} / {topic.total}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Topic Details display card */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between h-full min-h-[460px]">
              <div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded-md">
                      {activeTopicInfo.completed ? "Topic Completed" : "Currently Learning"}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">{activeTopicInfo.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-gray-900">{((activeTopicInfo.solved / activeTopicInfo.total) * 100).toFixed(0)}%</div>
                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Completion</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Topical Focus & Focus areas</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{activeTopicInfo.details}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Practice Progress Bar</h4>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200/50">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: `${(activeTopicInfo.solved / activeTopicInfo.total) * 100}%` }} />
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-400 mt-1.5 font-bold">
                      <span>Solved: {activeTopicInfo.solved}</span>
                      <span>Target: {activeTopicInfo.total}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <span className="text-xs text-gray-500 font-medium">Detailed study notes, blueprints, and templates available.</span>
                <Link
                  href={`/dsa/${activeTopicInfo.key}`}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1 group"
                >
                  Read Study Notes
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

          {/* Daily Coding Stats Table */}
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm mb-12">
            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-6">
              <Calendar className="w-4 h-4 text-indigo-600" /> Daily Coding Stats & Log
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-400 font-bold uppercase tracking-wider">
                    <th className="pb-3 font-semibold">Date Logged</th>
                    <th className="pb-3 font-semibold">Problems Solved</th>
                    <th className="pb-3 font-semibold">Difficulty Split</th>
                    <th className="pb-3 font-semibold text-right">Topics of Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {DAILY_STATS.map((stat, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3.5 font-bold text-gray-900">{stat.date}</td>
                      <td className="py-3.5 font-semibold">
                        <span className="px-2 py-0.5 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700">
                          {stat.solved} Solved
                        </span>
                      </td>
                      <td className="py-3.5 text-gray-500 font-medium">{stat.difficulty}</td>
                      <td className="py-3.5 text-right font-bold text-indigo-650">{stat.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Study Notes Internal Links */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
            <h3 className="text-sm font-black text-indigo-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" /> Browse Detailed DSA Chapters
            </h3>
            <div className="flex flex-wrap gap-2">
              {DSA_TOPICS.map((topic) => (
                <Link
                  key={topic.key}
                  href={`/dsa/${topic.key}`}
                  className="px-3 py-1.5 bg-white hover:bg-indigo-650 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm"
                >
                  {topic.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
