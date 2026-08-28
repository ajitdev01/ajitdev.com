'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  BookOpen,
  Briefcase,
  Code,
  FileText,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  GraduationCap,
  Globe,
  Building2,
  CheckCircle2,
} from "lucide-react";

const FiGithub = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const FiLinkedin = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
  </svg>
);

export default function ContactDetailsCards() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const contactList = [
    {
      key: "primary_email",
      icon: Mail,
      title: "Primary Email",
      value: "support@ajitdev.com",
      link: "mailto:support@ajitdev.com",
      subtitle: "Business & Support Queries",
      badge: "Fast SLA",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      copyText: "support@ajitdev.com",
    },
    {
      key: "personal_email",
      icon: Mail,
      title: "Personal Email",
      value: "ajitk23192@gmail.com",
      link: "mailto:ajitk23192@gmail.com",
      subtitle: "Direct Communication • 24hr Response",
      badge: "Direct Inbox",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      copyText: "ajitk23192@gmail.com",
    },
    {
      key: "location",
      icon: MapPin,
      title: "Location",
      value: "Katihar, Bihar, India",
      link: "https://www.google.com/maps/place/Brainzima+Innovation+Institute/@25.5455446,87.5774064,17z",
      isExternal: true,
      subtitle: "Brainzima Innovation Institute • Remote Worldwide",
      badge: "📍 On-Site & Hybrid",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      key: "education",
      icon: GraduationCap,
      title: "Education",
      value: "BCA — Cloud & Security",
      link: null,
      subtitle: "Amity University Online • CGPA 7.95+",
      badge: "Academic Honors",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      key: "status",
      icon: Briefcase,
      title: "Current Status",
      value: "Open to Opportunities",
      link: null,
      subtitle: "Full Stack & DevOps Engineer • Remote / Contract",
      badge: "Available Now",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300 font-black",
      isStatusLive: true,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      handle: "@ajitdev01",
      url: "https://github.com/ajitdev01",
      icon: FiGithub,
      desc: "Open Source Projects & Repos",
      badge: "Active Commits",
      badgeColor: "bg-slate-900 text-white",
      hoverBg: "hover:border-slate-800 hover:shadow-slate-900/10",
      iconBg: "bg-slate-900 text-white",
    },
    {
      name: "LinkedIn",
      handle: "in/ajitdev01",
      url: "https://linkedin.com/in/ajitdev01",
      icon: FiLinkedin,
      desc: "Professional Network & Experience",
      badge: "Connect",
      badgeColor: "bg-blue-600 text-white",
      hoverBg: "hover:border-blue-500 hover:shadow-blue-500/10",
      iconBg: "bg-blue-600 text-white",
    },
    {
      name: "LeetCode",
      handle: "u/ajitdev01",
      url: "https://leetcode.com/u/ajitdev01/",
      icon: Code,
      desc: "641+ Data Structures Solved",
      badge: "641+ Solved",
      badgeColor: "bg-amber-500 text-white",
      hoverBg: "hover:border-amber-500 hover:shadow-amber-500/10",
      iconBg: "bg-amber-500 text-white",
    },
    {
      name: "Resume / CV",
      handle: "View Profile CV",
      url: "/resume",
      isInternal: true,
      icon: FileText,
      desc: "Full Stack & DevOps Experience PDF",
      badge: "Download PDF",
      badgeColor: "bg-indigo-600 text-white",
      hoverBg: "hover:border-indigo-500 hover:shadow-indigo-500/10",
      iconBg: "bg-indigo-600 text-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Contact Details Card */}
      <Card className="lg:col-span-6 p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white/90 backdrop-blur-md shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-indigo-600 block mb-1">
                Verified Directory
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Contact Information
              </h3>
            </div>
            <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
              <Mail className="w-5 h-5" />
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            {contactList.map((item) => {
              const IconComp = item.icon;
              const isCopied = copiedKey === item.key;

              return (
                <div
                  key={item.key}
                  className="group relative p-4 rounded-2xl bg-slate-50/80 hover:bg-slate-100/90 border border-slate-100 transition-all duration-200 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-3 rounded-xl bg-white text-indigo-600 shadow-2xs group-hover:scale-105 transition-transform shrink-0 border border-slate-100">
                      <IconComp className="w-4 h-4" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${item.badgeColor} inline-flex items-center gap-1`}>
                            {item.isStatusLive && (
                              <span className="relative flex h-2 w-2 mr-0.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                              </span>
                            )}
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.isExternal ? "_blank" : undefined}
                          rel={item.isExternal ? "noopener noreferrer" : undefined}
                          className="text-sm font-extrabold text-slate-900 hover:text-indigo-600 transition-colors truncate block flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                        >
                          {item.value}
                          {item.isExternal && <ArrowUpRight className="w-3.5 h-3.5 opacity-60 inline shrink-0" />}
                        </a>
                      ) : (
                        <span className="text-sm font-extrabold text-slate-900 block truncate">
                          {item.value}
                        </span>
                      )}

                      <span className="text-xs font-medium text-slate-500 block truncate mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  {item.copyText && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopy(item.copyText!, item.key)}
                      className={`shrink-0 h-9 px-3 text-xs font-bold transition-all rounded-xl ${
                        isCopied
                          ? "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-indigo-600"
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 mr-1" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 mr-1" /> Copy
                        </>
                      )}
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Connect Online Card */}
      <Card className="lg:col-span-6 p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white/90 backdrop-blur-md shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-indigo-600 block mb-1">
                Digital Presence
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Connect Online (@ajitdev01)
              </h3>
            </div>
            <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>

          <p className="text-xs font-semibold text-slate-500 mb-6 leading-relaxed">
            Follow my latest open source contributions, algorithmic problem solving, professional achievements, and tech articles across platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;

              const content = (
                <div
                  className={`p-5 rounded-2xl bg-slate-50/90 hover:bg-white border border-slate-200/80 transition-all duration-300 ${social.hoverBg} shadow-2xs hover:shadow-md group flex flex-col justify-between h-full min-h-[140px]`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-xl ${social.iconBg} shadow-xs group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${social.badgeColor} shadow-2xs`}>
                      {social.badge}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {social.name}
                      </h4>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <span className="text-xs font-mono font-bold text-indigo-600 block">
                      {social.handle}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 block mt-1 line-clamp-1">
                      {social.desc}
                    </span>
                  </div>
                </div>
              );

              return social.isInternal ? (
                <Link key={social.name} href={social.url} className="no-underline">
                  {content}
                </Link>
              ) : (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> All profiles active & updated
          </span>
          <span className="font-mono text-[11px] font-bold text-slate-400">@ajitdev01</span>
        </div>
      </Card>

    </div>
  );
}
