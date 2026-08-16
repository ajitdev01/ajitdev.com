"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const ROLES = [
  "Full Stack Engineer",
  "MERN & Next.js Specialist",
  "DevOps & Cloud Architect",
  "TypeScript & Security Specialist",
];

export default function HeroAnimatedText() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 text-center lg:text-left relative select-none">
      {/* Background Soft Glow */}
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/3 -right-16 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Availability Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        whileHover={{ scale: 1.02 }}
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/90 mx-auto lg:mx-0 shadow-2xs hover:border-indigo-300 transition-all duration-200 select-none"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-wide flex items-center gap-1.5 font-sans">
          Available for Hire &amp; Contract Opportunities
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
        </span>
      </motion.div>

      {/* Animated Headline */}
      <div className="min-h-[100px] sm:min-h-[110px] md:min-h-[130px] flex items-center justify-center lg:justify-start">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] text-slate-900 font-sans">
          <span className="relative inline-block pb-3">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent filter drop-shadow-2xs"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>

            {/* Subtle Gradient Accent Line */}
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full shadow-2xs"
            />
          </span>
        </h1>
      </div>

      {/* High-Readability Bio Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
        className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal font-sans"
      >
        I build{" "}
        <span className="text-slate-900 font-semibold bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
          production-grade web applications
        </span>{" "}
        that solve real business problems. Specialized in{" "}
        <span className="text-indigo-600 font-bold hover:text-indigo-700 underline decoration-indigo-300 decoration-2 underline-offset-4 transition-colors">
          MERN Stack
        </span>
        ,{" "}
        <span className="text-purple-600 font-bold hover:text-purple-700 underline decoration-purple-300 decoration-2 underline-offset-4 transition-colors">
          Next.js
        </span>
        , and{" "}
        <span className="text-pink-600 font-bold hover:text-pink-700 underline decoration-pink-300 decoration-2 underline-offset-4 transition-colors">
          TypeScript
        </span>
        .
      </motion.p>
    </div>
  );
}





