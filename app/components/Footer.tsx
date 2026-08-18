import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Home,
  User,
  Settings,
  FolderGit2,
  GraduationCap,
  Mail,
  Shield,
  Award,
  Globe,
  Terminal,
  BookOpen,
  Newspaper,
  Trophy,
  Heart,
  MessageCircle,
} from "lucide-react";

const BackToTop = dynamic(() => import("./common/BackToTop"));

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

const FiTwitter = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);

const FiInstagram = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
  </svg>
);

const BRAND_INFO = {
  name: "Ajit Dev",
  title: "Full Stack Developer · DevOps Engineer",
  description: "Full Stack Developer, DevOps Engineer & Cloud Security Specialist based in Katihar, Bihar, India. Building production-grade Web Applications, MERN/Next.js architectures, and AWS/Docker infrastructure.",
  email: "support@ajitdev.com",
  secondaryEmail: "ajitk23192@gmail.com",
  phone: "+916205526784",
  location: "Katihar, Bihar, India",
};

const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/ajitdev01", icon: FiGithub },
  { platform: "LinkedIn", url: "https://linkedin.com/in/ajitdev01", icon: FiLinkedin },
  { platform: "Twitter", url: "https://twitter.com/ajitdev01", icon: FiTwitter },
  { platform: "Instagram", url: "https://instagram.com/ajitdev01", icon: FiInstagram },
  { platform: "WhatsApp", url: "https://wa.me/916205526784", icon: MessageCircle },
];

const NAV_LINKS = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Skills", path: "/skills", icon: Settings },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Contact", path: "/contact", icon: Mail },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "News", path: "/news", icon: Newspaper },
  { name: "Research", path: "/research", icon: Terminal },
  { name: "DSA", path: "/dsa", icon: Trophy },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Service", path: "/terms" },
  { name: "Sitemap", path: "/sitemap.xml", external: true },
];

const TECH_SKILLS = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB",
  "AWS", "Docker", "Kubernetes", "Terraform", "Linux", "C++",
  "Tailwind CSS", "MUI", "Git", "CI/CD", "REST APIs", "GraphQL",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080c14] text-slate-100 pt-16 pb-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* COLUMN 1: Brand Info & Socials */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center font-black shadow-md shadow-indigo-600/30">
                AK
              </div>
              <div>
                <p className="font-black text-white text-lg leading-tight">
                  {BRAND_INFO.name}
                </p>
                <span className="text-indigo-400 font-bold text-xs">
                  {BRAND_INFO.title}
                </span>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed text-sm">
              {BRAND_INFO.description}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300 text-xs font-bold bg-slate-900/50">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                HTTPS Encrypted
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300 text-xs font-bold bg-slate-900/50">
                <Award className="w-3.5 h-3.5 text-indigo-400" />
                MERN &amp; DevOps
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300 text-xs font-bold bg-slate-900/50">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                Katihar, Bihar, India
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((link) => {
                const IconComp = link.icon;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    title={link.platform}
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-colors shadow-xs"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-black text-white text-xs uppercase tracking-wider mb-5">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {NAV_LINKS.map((item) => {
                const IconComp = item.icon;
                return (
                  <li key={item.path}>
                    <Link href={item.path} className="inline-flex items-center gap-2 text-slate-300 hover:text-indigo-400 font-bold text-sm transition-colors">
                      <IconComp className="w-3.5 h-3.5 text-indigo-400" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 3: Tech Stack & Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-black text-white text-xs uppercase tracking-wider mb-5">
              Tech Stack &amp; Contact
            </h3>
            
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 mb-6">
              <span className="text-slate-400 font-extrabold text-[11px] block mb-3 uppercase tracking-wider">
                Core Skills
              </span>
              <div className="flex flex-wrap gap-1.5">
                {TECH_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-slate-800 text-slate-200 font-bold text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-1.5">
              Email: <a href={`mailto:${BRAND_INFO.email}`} className="text-indigo-400 font-bold hover:underline">{BRAND_INFO.email}</a>
            </p>
            <p className="text-slate-300 text-sm">
              Location: <strong className="text-slate-200">{BRAND_INFO.location}</strong>
            </p>
          </div>

        </div>

        <div className="my-8 border-t border-slate-800/80" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 font-bold text-xs text-center sm:text-left">
            © {currentYear} <strong>{BRAND_INFO.name}</strong> (@{BRAND_INFO.name.toLowerCase().replace(" ", "")}01). All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.path} href={link.path} className="text-slate-300 hover:text-indigo-400 font-bold text-xs transition-colors">
                {link.name}
              </Link>
            ))}
            <span className="text-slate-400 font-bold text-xs inline-flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in India
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Back to Top Trigger */}
      <BackToTop />
    </footer>
  );
}

