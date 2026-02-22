import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiCode, FiGithub, FiExternalLink, FiStar, FiTrendingUp,
  FiFolder, FiSend, FiBook, FiDatabase, FiCloud, FiServer,
  FiCpu, FiGitBranch, FiChevronDown, FiChevronUp,
  FiGitPullRequest, FiPackage, FiLock, FiZap, FiTerminal,
} from "react-icons/fi";

// ========== DATA (outside component — no re-creation on render) ==========

const projects = [
  {
    id: 1,
    title: "IRCTC Railway System Clone",
    description: "A comprehensive railway booking system with user authentication, seat selection, payment integration, and admin dashboard built with modern microservices architecture.",
    shortDescription: "Full-featured railway booking platform with microservices",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "REST API", "Redis"],
    category: "Full Stack",
    subcategory: "MERN Stack",
    github: "https://github.com/ajitdev01/",
    liveDemo: "#",
    icon: FiServer,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Real-time Booking", "Admin Panel", "Payment Gateway", "Email Notifications", "Seat Selection", "Booking History"],
    complexity: "Advanced",
    stars: 24,
    lastUpdated: "2 weeks ago",
  },
  {
    id: 2,
    title: "Library Management System",
    description: "Complete library system with book tracking, member management, fine calculation, and reporting features including QR code scanning and automated notifications.",
    shortDescription: "Digital library management with QR integration",
    tech: ["React", "Node.js", "MySQL", "Express", "Tailwind", "JWT", "QR Code"],
    category: "Full Stack",
    subcategory: "LAMP Stack",
    github: "https://github.com/ajitdev01/",
    liveDemo: "#",
    icon: FiBook,
    gradient: "from-emerald-500 to-teal-500",
    features: ["Book Management", "Member Portal", "Fine System", "Reports", "QR Integration", "Email Alerts"],
    complexity: "Intermediate",
    stars: 18,
    lastUpdated: "1 month ago",
  },
  {
    id: 3,
    title: "Admission Portal System",
    description: "Student admission portal with multi-step form submission, document verification, status tracking, and admin approval workflow supporting bulk data processing.",
    shortDescription: "Student admission processing & document verification",
    tech: ["React", "Express", "MongoDB", "Cloudinary", "Nodemailer", "PDF Generation"],
    category: "Full Stack",
    subcategory: "MERN Stack",
    github: "https://github.com/ajitdev01/",
    liveDemo: "#",
    icon: FiFolder,
    gradient: "from-purple-500 to-pink-500",
    features: ["Multi-step Forms", "Document Upload", "Status Tracking", "Email Notifications", "Admin Dashboard", "Reports"],
    complexity: "Advanced",
    stars: 31,
    lastUpdated: "3 weeks ago",
  },
  {
    id: 4,
    title: "MERN CRUD Application",
    description: "Complete CRUD operations with authentication, authorization, and responsive UI for managing user data including search, filter, and pagination features.",
    shortDescription: "Full-featured user management CRUD with auth",
    tech: ["React", "Express", "MongoDB", "Mongoose", "JWT", "Redux", "Tailwind"],
    category: "Full Stack",
    subcategory: "MERN Stack",
    github: "https://github.com/ajitdev01/mern-fullstack",
    liveDemo: "#",
    icon: FiDatabase,
    gradient: "from-orange-500 to-red-500",
    features: ["Full CRUD", "User Auth", "REST API", "Responsive Design", "Search & Filter", "Pagination"],
    complexity: "Intermediate",
    stars: 45,
    lastUpdated: "1 week ago",
  },
  {
    id: 5,
    title: "Dockerized Web Applications",
    description: "Containerized web applications with multi-service architecture, Docker Compose, and optimized deployment configurations including CI/CD pipeline setup with GitHub Actions.",
    shortDescription: "Multi-service Docker containerization with CI/CD",
    tech: ["Docker", "Node.js", "React", "Nginx", "MongoDB", "Docker Compose", "GitHub Actions"],
    category: "DevOps",
    subcategory: "DevOps / CI-CD",
    github: "https://github.com/ajitdev01/",
    liveDemo: "#",
    icon: FiCloud,
    gradient: "from-cyan-500 to-blue-500",
    features: ["Containerization", "Multi-service", "Docker Compose", "Optimized Images", "CI/CD Pipeline", "Reverse Proxy"],
    complexity: "Intermediate",
    stars: 22,
    lastUpdated: "2 months ago",
  },
  {
    id: 6,
    title: "DSA Practice Repository",
    description: "Comprehensive Data Structures & Algorithms implementations in C++ with optimized solutions, time/space complexity analysis, and detailed explanations for competitive programming.",
    shortDescription: "C++ DSA implementations with complexity analysis",
    tech: ["C++", "DSA", "STL", "VS Code", "Competitive Programming"],
    category: "Programming",
    subcategory: "DSA & Algorithms",
    github: "https://github.com/ajitdev01/DSA-Journey-2026",
    liveDemo: "#",
    icon: FiCode,
    gradient: "from-gray-700 to-gray-900",
    features: ["All DSA Topics", "Optimized Code", "Complexity Analysis", "VS Code Config", "Pattern Problems", "Solutions"],
    complexity: "Beginner",
    stars: 67,
    lastUpdated: "4 days ago",
  },
  {
    id: 7,
    title: "AWS Cloud Security Dashboard",
    description: "Security monitoring dashboard for AWS infrastructure with IAM audit, security group analysis, compliance reporting, and real-time alerting for cloud misconfigurations.",
    shortDescription: "AWS IAM audit & cloud security monitoring",
    tech: ["AWS", "React", "Node.js", "CloudWatch", "IAM", "Security Groups"],
    category: "Cloud",
    subcategory: "Cloud Projects",
    github: "https://github.com/ajitdev01/",
    liveDemo: "#",
    icon: FiLock,
    gradient: "from-rose-500 to-pink-500",
    features: ["IAM Audit", "Security Groups", "Compliance Reports", "Real-time Monitoring", "Alert System", "Dashboard"],
    complexity: "Advanced",
    stars: 19,
    lastUpdated: "1 month ago",
  },
  {
    id: 8,
    title: "Python Automation Scripts",
    description: "Collection of Python automation scripts for file processing, web scraping, API testing, and Linux system administration tasks used in DevOps workflows.",
    shortDescription: "Python DevOps automation & scripting utilities",
    tech: ["Python", "Selenium", "Requests", "Pandas", "BeautifulSoup", "Automation"],
    category: "Programming",
    subcategory: "Python Projects",
    github: "https://github.com/ajitdev01/",
    liveDemo: "#",
    icon: FiTerminal,
    gradient: "from-amber-500 to-orange-500",
    features: ["Web Scraping", "File Processing", "API Testing", "Data Analysis", "System Admin", "Automation"],
    complexity: "Intermediate",
    stars: 28,
    lastUpdated: "2 weeks ago",
  },
];

// ✅ SEO: ItemList + SoftwareSourceCode schema — tells Google these are real software projects
const projectSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ajit Kumar — DevOps & Full Stack Projects Portfolio",
  description: "DevOps engineering, MERN stack, AWS cloud security, Docker, and CI/CD projects by Ajit Kumar from Katihar, Bihar, India.",
  url: "https://ajitdev.com/projects",
  numberOfItems: projects.length,
  itemListElement: projects.map((p, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareSourceCode",
      name: p.title,
      description: p.description,
      programmingLanguage: p.tech.join(", "),
      codeRepository: p.github,
      author: {
        "@type": "Person",
        name: "Ajit Kumar",
        url: "https://ajitdev.com",
      },
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: "https://ajitdev.com" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://ajitdev.com/projects" },
  ],
};

const filterCategories = [
  { id: "All",         label: "All Projects" },
  { id: "Full Stack",  label: "Full Stack"   },
  { id: "MERN Stack",  label: "MERN Stack"   },
  { id: "LAMP Stack",  label: "LAMP Stack"   },
  { id: "DevOps",      label: "DevOps"       },
  { id: "Cloud",       label: "Cloud"        },
  { id: "Programming", label: "Programming"  },
];

const highlights = [
  { title: "MERN Stack",      description: "Full-stack JavaScript applications", count: 3, icon: FiDatabase,    gradient: "from-blue-500/15 to-cyan-500/15"    },
  { title: "Cloud & Security",description: "AWS infrastructure & security",       count: 2, icon: FiCloud,       gradient: "from-emerald-500/15 to-teal-500/15" },
  { title: "DevOps Pipeline", description: "CI/CD & containerization",             count: 2, icon: FiGitPullRequest,gradient:"from-purple-500/15 to-pink-500/15"},
  { title: "DSA Practice",    description: "Algorithm implementations",             count: 1, icon: FiCode,        gradient: "from-amber-500/15 to-orange-500/15" },
];

const stats = [
  { value: "26+", label: "Repositories",   icon: FiFolder,        gradient: "from-blue-500/15 to-cyan-500/15",    color: "text-blue-600"    },
  { value: "31+", label: "Stars",           icon: FiStar,          gradient: "from-amber-500/15 to-orange-500/15", color: "text-amber-600"   },
  { value: "9+",  label: "Recent Commits",  icon: FiGitPullRequest,gradient: "from-emerald-500/15 to-teal-500/15",color: "text-emerald-600" },
  { value: "8",   label: "Projects",        icon: FiCode,          gradient: "from-purple-500/15 to-pink-500/15",  color: "text-purple-600"  },
];

// ========== ANIMATION VARIANTS ==========
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  hover:   { scale: 1.02, y: -6,   transition: { duration: 0.2 } },
};

// ========== MAIN COMPONENT ==========
const Projects = () => {
  const [isLoaded, setIsLoaded]               = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter]       = useState("All");

  // ✅ REMOVED: hoveredProject state was set but never used for rendering

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Mobile scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  // ✅ PERFORMANCE: useMemo — no recomputation on unrelated re-renders
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter(
            (p) => p.category === activeFilter || p.subcategory === activeFilter
          ),
    [activeFilter]
  );

  // Enrich filter categories with live counts
  const filtersWithCounts = useMemo(
    () =>
      filterCategories.map((f) => ({
        ...f,
        count:
          f.id === "All"
            ? projects.length
            : projects.filter((p) => p.category === f.id || p.subcategory === f.id).length,
      })),
    []
  );

  return (
    <>
      {/* ✅ SEO: Full Helmet with all meta tags + structured data */}
      <Helmet>
        <title>DevOps & Full Stack Projects | Ajit Kumar Portfolio — India</title>
        <meta
          name="description"
          content="DevOps, MERN stack, AWS cloud security, Docker containerization, CI/CD automation, and full-stack development projects by Ajit Kumar — DevOps Engineer from Katihar, Bihar, India. Available for remote roles worldwide."
        />
        <link rel="canonical" href="https://ajitdev.com/projects" />
        <meta name="author" content="Ajit Kumar" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Katihar, Bihar, India" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DevOps & Full Stack Projects — Ajit Kumar, India" />
        <meta property="og:description" content="DevOps, AWS, Docker, CI/CD, MERN stack and cloud security portfolio projects by Ajit Kumar." />
        <meta property="og:url" content="https://ajitdev.com/projects" />
        <meta property="og:image" content="https://ajitdev.com/og-image.jpg" />
        <meta property="og:image:alt" content="Ajit Kumar DevOps Projects Portfolio" />
        <meta property="og:site_name" content="Ajit Kumar Portfolio" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevOps & Full Stack Projects — Ajit Kumar" />
        <meta name="twitter:description" content="Explore DevOps engineering, AWS, Docker, CI/CD and full-stack development projects." />
        <meta name="twitter:image" content="https://ajitdev.com/og-image.jpg" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(projectSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col bg-white overflow-hidden"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        {/* Background blobs */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
          <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-emerald-500/6 rounded-full blur-3xl" />
        </div>

        <Header />

        <main className="flex-grow pt-16 relative z-10" role="main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

            {/* ✅ SEO: Hidden topical authority paragraph — crawlable, invisible */}
            <section className="sr-only" aria-label="Projects overview">
              <h2>DevOps Engineering Projects by Ajit Kumar — India</h2>
              <p>
                Ajit Kumar is a DevOps Engineer and Full Stack Developer from Katihar, Bihar, India
                building cloud-native applications using AWS cloud infrastructure, Docker
                containerization, Kubernetes orchestration, and Terraform Infrastructure as Code.
                His portfolio includes MERN stack platforms, CI/CD automation pipelines with GitHub
                Actions and Jenkins, DevSecOps implementations, and AWS cloud security dashboards.
                All projects follow security-first engineering principles and are available for
                review on GitHub. Ajit Kumar is available for remote DevOps and full-stack
                engineering roles worldwide.
              </p>
            </section>

            {/* ===== PAGE HEADER ===== */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
              aria-labelledby="projects-heading"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex p-5 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-2xl mb-6 border border-white/40"
                aria-hidden="true"
              >
                <FiFolder className="text-4xl text-blue-600" />
              </motion.div>

              <motion.h1
                id="projects-heading"
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
                itemProp="name"
              >
                My Projects
              </motion.h1>

              {/* ✅ SEO: Visible topical authority with natural keyword integration */}
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-6"
                itemProp="description"
              >
                This portfolio showcases real-world <strong className="text-gray-800">DevOps engineering</strong> projects including{" "}
                <strong className="text-gray-800">AWS cloud infrastructure</strong>,{" "}
                <strong className="text-gray-800">Docker containerization</strong>, CI/CD automation,
                and <strong className="text-gray-800">MERN stack full-stack development</strong>{" "}
                — built by a remote DevOps Engineer from India.
              </motion.p>

              <motion.div variants={itemVariants} className="flex justify-center gap-3 mt-6 flex-wrap">
                {["MERN Stack", "LAMP Stack", "DevOps & CI/CD", "Cloud & Security", "Python", "DSA Practice"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-xl text-sm font-semibold border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mt-8 rounded-full"
                aria-hidden="true"
              />
            </motion.section>

            {/* ===== MOBILE FAB ===== */}
            <button
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50"
              aria-label={isMobileMenuOpen ? "Close project filter" : "Open project filter"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FiChevronDown className="w-5 h-5" /> : <FiChevronUp className="w-5 h-5" />}
            </button>

            {/* ===== MOBILE MENU ===== */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  id="mobile-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Filter projects"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 300 }}
                  className="lg:hidden fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-40 rounded-t-2xl"
                  style={{ maxHeight: "65vh", overflowY: "auto" }}
                >
                  <div className="p-6 space-y-5">
                    <h2 className="text-xl font-bold text-gray-900">Filter Projects</h2>
                    <div className="flex flex-wrap gap-3">
                      {filtersWithCounts.map((f) => (
                        <motion.button
                          key={f.id}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => { setActiveFilter(f.id); setIsMobileMenuOpen(false); }}
                          aria-pressed={activeFilter === f.id}
                          className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all relative ${
                            activeFilter === f.id
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {f.label}
                          {f.count > 0 && (
                            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                              {f.count}
                            </span>
                          )}
                        </motion.button>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {stats.slice(0, 2).map((s, i) => (
                        <div key={i} className={`p-4 rounded-xl bg-gradient-to-br ${s.gradient}`}>
                          <div className="text-xl font-bold text-gray-900">{s.value}</div>
                          <div className="text-sm text-gray-600">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ===== DESKTOP FILTER BAR ===== */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex flex-wrap justify-center gap-3 mb-16 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-md"
              role="group"
              aria-label="Filter projects by category"
            >
              {filtersWithCounts.map((f) => (
                <motion.button
                  key={f.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(f.id)}
                  aria-pressed={activeFilter === f.id}
                  className={`px-5 py-3 rounded-xl text-sm font-medium transition-all relative overflow-hidden ${
                    activeFilter === f.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {f.label}
                  <span className="ml-1.5 text-xs opacity-70">({f.count})</span>
                  {activeFilter === f.id && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* ===== PROJECTS GRID ===== */}
            {/* ✅ PERFORMANCE: whileInView — cards animate when scrolled into view */}
            <motion.div
              layout
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-16"
              role="list"
              aria-label="Project cards"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    layout
                    variants={cardVariants}
                    whileHover="hover"
                    exit={{ opacity: 0, scale: 0.9 }}
                    role="listitem"
                    className="relative group"
                    itemScope
                    itemType="https://schema.org/SoftwareSourceCode"
                  >
                    <meta itemProp="codeRepository" content={project.github} />
                    <meta itemProp="author" content="Ajit Kumar" />

                    {/* Hover glow */}
                    <div
                      className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur transition duration-500"
                      aria-hidden="true"
                    />

                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      {/* Project header gradient */}
                      <div className={`relative h-36 bg-gradient-to-r ${project.gradient} overflow-hidden flex-shrink-0`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <project.icon className="w-12 h-12 text-white/90" aria-hidden="true" />
                        </div>

                        {/* Badges */}
                        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                          <div className="flex flex-col gap-1.5">
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-black/40 backdrop-blur-sm">
                              {project.category}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-xs text-white/90 bg-black/30 backdrop-blur-sm">
                              {project.subcategory}
                            </span>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-1 text-white/90">
                              <FiStar className="w-3.5 h-3.5 text-yellow-300" aria-hidden="true" />
                              <span className="text-sm font-semibold">{project.stars}</span>
                            </div>
                            <span className="text-xs text-white/70">{project.complexity}</span>
                          </div>
                        </div>

                        <div className="absolute bottom-3 left-3">
                          <span className="text-xs text-white/75 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded">
                            Updated {project.lastUpdated}
                          </span>
                        </div>
                      </div>

                      {/* Card content */}
                      <div className="p-5 flex flex-col flex-grow">
                        {/* ✅ SEO: h2 + itemProp="name" on project title */}
                        <h2
                          className="text-lg font-bold text-gray-900 mb-1.5 line-clamp-1"
                          itemProp="name"
                        >
                          {project.title}
                        </h2>

                        <p
                          className="text-gray-500 mb-3 text-sm leading-relaxed line-clamp-2 flex-grow-0"
                          itemProp="description"
                        >
                          {project.shortDescription}
                        </p>

                        {/* Tech stack */}
                        <div className="mb-3 flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 4).map((tech) => (
                            // ✅ SEO: itemProp on each technology
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold"
                              itemProp="programmingLanguage"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded-lg text-xs font-semibold">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Features */}
                        <div className="mb-4">
                          <div className="flex items-center gap-1.5 mb-2" aria-hidden="true">
                            <FiZap className="w-3.5 h-3.5 text-blue-500" />
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Features
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {project.features.slice(0, 3).map((feat) => (
                              <span key={feat} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex gap-2 mt-auto">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 h-10 inline-flex items-center justify-center gap-2 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm"
                            aria-label={`View source code for ${project.title} on GitHub`}
                            itemProp="codeRepository"
                          >
                            <FiGithub className="w-4 h-4" aria-hidden="true" />
                            View Code
                          </a>
                          {project.liveDemo !== "#" && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-colors shadow-sm flex items-center justify-center"
                              aria-label={`Live demo of ${project.title}`}
                            >
                              <FiExternalLink className="w-4 h-4" aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* ===== GITHUB STATS ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-16"
              aria-labelledby="github-heading"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white p-12 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10" aria-hidden="true" />

                <div className="relative">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="text-center lg:text-left">
                      <h2 id="github-heading" className="text-3xl lg:text-4xl font-bold mb-4">
                        GitHub Activity
                      </h2>
                      <p className="text-gray-300 text-lg max-w-xl">
                        26+ repositories showcasing DevOps pipelines, cloud security, full-stack
                        development, and DSA practice — all open source on GitHub.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                      {stats.map((s, i) => (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                        >
                          <div className="text-3xl font-bold mb-1">{s.value}</div>
                          <div className="text-gray-400 text-xs">{s.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 text-center">
                    <motion.a
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://github.com/ajitdev01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl"
                      aria-label="Visit Ajit Kumar's GitHub profile"
                    >
                      <FiGithub className="w-5 h-5" aria-hidden="true" />
                      Visit GitHub Profile
                      <FiExternalLink className="w-4 h-4" aria-hidden="true" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* ===== PORTFOLIO HIGHLIGHTS ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-16"
              aria-labelledby="highlights-heading"
            >
              <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-10 border border-blue-100 shadow-lg">
                <div className="text-center mb-10">
                  <h2 id="highlights-heading" className="text-3xl font-bold text-gray-900 mb-3">
                    Portfolio Highlights
                  </h2>
                  <p className="text-gray-500 max-w-xl mx-auto">
                    Specialized expertise across multiple technology stacks and engineering domains
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                      className={`p-6 rounded-2xl bg-gradient-to-br ${h.gradient} border border-white/60`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-11 h-11 bg-white/80 rounded-xl flex items-center justify-center shadow-sm">
                          <h.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{h.title}</p>
                          <p className="text-xs text-gray-500">{h.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900">{h.count}</span>
                        <span className="text-gray-500 text-sm ml-1">projects</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* ✅ SEO: Hidden internal linking — helps Google crawl depth */}
            <nav className="sr-only" aria-label="Site navigation">
              <ul>
                <li><a href="/">Home — DevOps Engineer Katihar Bihar India</a></li>
                <li><a href="/about">About Ajit Kumar — Remote DevOps Engineer</a></li>
                <li><a href="/skills">Technical Skills — AWS Docker Kubernetes Terraform</a></li>
                <li><a href="/projects">DevOps & Full Stack Projects Portfolio</a></li>
                <li><a href="/contact">Hire DevOps Engineer — Contact Ajit Kumar</a></li>
              </ul>
            </nav>

          </div>
        </main>

        <Footer />
      </motion.div>
    </>
  );
};

export default Projects;