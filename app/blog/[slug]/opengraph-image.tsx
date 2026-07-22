import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";

export const alt = "Ajit Dev Blog Article";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let post;
  try {
    post = getPostBySlug(resolvedParams.slug);
  } catch (_e) {
    post = {
      title: "Technical Engineering Guide",
      category: "Software Development",
      readingTime: "5 min read",
      difficulty: "Medium",
    };
  }

  const category = post.category || "Development";
  const title = post.title || "Technical Guide";
  const readingTime = post.readingTime || "5 min read";
  const difficulty = post.difficulty || "Medium";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background: "linear-gradient(to bottom right, #090d16, #161b2c)",
          padding: "80px",
          boxSizing: "border-box",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar indicating brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: "24px",
              }}
            >
              AD
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#ffffff",
                marginLeft: "12px",
                letterSpacing: "-0.5px",
              }}
            >
              ajitdev.com
            </span>
          </div>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "800",
              color: "#6366f1",
              background: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              padding: "6px 16px",
              borderRadius: "99px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            {category}
          </span>
        </div>

        {/* Middle part - Big post Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "900",
              color: "#ffffff",
              lineHeight: "1.15",
              margin: 0,
              padding: 0,
              letterSpacing: "-1.5px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Bottom stats indicators */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>
                Reading Time
              </span>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#e2e8f0" }}>{readingTime}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>
                Difficulty
              </span>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#e2e8f0" }}>{difficulty}</span>
            </div>
          </div>

          <span style={{ fontSize: "16px", fontWeight: "600", color: "#475569" }}>
            © {new Date().getFullYear()} Ajit Dev. All rights reserved.
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
