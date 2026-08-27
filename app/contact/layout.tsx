import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Full Stack Engineer | MERN • Next.js • DSA 518+ | Ajit Kumar",
  description:
    "Contact Ajit Kumar — Full Stack Engineer specializing in MERN, Next.js, LAMP stacks. 518+ LeetCode problems solved. Available for remote Full Stack roles worldwide.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    title: "Contact Full Stack Engineer — Ajit Kumar",
    description:
      "Full Stack Engineer specializing in MERN, Next.js. 518+ DSA problems solved. Available for remote roles worldwide.",
    url: "https://ajitdev.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Full Stack Engineer — MERN • Next.js • DSA 518+",
    description: "Available for remote Full Stack Engineer roles worldwide.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
