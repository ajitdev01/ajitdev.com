'use client';

import React, { useState, useMemo, useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiStar, FiZap, FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/lib/projects";


const filterCategories = [
  { id: "All", label: "All Projects" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "MERN Stack", label: "MERN Stack" },
  { id: "LAMP Stack", label: "LAMP Stack" },
  { id: "Next.js", label: "Next.js" },
  { id: "DSA", label: "DSA • Problem Solving" },
  { id: "Frontend", label: "Frontend" },
  { id: "DevOps", label: "DevOps (Supporting)" }
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
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search projects by title, description, or stack..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-10 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm shadow-md transition-all text-gray-800 text-sm outline-none"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
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
        className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={isMobileMenuOpen ? "Close filter" : "Open project filter"}
      >
        {isMobileMenuOpen ? <FiChevronDown className="w-5 h-5" /> : <FiChevronUp className="w-5 h-5" />}
      </button>

      {/* === MOBILE FILTER MENU === */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-40 rounded-t-2xl max-h-[60vh] overflow-y-auto">
          <div className="p-6 space-y-5">
            <h2 className="text-xl font-bold text-gray-900">Filter Projects</h2>
            <div className="flex flex-wrap gap-3">
              {filtersWithCounts.map(f => (
                <button
                  key={f.id}
                  onClick={() => { setActiveFilter(f.id); setIsMobileMenuOpen(false); }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeFilter === f.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700"}`}
                >
                  {f.label} ({f.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* === DESKTOP FILTER BAR === */}
      <div className="hidden lg:flex flex-wrap justify-center gap-3 mb-16 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-md">
        {filtersWithCounts.map(f => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${activeFilter === f.id
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {f.label} <span className="text-xs opacity-70">({f.count})</span>
          </button>
        ))}
      </div>

      {/* === PROJECTS GRID === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-16">
        {filteredProjects.map(project => {
          const ProjectIcon = project.icon;
          return (
            <article
              key={project.id}
              className="relative group transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur transition duration-500" aria-hidden="true" />

              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Header gradient */}
                <div className={`relative h-36 bg-gradient-to-r ${project.gradient} overflow-hidden flex-shrink-0`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ProjectIcon className="w-12 h-12 text-white/90" />
                  </div>
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-black/40 backdrop-blur-sm">
                      {project.category}
                    </span>
                    {project.highlight && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-amber-300 bg-black/40 backdrop-blur-sm">
                        ★ FEATURED
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                    <FiStar className="w-3.5 h-3.5 text-yellow-300" />
                    <span className="text-xs font-semibold">{project.stars}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-lg font-bold text-gray-900 mb-1.5 line-clamp-1">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 bg-gray-105 text-gray-600 rounded-lg text-xs font-semibold">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Features preview */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <FiZap className="w-3.5 h-3.5 text-blue-550" />
                      <span className="text-xs font-semibold text-gray-600 uppercase">Key Features</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map(feat => (
                        <span key={feat} className="px-2 py-0.5 bg-gray-100 text-gray-650 rounded text-xs">
                          {feat}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-650 rounded text-xs">
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
                      className="flex-1 h-10 inline-flex items-center justify-center gap-2 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-750"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub className="w-4 h-4" />
                      Source
                    </a>
                    {project.liveDemo !== "#" && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <FiExternalLink className="w-4 h-4" />
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
