"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  TextField,
  InputAdornment,
  Pagination,
} from "@mui/material";
import {
  Search,
  Calendar,
  Tag,
  Rss,
  ExternalLink,
  Newspaper,
  Flame,
} from "lucide-react";

import { NEWS_DATABASE, CATEGORIES } from "@/lib/news";

export default function NewsFeed() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [query, selectedCategory]);

  const filteredNews = useMemo(() => {
    return NEWS_DATABASE.filter((news) => {
      const matchesCategory =
        selectedCategory === "All" ||
        news.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesQuery =
        query.trim() === "" ||
        news.title.toLowerCase().includes(query.toLowerCase()) ||
        news.summary.toLowerCase().includes(query.toLowerCase()) ||
        news.tag.toLowerCase().includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNews.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredNews, currentPage]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
      
      {/* Controls Bar */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, alignItems: "center", justifyContent: "space-between", gap: 3, pb: 4, borderBottom: "1px solid #e2e8f0" }}>
        
        {/* Search */}
        <TextField
          placeholder="Search news by topic or keyword..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ width: { xs: "100%", lg: "360px" } }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search className="w-4 h-4 text-indigo-600" />
                </InputAdornment>
              ),
              sx: { borderRadius: "16px", backgroundColor: "#ffffff", fontWeight: 700, fontSize: "0.85rem" }
            }
          }}
        />

        {/* Category Filter Chips */}
        <Paper elevation={0} sx={{ p: 1.5, borderRadius: "20px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
          {CATEGORIES.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setSelectedCategory(cat)}
              color={selectedCategory === cat ? "primary" : "default"}
              variant={selectedCategory === cat ? "filled" : "outlined"}
              sx={{ fontWeight: 800, fontSize: "0.75rem", borderRadius: "12px", cursor: "pointer" }}
            />
          ))}
        </Paper>

        {/* Dynamic RSS Status */}
        <Chip
          icon={<Rss className="w-3.5 h-3.5 text-amber-500" />}
          label="RSS Feed Pipeline Active"
          variant="outlined"
          color="warning"
          sx={{ fontWeight: 800, fontSize: "0.7rem", py: 1.8 }}
        />
      </Box>

      {/* News Cards Grid */}
      {paginatedNews.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4 }}>
            {paginatedNews.map((news) => (
              <Paper
                key={news.id}
                elevation={0}
                sx={{
                  p: 4,
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
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700, display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Calendar className="w-3.5 h-3.5" /> {news.date}
                    </Typography>
                    <Chip label={`#${news.tag}`} color="primary" size="small" variant="outlined" sx={{ fontWeight: 800, fontSize: "0.65rem" }} />
                  </Box>

                  <Typography
                    component="a"
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                      color: "#0f172a",
                      fontSize: "1.1rem",
                      mb: 1.5,
                      textDecoration: "none",
                      lineHeight: 1.4,
                      display: "flex",
                      alignItems: "start",
                      gap: 1,
                      "&:hover": { color: "#4f46e5" }
                    }}
                  >
                    {news.title}
                    <ExternalLink className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-1" />
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#64748b", fontSize: "0.85rem", mb: 3, lineHeight: 1.7 }}>
                    {news.summary}
                  </Typography>
                </Box>

                <Box sx={{ pt: 2, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700 }}>
                    Source: <strong className="text-slate-900">{news.source}</strong>
                  </Typography>
                  <Chip label={news.category} color="secondary" size="small" sx={{ fontWeight: 800, fontSize: "0.65rem" }} />
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
            No news articles match your queries.
          </Typography>
        </Paper>
      )}

    </Box>
  );
}
