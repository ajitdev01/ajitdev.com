import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiMail, FiMapPin, FiBookOpen, FiBriefcase, FiUser, FiMessageSquare,
  FiSend, FiGithub, FiLinkedin, FiFileText, FiCheck, FiClock, FiInfo,
  FiTag, FiAlertCircle, FiTwitter, FiGlobe, FiArrowRight,
} from "react-icons/fi";

// ========== STRUCTURED DATA (outside component — static, no re-render cost) ==========

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Ajit Kumar — DevOps Engineer",
  url: "https://ajitdev.com/contact",
  description:
    "Contact page for Ajit Kumar, a DevOps Engineer and Full Stack Developer from Katihar, Bihar, India, available for remote opportunities worldwide.",
  about: {
    "@type": "Person",
    name: "Ajit Kumar",
    jobTitle: "DevOps Engineer & Full Stack Developer",
    email: "ajitk23192@gmail.com",
    url: "https://ajitdev.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Katihar",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/ajitdev01",
      "https://www.linkedin.com/in/ajitdev01",
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I contact Ajit Kumar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Ajit Kumar through the contact form on this page or directly via email at ajitk23192@gmail.com. He typically responds within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is Ajit Kumar available for remote DevOps roles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ajit Kumar is based in Katihar, Bihar, India and is fully available for remote DevOps engineering, cloud infrastructure, CI/CD automation, and full-stack MERN development roles or contracts with teams worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of projects is Ajit Kumar open to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ajit Kumar is open to DevOps engineering projects, AWS cloud infrastructure work, Docker and Kubernetes containerization, CI/CD pipeline setup, DevSecOps implementations, and MERN stack full-stack development projects.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: "https://ajitdev.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://ajitdev.com/contact" },
  ],
};

// ========== STATIC DATA ==========

const contactInfo = [
  {
    icon: FiMail,
    title: "Email",
    content: "ajitk23192@gmail.com",
    link: "mailto:ajitk23192@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
    description: "Direct communication",
    itemProp: "email",
  },
  {
    icon: FiMapPin,
    title: "Location",
    content: "Katihar, Bihar, India · Remote",
    gradient: "from-emerald-500 to-teal-500",
    description: "Available worldwide",
    itemProp: "address",
  },
  {
    icon: FiBookOpen,
    title: "Education",
    content: "BCA — Cloud & Security",
    gradient: "from-purple-500 to-pink-500",
    description: "Amity University Online",
    itemProp: null,
  },
  {
    icon: FiBriefcase,
    title: "Status",
    content: "Open to Opportunities",
    gradient: "from-amber-500 to-orange-500",
    description: "Remote roles & freelance",
    itemProp: null,
  },
];

const socialLinks = [
  { icon: FiGithub,   label: "GitHub",    url: "https://github.com/ajitdev01",              gradient: "from-gray-700 to-gray-900",    external: true  },
  { icon: FiLinkedin, label: "LinkedIn",  url: "https://www.linkedin.com/in/ajitdev01/",     gradient: "from-blue-600 to-indigo-600",   external: true  },
  { icon: FiTwitter,  label: "Twitter",   url: "https://twitter.com/ajitdev01",              gradient: "from-cyan-500 to-blue-500",     external: true  },
  { icon: FiMail,     label: "Email",     url: "mailto:ajitk23192@gmail.com",                gradient: "from-rose-500 to-pink-500",     external: false },
  { icon: FiFileText, label: "Resume",    url: "/resume.pdf",                                gradient: "from-emerald-500 to-teal-500",  external: false },
  { icon: FiGlobe,    label: "Portfolio", url: "/",                                          gradient: "from-purple-500 to-violet-500", external: false },
];

// ========== ANIMATION VARIANTS ==========

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.92, transition: { duration: 0.2 } },
};

// ========== MAIN COMPONENT ==========

const Contact = () => {
  const [isLoaded, setIsLoaded]             = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading]           = useState(false);
  const [error, setError]                   = useState("");
  const [focusedField, setFocusedField]     = useState(null);
  const [formData, setFormData]             = useState({
    name: "", email: "", subject: "", message: "",
  });

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await emailjs.send(
        "service_jylezlb",
        "template_l7naq4c",
        {
          name:      formData.name,
          email:     formData.email,
          subject:   formData.subject || "New Message from Portfolio",
          message:   formData.message,
          to_email:  "ajitk23192@gmail.com",
          timestamp: new Date().toLocaleString(),
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
      {/* ✅ SEO: Full Helmet with all meta + 3 JSON-LD schemas */}
      <Helmet>
        <title>Contact Ajit Kumar | DevOps Engineer & Full Stack Developer — India</title>
        <meta
          name="description"
          content="Contact Ajit Kumar — DevOps Engineer and Full Stack MERN Developer from Katihar, Bihar, India. Specializing in AWS cloud infrastructure, Docker, Kubernetes, CI/CD automation, and DevSecOps. Available for remote projects worldwide."
        />
        <link rel="canonical" href="https://ajitdev.com/contact" />
        <meta name="author" content="Ajit Kumar" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Katihar, Bihar, India" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact DevOps Engineer Ajit Kumar — India" />
        <meta property="og:description" content="Reach out for DevOps engineering, AWS cloud, Docker, CI/CD, MERN development, or remote collaboration opportunities." />
        <meta property="og:url" content="https://ajitdev.com/contact" />
        <meta property="og:image" content="https://ajitdev.com/og-image.jpg" />
        <meta property="og:image:alt" content="Contact Ajit Kumar — DevOps Engineer" />
        <meta property="og:site_name" content="Ajit Kumar Portfolio" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Ajit Kumar — DevOps Engineer India" />
        <meta name="twitter:description" content="Remote DevOps Engineer available for cloud, CI/CD, Docker, and MERN stack projects." />
        <meta name="twitter:image" content="https://ajitdev.com/og-image.jpg" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col bg-white overflow-hidden"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        {/* Background blobs */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
          <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-emerald-500/6 rounded-full blur-3xl" />
        </div>

        <Header />

        <main className="flex-grow pt-16 relative z-10" role="main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

            {/* ✅ SEO: Hidden topical authority paragraph */}
            <section className="sr-only" aria-label="Contact overview">
              <h2>Contact DevOps Engineer Ajit Kumar — Katihar, Bihar, India</h2>
              <p>
                Ajit Kumar is a DevOps Engineer and Full Stack Developer from Katihar, Bihar,
                India specializing in AWS cloud infrastructure, Docker containerization,
                Kubernetes orchestration, Terraform Infrastructure as Code, CI/CD automation
                with GitHub Actions, DevSecOps practices, and MERN stack development. Use this
                page to connect regarding remote DevOps engineering roles, freelance cloud
                infrastructure projects, or technical collaboration opportunities worldwide.
              </p>
            </section>

            {/* ===== PAGE HEADER ===== */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
              aria-labelledby="contact-heading"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex p-5 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-2xl mb-6 border border-white/40"
                aria-hidden="true"
              >
                <FiMail className="text-4xl text-blue-600" />
              </motion.div>

              <motion.h1
                id="contact-heading"
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
                itemProp="name"
              >
                Get In Touch
              </motion.h1>

              {/* ✅ SEO: Keyword-rich hero subtext visible to both users and crawlers */}
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 max-w-2xl mx-auto mb-6"
                itemProp="description"
              >
                Looking for a <strong className="text-gray-800">DevOps Engineer</strong> or{" "}
                <strong className="text-gray-800">Full Stack MERN Developer</strong>? Let's build
                secure, cloud-native solutions together.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full"
                aria-hidden="true"
              />
            </motion.section>

            {/* ===== MAIN GRID ===== */}
            <div className="grid lg:grid-cols-3 gap-8">

              {/* ===== LEFT: CONTACT INFO ===== */}
              <motion.aside
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                aria-label="Contact information"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-8 shadow-xl h-full">
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold text-gray-900 mb-8"
                  >
                    Contact Information
                  </motion.h2>

                  {/* Contact detail cards */}
                  <div className="space-y-4 mb-8">
                    {contactInfo.map((item) => (
                      <motion.div
                        key={item.title}
                        variants={itemVariants}
                        className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}
                            aria-hidden="true"
                          >
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                              {item.title}
                            </p>
                            {item.link ? (
                              <a
                                href={item.link}
                                className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                                itemProp={item.itemProp ?? undefined}
                              >
                                {item.content}
                              </a>
                            ) : (
                              <p
                                className="text-gray-900 font-medium"
                                itemProp={item.itemProp ?? undefined}
                              >
                                {item.content}
                              </p>
                            )}
                            <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      Connect with me
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {socialLinks.map((s) => (
                        <motion.a
                          key={s.label}
                          variants={itemVariants}
                          whileHover={{ scale: 1.07, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          href={s.url}
                          target={s.external ? "_blank" : undefined}
                          rel={s.external ? "noopener noreferrer" : undefined}
                          className={`h-14 rounded-xl bg-gradient-to-br ${s.gradient} text-white flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all`}
                          aria-label={`Ajit Kumar ${s.label}`}
                          itemProp={s.label === "GitHub" || s.label === "LinkedIn" ? "sameAs" : undefined}
                        >
                          <s.icon className="w-4 h-4 mb-1" aria-hidden="true" />
                          <span className="text-xs font-medium">{s.label}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Direct email CTA */}
                  <div className="mt-6">
                    <a
                      href="mailto:ajitk23192@gmail.com?subject=Portfolio Inquiry&body=Hello Ajit, I came across your portfolio and wanted to connect..."
                      className="flex items-center justify-center gap-3 w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg group"
                      aria-label="Send email directly to Ajit Kumar"
                    >
                      <FiMail className="w-4 h-4" aria-hidden="true" />
                      Email Directly
                      <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.aside>

              {/* ===== RIGHT: FORM + INFO ===== */}
              <div className="lg:col-span-2 space-y-8">

                {/* Contact Form */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-8 shadow-xl"
                >
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold text-gray-900 mb-1"
                  >
                    Send me a message
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-gray-500 mb-8"
                  >
                    I'll get back to you within 24 hours.
                  </motion.p>

                  {/* ✅ ACCESSIBILITY: role + aria-label on form */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    role="form"
                    aria-label="Contact form to reach Ajit Kumar"
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <motion.div variants={itemVariants} className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                          Your Name <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <div className="relative group">
                          <FiUser
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4"
                            aria-hidden="true"
                          />
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
                            autoComplete="name"
                            aria-required="true"
                            className="w-full pl-11 pr-4 py-3.5 h-12 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                          {focusedField === "name" && formData.name && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
                          )}
                        </div>
                      </motion.div>

                      {/* Email */}
                      <motion.div variants={itemVariants} className="space-y-2">
                        <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700">
                          Your Email <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <div className="relative group">
                          <FiMail
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4"
                            aria-hidden="true"
                          />
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            placeholder="john@example.com"
                            autoComplete="email"
                            aria-required="true"
                            className="w-full pl-11 pr-4 py-3.5 h-12 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                          {focusedField === "email" && formData.email && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Subject */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                        Subject
                      </label>
                      <div className="relative group">
                        <FiTag
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4"
                          aria-hidden="true"
                        />
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="DevOps project inquiry or collaboration"
                          className="w-full pl-11 pr-4 py-3.5 h-12 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                      </div>
                    </motion.div>

                    {/* Message */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                        Your Message <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <div className="relative group">
                        <FiMessageSquare
                          className="absolute left-4 top-4 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4"
                          aria-hidden="true"
                        />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          rows={5}
                          required
                          minLength={10}
                          maxLength={500}
                          placeholder="Hello, I'd like to discuss a DevOps project..."
                          aria-required="true"
                          className="w-full pl-11 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                        />
                        <div className="absolute bottom-3 right-3 text-xs text-gray-400" aria-live="polite">
                          {formData.message.length}/500
                        </div>
                      </div>
                    </motion.div>

                    {/* Error message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-5 bg-red-50 border border-red-200 rounded-xl"
                        role="alert"
                      >
                        <div className="flex items-start gap-3">
                          <FiAlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <div>
                            <p className="text-red-700 font-medium text-sm">{error}</p>
                            <a
                              href="mailto:ajitk23192@gmail.com"
                              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm mt-2"
                            >
                              <FiMail className="w-3.5 h-3.5" aria-hidden="true" />
                              Email me directly instead
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Submit button */}
                    <motion.button
                      variants={itemVariants}
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      className="w-full h-13 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group"
                      aria-label={isLoading ? "Sending message..." : "Send message to Ajit Kumar"}
                    >
                      <div className="flex items-center justify-center gap-3">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <FiSend className="w-5 h-5" aria-hidden="true" />
                            <span>Send Message</span>
                            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </>
                        )}
                      </div>
                    </motion.button>

                    <p className="text-center text-xs text-gray-400">
                      <span className="text-green-500 mr-1" aria-hidden="true">✓</span>
                      Powered by EmailJS · Secure &amp; reliable
                    </p>
                  </form>
                </motion.div>

                {/* What happens next */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    <div
                      className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0"
                      aria-hidden="true"
                    >
                      <FiInfo className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        What happens next?
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-5">
                        I typically respond within <strong>24 hours</strong>. For urgent
                        inquiries please mention it in your message. I'm open to discussing
                        DevOps engineering roles, cloud infrastructure projects, CI/CD
                        automation, and full-stack MERN development — remote, worldwide.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                          <FiClock className="w-5 h-5 text-blue-500 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">Response Time</p>
                            <p className="text-xs text-gray-500">Within 24 hours</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                          <FiCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">Open For</p>
                            <p className="text-xs text-gray-500">Remote DevOps · Freelance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ✅ SEO: Hidden internal nav */}
            <nav className="sr-only" aria-label="Site navigation">
              <ul>
                <li><a href="/">Home — DevOps Engineer Katihar Bihar India</a></li>
                <li><a href="/about">About Ajit Kumar — DevSecOps Engineer</a></li>
                <li><a href="/skills">Skills — AWS Docker Kubernetes Terraform CI/CD</a></li>
                <li><a href="/projects">DevOps & Full Stack Projects Portfolio</a></li>
                <li><a href="/contact">Contact — Hire Remote DevOps Engineer India</a></li>
              </ul>
            </nav>

          </div>
        </main>

        <Footer />

        {/* ===== SUCCESS MODAL ===== */}
        <AnimatePresence>
          {showSuccessModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
              onClick={() => setShowSuccessModal(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Message sent successfully"
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Success icon */}
                <div className="flex justify-center mb-7">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.15, type: "spring" }}
                        >
                          <FiCheck className="w-7 h-7 text-white" aria-hidden="true" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-ping opacity-20" aria-hidden="true" />
                  </div>
                </div>

                <div className="text-center mb-7">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h2>
                  <p className="text-gray-500">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 mb-7 flex items-center gap-4">
                  <FiClock className="w-5 h-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Expected Response</p>
                    <p className="text-xs text-gray-500">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowSuccessModal(false)}
                    className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
                  >
                    Close
                  </motion.button>
                  <Link
                    to="/projects"
                    onClick={() => setShowSuccessModal(false)}
                    className="flex-1 h-12 bg-gray-100 text-gray-800 font-semibold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center"
                  >
                    View Projects
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Contact;