'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FiMail, FiMapPin, FiBookOpen, FiBriefcase, FiUser, FiMessageSquare,
  FiSend, FiGithub, FiLinkedin, FiFileText, FiClock, FiInfo,
  FiTag, FiAlertCircle, FiGlobe, FiArrowRight,
  FiTrendingUp, FiCode, FiZap, FiFolder
} from "react-icons/fi";

// ========== CONTACT DATA ==========
const contactInfo = [
  {
    icon: FiMail,
    title: "Email",
    content: "ajitk23192@gmail.com",
    link: "mailto:ajitk23192@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
    description: "Direct communication • 24hr response"
  },
  {
    icon: FiMapPin,
    title: "Location",
    content: "Katihar, Bihar, India",
    link: null,
    gradient: "from-emerald-500 to-teal-500",
    description: "Available worldwide • Remote"
  },
  {
    icon: FiBookOpen,
    title: "Education",
    content: "BCA — Cloud & Security",
    link: null,
    gradient: "from-purple-500 to-pink-500",
    description: "Amity University Online • CGPA 7.95+"
  },
  {
    icon: FiBriefcase,
    title: "Status",
    content: "Open to Opportunities",
    link: null,
    gradient: "from-amber-500 to-orange-500",
    description: "Full Stack Engineer • Remote"
  }
];

const socialLinks = [
  { icon: FiGithub, label: "GitHub", url: "https://github.com/ajitdev01", gradient: "from-gray-700 to-gray-900", external: true },
  { icon: FiLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/ajitdev01/", gradient: "from-blue-600 to-indigo-600", external: true },
  { icon: FiCode, label: "LeetCode", url: "https://leetcode.com/ajitdev01", gradient: "from-amber-500 to-orange-500", external: true },
  { icon: FiMail, label: "Email", url: "mailto:ajitk23192@gmail.com", gradient: "from-rose-500 to-pink-500", external: false },
  { icon: FiFileText, label: "Resume", url: "/resume.pdf", gradient: "from-emerald-500 to-teal-500", external: true },
  { icon: FiGlobe, label: "Portfolio", url: "/", gradient: "from-purple-500 to-violet-500", external: false }
];

const credibilityStats = [
  { value: "300+", label: "LeetCode Problems", icon: FiCode, gradient: "from-blue-500 to-cyan-500" },
  { value: "150+", label: "Day Streak", icon: FiTrendingUp, gradient: "from-emerald-500 to-teal-500" },
  { value: "15+", label: "GitHub Repos", icon: FiFolder, gradient: "from-purple-500 to-pink-500" },
  { value: "8", label: "Live Projects", icon: FiZap, gradient: "from-amber-500 to-orange-500" }
];

const quickResponses = [
  "Full Stack MERN application development",
  "Next.js / SEO optimization project",
  "Technical collaboration / Code review",
  "Job opportunity / Contract work",
  "DSA / Problem solving discussion"
];

// ========== ANIMATION VARIANTS ==========
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

// ========== MAIN COMPONENT ==========
export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectClick = (subject: string) => {
    setFormData(prev => ({ ...prev, subject: `Inquiry about: ${subject}` }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Dynamic import of emailjs to avoid SSR issues
      const emailjs = (await import("emailjs-com")).default;

      const result = await emailjs.send(
        "service_jylezlb",
        "template_l7naq4c",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Message from Portfolio",
          message: formData.message,
          to_email: "ajitk23192@gmail.com",
          timestamp: new Date().toLocaleString()
        },
        "19sQiv4dP-SrzHK2B"
      );

      if (result.status === 200) {
        setIsLoading(false);
        setShowSuccessModal(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      console.error("Email sending error:", err);
      setIsLoading(false);
      setError("Failed to send message. Please try again or email me directly.");
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Ajit Kumar — Full Stack Engineer",
            url: "https://ajitdev.com/contact",
            description: "Contact page for Ajit Kumar, a Full Stack Engineer specializing in MERN, Next.js, and LAMP stacks.",
            about: {
              "@type": "Person",
              name: "Ajit Kumar",
              jobTitle: "Full Stack Engineer",
              email: "ajitk23192@gmail.com",
              url: "https://ajitdev.com",
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What technologies does Ajit Kumar specialize in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ajit specializes in MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js for SSR/SSG, TypeScript, Tailwind CSS, and has strong DSA foundation with 300+ LeetCode problems solved."
                }
              },
              {
                "@type": "Question",
                name: "Is Ajit Kumar available for Full Stack Engineer roles?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Ajit is actively seeking Full Stack Engineer roles worldwide, available for remote positions immediately."
                }
              }
            ]
          }),
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-x-hidden"
      >
        {/* Background Blobs */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <main className="flex-grow pt-4 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

            {/* Hidden SEO Content */}
            <section className="sr-only" aria-label="Contact Overview">
              <h1>Contact Full Stack Engineer — Ajit Kumar | MERN • Next.js • DSA 300+</h1>
              <p>
                Ajit Kumar is a Full Stack Engineer from Katihar, Bihar, India specializing in MERN Stack,
                Next.js. With 300+ LeetCode problems solved and a 150+ day coding streak.
                Available for remote Full Stack Engineer roles worldwide.
              </p>
            </section>

            {/* ===== HERO SECTION ===== */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center mb-20"
            >
              <motion.div variants={itemVariants} className="inline-flex p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl mb-6">
                <FiMail className="text-4xl text-blue-600" />
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
                Let&apos;s{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Connect
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                Full Stack Engineer • MERN • Next.js •{" "}
                <span className="font-semibold text-amber-600">300+ DSA Problems Solved</span>
              </motion.p>

              <motion.div variants={itemVariants} className="flex justify-center gap-3 flex-wrap mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <FiMapPin className="w-4 h-4" />
                  Katihar, Bihar, India
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  <FiGlobe className="w-4 h-4" />
                  Available Worldwide • Remote
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                  <FiClock className="w-4 h-4" />
                  Response: 24 Hours
                </span>
              </motion.div>

              <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            </motion.section>

            {/* ===== MAIN GRID ===== */}
            <div className="grid lg:grid-cols-3 gap-8 mb-10">

              {/* ===== LEFT: CONTACT INFO PANEL ===== */}
              <motion.aside
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="space-y-6"
              >
                {/* Contact Cards */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-6 shadow-xl">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    {contactInfo.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          whileHover={{ x: 4 }}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50/30 transition-all"
                        >
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                            <IconComp className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase">{item.title}</p>
                            {item.link ? (
                              <a href={item.link} className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-gray-900 font-medium">{item.content}</p>
                            )}
                            <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Social Links Grid */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-6 shadow-xl">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Connect Online</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((s, idx) => {
                      const SIcon = s.icon;
                      return (
                        <motion.a
                          key={idx}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05, y: -3 }}
                          href={s.url}
                          target={s.external ? "_blank" : undefined}
                          rel={s.external ? "noopener noreferrer" : undefined}
                          className={`h-16 rounded-xl bg-gradient-to-br ${s.gradient} text-white flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all`}
                          aria-label={`Ajit Kumar ${s.label}`}
                        >
                          <SIcon className="w-5 h-5 mb-1" />
                          <span className="text-xs font-medium">{s.label}</span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Response Ideas */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <FiZap className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Quick Response Ideas</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {quickResponses.map((response, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSubjectClick(response)}
                        className="px-3 py-1.5 bg-white/80 text-gray-700 rounded-lg text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        {response}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.aside>

              {/* ===== RIGHT: CONTACT FORM ===== */}
              <div className="lg:col-span-2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-8 shadow-xl"
                >
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h2>
                    <p className="text-gray-500">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-3 rounded-full" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <motion.div variants={itemVariants} className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative group">
                          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4" />
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            required
                            minLength={2}
                            placeholder="John Doe"
                            className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                          {focusedField === "name" && formData.name && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full" />
                          )}
                        </div>
                      </motion.div>

                      {/* Email Field */}
                      <motion.div variants={itemVariants} className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative group">
                          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4" />
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            placeholder="john@example.com"
                            className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                          {focusedField === "email" && formData.email && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full" />
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Subject Field */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                        Subject
                      </label>
                      <div className="relative group">
                        <FiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4" />
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="e.g., Full Stack Project Inquiry, Job Opportunity, Collaboration"
                          className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                      </div>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <FiMessageSquare className="absolute left-4 top-4 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          required
                          minLength={10}
                          maxLength={1000}
                          placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
                          className="w-full pl-11 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                        />
                        <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                          {formData.message.length}/1000
                        </div>
                      </div>
                    </motion.div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="p-4 bg-red-50 border border-red-200 rounded-xl"
                        >
                          <div className="flex items-start gap-3">
                            <FiAlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-red-700 text-sm">{error}</p>
                              <a href="mailto:ajitk23192@gmail.com" className="inline-flex items-center gap-1 text-blue-600 text-sm mt-2 hover:underline">
                                <FiMail className="w-3.5 h-3.5" />
                                Email me directly instead
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.button
                      variants={itemVariants}
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      <div className="flex items-center justify-center gap-3">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending message...</span>
                          </>
                        ) : (
                          <>
                            <FiSend className="w-5 h-5" />
                            <span>Send Message</span>
                            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </div>
                    </motion.button>

                    <p className="text-center text-xs text-gray-400">
                      <span className="text-green-500 mr-1">✓</span>
                      Your message is secure and will be sent directly to my email.
                    </p>
                  </form>
                </motion.div>

                {/* What Happens Next */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="mt-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-md"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiInfo className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">What happens after you reach out?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                        {[
                          { num: "1", title: "Acknowledgment", desc: "Auto-reply within minutes" },
                          { num: "2", title: "Review", desc: "I read your message within 24hr" },
                          { num: "3", title: "Response", desc: "Personal reply within 24 hours" },
                        ].map((step) => (
                          <div key={step.num} className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                              <span className="text-blue-600 font-bold text-sm">{step.num}</span>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800 text-sm">{step.title}</p>
                              <p className="text-xs text-gray-500">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Hidden Internal Links (SEO) */}
            <nav className="sr-only" aria-label="Site Navigation">
              <ul>
                <li><Link href="/">Home — Full Stack Engineer Portfolio</Link></li>
                <li><Link href="/skills">Technical Skills — MERN • Next.js • DSA 300+</Link></li>
                <li><Link href="/projects">Full Stack Projects — Production Portfolio</Link></li>
                <li><Link href="/about">About Ajit Kumar — Full Stack Engineer</Link></li>
              </ul>
            </nav>
          </div>
        </main>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                Got it!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
