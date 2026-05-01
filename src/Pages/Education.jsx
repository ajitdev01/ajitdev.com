import { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiBook, FiCloud, FiShield, FiCode, FiTarget, FiTool,
  FiBriefcase, FiSend, FiChevronDown, FiChevronUp,
  FiTrendingUp, FiLayers, FiCpu, FiGitBranch, FiDatabase,
  FiZap, FiAward, FiClock, FiTerminal, FiCheckCircle,
  FiArrowRight, FiStar, FiGlobe, FiLock, FiServer
} from "react-icons/fi";

// ========== STRUCTURED DATA (Enhanced SEO) ==========
const educationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  name: "Bachelor of Computer Applications (BCA) — Cloud & Security",
  description: "Undergraduate specialization in Cloud Engineering, Cybersecurity, DevOps automation, and Full Stack Development with focus on AWS, Docker, Kubernetes, and MERN stack.",
  educationalLevel: "Undergraduate",
  credentialCategory: "degree",
  provider: {
    "@type": "CollegeOrUniversity",
    name: "Amity University Online",
    sameAs: "https://amityonline.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN"
    }
  },
  recognizedBy: {
    "@type": "Organization",
    name: "UGC India"
  },
  creator: {
    "@type": "Person",
    name: "Ajit Kumar",
    url: "https://ajitdev.com"
  }
};

const personEducationSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ajit Kumar",
  url: "https://ajitdev.com",
  jobTitle: "Full Stack Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Amity University Online"
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "BCA — Cloud & Security",
      credentialCategory: "degree"
    },
    {
      "@type": "Certificate",
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services"
    }
  ],
  knowsAbout: [
    "Cloud Computing", "Cybersecurity", "DevOps", "AWS", "Docker", "Kubernetes",
    "CI/CD Pipelines", "MERN Stack", "React", "Node.js", "MongoDB", "Express",
    "Linux", "OWASP Security", "Infrastructure as Code", "Terraform"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Ajit Kumar's specialization in BCA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ajit Kumar specializes in Cloud Computing and Cybersecurity within his BCA program at Amity University Online, with strong applied focus on AWS cloud infrastructure, DevOps automation, Docker containerization, and full-stack MERN development."
      }
    },
    {
      "@type": "Question",
      name: "What full stack technologies does Ajit Kumar work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ajit works extensively with MERN Stack (MongoDB, Express.js, React.js, Node.js), LAMP Stack (Linux, Apache, MySQL, PHP), and Next.js for SEO-optimized applications. He has 300+ LeetCode problems solved and builds production-grade applications."
      }
    },
    {
      "@type": "Question",
      name: "Is Ajit Kumar available for Full Stack Engineer roles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ajit is actively seeking Full Stack Engineer roles worldwide, available for remote positions immediately. His portfolio includes an IRCTC clone, MERN learning repository with 45+ lectures, and SEO-optimized Next.js applications."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ajitdev.com" },
    { "@type": "ListItem", position: 2, name: "Education", item: "https://ajitdev.com/education" }
  ]
};

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
    description: "Mastering core DSA concepts with C++ implementations, LeetCode practice (300+ problems), and competitive programming.",
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
    bgGradient: "from-purple-500/10 to-pink-500/10"
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
    bgGradient: "from-rose-500/10 to-red-500/10"
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

const keyLearningAreas = [
  { icon: FiCloud, text: "Cloud Computing", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: FiShield, text: "Cybersecurity", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: FiCode, text: "Full Stack Dev", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: FiGitBranch, text: "DevOps Concepts", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: FiDatabase, text: "Database Design", color: "text-cyan-600", bg: "bg-cyan-50" },
  { icon: FiServer, text: "Cloud Native", color: "text-indigo-600", bg: "bg-indigo-50" }
];

const academicStats = [
  { value: "7.95+", label: "Current CGPA", icon: FiTrendingUp, gradient: "from-blue-500 to-cyan-500" },
  { value: "6", label: "Semesters", icon: FiBook, gradient: "from-emerald-500 to-teal-500" },
  { value: "20+", label: "Courses Completed", icon: FiCheckCircle, gradient: "from-purple-500 to-pink-500" },
  { value: "4", label: "Certifications", icon: FiAward, gradient: "from-amber-500 to-orange-500" }
];

const statusStyles = {
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
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  hover: { scale: 1.02, y: -6, transition: { duration: 0.2 } }
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
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0.95]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>BCA Cloud & Security | Full Stack Engineer Education — Ajit Kumar</title>
        <meta 
          name="description" 
          content="Ajit Kumar's BCA in Cloud & Security at Amity University Online, specializing in Full Stack Development (MERN, Next.js), AWS Cloud, DevOps, and Cybersecurity. 300+ DSA problems solved, production-grade projects."
        />
        <link rel="canonical" href="https://ajitdev.com/education" />
        <meta name="author" content="Ajit Kumar" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Katihar, Bihar, India" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Education — BCA Cloud & Security | Full Stack Engineer" />
        <meta property="og:description" content="Academic journey in Cloud Engineering, Cybersecurity, Full Stack Development (MERN, Next.js), and DevOps." />
        <meta property="og:url" content="https://ajitdev.com/education" />
        <meta property="og:site_name" content="Ajit Kumar Portfolio" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BCA Cloud & Security — Full Stack Engineer Education" />
        <meta name="twitter:description" content="Specializing in MERN Stack, AWS Cloud, DevOps, and Cybersecurity with 300+ DSA problems solved." />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(educationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(personEducationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-x-hidden"
      >
        {/* Premium Background Blobs */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <Header />

        <main className="flex-grow pt-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            
            {/* Hidden SEO Content */}
            <section className="sr-only" aria-label="Education Overview">
              <h1>Full Stack Engineer Education — BCA Cloud & Security Specialization</h1>
              <p>
                Ajit Kumar is pursuing a Bachelor of Computer Applications with specialization in Cloud Computing and Security 
                at Amity University Online. This program integrates full-stack development (MERN, Next.js, LAMP), AWS cloud 
                infrastructure, DevOps automation, Docker containerization, CI/CD pipelines, cybersecurity principles, 
                and Linux system administration. With 300+ LeetCode problems solved and production-grade projects including 
                an IRCTC clone and 45+ lecture MERN repository, Ajit demonstrates real-world engineering capability.
              </p>
            </section>

            {/* ===== HERO SECTION ===== */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center mb-20"
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

              <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-4">
                BCA — Cloud & Security Specialization
              </motion.p>

              <motion.div variants={itemVariants} className="flex justify-center gap-3 flex-wrap mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <FiClock className="w-4 h-4" />
                  2025 – 2027
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  <FiStar className="w-4 h-4" />
                  CGPA: 7.95+
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                  <FiCode className="w-4 h-4" />
                  Full Stack Focus
                </span>
              </motion.div>

              <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            </motion.section>

            {/* ===== MOBILE FAB ===== */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50"
              aria-label="Navigation menu"
            >
              {isMobileMenuOpen ? <FiChevronDown className="w-5 h-5" /> : <FiChevronUp className="w-5 h-5" />}
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
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { icon: FiBook, label: "Program", section: "program" },
                        { icon: FiTarget, label: "Focus", section: "focus-areas" },
                        { icon: FiAward, label: "Certs", section: "certifications" },
                        { icon: FiTrendingUp, label: "Timeline", section: "timeline" },
                        { icon: FiLayers, label: "Learning", section: "self-learning" },
                        { icon: FiCode, label: "Skills", section: "skills" }
                      ].map((item) => (
                        <button
                          key={item.section}
                          onClick={() => scrollTo(item.section)}
                          className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <item.icon className="w-5 h-5 text-blue-600" />
                          <span className="text-xs font-medium text-gray-700">{item.label}</span>
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
                {academicStats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={statCardVariants}
                    whileHover="hover"
                    className="relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-lg border border-gray-100"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5`} />
                    <stat.icon className={`w-8 h-8 mx-auto mb-2 text-blue-600`} />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* ===== MAIN PROGRAM CARD ===== */}
            <motion.section
              id="program"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-20"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1px] shadow-2xl">
                <div className="relative rounded-3xl bg-white p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left: Icon & Duration */}
                    <div className="flex-shrink-0 text-center lg:text-left">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center shadow-lg mx-auto lg:mx-0">
                        <FiBook className="w-14 h-14 text-blue-600" />
                      </div>
                      <div className="mt-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold">
                          <FiClock className="w-3.5 h-3.5" />
                          2025 – 2027
                        </div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-grow">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">BCA — Cloud & Security</h2>
                      <p className="text-gray-600 mb-4">Bachelor of Computer Applications · Specialization</p>
                      
                      {/* Institutions */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        <a href="https://amityonline.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
                          🎓 Amity University Online
                        </a>
                        <a href="https://brainzima.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition">
                          ⚡ Brainzima — Practical Training
                        </a>
                        <a href="https://rexvel.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-100 transition">
                          🏢 Rexvel — Industry Exposure
                        </a>
                      </div>

                      {/* Key Learning Areas */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                        {keyLearningAreas.map((item) => (
                          <div key={item.text} className={`p-3 rounded-xl ${item.bg} border border-white/60 text-center`}>
                            <item.icon className={`w-5 h-5 ${item.color} mx-auto mb-1`} />
                            <span className="text-xs font-medium text-gray-700">{item.text}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        A specialized undergraduate program combining <strong className="text-gray-900">full-stack development (MERN, Next.js, LAMP)</strong>,{" "}
                        <strong className="text-gray-900">cloud computing (AWS)</strong>, <strong className="text-gray-900">cybersecurity</strong>, and{" "}
                        <strong className="text-gray-900">DevOps automation</strong>. The curriculum covers production-grade application development, 
                        containerization with Docker, CI/CD pipelines, and Linux system administration — building toward real-world engineering roles.
                      </p>
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
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Technical Focus Areas</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Specialized learning paths combining academic theory with production-grade implementation
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {focusAreas.map((area, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover="hover"
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
                    <div className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-xl transition-all h-full">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-4`}>
                        <area.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                      <p className="text-gray-500 text-sm mb-4">{area.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {area.skills.map((skill) => (
                          <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div>
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
                ))}
              </div>
            </motion.section>

            {/* ===== CERTIFICATIONS ===== */}
            <motion.section
              id="certifications"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Certifications & Credentials</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Industry-recognized certifications validating technical expertise
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl p-6 bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.gradientBar.split(' ')[0]} flex items-center justify-center`}>
                        <cert.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">{cert.title}</h3>
                        <p className="text-gray-400 text-xs">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${statusStyles[cert.status] || "bg-gray-100 text-gray-700"}`}>
                        {cert.status}
                      </span>
                      <span className="text-xs text-gray-400">{cert.timeline}</span>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">Progress</span>
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
                ))}
              </div>
            </motion.section>

            {/* ===== SELF-LEARNING SECTION ===== */}
            <motion.section
              id="self-learning"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Self-Learning & Continuous Growth</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Beyond the curriculum — daily discipline and skill expansion
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {selfLearning.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl p-6 border ${item.highlight ? 'border-amber-200 bg-gradient-to-br from-amber-50/50 to-white' : 'border-gray-200 bg-white'} shadow-md hover:shadow-xl transition-all`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                      {item.highlight && (
                        <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded text-[10px] font-bold">★ CORE</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs mb-4">{item.description}</p>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Progress</span>
                        <span className="font-semibold text-gray-700">{item.progress}%</span>
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
                ))}
              </div>
            </motion.section>

            {/* ===== ACADEMIC TIMELINE ===== */}
            <motion.section
              id="timeline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Academic Timeline</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Semester-by-semester progression and skill development
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
              </div>

              <div className="relative">
                {/* Timeline line - desktop */}
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 hidden lg:block" />
                
                <div className="space-y-8">
                  {timelineData.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`relative flex flex-col lg:flex-row items-center gap-6 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                    >
                      {/* Desktop timeline dot */}
                      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 hidden lg:block" />
                      
                      {/* Card */}
                      <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <div className={`p-6 rounded-2xl ${item.bgGradient} border border-white/50 shadow-md hover:shadow-lg transition-all`}>
                          <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-blue-600 uppercase">{item.semester}</p>
                              <p className="text-sm text-gray-500">SGPA: {item.sgpa}</p>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-500 text-sm mb-3">{item.description}</p>
                          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                            {item.skills.slice(0, 3).map((skill) => (
                              <span key={skill} className="px-2 py-0.5 bg-white/60 text-gray-600 rounded-lg text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="hidden lg:block lg:w-2/12" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

           

          

            {/* ===== HIDDEN INTERNAL LINKS (SEO) ===== */}
            <nav className="sr-only" aria-label="Site Navigation">
              <ul>
                <li><a href="/">Home — Full Stack Engineer Portfolio</a></li>
                <li><a href="/skills">Technical Skills — MERN • Next.js • DSA 300+</a></li>
                <li><a href="/projects">Full Stack Projects — Production Portfolio</a></li>
                <li><a href="/education">Education — BCA Cloud & Security</a></li>
                <li><a href="/contact">Hire Full Stack Engineer</a></li>
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

export default Education;