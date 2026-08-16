"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  TextField,
  InputAdornment,
  Pagination,
  Modal,
  IconButton,
} from "@mui/material";
import {
  Search,
  Calendar,
  Clock,
  Tag,
  X,
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { BlogPost } from "@/lib/blog";
import Fuse from "fuse.js";

interface BlogSearchProps {
  initialPosts: BlogPost[];
}

export default function BlogSearch({ initialPosts }: BlogSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [modalQuery, setModalQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 9;

  const modalInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, query]);

  const categories = ["All", ...Array.from(new Set(initialPosts.map((p) => p.category)))];

  const fuse = useMemo(() => {
    return new Fuse(initialPosts, {
      keys: [
        { name: "title", weight: 0.4 },
        { name: "tags", weight: 0.25 },
        { name: "category", weight: 0.15 },
        { name: "description", weight: 0.1 },
        { name: "content", weight: 0.1 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
    });
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    let posts = initialPosts;
    if (query.trim() !== "") {
      const results = fuse.search(query);
      posts = results.map(r => r.item);
    }
    return posts.filter((post) => {
      return selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase();
    });
  }, [query, selectedCategory, initialPosts, fuse]);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const modalResults = useMemo(() => {
    if (modalQuery.trim() === "") return [];
    return fuse.search(modalQuery).map(r => r.item);
  }, [modalQuery, fuse]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const popularTerms = ["React", "DevOps", "Next.js", "Database", "AWS", "Security", "DSA"];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
      
      {/* Search Input & Category Pills */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", gap: 3 }}>
        <TextField
          placeholder="Search articles (Press Ctrl+K)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClick={() => setIsOpen(true)}
          sx={{ width: { xs: "100%", md: "400px" } }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search className="w-5 h-5 text-indigo-600" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Typography variant="caption" sx={{ fontWeight: 800, color: "#94a3b8", border: "1px solid #cbd5e1", px: 1, py: 0.2, borderRadius: "6px", fontSize: "0.65rem" }}>
                    Ctrl K
                  </Typography>
                </InputAdornment>
              ),
              sx: { borderRadius: "18px", backgroundColor: "#ffffff", fontWeight: 700, cursor: "pointer" }
            }
          }}
        />

        {/* Categories Chips */}
        <Paper elevation={0} sx={{ p: 1.5, borderRadius: "20px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff", display: "flex", flexWrap: "wrap", gap: 1 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              color={selectedCategory === category ? "primary" : "default"}
              variant={selectedCategory === category ? "filled" : "outlined"}
              sx={{ fontWeight: 800, fontSize: "0.75rem", borderRadius: "12px", cursor: "pointer" }}
            />
          ))}
        </Paper>
      </Box>

      {/* Blog Cards Grid */}
      {paginatedPosts.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }, gap: 4 }}>
            {paginatedPosts.map((post) => (
              <Paper
                key={post.slug}
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "24px",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease-out",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 30px rgba(0,0,0,0.06)", borderColor: "#cbd5e1" },
                }}
              >
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                    <Chip label={post.category} color="primary" size="small" sx={{ fontWeight: 800, fontSize: "0.65rem" }} />
                    <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700, display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Clock className="w-3.5 h-3.5 text-indigo-600" /> {post.readingTime}
                    </Typography>
                  </Box>

                  <Link href={`/blog/${post.slug}`} className="no-underline">
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 900,
                        color: "#0f172a",
                        fontSize: "1.05rem",
                        mb: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        "&:hover": { color: "#4f46e5" }
                      }}
                    >
                      {post.title}
                    </Typography>
                  </Link>

                  <Typography variant="body2" sx={{ color: "#64748b", fontSize: "0.85rem", mb: 2.5, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {post.description}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 3 }}>
                    {post.tags.slice(0, 3).map((tag) => (
                      <Chip key={tag} label={`#${tag}`} size="small" variant="outlined" sx={{ fontWeight: 700, fontSize: "0.6rem", height: 22 }} />
                    ))}
                  </Box>
                </Box>

                <Box sx={{ pt: 2, borderTop: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700, display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </Typography>
                  <Link href={`/blog/${post.slug}`} className="no-underline">
                    <Button
                      size="small"
                      endIcon={<ArrowRight className="w-4 h-4" />}
                      sx={{ fontWeight: 900, textTransform: "none", color: "#4f46e5" }}
                    >
                      Read Article
                    </Button>
                  </Link>
                </Box>
              </Paper>
            ))}
          </Box>

          {/* MUI Pagination */}
          {totalPages > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(_, page) => setCurrentPage(page)}
                color="primary"
                size="large"
                sx={{ "& .MuiPaginationItem-root": { fontWeight: 800, borderRadius: "10px" } }}
              />
            </Box>
          )}
        </Box>
      ) : (
        <Paper elevation={0} sx={{ p: 8, textAlign: "center", borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
          <Typography variant="h6" sx={{ color: "#64748b", fontWeight: 800 }}>
            No engineering articles found matching your criteria.
          </Typography>
        </Paper>
      )}

      {/* MUI SEARCH MODAL */}
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: { xs: "90%", sm: "600px" }, bgcolor: "background.paper", borderRadius: "24px", p: 3, boxShadow: 24 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, pb: 2, borderBottom: "1px solid #e2e8f0" }}>
            <Search className="w-5 h-5 text-indigo-600" />
            <TextField
              fullWidth
              variant="standard"
              placeholder="Search articles by title, tag, or topic..."
              value={modalQuery}
              onChange={(e) => setModalQuery(e.target.value)}
              autoFocus
              slotProps={{
                input: { disableUnderline: true, sx: { fontWeight: 800, fontSize: "1rem" } }
              }}
            />
            <IconButton onClick={() => setIsOpen(false)} size="small">
              <X className="w-5 h-5" />
            </IconButton>
          </Box>

          <Box sx={{ mt: 3, maxHeight: "400px", overflowY: "auto" }}>
            <Typography variant="caption" sx={{ fontWeight: 900, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", mb: 1, display: "block" }}>
              Popular Topics
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
              {popularTerms.map((term) => (
                <Chip
                  key={term}
                  label={term}
                  onClick={() => setModalQuery(term)}
                  variant="outlined"
                  size="small"
                  sx={{ fontWeight: 800, borderRadius: "8px", cursor: "pointer" }}
                />
              ))}
            </Box>

            <Typography variant="caption" sx={{ fontWeight: 900, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", mb: 1.5, display: "block" }}>
              {modalQuery.trim() === "" ? "Recommended Articles" : `Results (${modalResults.length})`}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {(modalQuery.trim() === "" ? initialPosts.slice(0, 4) : modalResults).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="no-underline" onClick={() => setIsOpen(false)}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: "14px",
                      border: "1px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textDecoration: "none",
                      "&:hover": { backgroundColor: "#f8fafc", borderColor: "#c7d2fe" }
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a" }}>
                        {post.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#64748b", display: "block" }}>
                        {post.readingTime} · {post.date}
                      </Typography>
                    </Box>
                    <Chip label={post.category} color="primary" size="small" sx={{ fontWeight: 800, fontSize: "0.6rem" }} />
                  </Paper>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Modal>

    </Box>
  );
}
