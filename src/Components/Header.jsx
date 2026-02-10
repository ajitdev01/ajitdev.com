import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiFolder,
  FiMail,
  FiCode,
  FiMenu,
  FiX,
  FiSend,
  FiChevronRight,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

// Animation variants for consistent transitions
const fadeInUp = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { opacity: 0, y: -10 }
};

const slideIn = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
  }
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const mobileItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.2 }
  }
};

// Configuration for navigation items
const NAV_ITEMS = [
  { 
    name: "Home", 
    path: "/", 
    icon: <FiHome />,
    ariaLabel: "Navigate to home page"
  },
  { 
    name: "About", 
    path: "/about", 
    icon: <FiUser />,
    ariaLabel: "Navigate to about page"
  },
  { 
    name: "Skills", 
    path: "/skills", 
    icon: <FiSettings />,
    ariaLabel: "Navigate to skills page"
  },
  { 
    name: "Projects", 
    path: "/projects", 
    icon: <FiFolder />,
    ariaLabel: "Navigate to projects page"
  },
  { 
    name: "Education", 
    path: "/education", 
    icon: <FaGraduationCap />,
    ariaLabel: "Navigate to education page"
  },
  { 
    name: "Contact", 
    path: "/contact", 
    icon: <FiMail />,
    ariaLabel: "Navigate to contact page"
  },
];

const BRAND_INFO = {
  name: "Ajit Kumar",
  title: "DevOps Engineer | Cloud • Automation • CI/CD",
  gradient: "from-blue-500 to-indigo-600",
  hoverGradient: "from-blue-600 to-indigo-700",
};

/**
 * Custom hook for scroll detection with throttling
 */
const useScrollDetection = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
};

/**
 * Custom hook for click outside detection
 */
const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollDetection(10);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useClickOutside(menuRef, () => setIsMenuOpen(false));

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Desktop navigation item component
  const DesktopNavItem = ({ item, index }) => (
    <NavLink
      to={item.path}
      aria-label={item.ariaLabel}
      className={({ isActive }) => `
        relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg
        transition-all duration-200 group overflow-hidden
        ${isActive 
          ? "text-blue-600" 
          : "text-gray-700 hover:text-blue-600"
        }
      `}
    >
      {({ isActive }) => (
        <>
          <motion.span
            className="text-base"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {item.icon}
          </motion.span>
          <span className="relative z-10">{item.name}</span>
          
          {/* Active indicator */}
          {isActive && (
            <motion.div
              className="absolute inset-0 bg-blue-50 rounded-lg"
              layoutId="activeIndicator"
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30
              }}
            />
          )}
          
          {/* Hover effect */}
          <motion.div
            className="absolute inset-0 bg-gray-50 rounded-lg opacity-0 group-hover:opacity-100"
            initial={false}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </>
      )}
    </NavLink>
  );

  // Mobile navigation item component
  const MobileNavItem = ({ item, index, onClick }) => (
    <motion.div variants={mobileItemVariants}>
      <NavLink
        to={item.path}
        onClick={onClick}
        aria-label={item.ariaLabel}
        className={({ isActive }) => `
          flex items-center justify-between px-4 py-3.5 rounded-lg
          transition-colors duration-200 group
          ${isActive
            ? "text-blue-600 bg-blue-50"
            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          }
        `}
      >
        <div className="flex items-center gap-3">
          <span className={`
            text-lg transition-colors duration-200
            ${location.pathname === item.path 
              ? "text-blue-500" 
              : "text-gray-400 group-hover:text-blue-400"
            }
          `}>
            {item.icon}
          </span>
          <span className="font-medium">{item.name}</span>
        </div>
        <FiChevronRight className={`
          text-gray-400 transition-all duration-200
          ${location.pathname === item.path ? "text-blue-400" : ""}
          group-hover:text-blue-400 group-hover:translate-x-0.5
        `} />
      </NavLink>
    </motion.div>
  );

  return (
    <>
      <motion.header
        ref={menuRef}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeInUp}
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg py-3"
            : "bg-white/90 backdrop-blur-md border-b border-gray-200/30 py-4"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo / Brand */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link
                to="/"
                className="flex items-center gap-3 group transition-all duration-300"
                aria-label="Return to home page"
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className={`
                    w-10 h-10 bg-gradient-to-br ${BRAND_INFO.gradient}
                    rounded-xl flex items-center justify-center
                    transition-all duration-300 shadow-md
                    group-hover:shadow-lg group-hover:scale-105
                    ${scrolled ? "shadow-sm" : "shadow-md"}
                  `}
                >
                  <FiCode className="text-white text-lg" />
                </motion.div>
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {BRAND_INFO.name}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {BRAND_INFO.title}
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map((item, index) => (
                <DesktopNavItem key={item.name} item={item} index={index} />
              ))}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="ml-4"
              >
                <Link
                  to="/contact"
                  className={`
                    inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold
                    text-white bg-gradient-to-r ${BRAND_INFO.gradient} rounded-lg
                    hover:${BRAND_INFO.hoverGradient} transition-all duration-300
                    shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  `}
                  aria-label="Contact for hiring"
                >
                  <FiSend className="text-xs" />
                  <span>Hire Me</span>
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg
                hover:bg-gray-100 transition-colors duration-200 focus:outline-none
                focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX className="text-gray-700 text-xl" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu className="text-gray-700 text-xl" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-200/60
                shadow-2xl"
            >
              <div className="px-4 py-6 space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <MobileNavItem
                    key={item.name}
                    item={item}
                    index={index}
                    onClick={() => setIsMenuOpen(false)}
                  />
                ))}

                {/* Mobile CTA */}
                <motion.div
                  variants={mobileItemVariants}
                  className="pt-4 mt-4 border-t border-gray-100"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      w-full inline-flex items-center justify-center gap-2 px-6 py-3.5
                      text-sm font-semibold text-white bg-gradient-to-r ${BRAND_INFO.gradient}
                      rounded-lg hover:${BRAND_INFO.hoverGradient} transition-all duration-300
                      shadow-md hover:shadow-lg focus:outline-none focus:ring-2
                      focus:ring-blue-500 focus:ring-offset-2
                    `}
                    aria-label="Contact for hiring"
                  >
                    <FiSend className="text-sm" />
                    <span>Hire Me</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div
        className={`transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}
        aria-hidden="true"
      />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 z-50"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: scrolled
            ? (window.scrollY / (document.body.scrollHeight - window.innerHeight))
            : 0
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        aria-hidden="true"
      />
    </>
  );
};

export default Header;