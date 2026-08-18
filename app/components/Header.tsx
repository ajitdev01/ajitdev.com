"use client";

import React, { useState, useEffect, memo } from "react";
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
  Sparkles,
} from "lucide-react";

const NAV_ITEMS: { name: string; path: string; icon: any }[] = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Skills", path: "/skills", icon: Settings },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Contact", path: "/contact", icon: Mail },
];

const FiGithub = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:shadow-lg"
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
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            position: "relative",
            overflow: "hidden",
            px: { xs: 2, sm: 3 },
            py: 1.2,
            borderRadius: "24px",
            border: "1px solid",
            borderColor: scrolled ? "rgba(99, 102, 241, 0.3)" : "rgba(226, 232, 240, 0.8)",
            background: scrolled
              ? "linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(248, 250, 252, 0.9) 100%)"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(241, 245, 249, 0.75) 100%)",
            backdropFilter: "blur(20px)",
            boxShadow: scrolled
              ? "0 12px 35px -5px rgba(79, 70, 229, 0.15), 0 4px 12px rgba(0, 0, 0, 0.03)"
              : "0 4px 16px rgba(0, 0, 0, 0.02)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Top Rainbow Accent Border */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "linear-gradient(90deg, #4f46e5 0%, #7c3aed 33%, #ec4899 66%, #3b82f6 100%)",
            }}
          />

          {/* Logo & Brand Info with Vibrant Animations */}
          <Link href="/" className="no-underline">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                "&:hover .logo-avatar": {
                  transform: "rotate(12deg) scale(1.1)",
                  boxShadow: "0 8px 24px rgba(79, 70, 229, 0.45)",
                },
                "&:hover .brand-name": {
                  background: "linear-gradient(135deg, #4f46e5 0%, #db2777 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >
              <Box
                className="logo-avatar"
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(79, 70, 229, 0.35)",
                  transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <Code className="w-5 h-5" />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    className="brand-name"
                    variant="subtitle1"
                    sx={{
                      fontWeight: 900,
                      color: "#0f172a",
                      lineHeight: 1.2,
                      fontSize: "1.05rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Ajit Dev
                  </Typography>
                  {/* Live Status Indicator Dot */}
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                      boxShadow: "0 0 8px #10b981",
                    }}
                  />
                </Box>
                <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 800, fontSize: "0.68rem", display: { xs: "none", sm: "block" } }}>
                  Full Stack · DevOps · Cloud Security
                </Typography>
              </Box>
            </Box>
          </Link>

          {/* Desktop Navigation Items with Vibrant Active Gradient & Micro-Animations */}
          <Box
            component="nav"
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 1.5,
              backgroundColor: "rgba(248, 250, 252, 0.9)",
              p: 1,
              borderRadius: "22px",
              border: "1px solid rgba(226, 232, 240, 0.9)",
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
                      borderRadius: "16px",
                      color: isActive ? "#ffffff" : "#475569",
                      background: isActive
                        ? "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)"
                        : "transparent",
                      boxShadow: isActive
                        ? "0 6px 20px rgba(79, 70, 229, 0.35)"
                        : "none",
                      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        background: isActive
                          ? "linear-gradient(135deg, #4338ca 0%, #4f46e5 100%)"
                          : "rgba(224, 231, 255, 0.6)",
                        color: isActive ? "#ffffff" : "#4f46e5",
                        transform: "translateY(-2px) scale(1.04)",
                        boxShadow: isActive
                          ? "0 8px 24px rgba(79, 70, 229, 0.45)"
                          : "0 4px 14px rgba(79, 70, 229, 0.12)",
                      },
                      "&:active": {
                        transform: "translateY(0) scale(0.98)",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              onClick={toggleMobileDrawer(true)}
              sx={{
                display: { xs: "inline-flex", lg: "none" },
                color: "#0f172a",
                backgroundColor: "#f1f5f9",
                borderRadius: "14px",
                "&:hover": { backgroundColor: "#e0e7ff", color: "#4f46e5" },
              }}
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
              width: 290,
              borderRadius: "24px 0 0 24px",
              p: 2.5,
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
          <IconButton onClick={toggleMobileDrawer(false)} sx={{ backgroundColor: "#f8fafc" }} aria-label="Close mobile navigation menu">
            <CloseIcon className="w-5 h-5 text-slate-500" />
          </IconButton>
        </Box>

        <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            const IconComp = item.icon;
            return (
              <ListItem key={item.path} disablePadding>
                <Link href={item.path} className="no-underline w-full" onClick={() => setIsMobileOpen(false)}>
                  <ListItemButton
                    selected={isActive}
                    sx={{
                      borderRadius: "16px",
                      py: 1.2,
                      px: 2,
                      color: isActive ? "#ffffff" : "#475569",
                      background: isActive
                        ? "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)"
                        : "transparent",
                      boxShadow: isActive ? "0 6px 16px rgba(79, 70, 229, 0.3)" : "none",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: isActive ? "#4f46e5" : "#f1f5f9",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36, color: isActive ? "#ffffff" : "#64748b" }}>
                      <IconComp className="w-5 h-5" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontWeight: 800, fontSize: "0.95rem" }}>
                          {item.name}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      {/* Spacer for fixed header */}
      <Box sx={{ height: { xs: 88, md: 104 } }} aria-hidden="true" />
    </>
  );
};

export default memo(Header);
