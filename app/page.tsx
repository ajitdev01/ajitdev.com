'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

// ============================================
// ICONS (White Theme Friendly)
// ============================================
const FiGithub = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
const FiLinkedin = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z"/></svg>;
const FiArrowRight = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>;
const FiCheckCircle = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const FiBriefcase = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const FiAward = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;
const FiUsers = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const FiCommand = () => <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>;
const FiTrendingUp = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;

// ============================================
// 3D CODESPACE HERO COMPONENT (White Theme)
// ============================================
const CodeSpace3D = () => {
  const [typedLines, setTypedLines] = useState<Array<{ text: string; color: string; delay: number }>>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<Array<{ text: string; color: string; delay: number }>>([]);
  const [isHovered, setIsHovered] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isHovered) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    }
  };

  const codeLines = [
    { text: "const Success = async (developer) => {", color: "text-indigo-600", delay: 0 },
    { text: '  await developer.learn("MERN + Next.js + TypeScript");', color: "text-emerald-600", delay: 400 },
    { text: '  await developer.build("5+ Production Apps");', color: "text-emerald-600", delay: 800 },
    { text: '  await developer.deploy("Cloud Native Solutions");', color: "text-emerald-600", delay: 1200 },
    { text: '  return "CAREER_GROWTH 🚀";', color: "text-purple-600", delay: 1600 },
    { text: "};", color: "text-indigo-600", delay: 1900 },
    { text: "", color: "", delay: 2100 },
    { text: "// 3000+ hours of coding", color: "text-gray-400", delay: 2300 },
    { text: "// 99% client satisfaction", color: "text-gray-400", delay: 2500 },
  ];

  const terminalLines = [
    { text: "$ npm run deploy", color: "text-cyan-600", delay: 2800 },
    { text: "> System Online: 100%", color: "text-emerald-600", delay: 3200 },
    { text: "> Full Stack Mode Activated", color: "text-emerald-600", delay: 3500 },
    { text: "> Deploying Projects...", color: "text-blue-600", delay: 3800 },
    { text: "> Build Complete: 0 Errors ✨", color: "text-emerald-600", delay: 4200 },
  ];

  useEffect(() => {
    const timeouts = codeLines.map((line) => {
      return setTimeout(() => {
        if (line.text) {
          setTypedLines(prev => [...prev, line]);
        }
      }, line.delay);
    });

    const terminalTimeouts = terminalLines.map((line) => {
      return setTimeout(() => {
        setOutput(prev => [...prev, line]);
      }, line.delay);
    });

    return () => {
      timeouts.forEach(t => clearTimeout(t));
      terminalTimeouts.forEach(t => clearTimeout(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput([]);
    setTypedLines([]);

    const allLines = [...codeLines, ...terminalLines];
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < allLines.length) {
        const line = allLines[currentIndex];
        if (line.text) {
          if (currentIndex < codeLines.length) {
            setTypedLines(prev => [...prev, line]);
          } else {
            setOutput(prev => [...prev, line]);
          }
        }
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 300);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        animate(x, 0, { duration: 0.5 });
        animate(y, 0, { duration: 0.5 });
      }}
      style={{
        rotateX: isHovered ? 0 : rotateX,
        rotateY: isHovered ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative w-full max-w-lg mx-auto lg:mx-0"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
        {/* Header Bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-200">
          <span className="w-3 h-3 bg-red-500 rounded-full shadow-sm" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm" />
          <span className="w-3 h-3 bg-green-500 rounded-full shadow-sm" />
          <span className="ml-auto text-xs text-gray-500 font-mono">ajitdev_success.ts</span>
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="ml-2 px-2 py-0.5 text-[10px] font-mono bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded transition-all duration-200 disabled:opacity-50"
          >
            {isRunning ? "Running..." : "▶ Run"}
          </button>
        </div>

        {/* Code Editor Area */}
        <div className="p-5 font-mono text-sm space-y-1.5 bg-gray-50/50">
          {codeLines.map((line, idx) => {
            const isTyped = typedLines.some(t => t.text === line.text && t.delay === line.delay);
            return (
              <div key={idx} className={line.color}>
                {isTyped ? line.text : (idx === 0 && typedLines.length === 0 ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {line.text}
                  </motion.span>
                ) : null)}
                {idx === typedLines.length - 1 && typedLines.length < codeLines.length && typedLines.length > 0 && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-indigo-500 ml-0.5 align-middle"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Terminal Area */}
        <div className="border-t border-gray-200 p-3 text-xs font-mono bg-gray-100/50 space-y-0.5">
          <div className="text-gray-500 text-[10px] mb-1 flex items-center gap-2">
            <FiCommand />
            TERMINAL OUTPUT
          </div>
          {output.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={line.color}
            >
              {line.text}
            </motion.div>
          ))}
          {output.length === terminalLines.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 mt-2 pt-1 border-t border-gray-200"
            >
              <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-600 text-[10px] font-medium">Ready for opportunities</span>
            </motion.div>
          )}
          {output.length < terminalLines.length && output.length > 0 && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1.5 h-3 bg-emerald-500 ml-1 align-middle"
            />
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200/40 via-purple-200/40 to-pink-200/40 blur-3xl -z-10 rounded-full opacity-50" />
    </motion.div>
  );
};

// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// ============================================
// STATS SECTION
// ============================================
const StatsSection = () => {
  const stats = [
    { value: "5+", label: "Projects Delivered", icon: FiBriefcase, description: "Production-grade applications" },
    { value: "1+", label: "Years Experience", icon: FiAward, description: "Full Stack development" },
    { value: "10+", label: "Happy Clients", icon: FiUsers, description: "Global client base" },
    { value: "100%", label: "Success Rate", icon: FiCheckCircle, description: "On-time delivery" },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
          >
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200 flex items-center justify-center transition-all duration-300">
                <Icon />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            <div className="text-[10px] text-gray-400 mt-1">{stat.description}</div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// ============================================
// FEATURED TECH STACK
// ============================================
const FeaturedTech = () => {
  const techs = [
    "React", "Next.js", "TypeScript", "Node.js",
    "Express", "MongoDB", "Tailwind CSS", "Redux"
  ];

  return (
    <motion.div variants={fadeUp} className="mt-8">
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {techs.map((tech, idx) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + idx * 0.05 }}
            className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 border border-gray-200 text-gray-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

// ============================================
// EDUCATION SECTION
// ============================================
const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-5">
              <FiAward />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
            <p className="text-gray-800 font-medium">BCA in Cloud & Security</p>
            <p className="text-gray-500 text-sm mb-3">Amity University Online</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Specialized in cloud infrastructure and security fundamentals.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-5">
              <FiTrendingUp />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Practical Training</h3>
            <p className="text-gray-800 font-medium">
              <a href="https://brainzima.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                Brainzima Innovation Institute
              </a>
            </p>
            <p className="text-gray-500 text-sm mb-3">brainzima.com</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hands-on development training focusing on real-world projects and industry workflows.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// ============================================
// MAIN HOME COMPONENT
// ============================================
export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const allSocialUrls = [
    "https://github.com/ajitdev01",
    "https://leetcode.com/ajitdev01",
    "https://linkedin.com/in/ajitdev01",
    "https://twitter.com/ajitdev01",
    "https://instagram.com/ajitdev01",
    "https://snapchat.com/add/ajitdev01",
    "https://dev.to/ajitdev01",
    "https://medium.com/@ajitdev01",
  ];

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://ajitdev.com/#person",
                name: "Ajit Kumar",
                alternateName: "ajitdev01",
                url: "https://ajitdev.com",
                email: "ajitk23192@gmail.com",
                telephone: "+916205526784",
                jobTitle: "Full Stack Engineer",
                description: "Professional Full Stack Engineer specializing in MERN Stack, Next.js, and TypeScript. Available for hire.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Katihar",
                  addressRegion: "Bihar",
                  addressCountry: "India",
                },
                sameAs: allSocialUrls,
                knowsAbout: ["MERN Stack", "Next.js", "TypeScript", "React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Full Stack Engineer",
                  skills: "React, Next.js, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, REST APIs",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://ajitdev.com/#website",
                url: "https://ajitdev.com",
                name: "Ajit Kumar - Full Stack Engineer Portfolio",
                description: "Professional portfolio of Ajit Kumar, a Full Stack Engineer specializing in MERN, Next.js, and TypeScript.",
                publisher: { "@id": "https://ajitdev.com/#person" },
              },
              {
                "@type": "Organization",
                "@id": "https://ajitdev.com/#organization",
                name: "AjitDev",
                alternateName: ["ajitdev01", "Ajit Kumar"],
                url: "https://ajitdev.com",
                sameAs: allSocialUrls,
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "ajitk23192@gmail.com",
                  contactType: "professional services",
                },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-white">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[90vh] flex items-center overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl" />
            <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-pink-100/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
                className="space-y-6 text-center lg:text-left"
              >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 mx-auto lg:mx-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-medium text-indigo-700 tracking-wide">Available for Opportunities</span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-gray-900">Full Stack</span>
                  <br />
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Engineer
                  </span>
                </motion.h1>

                <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  I build <span className="text-gray-900 font-semibold">production-grade web applications</span> that solve real business problems.
                  Specialized in <span className="text-indigo-600 font-medium">MERN Stack</span>, <span className="text-indigo-600 font-medium">Next.js</span>,
                  and <span className="text-indigo-600 font-medium">TypeScript</span>.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
                    <span className="relative z-10 flex items-center gap-2">
                      Hire Me → Build Scalable Apps
                      <FiArrowRight />
                    </span>
                  </Link>

                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-gray-700 bg-white border border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
                  >
                    View Portfolio
                    <FiArrowRight />
                  </Link>
                </motion.div>

                <FeaturedTech />

                <motion.div variants={fadeUp} className="flex items-center gap-4 justify-center lg:justify-start pt-2">
                  <div className="flex -space-x-2">
                    <a href="https://github.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center hover:bg-indigo-100 transition-colors duration-200">
                      <FiGithub />
                    </a>
                    <a href="https://linkedin.com/in/ajitdev01" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center hover:bg-indigo-100 transition-colors duration-200">
                      <FiLinkedin />
                    </a>
                    <a href="https://leetcode.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center hover:bg-indigo-100 transition-colors duration-200 text-[10px] font-bold text-gray-700">
                      LC
                    </a>
                    <a href="https://dev.to/ajitdev01" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center hover:bg-indigo-100 transition-colors duration-200 text-[10px] font-bold text-gray-700">
                      DEV
                    </a>
                  </div>
                  <span className="text-xs text-gray-500">
                    @ajitdev01 everywhere
                  </span>
                </motion.div>
              </motion.div>

              <CodeSpace3D />
            </div>

            <StatsSection />
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-5 h-8 border border-gray-300 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-2 bg-indigo-500 rounded-full mt-1"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <EducationSection />
      </div>

      {/* Hidden SEO Keywords */}
      <span className="sr-only" aria-hidden="true">
        Full Stack Developer India, MERN Stack Developer Portfolio, Next.js Developer Portfolio,
        JavaScript Developer India, Hire Full Stack Engineer, Full Stack Engineer Katihar Bihar,
        React Node.js Developer, TypeScript Full Stack, MongoDB Express React Node
      </span>
    </>
  );
}
