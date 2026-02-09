import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiCode,
  FiGithub,
  FiExternalLink,
  FiStar,
  FiTrendingUp,
  FiFolder,
  FiSend,
  FiBook,
  FiDatabase,
  FiCloud,
  FiServer,
  FiCpu,
  FiGitBranch,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const Projects = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sample projects data
  const projects = [
    {
      title: "IRCTC Railway System Clone",
      description:
        "A comprehensive railway booking system clone with user authentication, seat selection, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      category: "Full Stack",
      github: "https://github.com/ajitdev01/",
      icon: <FiServer />,
      color: "blue",
      features: [
        "Booking System",
        "Admin Panel",
        "Payment Gateway",
        "Real-time Updates",
      ],
    },
    {
      title: "Library Management System",
      description:
        "Complete library system with book tracking, member management, fine calculation, and reporting features.",
      tech: ["React", "Node.js", "MySQL", "Express", "Tailwind"],
      category: "Full Stack",
      github: "https://github.com/ajitdev01/",
      icon: <FiBook />,
      color: "green",
      features: ["Book Management", "Member Portal", "Fine System", "Reports"],
    },
    {
      title: "Admission Portal System",
      description:
        "Student admission portal with form submission, document verification, status tracking, and admin approval workflow.",
      tech: ["React", "Express", "MongoDB", "Cloudinary", "Nodemailer"],
      category: "Full Stack",
      github: "https://github.com/ajitdev01/",
      icon: <FiFolder />,
      color: "purple",
      features: [
        "Multi-step Forms",
        "Document Upload",
        "Status Tracking",
        "Email Notifications",
      ],
    },
    {
      title: "MERN CRUD Application",
      description:
        "Complete CRUD operations with authentication, authorization, and responsive UI for managing user data.",
      tech: ["React", "Express", "MongoDB", "Mongoose", "JWT"],
      category: "Full Stack",
      github: "https://github.com/ajitdev01/mern-fullstack",
      icon: <FiDatabase />,
      color: "orange",
      features: ["Full CRUD", "User Auth", "REST API", "Responsive Design"],
    },
    {
      title: "Dockerized Web Applications",
      description:
        "Containerized web applications with multi-service architecture, Docker Compose, and deployment configurations.",
      tech: ["Docker", "Node.js", "React", "Nginx", "MongoDB"],
      category: "DevOps / Cloud",
      github: "https://github.com/ajitdev01/mern-fullstack",
      icon: <FiCloud />,
      color: "cyan",
      features: [
        "Containerization",
        "Multi-service",
        "Docker Compose",
        "Optimized Images",
      ],
    },
    {
      title: "DSA Practice Repository",
      description:
        "Comprehensive Data Structures & Algorithms implementations in C++ with optimized solutions and explanations.",
      tech: ["C++", "DSA", "STL", "VS Code"],
      category: "Programming",
      github: "https://github.com/ajitdev01/DSA-Journey-2026",
      icon: <FiCode />,
      color: "gray",
      features: [
        "All DSA Topics",
        "Optimized Code",
        "Complexity Analysis",
        "VS Code Config",
      ],
    },
  ];

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen) {
        const menu = document.getElementById("mobile-menu");
        if (menu && !menu.contains(event.target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const stats = [
    { value: "26+", label: "Repositories" },
    { value: "31+", label: "Stars" },
    { value: "9+", label: "Recent Commits" },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col bg-white transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Header />

      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl mb-6">
              <FiFolder className="text-3xl text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              My Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Full-stack applications, cloud security implementations, and DSA
              practice projects
            </p>
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              {[
                "Full Stack (MERN)",
                "Cloud & Security",
                "DSA Practice",
                "DevOps",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-colors duration-300 z-50"
            aria-label="Toggle projects menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {/* Mobile Projects Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden fixed inset-x-0 bottom-0 bg-white border-t border-gray-200 transition-transform duration-300 ease-in-out z-40 ${
              isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
            }`}
            style={{ maxHeight: "70vh" }}
          >
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Filter Projects
              </h2>

              {/* Mobile Filter Tags */}
              <div className="flex flex-wrap gap-2">
                {[
                  "All",
                  "Full Stack",
                  "Frontend",
                  "Cloud",
                  "Security",
                  "DSA",
                  "DevOps",
                ].map((filter, idx) => (
                  <button
                    key={idx}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors duration-300 h-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Mobile Quick Links */}
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="#github-stats"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 h-24 justify-center"
                >
                  <FiTrendingUp className="text-blue-600 text-xl" />
                  <span className="text-sm font-medium">Stats</span>
                </a>

                <a
                  href="https://github.com/ajitdev01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 h-24 justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FiGithub className="text-gray-700 text-xl" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors duration-300 h-24 justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FiBook className="text-blue-600 text-xl" />
                  <span className="text-sm font-medium">Resume</span>
                </a>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="flex gap-3">
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 h-12 inline-flex items-center justify-center gap-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors"
                >
                  <FiSend />
                  Contact
                </a>
                <a
                  href="#projects-grid"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 h-12 inline-flex items-center justify-center gap-2 px-4 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  <FiCode />
                  View All
                </a>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div
            id="projects-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Header */}
                <div
                  className={`h-40 bg-gradient-to-r ${
                    project.color === "blue"
                      ? "from-blue-500 to-indigo-600"
                      : project.color === "green"
                        ? "from-green-500 to-emerald-600"
                        : project.color === "purple"
                          ? "from-purple-500 to-pink-600"
                          : project.color === "orange"
                            ? "from-orange-500 to-red-600"
                            : project.color === "cyan"
                              ? "from-cyan-500 to-blue-600"
                              : "from-gray-700 to-gray-900"
                  } relative`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-4xl opacity-90">
                      {project.icon}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full text-sm font-semibold text-white bg-black/40 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <FiStar className="text-yellow-500" />
                      <span className="text-sm font-medium text-gray-700">
                        Key Features:
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-12 inline-flex items-center justify-center gap-2 px-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300"
                    >
                      <FiGithub />
                      <span>View Code</span>
                    </a>
                    <button className="w-14 h-12 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                      <FiExternalLink />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Stats */}
          <div
            id="github-stats"
            className="bg-gradient-to-r from-gray-900 to-black text-white rounded-xl p-8 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">GitHub Activity</h3>
                <p className="text-gray-300">
                  26+ repositories showcasing full-stack development, cloud
                  security, and DSA practice
                </p>
              </div>
              <div className="flex gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <a
                href="https://github.com/ajitdev01"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 inline-flex items-center justify-center gap-2 px-6 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                <FiGithub />
                <span>Visit GitHub</span>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want to See More?
              </h3>
              <p className="text-gray-700 mb-8">
                Check out my GitHub for more projects, contributions, and code
                samples
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/ajitdev01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 inline-flex items-center justify-center gap-2 px-8 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl font-semibold hover:from-black hover:to-gray-900 transition-colors duration-300 shadow-lg"
                >
                  <FiGithub />
                  Explore GitHub
                </a>
                <a
                  href="/contact"
                  className="h-12 inline-flex items-center justify-center gap-2 px-8 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 border border-gray-300"
                >
                  <FiSend />
                  Discuss Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
