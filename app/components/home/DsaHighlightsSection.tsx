"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Flame, Star, ArrowRight, Zap, Target } from "lucide-react";

export default function DsaHighlightsSection() {
  const stats = {
    solved: 450,
    total: 1200,
    streak: 180,
    easy: 180,
    medium: 220,
    hard: 50,
  };

  // SVG parameters for Solved Circle gauge
  const radius = 60;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (stats.solved / stats.total) * circumference;

  const topics = [
    { name: "Arrays & Sliding Window", count: 120, progress: 85 },
    { name: "Dynamic Programming", count: 80, progress: 75 },
    { name: "Trees & BST Graphs", count: 95, progress: 80 },
    { name: "Binary Search & Sorting", count: 65, progress: 90 },
  ];

  return (
    <section className="py-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <Target className="w-6 h-6 text-indigo-600" /> Algorithmic Practice & DSA Highlights
            </h2>
            <p className="text-gray-500 text-sm mt-1">Real-time LeetCode status, difficulty split, and code topic mastery</p>
          </div>
          <Link
            href="/dsa"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-650 hover:text-indigo-800 transition-colors group"
          >
            Open DSA Dashboard
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Circular solved stats */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col items-center justify-center text-center space-y-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Problem Solving Ratio</h3>
            
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                {/* Background Ring */}
                <circle
                  cx="72"
                  cy="72"
                  r={radius}
                  stroke="#f3f4f6"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />
                {/* Foreground Progress Ring */}
                <motion.circle
                  cx="72"
                  cy="72"
                  r={radius}
                  stroke="url(#solvedGradient)"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="solvedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute flex flex-col items-center justify-center space-y-0.5">
                <span className="text-3xl font-black text-gray-900">{stats.solved}+</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Solved</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 font-medium">Out of {stats.total} total algorithm database targets</p>
          </div>

          {/* Streak & Level Cards */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-6 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-orange-600 uppercase bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100 inline-flex items-center gap-1">
                  <Flame className="w-3 h-3 text-orange-500 fill-orange-500" /> Consistency Streak
                </span>
                <div className="text-3xl font-black text-gray-900">{stats.streak} Days</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center animate-pulse">
                <Flame className="w-6 h-6 text-orange-500 fill-orange-500" />
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Difficulty breakdown</h4>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs text-gray-600 font-bold mb-1">
                    <span>Easy ({stats.easy})</span>
                    <span className="text-emerald-600">80%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "80%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-600 font-bold mb-1">
                    <span>Medium ({stats.medium})</span>
                    <span className="text-amber-500">65%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "65%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-600 font-bold mb-1">
                    <span>Hard ({stats.hard})</span>
                    <span className="text-rose-500">30%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: "30%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Topic Progress Bars */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-4 flex flex-col justify-between">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Top Algorithm Domains</h3>

            <div className="space-y-3.5">
              {topics.map((topic, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-gray-700">
                    <span className="truncate max-w-[190px]">{topic.name}</span>
                    <span className="text-indigo-600 font-extrabold">{topic.count} solved</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${topic.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" 
                    />
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://leetcode.com/ajitdev01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-indigo-650 bg-indigo-50 border border-indigo-150 hover:bg-indigo-650 hover:text-white rounded-xl transition-all"
            >
              Verify Public LeetCode Handle
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
