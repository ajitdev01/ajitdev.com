import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "AJITDEV — Full Stack Developer | Cloud, DevOps & DevSecOps";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #080c14 0%, #0f172a 50%, #1e1b4b 100%)",
          padding: "80px",
          boxSizing: "border-box",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Ambient glow decoration */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top bar indicating brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "24px",
                boxShadow: "0 8px 24px rgba(79, 70, 229, 0.4)",
              }}
            >
              {"</>"}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "24px",
                  fontWeight: 900,
                  letterSpacing: "-0.5px",
                }}
              >
                AJIT DEV
              </span>
              <span style={{ color: "#94a3b8", fontSize: "14px", fontWeight: 600 }}>
                ajitdev.com • @ajitdev01
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "9999px",
              background: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              color: "#a5b4fc",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            PORTFOLIO & RESEARCH
          </div>
        </div>

        {/* Center content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
            }}
          >
            Full Stack Developer | Cloud, DevOps & DevSecOps
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            Production engineering with Next.js, React, Node.js, AWS, Docker, Kubernetes, Terraform & System Design.
          </div>
        </div>

        {/* Bottom tags */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {["Next.js", "MERN Stack", "AWS Cloud", "Kubernetes", "DevSecOps", "System Design"].map((skill) => (
            <div
              key={skill}
              style={{
                padding: "8px 16px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#e2e8f0",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
