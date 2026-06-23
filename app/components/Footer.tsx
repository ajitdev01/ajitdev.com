'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FiHome, FiUser, FiSettings, FiFolder, FiMail,
  FiHeart, FiChevronUp, FiGithub, FiLinkedin,
  FiShield, FiAward, FiGlobe, FiTwitter, FiInstagram,
} from "react-icons/fi";
import { FaWhatsapp, FaGraduationCap, FaDev, FaMedium, FaSnapchat } from "react-icons/fa";

// ========== BRAND CONFIGURATION ==========
const BRAND_CONFIG = {
  name: "Ajit Dev",
  username: "ajitdev01",
  role: "Full Stack Developer",
  title: "Full Stack Developer | DevOps • Cloud Security",
  description: "Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar, India. Specializing in Next.js, React, MERN Stack, AWS, Docker, Kubernetes, Terraform, Linux, Cloud Security, Cyber Security, and System Design.",
  shortDescription: "Ajit Dev (ajitdev01) — Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar, India.",
  email: "ajitk23192@gmail.com",
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
  { platform: "Email", url: "mailto:ajitk23192@gmail.com", icon: FiMail, ariaLabel: "Email Ajit Dev", rel: "noopener noreferrer" },
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
