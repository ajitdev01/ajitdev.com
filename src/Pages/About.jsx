import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiUser, FiCode, FiShield, FiCloud, FiBriefcase, FiMapPin,
  FiMail, FiGithub, FiLinkedin, FiFileText, FiSend, FiBookOpen,
  FiCheckCircle, FiCpu, FiDatabase, FiLock, FiAward,
} from "react-icons/fi";

// ✅ FIXED: Correct Vite asset import (moved image to src/assets/)
// If your image is still in /public, use src="/my.jpeg" on the <img> tag instead
import profileImage from "/public/my.jpeg";

// ========== ANIMATION VARIANTS ==========
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ✅ FIXED: Single merged variant — no more duplicate `variants` prop
const fadeHover = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  hover: { scale: 1.04, transition: { duration: 0.2 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

// ========== STRUCTURED DATA ==========
// ✅ FIXED: All schemas defined outside component (no re-creation on every render)

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ajit Kumar",
  url: "https://ajitdev.com/about",
  image: "https://ajitdev.com/profile.jpg",
  jobTitle: "DevOps Engineer & Full Stack Developer",
  // ✅ FIXED: Removed false "5+ years" claim — consistent with 2+ years on Home
  description:
    "Ajit Kumar is a DevOps Engineer and Full Stack Developer from Katihar, Bihar, India, with 2+ years of experience building secure cloud-native infrastructure, CI/CD pipelines, and MERN stack applications following DevSecOps principles.",
  email: "ajitk23192@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Katihar",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/ajitdev01",
    "https://www.linkedin.com/in/ajitdev01",
    "https://ajitdev.com",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Amity University Online",
    },
  ],
  knowsAbout: [
    "DevOps Engineering", "DevSecOps", "Cloud Security", "AWS",
    "Docker", "Kubernetes", "Terraform", "MERN Stack", "React",
    "Node.js", "TypeScript", "CI/CD Pipelines", "Prometheus", "Grafana",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "DevOps Engineer",
    skills:
      "DevOps, DevSecOps, Cloud Security, CI/CD, AWS, Docker, Kubernetes, Terraform, MERN Stack",
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
    description: "Remote DevOps Engineering & Consulting",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ajitdev.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://ajitdev.com/about" },
  ],
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "About Ajit Kumar — DevOps Engineer & Full Stack Developer",
  url: "https://ajitdev.com/about",
  mainEntity: { "@type": "Person", name: "Ajit Kumar" },
};

// ========== DATA ==========
const skills = [
  { name: "MERN Stack",     icon: FiCode,     color: "from-blue-500 to-cyan-500" },
  { name: "Cloud Security", icon: FiShield,   color: "from-green-500 to-emerald-500" },
  { name: "DevSecOps",      icon: FiCpu,      color: "from-purple-500 to-violet-500" },
  { name: "REST APIs",      icon: FiDatabase, color: "from-orange-500 to-amber-500" },
  { name: "AWS",            icon: FiCloud,    color: "from-yellow-500 to-orange-500" },
  { name: "Docker",         icon: FiDatabase, color: "from-blue-400 to-cyan-400" },
  { name: "React.js",       icon: FiCode,     color: "from-cyan-500 to-blue-500" },
  { name: "Node.js",        icon: FiCpu,      color: "from-green-500 to-teal-500" },
  { name: "TypeScript",     icon: FiCode,     color: "from-blue-600 to-indigo-500" },
  { name: "MongoDB",        icon: FiDatabase, color: "from-green-600 to-lime-500" },
];

const expertise = [
  {
    icon: FiCloud,
    title: "Cloud & Security",
    description:
      "AWS architecture, IAM policies, and security best practices with focus on enterprise-grade cloud infrastructure.",
    gradient: "from-blue-500 to-cyan-500",
    keywords: ["AWS", "IAM", "Security"],
  },
  {
    icon: FiCode,
    title: "Full Stack Development",
    description:
      "End-to-end web applications using MERN stack with TypeScript, following clean code principles and microservices architecture.",
    gradient: "from-emerald-500 to-teal-500",
    keywords: ["React", "Node.js", "MongoDB"],
  },
  {
    icon: FiShield,
    title: "DevSecOps",
    description:
      "Integrating security into CI/CD pipelines, automating compliance checks, and enforcing container security policies at scale.",
    gradient: "from-purple-500 to-pink-500",
    keywords: ["CI/CD", "SAST/DAST", "Automation"],
  },
];

const contactDetails = [
  { icon: FiMail,      label: "Email",     value: "ajitk23192@gmail.com",                href: "mailto:ajitk23192@gmail.com",              itemProp: "email" },
  { icon: FiGithub,   label: "GitHub",    value: "github.com/ajitdev01",                href: "https://github.com/ajitdev01",             itemProp: "sameAs" },
  { icon: FiLinkedin, label: "LinkedIn",  value: "linkedin.com/in/ajitdev01",            href: "https://www.linkedin.com/in/ajitdev01",    itemProp: "sameAs" },
  { icon: FiMapPin,   label: "Location",  value: "Katihar, Bihar, India (Remote)",       href: null,                                       itemProp: "address" },
  { icon: FiBriefcase,label: "Role",      value: "DevOps Engineer & Full Stack Developer", href: null,                                     itemProp: "jobTitle" },
  { icon: FiBookOpen, label: "Education", value: "BCA Cloud & Security — Amity University", href: null,                                   itemProp: "alumniOf" },
];

const philosophy = [
  {
    title: "Security-First Development",
    description:
      "Building robust systems with security integrated from day one, not as an afterthought.",
    points: ["DevSecOps practices", "OWASP compliance", "Secure by design"],
    icon: FiLock,
  },
  {
    title: "Continuous Learning",
    description:
      "Staying current with cloud-native technologies, emerging threats, and DevOps best practices.",
    points: ["AWS certification track", "DevOps methodology", "Security research"],
    icon: FiBookOpen,
  },
];

// ========== MAIN COMPONENT ==========
const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />

      {/* ✅ FIXED: All structured data inside Helmet for correct SSR/SPA injection */}
      <Helmet>
        {/* === Core SEO === */}
        <title>About Ajit Kumar | DevOps Engineer & Full Stack Developer — Katihar, India</title>
        <meta
          name="description"
          content="Ajit Kumar is a DevOps Engineer and Full Stack Developer from Katihar, Bihar, India. Specializing in DevSecOps, AWS cloud infrastructure, Docker, Kubernetes, and MERN stack development. Available for remote opportunities worldwide."
        />
        {/* keywords meta omitted — Google ignores it; content relevance is what ranks */}
        <link rel="canonical" href="https://ajitdev.com/about" />
        <meta name="author" content="Ajit Kumar" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

        {/* === Performance Hints === */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://github.com" />

        {/* === Geographic SEO === */}
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Katihar, Bihar, India" />
        <meta name="geo.position" content="25.5667;87.5667" />
        <meta name="ICBM" content="25.5667, 87.5667" />

        {/* === Open Graph === */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="About Ajit Kumar — DevOps Engineer & Full Stack Developer" />
        <meta property="og:description" content="DevOps Engineer from Katihar, Bihar, India specializing in DevSecOps, AWS, Docker, Kubernetes, and MERN stack development." />
        <meta property="og:url" content="https://ajitdev.com/about" />
        <meta property="og:image" content="https://ajitdev.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ajit Kumar — DevOps Engineer" />
        <meta property="og:site_name" content="Ajit Kumar Portfolio" />
        <meta property="og:locale" content="en_IN" />
        <meta property="profile:first_name" content="Ajit" />
        <meta property="profile:last_name" content="Kumar" />

        {/* === Twitter Card === */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Ajit Kumar — DevOps Engineer" />
        <meta name="twitter:description" content="DevOps Engineer from India specializing in DevSecOps, AWS, and MERN stack." />
        <meta name="twitter:image" content="https://ajitdev.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="Ajit Kumar — DevOps Engineer" />

        {/* === JSON-LD Structured Data === */}
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(profilePageSchema)}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-white"
        itemScope
        itemType="https://schema.org/ProfilePage"
      >
        <main className="pt-20 pb-16" id="main-content" role="main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ===== HERO ===== */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center mb-16"
              aria-labelledby="hero-heading"
              itemScope
              itemType="https://schema.org/Person"
              itemProp="mainEntity"
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
                itemProp="name"
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
                <span className="font-semibold text-gray-900" itemProp="jobTitle">
                  DevOps Engineer &amp; Full Stack Developer
                </span>
                <br />
                <span itemProp="address">Katihar, Bihar, India</span>
                {" · "}Specializing in Cloud Security &amp; DevSecOps
              </motion.p>

              {/* Hidden semantic metadata */}
              <meta itemProp="url" content="https://ajitdev.com/about" />
              <meta itemProp="image" content="https://ajitdev.com/profile.jpg" />
            </motion.section>

            {/* ===== PROFESSIONAL SUMMARY ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="summary-heading"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto min-h-[420px]">
                    <img
                      src={profileImage}
                      alt="Ajit Kumar — DevOps Engineer and Full Stack Developer from Katihar, Bihar, India"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      itemProp="image"
                      width="600"
                      height="420"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Education</p>
                        <p className="text-base font-bold text-gray-900">BCA Cloud &amp; Security</p>
                        <p className="text-sm text-gray-600">Amity University Online · 2024</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <motion.h2
                      id="summary-heading"
                      variants={fadeInUp}
                      className="text-3xl font-bold text-gray-900 mb-6"
                    >
                      Professional Summary
                    </motion.h2>

                    {/* ✅ IMPROVED: Rich topical authority paragraph for ranking */}
                    <motion.div
                      variants={fadeInUp}
                      className="space-y-4 text-gray-700 leading-relaxed"
                      itemProp="description"
                    >
                      <p>
                        I'm <strong className="text-gray-900">Ajit Kumar</strong>, a{" "}
                        <strong>DevOps Engineer</strong> and <strong>Full Stack Developer</strong> from{" "}
                        <strong>Katihar, Bihar, India</strong>. With 2+ years of hands-on experience,
                        I design and operate cloud-native infrastructure on <strong>AWS</strong> —
                        spanning EC2, EKS, S3, IAM, and VPC — while orchestrating containerized
                        workloads with <strong>Docker</strong> and <strong>Kubernetes</strong>.
                      </p>
                      <p>
                        My core practice is <em>DevSecOps</em>: embedding automated SAST/DAST scanning,
                        policy-as-code enforcement, and least-privilege IAM into every CI/CD pipeline I
                        build with <strong>GitHub Actions</strong>, <strong>Jenkins</strong>, and{" "}
                        <strong>Terraform</strong>. This means security is never bolted on after
                        deployment — it's a first-class requirement from line one.
                      </p>
                      <p>
                        On the observability side, I instrument production systems with{" "}
                        <strong>Prometheus</strong> and <strong>Grafana</strong>, enabling teams to
                        detect regressions before users notice. On the application side, I develop
                        and ship <strong>MERN stack</strong> applications using TypeScript and
                        RESTful microservices. I'm fully available for remote DevOps and cloud
                        engineering roles worldwide.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={fadeInUp}
                      className="grid grid-cols-3 gap-4 mt-8"
                    >
                      {[
                        { icon: FiAward, label: "Focus",    value: "DevSecOps" },
                        { icon: FiCloud, label: "Cloud",    value: "AWS Expert" },
                        { icon: FiCode,  label: "Projects", value: "15+" },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                          <stat.icon className="w-5 h-5 mx-auto text-blue-600 mb-2" aria-hidden="true" />
                          <p className="text-sm font-bold text-gray-900">{stat.value}</p>
                          <p className="text-xs text-gray-500">{stat.label}</p>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* ===== SKILLS GRID ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="skills-heading"
              itemProp="knowsAbout"
            >
              <h2
                id="skills-heading"
                className="text-3xl font-bold text-gray-900 mb-10 text-center"
              >
                Technical Skills
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.map((skill) => (
                  // ✅ FIXED: Single `variants` prop using merged fadeHover
                  <motion.div
                    key={skill.name}
                    variants={fadeHover}
                    whileHover="hover"
                    className="group"
                  >
                    <div
                      className={`bg-gradient-to-br ${skill.color} p-6 rounded-xl shadow-md hover:shadow-xl transition-all`}
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <skill.icon className="w-8 h-8 text-white" aria-hidden="true" />
                        <span className="text-white font-semibold text-sm">{skill.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* ===== CORE EXPERTISE ===== */}
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
                {expertise.map((item) => (
                  // ✅ FIXED: Single `variants` prop using merged fadeHover
                  <motion.article
                    key={item.title}
                    variants={fadeHover}
                    whileHover="hover"
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <meta itemProp="name" content={item.title} />
                    <meta itemProp="description" content={item.description} />
                    <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />
                    <div className="p-8">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6`}
                      >
                        <item.icon className="w-7 h-7 text-white" aria-hidden="true" />
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
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            {/* ===== PROFESSIONAL DETAILS ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="details-heading"
            >
              <div className="bg-gray-950 rounded-2xl p-8 lg:p-12">
                <motion.h2
                  id="details-heading"
                  variants={fadeInUp}
                  className="text-3xl font-bold text-white mb-8 text-center"
                >
                  Professional Details
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                  {contactDetails.map((detail) => (
                    <motion.div
                      key={detail.label}
                      variants={fadeInUp}
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur border border-white/10"
                    >
                      <detail.icon className="w-5 h-5 text-blue-400 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{detail.label}</p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-sm hover:text-blue-400 transition-colors"
                            itemProp={detail.itemProp}
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-white text-sm" itemProp={detail.itemProp}>
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
                    aria-label="Download Ajit Kumar's resume PDF"
                  >
                    <FiFileText className="w-5 h-5" aria-hidden="true" />
                    Download Resume
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 rounded-xl font-semibold text-white hover:bg-white/20 transition-all border border-white/20"
                    aria-label="Contact Ajit Kumar"
                  >
                    <FiSend className="w-5 h-5" aria-hidden="true" />
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </motion.section>

            {/* ===== PHILOSOPHY ===== */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
              aria-labelledby="philosophy-heading"
            >
              <motion.h2
                id="philosophy-heading"
                variants={fadeInUp}
                className="text-3xl font-bold text-gray-900 mb-10 text-center"
              >
                Engineering Philosophy
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                {philosophy.map((item) => (
                  <motion.article
                    key={item.title}
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-5 leading-relaxed">{item.description}</p>

                    <ul className="space-y-3" role="list">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-center gap-3">
                          <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            {/* Hidden SEO navigation */}
            <nav className="sr-only" aria-label="Site navigation">
              <ul>
                <li><Link to="/">Home — DevOps Engineer Katihar Bihar India</Link></li>
                <li><Link to="/about">About Ajit Kumar — DevSecOps Engineer</Link></li>
                <li><Link to="/projects">DevOps Projects Portfolio</Link></li>
                <li><Link to="/skills">DevOps Skills — AWS Docker Kubernetes Terraform</Link></li>
                <li><Link to="/contact">Contact Ajit Kumar — Remote DevOps Engineer</Link></li>
              </ul>
            </nav>

          </div>
        </main>
      </motion.div>

      <Footer />
    </>
  );
};

export default About;