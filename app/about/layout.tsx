import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ajit Dev (ajitdev01) | Full Stack Developer, DevOps Engineer & Cloud Security",
  description:
    "Ajit Dev (ajitdev01) is a Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar, India. Specializing in MERN Stack, Next.js, TypeScript, AWS, Docker, Kubernetes. Available for remote opportunities.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    title: "Ajit Dev (ajitdev01) | Full Stack Developer & DevOps Engineer",
    description:
      "Full Stack Developer & DevOps Engineer from Katihar, Bihar. MERN Stack, Next.js, AWS, Docker, Kubernetes, Cloud Security. View projects and hire.",
    url: "https://ajitdev.com/about",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Dev | Full Stack Developer & DevOps Engineer",
    description:
      "Full Stack Developer & DevOps Engineer specializing in MERN Stack, Next.js, AWS, Cloud Security.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
