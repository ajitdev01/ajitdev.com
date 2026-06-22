'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiUser, FiCode, FiBriefcase, FiMapPin,
  FiMail, FiGithub, FiLinkedin, FiBookOpen,
  FiCheckCircle, FiDatabase, FiAward, FiExternalLink,
} from "react-icons/fi";

// ========== ANIMATION VARIANTS ==========
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

// ========== SKILLS DATA ==========
const skills = [
  { name: "MERN Stack", icon: FiCode, color: "from-blue-500 to-cyan-500" },
  { name: "Next.js", icon: FiCode, color: "from-gray-700 to-gray-900" },
  { name: "TypeScript", icon: FiCode, color: "from-blue-600 to-indigo-500" },
  { name: "React.js", icon: FiCode, color: "from-cyan-500 to-blue-500" },
  { name: "Node.js", icon: FiDatabase, color: "from-green-500 to-teal-500" },
  { name: "MongoDB", icon: FiDatabase, color: "from-green-600 to-lime-500" },
  { name: "Express.js", icon: FiCode, color: "from-gray-600 to-gray-800" },
  { name: "Tailwind CSS", icon: FiCode, color: "from-teal-400 to-cyan-400" },
];

// ========== BACKLINK PROFILES ==========
const professionalProfiles = [
  { name: "GitHub", url: "https://github.com/ajitdev01", icon: FiGithub, username: "ajitdev01" },
  { name: "LeetCode", url: "https://leetcode.com/ajitdev01", icon: FiCode, username: "ajitdev01" },
  { name: "LinkedIn", url: "https://linkedin.com/in/ajitdev01", icon: FiLinkedin, username: "ajitdev01" },
  { name: "Dev.to", url: "https://dev.to/ajitdev01", icon: FiBookOpen, username: "ajitdev01" },
  { name: "Medium", url: "https://medium.com/@ajitdev01", icon: FiBookOpen, username: "@ajitdev01" },
];

// ========== CONTACT DETAILS ==========
const contactDetails = [
  { icon: FiMail, label: "Email", value: "ajitk23192@gmail.com", href: "mailto:ajitk23192@gmail.com" },
  { icon: FiMapPin, label: "Location", value: "Katihar, Bihar, India", href: null },
  { icon: FiBriefcase, label: "Role", value: "Full Stack Engineer", href: null },
  { icon: FiAward, label: "Experience", value: "Building scalable web applications", href: null },
];

// ========== MAIN ABOUT COMPONENT ==========
const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white"
    >
      <main className="pt-20 pb-16" id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ===== HERO SECTION ===== */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl mb-6"
            >
              <FiUser className="w-8 h-8 text-blue-600" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            >
              Ajit Kumar
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"
            />

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              <span className="font-semibold text-gray-900">
                Full Stack Engineer
              </span>
              <br />
              MERN Stack · Next.js · TypeScript
            </motion.p>
          </motion.section>

          {/* ===== MAIN CONTENT GRID ===== */}
          <div className="grid lg:grid-cols-3 gap-12 mb-1">

            {/* LEFT COLUMN - Profile & Contact */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-1"
            >
              {/* Profile Image */}
              <motion.div variants={fadeInUp} className="mb-6">
                <Image
                  src="/my.jpeg"
                  alt="Ajit Kumar - Full Stack Engineer from Katihar, Bihar, India"
                  width={400}
                  height={400}
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-lg border border-gray-200 h-auto"
                  priority
                />
              </motion.div>

              {/* Contact Cards */}
              <motion.div variants={fadeInUp} className="space-y-3">
                {contactDetails.map((detail) => {
                  const IconComp = detail.icon;
                  return (
                    <div
                      key={detail.label}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                    >
                      <IconComp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">{detail.label}</p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-gray-800 text-sm hover:text-blue-600 transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-gray-800 text-sm">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>


            </motion.div>

            {/* RIGHT COLUMN - About Content (2 cols) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-2"
            >
              {/* Professional Summary */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I&apos;m <strong className="text-gray-900">Ajit Kumar</strong>, a <strong>Full Stack Engineer</strong> from{" "}
                    <strong>Katihar, Bihar, India</strong>. I specialize in building{" "}
                    <strong>production-grade web applications</strong> using the{" "}
                    <strong>MERN Stack</strong> (MongoDB, Express, React, Node.js),{" "}
                    <strong>Next.js</strong>, and <strong>TypeScript</strong>.
                  </p>
                  <p>
                    My focus is on writing clean, maintainable code and creating scalable
                    architectures that solve real business problems. I&apos;ve delivered multiple
                    full-stack projects from concept to deployment, ensuring performance,
                    security, and great user experiences.
                  </p>
                  <p>
                    <Link href="/projects" className="text-blue-600 font-medium hover:text-blue-700 hover:underline inline-flex items-center gap-1">
                      View my projects <FiExternalLink className="w-3 h-3" />
                    </Link>{" "}
                    to see my work in action, or{" "}
                    <Link href="/skills" className="text-blue-600 font-medium hover:text-blue-700 hover:underline">
                      explore my technical skills
                    </Link>.
                  </p>
                </div>
              </motion.div>

              {/* Skills Grid */}
              <motion.div variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`bg-gradient-to-br ${skill.color} p-3 rounded-lg text-center`}
                      >
                        <SkillIcon className="w-5 h-5 text-white mx-auto mb-1" />
                        <span className="text-white text-xs font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Education & Training */}
              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Education & Training</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-800">BCA — Cloud & Security</p>
                    <p className="text-sm text-gray-600">Amity University Online · 2025</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Practical Training</p>
                    <p className="text-sm text-gray-600">Brainzima Innovation Institute</p>
                    <a
                      href="https://brainzima.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mt-1"
                    >
                      visit brainzima.com <FiExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Values */}
              <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Clean Code</h3>
                    <p className="text-sm text-gray-600">Modular, documented, and maintainable</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Scalable Architecture</h3>
                    <p className="text-sm text-gray-600">Built to grow with your business</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Performance First</h3>
                    <p className="text-sm text-gray-600">Optimized for speed and UX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800">On-Time Delivery</h3>
                    <p className="text-sm text-gray-600">100% success rate</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ===== HIDDEN SEO NAVIGATION ===== */}
          <nav className="sr-only" aria-label="SEO navigation">
            <ul>
              <li><Link href="/">Full Stack Developer India — Home</Link></li>
              <li><Link href="/about">About Ajit Kumar — Full Stack Engineer</Link></li>
              <li><Link href="/projects">MERN Stack Projects Portfolio</Link></li>
              <li><Link href="/skills">Full Stack Skills — React Node.js MongoDB</Link></li>
              <li><Link href="/contact">Hire Full Stack Developer — Contact</Link></li>
            </ul>
          </nav>

          {/* Hidden SEO Keywords */}
          <span className="sr-only" aria-hidden="true">
            Full Stack Developer India, MERN Stack Developer Portfolio, Next.js Developer Portfolio,
            JavaScript Developer India, Hire Full Stack Engineer, Full Stack Engineer Katihar Bihar,
            React Node.js Developer, TypeScript Full Stack, MongoDB Express React Node
          </span>

        </div>
      </main>
    </motion.div>
  );
};

export default About;