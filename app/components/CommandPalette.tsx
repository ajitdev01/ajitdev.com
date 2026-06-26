"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, Compass, FileText, Check, Link2, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface CommandItem {
  id: string;
  title: string;
  category: string;
  shortcut?: string[];
  action: () => void;
  icon: React.ComponentType<{ className?: string }>;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);
  
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Define command items
  const commands = useMemo<CommandItem[]>(() => {
    const list: CommandItem[] = [
      // Navigation
      {
        id: "nav-home",
        title: "Go to Home Page",
        category: "Navigation",
        shortcut: ["G", "H"],
        icon: Compass,
        action: () => { router.push("/"); setIsOpen(false); },
      },
      {
        id: "nav-about",
        title: "Go to About Page",
        category: "Navigation",
        shortcut: ["G", "A"],
        icon: Compass,
        action: () => { router.push("/about"); setIsOpen(false); },
      },
      {
        id: "nav-skills",
        title: "Go to Skills Page",
        category: "Navigation",
        shortcut: ["G", "S"],
        icon: Compass,
        action: () => { router.push("/skills"); setIsOpen(false); },
      },
      {
        id: "nav-projects",
        title: "Go to Projects Page",
        category: "Navigation",
        shortcut: ["G", "P"],
        icon: Compass,
        action: () => { router.push("/projects"); setIsOpen(false); },
      },
      {
        id: "nav-blog",
        title: "Go to Blog Page",
        category: "Navigation",
        shortcut: ["G", "B"],
        icon: Compass,
        action: () => { router.push("/blog"); setIsOpen(false); },
      },
      {
        id: "nav-contact",
        title: "Go to Contact Page",
        category: "Navigation",
        shortcut: ["G", "C"],
        icon: Compass,
        action: () => { router.push("/contact"); setIsOpen(false); },
      },
      // Actions
      {
        id: "act-email",
        title: copiedEmail ? "Email Copied!" : "Copy Support Email",
        category: "Quick Actions",
        icon: copiedEmail ? Check : FileText,
        action: () => {
          navigator.clipboard.writeText("support@ajitdev.com");
          setCopiedEmail(true);
          trackEvent("command_palette_action", { action: "copy_email" });
          setTimeout(() => setCopiedEmail(false), 2000);
        },
      },
      {
        id: "act-github",
        title: copiedGithub ? "Github Link Copied!" : "Copy GitHub URL",
        category: "Quick Actions",
        icon: copiedGithub ? Check : Link2,
        action: () => {
          navigator.clipboard.writeText("https://github.com/ajitdev01");
          setCopiedGithub(true);
          trackEvent("command_palette_action", { action: "copy_github" });
          setTimeout(() => setCopiedGithub(false), 2000);
        },
      },
      // Quick Portfolio Projects
      {
        id: "proj-irctc",
        title: "Project: IRCTC Railway System Clone",
        category: "Projects",
        icon: FileText,
        action: () => { router.push("/projects"); setIsOpen(false); },
      },
      {
        id: "proj-mern",
        title: "Project: MERN Full Stack Repository",
        category: "Projects",
        icon: FileText,
        action: () => { router.push("/projects"); setIsOpen(false); },
      },
      {
        id: "proj-lamp",
        title: "Project: LAMP Stack Authentication System",
        category: "Projects",
        icon: FileText,
        action: () => { router.push("/projects"); setIsOpen(false); },
      },
      {
        id: "proj-dsa",
        title: "Project: DSA Journey Repository (400+ solved)",
        category: "Projects",
        icon: FileText,
        action: () => { router.push("/projects"); setIsOpen(false); },
      },
    ];
    return list;
  }, [router, copiedEmail, copiedGithub]);

  // 2. Filter commands
  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const cleanQuery = query.toLowerCase().trim();
    return commands.filter(
      (cmd) =>
        cmd.title.toLowerCase().includes(cleanQuery) ||
        cmd.category.toLowerCase().includes(cleanQuery)
    );
  }, [query, commands]);

  // 3. Listen to keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        trackEvent("command_palette_toggle", { source: "keyboard" });
      }

      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 4. Focus input when palette opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      setSelectedIndex(0);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 5. Navigate through filtered results via arrow keys
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      {/* Glassmorphic Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-gray-950/40 backdrop-blur-xs transition-opacity"
      />

      {/* Palette Card */}
      <div
        ref={containerRef}
        onKeyDown={handleKeyDown}
        className="relative w-full max-w-lg bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[50vh] animate-in fade-in zoom-in-95 duration-100"
      >
        {/* Search Input Box */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100 bg-gray-50/50">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or page name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none text-sm text-gray-800 placeholder-gray-400"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 hover:bg-gray-200/60 rounded-full text-gray-400 hover:text-gray-600 transition-all"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[9px] font-sans font-medium text-gray-400 bg-white border border-gray-200 rounded shadow-xs select-none">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="flex-1 overflow-y-auto p-2">
          {filteredCommands.length > 0 ? (
            <div className="space-y-1">
              {filteredCommands.map((cmd, index) => {
                const Icon = cmd.icon;
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-left text-xs ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/10 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-gray-400"}`} />
                      <span>{cmd.title}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400 border border-gray-200/55"
                      }`}>
                        {cmd.category}
                      </span>
                      {cmd.shortcut && (
                        <div className="flex items-center gap-0.5">
                          {cmd.shortcut.map((key) => (
                            <kbd
                              key={key}
                              className={`text-[9px] font-sans font-semibold px-1 rounded shadow-xs select-none ${
                                isSelected ? "bg-white/20 text-white" : "bg-white text-gray-400 border border-gray-200"
                              }`}
                            >
                              {key}
                            </kbd>
                          ))}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 text-xs">
              No matching commands or pages found.
            </div>
          )}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-2 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between text-[10px] text-gray-400 select-none">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <span className="font-bold">↑↓</span> to navigate
            </span>
            <span className="flex items-center gap-1">
              <span className="font-bold">Enter</span> to select
            </span>
          </div>
          <span>
            Ajit Dev Command Hub
          </span>
        </div>
      </div>
    </div>
  );
}
