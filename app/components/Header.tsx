"use client";

import React, { useState, useEffect, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code, Menu as MenuIcon, X as CloseIcon, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SKILLS", path: "/skills" },
  { name: "PROJECTS", path: "/projects" },
  { name: "EDUCATION", path: "/education" },
  { name: "CONTACT", path: "/contact" },
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
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-[1200] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:shadow-lg text-xs font-semibold"
      >
        Skip to main content
      </a>

      {/* Top Hairline Ambient Accent Streak */}
      <div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 via-purple-500/40 to-transparent z-[1101] pointer-events-none" />

      {/* Modern Vercel/Linear Inspired Header Bar (70px height) */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-[1100] h-[70px] transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-white/92 backdrop-blur-2xl border-b border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            : "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_4px_0_rgba(0,0,0,0.02)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Left Side: Logo & Brand Info */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 no-underline select-none"
          >
            {/* Dual-Layer Glow Logo Icon */}
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-40 blur-[4px] group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative w-[38px] h-[38px] rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white flex items-center justify-center shadow-md shadow-indigo-500/25 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
                <Code className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>

            {/* Brand Typography Stack & Status */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-[15px] sm:text-base tracking-tight leading-none group-hover:text-indigo-600 transition-colors duration-200">
                  AJIT DEV
                </span>

                {/* Refined Live Status Badge */}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[9.5px] font-bold tracking-wide uppercase">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Available
                </span>
              </div>

              <span className="text-[11px] sm:text-[11.5px] text-slate-500 font-medium tracking-normal leading-tight mt-1 opacity-90 hidden sm:block">
                Full Stack • DevOps • Cloud Security
              </span>
            </div>
          </Link>

          {/* Right Side: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.path ||
                (item.path !== "/" && pathname?.startsWith(item.path));
              const isContact = item.name === "CONTACT";
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-[11.5px] font-bold tracking-[0.05em] uppercase transition-all duration-200 ease-out select-none ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 via-indigo-600 to-purple-600 text-white shadow-[0_4px_16px_-2px_rgba(79,70,229,0.4)] ring-1 ring-white/20"
                      : isContact
                      ? "text-slate-700 hover:text-indigo-600 bg-slate-100/70 hover:bg-indigo-50/80 border border-slate-200/80 hover:border-indigo-200/80"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100/80 active:scale-95"
                  }`}
                >
                  <span>{item.name}</span>
                  {isContact && !isActive && (
                    <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open navigation menu"
              type="button"
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100/80 border border-slate-200/80 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[1200] lg:hidden">
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity animate-in fade-in"
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[290px] bg-white p-6 shadow-2xl flex flex-col z-[1210] animate-in slide-in-from-right duration-250">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-xs">
                  <Code className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="font-extrabold text-slate-900 text-base tracking-tight">
                  AJIT DEV
                </span>
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close navigation menu"
                type="button"
                className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.path ||
                  (item.path !== "/" && pathname?.startsWith(item.path));
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* 70px Exact Spacer for Fixed Header */}
      <div className="h-[70px]" aria-hidden="true" />
    </>
  );
};

export default memo(Header);

