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
              "flex min-h-[120px] w-full rounded-2xl border border-slate-200/90 bg-white px-3.5 py-3 text-sm font-bold text-slate-900 shadow-2xs transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus-visible:outline-hidden focus-visible:border-indigo-600 focus-visible:ring-3 focus-visible:ring-indigo-500/20 focus-visible:shadow-[0_0_15px_-3px_rgba(99,102,241,0.25)] disabled:cursor-not-allowed disabled:opacity-50 pl-10",
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
          "flex min-h-[120px] w-full rounded-2xl border border-slate-200/90 bg-white px-3.5 py-3 text-sm font-bold text-slate-900 shadow-2xs transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus-visible:outline-hidden focus-visible:border-indigo-600 focus-visible:ring-3 focus-visible:ring-indigo-500/20 focus-visible:shadow-[0_0_15px_-3px_rgba(99,102,241,0.25)] disabled:cursor-not-allowed disabled:opacity-50",
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
