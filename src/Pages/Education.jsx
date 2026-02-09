import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiBook,
  FiCloud,
  FiShield,
  FiCode,
  FiTarget,
  FiTool,
  FiBriefcase,
  FiSend,
  FiFileText,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const Education = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen) {
        const menu = document.getElementById("mobile-menu");
        if (menu && !menu.contains(event.target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const focusAreas = [
    {
      icon: <FiCloud />,
      title: "Cloud Technologies",
      description:
        "Learning cloud infrastructure, deployment, and management with focus on AWS, serverless architectures, and cloud security best practices.",
      color: "blue",
    },
    {
      icon: <FiShield />,
      title: "Cybersecurity",
      description:
        "Studying security principles, threat modeling, OWASP Top 10, secure coding practices, and DevSecOps methodologies.",
      color: "green",
    },
    {
      icon: <FiCode />,
      title: "Web Development",
      description:
        "Building modern web applications using MERN stack, responsive design, RESTful APIs, and database management.",
      color: "purple",
    },
  ];

  const academicHighlights = [
    {
      icon: <FiBook />,
      title: "Core Subjects",
      description: "Cloud Computing, Network Security, Web Technologies",
      color: "blue",
    },
    {
      icon: <FiTool />,
      title: "Technical Skills",
      description: "React, Node.js, MongoDB, AWS Basics",
      color: "green",
    },
    {
      icon: <FiTarget />,
      title: "Career Focus",
      description: "Full Stack Development with Security Specialization",
      color: "purple",
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
              <FiBook className="text-3xl text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Education</h1>
            <p className="text-lg text-gray-600 mb-4">
              BCA - Cloud & Security Student
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
            aria-label="Toggle education menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {/* Mobile Education Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden fixed inset-x-0 bottom-0 bg-white border-t border-gray-200 transition-transform duration-300 ease-in-out z-40 ${
              isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
            }`}
            style={{ maxHeight: "70vh" }}
          >
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Quick Access
              </h2>

              {/* Mobile Quick Links */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    document
                      .getElementById("main-education")
                      .scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 h-24 justify-center"
                >
                  <FiBook className="text-blue-600 text-xl" />
                  <span className="text-sm font-medium">Program</span>
                </button>

                <button
                  onClick={() => {
                    document
                      .getElementById("focus-areas")
                      .scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 h-24 justify-center"
                >
                  <FiTarget className="text-green-600 text-xl" />
                  <span className="text-sm font-medium">Focus Areas</span>
                </button>

                <button
                  onClick={() => {
                    document
                      .getElementById("academic-details")
                      .scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 h-24 justify-center"
                >
                  <FiBriefcase className="text-purple-600 text-xl" />
                  <span className="text-sm font-medium">Highlights</span>
                </button>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors duration-300 h-24 justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FiFileText className="text-blue-600 text-xl" />
                  <span className="text-sm font-medium">Resume</span>
                </a>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="flex gap-3">
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 h-12 inline-flex items-center justify-center gap-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors"
                >
                  <FiSend />
                  Contact
                </a>
                <a
                  href="/projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 h-12 inline-flex items-center justify-center gap-2 px-4 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  <FiCode />
                  Projects
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Education Main Card */}
            <div
              id="main-education"
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border border-blue-100 mb-12"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-white rounded-xl flex items-center justify-center">
                    <FiBook className="text-4xl text-blue-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        BCA - Cloud & Security
                      </h2>
                      <p className="text-gray-700 mt-2">
                        Bachelor of Computer Applications
                      </p>
                    </div>
                    <div className="mt-3 md:mt-0">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Current Student
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      {
                        icon: <FiCloud />,
                        text: "Cloud Computing",
                        color: "text-blue-500",
                      },
                      {
                        icon: <FiShield />,
                        text: "Security Fundamentals",
                        color: "text-green-500",
                      },
                      {
                        icon: <FiCode />,
                        text: "Full Stack Development",
                        color: "text-purple-500",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white transition-colors duration-300"
                      >
                        <div className={item.color}>{item.icon}</div>
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Specialized program focusing on cloud technologies and
                    cybersecurity principles alongside traditional computer
                    applications. The curriculum combines theoretical knowledge
                    with practical skills in secure application development,
                    cloud infrastructure, and modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div id="focus-areas" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Focus Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {focusAreas.map((area, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${
                      area.color === "blue"
                        ? "from-blue-50 to-blue-100"
                        : area.color === "green"
                        ? "from-green-50 to-green-100"
                        : "from-purple-50 to-purple-100"
                    } p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${
                          area.color === "blue"
                            ? "from-blue-100 to-white"
                            : area.color === "green"
                            ? "from-green-100 to-white"
                            : "from-purple-100 to-white"
                        } rounded-lg flex items-center justify-center`}
                      >
                        <div
                          className={`${
                            area.color === "blue"
                              ? "text-blue-600"
                              : area.color === "green"
                              ? "text-green-600"
                              : "text-purple-600"
                          } text-xl`}
                        >
                          {area.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Details */}
            <div
              id="academic-details"
              className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl border border-gray-200 mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Academic Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {academicHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
                  >
                    <div
                      className={`${
                        item.color === "blue"
                          ? "text-blue-500"
                          : item.color === "green"
                          ? "text-green-500"
                          : item.color === "purple"
                          ? "text-purple-500"
                          : "text-orange-500"
                      } text-xl`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">Online Learning</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">
                      Access to Resources
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      Real
                    </div>
                    <div className="text-sm text-gray-600">
                      Project Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12">
              <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Build Something Great?
                </h3>
                <p className="text-gray-300 mb-8">
                  Let's discuss how my skills and education can contribute to
                  your projects
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl h-12"
                  >
                    <FiSend />
                    Get In Touch
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-colors duration-300 border border-white/20 h-12"
                  >
                    <FiCode />
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Education;
