import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiFolder,
  FiMail,
  FiCode,
  FiBriefcase,
  FiHeart,
  FiChevronUp,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
} from "react-icons/fi";
import { FaWhatsapp, FaGraduationCap } from "react-icons/fa";

// Animation variants (performance optimized)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const childItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

// SEO-optimized configuration with semantic data
const BRAND_CONFIG = {
  name: "Ajit Kumar",
  title: "DevOps & Cloud Engineer",
  description: "Professional DevOps engineer specializing in cloud infrastructure, automation, CI/CD pipelines, and cloud-native solutions. Available for freelance, contract, and full-time opportunities.",
  gradient: "from-blue-500 to-indigo-600",
  email: "ajitk23192@gmail.com",
  phone: "+916205526784",
  location: "India",
  availability: {
    title: "Open for Opportunities",
    subtitle: "DevOps • Cloud • SRE • Full-time & Contract Roles",
    status: "Available for work",
  },
};

// Social links with SEO-friendly aria labels
const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    url: "https://github.com/ajitdev01",
    icon: FiGithub,
    color: "hover:bg-gray-700",
    ariaLabel: "Visit Ajit Kumar's GitHub profile for open source projects and code samples",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ajitdev01/",
    icon: FiLinkedin,
    color: "hover:bg-blue-600",
    ariaLabel: "Connect with Ajit Kumar on LinkedIn for professional networking",
  },
  {
    platform: "Email",
    url: "mailto:ajitk23192@gmail.com",
    icon: FiMail,
    color: "hover:bg-red-500",
    ariaLabel: "Send email to Ajit Kumar for inquiries and opportunities",
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/916205526784",
    icon: FaWhatsapp,
    color: "hover:bg-green-500",
    ariaLabel: "Contact Ajit Kumar via WhatsApp for quick communication",
  },
];

// Navigation links with descriptive text for SEO
const NAV_LINKS = [
  { 
    name: "Home", 
    path: "/", 
    icon: FiHome, 
    description: "Return to Ajit Kumar's portfolio homepage",
    title: "Home - DevOps Engineer Portfolio"
  },
  { 
    name: "About", 
    path: "/about", 
    icon: FiUser, 
    description: "Learn about Ajit Kumar's background, experience, and expertise in DevOps",
    title: "About Ajit Kumar - DevOps & Cloud Engineer"
  },
  { 
    name: "Skills", 
    path: "/skills", 
    icon: FiSettings, 
    description: "View technical skills, tools, and technologies mastered by Ajit Kumar",
    title: "Skills & Expertise - DevOps, Cloud, Automation"
  },
  { 
    name: "Projects", 
    path: "/projects", 
    icon: FiFolder, 
    description: "Browse portfolio of DevOps, cloud infrastructure, and automation projects",
    title: "Projects - DevOps & Cloud Portfolio"
  },
  { 
    name: "Education", 
    path: "/education", 
    icon: FaGraduationCap, 
    description: "View education, certifications, and professional training",
    title: "Education & Certifications - Ajit Kumar"
  },
  { 
    name: "Contact", 
    path: "/contact", 
    icon: FiMail, 
    description: "Get in touch with Ajit Kumar for opportunities and collaborations",
    title: "Contact Ajit Kumar - DevOps Engineer"
  },
];

// Technologies categorized for better SEO semantics
const TECH_CATEGORIES = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend & Cloud",
    items: ["Node.js", "Express.js", "Python", "REST API", "AWS", "Docker"]
  },
  {
    category: "DevOps",
    items: ["Kubernetes", "CI/CD", "GitHub Actions", "Linux", "Nginx", "Terraform"]
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
  },
  {
    category: "Tools & Security",
    items: ["Git", "JWT", "OWASP", "IAM", "Microservices", "Agile"]
  },
];

// Flattened for display but categorized for SEO
const TECHNOLOGIES = TECH_CATEGORIES.flatMap(cat => cat.items);

/**
 * Custom hook for scroll-to-top functionality
 */
const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { isVisible, scrollToTop };
};

/**
 * Technology Badge Component - Accessible and semantic
 */
const TechBadge = ({ technology }) => (
  <span
    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
      bg-gray-800/50 backdrop-blur-sm border border-gray-700/50
      text-gray-300 rounded-lg hover:text-white hover:bg-gray-700/50
      transition-all duration-200 cursor-default"
    aria-label={`Technology: ${technology}`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" aria-hidden="true"></span>
    {technology}
  </span>
);

/**
 * Social Link Component - SEO optimized
 */
const SocialLink = ({ link }) => {
  const Icon = link.icon;
  
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        w-10 h-10 rounded-lg flex items-center justify-center
        bg-gray-800/60 backdrop-blur-sm border border-gray-700/50
        ${link.color} transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
        group relative overflow-hidden
      `}
      aria-label={link.ariaLabel}
    >
      <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-200">
        <Icon className="w-5 h-5" />
      </span>
      <span className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </a>
  );
};

/**
 * Navigation Link Component - Semantic with proper attributes
 */
const NavLinkItem = ({ link }) => {
  const Icon = link.icon;
  
  return (
    <li>
      <Link
        to={link.path}
        className="group flex items-center gap-3 px-2 py-2 rounded-lg
          text-gray-400 hover:text-white transition-all duration-200
          hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label={link.description}
        title={link.title}
      >
        <span className="text-blue-500/70 group-hover:text-blue-400 transition-colors duration-200">
          <Icon className="w-5 h-5" />
        </span>
        <span className="font-medium">{link.name}</span>
        <FiExternalLink className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
      </Link>
    </li>
  );
};

const Footer = () => {
  const { isVisible, scrollToTop } = useScrollToTop();
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <>
      <footer
        ref={footerRef}
        className="relative bg-gray-900 text-gray-300 overflow-hidden"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Structured Data - Hidden but available for crawlers */}
        <meta itemProp="name" content={BRAND_CONFIG.name} />
        <meta itemProp="jobTitle" content={BRAND_CONFIG.title} />
        <meta itemProp="description" content={BRAND_CONFIG.description} />
        <meta itemProp="email" content={BRAND_CONFIG.email} />
        <meta itemProp="telephone" content={BRAND_CONFIG.phone} />
        <meta itemProp="address" content={BRAND_CONFIG.location} />
        
        {/* Background gradient effects (purely decorative) */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" aria-hidden="true"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl" aria-hidden="true"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section - SEO Priority */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${BRAND_CONFIG.gradient}
                      rounded-xl flex items-center justify-center shadow-lg`}
                    aria-hidden="true"
                  >
                    <FiCode className="text-white text-xl" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white tracking-tight" itemProp="name">
                      {BRAND_CONFIG.name}
                    </h2>
                    <p className="text-sm text-blue-400 font-medium" itemProp="jobTitle">
                      {BRAND_CONFIG.title}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed" itemProp="description">
                  {BRAND_CONFIG.description}
                </p>

                {/* Availability Status - Visible text for crawlers */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 font-medium">✓ Available for opportunities</span>
                </div>
              </div>

              {/* Social Links with proper semantics */}
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-3">Connect on Social Media</h3>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((link) => (
                    <SocialLink key={link.platform} link={link} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Navigation Links - SEO Critical */}
            <nav className="lg:col-span-3 lg:col-start-6" aria-label="Footer navigation">
              <h3 className="text-lg font-semibold text-white mb-6 tracking-wide">Quick Links</h3>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <NavLinkItem key={link.path} link={link} />
                ))}
              </ul>
            </nav>

            {/* Technologies & Contact Info */}
            <div className="lg:col-span-5 lg:col-start-9 space-y-8">
              {/* Technologies with semantic grouping */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6 tracking-wide">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2" aria-label="Technologies and tools used">
                  {TECHNOLOGIES.map((tech) => (
                    <TechBadge key={tech} technology={tech} />
                  ))}
                </div>
              </div>

              {/* Availability Card - Structured Information */}
              <div
                className="relative p-5 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-lg
                      bg-gradient-to-br from-blue-500/10 to-indigo-600/10
                      border border-blue-500/20"
                    aria-hidden="true"
                  >
                    <FiBriefcase className="text-blue-400 text-xl" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-white mb-1" itemProp="name">
                      {BRAND_CONFIG.availability.title}
                    </h4>
                    <p className="text-sm text-gray-400" itemProp="description">
                      {BRAND_CONFIG.availability.subtitle}
                    </p>
                    
                    {/* Contact Info */}
                    <div className="mt-3 space-y-1">
                      <a
                        href={`mailto:${BRAND_CONFIG.email}`}
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors block truncate
                          focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                        aria-label={`Email ${BRAND_CONFIG.name}`}
                      >
                        {BRAND_CONFIG.email}
                      </a>
                      <a
                        href={`tel:${BRAND_CONFIG.phone}`}
                        className="text-sm text-gray-400 hover:text-white transition-colors block
                          focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                        aria-label={`Call ${BRAND_CONFIG.name}`}
                      >
                        {BRAND_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-12 border-gray-800" aria-hidden="true" />

          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright - Essential for SEO */}
            <div className="text-center lg:text-left space-y-2">
              <p className="text-gray-400 font-medium">
                © {currentYear} {BRAND_CONFIG.name}. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                DevOps Engineer specializing in Cloud Infrastructure, Automation, and CI/CD
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link
                to="/privacy"
                className="hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-label="Privacy Policy"
              >
                Privacy
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                to="/terms"
                className="hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-label="Terms of Service"
              >
                Terms
              </Link>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                Built with <span className="text-red-500" aria-label="love">❤</span> using React
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button - Accessible */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14
              bg-gradient-to-br from-blue-600 to-indigo-600
              text-white rounded-full flex items-center justify-center
              shadow-xl backdrop-blur-sm border border-blue-500/30
              z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
              hover:scale-110 transition-transform duration-200"
            aria-label="Scroll to top of page"
          >
            <FiChevronUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* SEO Enhancement - BreadcrumbList Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": BRAND_CONFIG.name,
          "jobTitle": BRAND_CONFIG.title,
          "description": BRAND_CONFIG.description,
          "email": BRAND_CONFIG.email,
          "telephone": BRAND_CONFIG.phone,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": BRAND_CONFIG.location
          },
          "sameAs": SOCIAL_LINKS.map(link => link.url),
          "knowsAbout": TECHNOLOGIES,
          "url": "https://ajitdev.com",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance DevOps Engineer"
          },
          "mainEntityOfPage": {
            "@type": "ProfilePage",
            "dateModified": new Date().toISOString().split('T')[0]
          }
        })}
      </script>
    </>
  );
};

export default Footer;