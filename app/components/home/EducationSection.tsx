'use client';

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const FiAward = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const FiBriefcase = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const FiTrendingUp = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 bg-slate-950/25 border-t border-b border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-indigo-500/20">
            <FiAward className="w-3.5 h-3.5" /> Learning & Exposure
          </span>
          <h2 className="text-3xl font-black text-white mb-3">
            Education & Industry Exposure
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Theoretical baseline, professional engineering training, and real-world project delivery exposure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Amity BCA */}
          <motion.div 
            variants={fadeUp} 
            className="group relative rounded-3xl p-8 glass-panel glass-panel-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white mb-5 shadow-md shadow-indigo-500/10">
                <FiAward />
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded border border-indigo-500/20">
                  Cloud & Security
                </span>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded border border-emerald-500/20">
                  Currently Enrolled
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-indigo-400 font-semibold text-sm mb-4">
                Amity University Online
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Academic program covering secure system designs, operating systems (Linux), databases, cloud security, and algorithmic logic.
              </p>
            </div>
            <Link 
              href="/education" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 mt-auto group/link"
            >
              Explore Coursework & Timeline
              <span className="transition-transform group-hover/link:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* Card 2: Brainzima */}
          <motion.div 
            variants={fadeUp} 
            className="group relative rounded-3xl p-8 glass-panel glass-panel-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 flex items-center justify-center text-white mb-5 shadow-md shadow-purple-500/10">
                <FiTrendingUp />
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-[10px] font-bold rounded border border-purple-500/20">
                  ISO Certified
                </span>
                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-[10px] font-bold rounded border border-amber-500/20">
                  Full Stack
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Practical Software Training
              </h3>
              <p className="text-purple-400 font-semibold text-sm mb-4">
                Brainzima Innovation Institute
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Hands-on developer training specializing in python scripting, version control, API architecture, React/Next.js and MERN Stack.
              </p>
            </div>
            <Link 
              href="/education" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300 mt-auto group/link"
            >
              View Practical Competency & Badges
              <span className="transition-transform group-hover/link:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* Card 3: Rexvel */}
          <motion.div 
            variants={fadeUp} 
            className="group relative rounded-3xl p-8 glass-panel glass-panel-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-indigo-500 flex items-center justify-center text-white mb-5 shadow-md shadow-emerald-500/10">
                <FiBriefcase />
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded border border-emerald-500/20">
                  Industry Exposure
                </span>
                <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded border border-indigo-500/20">
                  Real-World Projects
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Project Exposure & SDLC
              </h3>
              <p className="text-emerald-400 font-semibold text-sm mb-4">
                Rexvel
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Understanding client-focused requirements, team collaboration, versioning pipelines, and professional web development workflows.
              </p>
            </div>
            <Link 
              href="/education" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 mt-auto group/link"
            >
              Explore Industry Experience
              <span className="transition-transform group-hover/link:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
