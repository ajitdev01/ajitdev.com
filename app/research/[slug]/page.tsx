import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Button,
} from "@mui/material";
import { ArrowLeft, BookOpen, Clock, Calendar, User } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { RESEARCH_DB } from "@/lib/research";

export async function generateStaticParams() {
  return Object.keys(RESEARCH_DB).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const paper = RESEARCH_DB[slug];
  if (!paper) return {};
  
  return {
    title: `${paper.title} | Ajit Dev Research`,
    description: paper.summary,
    alternates: {
      canonical: `https://ajitdev.com/research/${slug}`,
    },
  };
}

export default async function ResearchDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const paper = RESEARCH_DB[slug];

  if (!paper) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://ajitdev.com/research/${slug}/#breadcrumb`,
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
        "name": "Research",
        "item": "https://ajitdev.com/research",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": paper.title,
        "item": `https://ajitdev.com/research/${slug}`,
      },
    ],
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#ffffff", pt: { xs: 16, md: 20 }, pb: 12 }}>
      <JSONLD schema={breadcrumbSchema} />

      <Container maxWidth="lg">
        
        {/* Navigation Link */}
        <Link href="/research" className="no-underline">
          <Button startIcon={<ArrowLeft className="w-4 h-4" />} sx={{ fontWeight: 800, textTransform: "none", color: "#64748b", mb: 3 }}>
            Back to Research List
          </Button>
        </Link>

        {/* Paper Header */}
        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc", mb: 6 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            <Chip label={paper.category} color="secondary" size="small" sx={{ fontWeight: 800 }} />
            <Chip icon={<Calendar className="w-3.5 h-3.5" />} label={paper.date} size="small" variant="outlined" sx={{ fontWeight: 700 }} />
            <Chip icon={<Clock className="w-3.5 h-3.5" />} label={paper.readTime} size="small" variant="outlined" sx={{ fontWeight: 700 }} />
          </Box>

          <Typography variant="h3" component="h1" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "1.8rem", md: "2.8rem" }, mb: 2, lineHeight: 1.25 }}>
            {paper.title}
          </Typography>

          <Typography variant="h6" sx={{ color: "#475569", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.6 }}>
            {paper.summary}
          </Typography>
        </Paper>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "3fr 9fr" }, gap: 6 }}>
          
          {/* Sidebar TOC */}
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: "20px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc", position: "sticky", top: 120 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a", textTransform: "uppercase", letterSpacing: "1px", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                <BookOpen className="w-4 h-4 text-purple-600" /> Table of Contents
              </Typography>
              <Box component="nav" sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                {paper.sections.map((sect) => (
                  <a
                    key={sect.id}
                    href={`#${sect.id}`}
                    className="text-xs font-bold text-slate-600 hover:text-purple-600 no-underline transition-colors leading-tight"
                  >
                    {sect.heading}
                  </a>
                ))}
              </Box>
            </Paper>
          </Box>

          {/* Main Paper Content */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {paper.sections.map((sect) => (
              <Box key={sect.id} id={sect.id} className="scroll-mt-28" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 900, color: "#0f172a", borderBottom: "1px solid #e2e8f0", pb: 1 }}>
                  {sect.heading}
                </Typography>
                {sect.paragraphs.map((p, idx) => (
                  <Typography key={idx} variant="body1" sx={{ color: "#334155", lineHeight: 1.8, fontSize: "1rem" }}>
                    {p}
                  </Typography>
                ))}
                {sect.codeBlock && (
                  <Paper elevation={0} sx={{ p: 3, borderRadius: "16px", backgroundColor: "#090d16", border: "1px solid #1e293b", fontFamily: "monospace", fontSize: "0.85rem", color: "#f1f5f9", overflowX: "auto" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", color: "#64748b", fontSize: "0.75rem", pb: 1, mb: 2, borderBottom: "1px solid #1e293b" }}>
                      <span>LANGUAGE: {sect.codeBlock.lang.toUpperCase()}</span>
                      <span>READ-ONLY</span>
                    </Box>
                    <pre style={{ margin: 0 }}>
                      <code>{sect.codeBlock.code}</code>
                    </pre>
                  </Paper>
                )}
              </Box>
            ))}

            {/* Author Bio Paper */}
            <Paper elevation={0} sx={{ p: 4, mt: 4, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc" }}>
              <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                <Box sx={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: "#e0e7ff", color: "#4f46e5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, flexShrink: 0 }}>
                  AK
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 900, color: "#0f172a" }}>
                    Written by Ajit Kumar <Chip label="Cloud & Security Specialist" color="primary" size="small" sx={{ fontWeight: 800, ml: 1 }} />
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748b", mt: 0.5 }}>
                    BCA cloud computing & security student studying kernel namespaces, networking protocols, security pipelines, and competitive programming.
                  </Typography>
                </Box>
              </Box>
            </Paper>

          </Box>

        </Box>

      </Container>
    </Box>
  );
}
