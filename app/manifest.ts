import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ajit Dev Portfolio",
    short_name: "Ajit Dev",
    description: "DevOps, DevSecOps & Cloud Security developer portfolio by Ajit Dev.",
    start_url: "/",
    display: "standalone",
    background_color: "#080c14",
    theme_color: "#080c14",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logo.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Projects",
        url: "/projects",
        description: "Browse software engineering portfolio projects",
      },
      {
        name: "Skills",
        url: "/skills",
        description: "View DevOps, backend, and security skillsets",
      },
      {
        name: "Blog",
        url: "/blog",
        description: "Read technical articles and deep dives",
      },
    ],
  };
}
