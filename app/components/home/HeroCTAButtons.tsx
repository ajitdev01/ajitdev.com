"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroCTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 select-none"
    >
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
        <Link
          href="/contact"
          className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-bold text-xs sm:text-base text-white overflow-hidden shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 select-none active:scale-95"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] animate-gradient-x" />
          {/* Hover glow highlight sweep */}
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          
          <span className="relative z-10 flex items-center gap-2 tracking-wide">
            Hire Me &rarr; Build Scalable Apps
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
