import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FiGitPullRequest,
  FiPackage,
  FiLock,
  FiZap,
  FiTerminal,
  FiGlobe,
  FiMonitor,
  FiUsers,
} from "react-icons/fi";

const Projects = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Enhanced projects data with more details
  const projects = [
    {
      id: 1,
      title: "IRCTC Railway System Clone",
      description: "A comprehensive railway booking system clone with user authentication, seat selection, payment integration, and admin dashboard. Built with modern microservices architecture.",
      shortDescription: "Full-featured railway booking platform",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "REST API", "Redis"],
      category: "Full Stack",
      subcategory: "MERN Stack",
      github: "https://github.com/ajitdev01/",
      liveDemo: "#",
      icon: <FiServer />,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Real-time Booking", "Admin Panel", "Payment Gateway", "Email Notifications", "Seat Selection", "Booking History"],
      complexity: "Advanced",
      stars: 24,
      lastUpdated: "2 weeks ago",
    },
    {
      id: 2,
      title: "Library Management System",
      description: "Complete library system with book tracking, member management, fine calculation, and reporting features. Includes QR code scanning and automated notifications.",
      shortDescription: "Digital library management platform",
      tech: ["React", "Node.js", "MySQL", "Express", "Tailwind", "JWT", "QR Code"],
      category: "Full Stack",
      subcategory: "LAMP Stack",
      github: "https://github.com/ajitdev01/",
      liveDemo: "#",
      icon: <FiBook />,
      color: "green",
      gradient: "from-emerald-500 to-teal-500",
      features: ["Book Management", "Member Portal", "Fine System", "Reports", "QR Integration", "Email Alerts"],
      complexity: "Intermediate",
      stars: 18,
      lastUpdated: "1 month ago",
    },
    {
      id: 3,
      title: "Admission Portal System",
      description: "Student admission portal with multi-step form submission, document verification, status tracking, and admin approval workflow. Supports bulk data processing.",
      shortDescription: "Student admission processing system",
      tech: ["React", "Express", "MongoDB", "Cloudinary", "Nodemailer", "PDF Generation"],
      category: "Full Stack",
      subcategory: "MERN Stack",
      github: "https://github.com/ajitdev01/",
      liveDemo: "#",
      icon: <FiFolder />,
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      features: ["Multi-step Forms", "Document Upload", "Status Tracking", "Email Notifications", "Admin Dashboard", "Reports"],
      complexity: "Advanced",
      stars: 31,
      lastUpdated: "3 weeks ago",
    },
    {
      id: 4,
      title: "MERN CRUD Application",
      description: "Complete CRUD operations with authentication, authorization, and responsive UI for managing user data. Includes search, filter, and pagination features.",
      shortDescription: "User management CRUD application",
      tech: ["React", "Express", "MongoDB", "Mongoose", "JWT", "Redux", "Tailwind"],
      category: "Full Stack",
      subcategory: "MERN Stack",
      github: "https://github.com/ajitdev01/mern-fullstack",
      liveDemo: "#",
      icon: <FiDatabase />,
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      features: ["Full CRUD", "User Auth", "REST API", "Responsive Design", "Search & Filter", "Pagination"],
      complexity: "Intermediate",
      stars: 45,
      lastUpdated: "1 week ago",
    },
    {
      id: 5,
      title: "Dockerized Web Applications",
      description: "Containerized web applications with multi-service architecture, Docker Compose, and optimized deployment configurations. Includes CI/CD pipeline setup.",
      shortDescription: "Containerized application deployment",
      tech: ["Docker", "Node.js", "React", "Nginx", "MongoDB", "Docker Compose", "GitHub Actions"],
      category: "DevOps",
      subcategory: "DevOps / CI-CD",
      github: "https://github.com/ajitdev01/",
      liveDemo: "#",
      icon: <FiCloud />,
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500",
      features: ["Containerization", "Multi-service", "Docker Compose", "Optimized Images", "CI/CD Pipeline", "Reverse Proxy"],
      complexity: "Intermediate",
      stars: 22,
      lastUpdated: "2 months ago",
    },
    {
      id: 6,
      title: "DSA Practice Repository",
      description: "Comprehensive Data Structures & Algorithms implementations in C++ with optimized solutions, complexity analysis, and detailed explanations.",
      shortDescription: "Data structures and algorithms practice",
      tech: ["C++", "DSA", "STL", "VS Code", "Competitive Programming"],
      category: "Programming",
      subcategory: "DSA & Algorithms",
      github: "https://github.com/ajitdev01/DSA-Journey-2026",
      liveDemo: "#",
      icon: <FiCode />,
      color: "gray",
      gradient: "from-gray-700 to-gray-900",
      features: ["All DSA Topics", "Optimized Code", "Complexity Analysis", "VS Code Config", "Pattern Problems", "Solutions"],
      complexity: "Beginner",
      stars: 67,
      lastUpdated: "4 days ago",
    },
    {
      id: 7,
      title: "AWS Cloud Security Dashboard",
      description: "Security monitoring dashboard for AWS infrastructure with IAM audit, security group analysis, and compliance reporting.",
      shortDescription: "AWS security monitoring dashboard",
      tech: ["AWS", "React", "Node.js", "CloudWatch", "IAM", "Security Groups"],
      category: "Cloud",
      subcategory: "Cloud Projects",
      github: "https://github.com/ajitdev01/",
      liveDemo: "#",
      icon: <FiLock />,
      color: "red",
      gradient: "from-rose-500 to-pink-500",
      features: ["IAM Audit", "Security Groups", "Compliance Reports", "Real-time Monitoring", "Alert System", "Dashboard"],
      complexity: "Advanced",
      stars: 19,
      lastUpdated: "1 month ago",
    },
    {
      id: 8,
      title: "Python Automation Scripts",
      description: "Collection of Python automation scripts for file processing, web scraping, API testing, and system administration tasks.",
      shortDescription: "Python automation utilities",
      tech: ["Python", "Selenium", "Requests", "Pandas", "BeautifulSoup", "Automation"],
      category: "Programming",
      subcategory: "Python Projects",
      github: "https://github.com/ajitdev01/",
      liveDemo: "#",
      icon: <FiTerminal />,
      color: "amber",
      gradient: "from-amber-500 to-orange-500",
      features: ["Web Scraping", "File Processing", "API Testing", "Data Analysis", "System Admin", "Automation"],
      complexity: "Intermediate",
      stars: 28,
      lastUpdated: "2 weeks ago",
    },
  ];

  // Filter categories
  const filterCategories = [
    { id: "All", label: "All Projects", count: projects.length },
    { id: "Full Stack", label: "Full Stack", count: projects.filter(p => p.category === "Full Stack").length },
    { id: "MERN Stack", label: "MERN Stack", count: projects.filter(p => p.subcategory === "MERN Stack").length },
    { id: "LAMP Stack", label: "LAMP Stack", count: projects.filter(p => p.subcategory === "LAMP Stack").length },
    { id: "DevOps", label: "DevOps", count: projects.filter(p => p.category === "DevOps").length },
    { id: "Cloud", label: "Cloud", count: projects.filter(p => p.category === "Cloud").length },
    { id: "Programming", label: "Programming", count: projects.filter(p => p.category === "Programming").length },
  ];

  // Stats data
  const stats = [
    { 
      value: "26+", 
      label: "Repositories", 
      icon: <FiFolder />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      color: "text-blue-500"
    },
    { 
      value: "31+", 
      label: "Stars", 
      icon: <FiStar />,
      gradient: "from-amber-500/20 to-orange-500/20",
      color: "text-amber-500"
    },
    { 
      value: "9+", 
      label: "Recent Commits", 
      icon: <FiGitPullRequest />,
      gradient: "from-emerald-500/20 to-teal-500/20",
      color: "text-emerald-500"
    },
    { 
      value: "8", 
      label: "Projects", 
      icon: <FiCode />,
      gradient: "from-purple-500/20 to-pink-500/20",
      color: "text-purple-500"
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

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => 
        project.category === activeFilter || 
        project.subcategory === activeFilter
      );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      y: -8,
      transition: { duration: 0.2 },
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col bg-white overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <Header />

      <main className="flex-grow pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Header */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex p-5 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-2xl mb-6 backdrop-blur-sm border border-white/30"
            >
              <FiFolder className="text-4xl text-blue-600" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
            >
              My Projects
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-6"
            >
              Full-stack applications, cloud security implementations, DevOps pipelines, and DSA practice projects
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-3 mt-8 flex-wrap"
            >
              {["MERN Stack", "LAMP Stack", "DevOps & CI/CD", "Cloud & Security", "Python", "DSA Practice"].map((tag, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-xl text-sm font-semibold border border-blue-200 hover:border-blue-300 transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mt-8 rounded-full"
            ></motion.div>
          </motion.section>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group"
            aria-label="Toggle projects menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative">
              {isMobileMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors"></div>
            </div>
          </button>

          {/* Mobile Projects Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="lg:hidden fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/30 shadow-2xl z-40"
                style={{ maxHeight: "70vh" }}
              >
                <div className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Filter Projects
                  </h2>

                  {/* Mobile Filter Tags */}
                  <div className="flex flex-wrap gap-3">
                    {filterCategories.map((filter) => (
                      <motion.button
                        key={filter.id}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setActiveFilter(filter.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative ${
                          activeFilter === filter.id
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {filter.label}
                        {filter.count > 0 && (
                          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                            {filter.count}
                          </span>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* Mobile Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 2).map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-4 rounded-xl ${stat.gradient} backdrop-blur-sm`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={stat.color}>
                            {stat.icon}
                          </div>
                          <div>
                            <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Filter Bar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex justify-center gap-4 mb-16 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg"
          >
            {filterCategories.map((filter) => (
              <motion.button
                key={filter.id}
                variants={filterVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-3 rounded-xl text-base font-medium transition-all duration-300 relative overflow-hidden group ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="relative z-10">
                  {filter.label}
                  {filter.count > 0 && (
                    <span className="ml-2 text-xs opacity-80">({filter.count})</span>
                  )}
                </span>
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  whileHover="hover"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="relative group"
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  {/* Animated border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                  
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Project Header with Gradient */}
                    <div className={`relative h-40 bg-gradient-to-r ${project.gradient} overflow-hidden`}>
                      {/* Background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      
                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-5xl opacity-90">
                          {project.icon}
                        </div>
                      </div>

                      {/* Category Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <div className="flex flex-col gap-2">
                          <span className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-black/40 backdrop-blur-sm">
                            {project.category}
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium text-white bg-black/30 backdrop-blur-sm">
                            {project.subcategory}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-white/90">
                            <FiStar className="text-yellow-300" />
                            <span className="text-sm font-semibold">{project.stars}</span>
                          </div>
                          <div className="text-xs text-white/80">{project.complexity}</div>
                        </div>
                      </div>

                      {/* Last Updated */}
                      <div className="absolute bottom-4 left-4">
                        <span className="text-xs text-white/80 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                          Updated {project.lastUpdated}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 4).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-semibold">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <FiZap className="text-blue-500" />
                          <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Features
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                            >
                              {feature}
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
                          className="flex-1 h-12 inline-flex items-center justify-center gap-2 px-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <FiGithub />
                          <span className="text-sm">View Code</span>
                        </a>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub Stats */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-12 shadow-2xl">
              {/* Background effects */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
              
              <div className="relative">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                      GitHub Activity
                    </h3>
                    <p className="text-gray-300 text-lg max-w-2xl">
                      26+ repositories showcasing full-stack development, cloud security, DevOps pipelines, and DSA practice with modern tech stacks
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
                      >
                        <div className="text-3xl font-bold mb-2">{stat.value}</div>
                        <div className="text-gray-300 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <motion.a
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/ajitdev01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    <FiGithub className="text-xl" />
                    <span>Visit GitHub Profile</span>
                    <FiExternalLink />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Portfolio Highlights */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80 rounded-2xl p-12 backdrop-blur-sm border border-white/30 shadow-xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Portfolio Highlights
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Specialized expertise across multiple technology stacks and development domains
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "MERN Stack",
                    description: "Full-stack JavaScript applications",
                    count: 3,
                    icon: <FiDatabase />,
                    gradient: "from-blue-500/20 to-cyan-500/20",
                  },
                  {
                    title: "Cloud & Security",
                    description: "AWS infrastructure & security",
                    count: 2,
                    icon: <FiCloud />,
                    gradient: "from-emerald-500/20 to-teal-500/20",
                  },
                  {
                    title: "DevOps Pipeline",
                    description: "CI/CD & containerization",
                    count: 2,
                    icon: <FiGitPullRequest />,
                    gradient: "from-purple-500/20 to-pink-500/20",
                  },
                  {
                    title: "DSA Practice",
                    description: "Algorithm implementations",
                    count: 1,
                    icon: <FiCode />,
                    gradient: "from-amber-500/20 to-orange-500/20",
                  },
                ].map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className={`p-6 rounded-2xl ${highlight.gradient} backdrop-blur-sm border border-white/30`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center">
                        <div className="text-blue-600 text-xl">
                          {highlight.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          {highlight.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          {highlight.description}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-900">{highlight.count}</span>
                      <span className="text-gray-600 text-sm ml-1">projects</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Want to See More?
              </h3>
              <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                Explore detailed project documentation, code samples, and ongoing development work on GitHub
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/ajitdev01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl font-semibold hover:from-black hover:to-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[220px]"
                >
                  <FiGithub className="text-xl" />
                  Explore GitHub
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-xl font-semibold hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-200 hover:border-blue-300 min-w-[220px]"
                >
                  <FiSend className="text-xl" />
                  Discuss Project
                </motion.a>
              </div>
              <p className="text-gray-500 text-sm mt-8">
                Also check out my{" "}
                <a href="/resume.pdf" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                  resume
                </a>{" "}
                for more project details and technical specifications
              </p>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Projects;