import type {
  WithContext,
  Person,
  WebSite,
  BlogPosting,
  BreadcrumbList,
  Blog,
  ItemList,
} from "schema-dts";
import { BRAND, SITE_URL, ALL_SOCIAL_URLS, ADDRESS } from "./seo";
import type { BlogPost } from "./blog";

/**
 * Returns strongly typed Person schema for Ajit Dev
 */
export function getPersonSchema(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: BRAND.name,
    alternateName: [...BRAND.alternateName],
    url: SITE_URL,
    email: BRAND.email,
    telephone: BRAND.phone,
    jobTitle: [...BRAND.jobTitle],
    description: BRAND.description,
    gender: BRAND.gender,
    nationality: BRAND.nationality,
    image: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#personimage`,
      url: `${SITE_URL}/logo.png`,
      width: "400",
      height: "400",
      caption: `${BRAND.name} — Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      addressCountry: ADDRESS.addressCountry,
      postalCode: ADDRESS.postalCode,
    },
    sameAs: [...ALL_SOCIAL_URLS],
    knowsAbout: [
      "Full Stack Development",
      "MERN Stack Development",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "C++",
      "DSA",
      "Algorithms",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "DevOps Engineering",
      "DevSecOps",
      "Cloud Security",
      "Cybersecurity",
      "Docker Containerization",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Linux System Administration",
      "CI/CD Pipelines",
      "System Design",
    ],
  };
}

/**
 * Returns strongly typed WebSite schema for AJITDEV.com
 */
export function getWebSiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "AJITDEV",
    alternateName: "Ajit Dev Portfolio & Technical Blog",
    description: BRAND.description,
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

/**
 * Returns strongly typed BlogPosting schema for a technical article
 */
export function getBlogPostingSchema(post: BlogPost): WithContext<BlogPosting> {
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const publishDate = post.date ? new Date(post.date).toISOString() : new Date().toISOString();
  const modifiedDate = post.updatedDate ? new Date(post.updatedDate).toISOString() : publishDate;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}/#article`,
    mainEntityOfPage: postUrl,
    headline: post.title,
    description: post.description,
    url: postUrl,
    datePublished: publishDate,
    dateModified: modifiedDate,
    articleSection: post.category,
    keywords: post.tags?.join(", "),
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: BRAND.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: BRAND.name,
      url: SITE_URL,
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-image.png`,
      width: "1200",
      height: "630",
    },
  };
}

/**
 * Returns strongly typed BreadcrumbList schema
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; item: string }>
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http") ? crumb.item : `${SITE_URL}${crumb.item}`,
    })),
  };
}

/**
 * Returns strongly typed Blog schema for category hubs or main blog
 */
export function getBlogSchema(
  title: string,
  description: string,
  categoryUrl: string
): WithContext<Blog> {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${categoryUrl}/#blog`,
    url: categoryUrl,
    name: title,
    description: description,
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: BRAND.name,
    },
  };
}

/**
 * Returns strongly typed TechArticle schema for research whitepapers
 */
export function getTechArticleSchema(paper: {
  title: string;
  summary: string;
  slug: string;
  date: string;
  category: string;
}): WithContext<any> {
  const paperUrl = `${SITE_URL}/research/${paper.slug}`;
  const publishDate = paper.date ? new Date(paper.date).toISOString() : new Date().toISOString();

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${paperUrl}/#article`,
    mainEntityOfPage: paperUrl,
    headline: paper.title,
    description: paper.summary,
    url: paperUrl,
    datePublished: publishDate,
    dateModified: publishDate,
    articleSection: paper.category,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: BRAND.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: BRAND.name,
      url: SITE_URL,
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-image.png`,
      width: "1200",
      height: "630",
    },
  };
}

/**
 * Returns strongly typed ProfilePage schema
 */
export function getProfilePageSchema(
  title: string = "Ajit Dev Profile",
  description: string = BRAND.description,
  url: string = `${SITE_URL}/about`
): WithContext<any> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}/#profilepage`,
    url: url,
    name: title,
    description: description,
    mainEntity: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

/**
 * Returns strongly typed CollectionPage schema
 */
export function getCollectionPageSchema(
  title: string,
  description: string,
  url: string
): WithContext<any> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}/#collectionpage`,
    url: url,
    name: title,
    description: description,
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

/**
 * Returns strongly typed ContactPage schema
 */
export function getContactPageSchema(): WithContext<any> {
  const contactUrl = `${SITE_URL}/contact`;
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${contactUrl}/#contactpage`,
    url: contactUrl,
    name: "Contact Ajit Dev — Full Stack & DevOps Engineer",
    description: "Contact details and collaboration channel for Ajit Dev in Katihar, Bihar, India.",
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: BRAND.name,
      email: BRAND.email,
      telephone: BRAND.phone,
      url: SITE_URL,
    },
  };
}

/**
 * Returns strongly typed EducationPage / EducationalOccupationalCredential schema
 */
export function getEducationPageSchema(): WithContext<any> {
  const eduUrl = `${SITE_URL}/education`;
  return {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    "@id": `${eduUrl}/#educationpage`,
    url: eduUrl,
    name: "Ajit Dev Education & Certifications Timeline",
    description: "Academic qualification (BCA in Cloud Computing & Security) and professional certifications of Ajit Dev.",
    performer: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

