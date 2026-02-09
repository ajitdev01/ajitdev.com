import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "About", path: "/about", icon: <FiUser /> },
    { name: "Skills", path: "/skills", icon: <FiSettings /> },
    { name: "Projects", path: "/projects", icon: <FiFolder /> },
    { name: "Education", path: "/education", icon: <FaGraduationCap /> },
    { name: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  return (
    <>
     

      <header
        ref={menuRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-200/30 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo / Brand */}
            <Link
              to="/"
              className="flex items-center gap-3 group transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <FiCode className="text-white text-lg" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-all duration-300">
                  Ajit Kumar
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  DevOps Engineer | Cloud • Automation • CI/CD
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-item flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? "active-nav text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                >
                  <span className="text-base">{item.icon}</span>
                  {item.name}
                </NavLink>
              ))}

              {/* CTA Button */}
              <Link
                to="/contact"
                className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold
                text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg
                hover:from-blue-700 hover:to-indigo-700 transition-all duration-300
                hover:shadow-md transform hover:-translate-y-0.5"
              >
                <FiSend className="text-xs" />
                Hire Me
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FiX className="text-gray-700 text-xl" />
              ) : (
                <FiMenu className="text-gray-700 text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Simple and Clean */}
        <div
          className={`lg:hidden mobile-menu absolute top-full left-0 w-full bg-white border-t border-gray-200 transition-all duration-300 ease-out
            ${
              isMenuOpen
                ? "max-h-[70vh] opacity-100 shadow-lg"
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
        >
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 animate-slideDown
                  ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`
                }
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span
                  className={`${
                    location.pathname === item.path
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold
                text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg
                hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                <FiSend className="text-sm" />
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div
        className={`transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}
      ></div>

      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{
          width: `${
            scrolled
              ? (window.scrollY /
                  (document.body.scrollHeight - window.innerHeight)) *
                100
              : 0
          }%`,
        }}
      ></div>
    </>
  );
};

export default Header;
