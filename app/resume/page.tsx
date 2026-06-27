"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Download, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code, Target } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import PrintButton from "@/app/components/PrintButton";

const Github = ({ className }: { className?: string }) => (
  <svg className={className || "w-3.5 h-3.5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className || "w-3.5 h-3.5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
  </svg>
);

export default function ResumePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/resume/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ajitdev.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resume",
        "item": "https://ajitdev.com/resume",
      },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ajit Kumar",
    "jobTitle": "Software Engineer & Full Stack Developer",
    "url": "https://ajitdev.com",
    "sameAs": [
      "https://github.com/ajitdev01",
      "https://linkedin.com/in/ajitdev01",
      "https://leetcode.com/ajitdev01"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Amity University Online"
    }
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={personSchema} />

      <section className="py-12 bg-slate-50 min-h-screen text-slate-800 relative overflow-hidden print:bg-white print:py-0 print:text-black">
        {/* Soft Background Glow (hidden on print) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 print:hidden" aria-hidden="true">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 print:px-0 print:max-w-full">
          {/* Back Nav (hidden on print) */}
          <div className="flex justify-between items-center mb-8 print:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-650 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <PrintButton />
          </div>

          {/* RESUME SHEET */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-md print:shadow-none print:border-none print:p-0">
            {/* Header / Name Block */}
            <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight print:text-2xl print:text-black">
                  Ajit Kumar
                </h1>
                <p className="text-indigo-600 font-bold text-sm uppercase tracking-wider mt-1 print:text-black print:text-xs">
                  Software Engineer | Full Stack Developer | DevOps & Cloud Security
                </p>
                
                {/* Career Goals */}
                <p className="text-gray-550 text-xs mt-3 leading-relaxed max-w-xl print:text-slate-700 print:mt-2">
                  Cloud & Security enthusiast aiming to engineer scalable, highly available web platforms. Specialized in React/Next.js, Node.js API stacks, automated DevSecOps scanning loops, and robust algorithm optimization patterns.
                </p>
              </div>

              {/* Contact Grid */}
              <div className="text-xs space-y-2 text-gray-600 flex-shrink-0 print:text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-indigo-500 print:text-black" />
                  <a href="mailto:support@ajitdev.com" className="hover:underline">support@ajitdev.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-indigo-500 print:text-black" />
                  <a href="mailto:ajitk23192@gmail.com" className="hover:underline">ajitk23192@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-indigo-500 print:text-black" />
                  <a href="tel:+916205526784" className="hover:underline">+91 62055 26784</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500 print:text-black" />
                  <span>Katihar, Bihar, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-indigo-500 print:text-black" />
                  <a href="https://github.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/ajitdev01</a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-indigo-500 print:text-black" />
                  <a href="https://linkedin.com/in/ajitdev01" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/ajitdev01</a>
                </div>
              </div>
            </div>

            {/* Resume Main Body */}
            <div className="grid md:grid-cols-12 gap-8 pt-8">
              
              {/* Left Column (Main details) */}
              <div className="md:col-span-8 space-y-8">
                
                {/* Core Achievements */}
                <div className="space-y-4">
                  <h2 className="text-base font-black text-gray-900 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2 print:text-sm print:text-black print:pb-1">
                    <Award className="w-4 h-4 text-indigo-600 print:text-black" /> Key Highlights & Achievements
                  </h2>
                  <ul className="list-disc list-inside text-xs text-gray-650 space-y-2 leading-relaxed print:text-slate-700">
                    <li>
                      <strong>Competitive Programming:</strong> Solved <strong>450+ LeetCode Problems</strong> with an active <strong>180+ Day Streak</strong>, demonstrating strong algorithm logic and daily practice consistency.
                    </li>
                    <li>
                      <strong>Strong DSA Core:</strong> Mastered fundamental algorithmic structures (Arrays, Strings, Hashing, Two Pointer, Sliding Window, Binary Search, Stack, Queue, Linked List, Recursion, Backtracking) and currently training in Graphs, Dynamic Programming, and System Design.
                    </li>
                    <li>
                      <strong>Academic specialization:</strong> Student of <strong>Bachelor of Computer Applications (Cloud & Security)</strong>, building theoretical foundations in kernel namespaces, cryptography, and network subnet isolations.
                    </li>
                    <li>
                      <strong>Continuous Developer:</strong> Maintaining an active GitHub profile with modular starter boilerplates, multi-stage Docker configurations, and responsive client interfaces.
                    </li>
                  </ul>
                </div>

                {/* Academic Qualifications */}
                <div className="space-y-4">
                  <h2 className="text-base font-black text-gray-900 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2 print:text-sm print:text-black print:pb-1">
                    <GraduationCap className="w-4 h-4 text-indigo-600 print:text-black" /> Education & Credentials
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-start text-xs">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm print:text-xs">Bachelor of Computer Applications (BCA)</h3>
                        <p className="text-indigo-600 font-bold print:text-black">Specialization: Cloud & Security</p>
                        <p className="text-gray-500 font-medium mt-0.5">Amity University Online</p>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-150 px-2 py-0.5 rounded">Ongoing</span>
                    </div>

                    <div className="flex justify-between items-start text-xs">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm print:text-xs">DevOps Engineering & Full Stack Specialist</h3>
                        <p className="text-indigo-600 font-bold print:text-black">Brainzima Innovation Institute</p>
                        <p className="text-gray-550 mt-1 leading-relaxed">Practical training in MERN stack development, Linux server hardening, Git structures, and Docker/Kubernetes container orchestration pipelines.</p>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-150 px-2 py-0.5 rounded">Completed</span>
                    </div>
                  </div>
                </div>

                {/* Key Projects */}
                <div className="space-y-4">
                  <h2 className="text-base font-black text-gray-900 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2 print:text-sm print:text-black print:pb-1">
                    <Briefcase className="w-4 h-4 text-indigo-600 print:text-black" /> Featured Engineering Projects
                  </h2>

                  <div className="space-y-4 text-xs">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-gray-900 text-sm print:text-xs">DevOps Automation & Security Pipeline</h3>
                        <span className="text-indigo-600 font-semibold print:text-black">GitHub Actions | Docker | Trivy</span>
                      </div>
                      <p className="text-gray-650 leading-relaxed print:text-slate-700">
                        Shift-left security integration project. Configured GitHub Actions CI/CD workflows to compile static React bundles, trigger automatic SAST audits, and run Trivy vulnerability scans on Docker layers before registry uploads.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-gray-900 text-sm print:text-xs">Cloud Security Lab: VPC Network Isolation</h3>
                        <span className="text-indigo-600 font-semibold print:text-black">AWS | IAM Boundaries | Terraform</span>
                      </div>
                      <p className="text-gray-655 leading-relaxed print:text-slate-700">
                        Designed secure VPC architectures using Terraform. Segregated database nodes inside private, non-egress subnets, routing internet-facing services through load balancers and NAT gateways, protected by strict security group firewalls.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-gray-900 text-sm print:text-xs">Stateless MERN Platform with Caching</h3>
                        <span className="text-indigo-600 font-semibold print:text-black">MongoDB | Express | React | Redis</span>
                      </div>
                      <p className="text-gray-655 leading-relaxed print:text-slate-700">
                        Constructed a scalable transaction web portal. Implemented JWT token logic inside secure HTTP-only cookies and applied a Cache-Aside database query layer using Redis nodes to reduce database query locks.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column (Skills & Tech Stack) */}
              <div className="md:col-span-4 space-y-8">
                
                {/* Tech Stack Grid */}
                <div className="space-y-4">
                  <h2 className="text-base font-black text-gray-900 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2 print:text-sm print:text-black print:pb-1">
                    <Code className="w-4 h-4 text-indigo-600 print:text-black" /> Tech Stack
                  </h2>

                  <div className="space-y-4 text-xs">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1.5 uppercase text-[10px] tracking-wide">Frontend</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "MUI", "Framer Motion"].map(t => (
                          <span key={t} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 font-medium text-[10px] print:bg-white print:text-black print:border-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-1.5 uppercase text-[10px] tracking-wide">Backend & DB</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {["Node.js", "Express.js", "PHP", "REST APIs", "JWT", "MongoDB", "MySQL", "SQL"].map(t => (
                          <span key={t} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 font-medium text-[10px] print:bg-white print:text-black print:border-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-1.5 uppercase text-[10px] tracking-wide">Cloud & DevOps</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {["Linux", "Git", "GitHub Actions", "Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Nginx"].map(t => (
                          <span key={t} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 font-medium text-[10px] print:bg-white print:text-black print:border-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-1.5 uppercase text-[10px] tracking-wide">Languages</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {["C++", "JavaScript", "TypeScript", "PHP", "Python", "SQL"].map(t => (
                          <span key={t} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 font-medium text-[10px] print:bg-white print:text-black print:border-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Target Focus areas */}
                <div className="space-y-4">
                  <h2 className="text-base font-black text-gray-900 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-2 print:text-sm print:text-black print:pb-1">
                    <Target className="w-4 h-4 text-indigo-600 print:text-black" /> Current Learning
                  </h2>
                  <div className="space-y-2.5 text-xs text-gray-650 print:text-slate-700">
                    <div className="flex justify-between">
                      <span>Advanced DSA (Trees, Graphs, DP)</span>
                      <span className="font-bold">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span>System Design (HLD / LLD)</span>
                      <span className="font-bold">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Zero Trust Networking</span>
                      <span className="font-bold">Focus</span>
                    </div>
                  </div>
                </div>

                {/* Footer notes on print */}
                <div className="pt-8 border-t border-slate-100 text-center text-[10px] text-gray-450 hidden print:block">
                  Reference checks and portfolio code demo links are available at https://ajitdev.com.
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
