'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBook, FiCloud, FiShield, FiCode, FiTarget, FiTool,
  FiBriefcase, FiChevronDown, FiChevronUp,
  FiTrendingUp, FiLayers, FiCpu, FiGitBranch,
  FiZap, FiAward, FiClock, FiTerminal, FiCheckCircle,
  FiStar, FiExternalLink, FiMapPin
} from "react-icons/fi";

// ========== CUSTOM SVG INSTITUTION LOGOS ==========
const AmityLogo = () => (
  <svg
    className="w-14 h-14 text-blue-600 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M32 4L8 14v16c0 14.4 10.2 27.8 24 30 13.8-2.2 24-15.6 24-30V14L32 4z" />
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M18 20l14-6 14 6v10c0 9-6 17-14 19-8-2-14-10-14-19V20z" />
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M24 28h16M24 34h16M32 22v18" />
  </svg>
);

const BrainzimaLogo = () => (
  <svg
    className="w-14 h-14 text-purple-600 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
  >
    <rect strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" x="6" y="10" width="52" height="44" rx="8" />
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 22h52" />
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M22 34l-6 6 6 6M42 34l6 6-6 6M34 32l-4 14" />
    <circle cx="16" cy="16" r="2" fill="currentColor" />
    <circle cx="24" cy="16" r="2" fill="currentColor" />
    <circle cx="32" cy="16" r="2" fill="currentColor" />
  </svg>
);

// ========== ENHANCED DATA ==========
const focusAreas = [
  {
    icon: FiCloud,
    title: "Cloud Engineering",
    description: "Mastering cloud infrastructure, deployment strategies, and management with focus on AWS, serverless architectures, and cloud security best practices.",
    gradient: "from-blue-500 to-cyan-500",
    skills: ["AWS EC2/S3", "Cloud Deployment", "Infrastructure as Code", "Serverless"],
    progress: 75,
    color: "blue"
  },
  {
    icon: FiShield,
    title: "Cybersecurity",
    description: "Studying security principles, threat modeling, OWASP Top 10, secure coding practices, and DevSecOps methodologies for application security.",
    gradient: "from-emerald-500 to-teal-500",
    skills: ["OWASP Top 10", "Security Headers", "Encryption", "Authentication"],
    progress: 70,
    color: "emerald"
  },
  {
    icon: FiCode,
    title: "MERN Stack Development",
    description: "Building production-grade modern web applications using MERN stack, responsive design, RESTful APIs, and efficient database management.",
    gradient: "from-purple-500 to-pink-500",
    skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
    progress: 88,
    color: "purple"
  },
  {
    icon: FiGitBranch,
    title: "DevOps & Automation",
    description: "Implementing CI/CD pipelines, containerization with Docker, infrastructure automation, monitoring solutions, and Git workflows.",
    gradient: "from-amber-500 to-orange-500",
    skills: ["Docker", "CI/CD", "GitHub Actions", "Automation"],
    progress: 68,
    color: "amber"
  }
];

const certifications = [
  {
    icon: FiAward,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "In Progress",
    progress: 65,
    gradientBar: "from-orange-500 to-amber-500",
    gradient: "from-orange-500/15 to-amber-500/15",
    timeline: "Q2 2025",
    link: "https://aws.amazon.com/certification/"
  },
  {
    icon: FiShield,
    title: "Web Security Fundamentals",
    issuer: "OWASP & MDN",
    status: "Completed",
    progress: 100,
    gradientBar: "from-emerald-500 to-teal-500",
    gradient: "from-emerald-500/15 to-teal-500/15",
    timeline: "Q1 2025",
    link: "https://owasp.org/"
  },
  {
    icon: FiTool,
    title: "Docker & Containers",
    issuer: "Docker Inc.",
    status: "In Progress",
    progress: 75,
    gradientBar: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/15 to-cyan-500/15",
    timeline: "Current",
    link: "https://docker.com/"
  },
  {
    icon: FiCode,
    title: "Full Stack Development",
    issuer: "MERN Stack Projects",
    status: "Advanced",
    progress: 88,
    gradientBar: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/15 to-pink-500/15",
    timeline: "Ongoing",
    link: "/projects"
  }
];

const selfLearning = [
  {
    icon: FiLayers,
    title: "Data Structures & Algorithms",
    description: "Mastering core DSA concepts with C++ implementations, LeetCode practice (400+ problems), and competitive programming.",
    progress: 82,
    gradient: "from-indigo-500/15 to-blue-500/15",
    highlight: true
  },
  {
    icon: FiCode,
    title: "Python Programming",
    description: "Learning Python for automation, scripting, data analysis, API development, and backend services.",
    progress: 72,
    gradient: "from-amber-500/15 to-yellow-500/15",
    highlight: false
  },
  {
    icon: FiTerminal,
    title: "Linux System Administration",
    description: "Command line proficiency, shell scripting, system administration, and server management fundamentals.",
    progress: 78,
    gradient: "from-gray-600/15 to-gray-800/15",
    highlight: false
  },
  {
    icon: FiZap,
    title: "DevOps CI/CD Practices",
    description: "Implementing automated pipelines, testing strategies, deployment workflows, and monitoring solutions.",
    progress: 68,
    gradient: "from-emerald-500/15 to-green-500/15",
    highlight: false
  }
];

const timelineData = [
  {
    semester: "Semester 1",
    title: "Foundations",
    sgpa: "8.52",
    description: "Programming basics, Mathematics, Computer Architecture, and problem-solving fundamentals.",
    skills: ["C++ Programming", "Discrete Mathematics", "Computer Architecture", "Problem Solving"],
    icon: FiBook,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    semester: "Semester 2",
    title: "Web Technologies",
    sgpa: "7.38",
    description: "HTML, CSS, JavaScript fundamentals, Database concepts, and basic web development.",
    skills: ["HTML5/CSS3", "JavaScript ES6+", "SQL & Databases", "Basic Web Dev"],
    icon: FiCode,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10"
  },
  {
    semester: "Semester 3",
    title: "Advanced Programming",
    sgpa: "In Progress",
    description: "Object-Oriented Programming, Data Structures, and advanced web development concepts.",
    skills: ["OOP Principles", "Data Structures", "React Basics", "REST Concepts"],
    icon: FiCpu,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-purple-500/10"
  },
  {
    semester: "Semester 4",
    title: "Cloud & Security",
    sgpa: "Current",
    description: "Cloud Computing, Network Security, Full Stack Development with MERN, and AWS fundamentals.",
    skills: ["AWS Basics", "Security Principles", "MERN Stack", "DevOps Intro"],
    icon: FiCloud,
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-500/10 to-amber-500/10"
  },
  {
    semester: "Semester 5",
    title: "Specialization Deep Dive",
    sgpa: "Upcoming",
    description: "Advanced Cloud Architecture, DevSecOps practices, and major project development.",
    skills: ["Cloud Security", "Docker/K8s", "Project Management", "Advanced DevOps"],
    icon: FiShield,
    gradient: "from-rose-500 to-red-500",
    bgGradient: "from-rose-500/10 to-rose-500/10"
  },
  {
    semester: "Semester 6",
    title: "Capstone & Industry",
    sgpa: "Final",
    description: "Major capstone project, industry internship preparation, and career development.",
    skills: ["Real-world Projects", "Production Deployment", "Industry Standards", "Career Prep"],
    icon: FiBriefcase,
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/10 to-purple-500/10"
  }
];

const academicStats = [
  { value: "7.95+", label: "Current CGPA", icon: FiTrendingUp, gradient: "from-blue-500 to-cyan-500" },
  { value: "6", label: "Semesters", icon: FiBook, gradient: "from-emerald-500 to-teal-500" },
  { value: "20+", label: "Courses Completed", icon: FiCheckCircle, gradient: "from-purple-500 to-pink-500" },
  { value: "4", label: "Certifications", icon: FiAward, gradient: "from-amber-500 to-orange-500" }
];

const statusStyles: Record<string, string> = {
  Completed: "bg-green-100 text-green-700 border-green-200",
  Learning: "bg-blue-100 text-blue-700 border-blue-200",
  Advanced: "bg-purple-100 text-purple-700 border-purple-200",
  "In Progress": "bg-amber-100 text-amber-700 border-amber-200"
};

// ========== ANIMATION VARIANTS ==========
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
  hover: { scale: 1.015, y: -4, transition: { duration: 0.25, ease: "easeOut" as const } }
};

const statCardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  hover: { y: -4, transition: { duration: 0.2 } }
};

// ========== MAIN COMPONENT ==========
const Education = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease" }}
      className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-x-hidden font-sans"
    >
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "EducationalOccupationalCredential",
                "@id": "https://ajitdev.com/education/#bca",
                "name": "Bachelor of Computer Applications (BCA)",
                "credentialCategory": "degree",
                "educationalLevel": "Bachelor",
                "about": {
                  "@type": "Thing",
                  "name": "Cloud & Security"
                },
                "recognizedBy": {
                  "@type": "EducationalOrganization",
                  "name": "Amity University Online",
                  "url": "https://amityonline.com"
                }
              },
              {
                "@type": "Course",
                "@id": "https://ajitdev.com/education/#brainzima",
                "name": "Full Stack Software Development",
                "description": "ISO Certified training program in web development and full stack.",
                "provider": {
                  "@type": "EducationalOrganization",
                  "name": "Brainzima Innovation Institute",
                  "url": "https://www.brainzima.com"
                }
              },
              {
                "@type": "Organization",
                "@id": "https://rexvel.com",
                "name": "Rexvel",
                "url": "https://rexvel.com",
                "description": "Project Exposure & Real-World Development Experience"
              }
            ]
          })
        }}
      />

      {/* Premium Background Blobs */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <main className="flex-grow pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

          {/* ===== HERO SECTION ===== */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-flex p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl mb-6">
              <FiBook className="text-4xl text-blue-600" />
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
              Education &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Learning Journey
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-650 mb-6 font-medium">
              Academic Theory & Practical Engineering Stack
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center gap-3 flex-wrap mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-sm font-medium">
                <FiClock className="w-4 h-4" />
                2025 – 2027
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-sm font-medium">
                <FiStar className="w-4 h-4" />
                CGPA: 7.95+
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 border border-purple-100 rounded-full text-sm font-medium">
                <FiCode className="w-4 h-4" />
                Full Stack & Cloud Focus
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.section>

          {/* ===== MOBILE FAB ===== */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-105 active:scale-95 transition-transform"
            aria-label="Navigation menu"
          >
            {isMobileMenuOpen ? <FiChevronDown className="w-6 h-6" /> : <FiChevronUp className="w-6 h-6" />}
          </button>

          {/* ===== MOBILE MENU ===== */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 300 }}
                className="lg:hidden fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-40 rounded-t-2xl"
                style={{ maxHeight: "65vh", overflowY: "auto" }}
              >
                <div className="p-6 space-y-5">
                  <h2 className="text-xl font-bold text-gray-900">Quick Navigation</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { icon: FiBook, label: "Timeline Journey", section: "education-timeline" },
                      { icon: FiTarget, label: "Focus Areas", section: "focus-areas" },
                      { icon: FiAward, label: "Certifications", section: "certifications" },
                      { icon: FiLayers, label: "Self-Learning", section: "self-learning" },
                      { icon: FiTrendingUp, label: "Semester Timeline", section: "timeline" }
                    ].map((item) => (
                      <button
                        key={item.section}
                        onClick={() => scrollTo(item.section)}
                        className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <item.icon className="w-5 h-5 text-blue-600" />
                        <span className="text-xs font-medium text-gray-700 text-center">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ===== ACADEMIC STATS ===== */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {academicStats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={statCardVariants}
                    whileHover="hover"
                    className="relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-lg border border-gray-100 transition-all"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5`} />
                    <StatIcon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ===== 4-MILESTONE VERTICAL TIMELINE SECTION ===== */}
          <motion.section
            id="education-timeline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-24 scroll-mt-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3 flex items-center justify-center gap-2">
                <span>🎓</span> Academic & Professional timeline
              </h2>
              <p className="text-gray-550 max-w-2xl mx-auto">
                Guided learning path representing academic milestones, professional training, industry workflows, and self-learning achievements.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
            </div>

            {/* Timeline Layout */}
            <div className="relative">
              {/* Center Line for Timelines (Desktop Only) */}
              <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 bg-blue-100/80 -translate-x-1/2" />

              <div className="space-y-16">

                {/* Milestone 1: Academic Journey */}
                <div className="relative flex flex-col lg:flex-row items-start lg:items-center">
                  {/* Dot */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-500 shadow-sm flex items-center justify-center z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping absolute" />
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  </div>

                  {/* Card (Left Aligned on Desktop) */}
                  <div className="w-full lg:w-[calc(50%-2.5rem)] pl-16 lg:pl-0 lg:mr-auto text-left">
                    <motion.article
                      variants={cardVariants}
                      whileHover="hover"
                      className="group relative rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-slate-200/80 overflow-hidden flex flex-col justify-between"
                    >
                      <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                      
                      <div>
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 flex-shrink-0">
                            <AmityLogo />
                          </div>
                          <div>
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-1">
                              Academic Degree
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                              Bachelor of Computer Applications (BCA)
                            </h3>
                            <a
                              href="https://amityonline.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-blue-600 font-semibold mt-1.5 hover:underline group/link"
                              aria-label="Visit Amity University Online website"
                            >
                              Amity University Online
                              <FiExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </a>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-semibold rounded-lg flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Currently Enrolled
                          </span>
                          <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold rounded-lg">
                            Cloud & Security
                          </span>
                          <span className="px-2.5 py-1 bg-slate-50 text-slate-600 border border-slate-200 text-xs font-semibold rounded-lg">
                            <FiClock className="w-3.5 h-3.5 inline mr-1" /> 2025 – 2027
                          </span>
                        </div>

                        {/* Highlights */}
                        <div className="bg-blue-50/40 border-l-4 border-blue-500 p-4 rounded-r-xl mb-6">
                          <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">
                            Academic Highlights
                          </h4>
                          <ul className="text-xs md:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                            <li>Cloud & Security Specialization coursework</li>
                            <li>Practical Software Development project implementation</li>
                            <li>Secure Computing & Threat Modeling concepts</li>
                            <li>Relational Database Design & Normalization</li>
                            <li>Linux OS Administration Fundamentals</li>
                          </ul>
                        </div>

                        {/* Subjects */}
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <FiBook className="text-blue-500" /> Key Areas of Study
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              "Cloud Computing", "Cloud Security", "Data Structures & Algorithms",
                              "Software Engineering", "Database Management Systems", "Operating Systems",
                              "Computer Networks", "Network Security", "Cryptography", "Web Technologies"
                            ].map((item) => (
                              <span key={item} className="px-2.5 py-1 bg-slate-50 text-slate-650 border border-slate-200/60 text-xs font-medium rounded-lg hover:bg-blue-50 hover:text-blue-700 hover:border-blue-100 transition-colors cursor-default">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </div>
                </div>

                {/* Milestone 2: Professional Training */}
                <div className="relative flex flex-col lg:flex-row items-start lg:items-center">
                  {/* Dot */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-purple-500 shadow-sm flex items-center justify-center z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping absolute" />
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>

                  {/* Card (Right Aligned on Desktop) */}
                  <div className="w-full lg:w-[calc(50%-2.5rem)] pl-16 lg:pl-0 lg:ml-auto text-left">
                    <motion.article
                      variants={cardVariants}
                      whileHover="hover"
                      className="group relative rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-slate-200/80 overflow-hidden flex flex-col justify-between"
                    >
                      <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                      
                      <div>
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 flex-shrink-0">
                            <BrainzimaLogo />
                          </div>
                          <div>
                            <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-xs font-semibold rounded-full mb-1">
                              Professional Training
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                              Full Stack Software Development
                            </h3>
                            <a
                              href="https://www.brainzima.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-purple-600 font-semibold mt-1.5 hover:underline group/link"
                              aria-label="Visit Brainzima Innovation Institute website"
                            >
                              Brainzima Innovation Institute
                              <FiExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </a>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-100 text-xs font-semibold rounded-lg">
                            🏅 ISO Certified
                          </span>
                          <span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-100 text-xs font-semibold rounded-lg">
                            ⭐ 5.0 Google Rating
                          </span>
                          <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-semibold rounded-lg">
                            Placement Assistance
                          </span>
                        </div>

                        {/* Highlights */}
                        <div className="bg-purple-50/40 border-l-4 border-purple-500 p-4 rounded-r-xl mb-6">
                          <h4 className="text-xs font-bold text-purple-800 uppercase tracking-wider mb-1">
                            Training Highlights
                          </h4>
                          <ul className="text-xs md:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                            <li>ISO Certified training platform</li>
                            <li>1200+ Students trained across software programs</li>
                            <li>Placement Assistance and active resume preparation sessions</li>
                            <li>Project-Based learning focusing on production deployment</li>
                          </ul>
                        </div>

                        {/* Skills grid */}
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <FiAward className="text-purple-500" /> Core Competencies & Skills
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              "HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "PHP", "MySQL", "Git", "GitHub"
                            ].map((item) => (
                              <span key={item} className="px-2.5 py-1 bg-slate-50 text-slate-655 border border-slate-200/60 text-xs font-semibold rounded-lg hover:bg-purple-50 hover:text-purple-700 hover:border-purple-100 transition-colors cursor-default">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </div>
                </div>

                {/* Milestone 3: Industry Exposure */}
                <div className="relative flex flex-col lg:flex-row items-start lg:items-center">
                  {/* Dot */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-emerald-500 shadow-sm flex items-center justify-center z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>

                  {/* Card (Left Aligned on Desktop) */}
                  <div className="w-full lg:w-[calc(50%-2.5rem)] pl-16 lg:pl-0 lg:mr-auto text-left">
                    <motion.article
                      variants={cardVariants}
                      whileHover="hover"
                      className="group relative rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-slate-200/80 overflow-hidden flex flex-col justify-between"
                    >
                      <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                      
                      <div>
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 flex-shrink-0">
                            <svg className="w-14 h-14 text-emerald-600 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" viewBox="0 0 64 64" fill="none" stroke="currentColor" aria-hidden="true">
                              <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M12 44L32 12l20 32H12z" />
                              <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M24 28h16" />
                            </svg>
                          </div>
                          <div>
                            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full mb-1">
                              Industry Exposure
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                              Industry Experience & Project Exposure
                            </h3>
                            <a
                              href="https://rexvel.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold mt-1.5 hover:underline group/link"
                              aria-label="Visit Rexvel website"
                            >
                              Rexvel
                              <FiExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </a>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-semibold rounded-lg">
                            Project Exposure
                          </span>
                          <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold rounded-lg">
                            Real-World Workflows
                          </span>
                        </div>

                        {/* Highlights Grid */}
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <FiBriefcase className="text-emerald-500" /> Key Exposure Areas
                          </h4>
                          <div className="grid grid-cols-1 gap-3">
                            {[
                              { title: "Professional Development Workflow", desc: "Insight into version control workflows, pull request reviews, and team branching models." },
                              { title: "Client-Oriented Development", desc: "Understanding the lifecycle of capturing requirements and aligning implementation to design constraints." },
                              { title: "Website Development Lifecycle", desc: "Experience in project structuring, setup, build pipelines, and production release concepts." },
                              { title: "Production Deployment Concepts", desc: "Awareness of continuous deployment, server environments, and optimization rules." },
                              { title: "Project Planning & Software Delivery", desc: "Understanding agile planning, milestone timelines, and iterative delivery schedules." },
                              { title: "Real-World Problem Solving", desc: "Resolving performance bottlenecks, debug cycles, and cross-browser responsive layouts." }
                            ].map((item) => (
                              <div key={item.title} className="p-3.5 bg-slate-50/60 rounded-xl border border-slate-100/70 hover:border-emerald-500/20 transition-colors">
                                <h5 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  {item.title}
                                </h5>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </div>
                </div>

                {/* Milestone 4: Self-Learning Journey */}
                <div className="relative flex flex-col lg:flex-row items-start lg:items-center">
                  {/* Dot */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-amber-500 shadow-sm flex items-center justify-center z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping absolute" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                  </div>

                  {/* Card (Right Aligned on Desktop) */}
                  <div className="w-full lg:w-[calc(50%-2.5rem)] pl-16 lg:pl-0 lg:ml-auto text-left">
                    <motion.article
                      variants={cardVariants}
                      whileHover="hover"
                      className="group relative rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-slate-200/80 overflow-hidden flex flex-col justify-between"
                    >
                      <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                      
                      <div>
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100 flex-shrink-0">
                            <svg className="w-14 h-14 text-amber-500 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" viewBox="0 0 64 64" fill="none" stroke="currentColor" aria-hidden="true">
                              <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M32 6v40M32 6l-8 8M32 6l8 8" />
                              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 46h40v12H12V46z" />
                            </svg>
                          </div>
                          <div>
                            <span className="inline-block px-3 py-1 bg-amber-50 text-amber-600 text-xs font-semibold rounded-full mb-1">
                              Self-Directed Growth
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                              Continuous Learning & Technical Growth
                            </h3>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-700 border border-amber-100 mt-1">
                              Continuous Learning Badge
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-650 leading-relaxed mb-6 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                          A passionate self-learner continuously improving software engineering skills through practical projects, technical documentation, problem-solving, and modern development practices.
                        </p>

                        {/* Growth Statistics */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                            <div className="text-xl font-extrabold text-blue-600">400+ Solved</div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">LeetCode Problems</div>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                            <div className="text-xl font-extrabold text-purple-600">5+ Apps</div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Production Projects</div>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                            <div className="text-xl font-extrabold text-emerald-600">3000+ Hrs</div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Practical Coding</div>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                            <div className="text-xl font-extrabold text-amber-600">5.0 Star</div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Project Ratings</div>
                          </div>
                        </div>

                        {/* Technology Badges & Learning Areas */}
                        <div className="border-t border-slate-100 pt-5 space-y-4">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Core Learning Areas</h4>
                          
                          <div>
                            <p className="text-[11px] font-bold text-blue-700 uppercase mb-1">Data Structures & Algorithms</p>
                            <div className="flex flex-wrap gap-1">
                              {["Arrays", "Strings", "Hashing", "Linked Lists", "Stack", "Queue", "Binary Search", "Recursion", "Backtracking", "Trees", "Graphs", "Dynamic Programming"].map((item) => (
                                <span key={item} className="px-2 py-0.5 bg-blue-50/50 text-blue-700 border border-blue-100/50 text-[10px] font-semibold rounded">{item}</span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-[11px] font-bold text-purple-700 uppercase mb-1">Software Engineering</p>
                            <div className="flex flex-wrap gap-1">
                              {["System Design Fundamentals", "Object-Oriented Programming", "Design Patterns", "REST API Architecture", "Scalable Application Design"].map((item) => (
                                <span key={item} className="px-2 py-0.5 bg-purple-50/50 text-purple-700 border border-purple-100/50 text-[10px] font-semibold rounded">{item}</span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-[11px] font-bold text-emerald-700 uppercase mb-1">Cloud & DevOps</p>
                            <div className="flex flex-wrap gap-1">
                              {["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"].map((item) => (
                                <span key={item} className="px-2 py-0.5 bg-emerald-50/50 text-emerald-700 border border-emerald-100/50 text-[10px] font-semibold rounded">{item}</span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-[11px] font-bold text-amber-700 uppercase mb-1">Modern Development</p>
                            <div className="flex flex-wrap gap-1">
                              {["React", "Next.js", "TypeScript", "Backend Development", "Database Optimization"].map((item) => (
                                <span key={item} className="px-2 py-0.5 bg-amber-50/50 text-amber-700 border border-amber-100/50 text-[10px] font-semibold rounded">{item}</span>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.article>
                  </div>
                </div>

              </div>
            </div>
          </motion.section>

          {/* ===== FOCUS AREAS ===== */}
          <motion.section
            id="focus-areas"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="mb-20 scroll-mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Technical Focus Areas</h2>
              <p className="text-gray-550 max-w-2xl mx-auto">
                Specialized learning paths combining academic theory with production-grade implementation
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.map((area, idx) => {
                const AreaIcon = area.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover="hover"
                    className="relative group h-full"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur transition duration-500" />
                    <div className="relative bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-xl transition-all h-full flex flex-col justify-between">
                      <div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-4`}>
                          <AreaIcon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                        <p className="text-gray-550 text-sm mb-4">{area.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {area.skills.map((skill) => (
                            <span key={skill} className="px-2 py-0.5 bg-gray-105 text-gray-600 border border-gray-200/50 rounded text-xs font-semibold">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-auto">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">Proficiency</span>
                          <span className="font-semibold text-gray-900">{area.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${area.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                            className={`h-full rounded-full bg-gradient-to-r ${area.gradient}`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ===== CERTIFICATIONS ===== */}
          <motion.section
            id="certifications"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20 scroll-mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Certifications & Credentials</h2>
              <p className="text-gray-550 max-w-2xl mx-auto">
                Industry-recognized certifications validating technical expertise
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, idx) => {
                const CertIcon = cert.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl p-6 bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.gradientBar.split(' ')[0]} flex items-center justify-center`}>
                        <CertIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm leading-tight">{cert.title}</h3>
                        <p className="text-gray-450 text-xs mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${statusStyles[cert.status] || "bg-gray-100 text-gray-700"}`}>
                        {cert.status}
                      </span>
                      <span className="text-xs text-gray-400">{cert.timeline}</span>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-550">Progress</span>
                        <span className="font-semibold text-gray-900">{cert.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${cert.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${cert.gradientBar}`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ===== SELF-LEARNING SECTION ===== */}
          <motion.section
            id="self-learning"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20 scroll-mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Self-Learning & Continuous Growth</h2>
              <p className="text-gray-550 max-w-2xl mx-auto">
                Beyond the curriculum — daily discipline and skill expansion
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {selfLearning.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl p-6 border ${item.highlight
                        ? 'border-amber-250 bg-gradient-to-br from-amber-50/30 to-white'
                        : 'border-slate-200 bg-white'
                      } shadow-md hover:shadow-xl transition-all`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                        <ItemIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                      {item.highlight && (
                        <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded text-[10px] font-bold">★ CORE</span>
                      )}
                    </div>
                    <p className="text-gray-550 text-xs mb-4">{item.description}</p>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Progress</span>
                        <span className="font-semibold text-gray-750">{item.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ===== ACADEMIC TIMELINE ===== */}
          <motion.section
            id="timeline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20 scroll-mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Academic Timeline</h2>
              <p className="text-gray-550 max-w-2xl mx-auto">
                Semester-by-semester progression and skill development
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
            </div>

            <div className="relative">
              {/* Timeline line - desktop */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 hidden lg:block" />

              <div className="space-y-8">
                {timelineData.map((item, index) => {
                  const SemIcon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`relative flex flex-col lg:flex-row items-center gap-6 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                    >
                      {/* Desktop timeline dot */}
                      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 hidden lg:block" />

                      {/* Card */}
                      <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <div className={`p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all`}>
                          <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="w-10 h-10 rounded-xl bg-slate-50 shadow-sm flex items-center justify-center flex-shrink-0">
                              <SemIcon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-blue-600 uppercase">{item.semester}</p>
                              <p className="text-sm text-gray-500">SGPA: {item.sgpa}</p>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-550 text-sm mb-3">{item.description}</p>
                          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                            {item.skills.slice(0, 3).map((skill) => (
                              <span key={skill} className="px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-semibold">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="hidden lg:block lg:w-2/12" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* ===== HIDDEN INTERNAL LINKS (SEO) ===== */}
          <nav className="sr-only" aria-label="Site Navigation">
            <ul>
              <li><a href="/">Home — Full Stack Engineer Portfolio</a></li>
              <li><a href="/skills">Technical Skills — MERN • Next.js • DSA 400+</a></li>
              <li><a href="/projects">Full Stack Projects — Production Portfolio</a></li>
              <li><a href="/education">Education — BCA Cloud & Security</a></li>
              <li><a href="/contact">Hire Full Stack Engineer</a></li>
              <li><a href="https://github.com/ajitdev01">GitHub — Code Portfolio</a></li>
              <li><a href="https://leetcode.com/ajitdev01">LeetCode — 400+ Problems</a></li>
            </ul>
          </nav>

        </div>
      </main>
    </div>
  );
};

export default Education;