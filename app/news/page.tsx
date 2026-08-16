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
  Newspaper,
  Cpu,
  Shield,
  Zap,
} from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import NewsFeed from "@/app/components/NewsFeed";

export const metadata: Metadata = {
  title: "Latest Technology News Feed | Ajit Dev",
  description: "Browse the latest industry updates across Artificial Intelligence, Cloud Computing, Cybersecurity, DevOps tools, and Software Engineering frameworks.",
  alternates: {
    canonical: "https://ajitdev.com/news",
  },
};

export default function TechNewsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/news/#breadcrumb",
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
        "name": "News Hub",
        "item": "https://ajitdev.com/news",
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
            background: "linear-gradient(135deg, #fce7f3 0%, #ffffff 50%, #eef2ff 100%)",
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "inline-flex", p: 2, borderRadius: "20px", backgroundColor: "#fce7f3", color: "#db2777", mb: 2 }}>
            <Newspaper className="w-8 h-8" />
          </Box>

          <Typography variant="h3" component="h1" sx={{ fontWeight: 900, color: "#0f172a", mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
            Real-time Technology News Feed
          </Typography>

          <Typography variant="h6" sx={{ color: "#334155", fontWeight: 800, mb: 3 }}>
            Artificial Intelligence • Cloud & DevOps Security • Framework Releases & Vulnerability Alerts
          </Typography>

          <Box sx={{ width: 96, height: 4, borderRadius: 2, backgroundColor: "#db2777", mx: "auto", mb: 3 }} />

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.5 }}>
            <Chip icon={<Cpu className="w-3.5 h-3.5 text-pink-600" />} label="AI & Machine Learning" color="secondary" size="small" sx={{ fontWeight: 800 }} />
            <Chip icon={<Shield className="w-3.5 h-3.5 text-emerald-600" />} label="Cloud Security & Threats" color="success" size="small" sx={{ fontWeight: 800 }} />
            <Chip icon={<Zap className="w-3.5 h-3.5 text-indigo-600" />} label="Software Engineering Release News" color="primary" size="small" sx={{ fontWeight: 800 }} />
          </Box>
        </Paper>

        {/* Client News Feed Grid */}
        <NewsFeed />

      </Container>
    </Box>
  );
}
