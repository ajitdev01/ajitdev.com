import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ajit Dev — Full Stack Developer, DevOps Engineer & Cloud Security | Katihar, India",
  description:
    "Ajit Dev (ajitdev01) is a Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar, India. Expert in Next.js, React, MERN Stack, AWS, Docker, Kubernetes, Terraform, Linux & System Design.",
  authors: [{ name: "Ajit Dev", url: "https://ajitdev.com" }],
  creator: "Ajit Dev",
  metadataBase: new URL("https://ajitdev.com"),
  keywords: ["Ajit Dev", "Ajit Kumar", "AjitDev01", "Full Stack Developer", "DevOps Engineer", "Cloud Security", "MERN Stack", "Next.js", "React", "Katihar", "Bihar", "India"],
  alternates: {
    canonical: "https://ajitdev.com/",
    languages: {
      "en-IN": "https://ajitdev.com/",
      "en": "https://ajitdev.com/",
      "x-default": "https://ajitdev.com/",
    },
  },
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Katihar, Bihar, India",
    "geo.position": "25.5671;87.5757",
    "ICBM": "25.5671, 87.5757",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    url: "https://ajitdev.com/",
    siteName: "Ajit Dev Portfolio",
    title: "Ajit Dev — Full Stack Developer, DevOps Engineer & Cloud Security",
    description:
      "Full Stack Developer, DevOps Engineer & Cloud Security portfolio by Ajit Dev (ajitdev01). Next.js, React, MERN Stack, AWS, Docker, Kubernetes projects from Katihar, Bihar, India.",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajit Dev — Full Stack Developer & DevOps Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ajitdev01",
    creator: "@ajitdev01",
    title: "Ajit Dev — Full Stack Developer, DevOps Engineer & Cloud Security",
    description:
      "Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast. Next.js, React, MERN Stack, AWS, Docker, Kubernetes from Katihar, Bihar, India.",
    images: ["https://ajitdev.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Sitemap discovery */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Identity Rel links */}
        <link rel="me" href="https://github.com/ajitdev01" />
        <link rel="me" href="https://linkedin.com/in/ajitdev01" />
        <link rel="me" href="https://twitter.com/ajitdev01" />
        <link rel="me" href="https://facebook.com/ajitdev01" />
        <link rel="me" href="https://t.me/ajitdev01" />
        <link rel="me" href="https://youtube.com/@ajitdev01" />
        <link rel="me" href="https://hashnode.com/@ajitdev01" />
        <link rel="me" href="https://codeforces.com/profile/ajitdev01" />
        <link rel="me" href="https://www.brainzima.com/" />

        {/* DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />

        {/* Favicon indicators pointing to existing logo.png */}
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msvalidate.01" content="4DD1B20C522DBBD68F26BA01EF86C2FD" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6K777G8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Microsoft Clarity Script */}
        <Script id="clarity-script" strategy="lazyOnload">
          {`
            (function (c, l, a, r, i, t, y) {
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "vncrgbmome");
          `}
        </Script>

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-648KHZ7K6T"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-648KHZ7K6T');
          `}
        </Script>

        {/* Cloudflare Web Analytics */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "3011d7a1a53748ac8d82869375ddcf22"}'
          strategy="lazyOnload"
        />

        {/* Google Knowledge Graph (Unified Closed Entity Graph) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://ajitdev.com/#person",
                  "name": "Ajit Dev",
                  "alternateName": ["Ajit Kumar", "AjitDev01", "ajitdev01"],
                  "url": "https://ajitdev.com",
                  "mainEntityOfPage": {
                    "@id": "https://ajitdev.com/#profilepage"
                  },
                  "image": {
                    "@type": "ImageObject",
                    "@id": "https://ajitdev.com/#personimage",
                    "url": "https://ajitdev.com/logo.png",
                    "width": 400,
                    "height": 400,
                    "caption": "Ajit Dev — DevOps, DevSecOps & Cloud Security Developer"
                  },
                  "jobTitle": [
                    "Full Stack Developer",
                    "DevOps Engineer",
                    "Cloud Security Enthusiast",
                    "DevSecOps Engineer"
                  ],
                  "description": "Ajit Dev (ajitdev01) — Full Stack Developer, DevOps Engineer, Cloud Security and Cybersecurity Enthusiast from Katihar, Bihar, India. Student at Amity University Online and learner at Brainzima Innovation Institute. Specializes in Next.js, React, MERN Stack, cloud computing, CI/CD automation, security engineering, Linux, Docker, AWS, Kubernetes, Terraform.",
                  "gender": "Male",
                  "nationality": "Indian",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Katihar",
                    "addressRegion": "Bihar",
                    "addressCountry": "IN",
                    "postalCode": "854105"
                  },
                  "alumniOf": [
                    {
                      "@type": "CollegeOrUniversity",
                      "@id": "https://amityonline.com/#org",
                      "name": "Amity University Online",
                      "url": "https://amityonline.com"
                    },
                    {
                      "@type": "EducationalOrganization",
                      "@id": "https://www.brainzima.com/#org",
                      "name": "Brainzima Innovation Institute",
                      "url": "https://www.brainzima.com/"
                    }
                  ],
                  "memberOf": [
                    {
                      "@type": "EducationalOrganization",
                      "@id": "https://amityonline.com/#org"
                    },
                    {
                      "@type": "EducationalOrganization",
                      "@id": "https://www.brainzima.com/#org"
                    }
                  ],
                  "hasOccupation": {
                    "@type": "Occupation",
                    "name": "DevOps & Cloud Security Developer",
                    "occupationLocation": {
                      "@type": "Country",
                      "name": "India"
                    },
                    "estimatedSalary": {
                      "@type": "MonetaryAmountDistribution",
                      "currency": "INR",
                      "percentile10": 300000,
                      "percentile90": 2000000
                    },
                    "skills": "DevOps, DevSecOps, Cloud Security, Cybersecurity, Linux, Docker, Cloud Computing, Security Automation, CI/CD Pipelines, Infrastructure as Code, MERN Stack, LAMP Stack, GitHub Actions, Terraform, Ansible, Kubernetes"
                  },
                  "knowsAbout": [
                    "DevOps Engineering",
                    "DevSecOps",
                    "Cloud Security",
                    "Cybersecurity",
                    "Cloud Computing",
                    "Linux System Administration",
                    "Docker Containerization",
                    "Security Automation",
                    "CI/CD Pipelines",
                    "Infrastructure as Code",
                    "Network Security",
                    "MERN Stack Development",
                    "LAMP Stack Development",
                    "GitHub Actions",
                    "Terraform",
                    "Ansible",
                    "Kubernetes",
                    "Web Application Security",
                    "Penetration Testing Fundamentals",
                    "SIEM and Log Analysis",
                    "Zero Trust Architecture"
                  ],
                  "knowsLanguage": [
                    { "@type": "Language", "name": "English" },
                    { "@type": "Language", "name": "Hindi" }
                  ],
                  "hasCredential": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "name": "DevOps Engineering Training",
                      "credentialCategory": "certificate",
                      "recognizedBy": {
                        "@type": "EducationalOrganization",
                        "@id": "https://www.brainzima.com/#org"
                      }
                    }
                  ],
                  "subjectOf": {
                    "@id": "https://ajitdev.com/#profilepage"
                  },
                  "sameAs": [
                    "https://ajitdev.com",
                    "https://ajitdev01.netlify.app/",
                    "https://ajitdev-com.vercel.app/",
                    "https://www.brainzima.com/",
                    "https://github.com/ajitdev01",
                    "https://linkedin.com/in/ajitdev01",
                    "https://twitter.com/ajitdev01",
                    "https://facebook.com/ajitdev01",
                    "https://instagram.com/ajitdev01",
                    "https://t.me/ajitdev01",
                    "https://snapchat.com/add/ajitdev01",
                    "https://leetcode.com/ajitdev01",
                    "https://codeforces.com/profile/ajitdev01",
                    "https://youtube.com/@ajitdev01",
                    "https://medium.com/@ajitdev01",
                    "https://hashnode.com/@ajitdev01",
                    "https://dev.to/ajitdev01"
                  ]
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://ajitdev.com/#profilepage",
                  "name": "Ajit Dev — DevOps, DevSecOps & Cloud Security Developer Portfolio",
                  "url": "https://ajitdev.com/",
                  "description": "Official developer portfolio of Ajit Dev, a DevOps, DevSecOps and Cloud Security engineer from Katihar, Bihar, India. Featuring CI/CD, Docker, Linux, MERN Stack and LAMP Stack projects.",
                  "inLanguage": "en-IN",
                  "isPartOf": { "@id": "https://ajitdev.com/#website" },
                  "about": { "@id": "https://ajitdev.com/#person" },
                  "mainEntity": { "@id": "https://ajitdev.com/#person" },
                  "mentions": [
                    { "@type": "Thing", "name": "DevOps" },
                    { "@type": "Thing", "name": "DevSecOps" },
                    { "@type": "Thing", "name": "Cloud Security" },
                    { "@type": "Thing", "name": "Docker" },
                    { "@type": "Thing", "name": "Linux" },
                    { "@type": "Thing", "name": "Cybersecurity" },
                    { "@type": "Thing", "name": "Cloud Computing" },
                    { "@type": "Thing", "name": "MERN Stack" },
                    { "@type": "Thing", "name": "LAMP Stack" },
                    { "@type": "Thing", "name": "CI/CD Pipeline" },
                    { "@type": "Thing", "name": "Infrastructure as Code" },
                    { "@type": "Thing", "name": "Kubernetes" },
                    { "@type": "Thing", "name": "GitHub Actions" }
                  ],
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", "h2", ".hero-description", ".about-summary"]
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://ajitdev.com/?s={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  },
                  "dateCreated": "2026-02-09T10:00:00+05:30",
                  "dateModified": "2026-02-17T12:00:00+05:30",
                  "datePublished": "2026-02-09T10:00:00+05:30",
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://ajitdev.com/og-image.png",
                    "width": 1200,
                    "height": 630
                  },
                  "breadcrumb": { "@id": "https://ajitdev.com/#breadcrumb" },
                  "significantLinks": [
                    "https://github.com/ajitdev01",
                    "https://linkedin.com/in/ajitdev01",
                    "https://ajitdev.com/projects"
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://ajitdev.com/#webpage",
                  "url": "https://ajitdev.com/",
                  "name": "Ajit Dev — DevOps, DevSecOps & Cloud Security Engineer",
                  "headline": "Ajit Dev — DevOps, DevSecOps & Cloud Security Developer from Katihar, India",
                  "description": "Official portfolio and professional homepage of Ajit Dev, a DevOps, DevSecOps, Cloud Security and Cybersecurity developer from Katihar, Bihar, India.",
                  "inLanguage": "en-IN",
                  "isPartOf": { "@id": "https://ajitdev.com/#website" },
                  "about": { "@id": "https://ajitdev.com/#person" },
                  "author": { "@id": "https://ajitdev.com/#person" },
                  "publisher": { "@id": "https://ajitdev.com/#person" },
                  "datePublished": "2026-02-09T10:00:00+05:30",
                  "dateModified": "2026-02-17T12:00:00+05:30",
                  "breadcrumb": { "@id": "https://ajitdev.com/#breadcrumb" },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://ajitdev.com/og-image.png",
                    "width": 1200,
                    "height": 630
                  },
                  "keywords": "Ajit Dev, AjitDev01, Full Stack Developer India, DevOps Engineer India, Cloud Security Developer, MERN Stack, Next.js, React, Katihar Bihar Developer, AWS, Docker, Kubernetes"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://ajitdev.com/#website",
                  "name": "Ajit Dev Portfolio",
                  "alternateName": "ajitdev.com",
                  "url": "https://ajitdev.com",
                  "description": "DevOps, DevSecOps, Cloud Security and Cybersecurity developer portfolio by Ajit Dev — Katihar, Bihar, India.",
                  "inLanguage": "en-IN",
                  "publisher": { "@id": "https://ajitdev.com/#person" },
                  "author": { "@id": "https://ajitdev.com/#person" },
                  "copyrightHolder": { "@id": "https://ajitdev.com/#person" },
                  "copyrightYear": "2026",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://ajitdev.com/?s={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://ajitdev.com/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://ajitdev.com/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Projects",
                      "item": "https://ajitdev.com/projects"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "About",
                      "item": "https://ajitdev.com/about"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "Contact",
                      "item": "https://ajitdev.com/contact"
                    }
                  ]
                },
                {
                  "@type": "VideoObject",
                  "@id": "https://www.youtube.com/watch?v=9jDShfTLjwo",
                  "name": "JavaScript & DevOps Coding Showcase | Ajit Dev",
                  "description": "DevOps, JavaScript and coding showcase by Ajit Dev demonstrating CI/CD automation, security engineering, cloud computing, Docker containerization and technical editing.",
                  "thumbnailUrl": [
                    "https://img.youtube.com/vi/9jDShfTLjwo/maxresdefault.jpg",
                    "https://img.youtube.com/vi/9jDShfTLjwo/hqdefault.jpg",
                    "https://img.youtube.com/vi/9jDShfTLjwo/mqdefault.jpg"
                  ],
                  "uploadDate": "2026-02-17T10:00:00+05:30",
                  "duration": "PT2M00S",
                  "embedUrl": "https://www.youtube.com/embed/9jDShfTLjwo",
                  "contentUrl": "https://www.youtube.com/watch?v=9jDShfTLjwo",
                  "potentialAction": {
                    "@type": "WatchAction",
                    "target": "https://www.youtube.com/watch?v=9jDShfTLjwo"
                  },
                  "hasPart": [
                    {
                      "@type": "Clip",
                      "name": "DevOps Demo",
                      "startOffset": 0,
                      "endOffset": 60,
                      "url": "https://www.youtube.com/watch?v=9jDShfTLjwo&t=0s"
                    },
                    {
                      "@type": "Clip",
                      "name": "Cloud Security Showcase",
                      "startOffset": 60,
                      "endOffset": 120,
                      "url": "https://www.youtube.com/watch?v=9jDShfTLjwo&t=60s"
                    }
                  ],
                  "publisher": { "@id": "https://ajitdev.com/#person" },
                  "author": { "@id": "https://ajitdev.com/#person" },
                  "inLanguage": "en",
                  "keywords": "DevOps, DevSecOps, Cloud Security, JavaScript, Linux, Docker, CI/CD, coding portfolio, Ajit Dev, India"
                },
                {
                  "@type": "ItemList",
                  "@id": "https://ajitdev.com/#projectlist",
                  "name": "Ajit Dev — DevOps, DevSecOps & Cloud Security Projects",
                  "description": "Featured DevOps, DevSecOps, Cloud Security, Cybersecurity, MERN Stack and LAMP Stack projects by Ajit Dev from Katihar, India.",
                  "url": "https://ajitdev.com/projects",
                  "author": { "@id": "https://ajitdev.com/#person" },
                  "itemListOrder": "https://schema.org/ItemListOrderDescending",
                  "numberOfItems": 6,
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "DevOps CI/CD Automation Pipeline",
                      "url": "https://ajitdev.com/projects/devops-automation",
                      "description": "Automated CI/CD pipeline using GitHub Actions, Docker and Linux for continuous integration and deployment."
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Cloud Security Lab",
                      "url": "https://ajitdev.com/projects/cloud-security-lab",
                      "description": "Cloud security engineering project implementing Zero Trust, IAM policies and network security controls."
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "DevSecOps Security Pipeline",
                      "url": "https://ajitdev.com/projects/devsecops-pipeline",
                      "description": "Shift-left security implementation integrating SAST, DAST and dependency scanning into CI/CD workflows."
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "MERN Stack Application",
                      "url": "https://ajitdev.com/projects/mern-stack-app",
                      "description": "Full-stack MERN (MongoDB, Express, React, Node.js) application with secure API architecture."
                    },
                    {
                      "@type": "ListItem",
                      "position": 5,
                      "name": "LAMP Stack Web Platform",
                      "url": "https://ajitdev.com/projects/lamp-stack-platform",
                      "description": "Linux, Apache, MySQL and PHP web platform with hardened server configuration and DevOps deployment."
                    },
                    {
                      "@type": "ListItem",
                      "position": 6,
                      "name": "Cybersecurity Monitoring Dashboard",
                      "url": "https://ajitdev.com/projects/cybersecurity-dashboard",
                      "description": "Security monitoring and SIEM dashboard for real-time threat detection and log analysis using open-source tools."
                    }
                  ]
                },
                {
                  "@type": "CreativeWorkSeries",
                  "@id": "https://ajitdev.com/#workseries",
                  "name": "Ajit Dev — DevOps, DevSecOps & Cloud Security Works",
                  "description": "An ongoing series of DevOps, DevSecOps, Cloud Security, Cybersecurity, MERN Stack and LAMP Stack projects and technical writings by Ajit Dev from Katihar, Bihar, India.",
                  "url": "https://ajitdev.com/projects",
                  "author": { "@id": "https://ajitdev.com/#person" },
                  "creator": { "@id": "https://ajitdev.com/#person" },
                  "publisher": { "@id": "https://ajitdev.com/#person" },
                  "inLanguage": "en-IN",
                  "startDate": "2026-02-09",
                  "genre": [
                    "DevOps",
                    "DevSecOps",
                    "Cloud Security",
                    "Cybersecurity",
                    "Cloud Computing",
                    "MERN Stack",
                    "LAMP Stack"
                  ],
                  "about": [
                    { "@type": "Thing", "name": "DevOps Engineering" },
                    { "@type": "Thing", "name": "DevSecOps" },
                    { "@type": "Thing", "name": "Cloud Security" },
                    { "@type": "Thing", "name": "Cybersecurity" },
                    { "@type": "Thing", "name": "Cloud Computing" },
                    { "@type": "Thing", "name": "MERN Stack" },
                    { "@type": "Thing", "name": "LAMP Stack" },
                    { "@type": "Thing", "name": "Linux" },
                    { "@type": "Thing", "name": "Docker" },
                    { "@type": "Thing", "name": "CI/CD Pipelines" }
                  ]
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "@id": "https://ajitdev.com/#credential-brainzima",
                  "name": "DevOps & Cloud Security Training Certification",
                  "credentialCategory": "certificate",
                  "about": [
                    { "@type": "Thing", "name": "DevOps Engineering" },
                    { "@type": "Thing", "name": "Cloud Security" },
                    { "@type": "Thing", "name": "Cybersecurity" }
                  ],
                  "competencyRequired": "DevOps, CI/CD, Docker, Linux, Cloud Security, Cybersecurity",
                  "recognizedBy": {
                    "@type": "EducationalOrganization",
                    "@id": "https://www.brainzima.com/#org",
                    "name": "Brainzima Innovation Institute",
                    "url": "https://www.brainzima.com/"
                  },
                  "holder": {
                    "@id": "https://ajitdev.com/#person"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://ajitdev.com/projects/devops-automation#project",
                  "name": "DevOps CI/CD Automation Pipeline",
                  "applicationCategory": "DeveloperApplication",
                  "operatingSystem": "Linux",
                  "description": "Automated CI/CD pipeline built with GitHub Actions, Docker and Linux for continuous integration and deployment.",
                  "url": "https://ajitdev.com/projects/devops-automation",
                  "author": { "@id": "https://ajitdev.com/#person" },
                  "creator": { "@id": "https://ajitdev.com/#person" },
                  "publisher": { "@id": "https://ajitdev.com/#person" },
                  "softwareVersion": "1.0",
                  "datePublished": "2026-02-09",
                  "inLanguage": "en",
                  "keywords": "DevOps, CI/CD, Docker, GitHub Actions, Linux automation",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://ajitdev.com/projects/devsecops-pipeline#project",
                  "name": "DevSecOps Security Integration Pipeline",
                  "applicationCategory": "SecurityApplication",
                  "operatingSystem": "Linux",
                  "description": "Shift-left security DevSecOps pipeline integrating SAST, DAST, container scanning and dependency auditing into CI/CD workflows. Built for cloud-native security engineering.",
                  "url": "https://ajitdev.com/projects/devsecops-pipeline",
                  "author": { "@id": "https://ajitdev.com/#person" },
                  "creator": { "@id": "https://ajitdev.com/#person" },
                  "publisher": { "@id": "https://ajitdev.com/#person" },
                  "keywords": "DevSecOps, security automation, SAST, DAST, CI/CD, Docker, cloud security",
                  "inLanguage": "en",
                  "datePublished": "2026-02-09"
                }
              ]
            })
          }}
        />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
