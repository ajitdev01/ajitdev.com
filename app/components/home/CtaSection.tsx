"use client";

import React from "react";
import Link from "next/link";
import { Send, FileText, ArrowRight, CheckCircle, Mail, MapPin } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
          Ready to Build Something Secure & Scalable?
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
          I am currently available for software development opportunities. Let's discuss how I can contribute to your team with MERN stack coding, DevOps pipelines automation, and cloud security hardening.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-indigo-650 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
          >
            <Send className="w-4 h-4" />
            Send a Message
          </Link>
          <Link
            href="/resume"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-gray-700 bg-white border border-gray-300 hover:border-indigo-350 hover:bg-indigo-50/50 transition-all"
          >
            <FileText className="w-4 h-4" />
            View Interactive CV
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs font-semibold text-gray-500 border-t border-gray-200/80 pt-8 max-w-xl mx-auto">
          <div className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-indigo-500" />
            <span>support@ajitdev.com</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-indigo-500" />
            <span>Katihar, Bihar, India (GMT +5:30)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Open to Remote & Relocation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
