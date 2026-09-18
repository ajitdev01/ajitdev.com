import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ajit Kumar — Full Stack Engineer Portfolio",
  description:
    "Privacy Policy for Ajit Kumar's professional developer portfolio. Understand how we collect, protect, and use your data when visiting the site or using the contact form.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    title: "Privacy Policy | Ajit Kumar — Full Stack Engineer Portfolio",
    description:
      "Privacy Policy for Ajit Kumar's professional developer portfolio. Understand how we collect, protect, and use your data when visiting the site or using the contact form.",
    url: "https://ajitdev.com/privacy",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Ajit Kumar",
    description:
      "Privacy Policy for Ajit Kumar's professional developer portfolio.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
