import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiCode, FiServer, FiDatabase, FiCloud, FiShield, FiTrendingUp,
  FiCheck, FiInfo, FiSend, FiCpu, FiLayers, FiGitBranch,
  FiUserCheck, FiChevronDown, FiChevronUp, FiTerminal, FiGlobe,
  FiLock, FiZap, FiGitPullRequest, FiPackage, FiMonitor, FiTool,
} from "react-icons/fi";

// ========== STRUCTURED DATA (outside component — no re-creation on render) ==========

const skillsForSchema = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS",
  "Responsive Design", "Node.js", "Express.js", "REST APIs", "Authentication",
  "MongoDB", "Mongoose ODM", "MySQL", "Schema Design",
  "AWS Cloud Services", "Docker Containerization", "Kubernetes Orchestration",
  "Terraform Infrastructure as Code", "CI/CD Automation", "GitHub Actions",
  "OWASP Top 10", "DevSecOps", "Encryption", "Security Headers",
  "Git & GitHub", "Linux System Administration", "Postman", "TypeScript",
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ajit Kumar",
  url: "https://ajitdev.com",
  jobTitle: "DevOps Engineer & Full Stack Developer",
  knowsAbout: skillsForSchema,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Katihar",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",   item: "https://ajitdev.com" },
    { "@type": "ListItem", position: 2, name: "Skills", item: "https://ajitdev.com/skills" },
  ],
};

// ========== SKILL DATA ==========
// ✅ IMPROVED: Renamed weak labels ("AWS Basics" → "AWS Cloud Services") for stronger keyword signals

const skillCategories = [
  {
    title: "Frontend Development",
    filter: "Frontend",
    icon: FiCode,
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-600",
    description: "Modern UI/UX development with responsive design",
    proficiency: 85,
    level: "Advanced",
    skills: [
      { name: "HTML5",                  icon: FiGlobe,      proficiency: 90, level: "Expert"   },
      { name: "CSS3",                   icon: FiLayers,     proficiency: 88, level: "Advanced" },
      { name: "JavaScript (ES6+)",      icon: FiCode,       proficiency: 85, level: "Advanced" },
      { name: "React.js",               icon: FiCpu,        proficiency: 85, level: "Advanced" },
      { name: "Tailwind CSS",           icon: FiLayers,     proficiency: 90, level: "Expert"   },
      { name: "Responsive Design",      icon: FiMonitor,    proficiency: 88, level: "Advanced" },
      { name: "Component Architecture", icon: FiPackage,    proficiency: 82, level: "Advanced" },
    ],
  },
  {
    title: "Backend Development",
    filter: "Backend",
    icon: FiServer,
    gradient: "from-emerald-500 to-teal-500",
    color: "text-emerald-600",
    description: "Server-side logic, APIs, and database integration",
    proficiency: 80,
    level: "Advanced",
    skills: [
      { name: "Node.js",              icon: FiServer,    proficiency: 85, level: "Advanced"  },
      { name: "Express.js",           icon: FiTrendingUp,proficiency: 82, level: "Advanced"  },
      { name: "REST APIs",            icon: FiGitBranch, proficiency: 85, level: "Advanced"  },
      { name: "CRUD Operations",      icon: FiDatabase,  proficiency: 88, level: "Advanced"  },
      { name: "Middleware & Routing", icon: FiTrendingUp,proficiency: 80, level: "Advanced"  },
      { name: "Authentication & JWT", icon: FiUserCheck, proficiency: 78, level: "Proficient"},
    ],
  },
  {
    title: "Database & Data",
    filter: "Database",
    icon: FiDatabase,
    gradient: "from-purple-500 to-violet-500",
    color: "text-purple-600",
    description: "Data modeling, storage, and management solutions",
    proficiency: 75,
    level: "Proficient",
    skills: [
      { name: "MongoDB Atlas",  icon: FiDatabase, proficiency: 80, level: "Proficient"   },
      { name: "Mongoose ODM",   icon: FiDatabase, proficiency: 78, level: "Proficient"   },
      { name: "MySQL",          icon: FiDatabase, proficiency: 65, level: "Intermediate" },
      { name: "Schema Design",  icon: FiLayers,   proficiency: 75, level: "Proficient"   },
      { name: "Data Validation",icon: FiCheck,    proficiency: 82, level: "Advanced"     },
    ],
  },
  {
    title: "Cloud & DevOps",
    filter: "Cloud",
    icon: FiCloud,
    gradient: "from-indigo-500 to-blue-500",
    color: "text-indigo-600",
    description: "Cloud infrastructure and deployment automation",
    proficiency: 75,
    level: "Proficient",
    skills: [
      { name: "AWS Cloud Services (EC2, S3, IAM, VPC)", icon: FiCloud,         proficiency: 75, level: "Proficient"   },
      { name: "Docker Containerization",                icon: FiPackage,       proficiency: 72, level: "Proficient"   },
      { name: "Kubernetes Orchestration",               icon: FiCpu,           proficiency: 65, level: "Intermediate" },
      { name: "Terraform (IaC)",                        icon: FiTrendingUp,    proficiency: 68, level: "Intermediate" },
      { name: "CI/CD Automation",                       icon: FiGitPullRequest,proficiency: 70, level: "Proficient"   },
      { name: "GitHub Actions",                         icon: FiGitPullRequest,proficiency: 70, level: "Proficient"   },
    ],
  },
  {
    title: "Security Engineering",
    filter: "Security",
    icon: FiShield,
    gradient: "from-rose-500 to-pink-500",
    color: "text-rose-600",
    description: "Security best practices and threat mitigation",
    proficiency: 75,
    level: "Proficient",
    skills: [
      { name: "OWASP Top 10",          icon: FiShield, proficiency: 80, level: "Proficient"   },
      { name: "JWT & OAuth",           icon: FiLock,   proficiency: 82, level: "Advanced"     },
      { name: "Encryption & Hashing",  icon: FiLock,   proficiency: 75, level: "Proficient"   },
      { name: "DevSecOps Practices",   icon: FiShield, proficiency: 72, level: "Proficient"   },
      { name: "Security Headers",      icon: FiCheck,  proficiency: 78, level: "Proficient"   },
    ],
  },
  {
    title: "Tools & Workflow",
    filter: "Tools",
    icon: FiTool,
    gradient: "from-amber-500 to-orange-500",
    color: "text-amber-600",
    description: "Development tools and productivity workflow",
    proficiency: 85,
    level: "Advanced",
    skills: [
      { name: "Git & GitHub",               icon: FiGitBranch, proficiency: 88, level: "Advanced" },
      { name: "Linux System Administration", icon: FiTerminal,  proficiency: 78, level: "Proficient"},
      { name: "Postman",                    icon: FiSend,      proficiency: 85, level: "Advanced" },
      { name: "VS Code",                    icon: FiCode,      proficiency: 90, level: "Expert"   },
      { name: "NPM / Yarn",                 icon: FiPackage,   proficiency: 88, level: "Advanced" },
      { name: "TypeScript",                 icon: FiCode,      proficiency: 75, level: "Proficient"},
    ],
  },
];

const FILTERS = ["All", "Frontend", "Backend", "Database", "Cloud", "Security", "Tools"];

const stats = [
  { value: skillCategories.flatMap(c => c.skills).length, label: "Total Skills",   icon: FiTrendingUp, gradient: "from-blue-500/15 to-cyan-500/15",   color: "text-blue-600"   },
  { value: skillCategories.length,                         label: "Categories",     icon: FiLayers,     gradient: "from-emerald-500/15 to-teal-500/15", color: "text-emerald-600"},
  { value: "100%",                                         label: "Learning Rate",  icon: FiZap,        gradient: "from-purple-500/15 to-violet-500/15",color: "text-purple-600" },
  { value: "2+",                                           label: "Years Experience",icon: FiTrendingUp, gradient: "from-amber-500/15 to-orange-500/15", color: "text-amber-600"  },
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
  hidden: { scale: 0.96, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  hover:   { scale: 1.02, y: -6, transition: { duration: 0.2 } },
};

// ========== MAIN COMPONENT ==========
const Skills = () => {
  const [isLoaded, setIsLoaded]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory]     = useState("All");

  // ✅ REMOVED: hoveredCard state was unused

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  // ✅ PERFORMANCE: useMemo prevents recomputing on every render
  const filteredSkills = useMemo(
    () =>
      activeCategory === "All"
        ? skillCategories
        : skillCategories.filter((c) => c.filter === activeCategory),
    [activeCategory]
  );

  // Mobile menu scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ✅ SEO: Helmet with all meta, canonical, OG, structured data */}
      <Helmet>
        <title>Technical Skills | DevOps Engineer & Full Stack Developer — Ajit Kumar</title>
        <meta
          name="description"
          content="Technical skills of Ajit Kumar — DevOps Engineer from Katihar, Bihar, India. Expertise in AWS, Docker, Kubernetes, Terraform, CI/CD, DevSecOps, MERN stack, and cloud security."
        />
        <link rel="canonical" href="https://ajitdev.com/skills" />
        <meta name="author" content="Ajit Kumar" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Katihar, Bihar, India" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Technical Skills — Ajit Kumar, DevOps Engineer India" />
        <meta property="og:description" content="DevOps, DevSecOps, AWS, Docker, Kubernetes, Terraform, CI/CD, and MERN stack expertise by Ajit Kumar." />
        <meta property="og:url" content="https://ajitdev.com/skills" />
        <meta property="og:image" content="https://ajitdev.com/og-image.jpg" />
        <meta property="og:site_name" content="Ajit Kumar Portfolio" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technical Skills — Ajit Kumar, DevOps Engineer" />
        <meta name="twitter:description" content="AWS, Docker, Kubernetes, CI/CD, MERN stack and DevSecOps skills." />
        <meta name="twitter:image" content="https://ajitdev.com/og-image.jpg" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col bg-white overflow-hidden"
        itemScope
        itemType="https://schema.org/Person"
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

            {/* ✅ SEO: Hidden topical authority block — crawlable, invisible to users */}
            <section className="sr-only" aria-label="Skills overview">
              <h2>DevOps and Cloud Engineering Skills — Ajit Kumar</h2>
              <p>
                Ajit Kumar is a DevOps Engineer and Full Stack Developer from Katihar, Bihar, India
                with expertise in AWS cloud infrastructure (EC2, S3, IAM, VPC), Docker containerization,
                Kubernetes orchestration, and Terraform Infrastructure as Code. His DevSecOps practice
                integrates SAST/DAST security scanning and policy-as-code into CI/CD pipelines built
                with GitHub Actions and Jenkins. On the application layer, he develops and ships MERN
                stack applications using React, Node.js, MongoDB, and TypeScript. He monitors production
                systems using Prometheus and Grafana and is proficient with Linux system administration
                and Git workflows. Available for remote DevOps and cloud engineering roles worldwide.
              </p>
            </section>

            {/* ===== PAGE HEADER ===== */}
            {/* ✅ PERFORMANCE: hero animates on mount; cards use whileInView below */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
              aria-labelledby="skills-page-heading"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex p-5 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-2xl mb-6 border border-white/40"
                aria-hidden="true"
              >
                <FiCode className="text-4xl text-blue-600" />
              </motion.div>

              <motion.h1
                id="skills-page-heading"
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
                itemProp="name"
              >
                Technical Skills
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-6"
              >
                Full stack development with specialization in cloud infrastructure, DevSecOps,
                and modern web technologies
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full"
                aria-hidden="true"
              />

              {/* Semantic metadata */}
              <meta itemProp="jobTitle" content="DevOps Engineer & Full Stack Developer" />
              <meta itemProp="url" content="https://ajitdev.com/skills" />
            </motion.section>

            {/* ===== MOBILE FAB ===== */}
            <button
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all z-50"
              aria-label={isMobileMenuOpen ? "Close skills filter" : "Open skills filter"}
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
                  aria-label="Filter skills"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 300 }}
                  className="lg:hidden fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-40 rounded-t-2xl"
                  style={{ maxHeight: "65vh", overflowY: "auto" }}
                >
                  <div className="p-6 space-y-5">
                    <h2 className="text-xl font-bold text-gray-900">Filter by Category</h2>
                    <div className="flex flex-wrap gap-3">
                      {FILTERS.map((f) => (
                        <motion.button
                          key={f}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => { setActiveCategory(f); setIsMobileMenuOpen(false); }}
                          className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                            activeCategory === f
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {f}
                        </motion.button>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {stats.slice(0, 3).map((s, i) => (
                        <div key={i} className={`p-4 rounded-xl bg-gradient-to-br ${s.gradient}`}>
                          <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                          <div className="text-xs text-gray-600">{s.label}</div>
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
              aria-label="Filter skills by category"
            >
              {FILTERS.map((f) => (
                <motion.button
                  key={f}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(f)}
                  aria-pressed={activeCategory === f}
                  className={`px-5 py-3 rounded-xl text-sm font-medium transition-all relative overflow-hidden ${
                    activeCategory === f
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {f}
                  {activeCategory === f && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* ===== SKILLS GRID ===== */}
            {/* ✅ PERFORMANCE: whileInView — cards only animate when scrolled into view */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              role="list"
              aria-label="Skill categories"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((category, index) => (
                  <motion.div
                    key={category.title}
                    variants={cardVariants}
                    whileHover="hover"
                    layout
                    role="listitem"
                    className="relative group"
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur transition duration-500"
                      aria-hidden="true"
                    />

                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-8 shadow-md hover:shadow-xl transition-all duration-300">
                      {/* Category header */}
                      <div className="flex items-start gap-4 mb-8 pb-6 border-b border-gray-100">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-md flex-shrink-0`}
                          aria-hidden="true"
                        >
                          <category.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-gray-900 mb-1">{category.title}</h2>
                          <p className="text-gray-500 text-sm">{category.description}</p>
                        </div>
                      </div>

                      {/* Skills list */}
                      <ul className="space-y-3 mb-8" aria-label={`${category.title} skills`}>
                        {category.skills.map((skill, si) => (
                          <li key={skill.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm flex-shrink-0"
                                aria-hidden="true"
                              >
                                <skill.icon className="w-4 h-4 text-gray-600" />
                              </div>
                              {/* ✅ SEO: itemProp on every skill name */}
                              <span
                                className="font-medium text-gray-800 text-sm"
                                itemProp="knowsAbout"
                              >
                                {skill.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="text-xs font-medium text-gray-500 hidden sm:block">{skill.level}</span>
                              <div className="w-14 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.proficiency}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, delay: si * 0.06, ease: "easeOut" }}
                                  className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                                />
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>

                      {/* Overall proficiency */}
                      <div className="pt-5 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Overall
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className={`font-bold text-sm ${category.color}`}>
                              {category.level}
                            </span>
                            <span className="text-xs text-gray-400">({category.proficiency}%)</span>
                          </div>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${category.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* ===== STATS ===== */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16"
              aria-label="Skill statistics"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${s.gradient} border border-white/50 shadow-md`}
                >
                  <s.icon className={`absolute top-4 right-4 w-7 h-7 ${s.color} opacity-25`} aria-hidden="true" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-1">{s.value}</div>
                    <div className="text-gray-600 text-sm font-medium">{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* ===== TOPICAL AUTHORITY / INFO SECTION ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="max-w-5xl mx-auto mb-16"
              aria-labelledby="journey-heading"
            >
              <div className="relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-blue-100 shadow-lg">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div
                    className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0"
                    aria-hidden="true"
                  >
                    <FiInfo className="w-7 h-7 text-blue-600" />
                  </div>

                  <div className="flex-1">
                    <h2 id="journey-heading" className="text-2xl font-bold text-gray-900 mb-4">
                      Skill Development Journey
                    </h2>

                    {/* ✅ IMPROVED: Richer topical authority paragraph */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      As a <strong>DevOps Engineer</strong> and <strong>BCA Cloud &amp; Security</strong> graduate,
                      I've built a practice centered on secure, automated infrastructure. My cloud work spans{" "}
                      <strong>AWS services</strong> (EC2, S3, EKS, IAM, VPC) with{" "}
                      <strong>Docker containerization</strong> and{" "}
                      <strong>Kubernetes orchestration</strong> for production workloads. I automate
                      delivery using <strong>GitHub Actions</strong> and <strong>Terraform</strong>,
                      embedding <strong>DevSecOps</strong> checks — SAST/DAST, dependency audits,
                      and policy-as-code — at every pipeline stage. On the application side, I design
                      and ship <strong>MERN stack</strong> services with TypeScript following clean
                      architecture principles. I'm continuously deepening expertise in{" "}
                      <strong>Linux system administration</strong>, observability tooling, and
                      cloud-native security for remote DevOps roles worldwide.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      {[
                        { dot: "bg-green-500",  label: "Continuous Learning"     },
                        { dot: "bg-blue-500",   label: "Security-First Approach" },
                        { dot: "bg-purple-500", label: "Cloud-Native Stack"      },
                        { dot: "bg-orange-500", label: "Remote · Worldwide"      },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2">
                          <div className={`w-2.5 h-2.5 rounded-full ${item.dot}`} aria-hidden="true" />
                          <span className="text-gray-700 text-sm">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Hidden SEO nav */}
            <nav className="sr-only" aria-label="Site navigation">
              <ul>
                <li><a href="/">Home — DevOps Engineer Katihar Bihar India</a></li>
                <li><a href="/about">About Ajit Kumar</a></li>
                <li><a href="/projects">DevOps Projects Portfolio</a></li>
                <li><a href="/skills">Technical Skills — AWS Docker Kubernetes Terraform</a></li>
                <li><a href="/contact">Contact — Remote DevOps Engineer</a></li>
              </ul>
            </nav>

          </div>
        </main>

        <Footer />
      </motion.div>
    </>
  );
};

export default Skills;