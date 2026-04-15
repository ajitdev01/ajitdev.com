import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FiCode, FiMail, FiGithub, FiLinkedin, FiArrowRight,
  FiDatabase, FiServer, FiZap, FiTrendingUp,
  FiBox, FiGitBranch, FiTerminal, FiAward, FiClock, FiUsers,
  FiCpu, FiCloud, FiShield, FiLayers
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaAws, FaDocker, FaLinux, FaPhp } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiTailwindcss, SiExpress, SiPrisma, SiRedis, SiNextdotjs, SiMysql } from "react-icons/si";

// Configuration
const SITE_CONFIG = {
  name: "Ajit Kumar",
  fullName: "Ajit Kumar",
  headline: "Ajit Kumar — Full Stack Developer | Bihar, India",
  description: "Building scalable web systems with LAMP, MERN, and Next.js. Focused on clean architecture, CI/CD pipelines, and production-ready deployments.",
  location: { full: "Katihar, Bihar, India", short: "Bihar, India" },
  roles: { primary: "Full Stack Developer" },
  contact: {
    email: "ajitk23192@gmail.com",
    github: "https://github.com/ajitdev01",
    linkedin: "https://www.linkedin.com/in/ajitdev01",
  },
  education: {
    degree: "BCA in Cloud & Security",
    institution: "Amity University Online",
    training: "Brainzima Innovation Institute",
    trainingUrl: "https://brainzima.com"
  }
};

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const scaleOnHover = {
  whileHover: { scale: 1.05, y: -5 },
  transition: { duration: 0.2 }
};

// Tech Stack Data
const techCategories = [
  {
    name: "LAMP Stack",
    icon: FaLinux,
    items: ["Linux", "Apache", "MySQL", "PHP"],
    gradient: "from-orange-500 to-red-500",
    color: "orange"
  },
  {
    name: "MERN Stack",
    icon: FaReact,
    items: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "from-blue-500 to-cyan-500",
    color: "blue"
  },
  {
    name: "Next.js Ecosystem",
    icon: SiNextdotjs,
    items: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    gradient: "from-gray-700 to-gray-900",
    color: "gray"
  },
  {
    name: "Cloud & CI/CD",
    icon: FaAws,
    items: ["AWS", "Docker", "GitHub Actions", "Vercel"],
    gradient: "from-purple-500 to-indigo-500",
    color: "purple"
  }
];

// Projects Data
const featuredProjects = [
  {
    title: "Cloud Task Manager",
    stack: ["React", "Node.js", "MongoDB", "Docker"],
    description: "Full-stack task management with real-time updates, JWT authentication, and containerized deployment on AWS ECS.",
    impact: "Reduced task completion time by 40%",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "DevOps Dashboard",
    stack: ["Next.js", "TypeScript", "AWS", "Tailwind"],
    description: "Monitoring dashboard for CI/CD pipelines with live metrics, status alerts, and automated reporting via GitHub Actions.",
    impact: "Decreased deployment failures by 65%",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "E-Commerce API",
    stack: ["Express", "MongoDB", "Redis", "Stripe"],
    description: "Scalable payment gateway integration with rate limiting, webhook handlers, and order management for 10k+ concurrent users.",
    impact: "Processed 5k+ transactions in first month",
    gradient: "from-orange-500 to-red-500"
  }
];

// Workflow Steps
const workflowSteps = [
  { icon: FiCode, title: "Clean Code", desc: "Modular, documented, and test-driven" },
  { icon: FiLayers, title: "Scalable Systems", desc: "Designed for growth and reliability" },
  { icon: FiGitBranch, title: "CI/CD Pipelines", desc: "Automated testing and deployment" },
  { icon: FiCloud, title: "Cloud-Ready", desc: "Docker + AWS infrastructure" }
];

// Components
const StatCard = ({ stat, index }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
      <stat.icon className="w-7 h-7 text-white" />
    </div>
    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
  </motion.div>
);

const TechCard = ({ tech }) => {
  const colorMap = {
    orange: "from-orange-500 to-red-500",
    blue: "from-blue-500 to-cyan-500",
    gray: "from-gray-700 to-gray-900",
    purple: "from-purple-500 to-indigo-500"
  };
  
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colorMap[tech.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <tech.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-bold text-gray-900 mb-3 text-lg">{tech.name}</h3>
      <div className="flex flex-wrap gap-2">
        {tech.items.map((item) => (
          <span key={item} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -8 }}
    className="group bg-white rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
  >
    <div className={`w-1 h-12 bg-gradient-to-b ${project.gradient} rounded-full mb-4`} />
    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
    <div className="flex flex-wrap gap-2 mb-3">
      {project.stack.map((tech) => (
        <span key={tech} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
          {tech}
        </span>
      ))}
    </div>
    <p className="text-gray-600 text-sm leading-relaxed mb-3">{project.description}</p>
    <div className="flex items-center gap-2 text-emerald-600 text-xs font-medium">
      <FiTrendingUp className="w-3 h-3" />
      <span>{project.impact}</span>
    </div>
  </motion.div>
);

const WorkflowCard = ({ step, index }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -3 }}
    className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
  >
    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-4 shadow-md">
      <step.icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
    <p className="text-gray-500 text-sm">{step.desc}</p>
  </motion.div>
);

// Main Component
const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>{SITE_CONFIG.headline}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Header />

      <motion.main style={{ opacity }} className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{ y: heroY }}
            className="min-h-[85vh] flex items-center mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.div variants={fadeUp}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
                  </div>
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Building Scalable
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Web Systems
                  </span>
                </motion.h1>

                <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  I design and develop modern applications with efficient architecture, 
                  performance-focused workflows, and reliable deployment pipelines.
                  <span className="block mt-2 text-gray-500 text-base">
                    Based in <span className="font-medium text-gray-700">{SITE_CONFIG.location.short}</span>
                  </span>
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                  <Link
                    to="/projects"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <FiCode className="w-5 h-5" />
                    View Projects
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-gray-200 rounded-xl font-semibold hover:border-gray-300 hover:shadow-md transition-all duration-300"
                  >
                    <FiMail className="w-5 h-5" />
                    Get in Touch
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <a href={SITE_CONFIG.contact.github} target="_blank" rel="noopener noreferrer" 
                      className="p-2.5 bg-gray-100 rounded-lg hover:bg-gray-200 hover:scale-110 transition-all duration-300">
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a href={SITE_CONFIG.contact.linkedin} target="_blank" rel="noopener noreferrer"
                      className="p-2.5 bg-blue-50 rounded-lg hover:bg-blue-100 hover:scale-110 transition-all duration-300">
                      <FiLinkedin className="w-5 h-5 text-blue-700" />
                    </a>
                    <a href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="p-2.5 bg-red-50 rounded-lg hover:bg-red-100 hover:scale-110 transition-all duration-300">
                      <FiMail className="w-5 h-5 text-red-600" />
                    </a>
                  </div>
                  <div className="h-6 w-px bg-gray-200" />
                  <div className="flex gap-2">
                    {["LAMP", "MERN", "Next.js"].map((badge) => (
                      <span key={badge} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-mono">
                        {badge}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Abstract Visual */}
              <motion.div variants={fadeUp} className="hidden lg:block relative">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl animate-pulse" />
                  <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: FaPhp, name: "PHP", color: "text-indigo-500" },
                        { icon: SiMysql, name: "MySQL", color: "text-blue-500" },
                        { icon: FaReact, name: "React", color: "text-cyan-500" },
                        { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
                        { icon: SiNextdotjs, name: "Next.js", color: "text-gray-900" },
                        { icon: FaAws, name: "AWS", color: "text-orange-500" },
                      ].map((tech, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
                        >
                          <tech.icon className={`w-6 h-6 ${tech.color}`} />
                          <span className="font-medium text-gray-700 text-sm">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-gray-900 rounded-xl font-mono text-xs">
                      <div className="text-green-400">$ git push origin main</div>
                      <div className="text-gray-400">✓ Linting passed (2.1s)</div>
                      <div className="text-gray-400">✓ Tests passed (4.3s)</div>
                      <div className="text-blue-400">→ Deployed to production</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* About Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-24"
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.div variants={fadeUp} className="inline-block mb-4">
                <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">About</div>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-6">
                Focused on real-world solutions
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
                Focused on creating real-world solutions using LAMP, MERN, and Next.js ecosystems. 
                Continuously improving through hands-on development, system design, and integrating 
                CI/CD practices into production-ready environments.
              </motion.p>
            </div>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <motion.div variants={fadeUp} className="inline-block mb-4">
                <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Tech Stack</div>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-3">Modern Development Arsenal</motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 text-lg">End-to-end technologies I rely on daily</motion.p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techCategories.map((tech, i) => <TechCard key={i} tech={tech} />)}
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <motion.div variants={fadeUp} className="inline-block mb-4">
                <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Portfolio</div>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-3">Featured Projects</motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 text-lg">Real impact, production deployments</motion.p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project, i) => <ProjectCard key={i} project={project} index={i} />)}
            </div>
            <div className="text-center mt-10">
              <Link to="/projects" className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:gap-3 transition-all duration-300 group">
                View all projects <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.section>

          {/* Education & Learning */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-24"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-5">
                  <FiAward className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-800 font-medium">{SITE_CONFIG.education.degree}</p>
                <p className="text-gray-500 text-sm mb-3">{SITE_CONFIG.education.institution}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Specialized in cloud infrastructure and security fundamentals.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-5">
                  <FiTrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Practical Training</h3>
                <p className="text-gray-800 font-medium">
                  <a href={SITE_CONFIG.education.trainingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    Brainzima Innovation Institute
                  </a>
                </p>
                <p className="text-gray-500 text-sm mb-3">brainzima.com</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hands-on development training focusing on real-world projects and industry workflows.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Workflow Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <motion.div variants={fadeUp} className="inline-block mb-4">
                <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Approach</div>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-3">Development Philosophy</motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 text-lg">Clean, scalable, and automated</motion.p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, i) => <WorkflowCard key={i} step={step} />)}
            </div>
          </motion.section>
        </div>
      </motion.main>

      <Footer />
    </>
  );
};

export default Home;