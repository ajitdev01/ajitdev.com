import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Structures & Algorithms Hub",
  description: "Data Structures & Algorithms problem-solving logs, LeetCode 450+ solved challenges, arrays, trees, graphs, and dynamic programming guides by Ajit Dev.",
  alternates: {
    canonical: "/dsa",
  },
  openGraph: {
    title: "Data Structures & Algorithms Hub — AJITDEV",
    description: "Data Structures & Algorithms problem-solving logs, LeetCode 450+ solved challenges by Ajit Dev.",
    url: "https://ajitdev.com/dsa",
  },
};

export default function DsaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
