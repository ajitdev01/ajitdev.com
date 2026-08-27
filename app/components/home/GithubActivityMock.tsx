"use client";

import React from "react";
import { GitPullRequest, Code, Star } from "lucide-react";

const Github = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// Deterministic contribution pattern — fixed outside render to avoid react-hooks/purity violation.
// Repeating a seeded 28-value pattern across 140 cells produces a realistic-looking heatmap.
const ACTIVITY_PATTERN = [4, 0, 2, 1, 3, 0, 1, 2, 4, 0, 3, 1, 0, 2, 4, 1, 3, 0, 2, 1, 0, 4, 2, 3, 1, 0, 2, 3];
const ACTIVITY_DATA: number[] = Array.from({ length: 140 }, (_, i) => ACTIVITY_PATTERN[i % ACTIVITY_PATTERN.length]);

export default function GithubActivityMock() {

  const stats = [
    { label: "Total Contributions", value: "1,532+", icon: GitPullRequest },
    { label: "Public Repositories", value: "17", icon: Code },
    { label: "Coding Streak", value: "243 Days", icon: Star },
  ];

  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Github className="w-5 h-5 text-indigo-650" /> GitHub Activity Grid
          </h3>
          <p className="text-gray-500 text-xs mt-0.5">Commit metrics, contributions, and active repositories check</p>
        </div>
        <a
          href="https://github.com/ajitdev01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          Follow @ajitdev01 &rarr;
        </a>
      </div>

      {/* Grid columns */}
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex gap-1.5 min-w-[320px] h-20 select-none items-center justify-between">
          {ACTIVITY_DATA.map((commits, idx) => {
            const color =
              commits === 4
                ? "bg-indigo-600"
                : commits === 3
                ? "bg-indigo-400"
                : commits === 2
                ? "bg-indigo-250"
                : commits === 1
                ? "bg-indigo-100"
                : "bg-gray-100";

            return (
              <div
                key={idx}
                className={`w-2 h-6 rounded-xs transition-all duration-300 hover:scale-125 shrink-0 ${color}`}
                title={`${commits} commits on day ${idx + 1}`}
              />
            );
          })}
        </div>
        <div className="flex justify-between text-[10px] text-gray-400 mt-2 px-1">
          <span>Less Active</span>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 bg-gray-100 rounded-xs" />
            <span className="w-2 h-2 bg-indigo-100 rounded-xs" />
            <span className="w-2 h-2 bg-indigo-250 rounded-xs" />
            <span className="w-2 h-2 bg-indigo-400 rounded-xs" />
            <span className="w-2 h-2 bg-indigo-600 rounded-xs" />
          </div>
          <span>More Active</span>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="text-center sm:text-left space-y-1">
              <div className="flex flex-col sm:flex-row items-center gap-1.5 text-xs text-gray-500 font-medium">
                <Icon className="w-3.5 h-3.5 text-indigo-500" />
                <span className="text-[10px] sm:text-xs leading-none">{stat.label}</span>
              </div>
              <div className="text-lg font-black text-gray-900">{stat.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
