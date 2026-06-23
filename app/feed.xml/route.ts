import { NextResponse } from "next/server";
import RSS from "rss";
import { getAllPosts, BlogPost } from "@/lib/blog";

export async function GET() {
  const baseUrl = "https://ajitdev.com";
  let posts: BlogPost[] = [];
  try {
    posts = getAllPosts();
  } catch (e) {
    console.error("Error loading posts for feed generator:", e);
  }

  // RSS feed generation when blog count exceeds 20 articles
  if (posts.length <= 20) {
    return new NextResponse(
      `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Ajit Dev | Technical Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Feed is disabled because the blog count is 20 or fewer articles.</description>
  </channel>
</rss>`,
      {
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
        },
      }
    );
  }

  const feed = new RSS({
    title: "Ajit Dev | Technical Blog",
    description: "Technical engineering guides, Docker tutorials, AWS playbooks, and systems architecture blueprints by Ajit Dev.",
    feed_url: `${baseUrl}/feed.xml`,
    site_url: `${baseUrl}/blog`,
    language: "en-in",
    pubDate: new Date().toUTCString(),
  });

  // Limit feed items to the latest 50 posts to maintain reasonable feed size
  const postsToShow = posts.slice(0, 50);

  postsToShow.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${post.slug}`,
      guid: `${baseUrl}/blog/${post.slug}`,
      categories: [post.category],
      date: post.date,
    });
  });

  const rssFeed = feed.xml({ indent: true });

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-max-age=1200, stale-while-revalidate=600",
    },
  });
}
