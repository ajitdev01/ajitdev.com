"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Terminal, Zap, Code, Sparkles } from "lucide-react";

export default function HeroImprovements() {
  const highlights = [
    { text: "MERN Stack Specialist", icon: Code, color: "text-indigo-500", bg: "bg-indigo-50/50" },
    { text: "DevOps & Pipelines", icon: Terminal, color: "text-purple-500", bg: "bg-purple-50/50" },
    { text: "Cloud & DevSecOps", icon: Shield, color: "text-emerald-500", bg: "bg-emerald-50/50" },
    { text: "System Architecture", icon: Cpu, color: "text-amber-500", bg: "bg-amber-50/50" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`flex items-center gap-2.5 p-3 rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 cursor-default group`}
            >
              <div className={`p-2 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-gray-700 group-hover:text-indigo-650 transition-colors">
                {item.text}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Decorative Floating Sparkle */}
      <div className="absolute top-20 right-10 animate-bounce-slow pointer-events-none opacity-40">
        <Sparkles className="w-6 h-6 text-indigo-400" />
      </div>
      <div className="absolute bottom-40 left-10 animate-pulse pointer-events-none opacity-30">
        <Zap className="w-5 h-5 text-purple-400" />
      </div>
    </div>
  );
}
