import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiBook,
  FiCloud,
  FiShield,
  FiCode,
  FiTarget,
  FiTool,
  FiBriefcase,
  FiSend,
  FiFileText,
  FiChevronDown,
  FiChevronUp,
  FiCheckCircle,
  FiTrendingUp,
  FiLayers,
  FiCpu,
  FiGitBranch,
  FiDatabase,
  FiZap,
  FiAward,
  FiCalendar,
  FiClock,
  FiStar,
  FiTerminal,
  FiGlobe,
  FiServer,
} from "react-icons/fi";

const Education = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(null);

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

  // Enhanced focus areas data
  const focusAreas = [
    {
      icon: <FiCloud />,
      title: "Cloud Engineering",
      description: "Learning cloud infrastructure, deployment, and management with focus on AWS, serverless architectures, and cloud security best practices.",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["AWS Basics", "Cloud Deployment", "Infrastructure as Code", "Serverless"],
      progress: 75,
    },
    {
      icon: <FiShield />,
      title: "Cybersecurity",
      description: "Studying security principles, threat modeling, OWASP Top 10, secure coding practices, and DevSecOps methodologies.",
      gradient: "from-emerald-500 to-teal-500",
      skills: ["OWASP Top 10", "Security Headers", "Encryption", "Authentication"],
      progress: 70,
    },
    {
      icon: <FiCode />,
      title: "MERN Stack Development",
      description: "Building modern web applications using MERN stack, responsive design, RESTful APIs, and database management.",
      gradient: "from-purple-500 to-pink-500",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
      progress: 85,
    },
    {
      icon: <FiGitBranch />,
      title: "DevOps & Automation",
      description: "Implementing CI/CD pipelines, containerization with Docker, infrastructure automation, and monitoring solutions.",
      gradient: "from-amber-500 to-orange-500",
      skills: ["Docker", "CI/CD", "GitHub Actions", "Automation"],
      progress: 65,
    },
  ];

  // Professional Certifications
  const certifications = [
    {
      icon: <FiAward />,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "Learning",
      progress: 60,
      color: "orange",
      gradient: "from-orange-500/20 to-amber-500/20",
      timeline: "Q2 2024",
    },
    {
      icon: <FiShield />,
      title: "Web Security Fundamentals",
      issuer: "OWASP & MDN",
      status: "Completed",
      progress: 100,
      color: "green",
      gradient: "from-emerald-500/20 to-teal-500/20",
      timeline: "Q1 2024",
    },
    {
      icon: <FiTool />,
      title: "Docker & Containers",
      issuer: "Docker Inc. & Self-Learning",
      status: "In Progress",
      progress: 75,
      color: "blue",
      gradient: "from-blue-500/20 to-cyan-500/20",
      timeline: "Current",
    },
    {
      icon: <FiCode />,
      title: "Full Stack Development",
      issuer: "MERN Stack Projects",
      status: "Advanced",
      progress: 85,
      color: "purple",
      gradient: "from-purple-500/20 to-pink-500/20",
      timeline: "Ongoing",
    },
  ];

  // Self-Learning & Continuous Education - FIXED: Replaced FiPython with FiCode for Python
  const selfLearning = [
    {
      icon: <FiLayers />,
      title: "Data Structures & Algorithms",
      description: "Mastering core DSA concepts with C++ implementations and competitive programming practice",
      progress: 80,
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
    {
      icon: <FiCode />, // Changed from FiPython to FiCode
      title: "Python Programming",
      description: "Learning Python for automation, scripting, data analysis, and backend development",
      progress: 70,
      gradient: "from-amber-500/20 to-yellow-500/20",
    },
    {
      icon: <FiTerminal />, // Changed to Terminal icon for Linux
      title: "Linux & System Fundamentals",
      description: "Command line proficiency, shell scripting, and system administration basics",
      progress: 75,
      gradient: "from-gray-700/20 to-gray-900/20",
    },
    {
      icon: <FiZap />,
      title: "DevOps CI/CD Practices",
      description: "Implementing automated pipelines, testing, and deployment workflows",
      progress: 65,
      gradient: "from-emerald-500/20 to-green-500/20",
    },
  ];

  // Academic Timeline
  const timelineData = [
    {
      semester: "Semester 1",
      title: "Foundations",
      description: "Programming basics, Mathematics, Computer Fundamentals",
      skills: ["C++ Basics", "Discrete Math", "Computer Architecture"],
      icon: <FiBook />,
      gradient: "from-blue-500/20 to-blue-600/20",
    },
    {
      semester: "Semester 2",
      title: "Web Technologies",
      description: "HTML, CSS, JavaScript fundamentals, Database concepts",
      skills: ["HTML/CSS", "JavaScript", "SQL Basics"],
      icon: <FiCode />,
      gradient: "from-emerald-500/20 to-emerald-600/20",
    },
    {
      semester: "Semester 3",
      title: "Advanced Programming",
      description: "Object-Oriented Programming, Data Structures, Web Development",
      skills: ["OOP", "DSA", "React Basics"],
      icon: <FiCpu />,
      gradient: "from-purple-500/20 to-purple-600/20",
    },
    {
      semester: "Semester 4",
      title: "Cloud & Security",
      description: "Cloud Computing, Network Security, Full Stack Development",
      skills: ["AWS Basics", "Security Principles", "MERN Stack"],
      icon: <FiCloud />,
      gradient: "from-orange-500/20 to-orange-600/20",
    },
    {
      semester: "Semester 5",
      title: "Specialization",
      description: "Advanced Cloud, DevSecOps, Project Development",
      skills: ["Cloud Security", "Docker", "Project Management"],
      icon: <FiShield />,
      gradient: "from-red-500/20 to-red-600/20",
    },
    {
      semester: "Semester 6",
      title: "Capstone & Projects",
      description: "Major projects, Internship preparation, Career development",
      skills: ["Real Projects", "Deployment", "Industry Standards"],
      icon: <FiBriefcase />,
      gradient: "from-indigo-500/20 to-indigo-600/20",
    },
  ];

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
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (progress) => ({
      width: `${progress}%`,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    }),
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: custom * 0.1 },
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
              <FiBook className="text-4xl text-blue-600" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
            >
              Education & Learning Journey
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-4"
            >
              BCA - Cloud & Security Specialization
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span>Active Learning Journey</span>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mt-8 rounded-full"
            ></motion.div>
          </motion.section>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group"
            aria-label="Toggle education menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative">
              {isMobileMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
              <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors"></div>
            </div>
          </button>

          {/* Mobile Education Menu */}
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
                    Quick Access
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <FiBook />, label: "Program", section: "main-education" },
                      { icon: <FiTarget />, label: "Focus Areas", section: "focus-areas" },
                      { icon: <FiAward />, label: "Certifications", section: "certifications" },
                      { icon: <FiTrendingUp />, label: "Timeline", section: "timeline" },
                    ].map((item, idx) => (
                      <motion.button
                        key={idx}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' });
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                      >
                        <div className="text-blue-600 text-xl">{item.icon}</div>
                        <span className="text-sm font-medium">{item.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Education Card */}
          <motion.section
            id="main-education"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80 p-12 backdrop-blur-sm border border-white/30 shadow-xl">
              <div className="flex flex-col lg:flex-row items-start gap-12">
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-white rounded-2xl flex items-center justify-center shadow-2xl">
                    <FiBook className="text-5xl text-blue-600" />
                  </div>
                  <div className="mt-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg">
                      <FiClock className="text-sm" />
                      <span>2025 - 2027</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">
                        BCA - Cloud & Security
                      </h2>
                      <p className="text-gray-700 text-lg">
                        Bachelor of Computer Applications with Specialization
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 md:mt-0"
                    >
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                        <span>Current Student</span>
                        <FiTrendingUp />
                      </div>
                    </motion.div>
                  </div>

                  {/* Key Learning Areas */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      {
                        icon: <FiCloud />,
                        text: "Cloud Computing",
                        color: "text-blue-500",
                        gradient: "from-blue-500/20 to-blue-600/20",
                      },
                      {
                        icon: <FiShield />,
                        text: "Cybersecurity",
                        color: "text-emerald-500",
                        gradient: "from-emerald-500/20 to-emerald-600/20",
                      },
                      {
                        icon: <FiCode />,
                        text: "Full Stack Dev",
                        color: "text-purple-500",
                        gradient: "from-purple-500/20 to-purple-600/20",
                      },
                      {
                        icon: <FiGitBranch />,
                        text: "DevOps Concepts",
                        color: "text-amber-500",
                        gradient: "from-amber-500/20 to-amber-600/20",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -3 }}
                        className={`p-4 rounded-xl ${item.gradient} backdrop-blur-sm border border-white/30`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={item.color}>{item.icon}</div>
                          <span className="text-gray-800 font-medium">{item.text}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Specialized program focusing on cloud technologies and cybersecurity principles 
                    alongside traditional computer applications. The curriculum combines theoretical 
                    knowledge with practical skills in secure application development, cloud infrastructure, 
                    and modern web technologies with hands-on project experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Focus Areas */}
          <motion.section
            id="focus-areas"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Technical Focus Areas
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Specialized learning paths combining academic theory with practical implementation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative group"
                >
                  {/* Animated border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                  
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center`}>
                        <div className="text-white text-2xl">
                          {area.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {area.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {area.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {area.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-semibold text-gray-900">{area.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          custom={area.progress}
                          variants={progressBarVariants}
                          initial="hidden"
                          animate="visible"
                          className={`h-full rounded-full bg-gradient-to-r ${area.gradient}`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Professional Certifications */}
          <motion.section
            id="certifications"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Professional Certifications
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Industry-recognized certifications and learning paths
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative"
                >
                  <div className={`rounded-2xl p-8 ${cert.gradient} backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center`}>
                        <div className="text-blue-600 text-2xl">
                          {cert.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {cert.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{cert.issuer}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Status Badge */}
                      <div className="flex items-center justify-between">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          cert.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          cert.status === 'Learning' ? 'bg-blue-100 text-blue-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {cert.status}
                        </span>
                        <span className="text-sm text-gray-500">{cert.timeline}</span>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold text-gray-900">{cert.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                          <motion.div
                            custom={cert.progress}
                            variants={progressBarVariants}
                            initial="hidden"
                            animate="visible"
                            className={`h-full rounded-full bg-gradient-to-r ${
                              cert.color === 'orange' ? 'from-orange-500 to-amber-500' :
                              cert.color === 'green' ? 'from-emerald-500 to-teal-500' :
                              cert.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                              'from-purple-500 to-pink-500'
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Self-Learning & Continuous Education */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Self-Learning & Continuous Education
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Ongoing skill development beyond academic curriculum
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {selfLearning.map((learning, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl p-8 ${learning.gradient} backdrop-blur-sm border border-white/30`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center">
                      <div className="text-blue-600 text-xl">
                        {learning.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {learning.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 text-sm">
                    {learning.description}
                  </p>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Learning Progress</span>
                      <span className="font-semibold text-gray-900">{learning.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                      <motion.div
                        custom={learning.progress}
                        variants={progressBarVariants}
                        initial="hidden"
                        animate="visible"
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Academic Timeline */}
          <motion.section
            id="timeline"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Academic Timeline
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Learning journey progression and skill development
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 hidden lg:block"></div>

              <div className="space-y-8 lg:space-y-0">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={timelineVariants}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 hidden lg:block"></div>

                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:text-right' : ''
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-8 rounded-2xl ${item.gradient} backdrop-blur-sm border border-white/30 shadow-lg`}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center">
                            <div className="text-blue-600 text-xl">
                              {item.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                              {item.semester}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mt-1">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-white/50 text-gray-700 rounded-lg text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden lg:block lg:w-2/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-12 shadow-2xl">
              {/* Background effects */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
              
              <div className="relative text-center">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Build Something Great?
                </h3>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                  Let's discuss how my education, skills, and learning journey can contribute to your projects
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <motion.a
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[220px]"
                  >
                    <FiSend className="text-xl" />
                    Get In Touch
                  </motion.a>
                  <motion.a
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 min-w-[220px]"
                  >
                    <FiCode className="text-xl" />
                    View Projects
                  </motion.a>
                </div>
                <p className="text-gray-400 text-sm mt-8">
                  Download my{" "}
                  <a href="/resume.pdf" className="text-blue-400 hover:text-blue-300 underline font-semibold">
                    resume
                  </a>{" "}
                  for detailed academic and professional information
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Education;