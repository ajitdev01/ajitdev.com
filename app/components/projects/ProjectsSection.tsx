'use client';

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Search,
  Star,
  Zap,
  ExternalLink,
  Code,
  Sparkles,
  Flame,
  Trophy,
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
      {/* === MUI SEARCH INPUT === */}
      <Box sx={{ maxWidth: "500px", mx: "auto", mb: 5 }}>
        <TextField
          fullWidth
          size="medium"
          placeholder="Search projects by title, description, or stack..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search className="w-5 h-5 text-indigo-600" />
                </InputAdornment>
              ),
              sx: { borderRadius: "18px", backgroundColor: "#ffffff", fontWeight: 700, fontSize: "0.9rem" },
            },
          }}
        />
      </Box>

      {/* === MUI CHIP FILTER BADGES === */}
      <Paper elevation={0} sx={{ p: 2, mb: 6, borderRadius: "20px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
        {filtersWithCounts.map(f => (
          <Chip
            key={f.id}
            label={`${f.label} (${f.count})`}
            onClick={() => setActiveFilter(f.id)}
            color={activeFilter === f.id ? "primary" : "default"}
            variant={activeFilter === f.id ? "filled" : "outlined"}
            sx={{ fontWeight: 800, fontSize: "0.75rem", py: 2, px: 0.5, borderRadius: "12px", cursor: "pointer" }}
          />
        ))}
      </Paper>

      {/* === PROJECTS GRID (MUI PAPER CARDS) === */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }, gap: 4, mb: 10 }}>
        {filteredProjects.map(project => {
          const ProjectIcon = project.icon;
          return (
            <Paper
              key={project.id}
              elevation={0}
              sx={{
                borderRadius: "24px",
                border: "1px solid #e2e8f0",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                transition: "all 0.25s ease-out",
                "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 30px rgba(0,0,0,0.06)", borderColor: "#cbd5e1" },
              }}
            >
              <Box>
                {/* Header Gradient */}
                <Box className={`relative h-36 bg-gradient-to-r ${project.gradient} p-4 flex flex-col justify-between`}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                    <Chip label={project.category} size="small" sx={{ fontWeight: 800, fontSize: "0.65rem", backgroundColor: "rgba(0,0,0,0.4)", color: "#ffffff" }} />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, backgroundColor: "rgba(0,0,0,0.4)", px: 1, py: 0.5, borderRadius: "12px" }}>
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      <Typography variant="caption" sx={{ color: "#ffffff", fontWeight: 800, fontSize: "0.65rem" }}>{project.stars}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", justifyCenter: "center", mx: "auto" }}>
                    <ProjectIcon className="w-10 h-10 text-white/90" />
                  </Box>
                </Box>

                {/* Content Body */}
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", fontSize: "1rem", mb: 0.5 }} noWrap>
                    {project.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#64748b", fontSize: "0.8rem", mb: 2, height: "40px", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                    {project.shortDescription}
                  </Typography>

                  {/* Tech Badges */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 2.5 }}>
                    {project.tech.slice(0, 4).map(tech => (
                      <Chip key={tech} label={tech} size="small" variant="outlined" color="primary" sx={{ fontWeight: 800, fontSize: "0.6rem", height: 22 }} />
                    ))}
                    {project.tech.length > 4 && (
                      <Chip label={`+${project.tech.length - 4}`} size="small" variant="outlined" sx={{ fontWeight: 800, fontSize: "0.6rem", height: 22 }} />
                    )}
                  </Box>

                  {/* Key Features */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 800, textTransform: "uppercase", fontSize: "0.6rem", display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}>
                      <Zap className="w-3 h-3 text-indigo-600" /> Key Highlights
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                      {project.features.slice(0, 2).map(feat => (
                        <Chip key={feat} label={feat} size="small" sx={{ fontWeight: 700, fontSize: "0.65rem", backgroundColor: "#f1f5f9", color: "#334155" }} />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Card Footer Actions */}
              <Box sx={{ p: 3, pt: 0, display: "flex", gap: 1.5 }}>
                <Button
                  component="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  fullWidth
                  size="small"
                  startIcon={<FiGithub className="w-4 h-4" />}
                  sx={{ fontWeight: 800, borderRadius: "12px", textTransform: "none", backgroundColor: "#0f172a", "&:hover": { backgroundColor: "#1e293b" } }}
                >
                  GitHub Source
                </Button>
                {project.liveDemo !== "#" && (
                  <Button
                    component="a"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="small"
                    color="primary"
                    sx={{ minWidth: "42px", p: 1, borderRadius: "12px" }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </Box>
            </Paper>
          );
        })}
      </Box>
    </>
  );
}
