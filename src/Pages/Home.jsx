import { useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiCode, FiMail, FiMapPin, FiGithub, FiLinkedin, FiShield,
  FiCloud, FiLayers, FiAward, FiCpu, FiArrowRight, FiServer,
  FiCheckCircle, FiBriefcase, FiUser, FiTerminal, FiTool,
  FiGitBranch, FiMonitor, FiLock, FiDatabase, FiZap,
} from "react-icons/fi";
import { FaGraduationCap, FaDocker, FaAws, FaJenkins, FaGithub } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiSonarqube } from "react-icons/si";

// ========== CONFIGURATION ==========
const SITE_CONFIG = {
  name: "Ajit Kumar",
  fullName: "Ajit Kumar",
  headline: "Ajit Kumar — DevOps Engineer | Katihar, Bihar, India",
  description:
    "Ajit Kumar is a professional DevOps & DevSecOps Engineer based in Katihar, Bihar, India. Expert in AWS cloud infrastructure, Docker, Kubernetes, CI/CD automation, and secure MERN stack applications. Available for remote opportunities worldwide.",
  keywords: [
    "DevOps Engineer Katihar",
    "DevOps Engineer Bihar",
    "DevOps Engineer India",
    "DevSecOps Engineer India",
    "Cloud Engineer Katihar",
    "CI/CD Engineer India",
    "AWS DevOps Engineer",
    "Remote DevOps Engineer",
    "DevOps Consultant Bihar",
    "Cloud Infrastructure Engineer",
  ].join(", "),
  canonical: "https://ajitdev.com",
  location: {
    city: "Katihar",
    state: "Bihar",
    country: "India",
    full: "Katihar, Bihar, India",
  },
  roles: {
    primary: "DevOps Engineer",
    secondary: ["DevSecOps Engineer", "Cloud Engineer", "Full-Stack Engineer"],
  },
  contact: {
    email: "ajitk23192@gmail.com",
    github: "https://github.com/ajitdev01",
    linkedin: "https://www.linkedin.com/in/ajitdev01",
    website: "https://ajitdev.com",
  },
  education: {
    degree: "BCA Cloud & Security",
    university: "Amity University Online",
    year: "2024",
  },
};

// ========== STRUCTURED DATA ==========
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.canonical,
  image: "https://ajitdev.com/profile.jpg",
  jobTitle: [SITE_CONFIG.roles.primary, ...SITE_CONFIG.roles.secondary].join(", "),
  description: SITE_CONFIG.description,
  email: SITE_CONFIG.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_CONFIG.location.city,
    addressRegion: SITE_CONFIG.location.state,
    addressCountry: "IN",
  },
  sameAs: [
    SITE_CONFIG.contact.github,
    SITE_CONFIG.contact.linkedin,
    SITE_CONFIG.canonical,
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: SITE_CONFIG.education.university,
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: SITE_CONFIG.education.degree,
    recognizedBy: { "@type": "Organization", name: SITE_CONFIG.education.university },
  },
  knowsAbout: [
    "DevOps Engineering", "DevSecOps", "Cloud Security", "AWS", "Docker",
    "Kubernetes", "Terraform", "CI/CD Pipelines", "MERN Stack", "React",
    "Node.js", "TypeScript", "Prometheus", "Grafana", "Jenkins",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
    description: "Remote DevOps Engineering & Consulting",
  },
  skills:
    "DevOps, DevSecOps, Cloud Architecture, CI/CD Automation, Containerization, Infrastructure as Code, Security Engineering, MERN Stack",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ajitdev.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: "https://ajitdev.com/projects",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Contact",
      item: "https://ajitdev.com/contact",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Ajit Kumar do as a DevOps Engineer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ajit Kumar is a DevOps Engineer based in Katihar, Bihar, India who specializes in building and managing CI/CD pipelines, cloud infrastructure on AWS, container orchestration with Docker and Kubernetes, and implementing DevSecOps practices to integrate security into every stage of the software delivery lifecycle.",
      },
    },
    {
      "@type": "Question",
      name: "What is DevSecOps and how does Ajit implement it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevSecOps is the practice of integrating security into every phase of DevOps — from planning and coding to testing and deployment. Ajit Kumar implements DevSecOps by using SAST/DAST tools, enforcing least-privilege IAM policies, automating compliance checks with SonarQube, and building security gates into CI/CD pipelines using GitHub Actions and Jenkins.",
      },
    },
    {
      "@type": "Question",
      name: "What cloud and DevOps tools does Ajit Kumar use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ajit Kumar is experienced with AWS (EC2, S3, EKS, IAM, VPC), Docker, Kubernetes, Terraform, GitHub Actions, Jenkins, Prometheus, Grafana, SonarQube, and the MERN stack (MongoDB, Express, React, Node.js).",
      },
    },
    {
      "@type": "Question",
      name: "Is Ajit Kumar available for remote DevOps opportunities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ajit Kumar is based in Katihar, Bihar, India and is fully available for remote DevOps, DevSecOps, and cloud engineering opportunities with teams and companies worldwide.",
      },
    },
  ],
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: { "@type": "Person", name: SITE_CONFIG.name },
  name: `${SITE_CONFIG.name} — DevOps Portfolio`,
  url: SITE_CONFIG.canonical,
  description: SITE_CONFIG.description,
};

// ========== ANIMATION VARIANTS ==========
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

// ========== DATA ==========
const stats = [
  { value: "15+", label: "Projects Shipped", description: "Production deployments", icon: FiBriefcase, color: "blue" },
  { value: "20+", label: "Technologies", description: "DevOps & cloud tools", icon: FiTool, color: "purple" },
  { value: "100%", label: "Security Focus", description: "DevSecOps integrated", icon: FiShield, color: "green" },
  { value: "1+", label: "Years Experience", description: "Professional DevOps", icon: FiAward, color: "orange" },
];

const expertise = [
  {
    icon: FiShield, title: "DevSecOps",
    description: "Security-first DevOps with automated compliance, SAST/DAST scanning, and secure CI/CD pipelines that enforce policy at every stage.",
    gradient: "from-blue-500 to-cyan-500",
    keywords: ["Security", "SAST/DAST", "Compliance"],
  },
  {
    icon: FiCloud, title: "Cloud Architecture",
    description: "AWS infrastructure design, containerization with Docker, and Kubernetes orchestration for resilient, auto-scaling workloads.",
    gradient: "from-purple-500 to-violet-500",
    keywords: ["AWS", "Docker", "Kubernetes"],
  },
  {
    icon: FiGitBranch, title: "CI/CD Automation",
    description: "Automated pipelines using GitHub Actions and Jenkins with Infrastructure as Code via Terraform for repeatable, reliable deployments.",
    gradient: "from-orange-500 to-red-500",
    keywords: ["CI/CD", "GitHub Actions", "Terraform"],
  },
  {
    icon: FiCode, title: "Full-Stack Engineering",
    description: "MERN stack applications with TypeScript, REST APIs, and microservices architecture — built for performance and maintainability.",
    gradient: "from-green-500 to-emerald-500",
    keywords: ["React", "Node.js", "MongoDB"],
  },
];

const techStack = {
  cloud: [
    { name: "AWS", icon: FaAws, gradient: "from-orange-400 to-yellow-500" },
    { name: "Docker", icon: FaDocker, gradient: "from-blue-400 to-blue-600" },
    { name: "Kubernetes", icon: SiKubernetes, gradient: "from-blue-500 to-indigo-600" },
  ],
  cicd: [
    { name: "GitHub Actions", icon: FaGithub, gradient: "from-gray-600 to-gray-800" },
    { name: "Jenkins", icon: FaJenkins, gradient: "from-red-500 to-red-700" },
    { name: "Terraform", icon: SiTerraform, gradient: "from-purple-500 to-indigo-600" },
  ],
  monitoring: [
    { name: "Prometheus", icon: SiPrometheus, gradient: "from-orange-500 to-red-600" },
    { name: "Grafana", icon: SiGrafana, gradient: "from-orange-400 to-orange-600" },
    { name: "SonarQube", icon: SiSonarqube, gradient: "from-blue-500 to-blue-700" },
  ],
  development: [
    { name: "React", icon: FiCode, gradient: "from-cyan-500 to-blue-500" },
    { name: "Node.js", icon: FiTerminal, gradient: "from-green-500 to-emerald-600" },
    { name: "MongoDB", icon: FiDatabase, gradient: "from-green-600 to-lime-600" },
  ],
};

const faqs = [
  {
    q: "What does a DevOps Engineer do?",
    a: "A DevOps Engineer bridges development and operations — automating deployment pipelines, managing cloud infrastructure, and ensuring systems are secure, scalable, and observable. My work spans writing Terraform configs, building CI/CD workflows, and instrumenting monitoring stacks.",
  },
  {
    q: "What is DevSecOps?",
    a: "DevSecOps integrates security practices directly into the DevOps lifecycle. Instead of treating security as an afterthought, I embed SAST/DAST scanning, dependency audits, and policy-as-code checks into every pipeline stage so vulnerabilities are caught before they reach production.",
  },
  {
    q: "What tools do you use?",
    a: "My core stack includes AWS for cloud infrastructure, Docker + Kubernetes for containerization, Terraform for IaC, GitHub Actions & Jenkins for CI/CD, and Prometheus + Grafana for observability. On the application side I work with the MERN stack and TypeScript.",
  },
  {
    q: "Are you available for remote work?",
    a: "Yes — I'm based in Katihar, Bihar, India and fully available for remote DevOps, DevSecOps, and cloud engineering roles or contracts with teams worldwide.",
  },
];

const colorMap = {
  blue: { bar: "from-blue-500 to-cyan-500", icon: "text-blue-600", bg: "bg-blue-50" },
  purple: { bar: "from-purple-500 to-violet-500", icon: "text-purple-600", bg: "bg-purple-50" },
  green: { bar: "from-green-500 to-emerald-500", icon: "text-green-600", bg: "bg-green-50" },
  orange: { bar: "from-orange-500 to-red-500", icon: "text-orange-600", bg: "bg-orange-50" },
};

// ========== SUBCOMPONENTS ==========
const StatCard = ({ stat }) => {
  const c = colorMap[stat.color];
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
      itemScope
      itemType="https://schema.org/QuantitativeValue"
    >
      <meta itemProp="name" content={stat.label} />
      <meta itemProp="value" content={stat.value} />
      <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
        <stat.icon className={`w-6 h-6 ${c.icon}`} />
      </div>
      <div className={`text-3xl font-bold bg-gradient-to-r ${c.bar} bg-clip-text text-transparent`}>
        {stat.value}
      </div>
      <div className="font-semibold text-gray-900 mt-1">{stat.label}</div>
      <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
    </motion.div>
  );
};

const ExpertiseCard = ({ item }) => (
  <motion.article
    variants={fadeInUp}
    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
    transition={{ duration: 0.25 }}
    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 group"
    itemScope
    itemType="https://schema.org/Service"
  >
    <meta itemProp="name" content={item.title} />
    <meta itemProp="description" content={item.description} />
    <div
      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
    >
      <item.icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
    <div className="flex flex-wrap gap-2">
      {item.keywords.map((kw) => (
        <span key={kw} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
          {kw}
        </span>
      ))}
    </div>
  </motion.article>
);

const TechBadge = ({ tech }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.1, y: -4 }}
    className={`p-3 rounded-xl bg-gradient-to-br ${tech.gradient} text-center group cursor-pointer shadow-sm`}
  >
    <tech.icon className="w-6 h-6 mx-auto mb-2 text-white opacity-90" />
    <span className="text-xs font-semibold text-white opacity-90">{tech.name}</span>
  </motion.div>
);

const TechCategory = ({ title, items }) => (
  <div className="space-y-3">
    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{title}</h4>
    <div className="grid grid-cols-3 gap-3">
      {items.map((tech) => (
        <TechBadge key={tech.name} tech={tech} />
      ))}
    </div>
  </div>
);

const FAQItem = ({ faq, index }) => (
  <motion.div
    variants={fadeInUp}
    className="border border-gray-200 rounded-xl p-6 bg-white hover:border-blue-200 hover:shadow-md transition-all"
    itemScope
    itemType="https://schema.org/Question"
  >
    <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-3" itemProp="name">
      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
        {index + 1}
      </span>
      {faq.q}
    </h3>
    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
      <p className="text-gray-600 leading-relaxed pl-9" itemProp="text">{faq.a}</p>
    </div>
  </motion.div>
);

// ========== MAIN COMPONENT ==========
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        {/* === Core SEO === */}
        <title>{SITE_CONFIG.headline}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <meta name="keywords" content={SITE_CONFIG.keywords} />
        <link rel="canonical" href={SITE_CONFIG.canonical} />
        <meta name="author" content={SITE_CONFIG.name} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="en" />

        {/* === Performance Hints === */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />

        {/* === Geographic SEO === */}
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content={SITE_CONFIG.location.full} />
        <meta name="geo.position" content="25.5667;87.5667" />
        <meta name="ICBM" content="25.5667, 87.5667" />

        {/* === Open Graph === */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={SITE_CONFIG.headline} />
        <meta property="og:description" content={SITE_CONFIG.description} />
        <meta property="og:url" content={SITE_CONFIG.canonical} />
        <meta property="og:site_name" content={SITE_CONFIG.name} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://ajitdev.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${SITE_CONFIG.name} - DevOps Engineer`} />
        <meta property="profile:first_name" content="Ajit" />
        <meta property="profile:last_name" content="Kumar" />

        {/* === Twitter Card === */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_CONFIG.headline} />
        <meta name="twitter:description" content={SITE_CONFIG.description} />
        <meta name="twitter:image" content="https://ajitdev.com/og-image.jpg" />
        <meta name="twitter:image:alt" content={`${SITE_CONFIG.name} - DevOps Engineer`} />

        {/* === JSON-LD Structured Data (all schemas in Helmet for proper SSR injection) === */}
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(profilePageSchema)}</script>
      </Helmet>

      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-white"
        itemScope
        itemType="https://schema.org/ProfilePage"
      >
        <main className="pt-24 pb-16" role="main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ===== HERO ===== */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mb-24"
              aria-labelledby="hero-heading"
              itemScope
              itemType="https://schema.org/Person"
              itemProp="mainEntity"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left */}
                <div className="space-y-8">
                  <motion.div
                    variants={fadeInUp}
                    className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200"
                  >
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-emerald-700">
                      Open to Remote DevOps Opportunities
                    </span>
                  </motion.div>

                  <div className="space-y-3">
                    <motion.h1
                      id="hero-heading"
                      variants={fadeInUp}
                      className="text-5xl lg:text-6xl font-bold text-gray-950 tracking-tight"
                      itemProp="name"
                    >
                      Ajit Kumar
                    </motion.h1>

                    <motion.div variants={fadeInUp}>
                      <h2
                        className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                        itemProp="jobTitle"
                      >
                        {SITE_CONFIG.roles.primary}
                      </h2>
                    </motion.div>

                    <motion.p variants={fadeInUp} className="text-lg text-gray-600">
                      <span className="font-semibold text-gray-900" itemProp="address">
                        {SITE_CONFIG.location.full}
                      </span>
                      {" · "}Specializing in DevSecOps, Cloud Infrastructure & CI/CD
                    </motion.p>
                  </div>

                  {/* Role Tags */}
                  <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                    {SITE_CONFIG.roles.secondary.map((role) => (
                      <span
                        key={role}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100"
                      >
                        {role}
                      </span>
                    ))}
                  </motion.div>

                  {/* Education & Location */}
                  <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                        <FaGraduationCap className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm" itemProp="hasCredential">{SITE_CONFIG.education.degree}</p>
                        <p className="text-xs text-gray-500">{SITE_CONFIG.education.university}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                        <FiMapPin className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{SITE_CONFIG.location.full}</p>
                        <p className="text-xs text-gray-500">Available Worldwide · Remote</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTAs */}
                  <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                    <Link
                      to="/projects"
                      className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300"
                      aria-label="View Ajit Kumar's DevOps projects portfolio"
                    >
                      <FiCode className="w-5 h-5" />
                      View Projects
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-900 hover:border-blue-300 hover:bg-blue-50 transition-all"
                      aria-label="Contact Ajit Kumar for remote DevOps opportunities"
                    >
                      <FiMail className="w-5 h-5" />
                      Get in Touch
                    </Link>
                  </motion.div>

                  {/* Social */}
                  <motion.div variants={fadeInUp} className="flex items-center gap-4">
                    <span className="text-sm text-gray-400">Connect:</span>
                    <a
                      href={SITE_CONFIG.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      aria-label="Ajit Kumar GitHub profile"
                      itemProp="sameAs"
                    >
                      <FiGithub className="w-5 h-5 text-gray-700" />
                    </a>
                    <a
                      href={SITE_CONFIG.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                      aria-label="Ajit Kumar LinkedIn profile"
                      itemProp="sameAs"
                    >
                      <FiLinkedin className="w-5 h-5 text-blue-700" />
                    </a>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="p-2.5 bg-red-100 rounded-lg hover:bg-red-200 transition-colors"
                      aria-label="Email Ajit Kumar"
                      itemProp="email"
                    >
                      <FiMail className="w-5 h-5 text-red-700" />
                    </a>
                  </motion.div>
                </div>

                {/* Right — Visual */}
                <motion.div variants={fadeInUp} className="relative hidden lg:block">
                  <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden">
                    {/* Subtle grid overlay */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

                    <div className="relative">
                      <div className="flex justify-between items-center mb-8">
                        <div className="px-3 py-1.5 bg-white/10 rounded-lg border border-white/20">
                          <span className="text-white/90 text-sm font-medium">Remote · Worldwide</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        </div>
                      </div>

                      <div className="text-center mb-8">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                          <FiShield className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">DevSecOps</h3>
                        <p className="text-gray-400 text-sm">Security · Scale · Automation</p>
                      </div>

                      {/* Terminal-style snippet */}
                      <div className="bg-black/40 rounded-xl p-4 border border-white/10 mb-4 font-mono text-xs">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-green-400">▶</span>
                          <span className="text-gray-400">pipeline.yaml</span>
                        </div>
                        <div className="space-y-1">
                          <p><span className="text-blue-400">deploy:</span> <span className="text-green-300">production</span></p>
                          <p className="pl-2"><span className="text-purple-400">security_scan:</span> <span className="text-yellow-300">✓ passed</span></p>
                          <p className="pl-2"><span className="text-purple-400">container:</span> <span className="text-cyan-300">k8s/aws-eks</span></p>
                          <p className="pl-2"><span className="text-purple-400">iac:</span> <span className="text-cyan-300">terraform apply</span></p>
                          <p className="pl-2"><span className="text-purple-400">status:</span> <span className="text-green-400 animate-pulse">● running</span></p>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-2">
                        {["AWS", "Docker", "K8s", "Terraform"].map((tech) => (
                          <div key={tech} className="py-2 px-1 bg-white/5 rounded-lg border border-white/10 text-center">
                            <span className="text-white/80 text-xs font-medium">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* ===== STATS ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="mb-24"
              aria-labelledby="stats-heading"
            >
              <h2 id="stats-heading" className="sr-only">Professional Statistics</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat, i) => (
                  <StatCard key={i} stat={stat} />
                ))}
              </div>
            </motion.section>

            {/* ===== ABOUT / TOPICAL AUTHORITY ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-24"
              aria-labelledby="about-heading"
              itemScope
              itemType="https://schema.org/Person"
              itemProp="about"
            >
              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-white rounded-3xl p-8 lg:p-12 border border-blue-100">
                <h2
                  id="about-heading"
                  className="text-3xl font-bold text-gray-900 mb-6"
                >
                  DevOps Engineer from{" "}
                  <span className="text-blue-600">Katihar, Bihar, India</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-10">
                  {/* Rich text block — topical authority for SEO */}
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      I'm <strong className="text-gray-900">Ajit Kumar</strong>, a{" "}
                      <strong className="text-blue-600">DevOps & DevSecOps Engineer</strong> based in{" "}
                      <strong>Katihar, Bihar</strong>. I specialize in building cloud-native infrastructure
                      on <strong>AWS</strong>, orchestrating containerized workloads with{" "}
                      <strong>Docker and Kubernetes</strong>, and automating delivery pipelines using{" "}
                      <strong>GitHub Actions</strong> and <strong>Terraform</strong>.
                    </p>
                    <p>
                      My philosophy is <em>security by design</em>. Every pipeline I build includes
                      automated SAST/DAST scanning, least-privilege IAM enforcement, and policy-as-code
                      checks — so teams ship fast without sacrificing compliance. I monitor production
                      environments with <strong>Prometheus</strong> and <strong>Grafana</strong> to
                      catch regressions before users notice.
                    </p>
                    <p>
                      On the application side, I develop and deploy <strong>MERN stack</strong>{" "}
                      applications with TypeScript and RESTful microservices. Whether architecting
                      greenfield infra or migrating legacy workloads to the cloud, I focus on
                      reliability, observability, and cost-efficiency.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Katihar", "Bihar", "India", "Remote"].map((loc) => (
                        <span
                          key={loc}
                          className="px-3 py-1.5 bg-white rounded-full text-gray-700 text-sm font-medium shadow-sm border border-gray-200"
                        >
                          📍 {loc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Capability grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: FiShield, label: "DevSecOps", sub: "Security-first pipelines", color: "text-blue-600", bg: "bg-blue-50" },
                      { icon: FiCloud, label: "Cloud Native", sub: "AWS · EKS · VPC", color: "text-purple-600", bg: "bg-purple-50" },
                      { icon: FiGitBranch, label: "CI/CD", sub: "GitHub Actions · Jenkins", color: "text-green-600", bg: "bg-green-50" },
                      { icon: FiMonitor, label: "Observability", sub: "Prometheus · Grafana", color: "text-orange-600", bg: "bg-orange-50" },
                    ].map((item) => (
                      <div key={item.label} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <div className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center mb-3`}>
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* ===== EXPERTISE GRID ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-24"
              aria-labelledby="expertise-heading"
            >
              <div className="text-center mb-12">
                <h2 id="expertise-heading" className="text-3xl font-bold text-gray-900 mb-3">
                  Core Expertise
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  End-to-end DevOps capabilities from infrastructure design to secure delivery.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertise.map((item, i) => (
                  <ExpertiseCard key={i} item={item} />
                ))}
              </div>
            </motion.section>

            {/* ===== TECH STACK ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-24"
              aria-labelledby="tech-heading"
              itemProp="knowsAbout"
            >
              <div className="text-center mb-12">
                <h2 id="tech-heading" className="text-3xl font-bold text-gray-900 mb-3">
                  Technologies & Tools
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  20+ tools across cloud, containerization, CI/CD, monitoring, and full-stack development.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <TechCategory title="Cloud & Container" items={techStack.cloud} />
                  <TechCategory title="CI/CD & IaC" items={techStack.cicd} />
                  <TechCategory title="Monitoring & Security" items={techStack.monitoring} />
                  <TechCategory title="Development" items={techStack.development} />
                </div>
              </div>
            </motion.section>

            {/* ===== FAQ — Rich Snippet Bait ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-24"
              aria-labelledby="faq-heading"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              <div className="text-center mb-12">
                <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  Common questions about my work, tools, and availability.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} faq={faq} index={i} />
                ))}
              </div>
            </motion.section>

            {/* ===== FINAL CTA ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-20"
              aria-label="Hire DevOps Engineer call to action"
            >
              <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                  }}
                />
                <div className="relative">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Hire a DevOps Engineer from India
                  </h2>
                  <p className="text-xl text-white/85 mb-8 max-w-2xl mx-auto">
                    Looking for a DevSecOps expert to build secure, scalable infrastructure? 
                    Let's talk — I'm available for remote roles worldwide.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl"
                      aria-label="Contact Ajit Kumar DevOps Engineer"
                    >
                      <FiMail className="w-5 h-5" />
                      Discuss Your Project
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/projects"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 border border-white/30 transition-all"
                      aria-label="View Ajit Kumar's DevOps portfolio"
                    >
                      <FiCode className="w-5 h-5" />
                      View Portfolio
                    </Link>
                  </div>
                  <p className="text-white/60 mt-6 text-sm">
                    Remote DevOps Engineer · Katihar, Bihar, India · Available Worldwide
                  </p>
                </div>
              </div>
            </motion.section>

            {/* ===== Hidden SEO Nav (crawlable, screen-reader only) ===== */}
            <nav className="sr-only" aria-label="Site pages">
              <ul>
                <li><Link to="/">Home — DevOps Engineer Katihar Bihar India</Link></li>
                <li><Link to="/about">About Ajit Kumar — DevSecOps Engineer Bihar</Link></li>
                <li><Link to="/projects">DevOps Projects Portfolio India</Link></li>
                <li><Link to="/contact">Contact Ajit Kumar — Remote DevOps Engineer</Link></li>
                <li><Link to="/skills">DevOps Skills AWS Docker Kubernetes Terraform</Link></li>
              </ul>
            </nav>

          </div>
        </main>
      </motion.div>

      <Footer />
    </>
  );
};

export default Home;