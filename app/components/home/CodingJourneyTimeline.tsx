"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Trophy, Award, Zap, Code, Database, Terminal } from "lucide-react";

export default function CodingJourneyTimeline() {
  const milestones = [
    {
      year: "2026",
      title: "TOP 1% PORTFOLIO & DSA MASTERY",
      subtitle: "LeetCode 450+ & Systems Engineering",
      desc: "Achieved 450+ solved challenges on LeetCode with 180+ consecutive practice days. Implemented technical systems research across 28 computer science topics including DevSecOps, caching layers, and reverse proxies.",
      icon: Trophy,
      color: "border-indigo-500 text-indigo-600 bg-indigo-50",
    },
    {
      year: "2025",
      title: "CLOUD & FULL STACK DEVELOPMENT",
      subtitle: "Amity Online & Brainzima Institute",
      desc: "Enrolled in BCA (Cloud & Security) at Amity University Online. Completed intensive software development and systems engineering training at Brainzima Innovation Institute. Built projects with Next.js, MERN stack, and Docker containers.",
      icon: Award,
      color: "border-purple-500 text-purple-600 bg-purple-50",
    },
    {
      year: "2024",
      title: "SYSTEMS AUTOMATION & DEVOP BASICS",
      subtitle: "Linux Servers & Pipelines",
      desc: "Engineered automated CI/CD deployment pipelines using GitHub Actions, deployed virtual applications via Docker container namespaces, and hardened Linux VPS server environments using fail2ban and strict firewalls.",
      icon: Terminal,
      color: "border-emerald-500 text-emerald-600 bg-emerald-50",
    },
    {
      year: "2023",
      title: "WEB DEV INITIATION & CORE PROGRAMMING",
      subtitle: "JavaScript, PHP & Relational Databases",
      desc: "Began programming journey with core languages. Built interactive web scripts using JavaScript, backend forms processing with PHP, and relational databases with MySQL indexing schemas.",
      icon: Code,
      color: "border-amber-500 text-amber-600 bg-amber-50",
    },
  ];

  return (
    <section className="py-16 bg-gray-50/50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight flex items-center justify-center gap-2">
            <Zap className="w-6 h-6 text-indigo-600" /> Coding & Engineering Journey
          </h2>
          <p className="text-gray-500 text-sm mt-2">Chronological path of technical acquisition, study programs, and system engineering milestones</p>
        </div>

        <div className="relative border-l border-gray-200 ml-4 md:ml-32">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="mb-12 last:mb-0 relative pl-6 md:pl-8">
                {/* Year Label for larger screens */}
                <div className="absolute -left-6 md:-left-36 top-1.5 hidden md:flex flex-col items-end w-24">
                  <span className="text-base font-black text-gray-900 tracking-wider bg-white border border-gray-200 px-3 py-1 rounded-xl shadow-xs">
                    {item.year}
                  </span>
                </div>

                {/* Timeline Connector node */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className={`absolute -left-3 top-1.5 w-6 h-6 rounded-full border-2 ${item.color} flex items-center justify-center z-10 shadow-sm`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full md:hidden">
                        {item.year}
                      </span>
                      <h3 className="text-base font-black text-gray-900 tracking-tight mt-1 sm:mt-0">
                        {item.title}
                      </h3>
                      <h4 className="text-xs font-semibold text-gray-500">
                        {item.subtitle}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
