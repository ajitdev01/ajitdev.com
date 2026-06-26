'use client';

import React, { useState, useMemo, useEffect } from "react";
import {
  FiCode, FiServer, FiDatabase, FiCloud, FiChevronDown, FiChevronUp,
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
    description: "400+ LeetCode problems — clean, optimized solutions",
    proficiency: 85,
    level: "Advanced",
    highlight: true,
    skills: [
      { name: "Arrays, Strings, Hashing", icon: FiCode, proficiency: 90, level: "Expert", note: "400+ solved" },
      { name: "Recursion & Backtracking", icon: FiActivity, proficiency: 85, level: "Advanced" },
      { name: "Trees & Graphs", icon: FiGitBranch, proficiency: 78, level: "Proficient", note: "Active growth" },
      { name: "Dynamic Programming", icon: FiTrendingUp, proficiency: 70, level: "Intermediate", note: "Daily practice" },
      { name: "Time/Space Optimization", icon: FiZap, proficiency: 85, level: "Advanced" },
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
    proficiency: 75,
    level: "Proficient",
    skills: [
      { name: "Git & GitHub Workflows", icon: FiGitBranch, proficiency: 90, level: "Expert" },
      { name: "GitHub Actions (CI/CD)", icon: SiGithubactions, proficiency: 72, level: "Proficient" },
      { name: "AWS (EC2, S3, IAM)", icon: SiAmazonaws, proficiency: 70, level: "Intermediate" },
      { name: "Vercel / Netlify", icon: FiCloud, proficiency: 88, level: "Advanced" },
      { name: "Docker basics", icon: SiDocker, proficiency: 65, level: "Intermediate" },
    ],
  },
];

const FILTERS = ["All", "Frontend", "Backend", "FullStack", "DSA", "Performance", "DevOps"] as const;
const filterLabels: Record<typeof FILTERS[number], string> = {
  All: "All Skills",
  Frontend: "Frontend",
  Backend: "Backend",
  FullStack: "Full Stack",
  DSA: "DSA • 400+ Problems",
  Performance: "SEO • Performance",
  DevOps: "Deployment • Workflow"
};

export default function SkillsSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<typeof FILTERS[number]>("All");

  const filteredSkills = useMemo(
    () => activeCategory === "All" ? skillCategories : skillCategories.filter((c) => c.filter === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ===== MOBILE FILTER BUTTON ===== */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={isMobileMenuOpen ? "Close filter" : "Open filter"}
      >
        {isMobileMenuOpen ? <FiChevronDown className="w-5 h-5" /> : <FiChevronUp className="w-5 h-5" />}
      </button>

      {/* ===== MOBILE MENU ===== */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-40 rounded-t-2xl max-h-[60vh] overflow-y-auto">
          <div className="p-6 space-y-5">
            <h2 className="text-xl font-bold text-gray-900">Filter Skills</h2>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => { setActiveCategory(f); setIsMobileMenuOpen(false); }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeCategory === f ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" : "bg-gray-100 text-gray-700"}`}
                >
                  {filterLabels[f]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== DESKTOP FILTER ===== */}
      <div className="hidden lg:flex flex-wrap justify-center gap-3 mb-16 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-md">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveCategory(f)}
            className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${activeCategory === f ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>

      {/* ===== SKILLS GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filteredSkills.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <div key={category.title} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur transition duration-500" aria-hidden="true" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-8 pb-6 border-b border-gray-100">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-md`}>
                    <CategoryIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-xl font-bold text-gray-900 mb-1">{category.title}</h2>
                      {category.highlight && (
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">CORE</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {category.skills.map((skill) => {
                    const SkillIcon = typeof skill.icon === 'function' ? skill.icon : FiCode;
                    return (
                      <li key={skill.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                            <SkillIcon className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <span className="font-medium text-gray-800 text-sm">
                              {skill.name}
                              {skill.highlight && <span className="ml-1 text-blue-500">★</span>}
                            </span>
                            {skill.note && <span className="text-xs text-gray-400 ml-2">({skill.note})</span>}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-600 hidden sm:block">{skill.level}</span>
                          <div className="w-14 h-1.5 bg-gray-200 rounded-full overflow-hidden" aria-hidden="true">
                            <div
                              style={{ width: `${skill.proficiency}%` }}
                              className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                            />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div className="pt-5 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-600 uppercase">Proficiency</span>
                    <div className="flex items-center gap-1.5">
                      <span className={`font-bold text-sm ${category.color}`}>{category.level}</span>
                      <span className="text-xs text-gray-450">({category.proficiency}%)</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden" aria-hidden="true">
                    <div
                      style={{ width: `${category.proficiency}%` }}
                      className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
