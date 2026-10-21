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
  Code2,
  FileText,
} from "lucide-react";

const BackToTop = dynamic(() => import("./common/BackToTop"));

// SVG Icons for platforms
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
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FiInstagram = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
  </svg>
);

const FiYoutube = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FiTelegram = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.942z" />
  </svg>
);

const FiFacebook = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const FiSnapchat = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.029 0C5.389 0 .005 5.389.005 12.029c0 6.64 5.384 12.029 12.024 12.029 6.645 0 12.029-5.389 12.029-12.029C24.058 5.389 18.674 0 12.029 0zm.04 4.542c2.052 0 3.714 1.488 3.864 3.435.044.577-.076 1.155-.076 1.733 0 .285.34.422.56.552.348.204.697.409.894.757.17.299.112.673-.08.966-.188.287-.49.467-.803.607-.156.07-.14.28-.01.37.525.367 1.144.606 1.758.823.364.128.53.513.393.876-.118.314-.442.493-.781.428-.485-.094-.972-.186-1.46-.264-.265-.042-.424.167-.32.413.297.705.815 1.25 1.486 1.637.288.166.368.535.18.815-.147.218-.42.316-.677.242-.777-.225-1.554-.45-2.33-.675-.246-.07-.406.1-.383.354.062.68.27 1.332.613 1.93.18.313.064.714-.25.885-.18.098-.396.108-.585.027-.812-.349-1.62-.7-2.433-1.047-.193-.082-.363-.004-.423.197-.184.622-.505 1.182-.942 1.657-.27.293-.717.33-1.03.084a.792.792 0 0 1-.22-.387c-.31-.973-.414-2.003-.306-3.023.026-.24-.132-.426-.37-.367-.788.196-1.576.392-2.364.588-.26.065-.526-.043-.67-.27a.684.684 0 0 1 .158-.857c.665-.436 1.182-1.025 1.48-1.743.097-.234-.055-.433-.314-.393-.496.076-.99.166-1.484.257-.336.062-.656-.116-.774-.43-.135-.36.028-.745.39-.873.616-.217 1.236-.456 1.76-.823.13-.09.146-.3.01-.37-.312-.14-.614-.32-.803-.607-.192-.293-.25-.667-.08-.966.197-.348.546-.553.894-.757.22-.13.56-.267.56-.552 0-.578-.12-1.156-.076-1.733.15-1.947 1.812-3.435 3.864-3.435z" />
  </svg>
);

const BRAND_INFO = {
  name: "Ajit Dev",
  title: "Full Stack Developer · DevOps Engineer",
  description: "Full Stack Developer, DevOps Engineer & Cloud Security Specialist from Katihar, Bihar, India. Architecting production web applications with Next.js & MERN Stack, and automated AWS/Docker cloud infrastructure.",
  email: "support@ajitdev.com",
  phone: "+916205526784",
  location: "Katihar, Bihar, India",
};

// Social & Media Platforms
const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/ajitdev01", icon: FiGithub },
  { platform: "LinkedIn", url: "https://linkedin.com/in/ajitdev01", icon: FiLinkedin },
  { platform: "X", url: "https://x.com/ajitdev01", icon: FiTwitter },
  { platform: "YouTube", url: "https://youtube.com/@ajitdev01", icon: FiYoutube },
  { platform: "Telegram", url: "https://t.me/ajitdev01", icon: FiTelegram },
  { platform: "Instagram", url: "https://instagram.com/ajitdev01", icon: FiInstagram },
  { platform: "Facebook", url: "https://facebook.com/ajitdev01", icon: FiFacebook },
  { platform: "Snapchat", url: "https://snapchat.com/add/ajitdev01", icon: FiSnapchat },
];

// Coding Competitive Profiles
const CODING_PROFILES = [
  { name: "LeetCode", path: "https://leetcode.com/u/ajitdev01/" },
  { name: "Codeforces", path: "https://codeforces.com/profile/ajitdev01" },
  { name: "CodeChef", path: "https://www.codechef.com/users/ajitdev01/" },
  { name: "GitHub", path: "https://github.com/ajitdev01" },
];

// Technical Writing & Dev Communities
const WRITING_COMMUNITIES = [
  { name: "Dev.to", path: "https://dev.to/ajitdev01" },
  { name: "Hashnode", path: "https://hashnode.com/@ajitdev01" },
  { name: "Medium", path: "https://medium.com/@ajitdev01" },
  { name: "YouTube", path: "https://youtube.com/@ajitdev01" },
];

// Genuine Project Ecosystem Links
const PROJECT_ECOSYSTEM = [
  { name: "Next.js Projects", path: "https://next.ajitdev.com" },
  { name: "API Platform", path: "https://api.ajitdev.com" },
  { name: "Try AjitDev", path: "https://try.ajitdev.com" },
  { name: "Brainzima", path: "https://brainzima.com" },
  { name: "CollegeSure", path: "https://collegesure.brainzima.com" },
  { name: "BiFindr", path: "https://bifindr.com" },
  { name: "Rexvel", path: "https://rexvel.com" },
  { name: "TryBook", path: "https://trybook.in" },
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
  "DevSecOps", "Cloud Security", "CI/CD", "REST APIs", "System Design",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080c14] text-slate-100 pt-16 pb-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* COLUMN 1: Brand Info & Socials (Span 4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center font-black shadow-md shadow-indigo-600/30">
                AD
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
                Full Stack &amp; DevOps
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300 text-xs font-bold bg-slate-900/50">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                Katihar, Bihar, India
              </span>
            </div>

            {/* Social Icons Grid */}
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((link) => {
                const IconComp = link.icon;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ajit Dev on ${link.platform}`}
                    title={`Ajit Dev on ${link.platform}`}
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-colors shadow-xs"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: Quick Navigation (Span 2) */}
          <div className="lg:col-span-2">
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

          {/* COLUMN 3: Coding Profiles, Communities & Ecosystem (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="font-black text-white text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-400" /> Coding Profiles
            </h3>
            <ul className="space-y-2 list-none p-0 m-0 mb-6">
              {CODING_PROFILES.map((profile) => (
                <li key={profile.name}>
                  <a href={profile.path} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-400 font-bold text-xs transition-colors">
                    <Code2 className="w-3 h-3 text-amber-400/80" />
                    {profile.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-black text-white text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-indigo-400" /> Dev Communities
            </h3>
            <ul className="space-y-2 list-none p-0 m-0 mb-6">
              {WRITING_COMMUNITIES.map((community) => (
                <li key={community.name}>
                  <a href={community.path} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-indigo-400 font-bold text-xs transition-colors">
                    <Globe className="w-3 h-3 text-indigo-400/80" />
                    {community.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-black text-white text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400" /> Project Ecosystem
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {PROJECT_ECOSYSTEM.map((project) => (
                <li key={project.name}>
                  <a href={project.path} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 font-bold text-xs transition-colors">
                    <Globe className="w-3 h-3 text-emerald-400/80" />
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Tech Stack & Contact (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="font-black text-white text-xs uppercase tracking-wider mb-5">
              Tech Stack &amp; Contact
            </h3>
            
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 mb-5">
              <span className="text-slate-400 font-extrabold text-[11px] block mb-2.5 uppercase tracking-wider">
                Core Competencies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {TECH_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-slate-800 text-slate-200 font-bold text-[11px] rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-slate-300 text-xs mb-1.5">
              Email: <a href={`mailto:${BRAND_INFO.email}`} className="text-indigo-400 font-bold hover:underline">{BRAND_INFO.email}</a>
            </p>
            <p className="text-slate-300 text-xs mb-1.5">
              Phone: <a href={`tel:${BRAND_INFO.phone}`} className="text-slate-200 font-bold hover:underline">{BRAND_INFO.phone}</a>
            </p>
            <p className="text-slate-300 text-xs mb-4">
              Location: <strong className="text-slate-200">{BRAND_INFO.location}</strong>
            </p>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-slate-200">Ajit Dev (@ajitdev01)</strong> — Full Stack &amp; DevOps portfolio from Katihar, Bihar, India.
            </div>
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
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Bihar, India
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Back to Top Trigger */}
      <BackToTop />
    </footer>
  );
}
