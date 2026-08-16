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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  ArrowLeft,
  Scale,
  Shield,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Ajit Dev — DevOps Engineer Portfolio",
  description: "Complete terms and conditions for Ajit Dev's DevOps engineer portfolio. Covers intellectual property, acceptable use, liability, and legal compliance.",
  alternates: {
    canonical: "https://ajitdev.com/terms",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TermsOfService",
      "@id": "https://ajitdev.com/terms#terms",
      "name": "Terms of Service | Ajit Dev — DevOps Engineer Portfolio India",
      "url": "https://ajitdev.com/terms",
      "description": "Complete terms and conditions for Ajit Dev's DevOps engineer portfolio.",
      "inLanguage": ["en-IN", "en-US"],
      "dateModified": "2026-02-22",
      "datePublished": "2024-01-15"
    }
  ]
};

export default function Terms() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8fafc", pt: { xs: 16, md: 20 }, pb: 12 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Container maxWidth="md">
        
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
            background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #f0fdf4 100%)",
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "inline-flex", p: 2, borderRadius: "20px", backgroundColor: "#e0e7ff", color: "#4f46e5", mb: 2 }}>
            <Scale className="w-8 h-8" />
          </Box>

          <Typography variant="h3" component="h1" sx={{ fontWeight: 900, color: "#0f172a", mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
            Terms of Service
          </Typography>

          <Typography variant="h6" sx={{ color: "#334155", fontWeight: 800, mb: 3 }}>
            Ajit Kumar (@ajitdev01) • DevOps Engineer & Cloud Security Developer
          </Typography>

          <Box sx={{ width: 96, height: 4, borderRadius: 2, backgroundColor: "#6366f1", mx: "auto", mb: 3 }} />

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.5 }}>
            <Chip icon={<FileCheck className="w-3.5 h-3.5 text-indigo-600" />} label="Legally Compliant" size="small" variant="outlined" sx={{ fontWeight: 800 }} />
            <Chip icon={<Shield className="w-3.5 h-3.5 text-emerald-600" />} label="Indian IT Act 2000 & GDPR Aligned" color="success" size="small" sx={{ fontWeight: 800 }} />
            <Chip icon={<CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />} label="Freelance & Consulting Ready" color="warning" size="small" sx={{ fontWeight: 800 }} />
          </Box>
        </Paper>

        {/* Content Section Papers */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          
          {/* Plain English Summary */}
          <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", border: "1px solid #c7d2fe", backgroundColor: "#eef2ff" }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", mb: 1.5 }}>
              📌 Quick Plain English Summary
            </Typography>
            <Box component="ul" sx={{ pl: 2.5, m: 0, color: "#334155", fontSize: "0.9rem", lineHeight: 1.8 }}>
              <li>✓ This is an engineering portfolio showcasing software projects and cloud architectures.</li>
              <li>✓ Code and content belong to Ajit Kumar unless designated with an open-source license.</li>
              <li>✓ The contact form is for legitimate business and project inquiries.</li>
            </Box>
          </Paper>

          {/* Section 1 */}
          <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
            <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 2 }}>
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8 }}>
              By accessing or using <strong>ajitdev.com</strong>, you agree to be bound by these Terms of Service. This portfolio website is operated by <strong>Ajit Kumar</strong>, a DevOps Engineer and Full Stack Developer based in Katihar, Bihar, India.
            </Typography>
          </Paper>

          {/* Section 2 */}
          <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
            <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 2 }}>
              2. Intellectual Property Rights
            </Typography>
            <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8 }}>
              All project documentation, architecture diagrams, and custom code examples presented on this site remain the intellectual property of Ajit Kumar unless an explicit MIT, Apache, or GPL license is specified in the corresponding GitHub repository.
            </Typography>
          </Paper>

          {/* Section 3 FAQs Accordion */}
          <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
            <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
              <HelpCircle className="w-5 h-5 text-indigo-600" /> Frequently Asked Questions
            </Typography>

            <Accordion elevation={0} sx={{ border: "1px solid #e2e8f0", borderRadius: "14px !important", mb: 1.5 }}>
              <AccordionSummary expandIcon={<ChevronDown className="w-4 h-4" />}>
                <Typography sx={{ fontWeight: 800, color: "#0f172a" }}>Can I hire Ajit Kumar for DevOps or Full Stack consulting?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: "#64748b" }}>
                  Yes! Ajit is available for full-time roles, contract work, and DevOps consulting. Contact support@ajitdev.com or use the contact form.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion elevation={0} sx={{ border: "1px solid #e2e8f0", borderRadius: "14px !important" }}>
              <AccordionSummary expandIcon={<ChevronDown className="w-4 h-4" />}>
                <Typography sx={{ fontWeight: 800, color: "#0f172a" }}>Are the portfolio projects open source?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: "#64748b" }}>
                  Public repositories are available on GitHub under open-source licenses. Refer to each repository's LICENSE file for commercial usage terms.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>

        </Box>

      </Container>
    </Box>
  );
}