'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ========== INLINE SVG ICONS (eliminates react-icons bundle) ==========
const IconProps = { strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
const icon = (size: number, className?: string) => ({ width: size, height: size, viewBox: "0 0 24 24", className, stroke: "currentColor", ...IconProps });

const FiHome = ({ size = 24, className }: { size?: number; className?: string }) => <svg {...icon(size, className)}><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const FiUser = ({ size = 24, className }: { size?: number; className?: string }) => <svg {...icon(size, className)}><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const FiSettings = ({ size = 24, className }: { size?: number; className?: string }) => <svg {...icon(size, className)}><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const FiFolder = ({ size = 24, className }: { size?: number; className?: string }) => <svg {...icon(size, className)}><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>;
const FiMail = ({ size = 24, className }: { size?: number; className?: string }) => <svg {...icon(size, className)}><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const FiHeart = ({ size = 24, className }: { size?: number; className?: string }) => <svg {...icon(size, className)}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>;
const FiChevronUp = ({ size = 24, className }: { size?: number; className?: string }) => <svg {...icon(size, className)}><path d="M18 15l-6-6-6 6" /></svg>;
const FiGithub = ({ size = 24, className }: { size?: number; className?: string }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>;
const FiLinkedin = ({ size = 24, className }: { size?: number; className?: string }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" /></svg>;
const FiShield = ({ size = 24, className }: { size?: number; className?: string }) => <svg {...icon(size, className)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const FiAward = ({ size = 24, className }: { size?: number; className?: string }) => <svg {...icon(size, className)}><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" /></svg>;
const FiGlobe = ({ size = 24, className }: { size?: number; className?: string }) => <svg {...icon(size, className)}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>;
const FiTwitter = ({ size = 24, className }: { size?: number; className?: string }) => <svg {...icon(size, className)}><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>;
const FiInstagram = ({ size = 24, className }: { size?: number; className?: string }) => <svg {...icon(size, className)}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" /></svg>;
const FaWhatsapp = ({ size = 24, className }: { size?: number; className?: string }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
const FaGraduationCap = ({ size = 24, className }: { size?: number; className?: string }) => <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className}><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>;
const FaDev = ({ size = 24, className }: { size?: number; className?: string }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6v4.36h.58c.37 0 .67-.08.87-.25.21-.18.31-.47.31-.85v-2.19c0-.42-.11-.7-.34-.84zm.75 2.74c0 .67-.19 1.17-.58 1.5-.38.34-.93.5-1.62.5H4.5V8.39h1.6c.66 0 1.19.18 1.56.53.39.36.58.86.58 1.51v2.36h-.07zM11.6 10.1H9.9v1.4h1.53v1.18H9.9v1.64h1.7v1.18H8.4V8.92h3.2v1.18zm5.97-1.18l-1.62 7.58h-1.67l-1.15-4.48-1.16 4.48H10.3l-1.62-7.58h1.53l.98 4.76 1.17-4.76h1.43l1.14 4.76 1-4.76h1.64z" /></svg>;
const FaMedium = ({ size = 24, className }: { size?: number; className?: string }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>;
const FaSnapchat = ({ size = 24, className }: { size?: number; className?: string }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.959-.289.218-.12.4-.09.579.032.16.11.24.29.229.502-.02.37-.308.62-.671.828-.348.196-.744.335-1.035.407l-.015.005c-.03.008-.06.017-.089.027-.11.04-.14.072-.155.15-.004.02-.01.042-.016.064-.078.24-.154.475-.316.658a.723.723 0 01-.376.226c.041.17.076.342.076.508 0 .42-.274.85-.773 1.236-.47.364-1.114.636-1.8.814-.3.078-.62.136-.945.174-.124.015-.169.051-.194.08-.036.042-.067.123-.085.222-.023.134-.001.22.011.258.094.288.124.444.124.546 0 .327-.18.482-.364.583a2.38 2.38 0 01-.648.229c-.25.054-.5.084-.67.102l-.053.005c-.02.003-.04.005-.07.01-.12.015-.217.082-.31.29a2.47 2.47 0 00-.17.616c-.02.112-.027.228-.05.37a.49.49 0 01-.074.217.292.292 0 01-.236.119c-.06 0-.12-.013-.18-.026a5.59 5.59 0 00-.61-.082 5.68 5.68 0 00-.782-.058c-.295 0-.59.03-.882.094a4.07 4.07 0 00-.88.33c-.325.17-.655.35-1.08.47a3.08 3.08 0 01-.807.107c-.14 0-.28-.012-.42-.037a2.76 2.76 0 01-.85-.32c-.247-.143-.405-.313-.52-.497-.136-.218-.211-.459-.24-.668-.02-.145-.041-.301-.058-.445-.012-.107-.024-.213-.04-.316-.06-.377-.164-.554-.302-.575-.03-.005-.06-.007-.09-.01l-.053-.006a6.66 6.66 0 01-.67-.101 2.38 2.38 0 01-.648-.23c-.184-.1-.364-.255-.364-.582 0-.102.03-.258.124-.546.012-.038.034-.124.011-.258-.018-.099-.049-.18-.085-.222-.025-.029-.07-.065-.194-.08a8.48 8.48 0 01-.945-.174c-.686-.178-1.33-.45-1.8-.814-.5-.386-.773-.817-.773-1.236 0-.166.035-.338.076-.508a.723.723 0 01-.376-.226c-.162-.183-.238-.418-.316-.658-.006-.022-.012-.044-.016-.064-.015-.078-.045-.11-.155-.15a1.52 1.52 0 00-.089-.027l-.015-.005c-.291-.072-.687-.211-1.035-.407-.363-.208-.652-.458-.671-.828-.01-.212.069-.392.229-.502.18-.122.361-.152.579-.032.3.169.659.273.959.289.198 0 .326-.045.401-.09a30.62 30.62 0 01-.033-.57c-.104-1.628-.23-3.654.3-4.847C6.447 1.069 9.803.793 10.793.793h1.413z" /></svg>;


// ========== BRAND CONFIGURATION ==========
const BRAND_CONFIG = {
  name: "Ajit Dev",
  username: "ajitdev01",
  role: "Full Stack Developer",
  title: "Full Stack Developer | DevOps • Cloud Security",
  description: "Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar, India. Specializing in Next.js, React, MERN Stack, AWS, Docker, Kubernetes, Terraform, Linux, Cloud Security, Cyber Security, and System Design.",
  shortDescription: "Ajit Dev (ajitdev01) — Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar, India.",
  email: "support@ajitdev.com",
  phone: "+916205526784",
  location: "Katihar, Bihar, India",
  availability: {
    title: "Available for Opportunities",
    subtitle: "Full Stack • DevOps • Cloud Security • Full-time & Contract Roles",
    status: "Open for Work"
  },
  founded: "2023",
  website: "https://ajitdev.com",
};

// ========== SOCIAL LINKS ==========
const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/ajitdev01", icon: FiGithub, ariaLabel: "Visit Ajit Dev's GitHub - Full Stack & DevOps Projects", rel: "me noopener noreferrer", profileType: "professional" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/ajitdev01", icon: FiLinkedin, ariaLabel: "Connect with Ajit Dev on LinkedIn", rel: "me noopener noreferrer", profileType: "professional" },
  { platform: "LeetCode", url: "https://leetcode.com/ajitdev01", icon: FiMail, ariaLabel: "View Ajit Dev's LeetCode profile - DSA & Problem Solving", rel: "me noopener noreferrer", profileType: "professional" },
  { platform: "Codeforces", url: "https://codeforces.com/profile/ajitdev01", icon: FiMail, ariaLabel: "View Ajit Dev's Codeforces profile", rel: "me noopener noreferrer", profileType: "professional" },
  { platform: "Dev.to", url: "https://dev.to/ajitdev01", icon: FaDev, ariaLabel: "Read Ajit Dev's technical blogs on Dev.to", rel: "me noopener noreferrer", profileType: "professional" },
  { platform: "Medium", url: "https://medium.com/@ajitdev01", icon: FaMedium, ariaLabel: "Follow Ajit Dev on Medium", rel: "me noopener noreferrer", profileType: "professional" },
  { platform: "Hashnode", url: "https://hashnode.com/@ajitdev01", icon: FiGlobe, ariaLabel: "Follow Ajit Dev on Hashnode", rel: "me noopener noreferrer", profileType: "professional" },
  { platform: "YouTube", url: "https://youtube.com/@ajitdev01", icon: FiGlobe, ariaLabel: "Subscribe to Ajit Dev on YouTube", rel: "me noopener noreferrer", profileType: "professional" },
  { platform: "Twitter", url: "https://twitter.com/ajitdev01", icon: FiTwitter, ariaLabel: "Follow Ajit Dev on Twitter/X", rel: "me noopener noreferrer", profileType: "professional" },
  { platform: "Instagram", url: "https://instagram.com/ajitdev01", icon: FiInstagram, ariaLabel: "Follow Ajit Dev on Instagram", rel: "me noopener noreferrer", profileType: "social" },
  { platform: "Facebook", url: "https://facebook.com/ajitdev01", icon: FiGlobe, ariaLabel: "Follow Ajit Dev on Facebook", rel: "me noopener noreferrer", profileType: "social" },
  { platform: "Telegram", url: "https://t.me/ajitdev01", icon: FiGlobe, ariaLabel: "Message Ajit Dev on Telegram", rel: "me noopener noreferrer", profileType: "social" },
  { platform: "Snapchat", url: "https://snapchat.com/add/ajitdev01", icon: FaSnapchat, ariaLabel: "Add Ajit Dev on Snapchat", rel: "me noopener noreferrer", profileType: "social" },
  { platform: "Email", url: "mailto:support@ajitdev.com", icon: FiMail, ariaLabel: "Email Ajit Dev", rel: "noopener noreferrer" },
  { platform: "WhatsApp", url: "https://wa.me/916205526784", icon: FaWhatsapp, ariaLabel: "WhatsApp Ajit Dev", rel: "noopener noreferrer" },
];

// ========== NAVIGATION ==========
const NAV_LINKS = [
  { name: "Home", path: "/", icon: FiHome, description: "Return to Ajit Dev's Full Stack & DevOps Portfolio homepage", title: "Home - Full Stack Developer & DevOps Engineer Portfolio" },
  { name: "About", path: "/about", icon: FiUser, description: "Learn about Ajit Dev's Full Stack & DevOps journey", title: "About Ajit Dev - Full Stack Developer & DevOps Engineer" },
  { name: "Skills", path: "/skills", icon: FiSettings, description: "Technical skills - Full Stack Development, DevOps & Cloud Security", title: "Skills - MERN, Next.js, DevOps, AWS, Cloud Security" },
  { name: "Projects", path: "/projects", icon: FiFolder, description: "Portfolio projects by Ajit Dev - Full Stack & DevOps Applications", title: "Projects - Full Stack & DevOps Applications Portfolio" },
  { name: "Education", path: "/education", icon: FaGraduationCap, description: "Education and certifications in Computer Science", title: "Education & Certifications - Ajit Dev" },
  { name: "Contact", path: "/contact", icon: FiMail, description: "Get in touch for Full Stack & DevOps opportunities", title: "Contact Ajit Dev - Hire Full Stack Developer & DevOps Engineer" },
];

const LEGAL_LINKS = [
  { name: "Privacy", path: "/privacy", ariaLabel: "Privacy Policy" },
  { name: "Terms", path: "/terms", ariaLabel: "Terms of Service" },
  { name: "Sitemap", path: "/sitemap.xml", ariaLabel: "Sitemap", external: true },
];

// ========== SKILLS CATEGORIZED ==========
const TECH_CATEGORIES = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Redux"], color: "blue" },
  { category: "Backend", items: ["Node.js", "Express.js", "Python", "Java", "C++", "REST APIs"], color: "cyan" },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma", "Mongoose"], color: "violet" },
  { category: "Cloud & DevOps", items: ["Vercel", "Netlify", "AWS", "Docker", "GitHub Actions", "CI/CD"], color: "emerald" },
  { category: "Tools & Methods", items: ["Git", "GitHub", "Jest", "Postman", "Figma", "Agile"], color: "orange" },
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"], color: "pink" },
];

const TECH_STYLES: Record<string, string> = {
  blue:    "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400/50 hover:shadow-blue-500/10",
  cyan:    "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-cyan-500/10",
  violet:  "bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-400/50 hover:shadow-violet-500/10",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:shadow-emerald-500/10",
  orange:  "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-400/50 hover:shadow-orange-500/10",
  pink:    "bg-pink-500/10 text-pink-400 border-pink-500/20 hover:bg-pink-500/20 hover:border-pink-400/50 hover:shadow-pink-500/10",
};

const DOT_COLORS: Record<string, string> = {
  blue: "bg-blue-400", cyan: "bg-cyan-400", violet: "bg-violet-400",
  emerald: "bg-emerald-400", orange: "bg-orange-400", pink: "bg-pink-400",
};

const ALL_TECHS = TECH_CATEGORIES.flatMap(c => c.items.map(item => ({ name: item, color: c.color, category: c.category })));
const ALL_TECH_NAMES = TECH_CATEGORIES.flatMap(c => c.items);

// ========== SEO KEYWORDS ==========
const HIDDEN_KEYWORDS = [
  "Ajit Dev", "Ajit Kumar", "AjitDev01", "Ajit Dev Portfolio",
  "Full Stack Developer India", "MERN Stack Developer Portfolio", "Next.js Developer Portfolio",
  "DevOps Engineer India", "Cloud Security Engineer", "DevSecOps Engineer",
  "Hire Full Stack Developer", "Full Stack Developer Katihar Bihar",
  "Katihar Developer", "Bihar Full Stack Developer", "India DevOps Engineer",
  "React Node.js Developer", "TypeScript Full Stack", "MongoDB Express React Node",
];

// ========== HOOKS ==========
const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return { isVisible, scrollToTop: () => window.scrollTo({ top: 0, behavior: "smooth" }) };
};

// ========== SUB-COMPONENTS ==========

/** Animated background blob */
const Blob = ({ style }: { style: React.CSSProperties }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={style}
    animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.7, 0.5] }}
    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
  />
);

/** Social icon button */
const SocialIcon = ({ link }: { link: typeof SOCIAL_LINKS[number] }) => {
  const Icon = link.icon;
  return (
    <motion.a
      href={link.url}
      rel={link.rel}
      aria-label={link.ariaLabel}
      data-platform={link.platform}
      data-authority={link.profileType === "professional" ? "primary-identity" : undefined}
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400
                 bg-white/[0.04] border border-white/[0.08]
                 hover:text-white hover:bg-white/[0.09] hover:border-white/[0.16]
                 hover:shadow-lg
                 transition-colors duration-200
                 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:ring-offset-1 focus:ring-offset-[#080c14]"
      style={{ willChange: "transform" }}
    >
      <Icon size={14} />
    </motion.a>
  );
};

/** Nav link with animated underline */
const NavItem = ({ link }: { link: typeof NAV_LINKS[number] }) => {
  const Icon = link.icon;
  return (
    <li>
      <Link
        href={link.path}
        title={link.title}
        aria-label={link.description}
        className="group flex items-center gap-2.5 text-slate-500 hover:text-slate-100 text-sm py-1.5 transition-colors duration-200 focus:outline-none focus:text-white"
      >
        <span className="w-[22px] h-[22px] rounded-md bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/15 group-hover:border-blue-500/25 transition-all duration-200">
          <Icon size={11} className="text-slate-600 group-hover:text-blue-400 transition-colors duration-200" />
        </span>
        <span className="relative">
          {link.name}
          <span className="absolute -bottom-px left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300 ease-out" />
        </span>
      </Link>
    </li>
  );
};

/** Technology badge */
const TechBadge = ({ name, color, category }: { name: string; color: string; category: string }) => (
  <motion.span
    whileHover={{ scale: 1.06, y: -1 }}
    className={`inline-flex items-center px-2.5 py-[5px] rounded-md text-[11px] font-medium border cursor-default transition-all duration-200 hover:shadow-md ${TECH_STYLES[color]}`}
    data-category={category}
    title={`${name} — ${category}`}
  >
    {name}
  </motion.span>
);

// ========== MAIN FOOTER COMPONENT ==========
const Footer = () => {
  const { isVisible, scrollToTop } = useScrollToTop();
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-80px" });

  // JSON-LD SCHEMAS
  const allSocialUrls = SOCIAL_LINKS.map(link => link.url);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://ajitdev.com/#person",
      "name": BRAND_CONFIG.name,
      "alternateName": ["Ajit Kumar", "AjitDev01"],
      "url": BRAND_CONFIG.website,
      "email": BRAND_CONFIG.email,
      "telephone": BRAND_CONFIG.phone,
      "jobTitle": ["Full Stack Developer", "DevOps Engineer", "Cloud Security Enthusiast"],
      "description": BRAND_CONFIG.description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Katihar",
        "addressRegion": "Bihar",
        "addressCountry": "India"
      },
      "sameAs": allSocialUrls,
      "knowsAbout": ["MERN Stack", "Next.js", "TypeScript", "React", "Node.js", "MongoDB", "Express.js", "DevOps", "Cloud Security", "AWS", "Docker", "Kubernetes", "Terraform", "Linux", "CI/CD", "System Design"],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Full Stack Engineer",
        "description": "Building end-to-end web applications with modern technologies",
        "occupationLocation": { "@type": "Country", "name": "India" },
        "skills": "React, Next.js, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, REST APIs, Git, Vercel, Netlify"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://ajitdev.com/#website",
      "name": "Ajit Kumar - Full Stack Engineer Portfolio",
      "alternateName": "ajitdev01",
      "url": "https://ajitdev.com",
      "description": "Professional portfolio of Ajit Kumar, a Full Stack Engineer specializing in MERN Stack, Next.js, and TypeScript. Hire for web development projects.",
      "publisher": { "@id": "https://ajitdev.com/#person" },
      "inLanguage": ["en-IN", "en-US"],
      "copyrightYear": currentYear,
      "copyrightHolder": { "@id": "https://ajitdev.com/#person" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://ajitdev.com/#organization",
      "name": "AjitDev",
      "alternateName": ["Ajit Kumar", "ajitdev01", "Ajit Dev Portfolio", "Ajit Dev DevOps"],
      "url": BRAND_CONFIG.website,
      "logo": "https://ajitdev.com/logo.png",
      "description": "Personal brand of Ajit Kumar — Full Stack Engineer from Bihar, India",
      "founder": { "@id": "https://ajitdev.com/#person" },
      "foundingDate": BRAND_CONFIG.founded,
      "areaServed": { "@type": "Country", "name": "India" },
      "knowsAbout": ["Full Stack Development", "MERN Stack", "Next.js", "TypeScript", "DevOps", "Cloud Security", "AWS", "Docker", "Kubernetes", "Web Applications", "API Development", "Cloud Deployment"],
      "sameAs": allSocialUrls,
      "contactPoint": {
        "@type": "ContactPoint",
        "email": BRAND_CONFIG.email,
        "telephone": BRAND_CONFIG.phone,
        "contactType": "professional services",
        "areaServed": "India",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "@id": "https://ajitdev.com/#navigation",
      "name": NAV_LINKS.map(l => l.name),
      "description": NAV_LINKS.map(l => l.description),
      "url": NAV_LINKS.map(l => `https://ajitdev.com${l.path}`),
      "about": { "@id": "https://ajitdev.com/#person" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://ajitdev.com/#breadcrumb",
      "itemListElement": NAV_LINKS.map((link, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": link.name,
        "item": {
          "@type": "WebPage",
          "@id": `https://ajitdev.com${link.path}`,
          "url": `https://ajitdev.com${link.path}`,
          "name": link.title,
          "description": link.description,
          "isPartOf": { "@id": "https://ajitdev.com/#website" }
        }
      }))
    }
  ];

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <>
      {/* JSON-LD SCHEMAS */}
      {schemas.map((sd, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sd) }} />
      ))}

      {/* HIDDEN SEO KEYWORDS */}
      <span className="sr-only" aria-hidden="true">{HIDDEN_KEYWORDS.join(", ")}</span>

      {/* INTERNAL LINKING CLUSTER */}
      <nav aria-hidden="true" className="sr-only" data-type="internal-semantic-cluster">
        <Link href="/about">Ajit Dev - Full Stack Developer & DevOps Engineer Journey</Link>
        <Link href="/projects">MERN Stack & DevOps Projects Portfolio</Link>
        <Link href="/skills">Full Stack Skills - React Node.js TypeScript DevOps AWS</Link>
        <Link href="/contact">Hire Full Stack Developer & DevOps Engineer Katihar Bihar</Link>
        <Link href="/education">Computer Science Education - Full Stack & DevOps Certifications</Link>
        <Link href="/resume">Ajit Dev Resume - Full Stack Coder & DevOps CV</Link>
        <Link href="/case-studies">Software Engineering Architecture Case Studies</Link>
        <Link href="/dsa">Data Structures & Algorithms DSA Hub LeetCode</Link>
        <Link href="/system-design">High & Low Level System Design Hub</Link>
        <Link href="/devops">DevOps CI/CD Pipelines & Cloud Automation Hub</Link>
      </nav>

      <footer
        ref={footerRef}
        role="contentinfo"
        aria-label={`${BRAND_CONFIG.name} (ajitdev01) - Full Stack Developer & DevOps Engineer Portfolio Footer`}
        itemScope
        itemType="https://schema.org/WPFooter"
        className="relative overflow-hidden"
        style={{ background: "#080c14", fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(148,163,184,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <Blob style={{ width: 480, height: 480, bottom: -180, left: -120, background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <Blob style={{ width: 360, height: 360, bottom: -100, right: "18%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <Blob style={{ width: 280, height: 280, top: 0, right: 0, background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)", filter: "blur(32px)" }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>

        {/* MAIN GRID FOOTER CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8"
          >
            {/* COLUMN 1: BRAND IDENTITY */}
            <motion.div variants={slideUp} className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm text-white"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                    boxShadow: "0 0 18px rgba(99,102,241,0.35)",
                  }}
                >
                  AK
                </div>
                <div>
                  <h2 className="text-white font-bold text-[15px] leading-tight" itemProp="name">
                    {BRAND_CONFIG.name}
                  </h2>
                  <p className="text-blue-400 text-xs font-medium mt-0.5">{BRAND_CONFIG.title}</p>
                </div>
              </div>

              <p className="text-slate-500 text-[13px] leading-relaxed">{BRAND_CONFIG.shortDescription}</p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: FiShield, label: "HTTPS Secured", cls: "bg-emerald-500/8 border-emerald-500/18 text-emerald-400" },
                  { icon: FiAward, label: "Full Stack & DevOps", cls: "bg-blue-500/8 border-blue-500/18 text-blue-400" },
                  { icon: FiGlobe, label: "Katihar, India", cls: "bg-orange-500/8 border-orange-500/18 text-orange-400" },
                ].map(({ icon: Icon, label, cls }) => (
                  <motion.span
                    key={label}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${cls}`}
                  >
                    <Icon size={10} />
                    {label}
                  </motion.span>
                ))}
              </div>

              {/* Professional Profiles */}
              <div>
                <p className="text-slate-700 text-[10px] font-semibold uppercase tracking-widest mb-3">
                  Professional Profiles
                </p>
                <div
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label="Professional social media profiles"
                  data-authority="primary-identity"
                >
                  {SOCIAL_LINKS.filter(l => l.profileType === "professional").map(link => (
                    <SocialIcon key={link.platform} link={link} />
                  ))}
                </div>
              </div>

              {/* Social Profiles */}
              <div>
                <p className="text-slate-700 text-[10px] font-semibold uppercase tracking-widest mb-3">
                  Social Profiles
                </p>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Social media profiles">
                  {SOCIAL_LINKS.filter(l => l.profileType === "social").map(link => (
                    <SocialIcon key={link.platform} link={link} />
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <address className="not-italic space-y-2 pt-1">
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="group flex items-center gap-2 text-slate-500 hover:text-slate-200 text-[12px] transition-colors duration-200"
                >
                  <FiMail size={12} className="text-blue-400/80 flex-shrink-0" />
                  <span className="relative">
                    {BRAND_CONFIG.email}
                    <span className="absolute -bottom-px left-0 w-0 h-px bg-blue-400/60 group-hover:w-full transition-all duration-300 ease-out" />
                  </span>
                </a>
                <a
                  href="mailto:ajitk23192@gmail.com"
                  className="group flex items-center gap-2 text-slate-500 hover:text-slate-200 text-[12px] transition-colors duration-200"
                >
                  <FiMail size={12} className="text-blue-400/80 flex-shrink-0" />
                  <span className="relative">
                    ajitk23192@gmail.com
                    <span className="absolute -bottom-px left-0 w-0 h-px bg-blue-400/60 group-hover:w-full transition-all duration-300 ease-out" />
                  </span>
                </a>
                <a
                  href={`https://wa.me/${BRAND_CONFIG.phone.replace("+", "")}`}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-slate-500 hover:text-slate-200 text-[12px] transition-colors duration-200"
                >
                  <FaWhatsapp size={12} className="text-emerald-400/80 flex-shrink-0" />
                  <span className="relative">
                    {BRAND_CONFIG.phone}
                    <span className="absolute -bottom-px left-0 w-0 h-px bg-emerald-400/60 group-hover:w-full transition-all duration-300 ease-out" />
                  </span>
                </a>
              </address>
            </motion.div>

            {/* COLUMN 2: NAVIGATION */}
            <motion.div variants={slideUp} className="lg:col-span-2">
              <h3 className="text-slate-600 font-semibold text-[10px] uppercase tracking-widest mb-5">
                Navigation
              </h3>
              <nav aria-label="Footer site navigation">
                <ul className="space-y-0.5">
                  {NAV_LINKS.map(link => <NavItem key={link.path} link={link} />)}
                </ul>
              </nav>
            </motion.div>

            {/* COLUMN 3: TECH STACK */}
            <motion.div variants={slideUp} className="lg:col-span-6">
              <h3 className="text-slate-600 font-semibold text-[10px] uppercase tracking-widest mb-5">
                Full Stack Technologies & Tools
              </h3>

              <div
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.022)",
                  border: "1px solid rgba(255,255,255,0.065)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex flex-wrap gap-1.5">
                  {ALL_TECHS.slice(0, 24).map(({ name, color, category }) => (
                    <TechBadge key={name} name={name} color={color} category={category} />
                  ))}
                  <span className="inline-flex items-center px-2.5 py-[5px] rounded-md text-[11px] text-slate-700 border border-white/[0.05]">
                    +{ALL_TECH_NAMES.length - 24}+ more
                  </span>
                </div>

                {/* Category Legend */}
                <div className="mt-4 pt-3.5 border-t border-white/[0.05] flex flex-wrap gap-x-4 gap-y-1.5">
                  {TECH_CATEGORIES.map(cat => (
                    <span key={cat.category} className="flex items-center gap-1.5 text-slate-600 text-[11px]">
                      <span className={`w-1.5 h-1.5 rounded-full ${DOT_COLORS[cat.color]}`} />
                      {cat.category}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* DIVIDER */}
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          {/* BOTTOM BAR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <p className="text-slate-700 text-[12px]">
                © {currentYear}{" "}
                <span itemProp="copyrightHolder" className="text-slate-500">{BRAND_CONFIG.name}</span>.
                {" "}All rights reserved.
              </p>
              <p className="text-slate-800 text-[11px] mt-0.5">
                Full Stack Developer · DevOps Engineer · Cloud Security · MERN · Next.js · India
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1 text-[11px]">
              {LEGAL_LINKS.map((link, i) => (
                <span key={link.path} className="flex items-center gap-1">
                  {link.external ? (
                    <a href={link.path} aria-label={link.ariaLabel} rel="noopener noreferrer" className="text-slate-700 hover:text-slate-400 transition-colors duration-200">{link.name}</a>
                  ) : (
                    <Link href={link.path} aria-label={link.ariaLabel} className="text-slate-700 hover:text-slate-400 transition-colors duration-200">{link.name}</Link>
                  )}
                  {i < LEGAL_LINKS.length - 1 && <span className="text-slate-800">·</span>}
                </span>
              ))}
              <span className="text-slate-800">·</span>
              {["GitHub", "LinkedIn", "LeetCode", "Dev.to"].map((label, i, arr) => {
                const link = SOCIAL_LINKS.find(l => l.platform === label);
                return link ? (
                  <span key={label} className="flex items-center gap-1">
                    <a href={link.url} rel="me noopener noreferrer" className="text-slate-700 hover:text-slate-400 transition-colors duration-200">{label}</a>
                    {i < arr.length - 1 && <span className="text-slate-800">·</span>}
                  </span>
                ) : null;
              })}
              <span className="text-slate-800">·</span>
              <span className="text-slate-800 flex items-center gap-1">
                Built with <FiHeart size={9} className="text-red-500/60" /> in India
              </span>
            </div>
          </motion.div>

          {/* BACKLINK ATTRIBUTION */}
          <div className="mt-4 text-center">
            <p className="text-slate-800 text-[9px]">
              Find Ajit Dev (ajitdev01) on{" "}
              <a href="https://github.com/ajitdev01" rel="me noopener noreferrer" className="text-slate-700 hover:text-slate-500">GitHub</a> ·{" "}
              <a href="https://leetcode.com/ajitdev01" rel="me noopener noreferrer" className="text-slate-700 hover:text-slate-500">LeetCode</a> ·{" "}
              <a href="https://codeforces.com/profile/ajitdev01" rel="me noopener noreferrer" className="text-slate-700 hover:text-slate-500">Codeforces</a> ·{" "}
              <a href="https://dev.to/ajitdev01" rel="me noopener noreferrer" className="text-slate-700 hover:text-slate-500">Dev.to</a> ·{" "}
              <a href="https://medium.com/@ajitdev01" rel="me noopener noreferrer" className="text-slate-700 hover:text-slate-500">Medium</a> ·{" "}
              <a href="https://hashnode.com/@ajitdev01" rel="me noopener noreferrer" className="text-slate-700 hover:text-slate-500">Hashnode</a> ·{" "}
              <a href="https://youtube.com/@ajitdev01" rel="me noopener noreferrer" className="text-slate-700 hover:text-slate-500">YouTube</a>
            </p>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 10 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl text-white flex items-center justify-center
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#080c14]"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
              boxShadow: "0 4px 24px rgba(99,102,241,0.40)",
            }}
          >
            <FiChevronUp size={17} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
