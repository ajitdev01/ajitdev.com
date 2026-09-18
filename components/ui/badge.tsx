import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info" | "primary" | "gradient" | "glass";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-extrabold transition-all duration-200 select-none";

  const variants = {
    default: "border-transparent bg-indigo-600 text-white shadow-xs shadow-indigo-500/20",
    primary: "border-transparent bg-indigo-600 text-white shadow-xs shadow-indigo-500/20",
    gradient: "border-transparent bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xs shadow-indigo-500/25",
    glass: "border-slate-200/80 bg-white/80 backdrop-blur-md text-slate-800 shadow-2xs",
    secondary: "border-slate-200/60 bg-slate-100 text-slate-800",
    destructive: "border-transparent bg-rose-600 text-white shadow-xs shadow-rose-500/20",
    outline: "text-slate-800 border-slate-200 bg-white hover:bg-slate-50",
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
