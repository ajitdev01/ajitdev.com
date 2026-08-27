import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Folder,
  BarChart3,
  Database,
  Globe,
  Zap,
  MapPin,
  Briefcase,
  Flame,
  Trophy,
} from "lucide-react";
import ProjectsSection from "../components/projects/ProjectsSection";
import JSONLD from "@/app/components/JSONLD";
import { getCollectionPageSchema } from "@/lib/schema";
import { PAGE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ajit Dev Project Portfolio – MERN, Next.js, DevOps",
  description: "Browse Ajit Dev's projects: MERN/Next.js applications, AWS cloud deployments, and full-stack solutions demonstrating 5+ production apps.",
  keywords: [...PAGE_KEYWORDS.projects],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Ajit Dev Project Portfolio – MERN, Next.js, DevOps",
    description: "Browse Ajit Dev's projects: MERN/Next.js applications, AWS cloud deployments, and full-stack solutions demonstrating production-grade apps.",
    url: "https://ajitdev.com/projects",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajit Dev Full Stack & DevOps Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Dev Project Portfolio – MERN, Next.js, DevOps",
    description: "Browse Ajit Dev's projects: MERN/Next.js applications, AWS cloud deployments, and full-stack solutions.",
    images: ["https://ajitdev.com/og-image.png"],
  },
};

const stats = [
  { value: "518+", label: "LeetCode Solved", icon: BarChart3, color: "#6366f1" },
  { value: "242 Days", label: "Active Coding Streak", icon: Flame, color: "#10b981" },
  { value: "8+", label: "Production Web Apps", icon: Folder, color: "#8b5cf6" },
  { value: "123+", label: "NeetCode Solved", icon: Trophy, color: "#f59e0b" }
];

const highlights = [
  { title: "MERN Stack Mastery", description: "Full-stack JavaScript applications", count: 4, icon: Database },
  { title: "DSA Problem Solving", description: "641+ combined LeetCode & NeetCode", count: 1, icon: BarChart3 },
  { title: "SEO Engineering", description: "Structured data & Core Web Vitals", count: 1, icon: Globe },
  { title: "Production Mindset", description: "Real-world scalable web apps", count: 8, icon: Zap }
];

export default function ProjectsPage() {
  const collectionSchema = getCollectionPageSchema(
    "Ajit Dev Project Portfolio – MERN, Next.js, DevOps",
    "Browse Ajit Dev's production-grade projects including MERN/Next.js web applications and DevOps pipelines.",
    "https://ajitdev.com/projects"
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-24">
      <JSONLD schema={collectionSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO BANNER CARD */}
        <Card className="p-6 sm:p-10 mb-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-center shadow-xs">
          <div className="inline-flex p-4 rounded-2xl bg-indigo-100 text-indigo-600 mb-4">
            <Folder className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-2">
            Projects Portfolio
          </h1>

          <p className="text-sm sm:text-base font-extrabold text-slate-700 mb-4">
            MERN • LAMP • Next.js • <span className="text-amber-600 font-black">641+ DSA Problems Solved</span>
          </p>

          <div className="w-24 h-1 rounded-full bg-indigo-600 mx-auto mb-6" />

          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="py-1 px-3 text-xs gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600" /> Katihar, Bihar, India
            </Badge>
            <Badge variant="outline" className="py-1 px-3 text-xs gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-emerald-600" /> Full Stack Engineer &amp; Problem Solver
            </Badge>
            <Badge variant="success" className="py-1 px-3 text-xs gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-500" /> 242-Day Active Streak
            </Badge>
          </div>
        </Card>

        {/* CLIENT PROJECTS SECTION */}
        <ProjectsSection />

        {/* STATS METRICS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => {
            const StatIcon = s.icon;
            return (
              <Card
                key={i}
                className="p-6 rounded-2xl border border-slate-200 bg-white text-center transition-all hover:-translate-y-1 shadow-xs"
              >
                <div
                  className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mx-auto mb-3"
                  style={{ color: s.color }}
                >
                  <StatIcon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-1">{s.value}</h3>
                <p className="text-xs font-extrabold text-slate-500">{s.label}</p>
              </Card>
            );
          })}
        </div>

        {/* PORTFOLIO HIGHLIGHTS GRID */}
        <Card className="p-6 md:p-10 rounded-3xl border border-slate-200 bg-white mb-12 shadow-xs">
          <h2 className="text-2xl font-black text-slate-900 mb-1 text-center">
            Portfolio Highlights
          </h2>
          <p className="text-sm font-medium text-slate-500 mb-8 text-center">
            Specialized engineering expertise across multiple domains
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h, idx) => {
              const HighlightIcon = h.icon;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-white border border-slate-200 shrink-0">
                      <HighlightIcon className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">{h.title}</h4>
                      <p className="text-[11px] font-medium text-slate-500">{h.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-indigo-600">{h.count}</span>
                    <span className="text-xs font-semibold text-slate-400 ml-1">projects</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

      </div>
    </div>
  );
}