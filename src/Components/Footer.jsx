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

// Animation variants for consistent transitions
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const childItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Configuration objects
const BRAND_CONFIG = {
  name: "Ajit Kumar",
  title: "DevOps & Cloud Engineer",
  description: "Building secure and scalable cloud infrastructure with modern technologies. Passionate about automation, CI/CD, and cloud-native solutions.",
  gradient: "from-blue-500 to-indigo-600",
  availability: {
    title: "Open to Opportunities",
    subtitle: "DevOps • Cloud • SRE • Full-time & Contract Roles",
    icon: <FiBriefcase />,
  },
};

const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    url: "https://github.com/ajitdev01",
    icon: <FiGithub />,
    color: "hover:bg-gray-700",
    ariaLabel: "Visit GitHub profile",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ajitdev01/",
    icon: <FiLinkedin />,
    color: "hover:bg-blue-600",
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    platform: "Email",
    url: "mailto:ajitk23192@gmail.com",
    icon: <FiMail />,
    color: "hover:bg-red-500",
    ariaLabel: "Send email",
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/916205526784",
    icon: <FaWhatsapp />,
    color: "hover:bg-green-500",
    ariaLabel: "Contact via WhatsApp",
  },
];

const NAV_LINKS = [
  { name: "Home", path: "/", icon: <FiHome /> },
  { name: "About", path: "/about", icon: <FiUser /> },
  { name: "Skills", path: "/skills", icon: <FiSettings /> },
  { name: "Projects", path: "/projects", icon: <FiFolder /> },
  { name: "Education", path: "/education", icon: <FaGraduationCap /> },
  { name: "Contact", path: "/contact", icon: <FiMail /> },
];

const TECHNOLOGIES = [
  // Frontend
  "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
  // Backend & Cloud
  "Node.js", "Express.js", "Python", "REST API", "AWS", "Docker",
  // DevOps
  "Kubernetes", "CI/CD", "GitHub Actions", "Linux", "Nginx", "Terraform",
  // Database
  "MongoDB", "MySQL", "PostgreSQL", "Redis",
  // Tools & Practices
  "Git", "GitHub", "VS Code", "Postman", "Agile", "Microservices",
  // Security
  "Web Security", "JWT", "OWASP", "IAM",
];

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { isVisible, scrollToTop };
};

/**
 * Technology Badge Component
 */
const TechBadge = ({ technology, index }) => (
  <motion.span
    variants={childItem}
    whileHover={{ 
      y: -4, 
      scale: 1.05,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      borderColor: "rgba(59, 130, 246, 0.5)",
    }}
    transition={{ 
      type: "spring", 
      stiffness: 400, 
      damping: 25,
      duration: 0.2 
    }}
    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
      bg-gray-800/50 backdrop-blur-sm border border-gray-700/50
      text-gray-300 rounded-lg hover:text-white
      transition-all duration-200 cursor-pointer select-none"
  >
    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60"></span>
    {technology}
  </motion.span>
);

/**
 * Social Link Component
 */
const SocialLink = ({ link }) => (
  <motion.a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    variants={childItem}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    className={`w-10 h-10 rounded-lg flex items-center justify-center
      bg-gray-800/60 backdrop-blur-sm border border-gray-700/50
      ${link.color} transition-all duration-300
      group relative overflow-hidden`}
    aria-label={link.ariaLabel}
  >
    <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
      {link.icon}
    </span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100"
      initial={false}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

/**
 * Navigation Link Component
 */
const NavLinkItem = ({ link }) => (
  <motion.li variants={childItem}>
    <Link
      to={link.path}
      className="group flex items-center gap-3 px-2 py-2 rounded-lg
        text-gray-400 hover:text-white transition-all duration-300
        hover:bg-gray-800/30"
    >
      <span className="text-blue-500/70 group-hover:text-blue-400 transition-colors duration-300">
        {link.icon}
      </span>
      <span className="font-medium">{link.name}</span>
      <FiExternalLink className="ml-auto text-xs opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
    </Link>
  </motion.li>
);

const Footer = () => {
  const { isVisible, scrollToTop } = useScrollToTop();
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  return (
    <>
      <motion.footer
        ref={footerRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="relative bg-gray-900 text-gray-300 overflow-hidden"
      >
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <motion.div
              variants={staggerChildren}
              className="lg:col-span-4 space-y-6"
            >
              <motion.div variants={childItem} className="space-y-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-12 h-12 bg-gradient-to-br ${BRAND_CONFIG.gradient}
                      rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <FiCode className="text-white text-xl" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {BRAND_CONFIG.name}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium">
                      {BRAND_CONFIG.title}
                    </p>
                  </div>
                </div>

                <motion.p 
                  variants={childItem}
                  className="text-gray-400 text-sm leading-relaxed"
                >
                  {BRAND_CONFIG.description}
                </motion.p>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={childItem} className="space-y-4">
                <p className="text-sm font-medium text-gray-300">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((link) => (
                    <SocialLink key={link.platform} link={link} />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              variants={staggerChildren}
              className="lg:col-span-3 lg:col-start-6"
            >
              <motion.h4 
                variants={childItem}
                className="text-lg font-bold text-white mb-6 tracking-wide"
              >
                Quick Links
              </motion.h4>
              <motion.ul variants={staggerChildren} className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <NavLinkItem key={link.name} link={link} />
                ))}
              </motion.ul>
            </motion.div>

            {/* Technologies & Info */}
            <motion.div
              variants={staggerChildren}
              className="lg:col-span-5 lg:col-start-9 space-y-8"
            >
              {/* Technologies */}
              <div>
                <motion.h4 
                  variants={childItem}
                  className="text-lg font-bold text-white mb-6 tracking-wide"
                >
                  Tech Stack & Tools
                </motion.h4>
                <motion.div
                  variants={staggerChildren}
                  className="flex flex-wrap gap-2"
                >
                  {TECHNOLOGIES.map((tech, index) => (
                    <TechBadge key={tech} technology={tech} index={index} />
                  ))}
                </motion.div>
              </div>

              {/* Availability Card */}
              <motion.div
                variants={childItem}
                whileHover={{ 
                  y: -4,
                  borderColor: "rgba(59, 130, 246, 0.4)",
                  backgroundColor: "rgba(30, 41, 59, 0.8)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-5 rounded-xl
                  bg-gray-800/40 backdrop-blur-sm
                  border border-gray-700/50
                  group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-12 h-12 flex items-center justify-center rounded-lg
                      bg-gradient-to-br from-blue-500/10 to-indigo-600/10
                      border border-blue-500/20 group-hover:border-blue-500/40
                      transition-all duration-300"
                  >
                    <FiBriefcase className="text-blue-400 text-xl" />
                  </motion.div>

                  <div className="flex-1">
                    <p className="text-base font-semibold text-white mb-1">
                      {BRAND_CONFIG.availability.title}
                    </p>
                    <p className="text-sm text-gray-400">
                      {BRAND_CONFIG.availability.subtitle}
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500 to-indigo-600/0 mt-3"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={childItem}
            className="my-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
          />

          {/* Bottom Bar */}
          <motion.div
            variants={staggerChildren}
            className="flex flex-col lg:flex-row justify-between items-center gap-6"
          >
            {/* Copyright */}
            <motion.div variants={childItem} className="text-center lg:text-left space-y-2">
              <p className="text-gray-400 font-medium">
                © {currentYear} {BRAND_CONFIG.name} — {BRAND_CONFIG.title}
              </p>
              <p className="text-gray-500 text-sm">
                Built with React, Tailwind CSS & modern web technologies
              </p>
            </motion.div>

            {/* Crafted with love */}
            <motion.div
              variants={childItem}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg
                bg-gray-800/30 backdrop-blur-sm border border-gray-700/50
                hover:border-pink-500/30 transition-all duration-300"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FiHeart className="text-pink-500" />
              </motion.div>
              <span className="font-medium text-gray-300">
                Crafted with passion
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <AnimatePresence>
          {isVisible && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 w-14 h-14
                bg-gradient-to-br from-blue-600 to-indigo-600
                text-white rounded-full flex items-center justify-center
                shadow-xl backdrop-blur-sm border border-blue-500/30
                z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Scroll to top"
            >
              <FiChevronUp className="text-xl" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.footer>
    </>
  );
};

export default Footer;