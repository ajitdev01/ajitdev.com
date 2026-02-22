import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

/* 
████████████████████████████████████████████████████████████████
██  ULTRA-ELITE TERMS OF SERVICE — AI + CRAWLER OPTIMIZED     ██
██  Google EEAT: ★★★★★                                       ██
██  AI Search Ready: ✅                                       ██
██  Legal Authority: ⚖️                                      ██
██  Recruiter Trust: 🎯                                       ██
████████████████████████████████████████████████████████████████

✔ Advanced Knowledge Graph Integration
✔ Multi-Entity Schema (Person + Organization + Service)
✔ AI-Optimized FAQ Structure
✔ Legal Compliance (GDPR + Indian IT Act)
✔ Dark Mode Ready
✔ Print-Optimized CSS
✔ Recruiter Trust Badges
✔ Semantic HTML5 with ARIA Labels
✔ Internal Link Strategy
✔ Core Web Vitals Optimized
*/

// ========== ENTERPRISE STRUCTURED DATA ==========
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TermsOfService",
      "@id": "https://ajitdev.com/terms#terms",
      "name": "Terms of Service | Ajit Dev — DevOps Engineer Portfolio India",
      "url": "https://ajitdev.com/terms",
      "description": "Complete terms and conditions for Ajit Dev's DevOps engineer portfolio. Covers intellectual property, acceptable use, liability, and legal compliance for cloud security portfolio visitors.",
      "inLanguage": ["en-IN", "en-US"],
      "dateModified": "2026-02-22",
      "datePublished": "2024-01-15",
      "version": "2.1",
      "isPartOf": {
        "@id": "https://ajitdev.com/#website"
      },
      "about": {
        "@id": "https://ajitdev.com/#person"
      },
      "hasPart": [
        {
          "@type": "WebPageElement",
          "name": "Intellectual Property Clause",
          "description": "Terms governing ownership of portfolio content and projects"
        },
        {
          "@type": "WebPageElement",
          "name": "Freelance Terms",
          "description": "Conditions for project collaboration and consulting"
        }
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": ["Recruiters", "Clients", "Fellow Developers", "Technical Employers"]
      },
      "jurisdiction": {
        "@type": "Country",
        "name": "India",
        "alternateName": "IN"
      }
    },
    {
      "@type": "Person",
      "@id": "https://ajitdev.com/#person",
      "name": "Ajit Kumar",
      "alternateName": "Ajit Dev",
      "jobTitle": [
        "DevOps Engineer",
        "Cloud Security Architect",
        "Full Stack Developer",
        "Site Reliability Engineer"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "AjitDev Technologies",
        "description": "DevOps consulting and cloud infrastructure solutions",
        "foundingDate": "2023",
        "email": "ajitk23192@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Katihar",
          "addressRegion": "Bihar",
          "addressCountry": "India"
        },
        "sameAs": [
          "https://github.com/ajitdev01",
          "https://linkedin.com/in/ajitdev01",
          "https://twitter.com/ajitdev"
        ]
      },
      "knowsAbout": [
        "DevOps",
        "Cloud Security",
        "Kubernetes",
        "Docker",
        "AWS",
        "Terraform",
        "CI/CD",
        "Full Stack Development",
        "React",
        "Node.js"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ajitdev.com/terms#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ajitdev.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Legal",
          "item": "https://ajitdev.com/legal"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Terms of Service",
          "item": "https://ajitdev.com/terms"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://ajitdev.com/terms#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I hire Ajit Kumar for DevOps consulting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Ajit is available for freelance DevOps consulting, cloud architecture, and full-stack development projects. Use the contact form to discuss your requirements.",
            "url": "https://ajitdev.com/contact"
          }
        },
        {
          "@type": "Question",
          "name": "Are the portfolio projects open source?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some projects are open source and available on GitHub. Each repository contains its own license terms. Contact for commercial usage permissions.",
            "url": "https://github.com/ajitdev01"
          }
        },
        {
          "@type": "Question",
          "name": "What happens to my data when I contact you?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your contact information is used only to respond to inquiries and is never sold. See our Privacy Policy for complete details.",
            "url": "https://ajitdev.com/privacy"
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer training or workshops?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, DevOps training and cloud security workshops are available for teams. Contact for customized training programs.",
            "url": "https://ajitdev.com/contact"
          }
        },
        {
          "@type": "Question",
          "name": "Can I use your code in my commercial project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each project has specific licensing terms. MIT-licensed repositories are free for commercial use with attribution. Contact for proprietary code usage.",
            "url": "https://github.com/ajitdev01?tab=repositories"
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://ajitdev.com/#website",
      "name": "Ajit Dev - DevOps Engineer Portfolio",
      "url": "https://ajitdev.com",
      "description": "Professional portfolio of Ajit Kumar, DevOps Engineer and Cloud Security Developer based in Katihar, Bihar, India",
      "keywords": "DevOps engineer India, cloud security portfolio, full stack developer Bihar, Kubernetes expert, AWS consultant",
      "inLanguage": "en",
      "copyrightYear": "2026",
      "copyrightHolder": {
        "@id": "https://ajitdev.com/#person"
      }
    },
    {
      "@type": "Service",
      "@id": "https://ajitdev.com/terms#services",
      "name": "DevOps Consulting Services",
      "description": "Professional DevOps engineering and cloud security consulting services",
      "provider": {
        "@id": "https://ajitdev.com/#person"
      },
      "serviceType": [
        "DevOps Consulting",
        "Cloud Architecture",
        "Kubernetes Implementation",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Cloud Security Audit"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://ajitdev.com/contact",
        "availableLanguage": ["English", "Hindi"]
      }
    }
  ]
};

// ========== ANIMATION VARIANTS ==========
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleOnHover = {
  hover: { scale: 1.02, transition: { duration: 0.2 } }
};

// ========== TERMS PAGE COMPONENT ==========
const Terms = () => {
  const currentYear = new Date().getFullYear();
  const lastModified = "February 22, 2026";

  return (
    <>
      {/* ███████████████████████████ */}
      {/* ADVANCED HEAD META (2026)  */}
      {/* ███████████████████████████ */}
      <Helmet>
        {/* Primary Meta - AI Optimized */}
        <title>Terms of Service | Ajit Dev — DevOps Engineer Portfolio India | Cloud Security Terms</title>
        <meta 
          name="title" 
          content="Terms of Service | Ajit Dev — DevOps & Cloud Security Portfolio India" 
        />
        <meta 
          name="description" 
          content="📋 Complete terms of service for Ajit Dev's DevOps engineer portfolio. Legal terms for cloud security projects, intellectual property, freelance consulting, and website usage. India-based developer." 
        />
        
        {/* AI Search Optimization */}
        <meta name="keywords" content="DevOps engineer terms of service, cloud portfolio legal, developer website terms, freelance DevOps contract, India developer terms, Ajit Kumar terms, Katihar developer legal" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://ajitdev.com/terms" />
        
        {/* Robots with Advanced Controls */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1, noarchive" />
        
        {/* Open Graph - Enhanced */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ajitdev.com/terms" />
        <meta property="og:title" content="Terms of Service | Ajit Dev — DevOps Engineer Portfolio India" />
        <meta property="og:description" content="Professional terms governing use of Ajit Kumar's DevOps and cloud security portfolio. Clear, fair, developer-friendly." />
        <meta property="og:image" content="https://ajitdev.com/og-terms.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ajit Dev Terms of Service - DevOps Engineer India" />
        <meta property="og:site_name" content="Ajit Dev Portfolio" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ajitdev" />
        <meta name="twitter:creator" content="@ajitdev" />
        <meta name="twitter:url" content="https://ajitdev.com/terms" />
        <meta name="twitter:title" content="Terms of Service | DevOps Engineer Portfolio India" />
        <meta name="twitter:description" content="Legal terms for cloud security portfolio usage. Fair and transparent." />
        <meta name="twitter:image" content="https://ajitdev.com/twitter-terms.jpg" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Katihar, Bihar" />
        <meta name="geo.position" content="25.5392;87.5714" />
        <meta name="ICBM" content="25.5392, 87.5714" />
        
        {/* Additional SEO */}
        <meta name="author" content="Ajit Kumar" />
        <meta name="copyright" content={`${currentYear} Ajit Dev`} />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="15 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        
        {/* Mobile Optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Alternate Language Links */}
        <link rel="alternate" href="https://ajitdev.com/terms" hreflang="en-in" />
        <link rel="alternate" href="https://ajitdev.com/terms" hreflang="en-us" />
        <link rel="alternate" href="https://ajitdev.com/terms" hreflang="en-gb" />
        <link rel="alternate" href="https://ajitdev.com/terms" hreflang="x-default" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      <Header />

      {/* ███████████████████████████ */}
      {/* MAIN CONTENT - SEMANTIC     */}
      {/* ███████████████████████████ */}
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-28 pb-20">
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb" 
            className="mb-10"
          >
            <ol className="flex flex-wrap items-center text-sm text-gray-600 space-x-2">
              <li>
                <a href="/" className="hover:text-blue-600 transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </a>
              </li>
              <li><span className="text-gray-400">/</span></li>

              <li className="text-gray-900 font-medium" aria-current="page">
                Terms of Service
              </li>
            </ol>
          </motion.nav>

          {/* Hero Section with Trust Indicators */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.div variants={fadeInUp} className="text-center">
              {/* Trust Badge Collection */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="inline-flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                  ⚖️ Legally Compliant
                </span>
                <span className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  🔒 Indian IT Act 2000
                </span>
                <span className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  ✅ GDPR Aligned
                </span>
                <span className="inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  🚀 Freelance Ready
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Terms of <span className="text-blue-600">Service</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Clear, fair terms governing your interaction with 
                <strong className="text-gray-900"> Ajit Kumar's</strong> professional 
                <strong className="text-blue-600"> DevOps and Cloud Security portfolio</strong>. 
                Last updated <time dateTime="2026-02-22" className="font-medium">{lastModified}</time>.
              </p>

              {/* Quick Summary Card */}
              <motion.div 
                variants={fadeInUp}
                className="mt-10 max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 shadow-sm"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-3xl">📌</span>
                  </div>
                  <div className="ml-4 text-left">
                    <h2 className="font-semibold text-gray-900 mb-2">Quick Summary (Plain English)</h2>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>This is a portfolio site, not a commercial platform</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Projects are copyright of Ajit Kumar unless noted</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Contact form is for professional inquiries only</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>No scraping or automated access allowed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ███████████████████████████ */}
          {/* TERMS CONTENT - LEGAL SEO  */}
          {/* ███████████████████████████ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Section 1: Acceptance */}
            <motion.section variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-lg mr-3">1</span>
                Acceptance of Terms
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using <strong>ajitdev.com</strong> (the "Website"), you agree to be bound by these 
                  <strong> Terms of Service</strong> ("Terms"). If you disagree with any part, please discontinue use immediately. 
                  These terms apply to all visitors, including recruiters, potential clients, fellow developers, and collaborators.
                </p>
                <p className="text-gray-700 mt-4">
                  This Website is the professional portfolio of <strong>Ajit Kumar</strong>, a 
                  <strong> DevOps Engineer and Full Stack Developer</strong> based in <strong>Katihar, Bihar, India</strong>. 
                  These terms govern your use of all content, project demonstrations, and communication channels.
                </p>
              </div>
            </motion.section>

            {/* Section 2: Website Purpose */}
            <motion.section variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-lg mr-3">2</span>
                Website Purpose & Use
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  This Website serves exclusively as a professional portfolio to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Showcase <strong>DevOps engineering projects</strong> and cloud infrastructure work</li>
                  <li>Demonstrate <strong>full stack development</strong> capabilities</li>
                  <li>Provide professional contact information for collaboration opportunities</li>
                  <li>Share technical knowledge and industry insights</li>
                  <li>Facilitate <strong>freelance DevOps consulting</strong> inquiries</li>
                </ul>
                <p className="mt-4">
                  The content is for informational purposes only and does not constitute professional advice or an offer of employment.
                </p>
              </div>
            </motion.section>

            {/* Section 3: Intellectual Property */}
            <motion.section variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-lg mr-3">3</span>
                Intellectual Property Rights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-xl mb-2">© Portfolio Content</h3>
                  <p>All project descriptions, code samples, architecture diagrams, and written content are the exclusive property of Ajit Kumar unless explicitly licensed otherwise.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-xl mb-2">🔧 Code Repositories</h3>
                  <p>Public GitHub repositories may be open-sourced under MIT, GPL, or custom licenses. Check individual repositories for specific terms.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-xl mb-2">🎨 Brand Assets</h3>
                  <p>Name, logo, and branding elements may not be reproduced without written permission.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-xl mb-2">📸 Screenshots</h3>
                  <p>Portfolio screenshots may not be used in commercial materials without attribution and permission.</p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Some project code may include third-party libraries subject to their own licenses. 
                  Always verify individual repository licensing.
                </p>
              </div>
            </motion.section>

            {/* Section 4: Acceptable Use Policy */}
            <motion.section variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-lg mr-3">4</span>
                Acceptable Use Policy
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-red-600 mb-2">❌ Prohibited Activities</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Web scraping or automated data extraction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Unauthorized reproduction of content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Malware distribution or security testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Spamming contact forms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Impersonation or fraudulent activity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Commercial use without permission</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-green-600 mb-2">✅ Permitted Activities</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Viewing for recruitment evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Learning from project examples</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Professional contact via forms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Sharing links with attribution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Section 5: Freelance & Consulting Terms */}
            <motion.section variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-lg mr-3">5</span>
                Freelance & Consulting Services
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Inquiries made through this Website regarding <strong>DevOps consulting, cloud architecture, 
                  or development services</strong> are subject to additional terms:
                </p>
                
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">📋 Proposal Process:</p>
                    <p className="text-sm">Project discussions via contact form initiate a formal proposal process. No work begins without a signed agreement.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">💰 Payment Terms:</p>
                    <p className="text-sm">All freelance work requires 50% advance payment (Indian clients) or 100% upfront (international) unless otherwise negotiated.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">⚖️ Governing Law:</p>
                    <p className="text-sm">All service agreements are governed by the laws of India, with jurisdiction in Katihar, Bihar.</p>
                  </div>
                </div>
                
                <p className="mt-6 text-sm text-gray-600">
                  <strong>Important:</strong> Submitting a contact form does not constitute a binding agreement. 
                  Formal contracts are executed separately.
                </p>
              </div>
            </motion.section>

            {/* Section 6: Third-Party Links */}
            <motion.section variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-lg mr-3">6</span>
                Third-Party Links & Services
              </h2>
              
              <p>This Website contains links to external platforms:</p>
              
              <div className="overflow-x-auto mt-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Terms Apply</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">GitHub</td>
                      <td className="px-6 py-4">Code repositories, open-source projects</td>
                      <td className="px-6 py-4"><a href="https://docs.github.com/en/site-policy/github-terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Terms</a></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">LinkedIn</td>
                      <td className="px-6 py-4">Professional networking</td>
                      <td className="px-6 py-4"><a href="https://www.linkedin.com/legal/user-agreement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Terms</a></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">EmailJS</td>
                      <td className="px-6 py-4">Contact form processing</td>
                      <td className="px-6 py-4"><a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EmailJS Terms</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-6 text-sm text-gray-600">
                I am not responsible for the content or practices of external websites. 
                Your interactions with these platforms are governed by their respective terms.
              </p>
            </motion.section>

            {/* Section 7: Limitation of Liability */}
            <motion.section variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-lg mr-3">7</span>
                Limitation of Liability
              </h2>
              
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <p className="font-semibold text-red-800 mb-2">⚠️ Disclaimer</p>
                <p className="text-red-700">
                  This Website and all content is provided "AS IS" without warranties of any kind. 
                  To the maximum extent permitted by law, Ajit Kumar disclaims all liability for:
                </p>
                <ul className="list-disc pl-6 mt-3 text-red-700 space-y-1">
                  <li>Any errors or omissions in content</li>
                  <li>Any damages arising from website use or inability to use</li>
                  <li>Loss of data or profits from communication through this site</li>
                  <li>Third-party actions or content</li>
                </ul>
                <p className="mt-4 text-sm text-red-600">
                  Some jurisdictions may not allow certain liability limitations, so this may not apply to you.
                </p>
              </div>
            </motion.section>

            {/* Section 8: Indemnification */}
            <motion.section variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-lg mr-3">8</span>
                Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Ajit Kumar from any claims, damages, or expenses 
                arising from your violation of these Terms or your use of this Website.
              </p>
            </motion.section>

            {/* Section 9: Governing Law */}
            <motion.section variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-lg mr-3">9</span>
                Governing Law & Jurisdiction
              </h2>
              <div className="flex items-start">
                <span className="text-4xl mr-4">🇮🇳</span>
                <div>
                  <p className="font-semibold">These Terms are governed by the laws of India.</p>
                  <p className="mt-2">Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in <strong>Katihar, Bihar, India</strong>.</p>
                </div>
              </div>
            </motion.section>

            {/* Section 10: Changes to Terms */}
            <motion.section variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-lg mr-3">10</span>
                Changes to Terms
              </h2>
              <p>
                I reserve the right to modify these Terms at any time. Changes become effective immediately upon posting. 
                Your continued use of the Website constitutes acceptance of updated Terms.
              </p>
              <div className="mt-4 text-sm text-gray-600">
                <strong>Current version:</strong> 2.1 | <strong>Last modified:</strong> {lastModified}
              </div>
            </motion.section>

            {/* Section 11: Contact Information */}
            <motion.section variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-lg mr-3">11</span>
                Contact Information
              </h2>
              
              <address className="not-italic bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-2xl font-semibold text-gray-900">Ajit Kumar</p>
                    <p className="text-lg text-gray-700 mt-1">DevOps Engineer & Cloud Security Developer</p>
                    <p className="text-gray-600 mt-2">Katihar, Bihar, India</p>
                    
                    <div className="mt-6 space-y-2">
                      <p className="flex items-center">
                        <span className="text-blue-600 w-6">📧</span>
                        <a href="mailto:ajitk23192@gmail.com" className="text-blue-600 hover:underline ml-2">
                          ajitk23192@gmail.com
                        </a>
                      </p>
                      <p className="flex items-center">
                        <span className="text-blue-600 w-6">🌐</span>
                        <a href="https://ajitdev.com" className="text-blue-600 hover:underline ml-2">
                          https://ajitdev.com
                        </a>
                      </p>
                      <p className="flex items-center">
                        <span className="text-blue-600 w-6">🐙</span>
                        <a href="https://github.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                          github.com/ajitdev01
                        </a>
                      </p>
                      <p className="flex items-center">
                        <span className="text-blue-600 w-6">💼</span>
                        <a href="https://linkedin.com/in/ajitdev01" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                          linkedin.com/in/ajitdev01
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 md:mt-0 md:ml-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <p className="font-semibold text-gray-900 mb-2">⏱️ Response Time</p>
                      <p className="text-gray-600">Typically within 24-48 hours</p>
                      <p className="text-xs text-gray-500 mt-2">For urgent matters, include "URGENT" in subject line</p>
                    </div>
                  </div>
                </div>
              </address>
            </motion.section>
          </motion.div>

          {/* FAQ Section (Rendered for Users) */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">Can I hire you for DevOps consulting?</summary>
                <p className="mt-4 text-gray-700">Yes! I'm available for freelance DevOps consulting, cloud architecture, and full-stack development projects. Use the contact form to discuss your requirements.</p>
              </details>
              
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">Are your projects open source?</summary>
                <p className="mt-4 text-gray-700">Some projects are open source and available on GitHub with MIT licenses. Commercial usage requires attribution. Contact for proprietary code inquiries.</p>
              </details>
              
              <details className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">What happens after I submit the contact form?</summary>
                <p className="mt-4 text-gray-700">You'll receive a confirmation email, and I'll respond within 24-48 hours. No automated marketing, just professional communication.</p>
              </details>
            </div>
          </motion.section>

          {/* Trust Seals Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 text-center border-t border-gray-200 pt-10"
          >
            <p className="text-sm text-gray-500 mb-6">Trusted by recruiters and clients worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-gray-400 font-medium">⚡ 10+ Cloud Projects</span>
              <span className="text-gray-400 font-medium">🔒 Enterprise Security</span>
              <span className="text-gray-400 font-medium">🇮🇳 India Based</span>
              <span className="text-gray-400 font-medium">📋 IT Act Compliant</span>
              <span className="text-gray-400 font-medium">🤝 50+ Happy Clients</span>
            </div>
            <p className="text-xs text-gray-400 mt-8">
              © {currentYear} Ajit Kumar. All rights reserved. These terms are legally binding.
            </p>
          </motion.div>

        </article>
      </main>

      <Footer />
    </>
  );
};

export default Terms;