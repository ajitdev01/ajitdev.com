"use client";

import React, { useState, useEffect, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Settings,
  FolderGit2,
  GraduationCap,
  Mail,
  Menu as MenuIcon,
  X as CloseIcon,
  Code,
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Skills", path: "/skills", icon: Settings },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Skip to Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1200] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Floating Glassmorphic Header */}
      <header
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] max-w-7xl z-[1100] transition-all duration-350 ease-out"
      >
        <div
          className={`relative overflow-hidden px-4 sm:px-6 py-2.5 rounded-[24px] border backdrop-blur-[20px] flex items-center justify-between transition-all duration-350 ${
            scrolled
              ? "bg-white/94 border-indigo-500/30 shadow-[0_12px_35px_-5px_rgba(79,70,229,0.15),0_4px_12px_rgba(0,0,0,0.03)]"
              : "bg-white/85 border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
          }`}
        >
          {/* Top Rainbow Accent Border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-500 to-blue-500" />

          {/* Logo & Brand Info */}
          <Link href="/" className="group flex items-center gap-3 no-underline">
            <div className="w-[42px] h-[42px] rounded-[14px] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/35 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-indigo-600/45">
              <Code className="w-5 h-5" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-slate-900 text-base leading-tight group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Ajit Dev
                </span>
                {/* Live Status Indicator Dot */}
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              </div>
              <span className="text-slate-600 font-extrabold text-[0.68rem] hidden sm:block leading-none mt-0.5">
                Full Stack · DevOps · Cloud Security
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-slate-50/90 p-1.5 rounded-[22px] border border-slate-200/90">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              const IconComp = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-[16px] text-sm font-extrabold transition-all duration-250 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/35"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 hover:-translate-y-0.5 hover:scale-[1.04] active:scale-98"
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open mobile navigation menu"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 rounded-[14px] bg-slate-100 text-slate-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[1200] lg:hidden">
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity animate-in fade-in"
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 bottom-0 w-[290px] bg-white p-6 shadow-2xl rounded-l-[24px] flex flex-col z-[1210] animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-indigo-600" />
                <span className="font-black text-slate-900 text-base">
                  Navigation Menu
                </span>
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close mobile navigation menu"
                type="button"
                className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path;
                const IconComp = item.icon;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-[16px] text-sm font-extrabold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/30"
                        : "text-slate-600 hover:bg-slate-100 hover:translate-x-1"
                    }`}
                  >
                    <IconComp className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-500"}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-[88px] md:h-[104px]" aria-hidden="true" />
    </>
  );
};

export default memo(Header);

