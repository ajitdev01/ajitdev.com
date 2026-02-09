import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
} from "react-icons/fi";

import { FaWhatsapp, FaGraduationCap } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  // Show back-to-top button when scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const technologies = [
    // Frontend
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",

    // Backend
    "Node.js",
    "Express.js",
    "REST API",
    "JWT Authentication",

    // Database
    "MongoDB",
    "MySQL",

    // DevOps & Cloud
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "Linux",
    "Nginx",

    // Programming
    "Python",
    "JavaScript",

    // Tools
    "Git",
    "GitHub",
    "VS Code",
    "Postman",

    // Security (since Cloud & Security specialization)
    "Web Security",
    "OWASP Basics",
  ];

  return (
    <>

      <footer className="bg-gray-900 text-gray-300 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <FiCode className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Ajit Kumar</h3>
                  <p className="text-sm text-gray-400">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building secure and scalable web applications with modern
                technologies. Passionate about clean code and user experience.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/ajitdev01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FiGithub className="text-gray-300" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ajitdev01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="text-gray-300" />
                </a>

                <a
                  href="mailto:ajitk23192@gmail.com"
                  className="w-9 h-9 bg-gray-800 hover:bg-red-500 rounded flex items-center justify-center transition-colors duration-300"
                  aria-label="Email"
                >
                  <FiMail className="text-gray-300" />
                </a>

                <a
                  href="https://wa.me/916205526784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 hover:bg-green-500 rounded flex items-center justify-center transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-gray-300" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="nav-link flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FiHome className="text-blue-500" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="nav-link flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FiUser className="text-blue-500" />
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    className="nav-link flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FiSettings className="text-blue-500" />
                    <span>Skills</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="nav-link flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FiFolder className="text-blue-500" />
                    <span>Projects</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="nav-link flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FiMail className="text-blue-500" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Technologies & Info */}
            <div className="space-y-8">
              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 tracking-wide">
                  Tech Stack
                </h4>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium
          bg-gradient-to-br from-gray-800 to-gray-900
          border border-gray-700/60
          text-gray-300 rounded-lg
          hover:border-blue-500/50 hover:text-white
          hover:-translate-y-0.5
          transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability Card */}
              <div
                className="relative p-4 rounded-xl
    bg-gradient-to-br from-gray-900 to-gray-800
    border border-gray-700/60
    hover:border-blue-500/40
    transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg
        bg-blue-500/10 border border-blue-500/20"
                  >
                    <FiBriefcase className="text-blue-400 text-lg" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Open to Opportunities
                    </p>
                    <p className="text-xs text-gray-400">
                      DevOps • Cloud • Internships & Junior Roles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-800"></div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-10 border-t border-gray-800/70">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
              {/* Left Side */}
              <div className="text-center md:text-left space-y-1">
                <p className="text-gray-400 font-medium">
                  © {currentYear} Ajit Kumar — DevOps & Cloud Engineer
                </p>
                <p className="text-gray-500">
                  Built with React, Tailwind CSS & modern web technologies
                </p>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4 text-gray-400">
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg
        bg-gray-800/40 border border-gray-700/60
        hover:border-blue-500/40 transition-all duration-300"
                >
                  <FiHeart className="text-red-500 text-sm" />

                  <span className="font-medium">Crafted with passion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
            aria-label="Scroll to top"
          >
            <FiChevronUp />
          </button>
        )}
      </footer>
    </>
  );
};

export default Footer;
