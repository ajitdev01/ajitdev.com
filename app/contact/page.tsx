import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Clock,
  Globe,
  ExternalLink,
  Navigation,
  Building2,
} from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
import ContactDetailsCards from "../components/contact/ContactDetailsCards";
import { PAGE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Ajit Dev – Hire Full Stack/DevOps Engineer",
  description: "Get in touch with Ajit Dev (Katihar, Bihar, India) – Full-Stack & DevOps Engineer. Available for hire and technical collaborations.",
  keywords: [...PAGE_KEYWORDS.contact],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Ajit Dev – Hire Full Stack/DevOps Engineer",
    description: "Get in touch with Ajit Dev (Katihar, Bihar, India) – Full-Stack & DevOps Engineer. Available for hire and technical collaborations.",
    url: "https://ajitdev.com/contact",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Ajit Dev — Full Stack & DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ajit Dev – Hire Full Stack/DevOps Engineer",
    description: "Get in touch with Ajit Dev (Katihar, Bihar, India) – Full-Stack & DevOps Engineer.",
    images: ["https://ajitdev.com/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-24">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Ajit Dev — Full Stack Engineer",
            url: "https://ajitdev.com/contact",
            description: "Contact page for Ajit Dev (ajitdev01), a Full Stack Engineer specializing in MERN, Next.js, Docker, Kubernetes, and Cloud Security.",
            about: {
              "@type": "Person",
              name: "Ajit Dev",
              jobTitle: "Full Stack Engineer",
              email: ["support@ajitdev.com", "ajitk23192@gmail.com"],
              url: "https://ajitdev.com",
              workLocation: {
                "@type": "Place",
                name: "Brainzima Innovation Institute",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Katihar",
                  addressRegion: "Bihar",
                  addressCountry: "India"
                },
                hasMap: "https://www.google.com/maps/place/Brainzima+Innovation+Institute/@25.5455446,87.5774064,17z"
              }
            }
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO BANNER CARD */}
        <Card className="p-6 sm:p-10 mb-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-center shadow-xs">
          <div className="inline-flex p-4 rounded-2xl bg-indigo-100 text-indigo-600 mb-4">
            <Mail className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4">
            Let&apos;s Connect
          </h1>

          <div className="w-24 h-1 rounded-full bg-indigo-600 mx-auto mb-6" />

          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="py-1 px-3 text-xs gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600" /> Katihar, Bihar, India
            </Badge>
            <Badge variant="success" className="py-1 px-3 text-xs gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-600" /> Available Worldwide • Remote
            </Badge>
            <Badge variant="outline" className="py-1 px-3 text-xs gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500" /> Response: 24 Hours
            </Badge>
          </div>
        </Card>

        {/* CONTACT FORM SECTION */}
        <div className="mb-12">
          <ContactForm />
        </div>

        {/* GOOGLE MAP & LOCATION SECTION */}
        <Card className="p-6 sm:p-8 mb-12 rounded-3xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black mb-2">
                <Building2 className="w-3.5 h-3.5" /> Location & Institute
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Brainzima Innovation Institute
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 flex items-center gap-1.5 mt-1">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                Katihar, Bihar, India • 854105
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.google.com/maps/place/Brainzima+Innovation+Institute/@25.5455446,87.5774064,17z/data=!3m1!4b1!4m6!3m5!1s0x39faa9b9b95d06ad:0x20dd05b7166b83a3!8m2!3d25.5455446!4d87.5774064"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <Button variant="default" className="py-2.5 px-4 rounded-xl text-xs font-extrabold gap-2 shadow-sm">
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Map Frame Container */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.784791263712!2d87.5774064!3d25.545544600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39faa9b9b95d06ad%3A0x20dd05b7166b83a3!2sBrainzima%20Innovation%20Institute!5e0!3m2!1sen!2sin!4v1787895869297!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-[380px] sm:h-[450px] border-0"
              title="Brainzima Innovation Institute Location Map"
            />
          </div>
        </Card>

        {/* CONTACT INFO & SOCIALS GRID */}
        <ContactDetailsCards />

      </div>
    </div>
  );
}

