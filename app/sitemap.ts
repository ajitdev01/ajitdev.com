import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ajitdev.com";

  try {
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
      "/blog/mern",
      "/blog/lamp",
      "/blog/cloud-security",
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
      
      // New Authority Pages
      "/lamp-stack",
      "/mern-stack",
      "/react",
      "/nextjs",
      "/javascript",
      "/typescript",
      "/nodejs",
      "/php",
      "/mysql",
      "/mongodb",
      "/github-actions",
      "/ci-cd",
      "/hld",
      "/lld",

      // DSA Subpages
      "/dsa/arrays",
      "/dsa/strings",
      "/dsa/hashing",
      "/dsa/linked-list",
      "/dsa/stack",
      "/dsa/queue",
      "/dsa/binary-search",
      "/dsa/trees",
      "/dsa/bst",
      "/dsa/heap",
      "/dsa/graph",
      "/dsa/backtracking",
      "/dsa/greedy",
      "/dsa/dynamic-programming",

      // System Design Subpages
      "/system-design/load-balancer",
      "/system-design/cache",
      "/system-design/database-scaling",
      "/system-design/microservices",
      "/system-design/message-queues",
      "/system-design/cdn",
      "/system-design/design-whatsapp",
      "/system-design/design-youtube",
      "/system-design/design-netflix",
      "/system-design/design-uber",

      // DevOps Subpages
      "/devops/docker",
      "/devops/kubernetes",
      "/devops/terraform",
      "/devops/github-actions",
      "/devops/cicd",
      "/devops/aws",
      "/devops/linux",

      // Case Studies Subpages
      "/case-studies/portfolio",
      "/case-studies/qr-menu-saas",
      "/case-studies/weather-app",
      "/case-studies/library-management-system"
    ];

    const staticUrls = staticPaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1.0 : path.startsWith("/projects") || path.startsWith("/blog") ? 0.8 : 0.6,
    }));

    // Dynamic blog posts urls (combining MDX and 1,200 metadata articles)
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
  } catch (error) {
    console.error("Fatal sitemap generation error:", error);
    // Return minimal fallback to ensure sitemap never 500s
    return [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 1.0,
      }
    ];
  }
}
