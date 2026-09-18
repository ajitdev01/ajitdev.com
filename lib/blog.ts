import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  content: string;
  faq?: Array<{ question: string; answer: string }>;
  isPlaceholder?: boolean;
  updatedDate?: string;
  difficulty?: string;
  estimatedReadingTime?: string;
  lastReviewed?: string;
  wordCount?: number;
  prerequisites?: string[];
  series?: string;
  version?: string;
  featured?: boolean;
  subcategory?: string;
  estimatedCompletion?: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

// Define categories for authority expansion & taxonomy mapping
export const CATEGORIES = [
  { key: "programming", name: "Programming", tags: ["Coding", "Software Engineering", "Development", "Logic"] },
  { key: "c", name: "C", tags: ["C Programming", "Low Level", "Pointers", "Memory Management", "Embedded Systems"] },
  { key: "cpp", name: "C++", tags: ["C++", "OOP", "STL", "Modern C++", "Templates", "Smart Pointers"] },
  { key: "java", name: "Java", tags: ["Java", "JVM", "Collections", "OOP", "Spring Boot", "Multithreading"] },
  { key: "python", name: "Python", tags: ["Python", "Scripting", "Django", "FastAPI", "Decorators", "Generators"] },
  { key: "javascript", name: "JavaScript", tags: ["JavaScript", "ES6+", "Async", "Promises", "Event Loop", "Closures"] },
  { key: "typescript", name: "TypeScript", tags: ["TypeScript", "Static Typing", "Generics", "Interfaces", "Utility Types"] },
  { key: "react", name: "React", tags: ["React", "JavaScript", "Frontend", "State Management", "Hooks", "UI UX"] },
  { key: "nextjs", name: "Next.js", tags: ["Next.js", "React", "Frontend", "SSR", "Vercel", "Web Performance"] },
  { key: "dsa", name: "DSA", tags: ["DSA", "LeetCode", "Algorithms", "Data Structures", "C++", "Optimization"] },
  { key: "system-design", name: "System Design", tags: ["System Design", "Distributed Systems", "Scaling", "Database", "HLD", "LLD"] },
  { key: "devops", name: "DevOps", tags: ["DevOps", "CI/CD", "GitHub Actions", "Docker", "Automation", "Pipelines"] },
  { key: "cloud", name: "Cloud", tags: ["Cloud Computing", "AWS", "Infrastructure", "Serverless", "S3", "EC2"] },
  { key: "cybersecurity", name: "Cyber Security", tags: ["Cyber Security", "OWASP", "XSS", "Penetration Testing", "API Security"] },
  { key: "linux", name: "Linux", tags: ["Linux", "Bash", "Shell Scripting", "SysAdmin", "Security", "Server"] },
  { key: "database", name: "Database", tags: ["SQL", "NoSQL", "MongoDB", "MySQL", "Indexing", "Scaling"] },
  { key: "career", name: "Career", tags: ["Career Growth", "Developer Guide", "Job Search", "Mentorship"] },
  { key: "interview", name: "Interview Preparation", tags: ["Interview Prep", "Coding Questions", "Behavioral", "System Design Interview"] },
  { key: "express", name: "Express", tags: ["Express", "API", "Routing", "Middleware"] },
  { key: "devsecops", name: "DevSecOps", tags: ["DevSecOps", "Security", "CI/CD Scanning", "CVE"] },
  { key: "mern", name: "MERN Stack", tags: ["MERN Stack", "MongoDB", "Express", "React", "Node.js", "API Security"] },
  { key: "lamp", name: "LAMP Stack", tags: ["LAMP Stack", "PHP", "MySQL", "Apache", "Linux", "Backend"] },
  { key: "aws", name: "AWS", tags: ["AWS", "Cloud", "VPC", "Serverless", "EC2", "IAM", "Infrastructure"] },
  { key: "docker", name: "Docker", tags: ["Docker", "Containers", "Orchestration", "Microservices", "Security"] },
  { key: "kubernetes", name: "Kubernetes", tags: ["Kubernetes", "K8s", "EKS", "Orchestration", "Pods", "Scaling"] },
  { key: "terraform", name: "Terraform", tags: ["Terraform", "IaC", "AWS", "Infrastructure", "Automation"] },
  { key: "cloud-security", name: "Cloud Security", tags: ["Cloud Security", "DevSecOps", "AWS Security", "IAM", "VPC", "Zero Trust", "Vulnerability Scanning"] }
];

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`MDX file for slug '${realSlug}' not found.`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  const calculatedReadingTime = `${minutes} min read`;
  const calculatedCompletion = `${minutes} mins to complete`;

  return {
    slug: realSlug,
    title: data.title || "Untitled Post",
    description: data.description || "",
    date: data.date || new Date().toISOString().split("T")[0],
    category: data.category || "General",
    tags: data.tags || [],
    readingTime: data.readingTime || calculatedReadingTime,
    content,
    faq: data.faq || [],
    isPlaceholder: false,
    updatedDate: data.updatedDate || data.date,
    difficulty: data.difficulty || "Medium",
    estimatedReadingTime: data.estimatedReadingTime || calculatedReadingTime,
    lastReviewed: data.lastReviewed || data.date,
    wordCount: data.wordCount || words,
    prerequisites: data.prerequisites || [],
    series: data.series,
    version: data.version || "1.0.0",
    featured: !!data.featured,
    subcategory: data.subcategory || "General",
    estimatedCompletion: data.estimatedCompletion || calculatedCompletion,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
  return files
    .map((file) => getPostBySlug(file))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export function getPostsByCategory(category: string): BlogPost[] {
  const normalizedCategory = category.toLowerCase().trim();
  return getAllPosts().filter((post) => {
    const postCat = post.category.toLowerCase().trim();
    if (postCat === normalizedCategory) return true;
    
    // Map slug aliases (e.g. cpp -> C++, dsa -> DSA, etc.)
    const catObj = CATEGORIES.find((c) => c.key.toLowerCase() === normalizedCategory);
    if (catObj && postCat === catObj.name.toLowerCase()) return true;

    return false;
  });
}

export function getCategories() {
  return CATEGORIES;
}

export function getRelatedPosts(currentPost: BlogPost, limit = 4): BlogPost[] {
  const allPosts = getAllPosts().filter((p) => p.slug !== currentPost.slug);

  const scored = allPosts.map((post) => {
    let score = 0;
    if (post.category.toLowerCase() === currentPost.category.toLowerCase()) score += 5;
    
    const sharedTags = post.tags?.filter((tag) =>
      currentPost.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
    );
    score += (sharedTags?.length || 0) * 2;

    if (post.difficulty === currentPost.difficulty) score += 1;

    return { post, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

export function getAdjacentPosts(currentPost: BlogPost): {
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
} {
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === currentPost.slug);

  if (currentIndex === -1) {
    return { prevPost: null, nextPost: null };
  }

  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return { prevPost, nextPost };
}

export function getPostsByTag(tag: string): BlogPost[] {
  const normalizedTag = tag.toLowerCase().trim();
  return getAllPosts().filter((post) =>
    post.tags?.some((t) => t.toLowerCase().trim() === normalizedTag)
  );
}

export function searchPosts(query: string): BlogPost[] {
  if (!query || !query.trim()) return [];
  const q = query.toLowerCase().trim();
  return getAllPosts().filter((post) =>
    post.title.toLowerCase().includes(q) ||
    post.description.toLowerCase().includes(q) ||
    post.category.toLowerCase().includes(q) ||
    post.tags?.some((t) => t.toLowerCase().includes(q))
  );
}
