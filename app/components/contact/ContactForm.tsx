'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const IP = { strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
const ic = (s: number, c?: string) => ({ width: s, height: s, viewBox: "0 0 24 24", className: c || undefined, stroke: "currentColor", ...IP });

const FiMail = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const FiUser = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const FiMessageSquare = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
const FiSend = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>;
const FiTag = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>;
const FiAlertCircle = ({ className }: { className?: string }) => <svg {...ic(24, className)}><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>;
const FiArrowRight = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
const FiInfo = ({ className }: { className?: string }) => <svg {...ic(24, className)}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>;
const FiZap = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" /></svg>;

const quickResponses = [
  "Full Stack MERN application development",
  "Next.js / SEO optimization project",
  "Technical collaboration / Code review",
  "Job opportunity / Contract work",
  "DSA / Problem solving discussion"
];

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

export default function ContactForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: ""
  });

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
        trackEvent("contact_submission_success", { subject: formData.subject || "General" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err: any) {
      console.error("Email sending error:", err);
      setIsLoading(false);
      trackEvent("contact_submission_failed", { error: err.message || "Unknown error" });
      setError("Failed to send message. Please try again or email me directly.");
    }
  };

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side: Quick response block inside the Client Area */}
        <div className="lg:col-span-1 space-y-6">
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
        </div>

        {/* Right Side: The Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-8 shadow-xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h2>
              <p className="text-gray-600">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-3 rounded-full" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-750">
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
                      className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                    />
                    {focusedField === "name" && formData.name && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-755">
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
                      className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                    />
                    {focusedField === "email" && formData.email && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
                    )}
                  </div>
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-750">
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
                    className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-750">
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
                    className="w-full pl-11 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-gray-900"
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-400" aria-hidden="true">
                    {formData.message.length}/1000
                  </div>
                </div>
              </div>

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
                        <a href="mailto:support@ajitdev.com" className="inline-flex items-center gap-1 text-blue-600 text-sm mt-2 hover:underline">
                          <FiMail className="w-3.5 h-3.5" />
                          Email me directly instead
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              </button>

              <p className="text-center text-xs text-gray-400">
                <span className="text-green-500 mr-1">✓</span>
                Your message is secure and will be sent directly to my email.
              </p>
            </form>
          </div>

          {/* What Happens Next */}
          <div className="mt-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-md">
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
                        <p className="text-xs text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
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
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
