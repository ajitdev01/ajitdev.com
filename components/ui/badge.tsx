import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info" | "primary";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-extrabold transition-colors focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:ring-offset-2";

  const variants = {
    default: "border-transparent bg-indigo-600 text-white shadow-xs",
    primary: "border-transparent bg-indigo-600 text-white shadow-xs",
    secondary: "border-transparent bg-slate-100 text-slate-900",
    destructive: "border-transparent bg-rose-500 text-white shadow-xs",
    outline: "text-slate-800 border-slate-200 bg-white",
    success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600",
    warning: "border-amber-500/20 bg-amber-500/10 text-amber-600",
    info: "border-blue-500/20 bg-blue-500/10 text-blue-600",
  };

  return (
    <div
      className={cn(baseStyles, variants[variant] || variants.default, className)}
      {...props}
    />
  );
}

export { Badge };
