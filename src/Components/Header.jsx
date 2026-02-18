import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons
const FiHome = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const FiUser = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const FiSettings = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const FiFolder = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>;
const FiMail = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const FiCode = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const FiSend = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;
const FiMenu = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const FiX = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const FiChevronRight = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const FaGraduationCap = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>;

// Navigation configuration with SEO-friendly metadata
const NAV_ITEMS = [
  { name: "Home", path: "/", icon: FiHome, ariaLabel: "Navigate to home page", title: "Ajit Kumar - DevOps Engineer Portfolio" },
  { name: "About", path: "/about", icon: FiUser, ariaLabel: "Learn more about Ajit Kumar", title: "About Ajit Kumar - DevOps Engineer" },
  { name: "Skills", path: "/skills", icon: FiSettings, ariaLabel: "View technical skills and expertise", title: "Skills & Expertise - DevOps & Cloud" },
  { name: "Projects", path: "/projects", icon: FiFolder, ariaLabel: "Browse portfolio projects", title: "DevOps & Cloud Projects - Portfolio" },
  { name: "Education", path: "/education", icon: FaGraduationCap, ariaLabel: "View education and certifications", title: "Education & Certifications - Ajit Kumar" },
  { name: "Contact", path: "/contact", icon: FiMail, ariaLabel: "Get in touch with Ajit Kumar", title: "Contact Ajit Kumar - DevOps Engineer" },
];

const BRAND_INFO = {
  name: "Ajit Kumar",
  title: "DevOps Engineer | Cloud • Automation • CI/CD",
  description: "Professional DevOps engineer specializing in cloud infrastructure, automation, and CI/CD pipelines",
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

// Memoized navigation item components for performance
const DesktopNavItem = memo(({ item, isActive }) => (
  <NavLink
    to={item.path}
    aria-label={item.ariaLabel}
    title={item.title}
    className={({ isActive }) => `
      relative inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md
      transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      ${isActive 
        ? "text-blue-600 bg-blue-50" 
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
      }
    `}
  >
    <span className="w-5 h-5" aria-hidden="true">
      <item.icon />
    </span>
    <span>{item.name}</span>
    {isActive && (
      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
    )}
  </NavLink>
));

DesktopNavItem.displayName = 'DesktopNavItem';

const MobileNavItem = memo(({ item, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  
  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      aria-label={item.ariaLabel}
      title={item.title}
      className={`
        flex items-center justify-between w-full px-4 py-3 text-base rounded-lg
        transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500
        ${isActive
          ? "text-blue-600 bg-blue-50 font-medium"
          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
        }
      `}
    >
      <span className="flex items-center gap-3">
        <span className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-400"}`} aria-hidden="true">
          <item.icon />
        </span>
        <span>{item.name}</span>
      </span>
      <span className={`w-5 h-5 transition-transform duration-200 ${isActive ? "text-blue-600 translate-x-1" : "text-gray-400"}`} aria-hidden="true">
        <FiChevronRight />
      </span>
    </NavLink>
  );
});

MobileNavItem.displayName = 'MobileNavItem';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollDetection(10);
  const menuRef = useRef(null);
  const location = useLocation();
  const menuButtonRef = useRef(null);

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
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600 focus:rounded-md focus:shadow-lg focus:ring-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>

      <header
        ref={menuRef}
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "bg-white border-b border-gray-200"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Brand - SEO optimized */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
              aria-label={`${BRAND_INFO.name} - ${BRAND_INFO.description}`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white w-5 h-5" aria-hidden="true">
                  <FiCode />
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {BRAND_INFO.name}
                </span>
                <span className="text-xs text-gray-600 font-medium">
                  {BRAND_INFO.title}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-3"
              aria-label="Main navigation"
              itemScope
              itemType="https://schema.org/SiteNavigationElement"
            >
              {NAV_ITEMS.map((item) => (
                <DesktopNavItem
                  key={item.path}
                  item={item}
                  isActive={location.pathname === item.path}
                />
              ))}

              {/* CTA Button with schema markup */}
              <Link
                to="/contact"
                className="ml-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Contact Ajit Kumar for DevOps opportunities"
                itemProp="url"
              >
                <span className="w-4 h-4" aria-hidden="true">
                  <FiSend />
                </span>
                <span>Hire Me</span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with SEO-friendly structure */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-x-0 top-16 bg-white border-t border-gray-200 shadow-xl overflow-hidden"
              role="navigation"
              aria-label="Mobile navigation"
              itemScope
              itemType="https://schema.org/SiteNavigationElement"
            >
              <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
                <div className="px-4 py-6 space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <MobileNavItem
                      key={item.path}
                      item={item}
                      onClick={() => setIsMenuOpen(false)}
                    />
                  ))}

                  {/* Mobile CTA */}
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <Link
                      to="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center w-full gap-2 px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Contact Ajit Kumar for DevOps opportunities"
                    >
                      <span className="w-5 h-5" aria-hidden="true">
                        <FiSend />
                      </span>
                      <span>Hire Me</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header - maintains content flow */}
      <div className="h-16" aria-hidden="true" />

      {/* Hidden SEO-friendly navigation structure for crawlers */}
      <nav className="sr-only" aria-label="SEO navigation structure">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link to={item.path} title={item.title}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* BreadcrumbList schema for better SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": NAV_ITEMS.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://ajitdev.com${item.path}`
          }))
        })}
      </script>
    </>
  );
};

export default memo(Header);