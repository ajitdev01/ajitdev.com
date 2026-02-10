import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiMail,
  FiMapPin,
  FiBookOpen,
  FiBriefcase,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiFileText,
  FiCheck,
  FiClock,
  FiInfo,
  FiTag,
  FiAlertCircle,
  FiTwitter,
  FiGlobe,
  FiPhone,
  FiCalendar,
  FiArrowRight,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

const Contact = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const emailData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "New Message from Portfolio",
        message: formData.message,
        to_email: "ajitk23192@gmail.com",
        timestamp: new Date().toLocaleString(),
      };

      const result = await emailjs.send(
        "service_jylezlb",
        "template_l7naq4c",
        emailData,
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
      setError(
        "Failed to send message. Please try again or email me directly."
      );
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      content: "ajitk23192@gmail.com",
      link: "mailto:ajitk23192@gmail.com",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      description: "Direct communication",
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      content: "India • Remote",
      color: "green",
      gradient: "from-emerald-500 to-teal-500",
      description: "Open to remote work",
    },
    {
      icon: <FiBookOpen />,
      title: "Education",
      content: "BCA - Cloud & Security",
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      description: "Specialized student",
    },
    {
      icon: <FiBriefcase />,
      title: "Status",
      content: "Open to Opportunities",
      color: "orange",
      gradient: "from-amber-500 to-orange-500",
      description: "Available for projects",
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      label: "GitHub",
      url: "https://github.com/ajitdev01",
      color: "gray",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ajitdev01/",
      color: "blue",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      icon: <FiTwitter />,
      label: "Twitter",
      url: "https://twitter.com/ajitdev01",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <FiMail />,
      label: "Email",
      url: "mailto:ajitk23192@gmail.com",
      color: "red",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: <FiFileText />,
      label: "Resume",
      url: "/resume.pdf",
      color: "green",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <FiGlobe />,
      label: "Portfolio",
      url: "/",
      color: "purple",
      gradient: "from-purple-500 to-violet-500",
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
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
              <FiMail className="text-4xl text-blue-600" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-6"
            >
              Have a project in mind or want to discuss opportunities? Let's build something amazing together!
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full"
            ></motion.div>
          </motion.section>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:block"
            >
              <div className="relative">
                {/* Animated border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <motion.h2 
                    variants={itemVariants}
                    className="text-3xl font-bold text-gray-900 mb-8"
                  >
                    Contact Information
                  </motion.h2>

                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover="hover"
                        className="relative"
                      >
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:border-blue-200/50 transition-all duration-300 group">
                          <div className="flex items-start gap-4">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                              <div className="text-white text-2xl">
                                {item.icon}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 text-lg">
                                {item.title}
                              </h3>
                              {item.link ? (
                                <a
                                  href={item.link}
                                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 block text-lg font-medium mt-1"
                                >
                                  {item.content}
                                </a>
                              ) : (
                                <p className="text-gray-700 text-lg font-medium mt-1">{item.content}</p>
                              )}
                              <p className="text-gray-500 text-sm mt-2">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <motion.div
                    variants={itemVariants}
                    className="mt-10 pt-8 border-t border-gray-200/50"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      Connect with me
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          href={social.url}
                          target={social.label !== "Email" ? "_blank" : undefined}
                          rel={
                            social.label !== "Email"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className={`h-16 rounded-xl bg-gradient-to-br ${social.gradient} text-white flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl group`}
                          aria-label={social.label}
                        >
                          <div className="text-xl mb-1">{social.icon}</div>
                          <span className="text-sm font-medium">{social.label}</span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Direct Email Button */}
                  <motion.div
                    variants={itemVariants}
                    className="mt-8"
                  >
                    <a
                      href="mailto:ajitk23192@gmail.com?subject=Portfolio Inquiry&body=Hello Ajit, I came across your portfolio and wanted to connect..."
                      className="block w-full h-14 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl group"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <FiMail className="text-lg" />
                        <span>Email Directly</span>
                        <FiArrowRight className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2"
            >
              <div className="relative">
                {/* Animated border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <motion.h2 
                    variants={itemVariants}
                    className="text-3xl font-bold text-gray-900 mb-2"
                  >
                    Send me a message
                  </motion.h2>
                  <motion.p 
                    variants={itemVariants}
                    className="text-gray-600 text-lg mb-8"
                  >
                    I'll get back to you as soon as possible
                  </motion.p>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        variants={itemVariants}
                        className="space-y-3"
                      >
                        <label className="block text-sm font-semibold text-gray-700">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative group">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-500">
                            <FiUser />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            required
                            minLength="2"
                            placeholder="John Doe"
                            className="w-full pl-12 pr-4 py-4 h-14 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 focus:shadow-lg"
                          />
                          {focusedField === 'name' && formData.name && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                          )}
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="space-y-3"
                      >
                        <label className="block text-sm font-semibold text-gray-700">
                          Your Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative group">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-500">
                            <FiMail />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            required
                            placeholder="john@example.com"
                            className="w-full pl-12 pr-4 py-4 h-14 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 focus:shadow-lg"
                          />
                          {focusedField === 'email' && formData.email && (
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      variants={itemVariants}
                      className="space-y-3"
                    >
                      <label className="block text-sm font-semibold text-gray-700">
                        Subject
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-500">
                          <FiTag />
                        </div>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Project inquiry or collaboration"
                          className="w-full pl-12 pr-4 py-4 h-14 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 focus:shadow-lg"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="space-y-3"
                    >
                      <label className="block text-sm font-semibold text-gray-700">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <div className="absolute left-4 top-4 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-500">
                          <FiMessageSquare />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          rows="5"
                          required
                          minLength="10"
                          placeholder="Hello, I'd like to discuss..."
                          className="w-full pl-12 pr-4 py-4 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 focus:shadow-lg resize-none"
                        ></textarea>
                        <div className="absolute bottom-3 right-3 text-sm text-gray-500">
                          {formData.message.length}/500
                        </div>
                      </div>
                    </motion.div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 bg-gradient-to-r from-red-50/80 to-pink-50/80 backdrop-blur-sm border border-red-200/50 rounded-xl"
                      >
                        <div className="flex items-start gap-3">
                          <FiAlertCircle className="text-red-500 text-xl mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 text-red-600 font-medium mb-2">
                              <span>Error sending message</span>
                            </div>
                            <p className="text-red-600 text-sm mb-3">{error}</p>
                            <a
                              href="mailto:ajitk23192@gmail.com"
                              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                              <FiMail className="text-sm" />
                              Click here to email me directly
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <motion.button
                      variants={itemVariants}
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-14 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl relative overflow-hidden group"
                    >
                      {/* Animated background effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-center justify-center gap-3">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <FiSend className="text-lg" />
                            <span>Send Message</span>
                            <FiArrowRight className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                          </>
                        )}
                      </div>
                    </motion.button>

                    <div className="text-center text-sm text-gray-500 pt-4">
                      <p className="flex items-center justify-center gap-2">
                        <span className="text-blue-500">✓</span>
                        Form powered by EmailJS • Secure & reliable
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              {/* Additional Info */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-8"
              >
                <div className="bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-white rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <FiInfo className="text-2xl text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        What happens next?
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        I typically respond within 24 hours. For urgent inquiries, please mention it in your message. I'm open to discussing internships, collaborations, and full-stack development opportunities with a focus on cloud security.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                          <FiClock className="text-blue-500 text-xl" />
                          <div>
                            <p className="font-medium text-gray-900">Response Time</p>
                            <p className="text-sm text-gray-600">Within 24 hours</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                          <FiCheck className="text-emerald-500 text-xl" />
                          <div>
                            <p className="font-medium text-gray-900">Open For</p>
                            <p className="text-sm text-gray-600">Projects & Collaborations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl max-w-md w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <FiCheck className="text-white text-3xl" />
                      </motion.div>
                    </div>
                  </div>
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-ping opacity-20"></div>
                </div>
              </div>

              {/* Success Message */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 text-lg">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-white rounded-xl flex items-center justify-center">
                    <FiClock className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-lg">Response Time</p>
                    <p className="text-gray-600">Typically within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSuccessModal(false)}
                  className="flex-1 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Close
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/projects"
                  className="flex-1 h-14 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-xl hover:bg-white transition-all duration-300 border border-gray-200/50 hover:border-gray-300/50 text-center flex items-center justify-center shadow-lg hover:shadow-xl"
                  onClick={() => setShowSuccessModal(false)}
                >
                  View Projects
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;