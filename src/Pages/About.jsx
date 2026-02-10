import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiCode,
  FiShield,
  FiCloud,
  FiBriefcase,
  FiMapPin,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiFileText,
  FiSend,
  FiBookOpen,
  FiGlobe,
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiLock,
} from "react-icons/fi";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState([]); // Removed TypeScript syntax

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Trigger section animations sequentially
      const sections = [0, 1, 2, 3, 4];
      sections.forEach((section, index) => {
        setTimeout(() => {
          setIsVisible(prev => [...prev, section]);
        }, index * 150);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "MERN Stack", icon: <FiCode />, color: "from-blue-500 to-cyan-500" },
    { name: "Cloud Security", icon: <FiShield />, color: "from-green-500 to-emerald-500" },
    { name: "DevSecOps", icon: <FiCpu />, color: "from-purple-500 to-violet-500" },
    { name: "REST APIs", icon: <FiDatabase />, color: "from-orange-500 to-amber-500" },
    { name: "AWS", icon: <FiCloud />, color: "from-yellow-500 to-orange-500" },
    { name: "MongoDB", icon: <FiDatabase />, color: "from-green-600 to-lime-500" },
    { name: "React.js", icon: <FiCode />, color: "from-cyan-500 to-blue-500" },
    { name: "Node.js", icon: <FiCpu />, color: "from-green-500 to-teal-500" },
    { name: "TypeScript", icon: <FiCode />, color: "from-blue-600 to-indigo-500" },
    { name: "Docker", icon: <FiDatabase />, color: "from-blue-400 to-cyan-400" },
  ];

  const expertise = [
    {
      icon: <FiCloud />,
      title: "Cloud & Security",
      description: "AWS basics, IAM, OWASP Top 10, DevSecOps concepts with focus on secure cloud infrastructure.",
      color: "blue",
      gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
      iconColor: "text-blue-500",
    },
    {
      icon: <FiCode />,
      title: "Full Stack Development",
      description: "Building modern web applications with React, Node.js, Express, MongoDB, and scalable RESTful APIs.",
      color: "green",
      gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      iconColor: "text-emerald-500",
    },
    {
      icon: <FiShield />,
      title: "Security Engineering",
      description: "Implementing authentication, encryption, and following OWASP security best practices.",
      color: "purple",
      gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
      iconColor: "text-purple-500",
    },
  ];

  const professionalDetails = [
    {
      icon: <FiBookOpen />,
      label: "Education",
      value: "BCA – Cloud & Security",
      accent: "text-blue-400",
    },
    {
      icon: <FiBriefcase />,
      label: "Role",
      value: "Full Stack Developer (MERN)",
      accent: "text-emerald-400",
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "India • Open to Remote",
      accent: "text-amber-400",
    },
    {
      icon: <FiMail />,
      label: "Email",
      value: "ajitk23192@gmail.com",
      href: "mailto:ajitk23192@gmail.com",
      isLink: true,
      accent: "text-red-400",
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      value: "ajitdev01",
      href: "https://github.com/ajitdev01",
      isLink: true,
      accent: "text-gray-300",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: "ajit-kumar",
      href: "https://www.linkedin.com/in/ajitdev01",
      isLink: true,
      accent: "text-blue-300",
    },
  ];

  const philosophyPoints = [
    {
      title: "Clean & Secure Code",
      description: "I believe in writing clean, maintainable code with security as a first-class citizen.",
      points: [
        "Security-first approach",
        "Clean, readable code",
        "Maintainable architecture",
      ],
      icon: <FiLock className="text-xl" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Continuous Learning",
      description: "Constantly exploring new technologies and security frameworks to stay updated.",
      points: [
        "Stay updated with trends",
        "Adapt to new technologies",
        "Regular skill enhancement",
      ],
      icon: <FiBookOpen className="text-xl" />,
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex flex-col bg-white"
      >
        <Header />

        <main className="flex-grow pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            {/* Hero Section */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.includes(0) ? "visible" : "hidden"}
              className="text-center mb-16"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex p-5 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-2xl mb-6 backdrop-blur-sm border border-white/30"
              >
                <FiUser className="text-4xl text-blue-600" />
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
              >
                About Me
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full"
              ></motion.div>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
              >
                Full Stack Developer & Security Enthusiast
              </motion.p>
            </motion.section>

            {/* Summary Section */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.includes(1) ? "visible" : "hidden"}
              className="mb-16"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="flex flex-col lg:flex-row">
                  {/* Image with Glassmorphism */}
                  <div className="lg:w-2/5 relative overflow-hidden h-64 lg:h-auto min-h-[350px]">
                    <img
                      src="/my.jpeg"
                      alt="Ajit Kumar"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-sm font-semibold text-gray-800 shadow-lg">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Full Stack Developer
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
                        <h3 className="font-bold text-gray-900 mb-1">Ajit Kumar</h3>
                        <p className="text-sm text-gray-600">BCA Cloud & Security</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-8 lg:p-10">
                    <motion.div variants={itemVariants} className="mb-8">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Professional Summary
                      </h2>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          Passionate BCA Cloud & Security student specializing in full-stack web development 
                          and secure application design. Focused on building scalable, modern, and secure 
                          web applications using cutting-edge technologies.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          With expertise in the MERN stack and cloud technologies, I solve complex problems 
                          while implementing security best practices. Continuously exploring DevOps and 
                          DevSecOps concepts to build robust, efficient systems.
                        </p>
                      </div>
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                        {skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            initial="hidden"
                            animate={isVisible.includes(1) ? "visible" : "hidden"}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="group"
                          >
                            <div className={`bg-gradient-to-br ${skill.color} p-4 rounded-xl shadow-sm`}>
                              <div className="flex flex-col items-center text-center gap-2">
                                <div className="text-white text-xl">{skill.icon}</div>
                                <span className="text-white font-medium text-sm">{skill.name}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Expertise Section */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.includes(2) ? "visible" : "hidden"}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center shadow-lg">
                  <FiBriefcase className="text-emerald-600 text-2xl" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Core Expertise
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"></div>
                    <div className="relative p-8">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                        <div className={item.iconColor}>
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <div className={`w-2 h-2 rounded-full ${item.color === 'blue' ? 'bg-blue-500' : item.color === 'green' ? 'bg-emerald-500' : 'bg-purple-500'}`}></div>
                          <span>Specialization</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Professional Details */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.includes(3) ? "visible" : "hidden"}
              className="mb-16"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
                <div className="relative p-8 lg:p-12">
                  <div className="text-center mb-12">
                    <motion.div
                      variants={itemVariants}
                      className="inline-flex p-5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-2xl mb-6 border border-white/10"
                    >
                      <FiGlobe className="text-white text-3xl" />
                    </motion.div>
                    <motion.h2
                      variants={itemVariants}
                      className="text-4xl font-bold text-white mb-4"
                    >
                      Professional Details
                    </motion.h2>
                    <motion.p
                      variants={itemVariants}
                      className="text-gray-300 text-lg"
                    >
                      Connect with me or explore my professional background
                    </motion.p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {professionalDetails.map((detail, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group"
                      >
                        <div className="flex items-start gap-5 p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                          <div className={`${detail.accent} text-2xl`}>
                            {detail.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                              {detail.label}
                            </h3>
                            {detail.isLink ? (
                              <a
                                href={detail.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors duration-300 block text-lg font-medium"
                              >
                                {detail.value}
                              </a>
                            ) : (
                              <p className="text-white text-lg font-medium">{detail.value}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <motion.div
                    variants={containerVariants}
                    className="pt-8 border-t border-white/10"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <motion.a
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <FiFileText className="text-lg" />
                        Download Resume
                      </motion.a>

                      <motion.a
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/contact"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
                      >
                        <FiSend className="text-lg" />
                        Contact Me
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Philosophy Section */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.includes(4) ? "visible" : "hidden"}
            >
              <div className="bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50 rounded-2xl p-8 lg:p-12 backdrop-blur-sm border border-white/30">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-white rounded-xl flex items-center justify-center shadow-lg">
                    <FiCpu className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Development Philosophy
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {philosophyPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 backdrop-blur-sm border border-white/30`}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center">
                            <div className="text-blue-600">{item.icon}</div>
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900">
                            {item.title}
                          </h4>
                        </div>
                        
                        <p className="text-gray-700 mb-6">
                          {item.description}
                        </p>
                        
                        <ul className="space-y-3">
                          {item.points.map((point, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                                <FiCheckCircle className="text-green-500" />
                              </div>
                              <span className="text-gray-700 font-medium">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default About;