import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ajitdev.com";

  // Core static subpages
  const staticPaths = [
    "",
    "/about",
    "/projects",
    "/projects/full-stack",
    "/projects/devops",
    "/projects/cloud",
    "/projects/security",
    "/blog",
    "/blog/devops",
    "/blog/aws",
    "/blog/docker",
    "/blog/kubernetes",
    "/blog/terraform",
    "/blog/linux",
    "/blog/react",
    "/blog/nextjs",
    "/blog/system-design",
    "/blog/dsa",
    "/leetcode",
    "/dsa",
    "/system-design",
    "/devops",
    "/devsecops",
    "/cloud",
    "/aws",
    "/docker",
    "/kubernetes",
    "/terraform",
    "/linux",
    "/cloud-security",
    "/cyber-security",
    "/resources",
    "/roadmaps",
    "/tools",
    "/open-source",
    "/case-studies",
    "/achievements",
    "/certificates",
    "/resume",
    "/contact",
    "/uses",
    "/now",
    "/changelog",
    "/privacy",
    "/terms",
  ];

  const staticUrls = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : path.startsWith("/projects") || path.startsWith("/blog") ? 0.8 : 0.6,
  }));

  // Dynamic blog posts urls
  let blogUrls: Array<{ url: string; lastModified: string; changeFrequency: "weekly" | "monthly" | "yearly" | "always" | "hourly" | "daily" | "never"; priority: number }> = [];
  try {
    const posts = getAllPosts();
    blogUrls = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (e) {
    console.error("Error fetching posts for sitemap dynamic links generation: ", e);
  }

  return [...staticUrls, ...blogUrls];
}
