"use client";

import React from "react";
import { Briefcase, Calendar, FolderGit, GraduationCap, CheckCircle } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      role: "Full Stack & Systems Practice",
      company: "Personal & Academic Projects",
      period: "2024 - Present",
      type: "Practice",
      desc: "Designed and implemented scalable MERN Stack, Next.js, and cloud application systems. Configured secured proxy routing nodes, micro-networks, and automated code testing checkpoints.",
      icon: Briefcase,
    },
    {
      role: "BCA Student (Cloud & Security)",
      company: "Amity University Online",
      period: "2025 - Present",
      type: "Academic",
      desc: "Acquiring foundational insights in computer science, software design principles, low-level data structures, internet security audits, and cloud systems management.",
      icon: GraduationCap,
    },
    {
      role: "Topical Research and Open Source Writer",
      company: "ajitdev.com Publications",
      period: "2026",
      type: "Technical Writing",
      desc: "Authored 28 deep-dive system architecture guidelines, systems engineering walkthroughs, and security checklists spanning cloud configurations, cryptography, and container protocols.",
      icon: FolderGit,
    },
  ];

  return (
    <section className="py-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center justify-center gap-2">
            <GraduationCap className="w-6.5 h-6.5 text-indigo-650" /> Education & Practice Timelines
          </h2>
          <p className="text-gray-500 text-sm mt-2">Historical milestones of formal education, independent engineering practice, and technical publications</p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group"
              >
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-2 flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-650 transition-colors leading-none">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-gray-500 mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 font-bold uppercase text-[9px] tracking-wider">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
