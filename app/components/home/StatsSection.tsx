'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const FiBriefcase = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const FiAward = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const FiUsers = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const FiCheckCircle = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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

export default function StatsSection() {
  const stats = [
    {
      value: "518+",
      label: "LeetCode Solved",
      icon: FiAward,
      description: "Strong algorithmic logic",
      href: "https://leetcode.com/u/ajitdev01/",
      isExternal: true,
      badge: "Rank #192,927"
    },
    {
      value: "5+",
      label: "Production Apps",
      icon: FiBriefcase,
      description: "MERN & Next.js systems",
      href: "/projects",
      isExternal: false,
      badge: "Full Stack"
    },
    {
      value: "242+",
      label: "Coding Streak",
      icon: FiUsers,
      description: "Consistent daily practice",
      href: "https://leetcode.com/u/ajitdev01/",
      isExternal: true,
      badge: "200 Days Badge"
    },
    {
      value: "100%",
      label: "Success Rate",
      icon: FiCheckCircle,
      description: "On-time delivery",
      href: "/contact",
      isExternal: false,
      badge: "Verified"
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;
        const CardContent = (
          <div className="group relative bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all duration-300 h-full flex flex-col justify-between cursor-pointer">
            {stat.badge && (
              <span className="absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                {stat.badge}
              </span>
            )}
            <div>
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200 flex items-center justify-center transition-all duration-300">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
              <div className="text-2xl font-black text-gray-900 flex items-center justify-center gap-1">
                {stat.value}
                {stat.isExternal && (
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                )}
              </div>
              <div className="text-xs font-bold text-gray-700 mt-0.5">{stat.label}</div>
            </div>
            <div className="text-[10px] text-gray-400 mt-1 font-medium group-hover:text-indigo-500 transition-colors">
              {stat.description}
            </div>
          </div>
        );

        return (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            {stat.isExternal ? (
              <a
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${stat.label} on LeetCode @ajitdev01`}
                className="block h-full no-underline"
              >
                {CardContent}
              </a>
            ) : (
              <Link href={stat.href} className="block h-full no-underline">
                {CardContent}
              </Link>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
