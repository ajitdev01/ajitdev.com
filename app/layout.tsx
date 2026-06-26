import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ThirdPartyScripts = dynamic(() => import("@/app/components/ThirdPartyScripts"));
import PWARegister from "@/app/components/PWARegister";
import AnalyticsTracker from "@/app/components/AnalyticsTracker";
import CommandPalette from "@/app/components/CommandPalette";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ajit Dev — Full Stack Developer, DevOps Engineer & Cloud Security | Katihar, India",
  description:
    "Ajit Dev (ajitdev01) is a Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar, India. Expert in Next.js, React, MERN Stack, AWS, Docker, Kubernetes, Terraform, Linux & System Design.",
  authors: [{ name: "Ajit Dev", url: "https://ajitdev.com" }],
  creator: "Ajit Dev",
  metadataBase: new URL("https://ajitdev.com"),
  keywords: ["Ajit Dev", "Ajit Kumar", "AjitDev01", "Full Stack Developer", "DevOps Engineer", "Cloud Security", "MERN Stack", "Next.js", "React", "Katihar", "Bihar", "India"],
  alternates: {
    canonical: "https://ajitdev.com/",
    languages: {
      "en-IN": "https://ajitdev.com/",
      "en": "https://ajitdev.com/",
      "x-default": "https://ajitdev.com/",
    },
  },
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Katihar, Bihar, India",
    "geo.position": "25.5671;87.5757",
    "ICBM": "25.5671, 87.5757",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    url: "https://ajitdev.com/",
    siteName: "Ajit Dev Portfolio",
    title: "Ajit Dev — Full Stack Developer, DevOps Engineer & Cloud Security",
    description:
      "Full Stack Developer, DevOps Engineer & Cloud Security portfolio by Ajit Dev (ajitdev01). Next.js, React, MERN Stack, AWS, Docker, Kubernetes projects from Katihar, Bihar, India.",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajit Dev — Full Stack Developer & DevOps Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ajitdev01",
    creator: "@ajitdev01",
    title: "Ajit Dev — Full Stack Developer, DevOps Engineer & Cloud Security",
    description:
      "Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast. Next.js, React, MERN Stack, AWS, Docker, Kubernetes from Katihar, Bihar, India.",
    images: ["https://ajitdev.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Sitemap discovery */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Identity Rel links */}
        <link rel="me" href="https://github.com/ajitdev01" />
        <link rel="me" href="https://linkedin.com/in/ajitdev01" />
        <link rel="me" href="https://twitter.com/ajitdev01" />
        <link rel="me" href="https://facebook.com/ajitdev01" />
        <link rel="me" href="https://t.me/ajitdev01" />
        <link rel="me" href="https://youtube.com/@ajitdev01" />
        <link rel="me" href="https://hashnode.com/@ajitdev01" />
        <link rel="me" href="https://codeforces.com/profile/ajitdev01" />
        <link rel="me" href="https://www.brainzima.com/" />

        {/* DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />

        {/* Favicon indicators pointing to existing logo.png */}
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msvalidate.01" content="4DD1B20C522DBBD68F26BA01EF86C2FD" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6K777G8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThirdPartyScripts />
        <PWARegister />
        <AnalyticsTracker />
        <CommandPalette />


        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
