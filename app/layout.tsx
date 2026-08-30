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
  metadataBase: new URL("https://ajitdev.com"),
  title: {
    default: "AJITDEV — Full Stack Developer | Cloud, DevOps & DevSecOps",
    template: "%s — AJITDEV",
  },
  description:
    "Ajit Dev (ajitdev01) is a Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar, India. Expert in Next.js, React, MERN Stack, AWS, Docker, Kubernetes, Terraform, Linux & System Design.",
  authors: [{ name: "Ajit Dev", url: "https://ajitdev.com" }],
  creator: "Ajit Dev",
  publisher: "Ajit Dev",
  keywords: ["Ajit Dev", "Ajit Kumar", "AjitDev01", "Full Stack Developer", "DevOps Engineer", "Cloud Security", "MERN Stack", "Next.js", "React", "Katihar", "Bihar", "India"],
  alternates: {
    canonical: "/",
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
    siteName: "AJITDEV Portfolio",
    title: "AJITDEV — Full Stack Developer | Cloud, DevOps & DevSecOps",
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
    title: "AJITDEV — Full Stack Developer | Cloud, DevOps & DevSecOps",
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
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/logo.png"],
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
        {/* Sitemap & RSS discovery */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" title="AJITDEV Blog RSS Feed" href="/rss.xml" />

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

        {/* Enhanced Favicon & Icon links */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#080c14" />
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
