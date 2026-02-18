import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiCode,
  FiMail,
  FiMapPin,
  FiBook,
  FiGithub,
  FiLinkedin,
  FiShield,
  FiCloud,
  FiLayers,
  FiAward,
  FiCpu,
  FiChevronRight,
  FiArrowRight,
  FiServer,
  FiUsers,
  FiGlobe,
  FiCheckCircle,
  FiBriefcase,
  FiCalendar,
  FiTarget,
} from "react-icons/fi";
import { FaWhatsapp, FaGraduationCap, FaDev } from "react-icons/fa";

// ========== ANIMATION VARIANTS (Preserved) ==========
const pageVariants = {
  initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0 }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// ========== SEO-OPTIMIZED CONFIGURATION ==========
const SITE_CONFIG = {
  name: "Ajit Kumar",
  fullName: "Ajit Kumar",
  location: {
    city: "Katihar",
    state: "Bihar",
    country: "India",
    full: "Katihar, Bihar, India",
    short: "Katihar, India"
  },
  roles: [
    "DevOps Engineer",
    "DevSecOps Engineer",
    "Cloud Engineer",
    "Full-Stack Engineer"
  ],
  headline: "Ajit Kumar — DevOps Engineer & DevSecOps Specialist from Katihar, India",
  description: "Professional DevOps and DevSecOps Engineer based in Katihar, Bihar, India. Specializing in secure cloud infrastructure, CI/CD automation, and scalable web applications.",
  keywords: [
    "DevOps Engineer Katihar",
    "DevSecOps Engineer India",
    "Cloud Engineer Bihar",
    "Full Stack Developer Katihar",
    "CI/CD Specialist",
    "Kubernetes Expert",
    "AWS Cloud Engineer",
    "Secure Infrastructure Architect",
    "DevOps Consultant India",
    "Cloud Automation Engineer"
  ]
};

const HERO_CONFIG = {
  name: {
    firstName: "AJIT",
    lastName: "KUMAR",
    full: "Ajit Kumar",
    gradient: "from-blue-600 via-indigo-600 to-purple-600"
  },
  title: "DevOps & DevSecOps Engineer",
  fullTitle: "DevOps Engineer | DevSecOps Engineer | Cloud Engineer | Full-Stack Engineer",
  tagline: "Specializing in secure cloud infrastructure, CI/CD automation, and scalable web applications from Katihar, India",
  availability: {
    text: "OPEN FOR OPPORTUNITIES",
    fullText: "Open for DevOps, DevSecOps & Cloud Engineering Opportunities",
    remote: "Remote • Contract • Full-time",
    badge: "AVAILABLE FOR HIRE",
    status: "Actively seeking DevOps roles"
  },
  education: {
    degree: "BCA Cloud & Security",
    university: "Galgotias University",
    focus: "Cloud Security & Infrastructure"
  },
  location: {
    city: "Based in Katihar, India",
    full: "Katihar, Bihar, India",
    availability: "Available Worldwide (Remote)"
  }
};

const STATS = [
  { 
    value: "25+", 
    label: "Projects Delivered", 
    description: "Production applications & cloud infrastructure",
    color: "from-blue-500 to-cyan-500",
    icon: <FiLayers />,
    keyword: "DevOps Projects"
  },
  { 
    value: "20+", 
    label: "Technologies", 
    description: "Cloud, DevOps & full-stack tools",
    color: "from-violet-500 to-purple-500",
    icon: <FiCode />,
    keyword: "Technology Stack"
  },
  { 
    value: "100%", 
    label: "Security Focus", 
    description: "DevSecOps integrated workflow",
    color: "from-pink-500 to-rose-500",
    icon: <FiShield />,
    keyword: "Security First"
  },
  { 
    value: "2+", 
    label: "Years Experience", 
    description: "Professional DevOps engineering",
    color: "from-orange-500 to-amber-500",
    icon: <FiServer />,
    keyword: "Experience"
  }
];

const SOCIAL_LINKS = [
  {
    icon: <FiGithub />,
    label: "GitHub",
    url: "https://github.com/ajitdev01",
    gradient: "from-gray-800 to-gray-900",
    hover: "hover:from-gray-700 hover:to-gray-800",
    color: "text-gray-300",
    bgColor: "hover:bg-gray-700",
    ariaLabel: "View Ajit Kumar's GitHub repositories and DevOps projects"
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ajitdev01/",
    gradient: "from-blue-700 to-blue-800",
    hover: "hover:from-blue-600 hover:to-blue-700",
    color: "text-blue-300",
    bgColor: "hover:bg-blue-600",
    ariaLabel: "Connect with Ajit Kumar on LinkedIn for professional networking"
  },
  {
    icon: <FiMail />,
    label: "Email",
    url: "mailto:ajitk23192@gmail.com",
    gradient: "from-red-700 to-red-800",
    hover: "hover:from-red-600 hover:to-red-700",
    color: "text-red-300",
    bgColor: "hover:bg-red-500",
    ariaLabel: "Send email to Ajit Kumar about DevOps opportunities"
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    url: "https://wa.me/916205526784",
    gradient: "from-green-700 to-green-800",
    hover: "hover:from-green-600 hover:to-green-700",
    color: "text-green-300",
    bgColor: "hover:bg-green-500",
    ariaLabel: "Contact Ajit Kumar via WhatsApp for quick communication"
  }
];

const EXPERTISE = [
  {
    icon: <FiShield />,
    title: "DevSecOps & Security",
    description: "Security-first engineering with OWASP, SAST/DAST, and secure CI/CD pipelines",
    gradient: "from-blue-500 to-cyan-500",
    keywords: ["DevSecOps", "Security Automation", "Compliance", "OWASP"]
  },
  {
    icon: <FiCloud />,
    title: "Cloud-Native Architecture",
    description: "AWS, containerization with Docker, orchestration with Kubernetes",
    gradient: "from-violet-500 to-purple-500",
    keywords: ["AWS", "Docker", "Kubernetes", "Cloud Infrastructure"]
  },
  {
    icon: <FiLayers />,
    title: "CI/CD & Automation",
    description: "Automated pipelines with GitHub Actions, Jenkins, and Infrastructure as Code",
    gradient: "from-pink-500 to-rose-500",
    keywords: ["CI/CD", "Automation", "Terraform", "GitHub Actions"]
  },
  {
    icon: <FiServer />,
    title: "Full-Stack Development",
    description: "MERN stack applications with TypeScript and microservices architecture",
    gradient: "from-green-500 to-emerald-500",
    keywords: ["React", "Node.js", "TypeScript", "Microservices"]
  }
];

const TECH_STACK = [
  // Cloud & Infrastructure
  { label: "AWS", gradient: "from-orange-500 to-yellow-500", category: "Cloud" },
  { label: "Docker", gradient: "from-blue-400 to-blue-500", category: "Container" },
  { label: "Kubernetes", gradient: "from-blue-500 to-indigo-500", category: "Orchestration" },
  { label: "Terraform", gradient: "from-purple-500 to-purple-600", category: "IaC" },
  { label: "Linux", gradient: "from-gray-500 to-gray-600", category: "OS" },
  { label: "Nginx", gradient: "from-green-600 to-green-700", category: "Web Server" },
  
  // CI/CD & Tools
  { label: "GitHub Actions", gradient: "from-gray-700 to-gray-800", category: "CI/CD" },
  { label: "Jenkins", gradient: "from-red-500 to-red-600", category: "CI/CD" },
  { label: "ArgoCD", gradient: "from-orange-400 to-orange-500", category: "GitOps" },
  { label: "Ansible", gradient: "from-red-400 to-red-500", category: "Automation" },
  
  // Monitoring & Security
  { label: "Prometheus", gradient: "from-orange-600 to-red-600", category: "Monitoring" },
  { label: "Grafana", gradient: "from-orange-500 to-red-500", category: "Monitoring" },
  { label: "SonarQube", gradient: "from-blue-500 to-blue-600", category: "Security" },
  
  // Development
  { label: "React", gradient: "from-cyan-500 to-blue-600", category: "Frontend" },
  { label: "Node.js", gradient: "from-green-500 to-emerald-600", category: "Backend" },
  { label: "TypeScript", gradient: "from-blue-600 to-blue-800", category: "Language" },
  { label: "Python", gradient: "from-yellow-500 to-yellow-600", category: "Language" },
  { label: "MongoDB", gradient: "from-green-400 to-green-600", category: "Database" },
  { label: "PostgreSQL", gradient: "from-blue-400 to-blue-600", category: "Database" }
];

const CTA_CONFIG = {
  primary: {
    text: "View DevOps Projects",
    path: "/projects",
    icon: <FiCode />,
    gradient: "from-blue-600 to-purple-600",
    hoverGradient: "from-blue-700 to-purple-700",
    ariaLabel: "Browse Ajit Kumar's DevOps and cloud infrastructure projects"
  },
  secondary: {
    text: "Contact for Opportunities",
    path: "/contact",
    icon: <FiMail />,
    gradient: "transparent",
    hoverGradient: "from-blue-50 to-blue-100",
    ariaLabel: "Contact Ajit Kumar for DevOps, DevSecOps, or cloud engineering opportunities"
  }
};

// ========== REUSABLE COMPONENTS ==========
const GradientText = ({ children, gradient, className = "" }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient} ${className}`}>
    {children}
  </span>
);

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ 
      y: -8,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    }}
    className="relative group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl 
      border border-gray-200/50 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    itemScope
    itemType="https://schema.org/QuantitativeValue"
  >
    <meta itemProp="name" content={stat.label} />
    <meta itemProp="value" content={stat.value} />
    <meta itemProp="description" content={stat.description} />
    
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 
      opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
    
    <div className="relative">
      <div className="flex justify-center mb-3">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}>
          <div className={`text-lg ${stat.color.split(' ')[0].replace('from-', 'text-')}`}>
            {stat.icon}
          </div>
        </div>
      </div>
      <div className={`text-3xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
        {stat.value}
      </div>
      <div className="text-sm font-medium text-gray-600 mt-2">
        {stat.label}
      </div>
      <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
    </div>
  </motion.div>
);

const SocialLinkCard = ({ social, index }) => (
  <motion.a
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ 
      scale: 1.15,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 }
    }}
    whileTap={{ scale: 0.95 }}
    href={social.url}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group"
    aria-label={social.ariaLabel}
  >
    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.gradient} 
      shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center
      ${social.hover}`}>
      <div className={`text-xl ${social.color} transition-colors duration-300`}>
        {social.icon}
      </div>
    </div>
    
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileHover={{ opacity: 1, y: 0 }}
      className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium 
        text-gray-600 whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md 
        shadow-sm border border-gray-200"
    >
      {social.label}
    </motion.span>
  </motion.a>
);

const ExpertiseCard = ({ expertise, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ 
      y: -12,
      scale: 1.03,
      transition: { type: "spring", stiffness: 300 }
    }}
    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 
      border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300"
    itemScope
    itemType="https://schema.org/Service"
  >
    <meta itemProp="name" content={expertise.title} />
    <meta itemProp="description" content={expertise.description} />
    
    <div className={`absolute inset-0 bg-gradient-to-br ${expertise.gradient} opacity-0 
      group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
    
    <div className="relative">
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        className={`w-16 h-16 bg-gradient-to-br ${expertise.gradient} rounded-2xl 
          flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl`}
      >
        <div className="text-white text-2xl">{expertise.icon}</div>
      </motion.div>
      
      <h4 className="font-bold text-gray-900 text-xl mb-3">
        {expertise.title}
      </h4>
      <p className="text-gray-600 leading-relaxed mb-4">
        {expertise.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {expertise.keywords.map((keyword) => (
          <span key={keyword} className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">
            {keyword}
          </span>
        ))}
      </div>
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`h-0.5 bg-gradient-to-r ${expertise.gradient} mt-4 rounded-full`}
      />
    </div>
  </motion.div>
);

const TechStackBadge = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.02 }}
    whileHover={{ 
      scale: 1.1,
      y: -4,
      transition: { type: "spring", stiffness: 400 }
    }}
    className={`relative overflow-hidden rounded-xl p-3 bg-gradient-to-br ${tech.gradient} 
      bg-opacity-10 border border-gray-200/30 backdrop-blur-sm group cursor-pointer`}
  >
    <div className="text-center">
      <div className="text-gray-800 font-semibold text-sm">
        {tech.label}
      </div>
      <span className="text-xs text-gray-500 mt-1 block">{tech.category}</span>
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        className={`h-0.5 bg-gradient-to-r ${tech.gradient} rounded-full transition-all duration-300 mt-2`}
      />
    </div>
  </motion.div>
);

const CTAButton = ({ config, isPrimary = true }) => (
  <Link
    to={config.path}
    className={`group relative overflow-hidden rounded-2xl px-8 py-4 font-bold text-lg 
      shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 ${
        isPrimary 
          ? `bg-gradient-to-r ${config.gradient} text-white hover:${config.hoverGradient}`
          : `bg-white border-2 border-gray-300 text-gray-900 hover:border-blue-300 hover:bg-blue-50/50`
      }`}
    aria-label={config.ariaLabel}
  >
    <motion.span
      whileHover={{ rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {config.icon}
    </motion.span>
    <span>{config.text}</span>
    <FiArrowRight className={`text-lg opacity-0 -translate-x-2 ${
      isPrimary ? 'group-hover:opacity-100' : 'group-hover:opacity-70'
    } group-hover:translate-x-0 transition-all duration-300`} />
    
    {isPrimary && (
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
        -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    )}
  </Link>
);

// ========== MAIN HOME COMPONENT ==========
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Update document title for SEO
    document.title = "Ajit Kumar - DevOps & DevSecOps Engineer from Katihar, India";
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": SITE_CONFIG.name,
          "jobTitle": SITE_CONFIG.roles.join(", "),
          "description": SITE_CONFIG.description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": SITE_CONFIG.location.city,
            "addressRegion": SITE_CONFIG.location.state,
            "addressCountry": SITE_CONFIG.location.country
          },
          "email": "ajitk23192@gmail.com",
          "sameAs": SOCIAL_LINKS.map(link => link.url),
          "knowsAbout": TECH_STACK.map(tech => tech.label).concat(SITE_CONFIG.keywords),
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance DevOps Engineer"
          },
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": HERO_CONFIG.education.university
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
          "skills": TECH_STACK.map(tech => tech.label),
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": HERO_CONFIG.education.degree
          }
        })}
      </script>

      {/* Animated Background Blobs (Preserved) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] bg-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <Header />

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            {/* Left Column - Hero Content */}
            <div className="space-y-10">
              {/* Availability Badge with Hiring Intent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm 
                  rounded-full border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label={HERO_CONFIG.availability.fullText}
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                  />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r 
                    from-blue-600 to-indigo-600 text-sm tracking-wider">
                    {HERO_CONFIG.availability.text}
                  </span>
                </div>
                <span className="w-8 h-px bg-gradient-to-r from-blue-500 to-indigo-500" />
                <span className="text-xs text-gray-500 font-medium">
                  {HERO_CONFIG.availability.remote}
                </span>
              </motion.div>

              {/* SEO-Optimized H1 with Geographic Signal */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="block text-gray-900">{HERO_CONFIG.name.firstName}</span>
                    <GradientText gradient={HERO_CONFIG.name.gradient} className="block">
                      {HERO_CONFIG.name.lastName}
                    </GradientText>
                  </h1>
                  <p className="text-xl text-gray-700 mt-4 max-w-2xl">
                    <strong className="text-gray-900">DevOps Engineer</strong> &{" "}
                    <strong className="text-gray-900">DevSecOps Specialist</strong> from{" "}
                    <strong className="text-blue-600">Katihar, India</strong>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {HERO_CONFIG.title}
                  </h2>
                  <p className="text-lg text-gray-600 mt-2">
                    {HERO_CONFIG.fullTitle}
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 
                      to-purple-500 rounded-full shadow-lg shadow-blue-500/30"
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                >
                  {HERO_CONFIG.tagline}
                </motion.p>

                {/* Education & Location Cards with Geographic Keywords */}
                <div className="flex flex-wrap items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-4 px-5 py-4 bg-white/80 backdrop-blur-sm 
                      rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FaGraduationCap className="text-2xl text-blue-500" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {HERO_CONFIG.education.degree}
                      </p>
                      <p className="text-sm text-gray-500">
                        {HERO_CONFIG.education.university} • {HERO_CONFIG.education.focus}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-4 px-5 py-4 bg-white/80 backdrop-blur-sm 
                      rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FiMapPin className="text-2xl text-green-500" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {HERO_CONFIG.location.city}
                      </p>
                      <p className="text-sm text-gray-500">
                        {HERO_CONFIG.location.availability}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 pt-8"
              >
                <CTAButton config={CTA_CONFIG.primary} isPrimary={true} />
                <CTAButton config={CTA_CONFIG.secondary} isPrimary={false} />
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-12">
                {STATS.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-6 pt-8"
              >
                <span className="text-sm font-medium text-gray-600">Connect with me:</span>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLinkCard key={index} social={social} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Professional Visual Card */}
            <div className="relative">
              {/* Main Glass Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ y: -10 }}
                className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 
                  rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50 
                  backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 
                  to-pink-500/10 animate-pulse" />

                <div className="relative p-8 lg:p-10">
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                        backdrop-blur-sm rounded-lg border border-blue-400/30"
                    >
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="w-2.5 h-2.5 bg-green-400 rounded-full"
                        />
                        <span className="text-white font-bold text-sm tracking-wider">
                          {HERO_CONFIG.availability.badge}
                        </span>
                      </div>
                    </motion.div>
                    <div className="text-white/60">
                      <FaDev className="text-2xl" />
                    </div>
                  </div>

                  {/* Center Content */}
                  <div className="text-center mb-10">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="inline-flex p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                        backdrop-blur-sm rounded-3xl mb-8 shadow-2xl"
                    >
                      <FiShield className="text-5xl text-white" />
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-3xl lg:text-4xl font-bold text-white mb-6"
                    >
                      DevOps & DevSecOps Expert
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-white/80 text-lg leading-relaxed max-w-md mx-auto"
                    >
                      Building secure, scalable cloud infrastructure with 
                      DevSecOps practices from Katihar, India
                    </motion.p>
                  </div>

                  {/* Tech Stack Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {TECH_STACK.slice(0, 9).map((tech, index) => (
                      <TechStackBadge key={index} tech={tech} index={index} />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Experience Card */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -bottom-8 -right-8 z-10 hidden lg:block"
              >
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl 
                  p-7 border border-gray-200/50 w-64 hover:shadow-3xl transition-shadow duration-300">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 
                      to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl"
                  >
                    <FiAward className="text-white text-2xl" />
                  </motion.div>
                  
                  <div className="pt-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      2+ Years
                    </div>
                    <div className="text-sm text-gray-600 font-medium mb-3">
                      DevOps Engineering Experience
                    </div>
                    <div className="text-xs text-gray-500 leading-tight">
                      Specializing in cloud infrastructure, CI/CD automation, and DevSecOps
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* About Preview Section */}
          <section className="mb-32" aria-labelledby="about-heading">
            <div className="text-center mb-16">
              <h2 id="about-heading" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                DevOps Engineer from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Katihar, India</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  I'm <strong className="text-gray-900">Ajit Kumar</strong>, a passionate{" "}
                  <strong className="text-blue-600">DevOps Engineer</strong> and{" "}
                  <strong className="text-blue-600">DevSecOps specialist</strong> based in{" "}
                  <strong className="text-gray-900">Katihar, Bihar, India</strong>.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With expertise in <strong>cloud-native architecture</strong>,{" "}
                  <strong>CI/CD automation</strong>, and <strong>security-first engineering</strong>, 
                  I help businesses build resilient, scalable infrastructure. My approach integrates 
                  <strong className="text-blue-600"> DevSecOps practices</strong> from day one, ensuring 
                  security is baked into every layer of deployment.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                  <p className="text-gray-800 font-medium">
                    "Security and scalability aren't afterthoughts — they're built into every pipeline and infrastructure component."
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["Katihar", "Bihar", "India"].map((location) => (
                    <span key={location} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium">
                      📍 {location}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {SITE_CONFIG.roles.map((role) => (
                  <div key={role} className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                    <FiCheckCircle className="text-green-500 text-xl mb-2" />
                    <span className="font-medium text-gray-800">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="mb-32" aria-labelledby="expertise-heading">
            <div className="text-center mb-16">
              <h2 id="expertise-heading" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                DevOps & DevSecOps Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized in secure, scalable cloud solutions with modern DevSecOps practices
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {EXPERTISE.map((expertise, index) => (
                <ExpertiseCard key={index} expertise={expertise} index={index} />
              ))}
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="mb-32" aria-labelledby="tech-heading">
            <div className="text-center mb-16">
              <h2 id="tech-heading" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Technologies & Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern cloud-native stack for DevOps, DevSecOps, and full-stack development
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {TECH_STACK.map((tech, index) => (
                <TechStackBadge key={index} tech={tech} index={index} />
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-32" aria-label="Contact call to action">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-4">
                Hire a DevOps Engineer from Katihar, India
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Looking for a DevSecOps expert for your next project? Let's build secure, scalable infrastructure together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  aria-label="Contact Ajit Kumar for DevOps opportunities"
                >
                  <FiMail />
                  Discuss Your Project
                  <FiArrowRight />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors shadow-lg border border-blue-400"
                  aria-label="View Ajit Kumar's DevOps portfolio"
                >
                  <FiCode />
                  View Portfolio
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Home;