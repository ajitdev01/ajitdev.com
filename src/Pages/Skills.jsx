import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCloud,
  FiShield,
  FiTrendingUp,
  FiFileText,
  FiCheck,
  FiInfo,
  FiSend,
  FiCpu,
  FiLayers,
  FiGitBranch,
  FiUserCheck,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const Skills = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Skill categories data
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiCode />,
      color: "blue",
      skills: [
        { name: "HTML5", icon: <FiCode /> },
        { name: "CSS3", icon: <FiCode /> },
        { name: "JavaScript (ES6+)", icon: <FiCode /> },
        { name: "React.js", icon: <FiCpu /> },
        { name: "Tailwind CSS", icon: <FiLayers /> },
        { name: "Responsive Web Design", icon: <FiCpu /> },
        { name: "Component-based UI", icon: <FiLayers /> },
      ],
    },
    {
      title: "Backend Development",
      icon: <FiServer />,
      color: "green",
      skills: [
        { name: "Node.js", icon: <FiServer /> },
        { name: "Express.js", icon: <FiTrendingUp /> },
        { name: "REST API Development", icon: <FiGitBranch /> },
        { name: "CRUD Operations", icon: <FiDatabase /> },
        { name: "Middleware & Routing", icon: <FiTrendingUp /> },
        { name: "Authentication & Authorization", icon: <FiUserCheck /> },
      ],
    },
    {
      title: "Database & Data Handling",
      icon: <FiDatabase />,
      color: "purple",
      skills: [
        { name: "MongoDB (Atlas)", icon: <FiDatabase /> },
        { name: "Mongoose ODM", icon: <FiDatabase /> },
        { name: "MySQL (Basics)", icon: <FiDatabase /> },
        { name: "Schema Design", icon: <FiLayers /> },
        { name: "Data Validation", icon: <FiCheck /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <FiCloud />,
      color: "indigo",
      skills: [
        { name: "AWS Basics (EC2, S3, IAM)", icon: <FiCloud /> },
        { name: "Cloud Deployment", icon: <FiTrendingUp /> },
        { name: "Environment Variables", icon: <FiCpu /> },
        { name: "Docker (Basics)", icon: <FiServer /> },
        { name: "GitHub Actions (Basics)", icon: <FiGitBranch /> },
      ],
    },
  ];

  // All skills for filter
  const allSkills = [
    ...skillCategories[0].skills,
    ...skillCategories[1].skills,
    ...skillCategories[2].skills,
    ...skillCategories[3].skills,
  ];

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

  const filteredSkills =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((category) =>
          category.title.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const stats = [
    { value: allSkills.length, label: "Total Skills" },
    { value: "4", label: "Categories" },
    { value: "100%", label: "Learning Rate" },
    { value: "∞", label: "Growth Mindset" },
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
              <FiCode className="text-3xl text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Technical Skills
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Full stack development with specialization in cloud, security, and
              modern web technologies
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-colors duration-300 z-50"
            aria-label="Toggle skills menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {/* Mobile Skills Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden fixed inset-x-0 bottom-0 bg-white border-t border-gray-200 transition-transform duration-300 ease-in-out z-40 ${
              isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
            }`}
            style={{ maxHeight: "70vh" }}
          >
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Filter Skills
              </h2>

              {/* Mobile Filter Tags */}
              <div className="flex flex-wrap gap-2">
                {[
                  "All",
                  "Frontend",
                  "Backend",
                  "Database",
                  "Cloud",
                  "Security",
                ].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveCategory(filter);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 h-10 ${
                      activeCategory === filter
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Mobile Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                {stats.slice(0, 3).map((stat, idx) => (
                  <div
                    key={idx}
                    className="text-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="text-lg font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="flex gap-3">
                <a
                  href="/projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 h-12 inline-flex items-center justify-center gap-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors"
                >
                  <FiCode />
                  Projects
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 h-12 inline-flex items-center justify-center gap-2 px-4 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  <FiFileText />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Filter Bar */}
          <div className="hidden lg:flex justify-center gap-4 mb-12">
            {[
              "All",
              "Frontend",
              "Backend",
              "Database",
              "Cloud",
              "Security",
            ].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveCategory(filter)}
                className={`px-5 py-2.5 rounded-xl text-base font-medium transition-colors duration-300 ${
                  activeCategory === filter
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {filteredSkills.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${
                      category.color === "blue"
                        ? "from-blue-50 to-white"
                        : category.color === "green"
                        ? "from-green-50 to-white"
                        : category.color === "purple"
                        ? "from-purple-50 to-white"
                        : "from-indigo-50 to-white"
                    } rounded-xl flex items-center justify-center`}
                  >
                    <div
                      className={`${
                        category.color === "blue"
                          ? "text-blue-600"
                          : category.color === "green"
                          ? "text-green-600"
                          : category.color === "purple"
                          ? "text-purple-600"
                          : "text-indigo-600"
                      } text-xl`}
                    >
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${
                          category.color === "blue"
                            ? "from-blue-50 to-white"
                            : category.color === "green"
                            ? "from-green-50 to-white"
                            : category.color === "purple"
                            ? "from-purple-50 to-white"
                            : "from-indigo-50 to-white"
                        } rounded-lg flex items-center justify-center`}
                      >
                        <div
                          className={`${
                            category.color === "blue"
                              ? "text-blue-600"
                              : category.color === "green"
                              ? "text-green-600"
                              : category.color === "purple"
                              ? "text-purple-600"
                              : "text-indigo-600"
                          }`}
                        >
                          {skill.icon}
                        </div>
                      </div>
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Proficiency</span>
                    <span
                      className={`font-semibold ${
                        category.color === "blue"
                          ? "text-blue-600"
                          : category.color === "green"
                          ? "text-green-600"
                          : category.color === "purple"
                          ? "text-purple-600"
                          : "text-indigo-600"
                      }`}
                    >
                      {category.title.includes("Cloud") ||
                      category.title.includes("Frontend")
                        ? "Advanced"
                        : category.title.includes("Security")
                        ? "Intermediate"
                        : "Proficient"}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        category.color === "blue"
                          ? "bg-gradient-to-r from-blue-400 to-blue-600"
                          : category.color === "green"
                          ? "bg-gradient-to-r from-green-400 to-green-600"
                          : category.color === "purple"
                          ? "bg-gradient-to-r from-purple-400 to-purple-600"
                          : "bg-gradient-to-r from-indigo-400 to-indigo-600"
                      }`}
                      style={{
                        width:
                          category.title.includes("Cloud") ||
                          category.title.includes("Frontend")
                            ? "85%"
                            : category.title.includes("Security")
                            ? "70%"
                            : "80%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl text-center ${
                  idx === 0
                    ? "bg-gradient-to-r from-blue-50 to-indigo-50"
                    : idx === 1
                    ? "bg-gradient-to-r from-green-50 to-emerald-50"
                    : idx === 2
                    ? "bg-gradient-to-r from-purple-50 to-violet-50"
                    : "bg-gradient-to-r from-orange-50 to-red-50"
                }`}
              >
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiInfo className="text-xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Skill Development Journey
                  </h3>
                  <p className="text-gray-700">
                    As a BCA Cloud & Security student, I'm continuously
                    expanding my expertise in full-stack development with a
                    strong emphasis on security best practices and cloud
                    technologies. My learning path focuses on building secure,
                    scalable applications while staying updated with modern
                    development trends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Apply These Skills?
              </h3>
              <p className="text-gray-300 mb-8">
                Let's discuss how these skills can contribute to your next
                project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="h-12 inline-flex items-center justify-center gap-2 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300 shadow-lg"
                >
                  <FiSend />
                  Start a Project
                </a>
                <a
                  href="/projects"
                  className="h-12 inline-flex items-center justify-center gap-2 px-8 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-colors duration-300 border border-white/20"
                >
                  <FiCode />
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
