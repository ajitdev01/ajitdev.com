"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Button,
  Tooltip,
} from "@mui/material";
import {
  Code,
  Shield,
  Terminal,
  Trophy,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Flame,
  Layers,
  Cpu,
} from "lucide-react";
import JSONLD from "./components/JSONLD";
import HeroAnimatedText from "./components/home/HeroAnimatedText";
import HeroCTAButtons from "./components/home/HeroCTAButtons";

import CodeSpace3D from "./components/home/CodeSpace3D";
import StatsSection from "./components/home/StatsSection";
import EducationSection from "./components/home/EducationSection";

// ============================================
// ICONS
// ============================================
const FiGithub = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const FiLinkedin = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
  </svg>
);

export default function HomePage() {
  const allSocialUrls = [
    "https://github.com/ajitdev01",
    "https://linkedin.com/in/ajitdev01",
    "https://instagram.com/ajitdev01",
    "https://facebook.com/ajitdev01",
    "https://t.me/ajitdev01",
    "https://snapchat.com/add/ajitdev01",
    "https://leetcode.com/ajitdev01",
    "https://codeforces.com/profile/ajitdev01",
    "https://twitter.com/ajitdev01",
    "https://youtube.com/@ajitdev01",
    "https://medium.com/@ajitdev01",
    "https://hashnode.com/@ajitdev01",
    "https://dev.to/ajitdev01",
  ];

  return (
    <>
      {/* JSON-LD Schema */}
      <JSONLD
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://ajitdev.com/#person",
              "name": "Ajit Dev",
              "alternateName": ["Ajit Kumar", "AjitDev01", "ajitdev01"],
              "url": "https://ajitdev.com",
              "mainEntityOfPage": {
                "@id": "https://ajitdev.com/#profilepage"
              },
              "image": {
                "@type": "ImageObject",
                "@id": "https://ajitdev.com/#personimage",
                "url": "https://ajitdev.com/logo.png",
                "width": 400,
                "height": 400,
                "caption": "Ajit Dev — DevOps, DevSecOps & Cloud Security Developer"
              },
              "jobTitle": [
                "Full Stack Developer",
                "DevOps Engineer",
                "Cloud Security Enthusiast",
                "DevSecOps Engineer"
              ],
              "description": "Ajit Dev (ajitdev01) — Full Stack Developer, DevOps Engineer, Cloud Security and Cybersecurity Enthusiast from Katihar, Bihar, India. Student at Amity University Online and learner at Brainzima Innovation Institute. Specializes in Next.js, React, MERN Stack, cloud computing, CI/CD automation, security engineering, Linux, Docker, AWS, Kubernetes, Terraform.",
              "gender": "Male",
              "nationality": "Indian",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Katihar",
                "addressRegion": "Bihar",
                "addressCountry": "IN",
                "postalCode": "854105"
              },
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "@id": "https://amityonline.com/#org",
                  "name": "Amity University Online",
                  "url": "https://amityonline.com"
                },
                {
                  "@type": "EducationalOrganization",
                  "@id": "https://www.brainzima.com/#org",
                  "name": "Brainzima Innovation Institute",
                  "url": "https://www.brainzima.com/"
                }
              ],
              "sameAs": allSocialUrls
            }
          ]
        }}
      />

      <Box sx={{ minHeight: "100vh", backgroundColor: "#f8fafc", pt: { xs: 10, sm: 14, md: 18 }, pb: { xs: 4, md: 8 }, overflowX: "hidden" }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>

          {/* Hero Section */}
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: { xs: 4, lg: 6 }, alignItems: "center", mb: { xs: 6, md: 10 }, select: "none" }}>
            {/* Left Content */}
            <Box sx={{ textAlign: { xs: "center", lg: "left" } }}>
              <HeroAnimatedText />
              <Box sx={{ mt: 3, mb: 4 }}>
                <HeroCTAButtons />
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: { xs: "center", lg: "flex-start" } }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Tooltip title="GitHub @ajitdev01">
                    <a href="https://github.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-indigo-600 hover:border-indigo-300 transition-colors shadow-xs select-none">
                      <FiGithub />
                    </a>
                  </Tooltip>
                  <Tooltip title="LinkedIn @ajitdev01">
                    <a href="https://linkedin.com/in/ajitdev01" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-indigo-600 hover:border-indigo-300 transition-colors shadow-xs select-none">
                      <FiLinkedin />
                    </a>
                  </Tooltip>
                  <Tooltip title="LeetCode @ajitdev01">
                    <a href="https://leetcode.com/u/ajitdev01/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-amber-600 hover:border-amber-300 text-xs font-black shadow-xs select-none">
                      LC
                    </a>
                  </Tooltip>
                </Box>
                <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700, select: "none" }}>
                  @ajitdev01 across all platforms
                </Typography>
              </Box>
            </Box>

            {/* Right 3D Interactive Canvas */}
            <CodeSpace3D />
          </Box>

          {/* Stats Section */}
          <Box sx={{ mb: { xs: 6, md: 10 } }}>
            <StatsSection />
          </Box>

          {/* Education & Qualifications Section */}
          <Box>
            <EducationSection />
          </Box>

        </Container>
      </Box>
    </>
  );
}
