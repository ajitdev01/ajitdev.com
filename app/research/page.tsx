import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Button,
} from "@mui/material";
import {
  ArrowLeft,
  BookOpen,
  ArrowRight,
  Shield,
  Cpu,
  Layers,
  Key,
  Terminal,
  Clock,
  Calendar,
} from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { RESEARCH_DB } from "@/lib/research";

export const metadata: Metadata = {
  title: "Technical Research & System Whitepapers | Ajit Dev",
  description: "Read technical research articles by Ajit Kumar. Detailed publications on Docker internals, Kubernetes architectures, Linux kernel system calls, and Zero Trust security models.",
  alternates: {
    canonical: "https://ajitdev.com/research",
  },
};

const RESEARCH_PAPERS = Object.values(RESEARCH_DB);

export default function ResearchIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/research/#breadcrumb",
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
    ],
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8fafc", pt: { xs: 16, md: 20 }, pb: 12 }}>
      <JSONLD schema={breadcrumbSchema} />

      <Container maxWidth="lg">
        
        {/* Navigation Link */}
        <Link href="/" className="no-underline">
          <Button startIcon={<ArrowLeft className="w-4 h-4" />} sx={{ fontWeight: 800, textTransform: "none", color: "#64748b", mb: 3 }}>
            Back to Home
          </Button>
        </Link>

        {/* Hero Banner Paper */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            mb: 6,
            borderRadius: "24px",
            border: "1px solid #e2e8f0",
            background: "linear-gradient(135deg, #f3e8ff 0%, #ffffff 50%, #eef2ff 100%)",
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "inline-flex", p: 2, borderRadius: "20px", backgroundColor: "#f3e8ff", color: "#9333ea", mb: 2 }}>
            <BookOpen className="w-8 h-8" />
          </Box>

          <Typography variant="h3" component="h1" sx={{ fontWeight: 900, color: "#0f172a", mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
            Systems Engineering & Security Research
          </Typography>

          <Typography variant="h6" sx={{ color: "#334155", fontWeight: 800, mb: 3 }}>
            Whitepapers • Docker Internals • Linux Kernel Namespaces • Zero-Trust IAM Architectures
          </Typography>

          <Box sx={{ width: 96, height: 4, borderRadius: 2, backgroundColor: "#9333ea", mx: "auto", mb: 3 }} />

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.5 }}>
            <Chip icon={<Cpu className="w-3.5 h-3.5 text-purple-600" />} label="Virtualization & Containers" color="secondary" size="small" sx={{ fontWeight: 800 }} />
            <Chip icon={<Shield className="w-3.5 h-3.5 text-emerald-600" />} label="Zero Trust Security" color="success" size="small" sx={{ fontWeight: 800 }} />
            <Chip icon={<Terminal className="w-3.5 h-3.5 text-indigo-600" />} label="Linux Cgroups & Namespaces" color="primary" size="small" sx={{ fontWeight: 800 }} />
          </Box>
        </Paper>

        {/* Research Papers Grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }, gap: 4 }}>
          {RESEARCH_PAPERS.map((paper) => {
            const IconComp = paper.icon;
            return (
              <Paper
                key={paper.slug}
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
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Chip label={paper.category} color="secondary" size="small" sx={{ fontWeight: 800, fontSize: "0.65rem" }} />
                    <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700 }}>{paper.date}</Typography>
                  </Box>

                  <Box sx={{ width: 44, height: 44, borderRadius: "14px", backgroundColor: "#f3e8ff", color: "#9333ea", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <IconComp className="w-5 h-5" />
                  </Box>

                  <Link href={`/research/${paper.slug}`} className="no-underline">
                    <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", fontSize: "1.05rem", mb: 1, "&:hover": { color: "#9333ea" } }}>
                      {paper.title}
                    </Typography>
                  </Link>

                  <Typography variant="body2" sx={{ color: "#64748b", fontSize: "0.85rem", mb: 2, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {paper.summary}
                  </Typography>
                </Box>

                <Box sx={{ pt: 2, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700, display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Clock className="w-3.5 h-3.5" /> {paper.readTime}
                  </Typography>
                  <Link href={`/research/${paper.slug}`} className="no-underline">
                    <Button size="small" endIcon={<ArrowRight className="w-4 h-4" />} sx={{ fontWeight: 800, textTransform: "none", color: "#9333ea" }}>
                      Read Article
                    </Button>
                  </Link>
                </Box>
              </Paper>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
}
