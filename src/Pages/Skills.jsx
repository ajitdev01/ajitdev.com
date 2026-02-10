import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCloud,
  FiShield,
  FiTrendingUp,
  FiFileText,
  FiCheck,
  FiInfo,
  FiSend,
  FiCpu,
  FiLayers,
  FiGitBranch,
  FiUserCheck,
  FiChevronDown,
  FiChevronUp,
  FiTerminal,
  FiGlobe,
  FiLock,
  FiZap,
  FiGitPullRequest,
  FiPackage,
  FiMonitor,
  FiTool,
} from "react-icons/fi";

const Skills = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen) {
        const menu = document.getElementById("mobile-menu");
        if (menu && !menu.contains(event.target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Skill categories with proficiency levels and icons
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiCode />,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      description: "Modern UI/UX development with responsive design",
      proficiency: 85,
      level: "Advanced",
      skills: [
        { 
          name: "HTML5", 
          icon: <FiGlobe />,
          proficiency: 90,
          level: "Advanced"
        },
        { 
          name: "CSS3", 
          icon: <FiLayers />,
          proficiency: 88,
          level: "Advanced"
        },
        { 
          name: "JavaScript (ES6+)", 
          icon: <FiCode />,
          proficiency: 85,
          level: "Advanced"
        },
        { 
          name: "React.js", 
          icon: <FiCpu />,
          proficiency: 85,
          level: "Advanced"
        },
        { 
          name: "Tailwind CSS", 
          icon: <FiLayers />,
          proficiency: 90,
          level: "Expert"
        },
        { 
          name: "Responsive Design", 
          icon: <FiMonitor />,
          proficiency: 88,
          level: "Advanced"
        },
        { 
          name: "Component Architecture", 
          icon: <FiPackage />,
          proficiency: 82,
          level: "Advanced"
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <FiServer />,
      color: "green",
      gradient: "from-emerald-500 to-teal-500",
      description: "Server-side logic, APIs, and database integration",
      proficiency: 80,
      level: "Proficient",
      skills: [
        { 
          name: "Node.js", 
          icon: <FiServer />,
          proficiency: 85,
          level: "Advanced"
        },
        { 
          name: "Express.js", 
          icon: <FiTrendingUp />,
          proficiency: 82,
          level: "Advanced"
        },
        { 
          name: "REST APIs", 
          icon: <FiGitBranch />,
          proficiency: 85,
          level: "Advanced"
        },
        { 
          name: "CRUD Operations", 
          icon: <FiDatabase />,
          proficiency: 88,
          level: "Advanced"
        },
        { 
          name: "Middleware & Routing", 
          icon: <FiTrendingUp />,
          proficiency: 80,
          level: "Proficient"
        },
        { 
          name: "Authentication", 
          icon: <FiUserCheck />,
          proficiency: 78,
          level: "Proficient"
        },
      ],
    },
    {
      title: "Database & Data",
      icon: <FiDatabase />,
      color: "purple",
      gradient: "from-purple-500 to-violet-500",
      description: "Data modeling, storage, and management solutions",
      proficiency: 75,
      level: "Proficient",
      skills: [
        { 
          name: "MongoDB (Atlas)", 
          icon: <FiDatabase />,
          proficiency: 80,
          level: "Proficient"
        },
        { 
          name: "Mongoose ODM", 
          icon: <FiDatabase />,
          proficiency: 78,
          level: "Proficient"
        },
        { 
          name: "MySQL (Basics)", 
          icon: <FiDatabase />,
          proficiency: 65,
          level: "Intermediate"
        },
        { 
          name: "Schema Design", 
          icon: <FiLayers />,
          proficiency: 75,
          level: "Proficient"
        },
        { 
          name: "Data Validation", 
          icon: <FiCheck />,
          proficiency: 82,
          level: "Advanced"
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <FiCloud />,
      color: "indigo",
      gradient: "from-indigo-500 to-blue-500",
      description: "Cloud infrastructure and deployment automation",
      proficiency: 70,
      level: "Intermediate",
      skills: [
        { 
          name: "AWS Basics", 
          icon: <FiCloud />,
          proficiency: 70,
          level: "Intermediate"
        },
        { 
          name: "Cloud Deployment", 
          icon: <FiTrendingUp />,
          proficiency: 75,
          level: "Proficient"
        },
        { 
          name: "Environment Config", 
          icon: <FiCpu />,
          proficiency: 80,
          level: "Advanced"
        },
        { 
          name: "Docker (Basics)", 
          icon: <FiPackage />,
          proficiency: 65,
          level: "Intermediate"
        },
        { 
          name: "GitHub Actions", 
          icon: <FiGitPullRequest />,
          proficiency: 68,
          level: "Intermediate"
        },
      ],
    },
    {
      title: "Security Engineering",
      icon: <FiShield />,
      color: "red",
      gradient: "from-rose-500 to-pink-500",
      description: "Security best practices and threat mitigation",
      proficiency: 75,
      level: "Proficient",
      skills: [
        { 
          name: "OWASP Top 10", 
          icon: <FiShield />,
          proficiency: 80,
          level: "Proficient"
        },
        { 
          name: "Authentication", 
          icon: <FiLock />,
          proficiency: 82,
          level: "Advanced"
        },
        { 
          name: "Encryption", 
          icon: <FiLock />,
          proficiency: 75,
          level: "Proficient"
        },
        { 
          name: "DevSecOps", 
          icon: <FiShield />,
          proficiency: 70,
          level: "Intermediate"
        },
        { 
          name: "Security Headers", 
          icon: <FiCheck />,
          proficiency: 78,
          level: "Proficient"
        },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <FiTool />,
      color: "amber",
      gradient: "from-amber-500 to-orange-500",
      description: "Development tools and productivity workflow",
      proficiency: 85,
      level: "Advanced",
      skills: [
        { 
          name: "Git & GitHub", 
          icon: <FiGitBranch />,
          proficiency: 88,
          level: "Advanced"
        },
        { 
          name: "VS Code", 
          icon: <FiCode />,
          proficiency: 90,
          level: "Expert"
        },
        { 
          name: "Postman", 
          icon: <FiSend />,
          proficiency: 85,
          level: "Advanced"
        },
        { 
          name: "Linux Terminal", 
          icon: <FiTerminal />,
          proficiency: 75,
          level: "Proficient"
        },
        { 
          name: "NPM/Yarn", 
          icon: <FiPackage />,
          proficiency: 88,
          level: "Advanced"
        },
      ],
    },
  ];

  // All skills flattened
  const allSkills = skillCategories.flatMap(category => category.skills);

  // Stats data
  const stats = [
    { 
      value: allSkills.length, 
      label: "Total Skills",
      icon: <FiTrendingUp />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      color: "text-blue-500"
    },
    { 
      value: skillCategories.length, 
      label: "Categories",
      icon: <FiLayers />,
      gradient: "from-emerald-500/20 to-teal-500/20",
      color: "text-emerald-500"
    },
    { 
      value: "100%", 
      label: "Learning Rate",
      icon: <FiZap />,
      gradient: "from-purple-500/20 to-violet-500/20",
      color: "text-purple-500"
    },
    { 
      value: "∞", 
      label: "Growth Mindset",
      icon: <FiTrendingUp />,
      gradient: "from-amber-500/20 to-orange-500/20",
      color: "text-amber-500"
    },
  ];

  const filteredSkills = activeCategory === "All" 
    ? skillCategories 
    : skillCategories.filter(category => 
        category.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
        category.skills.some(skill => 
          skill.name.toLowerCase().includes(activeCategory.toLowerCase())
        )
      );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      y: -8,
      transition: { duration: 0.2 },
    },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (proficiency) => ({
      width: `${proficiency}%`,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col bg-white overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <Header />

      <main className="flex-grow pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Header */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex p-5 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-2xl mb-6 backdrop-blur-sm border border-white/30"
            >
              <FiCode className="text-4xl text-blue-600" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
            >
              Technical Skills
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-6"
            >
              Full stack development with specialization in cloud, security, and modern web technologies
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full"
            ></motion.div>
          </motion.section>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group"
            aria-label="Toggle skills menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative">
              {isMobileMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors"></div>
            </div>
          </button>

          {/* Mobile Skills Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="lg:hidden fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/30 shadow-2xl z-40"
                style={{ maxHeight: "70vh" }}
              >
                <div className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Filter Skills
                  </h2>

                  {/* Mobile Filter Tags */}
                  <div className="flex flex-wrap gap-3">
                    {["All", "Frontend", "Backend", "Database", "Cloud", "Security", "Tools"].map((filter) => (
                      <motion.button
                        key={filter}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setActiveCategory(filter);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          activeCategory === filter
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {filter}
                      </motion.button>
                    ))}
                  </div>

                  {/* Mobile Quick Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {stats.slice(0, 3).map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-4 rounded-xl ${stat.gradient} backdrop-blur-sm`}
                      >
                        <div className="text-2xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Filter Bar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex flex-wrap justify-center gap-3 mb-16 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg"
          >
            {["All", "Frontend", "Backend", "Database", "Cloud", "Security", "Tools"].map((filter) => (
              <motion.button
                key={filter}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(filter)}
                className={`px-5 py-3 rounded-xl text-base font-medium transition-all duration-300 relative overflow-hidden group ${
                  activeCategory === filter
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="relative z-10">{filter}</span>
                {activeCategory === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredSkills.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Animated border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Category Header */}
                  <div className="flex items-start gap-4 mb-8 pb-6 border-b border-gray-100">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                      <div className="text-white text-2xl">
                        {category.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4 mb-8">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-white transition-all duration-300 group/skill"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                            <div className="text-gray-600">
                              {skill.icon}
                            </div>
                          </div>
                          <span className="font-medium text-gray-800">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-600">
                            {skill.level}
                          </span>
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{ delay: skillIndex * 0.1 + 0.5 }}
                              className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Overall Proficiency */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-semibold text-gray-600">
                        Overall Proficiency
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`font-bold text-lg ${category.color === 'blue' ? 'text-blue-600' : category.color === 'green' ? 'text-emerald-600' : category.color === 'purple' ? 'text-purple-600' : category.color === 'indigo' ? 'text-indigo-600' : category.color === 'red' ? 'text-rose-600' : 'text-amber-600'}`}>
                          {category.level}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({category.proficiency}%)
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        custom={category.proficiency}
                        variants={progressBarVariants}
                        initial="hidden"
                        animate="visible"
                        className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative overflow-hidden rounded-2xl p-8 backdrop-blur-sm ${stat.gradient} border border-white/30 shadow-lg`}
              >
                <div className="absolute top-4 right-4 opacity-20">
                  <div className={`text-3xl ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Info Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="relative overflow-hidden rounded-2xl p-12 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80 backdrop-blur-sm border border-white/30 shadow-xl">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
              
              <div className="relative flex flex-col lg:flex-row items-start gap-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <FiInfo className="text-3xl text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Skill Development Journey
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    As a BCA Cloud & Security student, I'm continuously expanding my expertise in 
                    full-stack development with a strong emphasis on security best practices and 
                    cloud technologies. My learning path focuses on building secure, scalable 
                    applications while staying updated with modern development trends and emerging 
                    security threats.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-gray-700">Continuous Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700">Security-First Approach</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-gray-700">Modern Tech Stack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-12 shadow-2xl">
              {/* Background effects */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
              
              <div className="relative text-center">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Apply These Skills?
                </h3>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                  Let's discuss how these technical skills can contribute to your next project or organization
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <motion.a
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[200px]"
                  >
                    <FiSend className="text-xl" />
                    Start a Project
                  </motion.a>
                  <motion.a
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/projects"
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 min-w-[200px]"
                  >
                    <FiCode className="text-xl" />
                    View Projects
                  </motion.a>
                </div>
                <p className="text-gray-400 text-sm mt-8">
                  Also check out my <a href="/resume.pdf" className="text-blue-400 hover:text-blue-300 underline">resume</a> for more details
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Skills;