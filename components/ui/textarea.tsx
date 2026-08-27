import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  startAdornment?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, startAdornment, ...props }, ref) => {
    if (startAdornment) {
      return (
        <div className="relative flex w-full">
          <div className="absolute left-3.5 top-3.5 flex items-center pointer-events-none text-slate-400 z-10">
            {startAdornment}
          </div>
          <textarea
            className={cn(
              "flex min-h-[120px] w-full rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm font-bold text-slate-900 shadow-xs transition-colors placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 pl-10",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      );
    }

    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm font-bold text-slate-900 shadow-xs transition-colors placeholder:text-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
