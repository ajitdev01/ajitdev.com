// ============================================
// CENTRALIZED SEO CONSTANTS — ajitdev.com
// Single source of truth for brand, social, schema, and keywords
// ============================================

export const SITE_URL = "https://ajitdev.com";

// ========== BRAND IDENTITY ==========
export const BRAND = {
  name: "Ajit Dev",
  alternateName: ["Ajit Kumar", "AjitDev01"],
  username: "ajitdev01",
  email: "support@ajitdev.com",
  phone: "+916205526784",
  website: SITE_URL,
  location: "Katihar, Bihar, India",
  jobTitle: [
    "Full Stack Developer",
    "DevOps Engineer",
    "Cloud Security Enthusiast",
  ],
  description:
    "Ajit Dev is a Full Stack Developer, DevOps Engineer, and Cloud Security Enthusiast from Katihar, Bihar, India. Specializing in Next.js, React, MERN Stack, AWS, Docker, Kubernetes, Terraform, Linux, Cloud Security, Cyber Security, and System Design.",
  shortTitle: "Full Stack Developer | DevOps Engineer | Cloud Security",
  gender: "Male",
  nationality: "Indian",
} as const;

// ========== ADDRESS (JSON-LD) ==========
export const ADDRESS = {
  "@type": "PostalAddress" as const,
  addressLocality: "Katihar",
  addressRegion: "Bihar",
  addressCountry: "India",
  postalCode: "854105",
};

// ========== SOCIAL LINKS (13 platforms) ==========
export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/ajitdev01", type: "professional" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/ajitdev01", type: "professional" },
  { platform: "Instagram", url: "https://instagram.com/ajitdev01", type: "social" },
  { platform: "Facebook", url: "https://facebook.com/ajitdev01", type: "social" },
  { platform: "Telegram", url: "https://t.me/ajitdev01", type: "social" },
  { platform: "Snapchat", url: "https://snapchat.com/add/ajitdev01", type: "social" },
  { platform: "LeetCode", url: "https://leetcode.com/ajitdev01", type: "professional" },
  { platform: "Codeforces", url: "https://codeforces.com/profile/ajitdev01", type: "professional" },
  { platform: "Twitter", url: "https://twitter.com/ajitdev01", type: "professional" },
  { platform: "YouTube", url: "https://youtube.com/@ajitdev01", type: "professional" },
  { platform: "Medium", url: "https://medium.com/@ajitdev01", type: "professional" },
  { platform: "Hashnode", url: "https://hashnode.com/@ajitdev01", type: "professional" },
  { platform: "Dev.to", url: "https://dev.to/ajitdev01", type: "professional" },
] as const;

export const ALL_SOCIAL_URLS = SOCIAL_LINKS.map((link) => link.url);

// ========== FOOTER SEO PARAGRAPH ==========
export const FOOTER_SEO_TEXT = `Ajit Dev is a Full Stack Developer, DevOps Engineer, and Cloud Security Enthusiast from Katihar, Bihar, India. Specializing in Next.js, React, MERN Stack, AWS, Docker, Kubernetes, Terraform, Linux, Cloud Security, Cyber Security, and System Design. Connect with Ajit Dev (ajitdev01) on GitHub, LinkedIn, LeetCode, Codeforces, Instagram, Telegram, Facebook, and other platforms.`;

// ========== JSON-LD PERSON SCHEMA ==========
export const PERSON_SCHEMA = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: BRAND.name,
  alternateName: BRAND.alternateName,
  url: SITE_URL,
  email: BRAND.email,
  telephone: BRAND.phone,
  jobTitle: BRAND.jobTitle,
  description: BRAND.description,
  gender: BRAND.gender,
  nationality: BRAND.nationality,
  image: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#personimage`,
    url: `${SITE_URL}/logo.png`,
    width: 400,
    height: 400,
    caption: `${BRAND.name} — Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast`,
  },
  address: ADDRESS,
  sameAs: ALL_SOCIAL_URLS,
  knowsAbout: [
    "Full Stack Development",
    "MERN Stack Development",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "DevOps Engineering",
    "DevSecOps",
    "Cloud Security",
    "Cybersecurity",
    "Cloud Computing",
    "Linux System Administration",
    "Docker Containerization",
    "Kubernetes",
    "AWS",
    "Terraform",
    "CI/CD Pipelines",
    "GitHub Actions",
    "Infrastructure as Code",
    "System Design",
    "REST APIs",
    "Web Application Security",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "English" },
    { "@type": "Language", name: "Hindi" },
  ],
};

// ========== SEO KEYWORD POOLS (for natural rotation) ==========
export const SEO_KEYWORDS = {
  // Personal Brand
  brand: [
    "Ajit Dev",
    "Ajit Kumar",
    "AjitDev01",
    "Ajit Dev Portfolio",
    "Ajit Dev Developer",
    "Ajit Dev Engineer",
    "Ajit Dev Blog",
    "Ajit Dev Projects",
    "Ajit Dev GitHub",
    "Ajit Dev LeetCode",
  ],

  // Roles
  roles: [
    "Full Stack Developer",
    "Full Stack Engineer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "DevOps Developer",
    "Cloud Engineer",
    "Cloud Security Engineer",
    "DevSecOps Engineer",
    "Software Engineer",
    "Web Developer",
    "Application Developer",
  ],

  // Location-based
  katihar: [
    "Katihar Developer",
    "Katihar Full Stack Developer",
    "Katihar Software Engineer",
    "Katihar Web Developer",
    "Katihar DevOps Engineer",
  ],
  bihar: [
    "Bihar Developer",
    "Bihar Full Stack Developer",
    "Bihar Software Engineer",
    "Bihar DevOps Engineer",
  ],
  india: [
    "India Full Stack Developer",
    "India DevOps Engineer",
    "India Next.js Developer",
  ],
} as const;

// ========== PER-PAGE KEYWORD ASSIGNMENTS ==========
export const PAGE_KEYWORDS = {
  home: [
    ...SEO_KEYWORDS.brand.slice(0, 4),
    ...SEO_KEYWORDS.roles.slice(0, 5),
    ...SEO_KEYWORDS.india,
    "MERN Stack Developer Portfolio",
  ],
  about: [
    "Ajit Dev Portfolio",
    "Ajit Dev Developer",
    "Ajit Dev Engineer",
    ...SEO_KEYWORDS.katihar,
    ...SEO_KEYWORDS.bihar.slice(0, 2),
    "Full Stack Engineer",
    "DevOps Engineer",
    "Cloud Security Enthusiast",
  ],
  blog: [
    "Ajit Dev Blog",
    "Ajit Dev DevOps",
    "DevOps Engineer",
    "Cloud Security",
    "Full Stack Developer Blog",
    "Next.js Developer Blog",
    ...SEO_KEYWORDS.brand.slice(0, 3),
  ],
  projects: [
    "Ajit Dev Projects",
    "Ajit Dev GitHub",
    "Next.js Developer",
    "MERN Stack Developer",
    "Full Stack Projects Portfolio",
    ...SEO_KEYWORDS.katihar.slice(0, 2),
    ...SEO_KEYWORDS.india.slice(0, 2),
  ],
  skills: [
    "Full Stack Engineer",
    "DevSecOps Engineer",
    "Cloud Engineer",
    "MERN Stack Developer",
    ...SEO_KEYWORDS.brand.slice(0, 3),
    ...SEO_KEYWORDS.roles.slice(5, 10),
  ],
  contact: [
    "Ajit Dev",
    "Hire Developer",
    "Katihar Full Stack Developer",
    "Bihar Software Engineer",
    "India DevOps Engineer",
    ...SEO_KEYWORDS.brand.slice(0, 3),
  ],
} as const;
