import type { Metadata } from "next";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
} from "@mui/material";
import {
  Folder,
  BarChart3,
  TrendingUp,
  Book,
  Database,
  Globe,
  Zap,
  MapPin,
  Briefcase,
  Flame,
  Award,
  Trophy,
} from "lucide-react";
import ProjectsSection from "../components/projects/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects — AJITDEV",
  description: "Explore production-grade full-stack MERN, Next.js, Docker, Kubernetes, AWS, and Cloud Security projects built by Ajit Dev (ajitdev01).",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects — AJITDEV",
    description: "Explore production-grade full-stack MERN, Next.js, Docker, Kubernetes, AWS, and Cloud Security projects built by Ajit Dev (ajitdev01).",
    url: "https://ajitdev.com/projects",
  },
};

const stats = [
  { value: "514+", label: "LeetCode Solved", icon: BarChart3, color: "#6366f1" },
  { value: "231 Days", label: "Active Coding Streak", icon: Flame, color: "#10b981" },
  { value: "8+", label: "Production Web Apps", icon: Folder, color: "#8b5cf6" },
  { value: "118+", label: "NeetCode Solved", icon: Trophy, color: "#f59e0b" }
];

const highlights = [
  { title: "MERN Stack Mastery", description: "Full-stack JavaScript applications", count: 4, icon: Database, color: "primary" as const },
  { title: "DSA Problem Solving", description: "632+ combined LeetCode & NeetCode", count: 1, icon: BarChart3, color: "warning" as const },
  { title: "SEO Engineering", description: "Structured data & Core Web Vitals", count: 1, icon: Globe, color: "info" as const },
  { title: "Production Mindset", description: "Real-world scalable web apps", count: 8, icon: Zap, color: "success" as const }
];

export default function ProjectsPage() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8fafc", pt: { xs: 16, md: 20 }, pb: 12 }}>
      <Container maxWidth="lg">
        
        {/* ===== HERO BANNER PAPER ===== */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            mb: 6,
            borderRadius: "24px",
            border: "1px solid #e2e8f0",
            background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #f0fdf4 100%)",
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "inline-flex", p: 2, borderRadius: "20px", backgroundColor: "#e0e7ff", color: "#4f46e5", mb: 2 }}>
            <Folder className="w-8 h-8" />
          </Box>

          <Typography variant="h3" component="h1" sx={{ fontWeight: 900, color: "#0f172a", mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
            Projects Portfolio
          </Typography>

          <Typography variant="h6" component="p" sx={{ color: "#334155", fontWeight: 800, mb: 3 }}>
            MERN • LAMP • Next.js • <span className="text-amber-600 font-black">632+ DSA Problems Solved</span>
          </Typography>

          <Box sx={{ width: 96, height: 4, borderRadius: 2, backgroundColor: "#6366f1", mx: "auto", mb: 3 }} />

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.5 }}>
            <Chip icon={<MapPin className="w-3.5 h-3.5 text-blue-600" />} label="Katihar, Bihar, India" size="small" variant="outlined" sx={{ fontWeight: 800 }} />
            <Chip icon={<Briefcase className="w-3.5 h-3.5 text-emerald-600" />} label="Full Stack Engineer & Problem Solver" size="small" variant="outlined" sx={{ fontWeight: 800 }} />
            <Chip icon={<Flame className="w-3.5 h-3.5 text-amber-500" />} label="231-Day Active Streak" color="success" size="small" sx={{ fontWeight: 800 }} />
          </Box>
        </Paper>

        {/* ===== CLIENT PROJECTS SECTION ===== */}
        <ProjectsSection />

        {/* ===== STATS METRICS GRID ===== */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 3, mb: 8 }}>
          {stats.map((s, i) => {
            const StatIcon = s.icon;
            return (
              <Paper
                key={i}
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#ffffff",
                  textAlign: "center",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <Box sx={{ width: 40, height: 40, borderRadius: "12px", backgroundColor: "#f8fafc", color: s.color, display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 1.5 }}>
                  <StatIcon className="w-5 h-5" />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 0.5 }}>{s.value}</Typography>
                <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700 }}>{s.label}</Typography>
              </Paper>
            );
          })}
        </Box>

        {/* ===== PORTFOLIO HIGHLIGHTS GRID ===== */}
        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff", mb: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 1, textAlign: "center" }}>
            Portfolio Highlights
          </Typography>
          <Typography variant="body2" sx={{ color: "#64748b", mb: 4, textAlign: "center" }}>
            Specialized engineering expertise across multiple domains
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 3 }}>
            {highlights.map((h, idx) => {
              const HighlightIcon = h.icon;
              return (
                <Paper key={idx} elevation={0} sx={{ p: 2.5, borderRadius: "16px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                    <Box sx={{ p: 1, borderRadius: "10px", backgroundColor: "#ffffff", border: "1px solid #e2e8f0" }}>
                      <HighlightIcon className="w-4 h-4 text-indigo-600" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: "0.85rem" }}>{h.title}</Typography>
                      <Typography variant="caption" sx={{ color: "#64748b", fontSize: "0.7rem", display: "block" }}>{h.description}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography variant="h6" component="span" sx={{ fontWeight: 900, color: "#4f46e5" }}>{h.count}</Typography>
                    <Typography variant="caption" sx={{ color: "#64748b", ml: 0.5 }}>projects</Typography>
                  </Box>
                </Paper>
              );
            })}
          </Box>
        </Paper>

      </Container>
    </Box>
  );
}