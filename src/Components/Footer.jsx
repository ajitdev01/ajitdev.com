import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FiHome, FiUser, FiSettings, FiFolder, FiMail,
  FiHeart, FiChevronUp, FiGithub, FiLinkedin,
  FiShield, FiAward, FiGlobe, FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp, FaGraduationCap, FaDev, FaMedium } from "react-icons/fa";

// ========== BRAND CONFIGURATION ==========
const BRAND_CONFIG = {
  name: "Ajit Kumar",
  title: "DevOps & Cloud Engineer",
  description: "Professional DevOps engineer specializing in cloud infrastructure, automation, CI/CD pipelines, and cloud-native solutions. Available for freelance, contract, and full-time opportunities.",
  shortDescription: "DevOps Engineer from Katihar, Bihar specializing in cloud security, infrastructure automation, and scalable solutions.",
  email: "ajitk23192@gmail.com",
  phone: "+916205526784",
  location: "Katihar, Bihar, India",
  availability: { title: "Open for Opportunities", subtitle: "DevOps • Cloud • SRE • Full-time & Contract Roles", status: "Available for work" },
  founded: "2023",
  website: "https://ajitdev.com",
};

const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/ajitdev01", icon: FiGithub, ariaLabel: "Visit Ajit Kumar's GitHub profile", rel: "me noopener noreferrer", profileType: "professional" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ajitdev01/", icon: FiLinkedin, ariaLabel: "Connect with Ajit Kumar on LinkedIn", rel: "me noopener noreferrer", profileType: "professional" },
  { platform: "Email", url: "mailto:ajitk23192@gmail.com", icon: FiMail, ariaLabel: "Email Ajit Kumar", rel: "noopener noreferrer" },
  { platform: "WhatsApp", url: "https://wa.me/916205526784", icon: FaWhatsapp, ariaLabel: "WhatsApp Ajit Kumar", rel: "noopener noreferrer" },
  { platform: "Dev.to", url: "https://dev.to/ajitdev01", icon: FaDev, ariaLabel: "Read Ajit Kumar on Dev.to", rel: "me noopener noreferrer", profileType: "professional" },
  { platform: "Medium", url: "https://medium.com/@ajitdev01", icon: FaMedium, ariaLabel: "Follow Ajit Kumar on Medium", rel: "me noopener noreferrer", profileType: "professional" },
];

const NAV_LINKS = [
  { name: "Home", path: "/", icon: FiHome, description: "Return to Ajit Kumar's DevOps portfolio homepage", title: "Home - DevOps Engineer Portfolio India" },
  { name: "About", path: "/about", icon: FiUser, description: "Learn about Ajit Kumar's background and expertise", title: "About Ajit Kumar - DevOps & Cloud Engineer" },
  { name: "Skills", path: "/skills", icon: FiSettings, description: "Technical skills and tools", title: "Skills & Expertise - DevOps, Cloud, Kubernetes, AWS" },
  { name: "Projects", path: "/projects", icon: FiFolder, description: "Portfolio projects by Ajit Kumar", title: "Projects - DevOps & Cloud Portfolio" },
  { name: "Education", path: "/education", icon: FaGraduationCap, description: "Education and certifications", title: "Education & Certifications - Ajit Kumar" },
  { name: "Contact", path: "/contact", icon: FiMail, description: "Get in touch for opportunities", title: "Contact Ajit Kumar - DevOps Engineer for Hire" },
];

const LEGAL_LINKS = [
  { name: "Privacy", path: "/privacy", ariaLabel: "Privacy Policy" },
  { name: "Terms", path: "/terms", ariaLabel: "Terms of Service" },
  { name: "Sitemap", path: "/sitemap.xml", ariaLabel: "Sitemap", external: true },
];

const TECH_CATEGORIES = [
  { category: "Cloud", items: ["AWS", "Azure", "GCP", "Terraform", "CloudFormation", "Pulumi"], color: "blue" },
  { category: "Containers", items: ["Kubernetes", "Docker", "ECS", "EKS", "AKS", "OpenShift"], color: "cyan" },
  { category: "CI/CD", items: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "Ansible", "CircleCI"], color: "violet" },
  { category: "Monitoring", items: ["Prometheus", "Grafana", "Datadog", "New Relic", "ELK Stack", "Jaeger"], color: "emerald" },
  { category: "Security", items: ["Vault", "SonarQube", "OWASP", "IAM", "KMS", "WAF"], color: "orange" },
  { category: "Dev", items: ["React", "Node.js", "Python", "Go", "TypeScript", "REST APIs"], color: "pink" },
];

const TECH_STYLES = {
  blue:    "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400/50 hover:shadow-blue-500/10",
  cyan:    "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-cyan-500/10",
  violet:  "bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-400/50 hover:shadow-violet-500/10",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:shadow-emerald-500/10",
  orange:  "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-400/50 hover:shadow-orange-500/10",
  pink:    "bg-pink-500/10 text-pink-400 border-pink-500/20 hover:bg-pink-500/20 hover:border-pink-400/50 hover:shadow-pink-500/10",
};

const DOT_COLORS = {
  blue: "bg-blue-400", cyan: "bg-cyan-400", violet: "bg-violet-400",
  emerald: "bg-emerald-400", orange: "bg-orange-400", pink: "bg-pink-400",
};

const ALL_TECHS = TECH_CATEGORIES.flatMap(c => c.items.map(item => ({ name: item, color: c.color, category: c.category })));
const ALL_TECH_NAMES = TECH_CATEGORIES.flatMap(c => c.items);

const HIDDEN_KEYWORDS = [
  "DevOps engineer India", "Cloud Security Developer India", "DevSecOps portfolio India",
  "CI/CD engineer portfolio", "Kubernetes expert Bihar", "AWS consultant Katihar",
  "Terraform specialist India", "Site Reliability Engineer India", "Cloud architect Bihar",
  "Infrastructure as Code specialist",
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
const Blob = ({ style }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={style}
    animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.7, 0.5] }}
    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
  />
);

/** Social icon button */
const SocialIcon = ({ link }) => {
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
const NavItem = ({ link }) => {
  const Icon = link.icon;
  return (
    <li>
      <Link
        to={link.path}
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
const TechBadge = ({ name, color, category }) => (
  <motion.span
    whileHover={{ scale: 1.06, y: -1 }}
    className={`inline-flex items-center px-2.5 py-[5px] rounded-md text-[11px] font-medium border cursor-default transition-all duration-200 hover:shadow-md ${TECH_STYLES[color]}`}
    data-category={category}
    title={`${name} — ${category}`}
  >
    {name}
  </motion.span>
);

// ========== MAIN FOOTER ==========
const Footer = () => {
  const { isVisible, scrollToTop } = useScrollToTop();
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-80px" });

  // ===== STRUCTURED DATA =====
  const schemas = [
    // Person (Improvement 6: hasOccupation)
    {
      "@context": "https://schema.org", "@type": "Person", "@id": "https://ajitdev.com/#person",
      name: BRAND_CONFIG.name, url: BRAND_CONFIG.website, email: BRAND_CONFIG.email,
      telephone: BRAND_CONFIG.phone, jobTitle: BRAND_CONFIG.title, description: BRAND_CONFIG.description,
      address: { "@type": "PostalAddress", addressLocality: "Katihar", addressRegion: "Bihar", addressCountry: "India" },
      sameAs: ["https://github.com/ajitdev01", "https://www.linkedin.com/in/ajitdev01/", "https://dev.to/ajitdev01", "https://medium.com/@ajitdev01"],
      hasOccupation: {
        "@type": "Occupation", name: "DevOps Engineer",
        description: "Cloud infrastructure, CI/CD, Kubernetes, DevSecOps",
        occupationLocation: { "@type": "Country", name: "India" },
        skills: "AWS, Kubernetes, Terraform, Docker, CI/CD, DevSecOps, Cloud Architecture",
      },
    },
    // Website (Improvement 3: speakable)
    {
      "@context": "https://schema.org", "@type": "WebSite", "@id": "https://ajitdev.com/#website",
      name: "Ajit Dev Portfolio - DevOps Engineer India", url: "https://ajitdev.com",
      description: BRAND_CONFIG.description,
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", ".hero-description"] },
      publisher: { "@type": "Person", name: BRAND_CONFIG.name, jobTitle: BRAND_CONFIG.title, email: BRAND_CONFIG.email, address: { "@type": "PostalAddress", addressLocality: "Katihar", addressRegion: "Bihar", addressCountry: "India" } },
      potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: "https://ajitdev.com/?s={search_term_string}" }, "query-input": "required name=search_term_string" },
      inLanguage: ["en-IN", "en-US"], copyrightYear: currentYear,
      copyrightHolder: { "@type": "Person", name: BRAND_CONFIG.name },
    },
    // PersonalBrand / Organization (Improvement 1)
    {
      "@context": "https://schema.org", "@type": "Organization", "@id": "https://ajitdev.com/#brand",
      name: "Ajit Dev", alternateName: ["AjitDev", "Ajit Kumar DevOps", "Ajit Dev Portfolio"],
      url: BRAND_CONFIG.website, description: "Personal brand of Ajit Kumar — DevOps & Cloud Engineer from Bihar, India",
      founder: { "@type": "Person", "@id": "https://ajitdev.com/#person", name: BRAND_CONFIG.name },
      foundingDate: BRAND_CONFIG.founded, areaServed: { "@type": "Country", name: "India" },
      knowsAbout: ["DevOps Engineering", "Cloud Infrastructure", "Kubernetes", "CI/CD Pipelines", "Terraform", "AWS", "DevSecOps", "Site Reliability Engineering"],
      sameAs: ["https://github.com/ajitdev01", "https://www.linkedin.com/in/ajitdev01/", "https://dev.to/ajitdev01", "https://medium.com/@ajitdev01"],
    },
    // Navigation
    {
      "@context": "https://schema.org", "@type": "SiteNavigationElement", "@id": "https://ajitdev.com/#navigation",
      name: NAV_LINKS.map(l => l.name), description: NAV_LINKS.map(l => l.description),
      url: NAV_LINKS.map(l => `https://ajitdev.com${l.path}`), about: { "@type": "Person", name: BRAND_CONFIG.name },
    },
    // BreadcrumbList (Improvement 2)
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": "https://ajitdev.com/#breadcrumb",
      itemListElement: NAV_LINKS.map((link, i) => ({
        "@type": "ListItem", position: i + 1, name: link.name,
        item: { "@type": "WebPage", "@id": `https://ajitdev.com${link.path}`, url: `https://ajitdev.com${link.path}`, name: link.title, description: link.description, isPartOf: { "@id": "https://ajitdev.com/#website" } },
      })),
    },
  ];

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
  };
  const slideUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      {/* ===== ALL JSON-LD SCHEMAS ===== */}
      {schemas.map((sd, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sd) }} />
      ))}

      {/* ===== HIDDEN SEO: keywords + internal link cluster ===== */}
      <span className="sr-only" aria-hidden="true">{HIDDEN_KEYWORDS.join(", ")}</span>
      <nav aria-hidden="true" className="sr-only" data-type="internal-semantic-cluster">
        <Link to="/about">DevOps engineer India profile</Link>
        <Link to="/projects">Cloud infrastructure portfolio</Link>
        <Link to="/skills">DevOps skills and technologies</Link>
        <Link to="/contact">Hire DevOps engineer Katihar Bihar</Link>
        <Link to="/education">DevOps certifications India</Link>
      </nav>

      <footer
        ref={footerRef}
        role="contentinfo"
        aria-label={`${BRAND_CONFIG.name} - DevOps Engineer Portfolio Footer`}
        itemScope
        itemType="https://schema.org/WPFooter"
        className="relative overflow-hidden"
        style={{ background: "#080c14", fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        {/* ===== BACKGROUND LAYER ===== */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          {/* Dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(148,163,184,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Blobs */}
          <Blob style={{ width: 480, height: 480, bottom: -180, left: -120, background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <Blob style={{ width: 360, height: 360, bottom: -100, right: "18%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <Blob style={{ width: 280, height: 280, top: 0, right: 0, background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)", filter: "blur(32px)" }} />
          {/* Top separator line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>

        {/* ===== CTA STRIP ===== */}
        <div className="relative z-10 border-b border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-5"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.10) 0%, rgba(99,102,241,0.07) 60%, rgba(139,92,246,0.05) 100%)",
                border: "1px solid rgba(99,102,241,0.18)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Subtle inner shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-1">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
                    animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                    {BRAND_CONFIG.availability.status}
                  </span>
                </div>
                <p className="text-white font-semibold text-base sm:text-lg">{BRAND_CONFIG.availability.title}</p>
                <p className="text-slate-400 text-sm mt-0.5">{BRAND_CONFIG.availability.subtitle}</p>
              </div>

              <Link
                to="/contact"
                className="relative flex-shrink-0 group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white
                           transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#080c14]"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                  boxShadow: "0 0 24px rgba(99,102,241,0.30), 0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                Get in Touch
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FiArrowRight size={14} />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8"
          >

            {/* ===== COL 1: BRAND (lg:4) ===== */}
            <motion.div variants={slideUp} className="lg:col-span-4 space-y-5">
              {/* Monogram + identity */}
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

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: FiShield, label: "HTTPS Secured", cls: "bg-emerald-500/8 border-emerald-500/18 text-emerald-400" },
                  { icon: FiAward,  label: "Certified",     cls: "bg-blue-500/8 border-blue-500/18 text-blue-400" },
                  { icon: FiGlobe, label: "India",          cls: "bg-orange-500/8 border-orange-500/18 text-orange-400" },
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

              {/* Social icons */}
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
                  {SOCIAL_LINKS.map(link => <SocialIcon key={link.platform} link={link} />)}
                </div>
              </div>

              {/* Contact */}
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

            {/* ===== COL 2: NAV (lg:2) ===== */}
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

            {/* ===== COL 3: TECH CLOUD (lg:6) ===== */}
            <motion.div variants={slideUp} className="lg:col-span-6">
              <h3 className="text-slate-600 font-semibold text-[10px] uppercase tracking-widest mb-5">
                Technologies &amp; Stack
              </h3>

              {/* Glassmorphism card */}
              <div
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.022)",
                  border: "1px solid rgba(255,255,255,0.065)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex flex-wrap gap-1.5">
                  {ALL_TECHS.slice(0, 18).map(({ name, color, category }) => (
                    <TechBadge key={name} name={name} color={color} category={category} />
                  ))}
                  <span className="inline-flex items-center px-2.5 py-[5px] rounded-md text-[11px] text-slate-700 border border-white/[0.05]">
                    +{ALL_TECH_NAMES.length - 18} more
                  </span>
                </div>

                {/* Legend */}
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

          {/* ===== GRADIENT DIVIDER ===== */}
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          {/* ===== BOTTOM BAR ===== */}
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
                DevOps Engineer · Cloud Infrastructure · CI/CD · India
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1 text-[11px]">
              {LEGAL_LINKS.map((link, i) => (
                <span key={link.path} className="flex items-center gap-1">
                  {link.external ? (
                    <a href={link.path} aria-label={link.ariaLabel} rel="noopener noreferrer" className="text-slate-700 hover:text-slate-400 transition-colors duration-200">{link.name}</a>
                  ) : (
                    <Link to={link.path} aria-label={link.ariaLabel} className="text-slate-700 hover:text-slate-400 transition-colors duration-200">{link.name}</Link>
                  )}
                  {i < LEGAL_LINKS.length - 1 && <span className="text-slate-800">·</span>}
                </span>
              ))}
              <span className="text-slate-800">·</span>
              {[
                { href: "https://github.com/ajitdev01", label: "GitHub" },
                { href: "https://www.linkedin.com/in/ajitdev01/", label: "LinkedIn" },
                { href: "https://dev.to/ajitdev01", label: "Dev.to" },
              ].map((l, i, arr) => (
                <span key={l.label} className="flex items-center gap-1">
                  <a href={l.href} rel="me noopener noreferrer" className="text-slate-700 hover:text-slate-400 transition-colors duration-200">{l.label}</a>
                  {i < arr.length - 1 && <span className="text-slate-800">·</span>}
                </span>
              ))}
              <span className="text-slate-800">·</span>
              <span className="text-slate-800 flex items-center gap-1">
                Built with <FiHeart size={9} className="text-red-500/60" /> in India
              </span>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* ===== BACK TO TOP ===== */}
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