import type { Metadata } from "next";
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
  Mail,
  MapPin,
  BookOpen,
  Briefcase,
  Clock,
  Globe,
  Code,
  FileText,
  ExternalLink,
} from "lucide-react";
import ContactForm from "../components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — AJITDEV",
  description: "Get in touch with Ajit Dev (ajitdev01), a Full Stack Developer & DevOps Engineer based in Katihar, Bihar, India. Available for full-time and contract software roles.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — AJITDEV",
    description: "Get in touch with Ajit Dev (ajitdev01), a Full Stack Developer & DevOps Engineer based in Katihar, Bihar, India.",
    url: "https://ajitdev.com/contact",
  },
};

const FiGithub = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const FiLinkedin = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    title: "Primary Email",
    content: "support@ajitdev.com",
    link: "mailto:support@ajitdev.com",
    description: "Business & support queries"
  },
  {
    icon: Mail,
    title: "Personal Email",
    content: "ajitk23192@gmail.com",
    link: "mailto:ajitk23192@gmail.com",
    description: "Direct communication • 24hr response"
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Katihar, Bihar, India",
    link: null,
    description: "Available worldwide • Remote"
  },
  {
    icon: BookOpen,
    title: "Education",
    content: "BCA — Cloud & Security",
    link: null,
    description: "Amity University Online • CGPA 7.95+"
  },
  {
    icon: Briefcase,
    title: "Status",
    content: "Open to Opportunities",
    link: null,
    description: "Full Stack Engineer • Remote"
  }
];

export default function ContactPage() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8fafc", pt: { xs: 16, md: 20 }, pb: 12 }}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Ajit Dev — Full Stack Engineer",
            url: "https://ajitdev.com/contact",
            description: "Contact page for Ajit Dev (ajitdev01), a Full Stack Engineer specializing in MERN, Next.js, Docker, Kubernetes, and Cloud Security.",
            about: {
              "@type": "Person",
              name: "Ajit Dev",
              jobTitle: "Full Stack Engineer",
              email: ["support@ajitdev.com", "ajitk23192@gmail.com"],
              url: "https://ajitdev.com",
            }
          }),
        }}
      />

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
            <Mail className="w-8 h-8" />
          </Box>

          <Typography variant="h3" component="h1" sx={{ fontWeight: 900, color: "#0f172a", mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
            Let&apos;s Connect
          </Typography>

          <Typography variant="h6" sx={{ color: "#334155", fontWeight: 800, mb: 3 }}>
            Full Stack Engineer • MERN • Next.js • <span className="text-amber-600 font-black">632+ DSA Problems Solved</span>
          </Typography>

          <Box sx={{ width: 96, height: 4, borderRadius: 2, backgroundColor: "#6366f1", mx: "auto", mb: 3 }} />

          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.5 }}>
            <Chip icon={<MapPin className="w-3.5 h-3.5 text-blue-600" />} label="Katihar, Bihar, India" size="small" variant="outlined" sx={{ fontWeight: 800 }} />
            <Chip icon={<Globe className="w-3.5 h-3.5 text-emerald-600" />} label="Available Worldwide • Remote" color="success" size="small" sx={{ fontWeight: 800 }} />
            <Chip icon={<Clock className="w-3.5 h-3.5 text-amber-500" />} label="Response: 24 Hours" variant="outlined" size="small" sx={{ fontWeight: 800 }} />
          </Box>
        </Paper>

        {/* ===== CONTACT FORM SECTION ===== */}
        <Box sx={{ mb: 8 }}>
          <ContactForm />
        </Box>

        {/* ===== CONTACT INFO & SOCIALS GRID ===== */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4 }}>
          {/* Contact Details Paper */}
          <Paper elevation={0} sx={{ p: 4, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", mb: 3 }}>
              Contact Information
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {contactInfo.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 2, p: 2, borderRadius: "16px", backgroundColor: "#f8fafc", border: "1px solid #f1f5f9" }}>
                    <Box sx={{ p: 1.5, borderRadius: "12px", backgroundColor: "#eef2ff", color: "#4f46e5" }}>
                      <IconComp className="w-4 h-4" />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 800, textTransform: "uppercase", fontSize: "0.65rem", display: "block" }}>
                        {item.title}
                      </Typography>
                      {item.link ? (
                        <a href={item.link} className="text-sm font-extrabold text-slate-900 hover:text-indigo-600 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <Typography variant="body2" sx={{ fontWeight: 800, color: "#0f172a" }}>
                          {item.content}
                        </Typography>
                      )}
                      <Typography variant="caption" sx={{ color: "#64748b", fontSize: "0.7rem", display: "block" }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Paper>

          {/* Connect Online Paper */}
          <Paper elevation={0} sx={{ p: 4, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", mb: 3 }}>
              Connect Online (@ajitdev01)
            </Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              <Button component="a" href="https://github.com/ajitdev01" target="_blank" rel="noopener noreferrer" variant="outlined" startIcon={<FiGithub className="w-4 h-4" />} sx={{ p: 2, borderRadius: "16px", fontWeight: 800, textTransform: "none", justifyContent: "start" }}>
                GitHub
              </Button>
              <Button component="a" href="https://linkedin.com/in/ajitdev01" target="_blank" rel="noopener noreferrer" variant="outlined" startIcon={<FiLinkedin className="w-4 h-4" />} sx={{ p: 2, borderRadius: "16px", fontWeight: 800, textTransform: "none", justifyContent: "start" }}>
                LinkedIn
              </Button>
              <Button component="a" href="https://leetcode.com/u/ajitdev01/" target="_blank" rel="noopener noreferrer" variant="outlined" startIcon={<Code className="w-4 h-4" />} sx={{ p: 2, borderRadius: "16px", fontWeight: 800, textTransform: "none", justifyContent: "start" }}>
                LeetCode
              </Button>
              <Link href="/resume" className="no-underline">
                <Button variant="outlined" fullWidth startIcon={<FileText className="w-4 h-4" />} sx={{ p: 2, borderRadius: "16px", fontWeight: 800, textTransform: "none", justifyContent: "start" }}>
                  Resume CV
                </Button>
              </Link>
            </Box>
          </Paper>
        </Box>

      </Container>
    </Box>
  );
}
