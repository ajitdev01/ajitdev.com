'use client';

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, Briefcase, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
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
      className="py-24 bg-slate-50 border-t border-b border-slate-200/70 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle Background Glow Circles */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-50 text-blue-700 text-xs font-black rounded-full mb-3 uppercase tracking-wider border border-blue-200/60 shadow-xs">
            <Award className="w-3.5 h-3.5 text-blue-600" /> Learning & Exposure
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">
            Education & Industry Exposure
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Theoretical baseline, professional engineering training, and real-world project delivery exposure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Amity BCA */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-650 flex items-center justify-center text-white mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[10px] font-black rounded-full border border-blue-200/60">
                  Cloud & Security
                </span>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-full border border-emerald-200/60">
                  Currently Enrolled
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-indigo-600 font-bold text-sm mb-4">
                Amity University Online
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Academic program covering secure system designs, operating systems (Linux), databases, cloud security, and algorithmic logic.
              </p>
            </div>

            {/* Dynamic Interactive Link Button Pill */}
            <Link 
              href="/education" 
              className="group/btn w-full mt-auto inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-blue-700 font-extrabold text-xs transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md hover:shadow-blue-600/20"
            >
              <span>Explore Coursework & Timeline</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </Link>
          </motion.div>

          {/* Card 2: Brainzima */}
          <motion.div 
            variants={fadeUp} 
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="px-2.5 py-1 bg-purple-50 text-purple-700 text-[10px] font-black rounded-full border border-purple-200/60">
                  ISO Certified
                </span>
                <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-[10px] font-black rounded-full border border-amber-200/60">
                  Full Stack
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                Practical Software Training
              </h3>
              <p className="text-purple-600 font-bold text-sm mb-4">
                Brainzima Innovation Institute
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Hands-on developer training specializing in python scripting, version control, API architecture, React/Next.js and MERN Stack.
              </p>
            </div>

            {/* Dynamic Interactive Link Button Pill */}
            <Link 
              href="/education" 
              className="group/btn w-full mt-auto inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-purple-50/70 border border-purple-200/80 text-purple-700 font-extrabold text-xs transition-all duration-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-md hover:shadow-purple-600/20"
            >
              <span>View Practical Competency & Badges</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </Link>
          </motion.div>

          {/* Card 3: Rexvel */}
          <motion.div 
            variants={fadeUp} 
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mb-6 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-full border border-emerald-200/60">
                  Industry Exposure
                </span>
                <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[10px] font-black rounded-full border border-blue-200/60">
                  Real-World Projects
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                Project Exposure & SDLC
              </h3>
              <p className="text-emerald-600 font-bold text-sm mb-4">
                Rexvel
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Understanding client-focused requirements, team collaboration, versioning pipelines, and professional web development workflows.
              </p>
            </div>

            {/* Dynamic Interactive Link Button Pill */}
            <Link 
              href="/education" 
              className="group/btn w-full mt-auto inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-700 font-extrabold text-xs transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-md hover:shadow-emerald-600/20"
            >
              <span>Explore Industry Experience</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
