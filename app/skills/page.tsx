import type { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  Server,
  Database,
  CheckCircle2,
  BarChart3,
  Target,
  MapPin,
  Briefcase,
  Calendar,
  Package,
  Star,
  ArrowRight,
  Sparkles,
  Flame,
  Award,
} from "lucide-react";
import SkillsSection from "../components/skills/SkillsSection";
import { PAGE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ajit Dev Skills – Full Stack & DevOps Engineer",
  description: "Ajit Dev's technical skill matrix: React, Next.js, Node.js, AWS, Docker, Kubernetes, and advanced algorithm proficiency (632+ problems solved).",
  keywords: [...PAGE_KEYWORDS.skills],
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Ajit Dev Skills – Full Stack & DevOps Engineer",
    description: "Ajit Dev's technical skill matrix: React, Next.js, Node.js, AWS, Docker, Kubernetes, and advanced algorithm proficiency (632+ problems solved).",
    url: "https://ajitdev.com/skills",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajit Dev Technical Skills Matrix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Dev Skills – Full Stack & DevOps Engineer",
    description: "Ajit Dev's technical skill matrix: React, Next.js, Node.js, AWS, Docker, Kubernetes, and advanced algorithm proficiency.",
    images: ["https://ajitdev.com/og-image.png"],
  },
};

// ========== STRUCTURED DATA ==========
const skillsForSchema = [
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "TypeScript",
  "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "REST APIs", "JWT",
  "AWS EC2", "AWS S3", "Docker", "Git", "GitHub Actions", "Data Structures", "Algorithms",
  "LeetCode", "Problem Solving", "System Design", "Performance Optimization", "SEO"
];

const stats = [
  { value: "514+", label: "LeetCode Solved", icon: BarChart3, color: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100" },
  { value: "231 Days", label: "Active Coding Streak", icon: Flame, color: "text-amber-500", bg: "bg-amber-50 border-amber-100" },
  { value: "118+", label: "NeetCode Solved", icon: Target, color: "text-purple-600", bg: "bg-purple-50 border-purple-100" },
  { value: "118 Commits", label: "August 2026 Commits", icon: Code, color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
];

const nextTargets = [
  "Complete 600+ LeetCode problems (Graph DFS/BFS & DP mastery)",
  "Build and deploy production-scale Next.js 16 + Node.js Cloud platform",
  "Master full-stack TypeScript & DevSecOps security pipelines",
  "AWS Certified Solutions Architect & Cloud Security Developer",
  "Contribute open-source C++ & React performance utilities"
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-slate-50/60 pt-28 pb-16">
      {/* Schema.org microdata for Skills */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Ajit Dev's Technical Skills & Expertise",
            "description": "Skills and technical stack profile of Ajit Dev (ajitdev01). Highlighting MERN, Next.js, C++, and DSA problem-solving competency.",
            "mainEntity": {
              "@type": "Person",
              "name": "Ajit Dev",
              "knowsAbout": skillsForSchema
            }
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== PROFESSIONAL SUMMARY HEADER ===== */}
        <div className="p-8 sm:p-10 mb-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50/70 via-white to-emerald-50/70 text-center shadow-xs">
          <div className="inline-flex p-4 rounded-2xl bg-indigo-100/70 text-indigo-600 mb-4 shadow-2xs">
            <Code className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
            Skills & Technical Matrix
          </h1>

          <p className="text-slate-700 font-bold text-base mb-4">
            MERN • LAMP • Next.js • C++ STL • <span className="text-amber-600 font-black">632+ DSA Problems Solved</span>
          </p>

          <div className="w-24 h-1 bg-indigo-600 rounded-full mx-auto mb-5" />

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600" /> Katihar, Bihar, India
            </span>
            <span className="px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-bold inline-flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-emerald-600" /> Full Stack Engineer & Problem Solver
            </span>
            <span className="px-3 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-amber-700 text-xs font-bold inline-flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-500" /> 231-Day Active Streak
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 border border-slate-200/80 max-w-3xl mx-auto text-slate-600 text-sm leading-relaxed">
            Full Stack Engineer with <strong className="text-slate-900 font-extrabold">production-grade expertise in MERN, LAMP, and Next.js</strong>.
            Proven problem-solving ability with <strong className="text-amber-700 font-extrabold">632+ combined DSA problems solved</strong> across LeetCode & NeetCode and a continuous 231-day active streak.
            I build <strong className="text-slate-900 font-extrabold">scalable, SEO-optimized, high-performance web applications</strong> with clean architecture and modern best practices.
          </div>
        </div>

        {/* ===== CLIENT COMPONENT GRID & TABS ===== */}
        <SkillsSection />

        {/* ===== STATS METRICS GRID ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {stats.map((s, i) => {
            const StatIcon = s.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200 bg-white text-center shadow-xs hover:-translate-y-1 transition-transform duration-200"
              >
                <div className={`w-10 h-10 rounded-xl ${s.bg} ${s.color} border flex items-center justify-center mx-auto mb-3`}>
                  <StatIcon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-black text-slate-900 mb-0.5">{s.value}</div>
                <div className="text-xs font-bold text-slate-500">{s.label}</div>
              </div>
            );
          })}
        </div>

        {/* ===== STRENGTHS & MINDSET SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Core Strengths Card */}
          <div className="p-8 rounded-3xl border border-indigo-200/80 bg-white shadow-xs">
            <div className="flex items-center gap-2.5 mb-6">
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
              <h3 className="text-xl font-black text-slate-900">Core Strengths</h3>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Full Stack Architecture</h4>
                  <p className="text-slate-500 text-xs mt-0.5">End-to-end application design with MERN + LAMP stacks and Next.js App Router.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">DSA & Problem Solving</h4>
                  <p className="text-slate-500 text-xs mt-0.5">632+ LeetCode & NeetCode problems — clean O(log N) optimized C++ STL solutions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Performance & SEO</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Core Web Vitals, structured JSON-LD data, and server component optimization.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Consistency × Discipline</h4>
                  <p className="text-slate-500 text-xs mt-0.5">231-day active coding streak — balancing development, DSA, and cloud security.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Targets Card */}
          <div className="p-8 rounded-3xl border border-emerald-200/80 bg-white shadow-xs">
            <div className="flex items-center gap-2.5 mb-6">
              <Target className="w-6 h-6 text-emerald-600" />
              <h3 className="text-xl font-black text-slate-900">Next Targets</h3>
            </div>

            <div className="flex flex-col gap-3">
              {nextTargets.map((target, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <ArrowRight className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="font-bold text-emerald-900 text-xs leading-relaxed">{target}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}