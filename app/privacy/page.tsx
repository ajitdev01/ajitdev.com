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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Mail,
  FileText,
  UserCheck,
  Eye,
  Server,
  Key,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Ajit Dev — DevOps Engineer Portfolio India",
  description: "Complete privacy policy for Ajit Dev's DevOps and Cloud Security portfolio. Learn how your data is protected when contacting a Full Stack Developer from Katihar, Bihar.",
  alternates: {
    canonical: "https://ajitdev.com/privacy",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ajitdev.com/privacy",
      "url": "https://ajitdev.com/privacy",
      "name": "Privacy Policy | Ajit Dev — DevOps Engineer Portfolio India",
      "description": "Complete privacy policy for Ajit Dev's DevOps and Cloud Security portfolio. Learn how your data is protected when contacting a Full Stack Developer from Katihar, Bihar.",
      "inLanguage": ["en-IN", "en-US"],
      "isPartOf": {
        "@id": "https://ajitdev.com/#website"
      },
      "about": {
        "@id": "https://ajitdev.com/#person"
      },
      "datePublished": "2024-01-15",
      "dateModified": "2025-02-22"
    }
  ]
};

export default function PrivacyPage() {
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
            background: "linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #f0fdf4 100%)",
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "inline-flex", p: 2, borderRadius: "20px", backgroundColor: "#e0f2fe", color: "#0284c7", mb: 2 }}>
            <ShieldCheck className="w-8 h-8" />
          </Box>

          <Typography variant="h3" component="h1" sx={{ fontWeight: 900, color: "#0f172a", mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
            Privacy Policy
          </Typography>

          <Typography variant="h6" sx={{ color: "#334155", fontWeight: 800, mb: 3 }}>
            Ajit Kumar (@ajitdev01) • DevOps Engineer & Cloud Security Developer • Katihar, Bihar, India
          </Typography>

          <Box sx={{ width: 96, height: 4, borderRadius: 2, backgroundColor: "#0284c7", mx: "auto", mb: 3 }} />

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.5 }}>
            <Chip icon={<Lock className="w-3.5 h-3.5 text-emerald-600" />} label="GDPR-Ready • 100% Transparency" color="success" size="small" sx={{ fontWeight: 800 }} />
            <Chip icon={<ShieldCheck className="w-3.5 h-3.5 text-blue-600" />} label="HTTPS/TLS 1.3 Encrypted" size="small" variant="outlined" sx={{ fontWeight: 800 }} />
            <Chip icon={<FileText className="w-3.5 h-3.5 text-indigo-600" />} label="Last Modified: February 2026" size="small" variant="outlined" sx={{ fontWeight: 800 }} />
          </Box>
        </Paper>

        {/* Content Section Papers */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          
          {/* Section 1 */}
          <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
            <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 2 }}>
              1. Introduction & Transparency
            </Typography>
            <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8, mb: 2 }}>
              Welcome to <strong>ajitdev.com</strong> — the professional portfolio of <strong>Ajit Kumar</strong>, a <strong>DevOps Engineer and Full Stack Developer</strong> based in <strong>Katihar, Bihar, India</strong>.
            </Typography>
            <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8 }}>
              Whether you are evaluating my cloud security portfolio, hiring for full stack engineering roles, or exploring DSA solutions, your data is handled with the same security principles applied to production server infrastructure.
            </Typography>
          </Paper>

          {/* Section 2 */}
          <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
            <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 2 }}>
              2. Information Collected
            </Typography>
            <Box component="ul" sx={{ pl: 2.5, m: 0, color: "#475569", fontSize: "0.95rem", lineHeight: 1.8 }}>
              <li><strong>Contact Form:</strong> Name, email address, subject line, and message content submitted voluntarily.</li>
              <li><strong>Direct Email:</strong> Messages sent directly to <code>support@ajitdev.com</code> or <code>ajitk23192@gmail.com</code>.</li>
              <li><strong>Technical Logs:</strong> Anonymized browser headers, device types, and HTTPS access logs.</li>
            </Box>
          </Paper>

          {/* Section 3 Table */}
          <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
            <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 3 }}>
              3. Third-Party Service Providers
            </Typography>
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #f1f5f9", borderRadius: "16px" }}>
              <Table size="small">
                <TableHead sx={{ backgroundColor: "#f8fafc" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 900, color: "#0f172a" }}>Service</TableCell>
                    <TableCell sx={{ fontWeight: 900, color: "#0f172a" }}>Purpose</TableCell>
                    <TableCell sx={{ fontWeight: 900, color: "#0f172a" }}>Data Shared</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 800, color: "#0f172a" }}>Resend / Nodemailer</TableCell>
                    <TableCell sx={{ color: "#475569" }}>Contact form transmission</TableCell>
                    <TableCell sx={{ color: "#475569" }}>Name, Email, Message</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 800, color: "#0f172a" }}>Vercel Hosting</TableCell>
                    <TableCell sx={{ color: "#475569" }}>Edge deployment</TableCell>
                    <TableCell sx={{ color: "#475569" }}>Temporary HTTPS access logs</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          {/* Section 4 Security */}
          <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#0f172a", color: "#f8fafc" }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: "#ffffff", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
              <Lock className="w-5 h-5 text-emerald-400" /> 4. Security & Zero-Trust Best Practices
            </Typography>
            <Box component="ul" sx={{ pl: 2.5, m: 0, fontFamily: "monospace", fontSize: "0.85rem", lineHeight: 2, color: "#cbd5e1" }}>
              <li>✓ TLS 1.3 / HTTPS Strict Transport Security (HSTS)</li>
              <li>✓ Zero persistent database storage for form submissions</li>
              <li>✓ Zero third-party advertising tracking cookies</li>
              <li>✓ Minimal data retention & automated log expiration</li>
            </Box>
          </Paper>

        </Box>

      </Container>
    </Box>
  );
}