import type { Metadata } from "next";
import JSONLD from "@/app/components/JSONLD";
import { getProfilePageSchema } from "@/lib/schema";
import { PAGE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ajit Dev DSA Tracker – 641 Solved (LeetCode, NeetCode)",
  description: "Ajit Dev's Data Structures & Algorithms profile: 641+ problems solved (LeetCode/NeetCode), 242-day coding streak, and topic progress (C++, Python).",
  keywords: [...PAGE_KEYWORDS.dsa],
  alternates: {
    canonical: "/dsa",
  },
  openGraph: {
    title: "Ajit Dev DSA Tracker – 641 Solved (LeetCode, NeetCode)",
    description: "Ajit Dev's Data Structures & Algorithms profile: 641+ problems solved (LeetCode/NeetCode), 242-day coding streak, and topic progress (C++, Python).",
    url: "https://ajitdev.com/dsa",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajit Dev DSA Practice & Coding Streak Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Dev DSA Tracker – 641 Solved (LeetCode, NeetCode)",
    description: "Ajit Dev's Data Structures & Algorithms profile: 641+ problems solved, 242-day coding streak.",
    images: ["https://ajitdev.com/og-image.png"],
  },
};

export default function DsaLayout({ children }: { children: React.ReactNode }) {
  const profileSchema = getProfilePageSchema(
    "Ajit Dev DSA Tracker – 641 Solved",
    "Ajit Dev's Data Structures & Algorithms practice profile: 641+ problems solved across LeetCode & NeetCode.",
    "https://ajitdev.com/dsa"
  );

  return (
    <>
      <JSONLD schema={profileSchema} />
      {children}
    </>
  );
}

