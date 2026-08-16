'use client';

import React, { useState, useMemo } from "react";
import {
  FiCode, FiServer, FiDatabase, FiCloud,
  FiLayers, FiGlobe, FiSmartphone, FiPackage, FiCpu, FiSend, FiLock,
  FiGitPullRequest, FiTool, FiGitBranch, FiTrendingUp, FiZap, FiBarChart2, FiActivity
} from "@/lib/icons";

const SiAmazonaws = () => <FiCloud className="w-4 h-4" />;
const SiDocker = () => <FiPackage className="w-4 h-4" />;
const SiGithubactions = () => <FiGitBranch className="w-4 h-4" />;

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  proficiency: number;
  level: string;
  highlight?: boolean;
  note?: string;
}

interface SkillCategory {
  title: string;
  filter: string;
  icon: React.ComponentType<any>;
  gradient: string;
  color: string;
  description: string;
  proficiency: number;
  level: string;
  highlight?: boolean;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    filter: "Frontend",
    icon: FiCode,
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-600",
    description: "Modern, performant, and accessible UI systems",
    proficiency: 90,
    level: "Expert",
    skills: [
      { name: "React.js / Next.js", icon: FiCpu, proficiency: 90, level: "Expert", highlight: true },
      { name: "TypeScript", icon: FiCode, proficiency: 85, level: "Advanced" },
      { name: "Tailwind CSS / Bootstrap", icon: FiLayers, proficiency: 92, level: "Expert" },
      { name: "HTML5 / CSS3 / JS (ES6+)", icon: FiGlobe, proficiency: 95, level: "Expert" },
      { name: "Responsive & Mobile-First", icon: FiSmartphone, proficiency: 90, level: "Expert" },
      { name: "Component Architecture", icon: FiPackage, proficiency: 88, level: "Advanced" },
    ],
  },
  {
    title: "Backend & API Development",
    filter: "Backend",
    icon: FiServer,
    gradient: "from-emerald-500 to-teal-500",
    color: "text-emerald-600",
    description: "Scalable server-side logic and database design",
    proficiency: 85,
    level: "Advanced",
    skills: [
      { name: "Node.js / Express.js", icon: FiServer, proficiency: 88, level: "Advanced" },
      { name: "RESTful API Design", icon: FiSend, proficiency: 90, level: "Expert" },
      { name: "JWT / Auth Systems", icon: FiLock, proficiency: 85, level: "Advanced" },
      { name: "MongoDB (NoSQL)", icon: FiDatabase, proficiency: 87, level: "Advanced" },
      { name: "MySQL (SQL)", icon: FiDatabase, proficiency: 82, level: "Advanced" },
      { name: "Middleware & Error Handling", icon: FiGitPullRequest, proficiency: 85, level: "Advanced" },
    ],
  },
  {
    title: "Full Stack Mastery",
    filter: "FullStack",
    icon: FiLayers,
    gradient: "from-purple-500 to-violet-500",
    color: "text-purple-600",
    description: "End-to-end application delivery with MERN & LAMP",
    proficiency: 88,
    level: "Advanced",
    skills: [
      { name: "MERN Stack (MongoDB, Express, React, Node)", icon: FiPackage, proficiency: 90, level: "Expert", highlight: true },
      { name: "LAMP Stack (Linux, Apache, MySQL, PHP)", icon: FiServer, proficiency: 82, level: "Advanced" },
      { name: "Next.js (SSR/SSG)", icon: FiCpu, proficiency: 88, level: "Advanced", highlight: true },
      { name: "REST + GraphQL basics", icon: FiGitBranch, proficiency: 75, level: "Proficient" },
      { name: "Full-stack debugging", icon: FiTool, proficiency: 88, level: "Advanced" },
    ],
  },
  {
    title: "DSA & Problem Solving",
    filter: "DSA",
    icon: FiBarChart2,
    gradient: "from-amber-500 to-orange-500",
    color: "text-amber-600",
    description: "632+ LeetCode & NeetCode problems — clean O(log N) solutions",
    proficiency: 88,
    level: "Advanced",
    highlight: true,
    skills: [
      { name: "Arrays, Strings, Hashing", icon: FiCode, proficiency: 92, level: "Expert", note: "514+ LC / 118 NC" },
      { name: "Recursion & Backtracking", icon: FiActivity, proficiency: 85, level: "Advanced" },
      { name: "Trees & Graphs", icon: FiGitBranch, proficiency: 80, level: "Advanced", note: "Active growth" },
      { name: "Dynamic Programming", icon: FiTrendingUp, proficiency: 75, level: "Proficient", note: "Daily practice" },
      { name: "Time/Space Optimization", icon: FiZap, proficiency: 88, level: "Advanced" },
    ],
  },
  {
    title: "Performance & SEO Engineering",
    filter: "Performance",
    icon: FiTrendingUp,
    gradient: "from-rose-500 to-pink-500",
    color: "text-rose-600",
    description: "Lightning-fast pages, Core Web Vitals, and structured data",
    proficiency: 88,
    level: "Advanced",
    skills: [
      { name: "Technical SEO (meta, schema, JSON-LD)", icon: FiGlobe, proficiency: 90, level: "Expert", highlight: true },
      { name: "Core Web Vitals Optimization", icon: FiActivity, proficiency: 85, level: "Advanced" },
      { name: "Next.js SSR/SSG", icon: FiCpu, proficiency: 88, level: "Advanced" },
      { name: "Lazy loading / Code splitting", icon: FiZap, proficiency: 87, level: "Advanced" },
      { name: "PageSpeed Insights optimization", icon: FiBarChart2, proficiency: 90, level: "Expert" },
    ],
  },
  {
    title: "Deployment & Workflow (Supporting)",
    filter: "DevOps",
    icon: FiCloud,
    gradient: "from-indigo-500 to-blue-500",
    color: "text-indigo-600",
    description: "CI/CD, cloud basics, and clean version control",
    proficiency: 78,
    level: "Proficient",
    skills: [
      { name: "Git & GitHub Workflows", icon: FiGitBranch, proficiency: 90, level: "Expert" },
      { name: "GitHub Actions (CI/CD)", icon: SiGithubactions, proficiency: 75, level: "Proficient" },
      { name: "AWS (EC2, S3, IAM)", icon: SiAmazonaws, proficiency: 72, level: "Proficient" },
      { name: "Vercel / Netlify", icon: FiCloud, proficiency: 88, level: "Advanced" },
      { name: "Docker basics", icon: SiDocker, proficiency: 68, level: "Intermediate" },
    ],
  },
];

const FILTERS = ["All", "Frontend", "Backend", "FullStack", "DSA", "Performance", "DevOps"] as const;
const filterLabels: Record<typeof FILTERS[number], string> = {
  All: "All Skills",
  Frontend: "Frontend",
  Backend: "Backend",
  FullStack: "Full Stack",
  DSA: "DSA • 632+ Solved",
  Performance: "SEO • Performance",
  DevOps: "Deployment • Workflow"
};

const getLevelBadgeStyle = (level: string) => {
  switch (level) {
    case "Expert": return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "Advanced": return "bg-indigo-50 text-indigo-700 border-indigo-200";
    case "Proficient": return "bg-blue-50 text-blue-700 border-blue-200";
    case "Intermediate": return "bg-amber-50 text-amber-700 border-amber-200";
    default: return "bg-slate-50 text-slate-700 border-slate-200";
  }
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<typeof FILTERS[number]>("All");

  const filteredSkills = useMemo(
    () => activeCategory === "All" ? skillCategories : skillCategories.filter((c) => c.filter === activeCategory),
    [activeCategory]
  );

  return (
    <>
      {/* ===== PURE TAILWIND CATEGORY FILTER BADGES ===== */}
      <div className="p-3 mb-8 rounded-2xl border border-slate-200 bg-white flex flex-wrap justify-center gap-2 shadow-xs">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveCategory(f)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none ${
              activeCategory === f
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
            }`}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>

      {/* ===== PURE TAILWIND SKILLS GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredSkills.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <div
              key={category.title}
              className="p-6 rounded-3xl border border-slate-200/90 bg-white flex flex-col justify-between h-full shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start gap-3.5 mb-5 pb-4 border-b border-slate-100">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="font-black text-slate-900 text-base">
                        {category.title}
                      </h3>
                      {category.highlight && (
                        <span className="px-2 py-0.5 text-[10px] font-black bg-amber-100 text-amber-800 rounded-md uppercase tracking-wider">
                          CORE
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill List */}
                <div className="flex flex-col gap-2.5 mb-6">
                  {category.skills.map((skill) => {
                    const SkillIcon = typeof skill.icon === 'function' ? skill.icon : FiCode;
                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center justify-between gap-2 hover:bg-slate-100/70 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 overflow-hidden flex-1">
                          <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center flex-shrink-0 shadow-2xs">
                            <SkillIcon className="w-3.5 h-3.5 text-slate-600" />
                          </div>
                          <span className="font-extrabold text-slate-800 text-xs truncate">
                            {skill.name} {skill.highlight && <span className="text-amber-500">★</span>}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-black border ${getLevelBadgeStyle(skill.level)}`}>
                            {skill.level}
                          </span>
                          <div className="w-12 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer Category Mastery */}
              <div className="pt-3.5 border-t border-slate-100">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">
                    Category Mastery
                  </span>
                  <span className="text-xs font-black text-indigo-600">
                    {category.level} ({category.proficiency}%)
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${category.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
