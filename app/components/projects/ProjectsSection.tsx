'use client';

import React, { useState, useMemo, useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiStar, FiZap, FiGithub, FiExternalLink } from "@/lib/icons";
import { projects } from "@/lib/projects";

const filterCategories = [
  { id: "All", label: "All Projects" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "MERN Stack", label: "MERN Stack" },
  { id: "LAMP Stack", label: "LAMP Stack" },
  { id: "Next.js", label: "Next.js" },
  { id: "DSA", label: "DSA • Problem Solving" },
  { id: "Frontend", label: "Frontend" },
  { id: "DevOps", label: "DevOps" }
];

export default function ProjectsSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const filteredProjects = useMemo(() => {
    let list = projects;
    if (activeFilter !== "All") {
      list = list.filter(p =>
        p.category === activeFilter ||
        p.subcategory === activeFilter ||
        p.tech.includes(activeFilter)
      );
    }
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tech.some(t => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeFilter, searchQuery]);

  const filtersWithCounts = useMemo(() =>
    filterCategories.map(f => ({
      ...f,
      count: f.id === "All"
        ? projects.length
        : projects.filter(p => p.category === f.id || p.subcategory === f.id).length
    })), []
  );

  return (
    <>
      {/* === SEARCH INPUT === */}
      <div className="relative w-full max-w-md mx-auto mb-10 group">
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search projects by title, description, or stack..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-10 py-3 rounded-2xl border border-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-transparent bg-slate-900/60 backdrop-blur-sm shadow-md transition-all text-white text-sm outline-none"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-white transition-colors cursor-pointer"
          >
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* === MOBILE FILTER BUTTON === */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-650 text-white rounded-full flex items-center justify-center shadow-2xl z-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label={isMobileMenuOpen ? "Close filter" : "Open project filter"}
      >
        {isMobileMenuOpen ? <FiChevronDown className="w-5 h-5" /> : <FiChevronUp className="w-5 h-5" />}
      </button>

      {/* === MOBILE FILTER MENU === */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 bg-slate-950 border-t border-white/5 shadow-2xl z-40 rounded-t-2xl max-h-[60vh] overflow-y-auto">
          <div className="p-6 space-y-5">
            <h2 className="text-xl font-bold text-white">Filter Projects</h2>
            <div className="flex flex-wrap gap-3">
              {filtersWithCounts.map(f => (
                <button
                  key={f.id}
                  onClick={() => { setActiveFilter(f.id); setIsMobileMenuOpen(false); }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${activeFilter === f.id
                    ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 shadow-md"
                    : "bg-slate-900 border-white/5 text-slate-350"}`}
                >
                  {f.label} ({f.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* === DESKTOP FILTER BAR === */}
      <div className="hidden lg:flex flex-wrap justify-center gap-2 mb-16 p-2 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-white/5 shadow-md">
        {filtersWithCounts.map(f => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${activeFilter === f.id
              ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 shadow-lg"
              : "bg-slate-950/65 border-transparent text-slate-300 hover:text-indigo-455 hover:bg-slate-900/60"}`}
          >
            {f.label} <span className="text-[10px] opacity-75">({f.count})</span>
          </button>
        ))}
      </div>

      {/* === PROJECTS GRID === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {filteredProjects.map(project => {
          const ProjectIcon = project.icon;
          return (
            <article
              key={project.id}
              className="relative group transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
            >
              {/* Animated Glow Border */}
              <div className="absolute -inset-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xs transition duration-500" aria-hidden="true" />

              <div className="relative rounded-2xl overflow-hidden shadow-lg h-full flex flex-col glass-panel">
                {/* Header gradient */}
                <div className={`relative h-32 bg-gradient-to-r ${project.gradient} overflow-hidden flex-shrink-0`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ProjectIcon className="w-10 h-10 text-white/90" />
                  </div>
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold text-white bg-black/40 backdrop-blur-sm border border-white/5">
                      {project.category}
                    </span>
                    {project.highlight && (
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-bold text-amber-300 bg-black/40 backdrop-blur-sm border border-amber-300/10">
                        ★ FEATURED
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full border border-white/5">
                    <FiStar className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                    <span className="text-[10px] font-bold">{project.stars}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-base font-bold text-white mb-1.5 line-clamp-1 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-slate-400 mb-4 text-xs leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md text-[10px] font-bold">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 bg-slate-900 border border-white/5 text-slate-400 rounded-md text-[10px] font-bold">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Features preview */}
                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 mb-2">
                      <FiZap className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-[10px] font-bold text-slate-350 uppercase tracking-wider">Key Features</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map(feat => (
                        <span key={feat} className="px-2 py-0.5 bg-slate-900 border border-white/5 text-slate-400 rounded text-[10px]">
                          {feat}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="px-2 py-0.5 bg-slate-900 border border-white/5 text-slate-400 rounded text-[10px]">
                          +{project.features.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow h-9 inline-flex items-center justify-center gap-2 bg-slate-950 border border-white/10 hover:border-indigo-500/30 text-white rounded-xl text-xs font-semibold hover:bg-slate-900 transition-colors focus:outline-none"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub className="w-3.5 h-3.5" />
                      Source
                    </a>
                    {project.liveDemo !== "#" && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center focus:outline-none"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
