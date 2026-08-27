"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = "single", defaultValue, className, children, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<string[]>(() => {
      if (!defaultValue) return [];
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    });

    const toggleItem = React.useCallback(
      (val: string) => {
        setOpenItems((prev) => {
          if (type === "single") {
            return prev.includes(val) ? [] : [val];
          }
          return prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val];
        });
      },
      [type]
    );

    return (
      <AccordionContext.Provider value={{ openItems, toggleItem }}>
        <div ref={ref} className={cn("space-y-3", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-value={value}
        className={cn(
          "rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors",
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { itemValue: value } as any);
          }
          return child;
        })}
      </div>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  itemValue?: string;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ itemValue, className, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    const isOpen = itemValue ? context?.openItems.includes(itemValue) : false;

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => itemValue && context?.toggleItem(itemValue)}
        className={cn(
          "flex w-full items-center justify-between p-4 text-left font-extrabold text-slate-900 text-sm transition-all hover:bg-slate-50 cursor-pointer select-none",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200",
            isOpen && "rotate-180 text-indigo-600"
          )}
        />
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  itemValue?: string;
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ itemValue, className, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    const isOpen = itemValue ? context?.openItems.includes(itemValue) : false;

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "px-4 pb-4 pt-1 text-sm font-medium text-slate-600 border-t border-slate-100 bg-slate-50/50 animate-in fade-in-50 duration-200",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
