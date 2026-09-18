import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Ajit Kumar — Full Stack Engineer Portfolio",
  description:
    "Terms of Service for Ajit Kumar's professional developer portfolio. Covers usage terms, intellectual property, freelance collaborations, and code licensing.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    title: "Terms of Service | Ajit Kumar — Full Stack Engineer Portfolio",
    description:
      "Terms of Service for Ajit Kumar's professional developer portfolio. Covers usage terms, intellectual property, freelance collaborations, and code licensing.",
    url: "https://ajitdev.com/terms",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Ajit Kumar",
    description:
      "Terms of Service for Ajit Kumar's professional developer portfolio.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
