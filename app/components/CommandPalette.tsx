"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, Compass, FileText, Check, Link2, X, BookOpen, Folder } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import Fuse from "fuse.js";

interface SearchItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Navigation" | "Quick Actions" | "Projects" | "Blog Posts";
  shortcut?: string[];
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);
  
  // Dynamic search data from API
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Fetch posts and projects search index on mount
  useEffect(() => {
    let active = true;
    const fetchSearchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/search");
        if (!res.ok) throw new Error("Search data load failed");
        const data = await res.json();
        if (active) {
          setBlogPosts(data.posts || []);
          setProjectsData(data.projects || []);
        }
      } catch (err) {
        console.error("Failed to load command palette search index:", err);
      } finally {
        if (active) setIsLoading(false);
      }
    };

    fetchSearchData();
    return () => {
      active = false;
    };
  }, []);

  // 2. Build the unified items list
  const allItems = useMemo<SearchItem[]>(() => {
    const list: SearchItem[] = [
      // Navigation
      {
        id: "nav-home",
        title: "Go to Home Page",
        subtitle: "Return to the main hero section and overview",
        category: "Navigation",
        shortcut: ["G", "H"],
        icon: Compass,
        action: () => { router.push("/"); setIsOpen(false); },
      },
      {
        id: "nav-about",
        title: "Go to About Page",
        subtitle: "My professional background and credentials",
        category: "Navigation",
        shortcut: ["G", "A"],
        icon: Compass,
        action: () => { router.push("/about"); setIsOpen(false); },
      },
      {
        id: "nav-skills",
        title: "Go to Skills Page",
        subtitle: "DevOps, cloud computing, and backend skillsets",
        category: "Navigation",
        shortcut: ["G", "S"],
        icon: Compass,
        action: () => { router.push("/skills"); setIsOpen(false); },
      },
      {
        id: "nav-projects",
        title: "Go to Projects Page",
        subtitle: "Explore interactive software engineering portfolio projects",
        category: "Navigation",
        shortcut: ["G", "P"],
        icon: Compass,
        action: () => { router.push("/projects"); setIsOpen(false); },
      },
      {
        id: "nav-blog",
        title: "Go to Blog Page",
        subtitle: "Technical articles, guides, and architecture deep dives",
        category: "Navigation",
        shortcut: ["G", "B"],
        icon: Compass,
        action: () => { router.push("/blog"); setIsOpen(false); },
      },
      {
        id: "nav-contact",
        title: "Go to Contact Page",
        subtitle: "Get in touch or leave feedback",
        category: "Navigation",
        shortcut: ["G", "C"],
        icon: Compass,
        action: () => { router.push("/contact"); setIsOpen(false); },
      },
      // Actions
      {
        id: "act-email",
        title: copiedEmail ? "Email Copied!" : "Copy Support Email",
        subtitle: "support@ajitdev.com",
        category: "Quick Actions",
        icon: copiedEmail ? Check : Link2,
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
        subtitle: "https://github.com/ajitdev01",
        category: "Quick Actions",
        icon: copiedGithub ? Check : Link2,
        action: () => {
          navigator.clipboard.writeText("https://github.com/ajitdev01");
          setCopiedGithub(true);
          trackEvent("command_palette_action", { action: "copy_github" });
          setTimeout(() => setCopiedGithub(false), 2000);
        },
      },
    ];

    // Append dynamic Projects
    projectsData.forEach((proj) => {
      list.push({
        id: `proj-${proj.id}`,
        title: proj.title,
        subtitle: `Project • ${proj.tech.slice(0, 3).join(", ")}`,
        category: "Projects",
        icon: Folder,
        action: () => {
          trackEvent("command_palette_project_click", { projectId: proj.id, title: proj.title });
          if (proj.github && proj.github !== "#") {
            window.open(proj.github, "_blank");
          } else {
            router.push("/projects");
          }
          setIsOpen(false);
        },
      });
    });

    // Append dynamic Blog Posts
    blogPosts.forEach((post) => {
      list.push({
        id: `post-${post.slug}`,
        title: post.title,
        subtitle: `Article • in ${post.category}`,
        category: "Blog Posts",
        icon: BookOpen,
        action: () => {
          trackEvent("command_palette_blog_click", { slug: post.slug, title: post.title });
          router.push(`/blog/${post.slug}`);
          setIsOpen(false);
        },
      });
    });

    return list;
  }, [router, copiedEmail, copiedGithub, blogPosts, projectsData]);

  // 3. Initialize Fuse for unified search
  const fuse = useMemo(() => {
    return new Fuse(allItems, {
      keys: [
        { name: "title", weight: 0.5 },
        { name: "subtitle", weight: 0.3 },
        { name: "category", weight: 0.2 },
      ],
      threshold: 0.4,
      ignoreLocation: true,
    });
  }, [allItems]);

  // 4. Filter items based on query
  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      // Return navigation & actions when query is empty to avoid cluttering with all blog posts
      return allItems.filter(item => item.category === "Navigation" || item.category === "Quick Actions");
    }
    return fuse.search(query).map(result => result.item);
  }, [query, allItems, fuse]);

  // 5. Global Keyboard Hook to toggle Command Palette (Ctrl+K or ⌘K)
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

  // 6. Manage scroll locks and inputs autofocus
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

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredItems.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredItems.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-gray-950/40 backdrop-blur-[4px] transition-opacity"
      />

      {/* Palette Container */}
      <div
        ref={containerRef}
        onKeyDown={handleKeyDown}
        className="relative w-full max-w-lg bg-white/95 border border-gray-200 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[60vh] text-gray-800 animate-in fade-in zoom-in-95 duration-100"
      >
        {/* Search Bar */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100 bg-gray-50/50">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search files, routes, projects, articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none text-sm text-gray-800 placeholder-gray-400 w-full"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search query"
              className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-all"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-sans font-medium text-gray-400 bg-white border border-gray-200 rounded shadow-sm select-none">
            ESC
          </kbd>
        </div>

        {/* Scrollable Results Area */}
        <div className="flex-1 overflow-y-auto p-2 min-h-[200px]">
          {filteredItems.length > 0 ? (
            <div className="space-y-1">
              {filteredItems.map((item, index) => {
                const Icon = item.icon;
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-left ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10 font-medium"
                        : "text-gray-750 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-1.5 rounded-lg ${isSelected ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-400"}`}>
                        <Icon className="w-4 h-4 flex-shrink-0" />
                      </div>
                      <div className="min-w-0 flex flex-col">
                        <span className={`text-xs font-semibold truncate leading-tight ${
                          isSelected ? "text-white" : "text-gray-900"
                        }`}>{item.title}</span>
                        {item.subtitle && (
                          <span className={`text-[10px] truncate mt-0.5 leading-none ${
                            isSelected ? "text-indigo-100" : "text-gray-500"
                          }`}>
                            {item.subtitle}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-605 border border-gray-200/50"
                      }`}>
                        {item.category}
                      </span>
                      {item.shortcut && (
                        <div className="flex items-center gap-0.5">
                          {item.shortcut.map((key) => (
                            <kbd
                              key={key}
                              className={`text-[9px] font-sans font-semibold px-1 rounded shadow-xs select-none ${
                                isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500 border border-gray-200"
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
            <div className="text-center py-10 text-gray-400 text-xs">
              No matching commands, pages, or projects found.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between text-[10px] text-gray-500 select-none">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">↑↓</span> navigate
            </span>
            <span className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">Enter</span> select
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
