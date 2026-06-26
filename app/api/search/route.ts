import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";

export async function GET() {
  let posts: any[] = [];
  try {
    posts = getAllPosts();
  } catch (e) {
    console.error("Error reading blog posts for search API:", e);
  }

  const lightweightPosts = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    tags: p.tags || [],
    description: p.description || "",
  }));

  const lightweightProjects = projects.map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    tech: p.tech || [],
    description: p.description || "",
    github: p.github || "",
  }));

  return NextResponse.json(
    {
      posts: lightweightPosts,
      projects: lightweightProjects,
    },
    {
      headers: {
        "Cache-Control": "public, s-max-age=3600, stale-while-revalidate=600",
      },
    }
  );
}
