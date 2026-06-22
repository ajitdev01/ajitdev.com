'use client';

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCode, FiServer, FiDatabase, FiCloud, FiShield, FiTrendingUp,
  FiCheck, FiInfo, FiSend, FiCpu, FiLayers, FiGitBranch,
  FiUserCheck, FiChevronDown, FiChevronUp, FiTerminal, FiGlobe,
  FiLock, FiZap, FiGitPullRequest, FiPackage, FiMonitor, FiTool,
  FiAward, FiBookOpen, FiCompass, FiTarget, FiMapPin, FiBriefcase,
  FiCalendar, FiStar, FiArrowRight, FiBarChart2, FiActivity, FiSmartphone
} from "react-icons/fi";

// Simple icon components for cloud/devops tools (supporting role)
const SiAmazonaws = () => <FiCloud className="w-4 h-4" />;
const SiDocker = () => <FiPackage className="w-4 h-4" />;
const SiGithubactions = () => <FiGitBranch className="w-4 h-4" />;

// ========== STRUCTURED DATA ==========
const skillsForSchema = [
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "TypeScript",
  "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "REST APIs", "JWT",
  "AWS EC2", "AWS S3", "Docker", "Git", "GitHub Actions", "Data Structures", "Algorithms",
  "LeetCode", "Problem Solving", "System Design", "Performance Optimization", "SEO"
];

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

// ========== SKILL DATA (FULL STACK + DSA FOCUSED) ==========
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
    title: "Full Stack Stack Mastery",
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

const stats = [
  { value: "400+", label: "LeetCode Problems Solved", icon: FiBarChart2, gradient: "from-blue-500/15 to-cyan-500/15", color: "text-blue-600", highlight: true },
  { value: "150+", label: "Days Active Streak", icon: FiCalendar, gradient: "from-emerald-500/15 to-teal-500/15", color: "text-emerald-600" },
  { value: "15+", label: "Production Projects", icon: FiPackage, gradient: "from-purple-500/15 to-violet-500/15", color: "text-purple-600" },
  { value: "4+", label: "Tech Stacks Mastered", icon: FiCode, gradient: "from-amber-500/15 to-orange-500/15", color: "text-amber-600" },
];

// ========== CERTIFICATION & LEARNING TARGETS ==========
const nextTargets = [
  "Complete 500+ LeetCode problems (Graphs, DP mastery)",
  "Build and deploy a production-scale Next.js + Node.js app",
  "Master full-stack TypeScript in real-world projects",
  "AWS Certified Developer Associate",
  "Contribute to open source React/Next.js libraries"
];

// ========== MAIN COMPONENT ==========
const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<typeof FILTERS[number]>("All");

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

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
    <div
      style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease" }}
      className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <main className="flex-grow pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

          {/* ===== PROFESSIONAL SUMMARY ===== */}
          <div className="text-center mb-16">
            <div className="inline-flex p-5 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-2xl mb-6 border border-white/40">
              <FiCode className="text-4xl text-blue-600" />
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Skills & Expertise
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              MERN • LAMP • Next.js • <span className="font-semibold text-amber-600">400+ DSA problems solved</span>
            </p>

            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full" />

            <div className="flex justify-center gap-3 mt-8 flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700 shadow-sm">
                <FiMapPin className="w-4 h-4 text-blue-500" />
                Katihar, Bihar, India
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700 shadow-sm">
                <FiBriefcase className="w-4 h-4 text-emerald-500" />
                Full Stack Engineer • Problem Solver
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-200 text-sm text-amber-700 shadow-sm">
                <FiBarChart2 className="w-4 h-4" />
                LeetCode 400+ • Active Streak
              </span>
            </div>

            {/* Professional summary paragraph */}
            <div className="max-w-3xl mx-auto mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Full Stack Engineer with <strong className="text-gray-900">production-grade expertise in MERN, LAMP, and Next.js</strong>.
                Proven problem-solving ability with <strong className="text-amber-700">400+ LeetCode problems solved</strong> and a disciplined daily coding streak.
                I build <strong className="text-gray-900">scalable, SEO-optimized, high-performance web applications</strong> with clean architecture and modern best practices.
              </p>
            </div>
          </div>

          {/* ===== MOBILE FILTER BUTTON ===== */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50"
            aria-label={isMobileMenuOpen ? "Close filter" : "Open filter"}
          >
            {isMobileMenuOpen ? <FiChevronDown className="w-5 h-5" /> : <FiChevronUp className="w-5 h-5" />}
          </button>

          {/* ===== MOBILE MENU ===== */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-40 rounded-t-2xl" style={{ maxHeight: "60vh", overflowY: "auto" }}>
              <div className="p-6 space-y-5">
                <h2 className="text-xl font-bold text-gray-900">Filter Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {FILTERS.map((f) => (
                    <button
                      key={f}
                      onClick={() => { setActiveCategory(f); setIsMobileMenuOpen(false); }}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeCategory === f ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" : "bg-gray-100 text-gray-700"
                        }`}
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
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${activeCategory === f ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur transition duration-500" />
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
                        <p className="text-gray-500 text-sm">{category.description}</p>
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
                              <span className="text-xs font-medium text-gray-500 hidden sm:block">{skill.level}</span>
                              <div className="w-14 h-1.5 bg-gray-200 rounded-full overflow-hidden">
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
                        <span className="text-xs font-semibold text-gray-500 uppercase">Proficiency</span>
                        <div className="flex items-center gap-1.5">
                          <span className={`font-bold text-sm ${category.color}`}>{category.level}</span>
                          <span className="text-xs text-gray-400">({category.proficiency}%)</span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
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

          {/* ===== STATS SECTION ===== */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
            {stats.map((s, i) => {
              const StatIcon = s.icon;
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${s.gradient} border border-white/50 shadow-md text-center hover:scale-105 transition-transform duration-300 ${s.highlight ? 'ring-2 ring-amber-300/50' : ''}`}
                >
                  <StatIcon className={`absolute top-3 right-3 w-6 h-6 ${s.color} opacity-25`} />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{s.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{s.label}</div>
                </div>
              );
            })}
          </div>

          {/* ===== STRENGTHS & MINDSET SECTION ===== */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <FiStar className="w-8 h-8 text-amber-500" />
                  <h3 className="text-xl font-bold text-gray-900">Core Strengths</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Full Stack Architecture</span>
                      <p className="text-sm text-gray-600">End-to-end application design with MERN + LAMP stacks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">DSA & Problem Solving</span>
                      <p className="text-sm text-gray-600">400+ LeetCode problems — clean, optimized, real-world application</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Performance & SEO</span>
                      <p className="text-sm text-gray-600">Core Web Vitals, structured data, SSR/SSG optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Consistency × Discipline</span>
                      <p className="text-sm text-gray-600">Daily coding streak — balancing development, DSA, and continuous learning</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-center gap-3 mb-6">
                  <FiTarget className="w-8 h-8 text-emerald-600" />
                  <h3 className="text-xl font-bold text-gray-900">Next Targets</h3>
                </div>
                <ul className="space-y-3">
                  {nextTargets.map((target, i) => (
                    <li key={i} className="flex items-start gap-3 p-2">
                      <FiArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{target}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ===== CAREER POSITIONING STATEMENT ===== */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-10 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
              <div className="relative z-10">
                <div className="flex justify-center gap-2 mb-4">
                  <FiCode className="w-8 h-8 text-blue-400" />
                  <FiServer className="w-8 h-8 text-emerald-400" />
                  <FiDatabase className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Full Stack Engineer — Not Just Code, Production-Ready Solutions
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  I bridge the gap between robust backend logic, performant frontend experiences,
                  and algorithmic thinking. Every project is an opportunity to build something
                  <span className="text-amber-300 font-semibold"> scalable, maintainable, and impactful</span>.
                </p>
                <div className="mt-6 flex justify-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">MERN</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">LAMP</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Next.js</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">400+ DSA</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">SEO Expert</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Skills;