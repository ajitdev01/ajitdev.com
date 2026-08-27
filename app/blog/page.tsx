import React from "react";
import { Metadata } from "next";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
} from "@mui/material";
import {
  BookOpen,
  Cloud,
  ShieldCheck,
  Code,
  Globe,
  Zap,
} from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import BlogSearch from "@/app/components/BlogSearch";
import JSONLD from "@/app/components/JSONLD";
import { PAGE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ajit Dev Technical Blog – DevOps, Coding, DSA",
  description:
    "Read Ajit Dev's technical blog: tutorials and guides on Node.js, Next.js, Docker, Kubernetes, algorithms, and system design.",
  keywords: [...PAGE_KEYWORDS.blog],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Ajit Dev Technical Blog – DevOps, Coding, DSA",
    description: "Read Ajit Dev's technical blog: tutorials and guides on Node.js, Next.js, Docker, Kubernetes, algorithms, and system design.",
    url: "https://ajitdev.com/blog",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajit Dev Technical Engineering Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Dev Technical Blog – DevOps, Coding, DSA",
    description: "Read Ajit Dev's technical blog: tutorials and guides on Node.js, Next.js, Docker, Kubernetes, algorithms, and system design.",
    images: ["https://ajitdev.com/og-image.png"],
  },
};

export default function BlogArchivePage() {
  const posts = getAllPosts();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/blog/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ajitdev.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://ajitdev.com/blog",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What topics does Ajit Dev blog about?",
        "answer": {
          "@type": "Answer",
          "text": "Ajit Dev blogs about DevOps pipelines, Cloud Security audits, AWS cloud configurations, Next.js optimization, and DSA competitive programming.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I request a custom guide or collaboration?",
        "answer": {
          "@type": "Answer",
          "text": "Yes! Reach out via the /contact page or email support@ajitdev.com or ajitk23192@gmail.com for writing collaborations, custom playbooks, or contracts.",
        },
      },
    ],
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8fafc", pt: { xs: 16, md: 20 }, pb: 12 }}>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={faqSchema} />

      <Container maxWidth="lg">
        
        {/* ===== HERO BANNER PAPER ===== */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            mb: 6,
            borderRadius: "24px",
            border: "1px solid #e2e8f0",
            background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #f0fdf4 100%)",
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "inline-flex", p: 2, borderRadius: "20px", backgroundColor: "#e0e7ff", color: "#4f46e5", mb: 2 }}>
            <BookOpen className="w-8 h-8" />
          </Box>

          <Typography variant="h3" component="h1" sx={{ fontWeight: 900, color: "#0f172a", mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
            Technical Engineering Blog
          </Typography>

          <Typography variant="h6" component="p" sx={{ color: "#334155", fontWeight: 800, mb: 3 }}>
            Cloud Security • DevOps & Containers • System Architecture • MERN & Next.js
          </Typography>

          <Box sx={{ width: 96, height: 4, borderRadius: 2, backgroundColor: "#6366f1", mx: "auto", mb: 3 }} />

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.5 }}>
            <Chip icon={<Cloud className="w-3.5 h-3.5 text-blue-600" />} label="AWS & Cloud DevOps" size="small" variant="outlined" sx={{ fontWeight: 800 }} />
            <Chip icon={<ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />} label="Cloud Security & Auditing" color="success" size="small" sx={{ fontWeight: 800 }} />
            <Chip icon={<Code className="w-3.5 h-3.5 text-indigo-600" />} label="Next.js & Type-Safe Systems" size="small" variant="outlined" sx={{ fontWeight: 800 }} />
          </Box>
        </Paper>

        {/* ===== CLIENT SEARCH & ARTICLES GRID ===== */}
        <BlogSearch initialPosts={posts} />

      </Container>
    </Box>
  );
}
