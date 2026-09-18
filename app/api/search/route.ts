import { NextRequest, NextResponse } from "next/server";
import Fuse from "fuse.js";
import { getAllPosts, BlogPost } from "@/lib/blog";
import { projects } from "@/lib/projects";
import {
  validateSearchQuery,
  apiSuccess,
  apiError,
  methodNotAllowed,
} from "@/lib/validations";

export const dynamic = "force-dynamic";

export interface LightweightPost {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
}

export interface LightweightProject {
  id: number;
  title: string;
  category: string;
  tech: string[];
  description: string;
  github: string;
}

export interface SearchResultItem {
  type: "post" | "project";
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const hasQuery = searchParams.has("q") || searchParams.has("category") || searchParams.has("page") || searchParams.has("limit");

    let rawPosts: BlogPost[] = [];
    try {
      rawPosts = getAllPosts();
    } catch (err) {
      console.error("Error reading blog posts for search API:", err);
    }

    const lightweightPosts: LightweightPost[] = rawPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      tags: p.tags || [],
      description: p.description || "",
    }));

    const lightweightProjects: LightweightProject[] = projects.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      tech: p.tech || [],
      description: p.description || "",
      github: p.github || "",
    }));

    // If no search/filter params provided, return the lightweight index (for CommandPalette & prefetch)
    if (!hasQuery) {
      return NextResponse.json(
        {
          success: true,
          data: {
            posts: lightweightPosts,
            projects: lightweightProjects,
            total: lightweightPosts.length + lightweightProjects.length,
          },
          // Backwards-compatibility properties for existing frontend callers
          posts: lightweightPosts,
          projects: lightweightProjects,
          message: "Success",
        },
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, s-max-age=3600, stale-while-revalidate=600",
          },
        }
      );
    }

    // Validate query parameters
    const paramObj: Record<string, string | undefined> = {
      q: searchParams.get("q") ?? undefined,
      page: searchParams.get("page") ?? undefined,
      limit: searchParams.get("limit") ?? undefined,
      category: searchParams.get("category") ?? undefined,
    };

    const validation = validateSearchQuery(paramObj);
    if (!validation.success) {
      return apiError(
        validation.errors[0]?.message || "Invalid search query parameters.",
        400,
        "VALIDATION_ERROR",
        validation.errors
      );
    }

    const { q, page, limit, category } = validation.data;

    // Build unified searchable corpus
    const unifiedCorpus: SearchResultItem[] = [
      ...lightweightPosts.map((p) => ({
        type: "post" as const,
        id: `post-${p.slug}`,
        title: p.title,
        category: p.category,
        description: p.description,
        tags: p.tags,
        url: `/blog/${p.slug}`,
      })),
      ...lightweightProjects.map((p) => ({
        type: "project" as const,
        id: `project-${p.id}`,
        title: p.title,
        category: p.category,
        description: p.description,
        tags: p.tech,
        url: p.github || "/projects",
      })),
    ];

    // Filter by category if requested
    let filtered = unifiedCorpus;
    if (category && category !== "all") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Search with Fuse.js if q is provided
    let results = filtered;
    if (q.length > 0) {
      const fuse = new Fuse(filtered, {
        keys: [
          { name: "title", weight: 0.5 },
          { name: "tags", weight: 0.3 },
          { name: "description", weight: 0.15 },
          { name: "category", weight: 0.05 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      });
      results = fuse.search(q).map((res) => res.item);
    }

    const total = results.length;
    const totalPages = Math.ceil(total / limit) || 0;
    const startIndex = (page - 1) * limit;
    const paginatedResults = results.slice(startIndex, startIndex + limit);

    return apiSuccess(
      {
        results: paginatedResults,
        pagination: {
          page,
          limit,
          total,
          totalPages,
        },
      },
      "Success",
      200,
      {
        // Headers for caching search responses
      }
    );
  } catch (err: unknown) {
    console.error("Search API unexpected error:", err);
    return apiError(
      "An unexpected error occurred while executing the search.",
      500,
      "INTERNAL_SERVER_ERROR"
    );
  }
}

export async function POST() {
  return methodNotAllowed(["GET"]);
}

export async function PUT() {
  return methodNotAllowed(["GET"]);
}

export async function PATCH() {
  return methodNotAllowed(["GET"]);
}

export async function DELETE() {
  return methodNotAllowed(["GET"]);
}
