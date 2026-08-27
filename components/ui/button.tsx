"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "contained";
  size?: "default" | "sm" | "lg" | "small" | "large" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-extrabold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer";

    const variants = {
      default: "bg-indigo-600 text-white shadow-xs hover:bg-indigo-700 active:scale-[0.98]",
      contained: "bg-indigo-600 text-white shadow-xs hover:bg-indigo-700 active:scale-[0.98]",
      destructive: "bg-red-600 text-white shadow-xs hover:bg-red-700 active:scale-[0.98]",
      outline:
        "border border-slate-200 bg-white text-slate-800 shadow-xs hover:bg-slate-50 hover:text-slate-900 border-slate-200 active:scale-[0.98]",
      secondary: "bg-slate-100 text-slate-900 shadow-xs hover:bg-slate-200 active:scale-[0.98]",
      ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98]",
      link: "text-indigo-600 underline-offset-4 hover:underline p-0 h-auto font-bold",
    };

    const sizes = {
      default: "h-10 px-4 py-2 text-xs uppercase tracking-wider",
      sm: "h-8 px-3 text-xs",
      small: "h-8 px-3 text-xs",
      lg: "h-12 px-6 text-sm",
      large: "h-12 px-6 text-sm",
      icon: "h-9 w-9 p-0",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant] || variants.default, sizes[size] || sizes.default, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
