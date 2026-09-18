import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & Certifications",
  description:
    "Education and certifications of Ajit Kumar. BCA in Cloud & Security from Amity University Online. Full Stack Development training.",
  alternates: {
    canonical: "/education",
  },
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
