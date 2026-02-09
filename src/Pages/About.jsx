import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiUser,
  FiCode,
  FiShield,
  FiCloud,
  FiBriefcase,
  FiMapPin,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiFileText,
  FiSend,
  FiBookOpen,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    "MERN Stack",
    "Cloud Security",
    "DevSecOps",
    "REST APIs",
    "AWS",
    "MongoDB",
    "React.js",
    "Node.js",
    "TypeScript",
    "Docker",
  ];

  const expertise = [
    {
      icon: <FiCloud />,
      title: "Cloud & Security",
      description:
        "AWS basics, IAM, OWASP Top 10, DevSecOps concepts with focus on secure cloud infrastructure.",
      color: "blue",
    },
    {
      icon: <FiCode />,
      title: "Full Stack Development",
      description:
        "Building modern web applications with React, Node.js, Express, MongoDB, and scalable RESTful APIs.",
      color: "green",
    },
    {
      icon: <FiShield />,
      title: "Security Engineering",
      description:
        "Implementing authentication, encryption, and following OWASP security best practices.",
      color: "purple",
    },
  ];

  const professionalDetails = [
    {
      icon: <FiBookOpen />,
      label: "Education",
      value: "BCA – Cloud & Security",
    },
    {
      icon: <FiBriefcase />,
      label: "Role",
      value: "Full Stack Developer (MERN)",
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "India • Open to Remote",
    },
    {
      icon: <FiMail />,
      label: "Email",
      value: "ajitk23192@gmail.com",
      href: "mailto:ajitk23192@gmail.com",
      isLink: true,
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      value: "ajitdev01",
      href: "https://github.com/ajitdev01",
      isLink: true,
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: "ajit-kumar",
      href: "https://www.linkedin.com/in/ajitdev01",
      isLink: true,
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl mb-6">
              <FiUser className="text-3xl text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">About Me</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Summary Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="lg:w-2/5 relative overflow-hidden h-64 lg:h-auto min-h-[300px]">
                <img
                  src="/my.jpeg"
                  alt="Ajit Kumar"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 shadow-sm">
                  Full Stack Developer
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/5 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                    <FiUser className="text-blue-600 text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Professional Summary
                  </h2>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    I am a passionate BCA Cloud & Security student specializing
                    in full-stack web development and secure application design.
                    My focus is on building scalable, modern, and secure web
                    applications using cutting-edge technologies.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    With expertise in the MERN stack and cloud technologies, I
                    enjoy solving complex problems and implementing security
                    best practices. I continuously explore DevOps and DevSecOps
                    concepts to build robust and efficient systems.
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                <FiBriefcase className="text-green-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Core Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${
                      item.color === "blue"
                        ? "from-blue-50 to-indigo-50"
                        : item.color === "green"
                          ? "from-green-50 to-emerald-50"
                          : "from-purple-50 to-violet-50"
                    } rounded-lg flex items-center justify-center mb-4`}
                  >
                    <div
                      className={`text-xl ${
                        item.color === "blue"
                          ? "text-blue-600"
                          : item.color === "green"
                            ? "text-green-600"
                            : "text-purple-600"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Details */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl mb-4">
                  <FiGlobe className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl font-bold mb-3">
                  Professional Details
                </h2>
                <p className="text-gray-300">
                  Get in touch or learn more about my professional background
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {professionalDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg"
                  >
                    <div className="text-blue-400 text-xl mt-1">
                      {detail.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">
                        {detail.label}
                      </h3>
                      {detail.isLink ? (
                        <a
                          href={detail.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 block break-all"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="pt-8 border-t border-gray-700">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                  >
                    <FiFileText />
                    Download Resume
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 border border-gray-600"
                  >
                    <FiSend />
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-white rounded-lg flex items-center justify-center">
                  {/* <FiLightbulb className="text-yellow-600 text-xl" /> */}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Development Philosophy
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 text-lg">
                    Clean & Secure Code
                  </h4>
                  <p className="text-gray-700">
                    I believe in writing clean, maintainable code with security
                    as a first-class citizen. Every project is an opportunity to
                    learn and implement best practices.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <FiCheckCircle className="text-green-500" />
                      <span>Security-first approach</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <FiCheckCircle className="text-green-500" />
                      <span>Clean, readable code</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 text-lg">
                    Continuous Learning
                  </h4>
                  <p className="text-gray-700">
                    Constantly exploring new technologies and security
                    frameworks to stay updated with industry trends and emerging
                    threats.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <FiCheckCircle className="text-green-500" />
                      <span>Stay updated with trends</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <FiCheckCircle className="text-green-500" />
                      <span>Adapt to new technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
