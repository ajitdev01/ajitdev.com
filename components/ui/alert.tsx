import * as React from "react";
import { cn } from "@/lib/utils";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive" | "success" | "warning";
  icon?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", icon, children, ...props }, ref) => {
    const variants = {
      default: "bg-indigo-50 text-indigo-900 border-indigo-200",
      destructive: "bg-rose-50 text-rose-900 border-rose-200",
      success: "bg-emerald-50 text-emerald-900 border-emerald-200",
      warning: "bg-amber-50 text-amber-900 border-amber-200",
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative flex items-start gap-3 w-full rounded-2xl border p-4 text-sm font-bold shadow-xs",
          variants[variant] || variants.default,
          className
        )}
        {...props}
      >
        {icon && <div className="shrink-0 mt-0.5">{icon}</div>}
        <div className="flex-1 text-xs sm:text-sm font-bold leading-relaxed">{children}</div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

export { Alert };
