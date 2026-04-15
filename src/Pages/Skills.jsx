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
  FiAward, FiBookOpen, FiCompass, FiTarget, FiMapPin, FiBriefcase,
  FiCalendar, FiStar, FiArrowRight, FiBarChart2, FiActivity
} from "react-icons/fi";

// Simple icon components to replace complex library imports
const SiAmazonaws = () => <FiCloud className="w-4 h-4" />;
const SiDocker = () => <FiPackage className="w-4 h-4" />;
const SiKubernetes = () => <FiCpu className="w-4 h-4" />;
const SiTerraform = () => <FiLayers className="w-4 h-4" />;
const SiGithubactions = () => <FiGitBranch className="w-4 h-4" />;
const SiJenkins = () => <FiTool className="w-4 h-4" />;
const SiPrometheus = () => <FiActivity className="w-4 h-4" />;
const SiGrafana = () => <FiBarChart2 className="w-4 h-4" />;

// ========== STRUCTURED DATA ==========
const skillsForSchema = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Node.js", "Express.js",
  "MongoDB", "MySQL", "AWS EC2", "AWS S3", "AWS IAM", "AWS VPC", "Docker", "Kubernetes",
  "Terraform", "CI/CD", "GitHub Actions", "Jenkins", "OWASP Top 10", "DevSecOps", "Linux",
  "TypeScript", "Python", "Java", "C++", "NumPy", "Pandas", "Git"
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

// ========== SKILL DATA ==========
const skillCategories = [
  {
    title: "Full Stack Development",
    filter: "FullStack",
    icon: FiCode,
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-600",
    description: "End-to-end application development with modern frameworks",
    proficiency: 85,
    level: "Advanced",
    skills: [
      { name: "HTML5 / CSS3", icon: FiGlobe, proficiency: 90, level: "Expert" },
      { name: "JavaScript (ES6+)", icon: FiCode, proficiency: 85, level: "Advanced" },
      { name: "React.js / Next.js", icon: FiCpu, proficiency: 85, level: "Advanced" },
      { name: "Tailwind CSS / Bootstrap", icon: FiLayers, proficiency: 90, level: "Expert" },
      { name: "Node.js / Express.js", icon: FiServer, proficiency: 82, level: "Advanced" },
      { name: "MongoDB / MySQL", icon: FiDatabase, proficiency: 80, level: "Advanced" },
      { name: "MERN / LAMP Stack", icon: FiPackage, proficiency: 85, level: "Advanced" },
    ],
  },
  {
    title: "Programming & DSA",
    filter: "Programming",
    icon: FiTerminal,
    gradient: "from-emerald-500 to-teal-500",
    color: "text-emerald-600",
    description: "Strong algorithmic foundation and multi-language proficiency",
    proficiency: 82,
    level: "Advanced",
    skills: [
      { name: "C / C++", icon: FiCode, proficiency: 85, level: "Advanced" },
      { name: "Java", icon: FiCode, proficiency: 80, level: "Advanced" },
      { name: "Python", icon: FiCode, proficiency: 85, level: "Advanced" },
      { name: "TypeScript", icon: FiCode, proficiency: 75, level: "Proficient" },
      { name: "Data Structures & Algorithms", icon: FiBarChart2, proficiency: 82, level: "Advanced", note: "300+ problems solved" },
      { name: "Python Ecosystem", icon: FiPackage, proficiency: 78, level: "Proficient", note: "NumPy, Pandas, Matplotlib" },
    ],
  },
  {
    title: "Linux & Infrastructure",
    filter: "Linux",
    icon: FiTerminal,
    gradient: "from-amber-500 to-orange-500",
    color: "text-amber-600",
    description: "System administration and CLI mastery",
    proficiency: 78,
    level: "Proficient",
    skills: [
      { name: "Linux System Administration", icon: FiMonitor, proficiency: 80, level: "Proficient" },
      { name: "CLI & Bash Scripting", icon: FiTerminal, proficiency: 78, level: "Proficient" },
      { name: "Virtual Machines & Dual Boot", icon: FiPackage, proficiency: 85, level: "Advanced" },
      { name: "System Monitoring", icon: FiActivity, proficiency: 75, level: "Proficient" },
    ],
  },
  {
    title: "Cloud & DevOps",
    filter: "Cloud",
    icon: FiCloud,
    gradient: "from-indigo-500 to-blue-500",
    color: "text-indigo-600",
    description: "Cloud infrastructure and deployment automation",
    proficiency: 72,
    level: "Proficient",
    skills: [
      { name: "AWS (EC2, S3, IAM, VPC)", icon: SiAmazonaws, proficiency: 75, level: "Proficient" },
      { name: "Docker", icon: SiDocker, proficiency: 72, level: "Proficient" },
      { name: "Kubernetes", icon: SiKubernetes, proficiency: 65, level: "Intermediate" },
      { name: "CI/CD (GitHub Actions)", icon: SiGithubactions, proficiency: 70, level: "Proficient" },
      { name: "Git & GitHub", icon: FiGitBranch, proficiency: 88, level: "Advanced" },
      { name: "Basic Cloud Concepts", icon: FiCloud, proficiency: 80, level: "Proficient", note: "SaaS, PaaS, IaaS" },
    ],
  },
  {
    title: "Security (DevSecOps)",
    filter: "Security",
    icon: FiShield,
    gradient: "from-rose-500 to-pink-500",
    color: "text-rose-600",
    description: "Security-first mindset and ethical hacking foundation",
    proficiency: 68,
    level: "Intermediate",
    skills: [
      { name: "Networking Basics", icon: FiGlobe, proficiency: 70, level: "Intermediate" },
      { name: "Nmap & Scanning", icon: FiActivity, proficiency: 65, level: "Intermediate" },
      { name: "OWASP Top 10", icon: FiShield, proficiency: 72, level: "Proficient" },
      { name: "Ethical Hacking Interest", icon: FiLock, proficiency: 70, level: "Learning" },
      { name: "DevSecOps Mindset", icon: FiShield, proficiency: 68, level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Workflow",
    filter: "Tools",
    icon: FiTool,
    gradient: "from-purple-500 to-violet-500",
    color: "text-purple-600",
    description: "Modern development tools and productivity stack",
    proficiency: 85,
    level: "Advanced",
    skills: [
      { name: "Git & GitHub", icon: FiGitBranch, proficiency: 88, level: "Advanced" },
      { name: "Postman / API Testing", icon: FiSend, proficiency: 85, level: "Advanced" },
      { name: "VS Code", icon: FiCode, proficiency: 90, level: "Expert" },
      { name: "Docker Desktop", icon: SiDocker, proficiency: 75, level: "Proficient" },
      { name: "Linux CLI", icon: FiTerminal, proficiency: 80, level: "Proficient" },
    ],
  },
];

const FILTERS = ["All", "FullStack", "Programming", "Linux", "Cloud", "Security", "Tools"];
const filterLabels = {
  All: "All Categories",
  FullStack: "Full Stack",
  Programming: "Programming",
  Linux: "Linux",
  Cloud: "Cloud",
  Security: "Security",
  Tools: "Tools"
};

const stats = [
  { value: "35+", label: "Total Skills", icon: FiTrendingUp, gradient: "from-blue-500/15 to-cyan-500/15", color: "text-blue-600" },
  { value: "300+", label: "DSA Problems", icon: FiBarChart2, gradient: "from-emerald-500/15 to-teal-500/15", color: "text-emerald-600" },
  { value: "10+", label: "Projects", icon: FiPackage, gradient: "from-purple-500/15 to-violet-500/15", color: "text-purple-600" },
  { value: "2+", label: "Years Coding", icon: FiCalendar, gradient: "from-amber-500/15 to-orange-500/15", color: "text-amber-600" },
];

// ========== FUTURE ROADMAP DATA ==========
const roadmapPhases = [
  {
    phase: "Immediate Focus",
    icon: FiZap,
    gradient: "from-blue-500 to-cyan-500",
    items: [
      "Deepen Docker mastery & container orchestration",
      "Complete AWS Solutions Architect Associate",
      "Advance DSA to 500+ problems (Graphs, DP)",
      "Build production-grade MERN + DevOps project"
    ],
    timeline: "0-6 months"
  },
  {
    phase: "Core Expansion",
    icon: FiTrendingUp,
    gradient: "from-purple-500 to-pink-500",
    items: [
      "Kubernetes production-level proficiency",
      "Terraform Infrastructure as Code",
      "Jenkins CI/CD pipelines",
      "System Design & Microservices"
    ],
    timeline: "6-12 months"
  },
  {
    phase: "DevSecOps Mastery",
    icon: FiShield,
    gradient: "from-rose-500 to-orange-500",
    items: [
      "Cloud security (AWS Security Specialty)",
      "Vulnerability scanning & SAST/DAST",
      "Secure coding practices",
      "Penetration testing basics"
    ],
    timeline: "12-18 months"
  },
  {
    phase: "Senior Engineer Track",
    icon: FiAward,
    gradient: "from-emerald-500 to-teal-500",
    items: [
      "Distributed systems architecture",
      "High-performance backend systems",
      "Production-grade deployments at scale",
      "Open source contributions"
    ],
    timeline: "18-24 months"
  }
];

const certifications = [
  { name: "AWS Certified Solutions Architect", status: "In Progress", target: "Q3 2025" },
  { name: "Certified Kubernetes Administrator (CKA)", status: "Planned", target: "Q1 2026" },
  { name: "Docker Certified Associate", status: "Planned", target: "Q4 2025" },
  { name: "Certified DevSecOps Professional", status: "Planned", target: "2026" },
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
  hover: { scale: 1.02, y: -6, transition: { duration: 0.2 } },
};

// ========== MAIN COMPONENT ==========
const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const filteredSkills = useMemo(
    () => activeCategory === "All" ? skillCategories : skillCategories.filter((c) => c.filter === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const getIconComponent = (skill) => {
    if (typeof skill.icon === 'function') {
      return React.createElement(skill.icon, { className: "w-4 h-4 text-gray-600" });
    }
    return React.createElement(FiCode, { className: "w-4 h-4 text-gray-600" });
  };

  return (
    <>
      <Helmet>
        <title>Technical Skills & Roadmap | DevOps Engineer — Ajit Kumar</title>
        <meta
          name="description"
          content="Full Stack Developer & DevOps Engineer from Bihar, India. Skills: MERN, LAMP, AWS, Docker, Kubernetes, DSA (300+ problems), Python, Linux. Future roadmap: DevSecOps, Cloud Security, CKA."
        />
        <link rel="canonical" href="https://ajitdev.com/skills" />
        <meta name="author" content="Ajit Kumar" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Katihar, Bihar, India" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Technical Skills & Roadmap — Ajit Kumar" />
        <meta property="og:description" content="Full Stack + DevOps engineer skills and learning roadmap." />
        <meta property="og:url" content="https://ajitdev.com/skills" />
        <meta property="og:site_name" content="Ajit Kumar Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technical Skills — Ajit Kumar, DevOps Engineer" />
        <meta name="twitter:description" content="MERN, LAMP, AWS, Docker, Kubernetes, DSA 300+, and DevSecOps roadmap." />

        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>

      <div
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease" }}
        className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white"
      >
        {/* Background decoration */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <Header />

        <main className="flex-grow pt-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

            {/* ===== PAGE HEADER ===== */}
            <div className="text-center mb-16">
              <div className="inline-flex p-5 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-2xl mb-6 border border-white/40">
                <FiCode className="text-4xl text-blue-600" />
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                Technical Arsenal
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Full Stack Development + DevOps + Security — building scalable, secure, and production-ready systems
              </p>

              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full" />

              {/* Location & Role badge */}
              <div className="flex justify-center gap-3 mt-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700 shadow-sm">
                  <FiMapPin className="w-4 h-4 text-blue-500" />
                  Katihar, Bihar, India
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700 shadow-sm">
                  <FiBriefcase className="w-4 h-4 text-emerald-500" />
                  Open for DevOps / Full Stack Roles
                </span>
              </div>
            </div>

            {/* ===== MOBILE FILTER BUTTON ===== */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50"
              aria-label={isMobileMenuOpen ? "Close filter" : "Open filter"}
            >
              {isMobileMenuOpen ? <FiChevronDown className="w-5 h-5" /> : <FiChevronUp className="w-5 h-5" />}
            </button>

            {/* ===== MOBILE MENU ===== */}
            {isMobileMenuOpen && (
              <div className="lg:hidden fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-40 rounded-t-2xl" style={{ maxHeight: "60vh", overflowY: "auto" }}>
                <div className="p-6 space-y-5">
                  <h2 className="text-xl font-bold text-gray-900">Filter Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {FILTERS.map((f) => (
                      <button
                        key={f}
                        onClick={() => { setActiveCategory(f); setIsMobileMenuOpen(false); }}
                        className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                          activeCategory === f ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {filterLabels[f]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ===== DESKTOP FILTER ===== */}
            <div className="hidden lg:flex flex-wrap justify-center gap-3 mb-16 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-md">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveCategory(f)}
                  className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeCategory === f ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filterLabels[f]}
                </button>
              ))}
            </div>

            {/* ===== SKILLS GRID ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredSkills.map((category) => (
                <div
                  key={category.title}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur transition duration-500" />
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-8 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4 mb-8 pb-6 border-b border-gray-100">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-md`}>
                        <category.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-1">{category.title}</h2>
                        <p className="text-gray-500 text-sm">{category.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {category.skills.map((skill, idx) => (
                        <li key={skill.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                              {typeof skill.icon === 'function' ? (
                                <skill.icon className="w-4 h-4 text-gray-600" />
                              ) : (
                                <FiCode className="w-4 h-4 text-gray-600" />
                              )}
                            </div>
                            <div>
                              <span className="font-medium text-gray-800 text-sm">{skill.name}</span>
                              {skill.note && <span className="text-xs text-gray-400 ml-2">({skill.note})</span>}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-gray-500 hidden sm:block">{skill.level}</span>
                            <div className="w-14 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                style={{ width: `${skill.proficiency}%` }}
                                className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                              />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-5 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-500 uppercase">Overall Proficiency</span>
                        <div className="flex items-center gap-1.5">
                          <span className={`font-bold text-sm ${category.color}`}>{category.level}</span>
                          <span className="text-xs text-gray-400">({category.proficiency}%)</span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${category.proficiency}%` }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== STATS SECTION ===== */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${s.gradient} border border-white/50 shadow-md text-center hover:scale-105 transition-transform duration-300`}
                >
                  <s.icon className={`absolute top-3 right-3 w-6 h-6 ${s.color} opacity-25`} />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{s.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            {/* ===== FUTURE ROADMAP SECTION ===== */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl mb-4">
                  <FiCompass className="text-3xl text-purple-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Future Learning Roadmap</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  BCA (Cloud & Security) + Beyond — my path to becoming a senior DevOps & DevSecOps engineer
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {roadmapPhases.map((phase, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${phase.gradient} flex items-center justify-center mb-4`}>
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                    <div className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                      <FiCalendar className="w-3 h-3" /> {phase.timeline}
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== CERTIFICATIONS & TARGETS ===== */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                  <div className="flex items-center gap-3 mb-6">
                    <FiAward className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Certification Roadmap</h3>
                  </div>
                  <div className="space-y-4">
                    {certifications.map((cert, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                        <div>
                          <p className="font-semibold text-gray-800">{cert.name}</p>
                          <p className="text-xs text-gray-500">Target: {cert.target}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">{cert.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                  <div className="flex items-center gap-3 mb-6">
                    <FiTarget className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-xl font-bold text-gray-900">Next Targets</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Complete AWS Solutions Architect Associate certification",
                      "Reach 500+ DSA problems (Graphs, Trees, DP mastery)",
                      "Build and deploy a production-grade MERN + DevOps project",
                      "Contribute to open source DevOps tooling",
                      "Master Kubernetes & Terraform for infrastructure automation"
                    ].map((target, i) => (
                      <li key={i} className="flex items-start gap-3 p-2">
                        <FiArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ===== STRENGTHS & MINDSET ===== */}
            <div className="mb-16">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-10 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
                <div className="relative z-10">
                  <div className="flex justify-center gap-2 mb-4">
                    <FiStar className="w-8 h-8 text-yellow-400" />
                    <FiStar className="w-8 h-8 text-yellow-400" />
                    <FiStar className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Discipline × Consistency × Growth Mindset
                  </h3>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Multi-domain learner balancing full-stack development, DevOps, security, and competitive exams.
                    Every day is a step toward becoming a top-tier DevSecOps engineer.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Skills;