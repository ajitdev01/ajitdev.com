"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
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
  Search,
  BookOpen,
  Newspaper,
  Terminal,
  Trophy,
  Sparkles,
} from "lucide-react";

const NAV_ITEMS: { name: string; path: string; icon: any; badge?: string }[] = [
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

  const toggleMobileDrawer = (open: boolean) => () => {
    setIsMobileOpen(open);
  };

  return (
    <>
      {/* Skip to Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-indigo-600 focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Floating MUI Glassmorphic Header */}
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "calc(100% - 24px)", maxWidth: "1280px" },
          zIndex: 1100,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            px: { xs: 2, sm: 3 },
            py: 1,
            borderRadius: "24px",
            border: "1px solid",
            borderColor: scrolled ? "rgba(226, 232, 240, 0.9)" : "rgba(241, 245, 249, 0.8)",
            backgroundColor: scrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(16px)",
            boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.06)" : "0 4px 12px rgba(0,0,0,0.02)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo & Brand Info */}
          <Link href="/" className="no-underline">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
                }}
              >
                <Code className="w-5 h-5" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 900, color: "#0f172a", lineHeight: 1.2, fontSize: "1rem" }}>
                  Ajit Dev
                </Typography>
                <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700, fontSize: "0.68rem", display: { xs: "none", sm: "block" } }}>
                  Full Stack · DevOps · Cloud Security
                </Typography>
              </Box>
            </Box>
          </Link>

          {/* Desktop Navigation Items */}
          <Box
            component="nav"
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 1.5,
              backgroundColor: "#f8fafc",
              p: 1,
              borderRadius: "20px",
              border: "1px solid #f1f5f9",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              const IconComp = item.icon;
              return (
                <Link key={item.path} href={item.path} className="no-underline">
                  <Button
                    size="medium"
                    startIcon={<IconComp className="w-4 h-4" />}
                    sx={{
                      fontWeight: 800,
                      fontSize: "0.88rem",
                      textTransform: "none",
                      px: 2.5,
                      py: 1,
                      borderRadius: "14px",
                      color: isActive ? "#4f46e5" : "#64748b",
                      backgroundColor: isActive ? "#ffffff" : "transparent",
                      boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.04)" : "none",
                      "&:hover": { backgroundColor: isActive ? "#ffffff" : "#f1f5f9", color: "#4f46e5" },
                    }}
                  >
                    {item.name}
                    {item.badge && (
                      <Chip
                        label={item.badge}
                        size="small"
                        color="success"
                        sx={{ height: 16, fontSize: "0.6rem", fontWeight: 900, ml: 0.75 }}
                      />
                    )}
                  </Button>
                </Link>
              );
            })}
          </Box>

          {/* Mobile Drawer Button */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              onClick={toggleMobileDrawer(true)}
              sx={{ display: { xs: "inline-flex", lg: "none" }, color: "#0f172a" }}
              aria-label="Open mobile navigation menu"
            >
              <MenuIcon className="w-6 h-6" />
            </IconButton>
          </Box>
        </Paper>
      </Box>

      {/* MUI Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={isMobileOpen}
        onClose={toggleMobileDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              borderRadius: "24px 0 0 24px",
              p: 2,
              backgroundColor: "#ffffff",
            },
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pb: 2, borderBottom: "1px solid #f1f5f9", mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Code className="w-5 h-5 text-indigo-600" />
            <Typography variant="subtitle1" sx={{ fontWeight: 900, color: "#0f172a" }}>
              Navigation Menu
            </Typography>
          </Box>
          <IconButton onClick={toggleMobileDrawer(false)}>
            <CloseIcon className="w-5 h-5 text-slate-500" />
          </IconButton>
        </Box>

        <List sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            const IconComp = item.icon;
            return (
              <ListItem key={item.path} disablePadding>
                <Link href={item.path} className="no-underline w-full" onClick={() => setIsMobileOpen(false)}>
                  <ListItemButton
                    selected={isActive}
                    sx={{
                      borderRadius: "14px",
                      py: 1.2,
                      px: 2,
                      color: isActive ? "#4f46e5" : "#475569",
                      backgroundColor: isActive ? "#e0e7ff" : "transparent",
                      "&:hover": { backgroundColor: "#f1f5f9" },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36, color: isActive ? "#4f46e5" : "#64748b" }}>
                      <IconComp className="w-5 h-5" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontWeight: 800, fontSize: "0.95rem" }}>
                          {item.name}
                        </Typography>
                      }
                    />
                    {item.badge && (
                      <Chip label={item.badge} color="success" size="small" sx={{ fontWeight: 900, fontSize: "0.6rem" }} />
                    )}
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ mt: "auto", pt: 2, borderTop: "1px solid #f1f5f9" }}>
          <Link href="/contact" className="no-underline" onClick={() => setIsMobileOpen(false)}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<Sparkles className="w-4 h-4" />}
              sx={{ fontWeight: 800, borderRadius: "14px", textTransform: "none", py: 1.2, backgroundColor: "#4f46e5" }}
            >
              Contact Ajit Dev
            </Button>
          </Link>
        </Box>
      </Drawer>

      {/* Spacer for fixed header */}
      <Box sx={{ height: { xs: 88, md: 104 } }} aria-hidden="true" />
    </>
  );
};

export default memo(Header);
