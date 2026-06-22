import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

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
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
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
  const rtResult = readingTime(content);

  return {
    slug: realSlug,
    title: data.title || "Untitled Post",
    description: data.description || "",
    date: data.date || new Date().toISOString().split("T")[0],
    category: data.category || "General",
    tags: data.tags || [],
    readingTime: rtResult.text,
    content,
    faq: data.faq || [],
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // Sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}
