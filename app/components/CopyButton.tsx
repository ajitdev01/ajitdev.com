"use client";

import React, { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      trackEvent("code_copy_success", { length: text.length });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code block:", err);
      trackEvent("code_copy_failed");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-750 hover:border-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-200 select-none z-10"
      title="Copy to clipboard"
      aria-label="Copy code block contents"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-green-500" />
      ) : (
        <Clipboard className="w-3.5 h-3.5" />
      )}
    </button>
  );
}
