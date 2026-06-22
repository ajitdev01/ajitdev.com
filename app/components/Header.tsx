'use client';

import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// 1. ICONS (Custom SVG Components)
// ============================================
const FiHome = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const FiUser = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const FiSettings = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const FiFolder = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>;
const FiMail = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const FiCode = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const FiMenu = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const FiX = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const FiChevronRight = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const FaGraduationCap = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>;

// ============================================
// 2. CONFIGURATION (SEO-Optimized)
// ============================================
const NAV_ITEMS = [
  { name: "Home", path: "/", icon: FiHome, ariaLabel: "Navigate to home page", title: "Ajit Kumar - Full Stack Engineer Portfolio" },
  { name: "About", path: "/about", icon: FiUser, ariaLabel: "Learn about Ajit Kumar's journey", title: "About Ajit Kumar - MERN Stack Developer" },
  { name: "Skills", path: "/skills", icon: FiSettings, ariaLabel: "View technical skills and stack", title: "Skills - Full Stack & Cloud Expertise" },
  { name: "Projects", path: "/projects", icon: FiFolder, ariaLabel: "Browse portfolio projects", title: "Projects - Real-World Applications Built" },
  { name: "Education", path: "/education", icon: FaGraduationCap, ariaLabel: "Education & certifications", title: "Education - CS & Certifications" },
  { name: "Contact", path: "/contact", icon: FiMail, ariaLabel: "Get in touch", title: "Contact Ajit Kumar - Hire Full Stack Developer" },
];

const BRAND_INFO = {
  name: "Ajit Kumar",
  title: "Full Stack Engineer | MERN • Next.js • TypeScript",
  description: "Professional full stack developer specializing in modern web applications, cloud deployment, and scalable systems.",
};

// ============================================
// 3. CUSTOM HOOKS (Performance & UX)
// ============================================
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

const useClickOutside = (ref: React.RefObject<HTMLElement | null>, callback: () => void) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) callback();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
};

// ============================================
// 4. MEMOIZED COMPONENTS
// ============================================
const DesktopNavItem = memo(({ item }: { item: typeof NAV_ITEMS[number] }) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;
  const Icon = item.icon;

  return (
    <Link
      href={item.path}
      aria-label={item.ariaLabel}
      title={item.title}
      className={`
        relative inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isActive
          ? "text-blue-600 bg-blue-50"
          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
        }
      `}
    >
      <span className="w-5 h-5" aria-hidden="true"><Icon /></span>
      <span>{item.name}</span>
      {isActive && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
        />
      )}
    </Link>
  );
});
DesktopNavItem.displayName = 'DesktopNavItem';

const MobileNavItem = memo(({ item, onClick }: { item: typeof NAV_ITEMS[number]; onClick: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;
  const Icon = item.icon;

  return (
    <Link
      href={item.path}
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
        <span className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-400"}`} aria-hidden="true"><Icon /></span>
        <span>{item.name}</span>
      </span>
      <motion.span
        animate={{ x: isActive ? 4 : 0 }}
        className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-400"}`}
        aria-hidden="true"
      >
        <FiChevronRight />
      </motion.span>
    </Link>
  );
});
MobileNavItem.displayName = 'MobileNavItem';

// ============================================
// 5. MAIN HEADER COMPONENT
// ============================================
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollDetection(10);
  const menuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu on route change & escape key
  useEffect(() => setIsMenuOpen(false), [pathname]);
  useClickOutside(menuRef, () => setIsMenuOpen(false));

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isMenuOpen) {
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
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      {/* Skip to content link (Accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600 focus:rounded-md focus:shadow-lg focus:ring-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>

      {/* Desktop & Mobile Header */}
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
            {/* Logo + Brand */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
              aria-label={`${BRAND_INFO.name} - ${BRAND_INFO.description}`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white w-5 h-5" aria-hidden="true"><FiCode /></span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {BRAND_INFO.name}
                </span>
                <span className="text-xs text-gray-600 font-medium hidden sm:block">
                  {BRAND_INFO.title}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-3" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <DesktopNavItem key={item.path} item={item} />
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
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
            >
              <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
                <div className="px-4 py-6 space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <MobileNavItem key={item.path} item={item} onClick={() => setIsMenuOpen(false)} />
                  ))}
                  <div className="pt-4 mt-4 border-t border-gray-200" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" aria-hidden="true" />

      {/* Hidden Navigation for Crawlers */}
      <nav className="sr-only" aria-label="SEO navigation structure" itemScope itemType="https://schema.org/SiteNavigationElement">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.path} itemProp="name"><Link href={item.path} itemProp="url">{item.name}</Link></li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default memo(Header);
