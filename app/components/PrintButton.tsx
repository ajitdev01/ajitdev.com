"use client";

import React from "react";
import { Download } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 hover:text-indigo-300 font-bold text-xs rounded-xl transition-all cursor-pointer print:hidden"
    >
      <Download className="w-4 h-4" />
      Print CV / Save PDF
    </button>
  );
}
