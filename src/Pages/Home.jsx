import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiCode,
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiShield,
  FiCloud,
  FiLayers,
  FiAward,
  FiCpu,
  FiArrowRight,
  FiServer,
  FiCheckCircle,
  FiBriefcase,
  FiUser,
  FiTerminal,
  FiTool,
  FiGitBranch,
  FiMonitor,
  FiLock,
  FiDatabase,
  FiZap,
} from "react-icons/fi";
import { FaGraduationCap, FaDocker, FaAws, FaJenkins, FaGithub } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiSonarqube } from "react-icons/si";

// ========== CONFIGURATION ==========
const SITE_CONFIG = {
  name: "Ajit Kumar",
  fullName: "Ajit Kumar",
  headline: "Ajit Kumar - DevOps Engineer from Katihar, Bihar, India",
  description: "Professional DevOps Engineer based in Katihar, Bihar, India. Specializing in DevSecOps, cloud infrastructure, CI/CD automation, and secure scalable applications. 2+ years experience in AWS, Docker, Kubernetes, and MERN stack.",
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
    "Cloud Infrastructure Engineer"
  ].join(", "),
  canonical: "https://ajitdev.com",
  location: {
    city: "Katihar",
    state: "Bihar",
    country: "India",
    full: "Katihar, Bihar, India"
  },
  roles: {
    primary: "DevOps Engineer",
    secondary: ["DevSecOps Engineer", "Cloud Engineer", "Full-Stack Engineer"]
  },
  contact: {
    email: "ajitk23192@gmail.com",
    github: "https://github.com/ajitdev01",
    linkedin: "https://www.linkedin.com/in/ajitdev01",
    website: "https://ajitdev.com"
  },
  education: {
    degree: "BCA Cloud & Security",
    university: "Amity University Online",
    year: "2024"
  }
};

// ========== ANIMATION VARIANTS ==========
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleOnHover = {
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

// ========== DATA ==========
const stats = [
  { 
    value: "15+", 
    label: "Projects",
    description: "Production deployments",
    icon: FiBriefcase,
    color: "blue"
  },
  { 
    value: "20+", 
    label: "Technologies",
    description: "DevOps & cloud tools",
    icon: FiTool,
    color: "purple"
  },
  { 
    value: "100%", 
    label: "Security Focus",
    description: "DevSecOps integrated",
    icon: FiShield,
    color: "green"
  },
  { 
    value: "2+", 
    label: "Years Experience",
    description: "Professional DevOps",
    icon: FiAward,
    color: "orange"
  }
];

const expertise = [
  {
    icon: FiShield,
    title: "DevSecOps",
    description: "Security-first DevOps with automated compliance, SAST/DAST, and secure CI/CD pipelines",
    gradient: "from-blue-500 to-cyan-500",
    keywords: ["Security", "Compliance", "Automation"]
  },
  {
    icon: FiCloud,
    title: "Cloud Architecture",
    description: "AWS infrastructure design, containerization with Docker, and Kubernetes orchestration",
    gradient: "from-purple-500 to-violet-500",
    keywords: ["AWS", "Docker", "Kubernetes"]
  },
  {
    icon: FiGitBranch,
    title: "CI/CD Automation",
    description: "Automated pipelines with GitHub Actions, Jenkins, and Infrastructure as Code with Terraform",
    gradient: "from-orange-500 to-red-500",
    keywords: ["CI/CD", "Automation", "Terraform"]
  },
  {
    icon: FiCode,
    title: "Full-Stack Engineering",
    description: "MERN stack development with TypeScript, REST APIs, and microservices architecture",
    gradient: "from-green-500 to-emerald-500",
    keywords: ["React", "Node.js", "MongoDB"]
  }
];

const techStack = {
  cloud: [
    { name: "AWS", icon: FaAws, gradient: "from-orange-500 to-yellow-500" },
    { name: "Docker", icon: FaDocker, gradient: "from-blue-400 to-blue-600" },
    { name: "Kubernetes", icon: SiKubernetes, gradient: "from-blue-500 to-indigo-600" },
  ],
  cicd: [
    { name: "GitHub Actions", icon: FaGithub, gradient: "from-gray-700 to-gray-900" },
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
  ]
};

// ========== JSON-LD STRUCTURED DATA ==========
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": SITE_CONFIG.name,
  "jobTitle": [SITE_CONFIG.roles.primary, ...SITE_CONFIG.roles.secondary].join(", "),
  "description": SITE_CONFIG.description,
  "email": SITE_CONFIG.contact.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": SITE_CONFIG.location.city,
    "addressRegion": SITE_CONFIG.location.state,
    "addressCountry": SITE_CONFIG.location.country
  },
  "homeLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": SITE_CONFIG.location.city,
      "addressRegion": SITE_CONFIG.location.state,
      "addressCountry": SITE_CONFIG.location.country
    }
  },
  "sameAs": [
    SITE_CONFIG.contact.github,
    SITE_CONFIG.contact.linkedin
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": SITE_CONFIG.education.university
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "degree",
    "name": SITE_CONFIG.education.degree
  },
  "knowsAbout": [
    "DevOps",
    "DevSecOps",
    "Cloud Security",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "MERN Stack",
    "React",
    "Node.js",
    "TypeScript"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance",
    "description": "Remote DevOps Engineering & Consulting"
  },
  "skills": "DevOps, DevSecOps, Cloud Architecture, CI/CD Automation, Containerization, Infrastructure as Code, Security Engineering"
};

// ========== COMPONENTS ==========
const StatCard = ({ stat, index }) => {
  const colorClasses = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-violet-500",
    green: "from-green-500 to-emerald-500",
    orange: "from-orange-500 to-red-500"
  };

  return (
    <motion.div
      variants={fadeInUp}
      whileHover="hover"
      variants={{ ...fadeInUp, ...scaleOnHover }}
      className="relative group"
      itemScope
      itemType="https://schema.org/QuantitativeValue"
    >
      <meta itemProp="name" content={stat.label} />
      <meta itemProp="value" content={stat.value} />
      
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClasses[stat.color]} bg-opacity-10 flex items-center justify-center mb-4`}>
          <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
        </div>
        <div className={`text-3xl font-bold bg-gradient-to-r ${colorClasses[stat.color]} bg-clip-text text-transparent`}>
          {stat.value}
        </div>
        <div className="font-semibold text-gray-900 mt-1">{stat.label}</div>
        <p className="text-sm text-gray-600 mt-2">{stat.description}</p>
      </div>
    </motion.div>
  );
};

const ExpertiseCard = ({ item, index }) => (
  <motion.article
    variants={fadeInUp}
    whileHover="hover"
    variants={{ ...fadeInUp, ...scaleOnHover }}
    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
    itemScope
    itemType="https://schema.org/Service"
  >
    <meta itemProp="name" content={item.title} />
    <meta itemProp="description" content={item.description} />
    
    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
      <item.icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
    <p className="text-gray-600 mb-4">{item.description}</p>
    <div className="flex flex-wrap gap-2">
      {item.keywords.map(keyword => (
        <span key={keyword} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
          {keyword}
        </span>
      ))}
    </div>
  </motion.article>
);

const TechCategory = ({ title, items }) => (
  <div className="space-y-4">
    <h4 className="text-lg font-semibold text-gray-700">{title}</h4>
    <div className="grid grid-cols-3 gap-3">
      {items.map((tech, idx) => (
        <motion.div
          key={tech.name}
          variants={fadeInUp}
          whileHover={{ scale: 1.1, y: -4 }}
          className={`p-3 rounded-xl bg-gradient-to-r ${tech.gradient} bg-opacity-10 border border-gray-200 text-center group cursor-pointer`}
        >
          <tech.icon className="w-6 h-6 mx-auto mb-2 text-gray-700 group-hover:text-white transition-colors" />
          <span className="text-xs font-medium text-gray-700 group-hover:text-white transition-colors">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

// ========== MAIN COMPONENT ==========
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
    <Header/>
      <Helmet>
        {/* Basic SEO */}
        <title>{SITE_CONFIG.headline}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <meta name="keywords" content={SITE_CONFIG.keywords} />
        <link rel="canonical" href={SITE_CONFIG.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={SITE_CONFIG.headline} />
        <meta property="og:description" content={SITE_CONFIG.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_CONFIG.canonical} />
        <meta property="og:site_name" content={SITE_CONFIG.name} />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_CONFIG.headline} />
        <meta name="twitter:description" content={SITE_CONFIG.description} />
        
        {/* Geographic SEO */}
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content={SITE_CONFIG.location.full} />
        <meta name="geo.position" content="25.5667;87.5667" />
        <meta name="ICBM" content="25.5667, 87.5667" />
        
        {/* Additional SEO */}
        <meta name="author" content={SITE_CONFIG.name} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
        itemScope
        itemType="https://schema.org/ProfilePage"
      >
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="hero-heading"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Availability Badge */}
                  <motion.div
                    variants={fadeInUp}
                    className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-blue-700">
                      Available for Remote DevOps Opportunities
                    </span>
                  </motion.div>

                  {/* Main Heading */}
                  <div className="space-y-4">
                    <motion.h1
                      id="hero-heading"
                      variants={fadeInUp}
                      className="text-5xl lg:text-6xl font-bold text-gray-900"
                    >
                      Ajit Kumar
                    </motion.h1>
                    
                    <motion.h2
                      variants={fadeInUp}
                      className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                    >
                      {SITE_CONFIG.roles.primary}
                    </motion.h2>
                    
                    <motion.p
                      variants={fadeInUp}
                      className="text-xl text-gray-600"
                    >
                      <span className="font-semibold text-gray-900">Katihar, Bihar, India</span>
                      <br />
                      Specializing in DevSecOps, Cloud Infrastructure & CI/CD Automation
                    </motion.p>
                  </div>

                  {/* Role Tags */}
                  <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap gap-3"
                  >
                    {SITE_CONFIG.roles.secondary.map(role => (
                      <span
                        key={role}
                        className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </motion.div>

                  {/* Education & Location */}
                  <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap gap-6"
                  >
                    <div className="flex items-center gap-3">
                      <FaGraduationCap className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{SITE_CONFIG.education.degree}</p>
                        <p className="text-sm text-gray-600">{SITE_CONFIG.education.university}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiMapPin className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{SITE_CONFIG.location.full}</p>
                        <p className="text-sm text-gray-600">Available Worldwide (Remote)</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap gap-4 pt-4"
                  >
                    <Link
                      to="/projects"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                      aria-label="View Ajit Kumar's DevOps projects"
                    >
                      <FiCode className="w-5 h-5" />
                      <span>View DevOps Projects</span>
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-900 hover:border-blue-300 hover:bg-blue-50/50 transition-all"
                      aria-label="Contact Ajit Kumar for DevOps opportunities"
                    >
                      <FiMail className="w-5 h-5" />
                      <span>Contact for Opportunities</span>
                    </Link>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    variants={fadeInUp}
                    className="flex items-center gap-6 pt-4"
                  >
                    <span className="text-sm font-medium text-gray-500">Connect:</span>
                    <div className="flex gap-4">
                      <a
                        href={SITE_CONFIG.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        aria-label="GitHub profile"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                      <a
                        href={SITE_CONFIG.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                        aria-label="LinkedIn profile"
                      >
                        <FiLinkedin className="w-5 h-5 text-blue-700" />
                      </a>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="p-3 bg-red-100 rounded-lg hover:bg-red-200 transition-colors"
                        aria-label="Email"
                      >
                        <FiMail className="w-5 h-5 text-red-700" />
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Visual Element */}
                <motion.div
                  variants={fadeInUp}
                  className="relative hidden lg:block"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl" />
                    
                    <div className="relative">
                      <div className="flex justify-between items-start mb-8">
                        <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg border border-white/20">
                          <span className="text-white font-medium">Remote DevOps Engineer</span>
                        </div>
                        <FiZap className="w-8 h-8 text-yellow-400" />
                      </div>

                      <div className="text-center mb-8">
                        <FiShield className="w-16 h-16 mx-auto text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">DevSecOps Expert</h3>
                        <p className="text-gray-300">Building secure, scalable infrastructure from India</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {["AWS", "Docker", "K8s", "Terraform"].map((tech, i) => (
                          <div key={tech} className="px-4 py-2 bg-white/5 backdrop-blur rounded-lg border border-white/10 text-center">
                            <span className="text-white text-sm">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="stats-heading"
            >
              <h2 id="stats-heading" className="sr-only">Professional Statistics</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
                ))}
              </div>
            </motion.section>

            {/* About Preview */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="about-preview-heading"
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
                <h2 id="about-preview-heading" className="text-3xl font-bold text-gray-900 mb-6">
                  DevOps Engineer from <span className="text-blue-600">Katihar, India</span>
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700">
                      I'm <strong className="text-gray-900">Ajit Kumar</strong>, a passionate{" "}
                      <strong className="text-blue-600">DevOps Engineer</strong> based in{" "}
                      <strong className="text-gray-900">Katihar, Bihar</strong>, specializing in{" "}
                      <strong>DevSecOps practices</strong>, <strong>cloud-native architecture</strong>, 
                      and <strong>automated CI/CD pipelines</strong>.
                    </p>
                    <p className="text-gray-600">
                      With expertise in AWS, Docker, Kubernetes, and the MERN stack, I build secure, 
                      scalable infrastructure that follows DevSecOps principles from day one. 
                      My approach integrates security into every layer of the development lifecycle.
                    </p>
                    <div className="flex gap-4 pt-4">
                      {["Katihar", "Bihar", "India"].map(location => (
                        <span key={location} className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm">
                          📍 {location}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl">
                      <FiShield className="w-6 h-6 text-blue-600 mb-2" />
                      <p className="font-semibold">DevSecOps</p>
                      <p className="text-sm text-gray-600">Security-first approach</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <FiCloud className="w-6 h-6 text-purple-600 mb-2" />
                      <p className="font-semibold">Cloud Native</p>
                      <p className="text-sm text-gray-600">AWS & Kubernetes</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <FiGitBranch className="w-6 h-6 text-green-600 mb-2" />
                      <p className="font-semibold">CI/CD Automation</p>
                      <p className="text-sm text-gray-600">GitHub Actions, Jenkins</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <FiMonitor className="w-6 h-6 text-orange-600 mb-2" />
                      <p className="font-semibold">Monitoring</p>
                      <p className="text-sm text-gray-600">Prometheus, Grafana</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Expertise Grid */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="expertise-heading"
            >
              <h2 id="expertise-heading" className="text-3xl font-bold text-gray-900 mb-10 text-center">
                Core Expertise
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertise.map((item, index) => (
                  <ExpertiseCard key={index} item={item} index={index} />
                ))}
              </div>
            </motion.section>

            {/* Tech Stack */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="tech-heading"
            >
              <h2 id="tech-heading" className="text-3xl font-bold text-gray-900 mb-10 text-center">
                Technologies & Tools
              </h2>
              
              <div className="grid lg:grid-cols-4 gap-8">
                <TechCategory title="Cloud & Container" items={techStack.cloud} />
                <TechCategory title="CI/CD & IaC" items={techStack.cicd} />
                <TechCategory title="Monitoring & Security" items={techStack.monitoring} />
                <TechCategory title="Development" items={techStack.development} />
              </div>
            </motion.section>

            {/* Final CTA */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-20"
              aria-label="Contact call to action"
            >
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Hire a DevOps Engineer from India
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Looking for a DevSecOps expert for your team? Let's build secure, scalable infrastructure together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
                  >
                    <FiMail />
                    Discuss Your Project
                    <FiArrowRight />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-lg border border-blue-400"
                  >
                    <FiCode />
                    View Portfolio
                  </Link>
                </div>
                <p className="text-white/80 mt-6 text-sm">
                  Remote DevOps Engineer • Available for opportunities worldwide
                </p>
              </div>
            </motion.section>

            {/* Hidden SEO Navigation */}
            <nav className="sr-only" aria-label="SEO Navigation">
              <ul>
                <li><Link to="/">Home - DevOps Engineer Katihar</Link></li>
                <li><Link to="/about">About - DevOps Engineer Bihar</Link></li>
                <li><Link to="/projects">DevOps Projects India</Link></li>
                <li><Link to="/contact">Contact DevOps Engineer</Link></li>
                <li><Link to="/skills">DevOps Skills & Technologies</Link></li>
              </ul>
            </nav>
          </div>
        </main>
      </motion.div>
      <Footer/>
    </>
  );
};

export default Home;