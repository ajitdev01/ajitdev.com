import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  BookOpen,
  Briefcase,
  Clock,
  Globe,
  Code,
  FileText,
} from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
import { PAGE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Ajit Dev – Hire Full Stack/DevOps Engineer",
  description: "Get in touch with Ajit Dev (Katihar, Bihar, India) – Full-Stack & DevOps Engineer. Available for hire and technical collaborations.",
  keywords: [...PAGE_KEYWORDS.contact],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Ajit Dev – Hire Full Stack/DevOps Engineer",
    description: "Get in touch with Ajit Dev (Katihar, Bihar, India) – Full-Stack & DevOps Engineer. Available for hire and technical collaborations.",
    url: "https://ajitdev.com/contact",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Ajit Dev — Full Stack & DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ajit Dev – Hire Full Stack/DevOps Engineer",
    description: "Get in touch with Ajit Dev (Katihar, Bihar, India) – Full-Stack & DevOps Engineer.",
    images: ["https://ajitdev.com/og-image.png"],
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
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-24">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO BANNER CARD */}
        <Card className="p-6 sm:p-10 mb-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-center shadow-xs">
          <div className="inline-flex p-4 rounded-2xl bg-indigo-100 text-indigo-600 mb-4">
            <Mail className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-2">
            Let&apos;s Connect
          </h1>

          <p className="text-sm sm:text-base font-extrabold text-slate-700 mb-4">
            Full Stack Engineer • MERN • Next.js • <span className="text-amber-600 font-black">632+ DSA Problems Solved</span>
          </p>

          <div className="w-24 h-1 rounded-full bg-indigo-600 mx-auto mb-6" />

          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="py-1 px-3 text-xs gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600" /> Katihar, Bihar, India
            </Badge>
            <Badge variant="success" className="py-1 px-3 text-xs gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-600" /> Available Worldwide • Remote
            </Badge>
            <Badge variant="outline" className="py-1 px-3 text-xs gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500" /> Response: 24 Hours
            </Badge>
          </div>
        </Card>

        {/* CONTACT FORM SECTION */}
        <div className="mb-12">
          <ContactForm />
        </div>

        {/* CONTACT INFO & SOCIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details Card */}
          <Card className="p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <h3 className="text-xl font-black text-slate-900 mb-6">
              Contact Information
            </h3>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                        {item.title}
                      </span>
                      {item.link ? (
                        <a href={item.link} className="text-sm font-extrabold text-slate-900 hover:text-indigo-600 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <span className="text-sm font-extrabold text-slate-900 block">
                          {item.content}
                        </span>
                      )}
                      <span className="text-xs font-medium text-slate-500 block">
                        {item.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Connect Online Card */}
          <Card className="p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <h3 className="text-xl font-black text-slate-900 mb-6">
              Connect Online (@ajitdev01)
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="no-underline">
                <Button variant="outline" className="w-full h-12 justify-start font-extrabold text-slate-800 border-slate-200 gap-2">
                  <FiGithub className="w-4 h-4" /> GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/ajitdev01" target="_blank" rel="noopener noreferrer" className="no-underline">
                <Button variant="outline" className="w-full h-12 justify-start font-extrabold text-slate-800 border-slate-200 gap-2">
                  <FiLinkedin className="w-4 h-4 text-blue-600" /> LinkedIn
                </Button>
              </a>
              <a href="https://leetcode.com/u/ajitdev01/" target="_blank" rel="noopener noreferrer" className="no-underline">
                <Button variant="outline" className="w-full h-12 justify-start font-extrabold text-slate-800 border-slate-200 gap-2">
                  <Code className="w-4 h-4 text-amber-500" /> LeetCode
                </Button>
              </a>
              <Link href="/resume" className="no-underline">
                <Button variant="outline" className="w-full h-12 justify-start font-extrabold text-slate-800 border-slate-200 gap-2">
                  <FileText className="w-4 h-4 text-indigo-600" /> Resume CV
                </Button>
              </Link>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
