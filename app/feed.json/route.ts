import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const baseUrl = "https://ajitdev.com";
  
  let posts: any[] = [];
  try {
    posts = getAllPosts();
  } catch (e) {
    console.error("Error loading posts for JSON Feed:", e);
  }

  const postsToShow = posts.slice(0, 50);

  const items = postsToShow.map((post) => {
    const postUrl = `${baseUrl}/blog/${post.slug}`;
    const published = new Date(post.date).toISOString();
    const updated = new Date(post.updatedDate || post.date).toISOString();

    return {
      id: postUrl,
      url: postUrl,
      title: post.title,
      summary: post.description,
      date_published: published,
      date_modified: updated,
      tags: post.tags,
      content_text: post.description, // fallback to summary for feed size
    };
  });

  const feedPayload = {
    version: "https://jsonfeed.org/version/1.1",
    title: "Ajit Dev | Technical Blog",
    home_page_url: `${baseUrl}/blog`,
    feed_url: `${baseUrl}/feed.json`,
    description: "Technical engineering guides, Docker tutorials, AWS playbooks, and systems architecture blueprints by Ajit Dev.",
    author: {
      name: "Ajit Dev",
      url: baseUrl,
      email: "support@ajitdev.com"
    },
    items,
  };

  return new NextResponse(JSON.stringify(feedPayload, null, 2), {
    headers: {
      "Content-Type": "application/feed+json; charset=utf-8",
      "Cache-Control": "public, s-max-age=1200, stale-while-revalidate=600",
    },
  });
}
