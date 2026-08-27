"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  { name: "MERN Stack", icon: Code, variant: "primary" as const },
  { name: "Next.js", icon: Code, variant: "secondary" as const },
  { name: "TypeScript", icon: Code, variant: "info" as const },
  { name: "React.js", icon: Code, variant: "info" as const },
  { name: "Node.js", icon: Database, variant: "success" as const },
  { name: "MongoDB", icon: Database, variant: "success" as const },
  { name: "AWS & Cloud", icon: Cpu, variant: "warning" as const },
  { name: "Docker & Linux", icon: ShieldCheck, variant: "secondary" as const },
];

const contactDetails = [
  { icon: Mail, label: "Support Email", value: "support@ajitdev.com", href: "mailto:support@ajitdev.com" },
  { icon: Mail, label: "Personal Email", value: "ajitk23192@gmail.com", href: "mailto:ajitk23192@gmail.com" },
  { icon: MapPin, label: "Location", value: "Katihar, Bihar, India", href: null },
  { icon: Briefcase, label: "Primary Role", value: "Full Stack Developer & DevOps Engineer", href: null },
  { icon: Award, label: "Focus Area", value: "Production Web Apps & Cloud Security", href: null },
];

export default function AboutContent() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-4 sm:px-8 min-h-screen bg-slate-50">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Hero Banner Card */}
        <Card className="p-6 sm:p-10 mb-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-center shadow-xs">
          <div className="inline-flex p-4 rounded-2xl bg-indigo-100 text-indigo-600 mb-4">
            <User className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-1">
            Ajit Dev
          </h1>

          <p className="text-xs font-extrabold text-slate-500 mb-4 tracking-wider uppercase">
            (@ajitdev01)
          </p>

          <div className="w-20 h-1 rounded-full bg-indigo-600 mx-auto mb-6" />

          <div className="text-lg sm:text-xl font-extrabold text-slate-800 max-w-[700px] mx-auto leading-relaxed">
            Full Stack Developer · DevOps Engineer
            <span className="block text-slate-500 font-bold text-sm sm:text-base mt-1">
              MERN Stack · Next.js · AWS · Cloud Security
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge variant="primary" className="py-1 px-3">
              <Sparkles className="w-3.5 h-3.5" /> Full Stack Engineer
            </Badge>
            <Badge variant="warning" className="py-1 px-3">
              <Flame className="w-3.5 h-3.5" /> DevOps &amp; DevSecOps
            </Badge>
            <Badge variant="success" className="py-1 px-3">
              <Trophy className="w-3.5 h-3.5" /> Katihar, Bihar, India
            </Badge>
          </div>
        </Card>

        {/* Main Grid: Left Profile Sidebar + Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDEBAR: Profile Image & Contact Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Card className="p-4 rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs">
              <Image
                src="/my.jpeg"
                alt="Ajit Kumar - Full Stack Engineer from Katihar, Bihar, India"
                width={400}
                height={400}
                className="w-full rounded-2xl border border-slate-100 object-cover shadow-xs"
                priority
              />
              <div className="p-4 text-center">
                <h3 className="font-black text-slate-900 text-lg">Ajit Kumar</h3>
                <p className="text-xs font-bold text-slate-500 block mt-0.5">DevOps &amp; Cloud Security Specialist</p>
                <div className="flex justify-center gap-2 mt-4">
                  <a href="https://github.com/ajitdev01" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="small" className="gap-1.5">
                      <FiGithub className="w-4 h-4" /> GitHub
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/ajitdev01" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="small" className="gap-1.5">
                      <FiLinkedin className="w-4 h-4" /> LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* Contact Details Card */}
            <Card className="p-6 rounded-3xl border border-slate-200 bg-white shadow-xs">
              <h4 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-4">
                Contact &amp; Info
              </h4>
              <div className="flex flex-col gap-3">
                {contactDetails.map((detail, idx) => {
                  const IconComp = detail.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <IconComp className="w-4 h-4 text-indigo-600 shrink-0" />
                      <div className="overflow-hidden">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {detail.label}
                        </span>
                        {detail.href ? (
                          <a href={detail.href} className="text-xs font-extrabold text-slate-900 hover:text-indigo-600 truncate block">
                            {detail.value}
                          </a>
                        ) : (
                          <span className="text-xs font-extrabold text-slate-900 truncate block">
                            {detail.value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* RIGHT COLUMN: Bio, Skills, Education & Values */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Professional Summary Card */}
            <Card className="p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
              <h2 className="text-xl font-black text-slate-900 mb-4">
                Professional Summary
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4 font-medium">
                I&apos;m <strong className="text-slate-900 font-extrabold">Ajit Dev</strong> (@ajitdev01), a <strong className="text-slate-900 font-extrabold">Full Stack Developer</strong> and <strong className="text-slate-900 font-extrabold">DevOps Engineer</strong> from <strong className="text-slate-900 font-extrabold">Katihar, Bihar, India</strong>. I specialize in building production-grade web applications using the <strong className="text-slate-900 font-extrabold">MERN Stack</strong> (MongoDB, Express, React, Node.js), <strong className="text-slate-900 font-extrabold">Next.js</strong>, and <strong className="text-slate-900 font-extrabold">TypeScript</strong>, alongside <strong className="text-slate-900 font-extrabold">AWS, Docker, Kubernetes, Terraform</strong> and Cloud Security practices.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6 font-medium">
                My focus is on writing clean, maintainable code and creating scalable architectures that solve real business problems. I&apos;ve delivered multiple full-stack projects from concept to deployment, ensuring performance, security, and great user experiences.
              </p>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                <Link href="/projects">
                  <Button variant="default" size="small" className="gap-2">
                    <Code className="w-4 h-4" /> View All Projects <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </Link>
                <Link href="/dsa">
                  <Button variant="outline" size="small" className="gap-2">
                    <Trophy className="w-4 h-4 text-amber-500" /> Explore DSA Dashboard (641 Solved) <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Tech Stack Chips Card */}
            <Card className="p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
              <h2 className="text-xl font-black text-slate-900 mb-5">
                Core Technical Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => {
                  const IconComp = skill.icon;
                  return (
                    <Badge
                      key={idx}
                      variant={skill.variant}
                      className="py-2 px-3 text-xs font-extrabold gap-1.5"
                    >
                      <IconComp className="w-3.5 h-3.5" />
                      {skill.name}
                    </Badge>
                  );
                })}
              </div>
            </Card>

            {/* Education & Training Timeline Card */}
            <Card className="p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
              <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" /> Education &amp; Training Timeline
              </h2>

              <div className="flex flex-col gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-black text-slate-900 text-sm">BCA — Cloud &amp; Security</h3>
                    <Badge variant="success" className="text-[10px]">Currently Enrolled</Badge>
                  </div>
                  <span className="text-xs font-bold text-indigo-600 block mb-1">Amity University Online (2025 – 2027)</span>
                  <p className="text-xs font-medium text-slate-600">Secure system designs, operating systems (Linux), databases, cloud security, and algorithmic logic.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-black text-slate-900 text-sm">Practical Software Training</h3>
                    <Badge variant="outline" className="text-[10px]">ISO Certified</Badge>
                  </div>
                  <span className="text-xs font-bold text-purple-600 block mb-1">Brainzima Innovation Institute · Katihar, Bihar</span>
                  <p className="text-xs font-medium text-slate-600">Hands-on developer training specializing in Python scripting, API architecture, React/Next.js, and MERN Stack.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-black text-slate-900 text-sm">Project Exposure &amp; SDLC</h3>
                    <Badge variant="outline" className="text-[10px]">Industry Exposure</Badge>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 block mb-1">Rexvel</span>
                  <p className="text-xs font-medium text-slate-600">Real-world client requirements, team collaboration, versioning pipelines, and web development SDLC.</p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500">Detailed Timeline &amp; Credentials</span>
                <Link href="/education">
                  <Button variant="link" size="sm" className="gap-1">
                    View Full Education Matrix <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <h3 className="font-black text-slate-900 text-sm">Clean Code</h3>
                </div>
                <p className="text-xs font-medium text-slate-500">Modular, documented, and maintainable C++ / TypeScript codebases.</p>
              </Card>

              <Card className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <h3 className="font-black text-slate-900 text-sm">Scalable Architecture</h3>
                </div>
                <p className="text-xs font-medium text-slate-500">Cloud-native Docker containerization and AWS infrastructure.</p>
              </Card>

              <Card className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <h3 className="font-black text-slate-900 text-sm">Performance First</h3>
                </div>
                <p className="text-xs font-medium text-slate-500">Optimized logarithmic O(log N) runtime execution speed.</p>
              </Card>

              <Card className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <h3 className="font-black text-slate-900 text-sm">DevOps &amp; Security</h3>
                </div>
                <p className="text-xs font-medium text-slate-500">Zero-trust cloud security and automated CI/CD pipelines.</p>
              </Card>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
