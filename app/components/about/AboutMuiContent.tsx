"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  Divider,
  LinearProgress,
  Tooltip,
} from "@mui/material";
import {
  User,
  Code,
  Briefcase,
  MapPin,
  Mail,
  BookOpen,
  CheckCircle2,
  Database,
  Award,
  ExternalLink,
  Sparkles,
  Flame,
  Trophy,
  ShieldCheck,
  Cpu,
  ArrowRight,
} from "lucide-react";

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

const skills = [
  { name: "MERN Stack", icon: Code, color: "primary" as const },
  { name: "Next.js", icon: Code, color: "default" as const },
  { name: "TypeScript", icon: Code, color: "info" as const },
  { name: "React.js", icon: Code, color: "info" as const },
  { name: "Node.js", icon: Database, color: "success" as const },
  { name: "MongoDB", icon: Database, color: "success" as const },
  { name: "AWS & Cloud", icon: Cpu, color: "warning" as const },
  { name: "Docker & Linux", icon: ShieldCheck, color: "secondary" as const },
];

const contactDetails = [
  { icon: Mail, label: "Support Email", value: "support@ajitdev.com", href: "mailto:support@ajitdev.com" },
  { icon: Mail, label: "Personal Email", value: "ajitk23192@gmail.com", href: "mailto:ajitk23192@gmail.com" },
  { icon: MapPin, label: "Location", value: "Katihar, Bihar, India", href: null },
  { icon: Briefcase, label: "Primary Role", value: "Full Stack Developer & DevOps Engineer", href: null },
  { icon: Award, label: "Focus Area", value: "Production Web Apps & Cloud Security", href: null },
];

export default function AboutMuiContent() {
  return (
    <Box sx={{ pt: { xs: 16, md: 20 }, pb: { xs: 8, md: 12 }, px: { xs: 2, sm: 4, lg: 8 }, minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        
        {/* MUI Hero Banner Paper */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            mb: 5,
            borderRadius: "24px",
            border: "1px solid #e2e8f0",
            background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #f0fdf4 100%)",
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "inline-flex", p: 2, borderRadius: "20px", backgroundColor: "#e0e7ff", color: "#4f46e5", mb: 2 }}>
            <User className="w-8 h-8" />
          </Box>

          <Typography variant="h3" component="h1" sx={{ fontWeight: 900, color: "#0f172a", mb: 0.5, fontSize: { xs: "2rem", md: "3rem" } }}>
            Ajit Dev
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#64748b", mb: 2, tracking: "1px" }}>
            (@ajitdev01)
          </Typography>

          <Box sx={{ w: 80, h: 4, borderRadius: 2, backgroundColor: "#6366f1", mx: "auto", mb: 3 }} />

          <Typography variant="h6" sx={{ color: "#334155", fontWeight: 700, maxWidth: "700px", mx: "auto", lineHeight: 1.6 }}>
            Full Stack Developer · DevOps Engineer
            <Box component="span" sx={{ display: "block", color: "#64748b", fontSize: "0.95rem", mt: 0.5 }}>
              MERN Stack · Next.js · AWS · Cloud Security
            </Box>
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.5, mt: 3 }}>
            <Chip icon={<Sparkles className="w-3.5 h-3.5 text-indigo-600" />} label="Full Stack Engineer" color="primary" size="small" sx={{ fontWeight: 800 }} />
            <Chip icon={<Flame className="w-3.5 h-3.5 text-amber-500" />} label="DevOps & DevSecOps" color="warning" size="small" sx={{ fontWeight: 800 }} />
            <Chip icon={<Trophy className="w-3.5 h-3.5 text-emerald-600" />} label="Katihar, Bihar, India" color="success" size="small" sx={{ fontWeight: 800 }} />
          </Box>
        </Paper>

        {/* Main Grid: Left Profile Sidebar + Right Details */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "4fr 8fr" }, gap: 4 }}>
          
          {/* LEFT SIDEBAR: Profile Image & Contact Cards */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Paper elevation={0} sx={{ p: 2, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff", overflow: "hidden" }}>
              <Image
                src="/my.jpeg"
                alt="Ajit Kumar - Full Stack Engineer from Katihar, Bihar, India"
                width={400}
                height={400}
                className="w-full rounded-2xl border border-slate-100 object-cover shadow-xs"
                priority
              />
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 900, color: "#0f172a" }}>Ajit Kumar</Typography>
                <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700, display: "block" }}>DevOps & Cloud Security Specialist</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
                  <Button component="a" href="https://github.com/ajitdev01" target="_blank" rel="noopener noreferrer" variant="outlined" size="small" startIcon={<FiGithub className="w-4 h-4" />} sx={{ fontWeight: 800, borderRadius: "10px", textTransform: "none" }}>
                    GitHub
                  </Button>
                  <Button component="a" href="https://linkedin.com/in/ajitdev01" target="_blank" rel="noopener noreferrer" variant="outlined" size="small" startIcon={<FiLinkedin className="w-4 h-4" />} sx={{ fontWeight: 800, borderRadius: "10px", textTransform: "none" }}>
                    LinkedIn
                  </Button>
                </Box>
              </Box>
            </Paper>

            {/* Contact Details Paper */}
            <Paper elevation={0} sx={{ p: 3, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a", textTransform: "uppercase", letterSpacing: "1px", mb: 2 }}>
                Contact & Info
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {contactDetails.map((detail, idx) => {
                  const IconComp = detail.icon;
                  return (
                    <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.5, borderRadius: "14px", backgroundColor: "#f8fafc", border: "1px solid #f1f5f9" }}>
                      <IconComp className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      <Box sx={{ overflow: "hidden" }}>
                        <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700, display: "block", fontSize: "0.65rem" }}>
                          {detail.label}
                        </Typography>
                        {detail.href ? (
                          <a href={detail.href} className="text-xs font-extrabold text-slate-800 hover:text-indigo-600 truncate block">
                            {detail.value}
                          </a>
                        ) : (
                          <Typography variant="body2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: "0.75rem" }} noWrap>
                            {detail.value}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Paper>
          </Box>

          {/* RIGHT COLUMN: Bio, Skills, Education & Values */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            
            {/* Professional Summary Paper */}
            <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
              <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", mb: 2 }}>
                Professional Summary
              </Typography>
              <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8, fontSize: "0.95rem", mb: 2 }}>
                I&apos;m <strong className="text-slate-900 font-extrabold">Ajit Dev</strong> (@ajitdev01), a <strong className="text-slate-900 font-extrabold">Full Stack Developer</strong> and <strong className="text-slate-900 font-extrabold">DevOps Engineer</strong> from <strong className="text-slate-900 font-extrabold">Katihar, Bihar, India</strong>. I specialize in building production-grade web applications using the <strong className="text-slate-900 font-extrabold">MERN Stack</strong> (MongoDB, Express, React, Node.js), <strong className="text-slate-900 font-extrabold">Next.js</strong>, and <strong className="text-slate-900 font-extrabold">TypeScript</strong>, alongside <strong className="text-slate-900 font-extrabold">AWS, Docker, Kubernetes, Terraform</strong> and Cloud Security practices.
              </Typography>
              <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8, fontSize: "0.95rem", mb: 3 }}>
                My focus is on writing clean, maintainable code and creating scalable architectures that solve real business problems. I&apos;ve delivered multiple full-stack projects from concept to deployment, ensuring performance, security, and great user experiences.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, pt: 2, borderTop: "1px solid #f1f5f9" }}>
                <Link href="/projects" className="no-underline">
                  <Button variant="contained" size="small" startIcon={<Code className="w-4 h-4" />} endIcon={<ExternalLink className="w-3.5 h-3.5" />} sx={{ fontWeight: 800, borderRadius: "12px", textTransform: "none", backgroundColor: "#4f46e5" }}>
                    View All Projects
                  </Button>
                </Link>
                <Link href="/dsa" className="no-underline">
                  <Button variant="outlined" size="small" startIcon={<Trophy className="w-4 h-4" />} endIcon={<ArrowRight className="w-3.5 h-3.5" />} sx={{ fontWeight: 800, borderRadius: "12px", textTransform: "none" }}>
                    Explore DSA Dashboard (632 Solved)
                  </Button>
                </Link>
              </Box>
            </Paper>

            {/* Tech Stack Chips Paper */}
            <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
              <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", mb: 2.5 }}>
                Core Technical Stack
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                {skills.map((skill, idx) => {
                  const IconComp = skill.icon;
                  return (
                    <Chip
                      key={idx}
                      icon={<IconComp className="w-4 h-4" />}
                      label={skill.name}
                      color={skill.color}
                      variant="outlined"
                      sx={{ fontWeight: 800, fontSize: "0.8rem", py: 2, px: 1, borderRadius: "12px" }}
                    />
                  );
                })}
              </Box>
            </Paper>

            {/* Education & Training Timeline Paper */}
            <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
              <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
                <BookOpen className="w-5 h-5 text-indigo-600" /> Education & Training Timeline
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Box sx={{ p: 2.5, borderRadius: "16px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a" }}>BCA — Cloud & Security</Typography>
                    <Chip label="Currently Enrolled" size="small" color="success" sx={{ fontWeight: 800, fontSize: "0.6rem" }} />
                  </Box>
                  <Typography variant="caption" sx={{ color: "#4f46e5", fontWeight: 800, display: "block", mb: 1 }}>Amity University Online (2025 – 2027)</Typography>
                  <Typography variant="body2" sx={{ color: "#64748b", fontSize: "0.8rem" }}>Secure system designs, operating systems (Linux), databases, cloud security, and algorithmic logic.</Typography>
                </Box>

                <Box sx={{ p: 2.5, borderRadius: "16px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a" }}>Practical Software Training</Typography>
                    <Chip label="ISO Certified" size="small" color="secondary" variant="outlined" sx={{ fontWeight: 800, fontSize: "0.6rem" }} />
                  </Box>
                  <Typography variant="caption" sx={{ color: "#9333ea", fontWeight: 800, display: "block", mb: 1 }}>Brainzima Innovation Institute · Katihar, Bihar</Typography>
                  <Typography variant="body2" sx={{ color: "#64748b", fontSize: "0.8rem" }}>Hands-on developer training specializing in Python scripting, API architecture, React/Next.js, and MERN Stack.</Typography>
                </Box>

                <Box sx={{ p: 2.5, borderRadius: "16px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a" }}>Project Exposure & SDLC</Typography>
                    <Chip label="Industry Exposure" size="small" color="primary" variant="outlined" sx={{ fontWeight: 800, fontSize: "0.6rem" }} />
                  </Box>
                  <Typography variant="caption" sx={{ color: "#059669", fontWeight: 800, display: "block", mb: 1 }}>Rexvel</Typography>
                  <Typography variant="body2" sx={{ color: "#64748b", fontSize: "0.8rem" }}>Real-world client requirements, team collaboration, versioning pipelines, and web development SDLC.</Typography>
                </Box>
              </Box>

              <Box sx={{ pt: 2, mt: 3, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700 }}>Detailed Timeline & Credentials</Typography>
                <Link href="/education" className="no-underline">
                  <Button variant="text" size="small" endIcon={<ArrowRight className="w-3.5 h-3.5" />} sx={{ fontWeight: 800, textTransform: "none", color: "#4f46e5" }}>
                    View Full Education Matrix
                  </Button>
                </Link>
              </Box>
            </Paper>

            {/* Core Values Paper Grid */}
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
              <Paper elevation={0} sx={{ p: 2.5, borderRadius: "16px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a" }}>Clean Code</Typography>
                </Box>
                <Typography variant="caption" sx={{ color: "#64748b", display: "block" }}>Modular, documented, and maintainable C++ / TypeScript codebases.</Typography>
              </Paper>

              <Paper elevation={0} sx={{ p: 2.5, borderRadius: "16px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a" }}>Scalable Architecture</Typography>
                </Box>
                <Typography variant="caption" sx={{ color: "#64748b", display: "block" }}>Cloud-native Docker containerization and AWS infrastructure.</Typography>
              </Paper>

              <Paper elevation={0} sx={{ p: 2.5, borderRadius: "16px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a" }}>Performance First</Typography>
                </Box>
                <Typography variant="caption" sx={{ color: "#64748b", display: "block" }}>Optimized logarithmic O(log N) runtime execution speed.</Typography>
              </Paper>

              <Paper elevation={0} sx={{ p: 2.5, borderRadius: "16px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a" }}>DevOps & Security</Typography>
                </Box>
                <Typography variant="caption" sx={{ color: "#64748b", display: "block" }}>Zero-trust cloud security and automated CI/CD pipelines.</Typography>
              </Paper>
            </Box>

          </Box>
        </Box>

      </Box>
    </Box>
  );
}
