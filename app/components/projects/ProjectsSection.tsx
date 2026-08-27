'use client';

import React, { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Star,
  Zap,
  ExternalLink,
} from "lucide-react";
import { FiGithub } from "@/lib/icons";
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
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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
      {/* SEARCH INPUT */}
      <div className="max-w-[500px] mx-auto mb-10">
        <Input
          placeholder="Search projects by title, description, or stack..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          startAdornment={<Search className="w-5 h-5 text-indigo-600" />}
          className="h-12 rounded-2xl font-bold text-sm bg-white"
        />
      </div>

      {/* CHIP FILTER BADGES */}
      <Card className="p-4 mb-12 rounded-2xl border border-slate-200 bg-white flex flex-wrap justify-center gap-2 shadow-xs">
        {filtersWithCounts.map(f => {
          const isActive = activeFilter === f.id;
          return (
            <Badge
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              variant={isActive ? "primary" : "outline"}
              className="py-1.5 px-3 text-xs font-extrabold cursor-pointer transition-all active:scale-95"
            >
              {f.label} ({f.count})
            </Badge>
          );
        })}
      </Card>

      {/* PROJECTS GRID (SHADCN CARDS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
        {filteredProjects.map(project => {
          const ProjectIcon = project.icon;
          return (
            <Card
              key={project.id}
              className="rounded-3xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between h-full transition-all duration-250 hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300"
            >
              <div>
                {/* Header Gradient */}
                <div className={`relative h-36 bg-gradient-to-r ${project.gradient} p-4 flex flex-col justify-between`}>
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-black/40 text-white backdrop-blur-xs">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full text-[10px] font-black text-white backdrop-blur-xs">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mx-auto">
                    <ProjectIcon className="w-10 h-10 text-white/90" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <h3 className="font-black text-slate-900 text-base mb-1 truncate">
                    {project.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-500 mb-4 h-10 overflow-hidden line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map(tech => (
                      <Badge key={tech} variant="outline" className="text-[10px] py-0 px-2 font-bold border-indigo-200 text-indigo-700 bg-indigo-50/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="outline" className="text-[10px] py-0 px-1.5 font-bold">
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1 mb-2">
                      <Zap className="w-3 h-3 text-indigo-600" /> Key Highlights
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.slice(0, 2).map(feat => (
                        <span key={feat} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold text-[10px]">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 no-underline"
                >
                  <Button
                    variant="default"
                    size="small"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold gap-1.5 rounded-xl"
                  >
                    <FiGithub className="w-4 h-4" /> GitHub Source
                  </Button>
                </a>
                {project.liveDemo !== "#" && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <Button
                      variant="outline"
                      size="small"
                      className="px-3 rounded-xl border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
