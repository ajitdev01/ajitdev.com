import { useEffect } from "react";
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
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// ========== ANIMATION VARIANTS ==========
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

// ========== CONFIGURATION OBJECTS ==========
const HERO_CONFIG = {
  name: {
    firstName: "AJIT",
    lastName: "KUMAR",
    gradient: "from-blue-600 via-violet-600 to-pink-600"
  },
  title: "DevOps & Cloud Engineer",
  tagline: "Specializing in secure, scalable web applications with modern cloud-native architecture and DevOps practices",
  availability: {
    text: "OPEN FOR OPPORTUNITIES",
    remote: "Remote",
    badge: "AVAILABLE FOR WORK"
  },
  education: {
    degree: "BCA Cloud & Security",
    university: "Galgotias University"
  },
  location: {
    city: "Based in India",
    availability: "Available Worldwide"
  }
};

const STATS = [
  { 
    value: "26+", 
    label: "Projects", 
    color: "from-blue-500 to-cyan-500",
    icon: <FiLayers />
  },
  { 
    value: "15+", 
    label: "Technologies", 
    color: "from-violet-500 to-purple-500",
    icon: <FiCode />
  },
  { 
    value: "100%", 
    label: "Quality Focus", 
    color: "from-pink-500 to-rose-500",
    icon: <FiAward />
  },
  { 
    value: "1+", 
    label: "Years Experience", 
    color: "from-orange-500 to-amber-500",
    icon: <FiServer />
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
    bgColor: "hover:bg-gray-700"
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ajitdev01/",
    gradient: "from-blue-700 to-blue-800",
    hover: "hover:from-blue-600 hover:to-blue-700",
    color: "text-blue-300",
    bgColor: "hover:bg-blue-600"
  },
  {
    icon: <FiMail />,
    label: "Email",
    url: "mailto:ajitk23192@gmail.com",
    gradient: "from-red-700 to-red-800",
    hover: "hover:from-red-600 hover:to-red-700",
    color: "text-red-300",
    bgColor: "hover:bg-red-500"
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    url: "https://wa.me/916205526784",
    gradient: "from-green-700 to-green-800",
    hover: "hover:from-green-600 hover:to-green-700",
    color: "text-green-300",
    bgColor: "hover:bg-green-500"
  }
];

const EXPERTISE = [
  {
    icon: <FiShield />,
    title: "Security First",
    description: "OWASP, DevSecOps, Secure Architecture",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FiCloud />,
    title: "Cloud Native",
    description: "AWS, Scalable Infrastructure, DevOps",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: <FiLayers />,
    title: "Full Stack",
    description: "MERN, TypeScript, Modern Frameworks",
    gradient: "from-pink-500 to-rose-500"
  }
];

const TECH_STACK = [
  { label: "React", gradient: "from-cyan-500 to-blue-600" },
  { label: "Node.js", gradient: "from-green-500 to-emerald-600" },
  { label: "MongoDB", gradient: "from-green-400 to-green-600" },
  { label: "Express", gradient: "from-gray-400 to-gray-600" },
  { label: "TypeScript", gradient: "from-blue-600 to-blue-800" },
  { label: "Tailwind", gradient: "from-blue-400 to-cyan-500" },
  { label: "AWS", gradient: "from-orange-500 to-yellow-500" },
  { label: "Docker", gradient: "from-blue-400 to-blue-500" },
  { label: "Kubernetes", gradient: "from-blue-500 to-indigo-500" }
];

const CTA_CONFIG = {
  primary: {
    text: "View My Work",
    path: "/projects",
    icon: <FiCode />,
    gradient: "from-blue-600 to-purple-600",
    hoverGradient: "from-blue-700 to-purple-700"
  },
  secondary: {
    text: "Get In Touch",
    path: "/contact",
    icon: <FiMail />,
    gradient: "transparent",
    hoverGradient: "from-blue-50 to-blue-100"
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
  >
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
    aria-label={social.label}
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
  >
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
      <p className="text-gray-600 leading-relaxed">
        {expertise.description}
      </p>
      
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
    transition={{ duration: 0.3, delay: index * 0.05 }}
    whileHover={{ 
      scale: 1.1,
      y: -4,
      transition: { type: "spring", stiffness: 400 }
    }}
    className={`relative overflow-hidden rounded-xl p-4 bg-gradient-to-br ${tech.gradient} 
      bg-opacity-10 border border-gray-200/30 backdrop-blur-sm group cursor-pointer`}
  >
    <div className="text-center">
      <div className="text-gray-800 font-bold text-lg mb-2">
        {tech.label}
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        className={`h-1 bg-gradient-to-r ${tech.gradient} rounded-full transition-all duration-300`}
      />
    </div>
  </motion.div>
);

const CTAButton = ({ config, isPrimary = true }) => (
  <motion.a
    whileHover={{ 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 }
    }}
    whileTap={{ scale: 0.95 }}
    href={config.path}
    className={`group relative overflow-hidden rounded-2xl px-8 py-4 font-bold text-lg 
      shadow-lg hover:shadow-2xl transition-all duration-300 ${
        isPrimary 
          ? `bg-gradient-to-r ${config.gradient} text-white hover:${config.hoverGradient}`
          : `bg-white border-2 border-gray-300 text-gray-900 hover:border-blue-300 hover:bg-blue-50/50`
      }`}
  >
    <div className="flex items-center gap-3">
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
    </div>
    
    {isPrimary && (
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
        -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    )}
  </motion.a>
);

// ========== MAIN HOME COMPONENT ==========
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Animated Background Blobs */}
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
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm 
                  rounded-full border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
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

              {/* Name & Title */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                    <span className="block text-gray-900">{HERO_CONFIG.name.firstName}</span>
                    <GradientText gradient={HERO_CONFIG.name.gradient}>
                      {HERO_CONFIG.name.lastName}
                    </GradientText>
                  </h1>
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

                {/* Education & Location Cards */}
                <div className="flex flex-wrap items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-4 px-5 py-4 bg-white/80 backdrop-blur-sm 
                      rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FiBook className="text-2xl text-blue-500" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {HERO_CONFIG.education.degree}
                      </p>
                      <p className="text-sm text-gray-500">
                        {HERO_CONFIG.education.university}
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
                      <FiCpu className="text-2xl" />
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
                      <FiServer className="text-5xl text-white" />
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-3xl lg:text-4xl font-bold text-white mb-6"
                    >
                      Cloud & DevOps Specialist
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-white/80 text-lg leading-relaxed max-w-md mx-auto"
                    >
                      Building enterprise-grade applications with emphasis on
                      security, scalability, and modern DevOps practices
                    </motion.p>
                  </div>

                  {/* Tech Stack Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {TECH_STACK.map((tech, index) => (
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
                      1+ Years
                    </div>
                    <div className="text-sm text-gray-600 font-medium mb-3">
                      Professional Experience
                    </div>
                    <div className="text-xs text-gray-500 leading-tight">
                      Building production-ready applications with modern tech stack
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Expertise Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {EXPERTISE.map((expertise, index) => (
                  <ExpertiseCard key={index} expertise={expertise} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Home;