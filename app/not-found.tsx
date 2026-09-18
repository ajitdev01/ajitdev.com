import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800 px-6 py-12">
      {/* Decorative backdrop shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-lg w-full space-y-8 bg-white/70 backdrop-blur-md border border-gray-200/60 p-12 rounded-3xl shadow-xl">
        {/* Large 404 text with gradient */}
        <div className="text-8xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent select-none animate-pulse">
          404
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
            The page you are looking for does not exist, has been moved, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap gap-2.5 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all text-xs text-center"
          >
            Home Page
          </Link>
          <Link
            href="/blog"
            className="px-5 py-2.5 bg-gray-900 hover:bg-black text-white font-semibold rounded-xl shadow-md transition-all text-xs text-center"
          >
            Technical Blog
          </Link>
          <Link
            href="/projects"
            className="px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border border-gray-200 transition-colors text-xs text-center shadow-xs"
          >
            View Projects
          </Link>
          <Link
            href="/skills"
            className="px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border border-gray-200 transition-colors text-xs text-center shadow-xs"
          >
            Skills Matrix
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border border-gray-200 transition-colors text-xs text-center shadow-xs"
          >
            Contact Support
          </Link>
        </div>

        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
      </div>
    </div>
  );
}
