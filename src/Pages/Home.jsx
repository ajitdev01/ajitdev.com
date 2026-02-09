import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiCode,
  FiMail,
  FiMapPin,
  FiBook,
  FiGithub,
  FiLinkedin,
  FiFileText,
  FiShield,
  FiCloud,
  FiLayers,
  FiAward,
  FiCpu,
  FiChevronRight,
  FiArrowRight,
  FiGlobe,
  FiDatabase,
  FiServer,
  FiUsers,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: "26+", label: "Projects", color: "from-blue-500 to-blue-600" },
    {
      value: "10+",
      label: "Technologies",
      color: "from-purple-500 to-purple-600",
    },
    {
      value: "100%",
      label: "Quality Focus",
      color: "from-pink-500 to-pink-600",
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      label: "GitHub",
      url: "https://github.com/ajitdev01",
      bg: "bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300",
      iconColor: "text-gray-700 hover:text-gray-900",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ajitdev01/",
      bg: "bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300",
      iconColor: "text-blue-600 hover:text-blue-800",
    },
    {
      icon: <FiMail />,
      label: "Email",
      url: "mailto:ajitk23192@gmail.com",
      bg: "bg-gradient-to-br from-red-100 to-red-200 hover:from-red-200 hover:to-red-300",
      iconColor: "text-red-600 hover:text-red-800",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      url: "https://wa.me/916205526784",
      bg: "bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300",
      iconColor: "text-green-600 hover:text-green-800",
    },
  ];

  const expertise = [
    {
      icon: <FiShield />,
      title: "Security First",
      description: "OWASP, DevSecOps, Secure Architecture",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiCloud />,
      title: "Cloud Native",
      description: "AWS, Scalable Infrastructure, DevOps",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: <FiLayers />,
      title: "Full Stack",
      description: "MERN, TypeScript, Modern Frameworks",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const quickNav = [
    {
      label: "About",
      path: "/about",
      icon: <FiUsers />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      label: "Projects",
      path: "/projects",
      icon: <FiLayers />,
      gradient: "from-violet-500 to-purple-500",
    },
    {
      label: "Education",
      path: "/education",
      icon: <FiBook />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      label: "Contact",
      path: "/contact",
      icon: <FiMail />,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const techStack = [
    { label: "React", bg: "bg-gradient-to-br from-cyan-500 to-blue-600" },
    { label: "Node.js", bg: "bg-gradient-to-br from-green-500 to-emerald-600" },
    { label: "MongoDB", bg: "bg-gradient-to-br from-green-400 to-green-600" },
    { label: "Express", bg: "bg-gradient-to-br from-gray-400 to-gray-600" },
    { label: "TypeScript", bg: "bg-gradient-to-br from-blue-600 to-blue-800" },
    { label: "Tailwind", bg: "bg-gradient-to-br from-blue-400 to-cyan-500" },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-white to-gray-50 transition-all duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Header />

      <main className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            {/* Left Column - Hero Content */}
            <div className="space-y-8">
              {/* Professional Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></span>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-sm tracking-wide">
                    OPEN FOR OPPORTUNITIES
                  </span>
                </div>
                <span className="w-8 h-px bg-gradient-to-r from-blue-500 to-indigo-500"></span>
                <span className="text-xs text-gray-500 font-medium">
                  Remote
                </span>
              </div>

              {/* Name & Title */}
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-bold">
                  <span className="block text-gray-900">AJIT</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600">
                    KUMAR
                  </span>
                </h1>

                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    DevOps Engineer
                  </h2>
                  <div className="absolute -bottom-3 left-0 w-64 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/30"></div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Specializing in secure, scalable web applications with modern
                  cloud-native architecture and DevOps practices
                </p>

                {/* Location & Education */}
                <div className="flex flex-wrap items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-3 px-4 py-2.5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <FiBook className="text-xl text-blue-500" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        BCA Cloud & Security
                      </p>
                      <p className="text-sm text-gray-500">
                        Galgotias University
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2.5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <FiMapPin className="text-xl text-green-500" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Based in India
                      </p>
                      <p className="text-sm text-gray-500">
                        Available Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a
                  href="/projects"
                  className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                >
                  {/* Button */}
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-8 py-4 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 active:scale-95">
                    <div className="flex items-center gap-3">
                      <FiCode className="text-xl group-hover:scale-110 transition-transform duration-300" />
                      <span>View My Work</span>
                      <FiArrowRight className="text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </a>

                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-xl font-bold text-lg shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <div className="flex items-center gap-3">
                    <FiMail className="text-xl" />
                    <span>Get In Touch</span>
                    <FiChevronRight className="text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </a>
              </div>

              {/* Stats */}
              <div className="pt-8">
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="relative group text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Gradient Border on Hover */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur"></div>

                      <div className="relative">
                        <div
                          className={`text-4xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-sm font-medium text-gray-600 mt-2">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div
                        className={`w-16 h-16 ${social.bg} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <div
                          className={`text-2xl ${social.iconColor} transition-colors duration-300`}
                        >
                          {social.icon}
                        </div>
                      </div>
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Professional Visual */}
            <div className="relative">
              {/* Main Card with Glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>

                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                  {/* Card Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="px-4 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg border border-blue-400/30">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white font-bold text-sm tracking-wider">
                            AVAILABLE FOR WORK
                          </span>
                        </div>
                      </div>
                      <div className="text-white/60">
                        <FiCpu className="text-2xl" />
                      </div>
                    </div>

                    {/* Center Content */}
                    <div className="text-center mb-8">
                      <div className="inline-flex p-5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
                        <FiServer className="text-5xl text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        MERN Stack Specialist
                      </h3>
                      <p className="text-white/80 text-lg leading-relaxed max-w-md mx-auto">
                        Building enterprise-grade applications with emphasis on
                        security, scalability, and modern DevOps practices
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="grid grid-cols-3 gap-4">
                      {techStack.map((tech, index) => (
                        <div
                          key={index}
                          className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
                        >
                          <div className="text-white font-bold text-lg mb-2">
                            {tech.label}
                          </div>
                          <div
                            className={`w-full h-1 ${tech.bg} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Experience Card */}
                <div className="absolute -bottom-6 -right-6 z-10">
                  <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 w-56 hover:shadow-3xl transition-shadow duration-300 hover:-translate-y-1">
                    <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FiAward className="text-white text-xl" />
                    </div>
                    <div className="pt-4">
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        1+ Years
                      </div>
                      <div className="text-sm text-gray-600 font-medium mb-2">
                        Professional Experience
                      </div>
                      <div className="text-xs text-gray-500 leading-tight">
                        Building production-ready applications with modern tech
                        stack
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expertise Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {expertise.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-xl group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300"></div>

                    <div className="relative">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white text-2xl">{item.icon}</div>
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mt-32">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Explore More
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover my journey, projects, education, and ways to connect
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {quickNav.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="group relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>

                  {/* Card */}
                  <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                    <div className="flex flex-col items-center text-center">
                      {/* Icon */}
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white text-3xl">{item.icon}</div>
                      </div>

                      {/* Content */}
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {item.label}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {item.label === "About" &&
                          "Learn about my journey and skills"}
                        {item.label === "Projects" &&
                          "Explore my portfolio and work"}
                        {item.label === "Education" &&
                          "See my academic background"}
                        {item.label === "Contact" && "Get in touch with me"}
                      </p>

                      {/* Arrow */}
                      <div className="mt-auto">
                        <FiChevronRight
                          className={`text-2xl ${item.gradient.replace("from-", "text-").replace(" to-", "-")} opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
