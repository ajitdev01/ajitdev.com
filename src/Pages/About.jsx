import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
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
  FiPhone,
  FiAward,
} from "react-icons/fi";

// Image import for better performance
import profileImage from '/public/my.jpeg';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { name: "MERN Stack", icon: FiCode, color: "from-blue-500 to-cyan-500", keywords: ["React", "Node.js", "MongoDB", "Express"] },
    { name: "Cloud Security", icon: FiShield, color: "from-green-500 to-emerald-500", keywords: ["AWS", "IAM", "Security"] },
    { name: "DevSecOps", icon: FiCpu, color: "from-purple-500 to-violet-500", keywords: ["CI/CD", "Security Automation"] },
    { name: "REST APIs", icon: FiDatabase, color: "from-orange-500 to-amber-500", keywords: ["API Design", "Microservices"] },
    { name: "AWS", icon: FiCloud, color: "from-yellow-500 to-orange-500", keywords: ["EC2", "S3", "Lambda"] },
    { name: "Docker", icon: FiDatabase, color: "from-blue-400 to-cyan-400", keywords: ["Containerization", "DevOps"] },
    { name: "React.js", icon: FiCode, color: "from-cyan-500 to-blue-500", keywords: ["Frontend", "UI"] },
    { name: "Node.js", icon: FiCpu, color: "from-green-500 to-teal-500", keywords: ["Backend", "JavaScript"] },
    { name: "TypeScript", icon: FiCode, color: "from-blue-600 to-indigo-500", keywords: ["Type Safety"] },
    { name: "MongoDB", icon: FiDatabase, color: "from-green-600 to-lime-500", keywords: ["NoSQL", "Database"] },
  ];

  const expertise = [
    {
      icon: FiCloud,
      title: "Cloud & Security",
      description: "AWS architecture, IAM policies, and security best practices with focus on enterprise-grade cloud infrastructure.",
      gradient: "from-blue-500 to-cyan-500",
      keywords: ["AWS", "Security", "IAM"],
    },
    {
      icon: FiCode,
      title: "Full Stack Development",
      description: "End-to-end web applications using MERN stack with TypeScript, following clean code principles and best practices.",
      gradient: "from-emerald-500 to-teal-500",
      keywords: ["React", "Node.js", "MongoDB"],
    },
    {
      icon: FiShield,
      title: "DevSecOps",
      description: "Integrating security into CI/CD pipelines, container security, and automated compliance checks.",
      gradient: "from-purple-500 to-pink-500",
      keywords: ["CI/CD", "Security", "Automation"],
    },
  ];

  const contactDetails = [
    { icon: FiMail, label: "Email", value: "ajitk23192@gmail.com", href: "mailto:ajitk23192@gmail.com", type: "email" },
    { icon: FiGithub, label: "GitHub", value: "ajitdev01", href: "https://github.com/ajitdev01", type: "sameAs" },
    { icon: FiLinkedin, label: "LinkedIn", value: "ajit-kumar", href: "https://www.linkedin.com/in/ajitdev01", type: "sameAs" },
    { icon: FiMapPin, label: "Location", value: "India (Remote)", type: "location" },
    { icon: FiBriefcase, label: "Role", value: "DevOps & Full Stack Developer", type: "jobTitle" },
    { icon: FiBookOpen, label: "Education", value: "BCA Cloud & Security - Amity University", type: "alumniOf" },
  ];

  const philosophy = [
    {
      title: "Security-First Development",
      description: "Building robust applications with security integrated from day one, not as an afterthought.",
      points: ["DevSecOps practices", "OWASP compliance", "Secure by design"],
      icon: FiLock,
    },
    {
      title: "Continuous Learning",
      description: "Staying current with cloud-native technologies and emerging security threats.",
      points: ["AWS certification track", "DevOps best practices", "Security research"],
      icon: FiBookOpen,
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Ajit Kumar",
      "jobTitle": "DevOps Engineer & Full Stack Developer",
      "description": "DevOps and Full Stack developer from India specializing in cloud security, DevSecOps, and MERN stack development.",
      "email": "ajitk23192@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://github.com/ajitdev01",
        "https://www.linkedin.com/in/ajitdev01"
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Amity University Online"
      },
      "knowsAbout": [
        "DevOps",
        "DevSecOps",
        "Cloud Security",
        "AWS",
        "Docker",
        "MERN Stack",
        "React",
        "Node.js",
        "TypeScript"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance/Remote"
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "DevOps Engineer",
        "skills": "DevOps, Cloud Security, CI/CD, AWS, Docker, MERN Stack"
      }
    }
  };

  return (
    <>
      <Header />
      <Helmet>
        {/* Basic SEO */}
        <title>About Ajit Kumar | DevOps Engineer & Full Stack Developer India</title>
        <meta
          name="description"
          content="DevOps Engineer and Full Stack Developer from India specializing in cloud security, DevSecOps, and MERN stack. AWS certified professional with 5+ years of experience."
        />
        <meta
          name="keywords"
          content="DevOps Engineer India, DevSecOps, Cloud Security Engineer, Full Stack Developer, MERN Stack Developer, AWS Engineer, React Developer, Node.js Developer"
        />
        <link rel="canonical" href="https://ajitdev.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="Ajit Kumar - DevOps Engineer & Full Stack Developer" />
        <meta property="og:description" content="DevOps and Full Stack developer specializing in cloud security and DevSecOps." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://ajitdev.com/about" />
        <meta property="og:image" content="https://ajitdev.com/profile-og.jpg" />
        <meta property="og:site_name" content="Ajit Kumar Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ajit Kumar - DevOps Engineer" />
        <meta name="twitter:description" content="DevOps and Full Stack developer specializing in cloud security." />
        <meta name="twitter:image" content="https://ajitdev.com/profile-twitter.jpg" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ajit Kumar" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
        itemScope
        itemType="https://schema.org/ProfilePage"
      >
        <main className="pt-20 pb-16" id="main-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center mb-16"
              aria-labelledby="hero-heading"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl mb-6"
                aria-hidden="true"
              >
                <FiUser className="w-8 h-8 text-blue-600" />
              </motion.div>

              <motion.h1
                id="hero-heading"
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              >
                Ajit Kumar
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"
                aria-hidden="true"
              />

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                <span className="font-semibold text-gray-900">DevOps Engineer</span> &{" "}
                <span className="font-semibold text-gray-900">Full Stack Developer</span>
                <br />
                Specializing in Cloud Security & DevSecOps
              </motion.p>
            </motion.section>

            {/* Professional Summary with Image */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="summary-heading"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image Column */}
                  <div className="relative h-64 md:h-auto min-h-[400px]">
                    <img
                      src={profileImage}
                      alt="Ajit Kumar - DevOps Engineer and Full Stack Developer"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      itemProp="image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur rounded-lg p-4">
                        <p className="text-sm font-medium text-gray-600">BCA Cloud & Security</p>
                        <p className="text-lg font-bold text-gray-900">Amity University Online</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="p-8 lg:p-12">
                    <motion.h2
                      id="summary-heading"
                      variants={fadeInUp}
                      className="text-3xl font-bold text-gray-900 mb-6"
                    >
                      Professional Summary
                    </motion.h2>

                    <motion.div variants={fadeInUp} className="space-y-4 text-gray-700">
                      <p>
                        Passionate <strong>DevOps Engineer</strong> and <strong>Full Stack Developer</strong> from India,
                        dedicated to building secure, scalable cloud infrastructure and modern web applications.
                      </p>
                      <p>
                        With expertise in <strong>DevSecOps practices</strong>, <strong>AWS cloud services</strong>, and
                        the <strong>MERN stack</strong>, I deliver enterprise-grade solutions with security integrated
                        at every layer of the development lifecycle.
                      </p>
                      <p>
                        Currently expanding expertise in cloud-native architectures and automated security compliance.
                      </p>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                      variants={fadeInUp}
                      className="grid grid-cols-3 gap-4 mt-8"
                    >
                      {[
                        { icon: FiAward, label: "DevSecOps", value: "Certified" },
                        { icon: FiCloud, label: "AWS", value: "Professional" },
                        { icon: FiCode, label: "Projects", value: "15+" },
                      ].map((stat, index) => (
                        <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                          <stat.icon className="w-5 h-5 mx-auto text-blue-600 mb-2" />
                          <p className="text-sm font-medium text-gray-900">{stat.value}</p>
                          <p className="text-xs text-gray-500">{stat.label}</p>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Skills Grid */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="skills-heading"
            >
              <h2 id="skills-heading" className="sr-only">Technical Skills</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    whileHover="hover"
                    variants={{ ...fadeInUp, ...scaleOnHover }}
                    className="group"
                    itemProp="knowsAbout"
                  >
                    <div className={`bg-gradient-to-br ${skill.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all`}>
                      <div className="flex flex-col items-center text-center gap-3">
                        <skill.icon className="w-8 h-8 text-white" aria-hidden="true" />
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Core Expertise */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="expertise-heading"
            >
              <motion.h2
                id="expertise-heading"
                variants={fadeInUp}
                className="text-3xl font-bold text-gray-900 mb-10 text-center"
              >
                Core Expertise
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                {expertise.map((item, index) => (
                  <motion.article
                    key={item.title}
                    variants={fadeInUp}
                    whileHover="hover"
                    variants={{ ...fadeInUp, ...scaleOnHover }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                    itemProp="hasOccupation"
                  >
                    <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                    <div className="p-8">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-700 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.keywords.map(keyword => (
                          <span key={keyword} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            {/* Contact & Details */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="contact-heading"
            >
              <div className="bg-gray-900 rounded-2xl p-8 lg:p-12">
                <motion.h2
                  id="contact-heading"
                  variants={fadeInUp}
                  className="text-3xl font-bold text-white mb-8 text-center"
                >
                  Professional Details
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {contactDetails.map((detail, index) => (
                    <motion.div
                      key={detail.label}
                      variants={fadeInUp}
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur"
                    >
                      <detail.icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
                      <div>
                        <p className="text-sm text-gray-400">{detail.label}</p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                            itemProp={detail.type}
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-white" itemProp={detail.type}>{detail.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
                    aria-label="Download resume"
                  >
                    <FiFileText className="w-5 h-5" aria-hidden="true" />
                    Download Resume
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur rounded-xl font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                    aria-label="Contact me"
                  >
                    <FiSend className="w-5 h-5" aria-hidden="true" />
                    Contact Me
                  </Link>
                </motion.div>
              </div>
            </motion.section>

            {/* Philosophy */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="philosophy-heading"
            >
              <h2 id="philosophy-heading" className="sr-only">Development Philosophy</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {philosophy.map((item, index) => (
                  <motion.article
                    key={item.title}
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                    </div>

                    <p className="text-gray-700 mb-6">{item.description}</p>

                    <ul className="space-y-3">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            {/* Hidden navigation for SEO */}
            <nav className="sr-only" aria-label="Internal navigation">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </main>
       
      </motion.div>
       <Footer/>

    </>
  );
};

export default About;