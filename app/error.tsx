"use client";

import React, { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route segment error:", error);
    trackEvent("segment_error", {
      message: error.message || "Unknown error",
      digest: error.digest,
      level: "segment",
    });
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-transparent px-6 py-12">
      <div className="text-center max-w-md w-full space-y-6 bg-white/80 backdrop-blur-md border border-gray-200 p-8 rounded-3xl shadow-xl">
        {/* Warning Icon */}
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Something went wrong!</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            An error occurred in this section of the page. You can try refreshing the section or contacting support.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            Try Again
          </button>
          <a
            href="/"
            className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl border border-gray-300 transition-colors text-center text-sm"
          >
            Go Home
          </a>
        </div>

        <div className="text-[10px] text-gray-400">
          Error digest: {error.digest || "N/A"}
        </div>
      </div>
    </div>
  );
}
