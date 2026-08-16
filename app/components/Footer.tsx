"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Home,
  User,
  Settings,
  FolderGit2,
  GraduationCap,
  Mail,
  Shield,
  Award,
  Globe,
  Terminal,
  BookOpen,
  Newspaper,
  Trophy,
  Heart,
  ArrowUp,
  MessageCircle,
} from "lucide-react";

const BackToTop = dynamic(() => import("./common/BackToTop"));

const FiGithub = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const FiLinkedin = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
  </svg>
);

const FiTwitter = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);

const FiInstagram = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
  </svg>
);

const BRAND_INFO = {
  name: "Ajit Dev",
  title: "Full Stack Developer · DevOps Engineer",
  description: "Full Stack Developer, DevOps Engineer & Cloud Security Specialist based in Katihar, Bihar, India. Building production-grade Web Applications, MERN/Next.js architectures, and AWS/Docker infrastructure.",
  email: "support@ajitdev.com",
  secondaryEmail: "ajitk23192@gmail.com",
  phone: "+916205526784",
  location: "Katihar, Bihar, India",
};

const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/ajitdev01", icon: FiGithub },
  { platform: "LinkedIn", url: "https://linkedin.com/in/ajitdev01", icon: FiLinkedin },
  { platform: "Twitter", url: "https://twitter.com/ajitdev01", icon: FiTwitter },
  { platform: "Instagram", url: "https://instagram.com/ajitdev01", icon: FiInstagram },
  { platform: "WhatsApp", url: "https://wa.me/916205526784", icon: MessageCircle },
];

const NAV_LINKS = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Skills", path: "/skills", icon: Settings },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Contact", path: "/contact", icon: Mail },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "News", path: "/news", icon: Newspaper },
  { name: "Research", path: "/research", icon: Terminal },
  { name: "DSA", path: "/dsa", icon: Trophy },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Service", path: "/terms" },
  { name: "Sitemap", path: "/sitemap.xml", external: true },
];

const TECH_SKILLS = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB",
  "AWS", "Docker", "Kubernetes", "Terraform", "Linux", "C++",
  "Tailwind CSS", "MUI", "Git", "CI/CD", "REST APIs", "GraphQL",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ backgroundColor: "#080c14", color: "#f8fafc", pt: 8, pb: 4, borderTop: "1px solid #1e293b" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "5fr 3fr 4fr" }, gap: 6 }}>
          
          {/* COLUMN 1: Brand Info & Socials */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  boxShadow: "0 4px 14px rgba(79, 70, 229, 0.4)",
                }}
              >
                AK
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 900, color: "#ffffff", lineHeight: 1.2 }}>
                  {BRAND_INFO.name}
                </Typography>
                <Typography variant="caption" sx={{ color: "#818cf8", fontWeight: 800 }}>
                  {BRAND_INFO.title}
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: "#94a3b8", mb: 3, lineHeight: 1.7, fontSize: "0.88rem" }}>
              {BRAND_INFO.description}
            </Typography>

            {/* Trust Badges */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
              <Chip icon={<Shield className="w-3.5 h-3.5 text-emerald-400" />} label="HTTPS Encrypted" size="small" variant="outlined" sx={{ borderColor: "#1e293b", color: "#cbd5e1", fontWeight: 700 }} />
              <Chip icon={<Award className="w-3.5 h-3.5 text-indigo-400" />} label="MERN & DevOps" size="small" variant="outlined" sx={{ borderColor: "#1e293b", color: "#cbd5e1", fontWeight: 700 }} />
              <Chip icon={<Globe className="w-3.5 h-3.5 text-amber-400" />} label="Katihar, Bihar, India" size="small" variant="outlined" sx={{ borderColor: "#1e293b", color: "#cbd5e1", fontWeight: 700 }} />
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {SOCIAL_LINKS.map((link) => {
                const IconComp = link.icon;
                return (
                  <Tooltip key={link.platform} title={link.platform}>
                    <IconButton
                      component="a"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#94a3b8",
                        backgroundColor: "#0f172a",
                        border: "1px solid #1e293b",
                        borderRadius: "12px",
                        "&:hover": { color: "#ffffff", backgroundColor: "#4f46e5", borderColor: "#4f46e5" },
                      }}
                    >
                      <IconComp className="w-4 h-4" />
                    </IconButton>
                  </Tooltip>
                );
              })}
            </Box>
          </Box>

          {/* COLUMN 2: Quick Links */}
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#ffffff", textTransform: "uppercase", letterSpacing: "1px", mb: 2.5 }}>
              Quick Navigation
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 1.2 }}>
              {NAV_LINKS.map((item) => {
                const IconComp = item.icon;
                return (
                  <li key={item.path}>
                    <Link href={item.path} className="no-underline">
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#94a3b8",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          "&:hover": { color: "#818cf8" },
                        }}
                      >
                        <IconComp className="w-3.5 h-3.5 text-indigo-400" />
                        {item.name}
                      </Typography>
                    </Link>
                  </li>
                );
              })}
            </Box>
          </Box>

          {/* COLUMN 3: Tech Stack & Contact */}
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#ffffff", textTransform: "uppercase", letterSpacing: "1px", mb: 2.5 }}>
              Tech Stack & Contact
            </Typography>
            
            <Paper elevation={0} sx={{ p: 2.5, borderRadius: "20px", backgroundColor: "#0f172a", border: "1px solid #1e293b", mb: 3 }}>
              <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 800, display: "block", mb: 1.5, textTransform: "uppercase" }}>
                Core Skills
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {TECH_SKILLS.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{ backgroundColor: "#1e293b", color: "#e2e8f0", fontWeight: 700, fontSize: "0.7rem", borderRadius: "8px" }}
                  />
                ))}
              </Box>
            </Paper>

            <Typography variant="body2" sx={{ color: "#94a3b8", fontSize: "0.85rem", mb: 0.5 }}>
              Email: <a href={`mailto:${BRAND_INFO.email}`} className="text-indigo-400 font-bold no-underline">{BRAND_INFO.email}</a>
            </Typography>
            <Typography variant="body2" sx={{ color: "#94a3b8", fontSize: "0.85rem" }}>
              Location: <strong className="text-slate-300">{BRAND_INFO.location}</strong>
            </Typography>
          </Box>

        </Box>

        <Divider sx={{ my: 5, borderColor: "#1e293b" }} />

        {/* BOTTOM BAR */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "space-between", gap: 2 }}>
          <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700, textAlign: { xs: "center", sm: "left" } }}>
            © {currentYear} <strong>{BRAND_INFO.name}</strong> (@{BRAND_INFO.name.toLowerCase().replace(" ", "")}01). All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
            {LEGAL_LINKS.map((link) => (
              <Link key={link.path} href={link.path} className="no-underline">
                <Typography variant="caption" sx={{ color: "#94a3b8", fontWeight: 700, "&:hover": { color: "#818cf8" } }}>
                  {link.name}
                </Typography>
              </Link>
            ))}
            <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700, display: "flex", alignItems: "center", gap: 0.5 }}>
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in India
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Dynamic Back to Top Trigger */}
      <BackToTop />
    </Box>
  );
}
