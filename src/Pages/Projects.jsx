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
  FiUserCheck, FiMapPin, FiBriefcase, FiAward, FiTarget,
  FiBarChart2, FiActivity, FiSmartphone, FiGlobe
} from "react-icons/fi";

// ========== PROJECT DATA (Full Stack Engineer Focus) ==========
const projects = [
  {
    id: 1,
    title: "IRCTC Railway System Clone",
    description: "A comprehensive railway booking system with user authentication, seat selection, payment integration, real-time availability, and admin dashboard built with microservices-ready architecture.",
    shortDescription: "Production-grade railway booking platform with real-time seat selection",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Redis", "Socket.io"],
    category: "Full Stack",
    subcategory: "MERN Stack",
    github: "https://github.com/ajitdev01/lamp-project/tree/main/IRCTC-Clone",
    liveDemo: "https://github.com/ajitdev01",
    icon: FiServer,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Real-time Booking", "Admin Panel", "Payment Gateway", "Email Notifications", "Seat Selection", "Booking History", "Live Availability"],
    complexity: "Advanced",
    stars: 28,
    lastUpdated: "2 weeks ago",
    highlight: true,
    learningOutcome: "Microservices patterns, real-time updates, transaction management"
  },
  {
    id: 2,
    title: "MERN Full Stack Learning Repository",
    description: "45+ structured lectures covering React, Node.js, Express, MongoDB, and full-stack integration. Includes BiKart e-commerce platform, JWT authentication, Multer file uploads, and MVC architecture patterns.",
    shortDescription: "45+ lectures • E-commerce (BiKart) • JWT Auth • MVC patterns",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Multer", "Redux", "Tailwind"],
    category: "Full Stack",
    subcategory: "MERN Stack",
    github: "https://github.com/ajitdev01/mern-fullstack",
    liveDemo: "https://github.com/ajitdev01",
    icon: FiBook,
    gradient: "from-purple-500 to-violet-500",
    features: ["45+ Structured Lectures", "BiKart E-commerce", "JWT Authentication", "Multer Uploads", "MVC Architecture", "REST APIs", "Production Patterns"],
    complexity: "Advanced",
    stars: 67,
    lastUpdated: "1 week ago",
    highlight: true,
    learningOutcome: "Teaching as mastery — production-ready full stack architecture"
  },
  {
    id: 3,
    title: "LAMP Stack Authentication System",
    description: "Enterprise-ready PHP + MySQL backend with secure authentication, email OTP verification, session management, and complete CRUD operations for internal tools and admin dashboards.",
    shortDescription: "PHP/MySQL enterprise auth with OTP & CRUD",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Nodemailer", "Bootstrap"],
    category: "Full Stack",
    subcategory: "LAMP Stack",
    github: "https://github.com/ajitdev01/lamp-project",
    liveDemo: "https://ajitdev.com",
    icon: FiDatabase,
    gradient: "from-emerald-500 to-teal-500",
    features: ["Secure Authentication", "Email OTP Verification", "Session Management", "CRUD Operations", "Admin Dashboard", "Password Hashing"],
    complexity: "Intermediate",
    stars: 24,
    lastUpdated: "3 weeks ago",
    highlight: false,
    learningOutcome: "Traditional enterprise stack, server-side rendering, legacy system integration"
  },
  {
    id: 4,
    title: "DSA Journey Repository",
    description: "300+ optimized Data Structures & Algorithms solutions with detailed time/space complexity analysis. Daily practice following NeetCode roadmap — Arrays, Trees, Graphs, Recursion, and Dynamic Programming.",
    shortDescription: "300+ LeetCode solutions • Complexity analysis • Daily streak",
    tech: ["C++", "DSA", "STL", "LeetCode", "NeetCode", "VS Code"],
    category: "DSA",
    subcategory: "Problem Solving",
    github: "https://github.com/ajitdev01/DSA-Journey-2026",
    liveDemo: "#",
    icon: FiBarChart2,
    gradient: "from-amber-500 to-orange-500",
    features: ["300+ Solutions", "Complexity Analysis", "Clean Code", "STL Usage", "Pattern Problems", "Competitive Programming", "Weekly Contests"],
    complexity: "Intermediate",
    stars: 82,
    lastUpdated: "4 days ago",
    highlight: true,
    learningOutcome: "Algorithmic thinking — foundation for scalable systems"
  },
  {
    id: 5,
    title: "Next.js SEO-Optimized Blog Platform",
    description: "High-performance blog platform with Next.js SSR/SSG, structured data (JSON-LD), OpenGraph optimization, Core Web Vitals scoring 95+, and automated sitemap generation.",
    shortDescription: "SSR/SSG • Core Web Vitals 95+ • JSON-LD structured data",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Vercel", "Schema.org"],
    category: "Frontend",
    subcategory: "Next.js",
    github: "#",
    liveDemo: "#",
    icon: FiGlobe,
    gradient: "from-rose-500 to-pink-500",
    features: ["SSR/SSG Hybrid", "JSON-LD Structured Data", "Core Web Vitals 95+", "Automatic Sitemap", "OpenGraph Tags", "MDX Support", "Dark Mode"],
    complexity: "Advanced",
    stars: 41,
    lastUpdated: "2 weeks ago",
    highlight: true,
    learningOutcome: "SEO engineering — ranking apps in competitive markets"
  },
  {
    id: 6,
    title: "BiKart E-commerce Platform",
    description: "Full-featured e-commerce platform with product management, cart system, user reviews, wishlist, payment integration, and order tracking — built as part of the MERN learning series.",
    shortDescription: "Full e-commerce • Cart • Payments • Product management",
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe", "JWT"],
    category: "Full Stack",
    subcategory: "MERN Stack",
    github: "#",
    liveDemo: "#",
    icon: FiPackage,
    gradient: "from-indigo-500 to-blue-500",
    features: ["Product Catalog", "Shopping Cart", "User Reviews", "Wishlist", "Payment Integration", "Order Tracking", "Admin Panel"],
    complexity: "Advanced",
    stars: 53,
    lastUpdated: "2 weeks ago",
    highlight: true,
    learningOutcome: "End-to-end e-commerce — real revenue-ready architecture"
  },
  {
    id: 7,
    title: "DevOps CI/CD Pipeline with GitHub Actions",
    description: "Automated CI/CD pipeline with GitHub Actions for MERN applications — linting, testing, building, and deploying to AWS EC2 with zero-downtime strategies.",
    shortDescription: "GitHub Actions • AWS EC2 • Automated deployment",
    tech: ["GitHub Actions", "AWS EC2", "Docker", "Node.js", "React", "Nginx"],
    category: "DevOps",
    subcategory: "CI/CD",
    github: "#",
    liveDemo: "#",
    icon: FiGitPullRequest,
    gradient: "from-cyan-500 to-blue-500",
    features: ["Automated Testing", "Build Optimization", "Docker Containerization", "AWS EC2 Deployment", "Zero-downtime", "Rollback Strategy", "Monitoring"],
    complexity: "Intermediate",
    stars: 19,
    lastUpdated: "1 month ago",
    highlight: false,
    learningOutcome: "Production deployment automation — DevOps supporting role"
  },
  {
    id: 8,
    title: "Python Automation Scripts Collection",
    description: "Production-ready Python scripts for web scraping, API testing, data processing, file automation, and Linux system administration — used in daily DevOps workflows.",
    shortDescription: "Web scraping • API automation • Data processing",
    tech: ["Python", "Selenium", "Requests", "BeautifulSoup", "Pandas", "Bash"],
    category: "Programming",
    subcategory: "Python",
    github: "https://github.com/ajitdev01/python-core-to-advanced",
    liveDemo: "#",
    icon: FiTerminal,
    gradient: "from-gray-600 to-gray-800",
    features: ["Web Scraping", "API Testing", "Data Processing", "File Automation", "Linux Scripts", "Scheduled Tasks", "Logging"],
    complexity: "Intermediate",
    stars: 27,
    lastUpdated: "3 weeks ago",
    highlight: false,
    learningOutcome: "Automation mindset — efficiency in every workflow"
  }
];

// ========== FILTERS (Full Stack Engineer Focus) ==========
const filterCategories = [
  { id: "All", label: "All Projects" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "MERN Stack", label: "MERN Stack" },
  { id: "LAMP Stack", label: "LAMP Stack" },
  { id: "Next.js", label: "Next.js" },
  { id: "DSA", label: "DSA • Problem Solving" },
  { id: "Frontend", label: "Frontend" },
  { id: "DevOps", label: "DevOps (Supporting)" }
];

// ========== STATS (DSA + Full Stack Focus) ==========
const stats = [
  { value: "300+", label: "LeetCode Problems", icon: FiBarChart2, gradient: "from-blue-500/15 to-cyan-500/15", color: "text-blue-600", highlight: true },
  { value: "150+", label: "Day Streak", icon: FiTrendingUp, gradient: "from-emerald-500/15 to-teal-500/15", color: "text-emerald-600" },
  { value: "8", label: "Live Projects", icon: FiFolder, gradient: "from-purple-500/15 to-violet-500/15", color: "text-purple-600" },
  { value: "45+", label: "Lectures Created", icon: FiBook, gradient: "from-amber-500/15 to-orange-500/15", color: "text-amber-600" }
];

// ========== PORTFOLIO HIGHLIGHTS ==========
const highlights = [
  { title: "MERN Stack Mastery", description: "Full-stack JavaScript applications", count: 4, icon: FiDatabase, gradient: "from-blue-500/15 to-cyan-500/15" },
  { title: "DSA Problem Solving", description: "300+ LeetCode solutions", count: 1, icon: FiBarChart2, gradient: "from-amber-500/15 to-orange-500/15", highlight: true },
  { title: "SEO Engineering", description: "Structured data & Core Web Vitals", count: 1, icon: FiGlobe, gradient: "from-rose-500/15 to-pink-500/15" },
  { title: "Production Mindset", description: "Real-world scalable apps", count: 8, icon: FiZap, gradient: "from-emerald-500/15 to-teal-500/15" }
];

// ========== STRUCTURED DATA (SEO) ==========
const projectsForSchema = projects.map(p => ({
  "@type": "SoftwareSourceCode",
  name: p.title,
  description: p.description,
  programmingLanguage: p.tech.join(", "),
  codeRepository: p.github,
  author: { "@type": "Person", name: "Ajit Kumar", url: "https://ajitdev.com" }
}));

const projectListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Full Stack Engineer Portfolio — Ajit Kumar",
  description: "Production-grade MERN, LAMP, Next.js projects with 300+ DSA problems solved. Full Stack Developer portfolio from India.",
  url: "https://ajitdev.com/projects",
  numberOfItems: projects.length,
  itemListElement: projects.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "SoftwareSourceCode",
      name: p.title,
      description: p.description,
      programmingLanguage: p.tech.join(", "),
      codeRepository: p.github
    }
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ajitdev.com" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://ajitdev.com/projects" }
  ]
};

// ========== ANIMATION VARIANTS ==========
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  hover: { scale: 1.02, y: -6, transition: { duration: 0.2 } }
};

// ========== MAIN COMPONENT ==========
const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(p => 
      p.category === activeFilter || 
      p.subcategory === activeFilter ||
      p.tech.includes(activeFilter)
    );
  }, [activeFilter]);

  const filtersWithCounts = useMemo(() => 
    filterCategories.map(f => ({
      ...f,
      count: f.id === "All" 
        ? projects.length 
        : projects.filter(p => p.category === f.id || p.subcategory === f.id).length
    })), []
  );

  return (
    <>
      <Helmet>
        <title>Full Stack Engineer Portfolio | MERN • Next.js • 300+ DSA | Ajit Kumar</title>
        <meta 
          name="description" 
          content="Full Stack Engineer specializing in MERN, LAMP, Next.js. 300+ LeetCode problems solved. Production-grade projects: IRCTC clone, E-commerce platform, SEO-optimized apps. Based in India, available worldwide."
        />
        <link rel="canonical" href="https://ajitdev.com/projects" />
        <meta name="author" content="Ajit Kumar" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Katihar, Bihar, India" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Full Stack Engineer Portfolio — Ajit Kumar" />
        <meta property="og:description" content="MERN, LAMP, Next.js projects with 300+ DSA problems solved. Production-ready full stack developer from India." />
        <meta property="og:url" content="https://ajitdev.com/projects" />
        <meta property="og:site_name" content="Ajit Kumar Portfolio" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Full Stack Engineer — MERN • Next.js • DSA 300+" />
        <meta name="twitter:description" content="Production-grade full stack applications and DSA portfolio" />
        
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(projectListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      >
        {/* Background decoration */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-emerald-500/4 rounded-full blur-3xl" />
        </div>

        <Header />

        <main className="flex-grow pt-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            
            {/* === HIDDEN SEO CONTENT (Crawlable, invisible) === */}
            <section className="sr-only" aria-label="Full Stack Engineer Portfolio Overview">
              <h1>Full Stack Engineer Portfolio — Ajit Kumar</h1>
              <p>
                Ajit Kumar is a Full Stack Engineer from Katihar, Bihar, India specializing in 
                MERN Stack (MongoDB, Express.js, React.js, Node.js), LAMP Stack (Linux, Apache, MySQL, PHP), 
                and Next.js for SEO-optimized applications. With 300+ LeetCode problems solved and 
                production-grade projects including IRCTC Railway System Clone, BiKart E-commerce Platform, 
                and a 45+ lecture MERN learning repository, Ajit demonstrates real-world engineering capability.
                Available for remote Full Stack Engineer roles worldwide.
              </p>
            </section>

            {/* === PAGE HEADER === */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <motion.div variants={itemVariants} className="inline-flex p-5 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-2xl mb-6 border border-white/40">
                <FiFolder className="text-4xl text-blue-600" />
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                Full Stack Engineer
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                MERN • LAMP • Next.js • <span className="font-semibold text-amber-600">300+ DSA problems solved</span>
              </motion.p>

              <motion.div variants={itemVariants} className="flex justify-center gap-3 mt-6 flex-wrap">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm shadow-sm">
                  <FiMapPin className="w-4 h-4 text-blue-500" />
                  Katihar, Bihar, India
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm shadow-sm">
                  <FiBriefcase className="w-4 h-4 text-emerald-500" />
                  Full Stack Engineer • Problem Solver
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-200 text-sm text-amber-700 shadow-sm">
                  <FiBarChart2 className="w-4 h-4" />
                  LeetCode 300+ • 150 Day Streak
                </span>
              </motion.div>

              <motion.div variants={itemVariants} className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mt-8 rounded-full" />
            </motion.section>

            {/* === MOBILE FILTER BUTTON === */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50"
              aria-label={isMobileMenuOpen ? "Close filter" : "Open project filter"}
            >
              {isMobileMenuOpen ? <FiChevronDown className="w-5 h-5" /> : <FiChevronUp className="w-5 h-5" />}
            </button>

            {/* === MOBILE FILTER MENU === */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 300 }}
                  className="lg:hidden fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-40 rounded-t-2xl"
                  style={{ maxHeight: "60vh", overflowY: "auto" }}
                >
                  <div className="p-6 space-y-5">
                    <h2 className="text-xl font-bold text-gray-900">Filter Projects</h2>
                    <div className="flex flex-wrap gap-3">
                      {filtersWithCounts.map(f => (
                        <button
                          key={f.id}
                          onClick={() => { setActiveFilter(f.id); setIsMobileMenuOpen(false); }}
                          className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                            activeFilter === f.id
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {f.label} ({f.count})
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* === DESKTOP FILTER BAR === */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex flex-wrap justify-center gap-3 mb-16 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-md"
            >
              {filtersWithCounts.map(f => (
                <motion.button
                  key={f.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeFilter === f.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {f.label} <span className="text-xs opacity-70">({f.count})</span>
                </motion.button>
              ))}
            </motion.div>

            {/* === PROJECTS GRID === */}
            <motion.div
              layout
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-16"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map(project => (
                  <motion.article
                    key={project.id}
                    layout
                    variants={cardVariants}
                    whileHover="hover"
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur transition duration-500" />
                    
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      {/* Header gradient */}
                      <div className={`relative h-36 bg-gradient-to-r ${project.gradient} overflow-hidden flex-shrink-0`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <project.icon className="w-12 h-12 text-white/90" />
                        </div>
                        <div className="absolute top-3 left-3 flex flex-col gap-1">
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-black/40 backdrop-blur-sm">
                            {project.category}
                          </span>
                          {project.highlight && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-amber-300 bg-black/40 backdrop-blur-sm">
                              ★ FEATURED
                            </span>
                          )}
                        </div>
                        <div className="absolute top-3 right-3 flex items-center gap-1 text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                          <FiStar className="w-3.5 h-3.5 text-yellow-300" />
                          <span className="text-xs font-semibold">{project.stars}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        <h2 className="text-lg font-bold text-gray-900 mb-1.5 line-clamp-1">
                          {project.title}
                        </h2>
                        <p className="text-gray-500 mb-3 text-sm leading-relaxed line-clamp-2">
                          {project.shortDescription}
                        </p>

                        {/* Tech stack */}
                        <div className="mb-3 flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 4).map(tech => (
                            <span key={tech} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold">
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded-lg text-xs font-semibold">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Features preview */}
                        <div className="mb-4">
                          <div className="flex items-center gap-1.5 mb-2">
                            <FiZap className="w-3.5 h-3.5 text-blue-500" />
                            <span className="text-xs font-semibold text-gray-500 uppercase">Key Features</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {project.features.slice(0, 2).map(feat => (
                              <span key={feat} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                                {feat}
                              </span>
                            ))}
                            {project.features.length > 2 && (
                              <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">
                                +{project.features.length - 2}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-2 mt-auto">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 h-10 inline-flex items-center justify-center gap-2 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <FiGithub className="w-4 h-4" />
                            Source
                          </a>
                          {project.liveDemo !== "#" && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-colors flex items-center justify-center"
                              aria-label={`Live demo of ${project.title}`}
                            >
                              <FiExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* === STATS SECTION === */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-20"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-10 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10" />
                <div className="relative">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Engineering Credentials</h2>
                    <p className="text-gray-300">Proof of consistency, discipline, and real-world impact</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                      <motion.div key={idx} variants={itemVariants} className="text-center">
                        <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                        <div className="text-gray-300 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* === PORTFOLIO HIGHLIGHTS === */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-20"
            >
              <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-10 border border-blue-100 shadow-lg">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Portfolio Highlights</h2>
                  <p className="text-gray-500 max-w-xl mx-auto">Specialized expertise across multiple domains</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  {highlights.map((h, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                      className={`p-5 rounded-2xl bg-gradient-to-br ${h.gradient} border border-white/60 ${h.highlight ? 'ring-2 ring-amber-300/50' : ''}`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center">
                          <h.icon className="w-5 h-5 text-blue-600" />
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

            {/* === DSA + CONSISTENCY SECTION === */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-16"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 p-10 text-center border border-amber-200">
                <div className="relative z-10">
                  <div className="inline-flex p-4 bg-amber-100 rounded-2xl mb-4">
                    <FiBarChart2 className="text-3xl text-amber-600" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Discipline × Consistency × Growth Mindset
                  </h3>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    300+ LeetCode problems solved • 150+ day active streak • Daily DSA practice via NeetCode roadmap
                  </p>
                  <div className="mt-6 flex justify-center gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Arrays & Hashing ✅</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Recursion ✅</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Trees 🔄</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Graphs 🔄</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">DP 📈</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* === HIDDEN INTERNAL LINKS (SEO) === */}
            <nav className="sr-only" aria-label="Site navigation">
              <ul>
                <li><a href="/">Home — Full Stack Engineer</a></li>
                <li><a href="/skills">Technical Skills — MERN • LAMP • Next.js • DSA</a></li>
                <li><a href="/projects">Full Stack Portfolio — 8 Production Projects</a></li>
                <li><a href="/contact">Hire Full Stack Engineer — Contact</a></li>
                <li><a href="https://github.com/ajitdev01">GitHub — Code Portfolio</a></li>
                <li><a href="https://leetcode.com/ajitdev01">LeetCode — 300+ Problems</a></li>
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