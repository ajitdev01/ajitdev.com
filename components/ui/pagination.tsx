"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  count: number;
  page: number;
  onChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  count,
  page,
  onChange,
  className,
}) => {
  if (count <= 1) return null;

  const pages = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("flex justify-center items-center gap-1.5", className)}
    >
      <button
        onClick={() => page > 1 && onChange(page - 1)}
        disabled={page === 1}
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
        aria-label="Go to previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((p) => {
        const isSelected = p === page;
        return (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={cn(
              "inline-flex h-9 min-w-9 px-3 items-center justify-center rounded-xl text-xs font-extrabold transition-colors cursor-pointer",
              isSelected
                ? "bg-indigo-600 text-white shadow-xs font-black"
                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            )}
            aria-current={isSelected ? "page" : undefined}
          >
            {p}
          </button>
        );
      })}

      <button
        onClick={() => page < count && onChange(page + 1)}
        disabled={page === count}
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
        aria-label="Go to next page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
};

export { Pagination };
