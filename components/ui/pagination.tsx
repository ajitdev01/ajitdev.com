"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  count: number;
  page: number;
  onChange: (page: number) => void;
  className?: string;
}

function getPageRange(page: number, count: number): (number | string)[] {
  const siblingCount = 1;
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPageNumbers >= count) {
    return Array.from({ length: count }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(page - siblingCount, 1);
  const rightSiblingIndex = Math.min(page + siblingCount, count);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < count - 1;

  const firstPageIndex = 1;
  const lastPageIndex = count;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, "DOTS_RIGHT", lastPageIndex];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => count - rightItemCount + i + 1
    );
    return [firstPageIndex, "DOTS_LEFT", ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    return [firstPageIndex, "DOTS_LEFT", ...middleRange, "DOTS_RIGHT", lastPageIndex];
  }

  return Array.from({ length: count }, (_, i) => i + 1);
}

const Pagination: React.FC<PaginationProps> = ({
  count,
  page,
  onChange,
  className,
}) => {
  if (count <= 1) return null;

  const pageRange = getPageRange(page, count);

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("flex flex-wrap justify-center items-center gap-1.5", className)}
    >
      <button
        onClick={() => page > 1 && onChange(page - 1)}
        disabled={page === 1}
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
        aria-label="Go to previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pageRange.map((item, index) => {
        if (typeof item === "string") {
          return (
            <span
              key={`${item}-${index}`}
              className="inline-flex h-9 w-9 items-center justify-center text-slate-400 select-none"
            >
              <MoreHorizontal className="h-4 w-4" />
            </span>
          );
        }

        const p = item as number;
        const isSelected = p === page;
        return (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={cn(
              "inline-flex h-9 min-w-9 px-3 items-center justify-center rounded-xl text-xs font-extrabold transition-colors cursor-pointer select-none",
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
