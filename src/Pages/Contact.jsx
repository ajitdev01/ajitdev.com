import { useState, useEffect } from "react";
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
} from "react-icons/fi";

const Contact = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value || "New Message from Portfolio",
        message: e.target.message.value,
        to_email: "ajitk23192@gmail.com",
      };

      const result = await emailjs.send(
        "service_jylezlb",
        "template_l7naq4c",
        formData,
      );

      if (result.status === 200) {
        setIsLoading(false);
        setShowSuccessModal(true);
        e.target.reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      console.error("Email sending error:", err);
      setIsLoading(false);
      setError(
        "Failed to send message. Please try again or email me directly.",
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
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      content: "India • Remote",
      color: "green",
    },
    {
      icon: <FiBookOpen />,
      title: "Education",
      content: "BCA - Cloud & Security",
      color: "purple",
    },
    {
      icon: <FiBriefcase />,
      title: "Status",
      content: "Open to Opportunities",
      color: "orange",
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      label: "GitHub",
      url: "https://github.com/ajitdev01",
      color: "gray",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ajitdev01/",
      color: "blue",
    },
    {
      icon: <FiMail />,
      label: "Email",
      url: "mailto:ajitk23192@gmail.com",
      color: "red",
    },
    {
      icon: <FiFileText />,
      label: "Resume",
      url: "/resume.pdf",
      color: "green",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col bg-white transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Header />

      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl mb-6">
              <FiMail className="text-3xl text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Have a project in mind or want to discuss opportunities? Feel free
              to reach out!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:block">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300 border border-gray-200"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${
                            item.color === "blue"
                              ? "from-blue-100 to-blue-50"
                              : item.color === "green"
                                ? "from-green-100 to-green-50"
                                : item.color === "purple"
                                  ? "from-purple-100 to-purple-50"
                                  : "from-orange-100 to-orange-50"
                          } rounded-lg flex items-center justify-center`}
                        >
                          <div
                            className={`${
                              item.color === "blue"
                                ? "text-blue-600"
                                : item.color === "green"
                                  ? "text-green-600"
                                  : item.color === "purple"
                                    ? "text-purple-600"
                                    : "text-orange-600"
                            } text-xl`}
                          >
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-600">{item.content}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Connect with me
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target={social.label !== "Email" ? "_blank" : undefined}
                        rel={
                          social.label !== "Email"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`h-12 ${
                          social.color === "gray"
                            ? "bg-gray-600 hover:bg-gray-700"
                            : social.color === "blue"
                              ? "bg-blue-600 hover:bg-blue-700"
                              : social.color === "red"
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-green-600 hover:bg-green-700"
                        } text-white rounded-lg flex items-center justify-center transition-colors duration-300`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Direct Email Button */}
                <a
                  href="mailto:ajitk23192@gmail.com?subject=Portfolio Inquiry&body=Hello Ajit, I came across your portfolio and wanted to connect..."
                  className="mt-6 block w-full h-12 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300 text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <FiMail />
                    Email Directly
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send me a message
                </h2>
                <p className="text-gray-600 mb-8">
                  I'll get back to you as soon as possible
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FiUser />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          minLength="2"
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-3 h-12 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FiMail />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="john@example.com"
                          className="w-full pl-12 pr-4 py-3 h-12 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FiTag />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Project inquiry or collaboration"
                        className="w-full pl-12 pr-4 py-3 h-12 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-gray-400">
                        <FiMessageSquare />
                      </div>
                      <textarea
                        name="message"
                        rows="5"
                        required
                        minLength="10"
                        placeholder="Hello, I'd like to discuss..."
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 text-red-600">
                        <FiAlertCircle />
                        <span className="font-medium">{error}</span>
                      </div>
                      <div className="mt-2">
                        <a
                          href="mailto:ajitk23192@gmail.com"
                          className="text-blue-600 hover:underline text-sm"
                        >
                          Click here to email me directly
                        </a>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <FiSend />
                        <span>Send Message</span>
                      </div>
                    )}
                  </button>

                  <div className="text-center text-sm text-gray-500 pt-4">
                    <p>Form powered by EmailJS</p>
                  </div>
                </form>
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start gap-4">
                  <FiInfo className="text-xl text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What happens next?
                    </h3>
                    <p className="text-gray-700">
                      I typically respond within 24 hours. For urgent inquiries,
                      please mention it in your message. I'm open to discussing
                      internships, collaborations, and full-stack development
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <FiCheck className="text-white text-2xl" />
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600">
                Thank you for reaching out. I'll get back to you within 24
                hours.
              </p>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <FiClock className="text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Response Time</p>
                  <p className="text-sm text-gray-600">
                    Typically within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300"
              >
                Close
              </button>
              <a
                href="/projects"
                className="flex-1 h-12 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300 text-center flex items-center justify-center"
                onClick={() => setShowSuccessModal(false)}
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
