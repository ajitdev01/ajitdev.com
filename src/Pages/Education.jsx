import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiBook, FiCloud, FiShield, FiCode, FiTarget, FiTool,
  FiBriefcase, FiSend, FiChevronDown, FiChevronUp,
  FiTrendingUp, FiLayers, FiCpu, FiGitBranch, FiDatabase,
  FiZap, FiAward, FiClock, FiTerminal,
} from "react-icons/fi";

// ========== STRUCTURED DATA (outside component — static, no re-render cost) ==========

const educationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  name: "Bachelor of Computer Applications (BCA) — Cloud & Security",
  description:
    "Undergraduate specialization in Cloud Engineering, Cybersecurity, DevOps automation, and Full Stack Development.",
  educationalLevel: "Undergraduate",
  credentialCategory: "degree",
  provider: {
    "@type": "CollegeOrUniversity",
    name: "Amity University Online",
    sameAs: "https://amityonline.com",
  },
  recognizedBy: {
    "@type": "Organization",
    name: "UGC India",
  },
  creator: {
    "@type": "Person",
    name: "Ajit Kumar",
    url: "https://ajitdev.com",
  },
};

const personEducationSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ajit Kumar",
  url: "https://ajitdev.com",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Amity University Online",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "BCA — Cloud & Security",
    credentialCategory: "degree",
  },
  knowsAbout: [
    "Cloud Computing", "Cybersecurity", "DevOps", "AWS", "Docker",
    "CI/CD Pipelines", "MERN Stack", "React", "Node.js", "Linux",
    "OWASP Security", "Infrastructure as Code",
  ],
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
        text: "Ajit Kumar specializes in Cloud Computing and Cybersecurity within his BCA program at Amity University Online, with a strong applied focus on AWS cloud infrastructure, DevOps automation, Docker containerization, and full-stack MERN development.",
      },
    },
    {
      "@type": "Question",
      name: "Is Ajit Kumar studying DevOps engineering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. His academic curriculum and self-learning path both focus heavily on DevOps practices including CI/CD automation with GitHub Actions, Docker containerization, Kubernetes orchestration, Terraform Infrastructure as Code, and Linux system administration.",
      },
    },
    {
      "@type": "Question",
      name: "What certifications is Ajit Kumar pursuing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ajit Kumar is pursuing AWS Cloud Practitioner certification and has completed foundational web security studies based on OWASP principles. He is also actively working toward Docker and full-stack development credentials.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",      item: "https://ajitdev.com" },
    { "@type": "ListItem", position: 2, name: "Education", item: "https://ajitdev.com/education" },
  ],
};

// ========== DATA ==========

const focusAreas = [
  {
    icon: FiCloud,
    title: "Cloud Engineering",
    description:
      "Learning cloud infrastructure, deployment, and management with focus on AWS, serverless architectures, and cloud security best practices.",
    gradient: "from-blue-500 to-cyan-500",
    skills: ["AWS Services", "Cloud Deployment", "Infrastructure as Code", "Serverless"],
    progress: 75,
  },
  {
    icon: FiShield,
    title: "Cybersecurity",
    description:
      "Studying security principles, threat modeling, OWASP Top 10, secure coding practices, and DevSecOps methodologies.",
    gradient: "from-emerald-500 to-teal-500",
    skills: ["OWASP Top 10", "Security Headers", "Encryption", "Authentication"],
    progress: 70,
  },
  {
    icon: FiCode,
    title: "MERN Stack Development",
    description:
      "Building modern web applications using MERN stack, responsive design, RESTful APIs, and database management.",
    gradient: "from-purple-500 to-pink-500",
    skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
    progress: 85,
  },
  {
    icon: FiGitBranch,
    title: "DevOps & Automation",
    description:
      "Implementing CI/CD pipelines, containerization with Docker, infrastructure automation, and monitoring solutions.",
    gradient: "from-amber-500 to-orange-500",
    skills: ["Docker", "CI/CD", "GitHub Actions", "Automation"],
    progress: 65,
  },
];

const certifications = [
  {
    icon: FiAward,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Learning",
    progress: 60,
    gradientBar: "from-orange-500 to-amber-500",
    gradient: "from-orange-500/15 to-amber-500/15",
    timeline: "Q2 2024",
  },
  {
    icon: FiShield,
    title: "Web Security Fundamentals",
    issuer: "OWASP & MDN",
    status: "Completed",
    progress: 100,
    gradientBar: "from-emerald-500 to-teal-500",
    gradient: "from-emerald-500/15 to-teal-500/15",
    timeline: "Q1 2024",
  },
  {
    icon: FiTool,
    title: "Docker & Containers",
    issuer: "Docker Inc. & Self-Learning",
    status: "In Progress",
    progress: 75,
    gradientBar: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/15 to-cyan-500/15",
    timeline: "Current",
  },
  {
    icon: FiCode,
    title: "Full Stack Development",
    issuer: "MERN Stack Projects",
    status: "Advanced",
    progress: 85,
    gradientBar: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/15 to-pink-500/15",
    timeline: "Ongoing",
  },
];

const selfLearning = [
  {
    icon: FiLayers,
    title: "Data Structures & Algorithms",
    description: "Mastering core DSA concepts with C++ implementations and competitive programming practice",
    progress: 80,
    gradient: "from-indigo-500/15 to-blue-500/15",
  },
  {
    icon: FiCode,
    title: "Python Programming",
    description: "Learning Python for automation, scripting, data analysis, and backend development",
    progress: 70,
    gradient: "from-amber-500/15 to-yellow-500/15",
  },
  {
    icon: FiTerminal,
    title: "Linux System Administration",
    description: "Command line proficiency, shell scripting, and system administration fundamentals",
    progress: 75,
    gradient: "from-gray-600/15 to-gray-800/15",
  },
  {
    icon: FiZap,
    title: "DevOps CI/CD Practices",
    description: "Implementing automated pipelines, testing strategies, and deployment workflows",
    progress: 65,
    gradient: "from-emerald-500/15 to-green-500/15",
  },
];

const timelineData = [
  {
    semester: "Semester 1",
    title: "Foundations",
    description: "Programming basics, Mathematics, Computer Fundamentals",
    skills: ["C++ Basics", "Discrete Math", "Computer Architecture"],
    icon: FiBook,
    gradient: "from-blue-500/15 to-blue-600/15",
  },
  {
    semester: "Semester 2",
    title: "Web Technologies",
    description: "HTML, CSS, JavaScript fundamentals, Database concepts",
    skills: ["HTML/CSS", "JavaScript", "SQL Basics"],
    icon: FiCode,
    gradient: "from-emerald-500/15 to-emerald-600/15",
  },
  {
    semester: "Semester 3",
    title: "Advanced Programming",
    description: "Object-Oriented Programming, Data Structures, Web Development",
    skills: ["OOP", "DSA", "React Basics"],
    icon: FiCpu,
    gradient: "from-purple-500/15 to-purple-600/15",
  },
  {
    semester: "Semester 4",
    title: "Cloud & Security",
    description: "Cloud Computing, Network Security, Full Stack Development",
    skills: ["AWS Basics", "Security Principles", "MERN Stack"],
    icon: FiCloud,
    gradient: "from-orange-500/15 to-orange-600/15",
  },
  {
    semester: "Semester 5",
    title: "Specialization",
    description: "Advanced Cloud, DevSecOps, Project Development",
    skills: ["Cloud Security", "Docker", "Project Management"],
    icon: FiShield,
    gradient: "from-rose-500/15 to-red-600/15",
  },
  {
    semester: "Semester 6",
    title: "Capstone & Projects",
    description: "Major projects, Internship preparation, Career development",
    skills: ["Real Projects", "Deployment", "Industry Standards"],
    icon: FiBriefcase,
    gradient: "from-indigo-500/15 to-indigo-600/15",
  },
];

const keyLearningAreas = [
  { icon: FiCloud,     text: "Cloud Computing", color: "text-blue-600",   bg: "bg-blue-50"   },
  { icon: FiShield,    text: "Cybersecurity",   color: "text-emerald-600",bg: "bg-emerald-50"},
  { icon: FiCode,      text: "Full Stack Dev",  color: "text-purple-600", bg: "bg-purple-50" },
  { icon: FiGitBranch, text: "DevOps Concepts", color: "text-amber-600",  bg: "bg-amber-50"  },
];

const statusStyles = {
  Completed:   "bg-green-100 text-green-800",
  Learning:    "bg-blue-100 text-blue-800",
  Advanced:    "bg-purple-100 text-purple-800",
  "In Progress":"bg-amber-100 text-amber-800",
};

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
  hover:   { scale: 1.02, y: -5,   transition: { duration: 0.2 } },
};

// ========== MAIN COMPONENT ==========
const Education = () => {
  const [isLoaded, setIsLoaded]               = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ REMOVED: activeTimeline state was set but never used in rendering

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Mobile scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ✅ SEO: Full Helmet with all meta + 4 JSON-LD schemas */}
      <Helmet>
        <title>BCA Cloud & Security — Education Journey | Ajit Kumar</title>
        <meta
          name="description"
          content="Ajit Kumar is pursuing BCA Cloud & Security at Amity University Online, specializing in AWS cloud computing, DevOps automation, cybersecurity, and MERN stack development. Explore his academic journey, certifications, and learning progression."
        />
        <link rel="canonical" href="https://ajitdev.com/education" />
        <meta name="author" content="Ajit Kumar" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Katihar, Bihar, India" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Education — BCA Cloud & Security | Ajit Kumar" />
        <meta property="og:description" content="Academic journey in Cloud Engineering, Cybersecurity, DevOps and MERN stack development at Amity University Online." />
        <meta property="og:url" content="https://ajitdev.com/education" />
        <meta property="og:image" content="https://ajitdev.com/og-image.jpg" />
        <meta property="og:image:alt" content="Ajit Kumar Education — BCA Cloud & Security" />
        <meta property="og:site_name" content="Ajit Kumar Portfolio" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BCA Cloud & Security — Ajit Kumar Education" />
        <meta name="twitter:description" content="Education and certifications in Cloud, DevOps, Cybersecurity and MERN stack development." />
        <meta name="twitter:image" content="https://ajitdev.com/og-image.jpg" />

        {/* JSON-LD — All 4 schemas in Helmet for correct SPA/SSR injection */}
        <script type="application/ld+json">{JSON.stringify(educationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(personEducationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col bg-white overflow-hidden"
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

            {/* ✅ SEO: Hidden topical authority paragraph */}
            <section className="sr-only" aria-label="Education overview">
              <h2>BCA Cloud & Security Specialization — DevOps Engineering Focus</h2>
              <p>
                Ajit Kumar is pursuing a Bachelor of Computer Applications with specialization in
                Cloud Computing and Security at Amity University Online. His curriculum integrates
                AWS cloud infrastructure, DevOps automation, Docker containerization, CI/CD pipelines,
                cybersecurity principles, Linux system administration, and full-stack MERN stack
                development. He is actively learning Kubernetes orchestration, Terraform Infrastructure
                as Code, and DevSecOps practices to become a fully capable remote DevOps Engineer from
                Katihar, Bihar, India.
              </p>
            </section>

            {/* ===== PAGE HEADER ===== */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
              aria-labelledby="education-heading"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex p-5 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-2xl mb-6 border border-white/40"
                aria-hidden="true"
              >
                <FiBook className="text-4xl text-blue-600" />
              </motion.div>

              <motion.h1
                id="education-heading"
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
              >
                Education & Learning Journey
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-5">
                BCA — Cloud &amp; Security Specialization
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" aria-hidden="true" />
                Active Learning Journey
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
              aria-label={isMobileMenuOpen ? "Close education menu" : "Open education menu"}
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
                  aria-label="Navigate education sections"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 300 }}
                  className="lg:hidden fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl z-40 rounded-t-2xl"
                  style={{ maxHeight: "60vh", overflowY: "auto" }}
                >
                  <div className="p-6 space-y-5">
                    <h2 className="text-xl font-bold text-gray-900">Quick Navigation</h2>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: FiBook,      label: "Program",        section: "main-education" },
                        { icon: FiTarget,    label: "Focus Areas",    section: "focus-areas"    },
                        { icon: FiAward,     label: "Certifications", section: "certifications" },
                        { icon: FiTrendingUp,label: "Timeline",       section: "timeline"       },
                      ].map((item) => (
                        <motion.button
                          key={item.section}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => scrollTo(item.section)}
                          className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <item.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                          <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ===== MAIN EDUCATION CARD ===== */}
            {/* ✅ SEO: itemScope for EducationalOccupationalCredential */}
            <motion.section
              id="main-education"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-16"
              aria-labelledby="degree-heading"
              itemScope
              itemType="https://schema.org/EducationalOccupationalCredential"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-10 lg:p-12 border border-blue-100 shadow-xl">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                  {/* Icon & duration */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="w-28 h-28 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center shadow-lg mx-auto lg:mx-0">
                      <FiBook className="w-14 h-14 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="mt-5">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-md">
                        <FiClock className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>2025 – 2027</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                      <div>
                        {/* ✅ SEO: itemProp on degree name and provider */}
                        <h2
                          id="degree-heading"
                          className="text-3xl font-bold text-gray-900 mb-1"
                          itemProp="name"
                        >
                          BCA — Cloud &amp; Security
                        </h2>
                        <p className="text-gray-600">
                          Bachelor of Computer Applications · Specialization
                        </p>
                        <p
                          className="text-blue-600 font-medium mt-1 text-sm"
                          itemProp="provider"
                          itemScope
                          itemType="https://schema.org/CollegeOrUniversity"
                        >
                          <span itemProp="name">Amity University Online</span>
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-md self-start">
                        <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" aria-hidden="true" />
                        Current Student
                        <FiTrendingUp className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Key learning areas */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                      {keyLearningAreas.map((item) => (
                        <motion.div
                          key={item.text}
                          variants={itemVariants}
                          whileHover={{ y: -3 }}
                          className={`p-4 rounded-xl ${item.bg} border border-white/60`}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0`} aria-hidden="true" />
                            <span className="text-gray-800 font-medium text-sm">{item.text}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* ✅ SEO: Rich description paragraph with natural keywords */}
                    <p className="text-gray-700 leading-relaxed" itemProp="description">
                      A specialized undergraduate program combining <strong>cloud computing</strong>,{" "}
                      <strong>cybersecurity principles</strong>, and modern software engineering. The
                      curriculum covers <strong>AWS cloud infrastructure</strong>, network security,{" "}
                      <strong>DevOps automation</strong>, containerization with Docker, secure full-stack
                      development with the MERN stack, and Linux system administration — giving a
                      solid foundation for real-world DevOps and cloud engineering roles.
                    </p>
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
              className="mb-16"
              aria-labelledby="focus-heading"
            >
              <div className="text-center mb-12">
                <h2 id="focus-heading" className="text-3xl font-bold text-gray-900 mb-3">
                  Technical Focus Areas
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  Specialized learning paths combining academic theory with practical implementation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {focusAreas.map((area) => (
                  <motion.article
                    key={area.title}
                    variants={cardVariants}
                    whileHover="hover"
                    className="relative group"
                  >
                    <div
                      className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur transition duration-500"
                      aria-hidden="true"
                    />
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-7 shadow-md hover:shadow-xl transition-all h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-5">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center shadow-md flex-shrink-0`}
                          aria-hidden="true"
                        >
                          <area.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{area.title}</h3>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                        {area.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {area.skills.map((skill) => (
                          <span key={skill} className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-gray-500">Progress</span>
                          <span className="font-semibold text-gray-900">{area.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${area.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className={`h-full rounded-full bg-gradient-to-r ${area.gradient}`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.article>
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
              className="mb-16"
              aria-labelledby="certs-heading"
            >
              <div className="text-center mb-12">
                <h2 id="certs-heading" className="text-3xl font-bold text-gray-900 mb-3">
                  Professional Certifications
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  Industry-recognized certifications and learning tracks
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert) => (
                  <motion.article
                    key={cert.title}
                    variants={cardVariants}
                    whileHover="hover"
                    className={`rounded-2xl p-7 bg-gradient-to-br ${cert.gradient} border border-white/50 shadow-md`}
                    itemScope
                    itemType="https://schema.org/EducationalOccupationalCredential"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm flex-shrink-0">
                        <cert.icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 leading-tight" itemProp="name">
                          {cert.title}
                        </h3>
                        <p className="text-gray-500 text-xs mt-0.5" itemProp="provider">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[cert.status] ?? "bg-gray-100 text-gray-700"}`}>
                          {cert.status}
                        </span>
                        <span className="text-xs text-gray-500">{cert.timeline}</span>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-gray-500">Progress</span>
                          <span className="font-semibold text-gray-900">{cert.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${cert.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className={`h-full rounded-full bg-gradient-to-r ${cert.gradientBar}`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            {/* ===== SELF-LEARNING ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-16"
              aria-labelledby="self-learning-heading"
            >
              <div className="text-center mb-12">
                <h2 id="self-learning-heading" className="text-3xl font-bold text-gray-900 mb-3">
                  Self-Learning &amp; Continuous Education
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  Ongoing skill development beyond the academic curriculum
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {selfLearning.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl p-7 bg-gradient-to-br ${item.gradient} border border-white/50 shadow-md`}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-11 h-11 bg-white/80 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 leading-tight">{item.title}</h3>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{item.description}</p>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-semibold text-gray-900">{item.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
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
              viewport={{ once: true, margin: "-60px" }}
              variants={containerVariants}
              className="mb-16"
              aria-labelledby="timeline-heading"
            >
              <div className="text-center mb-12">
                <h2 id="timeline-heading" className="text-3xl font-bold text-gray-900 mb-3">
                  Academic Timeline
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  Semester-by-semester learning progression and skill development
                </p>
              </div>

              <div className="relative">
                {/* Vertical line — desktop only */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 hidden lg:block"
                  aria-hidden="true"
                />

                <div className="space-y-8 lg:space-y-12">
                  {timelineData.map((item, index) => (
                    <motion.div
                      key={item.semester}
                      variants={itemVariants}
                      className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                        index % 2 === 0 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Timeline dot */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 hidden lg:block"
                        aria-hidden="true"
                      />

                      {/* Card */}
                      <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className={`p-7 rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/50 shadow-md`}
                        >
                          <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                            <div className="w-11 h-11 bg-white/80 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                              <item.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                                {item.semester}
                              </p>
                              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                            {item.skills.map((skill) => (
                              <span key={skill} className="px-2.5 py-1 bg-white/60 text-gray-700 rounded-lg text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      {/* Spacer */}
                      <div className="hidden lg:block lg:w-2/12" aria-hidden="true" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* ===== CTA ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              aria-label="Contact call to action"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white p-12 shadow-2xl">
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"
                  aria-hidden="true"
                />
                <div className="relative text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Ready to Build Something Great?
                  </h2>
                  <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                    Let's discuss how my education, skills, and learning journey can contribute to your projects.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl min-w-[200px]"
                      aria-label="Contact Ajit Kumar"
                    >
                      <FiSend className="w-5 h-5" aria-hidden="true" />
                      Get In Touch
                    </Link>
                    <Link
                      to="/projects"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 border border-white/20 transition-all min-w-[200px]"
                      aria-label="View DevOps and full stack projects"
                    >
                      <FiCode className="w-5 h-5" aria-hidden="true" />
                      View Projects
                    </Link>
                  </div>
                  <p className="text-gray-400 text-sm mt-8">
                    Download my{" "}
                    <a href="/resume.pdf" download className="text-blue-400 hover:text-blue-300 underline font-medium">
                      resume
                    </a>{" "}
                    for detailed academic and professional information
                  </p>
                </div>
              </div>
            </motion.section>

            {/* ✅ SEO: Hidden internal navigation */}
            <nav className="sr-only" aria-label="Site navigation">
              <ul>
                <li><a href="/">Home — DevOps Engineer Katihar Bihar India</a></li>
                <li><a href="/about">About Ajit Kumar — DevSecOps Engineer</a></li>
                <li><a href="/skills">Technical Skills — AWS Docker Kubernetes Terraform</a></li>
                <li><a href="/projects">DevOps & Full Stack Projects Portfolio</a></li>
                <li><a href="/education">Education — BCA Cloud &amp; Security</a></li>
                <li><a href="/contact">Hire Remote DevOps Engineer</a></li>
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