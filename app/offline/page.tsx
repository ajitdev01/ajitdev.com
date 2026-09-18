"use client";

import React from "react";

export default function OfflinePage() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 px-6 relative overflow-hidden">
      {/* Subtle ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-100/70 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-violet-100/60 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center max-w-sm w-full space-y-7 bg-white border border-slate-200 shadow-xl shadow-slate-200/80 p-10 rounded-3xl">

        {/* Icon */}
        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M18.364 5.636a9 9 0 010 12.728M15.536 8.464a5 5 0 010 7.072M6.343 17.657a9 9 0 010-12.728M9.172 15.536a5 5 0 010-7.072M12 12h.01" />
          </svg>
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Connection Lost
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            It looks like you are currently offline. Please check your network connection and try again.
          </p>
        </div>

        {/* Retry button */}
        <button
          id="retry-connection-btn"
          onClick={handleReload}
          className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-bold rounded-xl shadow-md shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 cursor-pointer"
        >
          Retry Connection
        </button>

        {/* Footer badge */}
        <p className="text-[10px] text-slate-400 font-medium">
          Ajit Dev Portfolio PWA • Offline Cache Enabled
        </p>
      </div>
    </div>
  );
}
