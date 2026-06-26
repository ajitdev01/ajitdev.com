"use client";

import React, { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to telemetry
    console.error("Uncaught global error:", error);
    trackEvent("uncaught_error", {
      message: error.message || "Unknown error",
      digest: error.digest,
      level: "global",
    });
  }, [error]);

  return (
    <html lang="en" className="h-full">
      <head>
        <title>Application Error | Ajit Dev Portfolio</title>
        <meta name="theme-color" content="#080c14" />
      </head>
      <body className="h-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white flex flex-col items-center justify-center px-6 font-sans">
        {/* Ambient background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-md w-full space-y-8 bg-white/5 backdrop-blur-md border border-red-500/10 p-10 rounded-3xl shadow-2xl">
          {/* Warning SVG */}
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-500/20">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-red-400 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              Application Error
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              A critical error has occurred. The system has been notified and we are looking into it.
            </p>
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={() => reset()}
              className="w-full py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Try Recovery
            </button>
            <a
              href="/"
              className="block w-full py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-colors text-center text-sm"
            >
              Return Home
            </a>
          </div>

          <div className="text-[10px] text-gray-500">
            Error digest: {error.digest || "N/A"}
          </div>
        </div>
      </body>
    </html>
  );
}
