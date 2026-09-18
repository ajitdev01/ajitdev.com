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
