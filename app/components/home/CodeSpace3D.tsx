"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileCode2,
  Folder,
  ChevronRight,
  ChevronDown,
  Play,
  Terminal,
  Monitor,
  Smartphone,
  Tablet,
  GitBranch,
  RefreshCw,
  FolderOpen,
  Code2,
  Minimize2,
  Maximize2,
  X,
  Search,
  Bell,
  Sliders,
  Settings,
  HelpCircle,
  Copy,
  Check,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface FilesData {
  [path: string]: {
    name: string;
    content: string;
    language: string;
  };
}

// ── Default Files ─────────────────────────────────────────────────────────────
const DEFAULT_FILES: FilesData = {
  "app/page.tsx": {
    name: "page.tsx",
    language: "typescript",
    content: `"use client";
import React, { useState } from "react";

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="p-8 text-center bg-indigo-50/50 min-h-screen flex flex-col items-center justify-center font-sans">
      <h1 className="text-3xl font-black text-indigo-600 animate-bounce">
        Hello ajitdev.com! 🚀
      </h1>
      <p className="text-slate-600 mt-2 text-sm">
        Build high-performance Cloud, DevOps, and Full-Stack web products.
      </p>
      
      <div className="mt-6 flex flex-col gap-3 items-center">
        <button 
          onClick={() => setLikes(l => l + 1)}
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold shadow-md hover:bg-indigo-700 active:scale-95 transition-all text-xs cursor-pointer"
        >
          👍 Click to Like: {likes}
        </button>
        <span className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wider">
          Live Interactive Sandbox
        </span>
      </div>
    </div>
  );
}`,
  },
  "components/Hero.tsx": {
    name: "Hero.tsx",
    language: "typescript",
    content: `import React from "react";

export function Hero() {
  return (
    <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold">Ajit Dev Portfolio</h2>
      <p className="text-xs text-slate-400 mt-1">DevOps, DevSecOps, &amp; Cloud Security Labs</p>
    </div>
  );
}`,
  },
  "components/Navbar.tsx": {
    name: "Navbar.tsx",
    language: "typescript",
    content: `import React from "react";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white border-b border-slate-200">
      <span className="font-bold text-slate-800">ajitdev.com</span>
      <div className="flex gap-4 text-xs text-slate-600 font-semibold">
        <span>Projects</span>
        <span>Skills</span>
        <span>Resume</span>
      </div>
    </nav>
  );
}`,
  },
  "globals.css": {
    name: "globals.css",
    language: "css",
    content: `body {
  background-color: #f8fafc;
  color: #0f172a;
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
}`,
  },
  "package.json": {
    name: "package.json",
    language: "json",
    content: `{
  "name": "ajitdev-sandbox",
  "version": "1.0.0",
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^12.0.0"
  }
}`,
  },
};

// ── Simple Custom Syntax Highlighter Tokenizer ─────────────────────────────────
function highlightSyntax(code: string, lang: string) {
  if (lang === "json") {
    return <span className="text-slate-700">{code}</span>;
  }
  if (lang === "css") {
    return <span className="text-slate-600">{code}</span>;
  }

  // Tokenize JS/TS on the fly
  const keyWords = ["const", "await", "return", "async", "import", "export", "default", "function", "let", "var", "from"];
  const parts: React.ReactNode[] = [];
  let currentWord = "";
  let insideString = false;
  let stringChar = "";
  let insideComment = false;

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    // Single-line comment handling
    if (!insideString && char === "/" && code[i + 1] === "/") {
      if (currentWord) {
        parts.push(renderToken(currentWord, keyWords));
        currentWord = "";
      }
      insideComment = true;
    }

    if (insideComment) {
      if (char === "\n") {
        parts.push(<span key={`comment-${i}`} className="text-slate-400 italic">{currentWord}</span>);
        parts.push(<span key={`newline-${i}`} className="text-slate-600">{"\n"}</span>);
        currentWord = "";
        insideComment = false;
      } else {
        currentWord += char;
      }
      continue;
    }

    // String literal handling
    if (!insideComment && (char === '"' || char === "'" || char === "`") && (i === 0 || code[i - 1] !== "\\")) {
      if (!insideString) {
        if (currentWord) {
          parts.push(renderToken(currentWord, keyWords));
          currentWord = "";
        }
        insideString = true;
        stringChar = char;
        currentWord += char;
      } else if (char === stringChar) {
        currentWord += char;
        parts.push(<span key={`str-${i}`} className="text-amber-600 font-medium">{currentWord}</span>);
        currentWord = "";
        insideString = false;
      } else {
        currentWord += char;
      }
      continue;
    }

    if (insideString) {
      currentWord += char;
      continue;
    }

    // Delimiters
    if (/[ \t\(\)\{\}\[\]\.;,=\+\-\*\/!<>?]/.test(char)) {
      if (currentWord) {
        parts.push(renderToken(currentWord, keyWords));
        currentWord = "";
      }
      // Newlines rendered exactly
      if (char === "\n") {
        parts.push(<span key={`newline-${i}`}>{"\n"}</span>);
      } else {
        parts.push(<span key={`delim-${i}`} className="text-slate-400">{char}</span>);
      }
    } else {
      currentWord += char;
    }
  }

  if (currentWord) {
    parts.push(renderToken(currentWord, keyWords));
  }

  return <>{parts}</>;
}

function renderToken(word: string, keyWords: string[]): React.ReactNode {
  if (keyWords.includes(word)) {
    return <span key={word} className="text-indigo-600 font-bold">{word}</span>;
  }
  if (/^[A-Z][a-zA-Z0-9]*$/.test(word)) {
    return <span key={word} className="text-violet-600 font-semibold">{word}</span>;
  }
  if (/^[0-9]+$/.test(word)) {
    return <span key={word} className="text-amber-650">{word}</span>;
  }
  return <span key={word} className="text-slate-700">{word}</span>;
}

// ── Main Premium IDE Component ────────────────────────────────────────────────
export default function CodeSpace3D() {
  // --- States ---
  const [files, setFiles] = useState<FilesData>(DEFAULT_FILES);
  const [activeTab, setActiveTab] = useState<string>("app/page.tsx");
  const [openTabs, setOpenTabs] = useState<string[]>(["app/page.tsx", "package.json"]);
  const [explorerOpen, setExplorerOpen] = useState(true);
  const [explorerFolders, setExplorerFolders] = useState({ app: true, components: true });
  
  // Layout states
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [previewActive, setPreviewActive] = useState(false); // Live preview output toggle
  
  // Compilation states
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileProgress, setCompileProgress] = useState(0);
  
  // Terminal commands shell state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<Array<{ text: string; type: "input" | "system" | "error" | "success" }>>([
    { text: "AjitDev Online Compiler v1.0.0", type: "system" },
    { text: "Type 'help' to see available shell commands.", type: "system" },
    { text: "", type: "system" },
  ]);
  
  // Toast notifications
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);
  
  // Clipboard
  const [copied, setCopied] = useState(false);
  const [controlHover, setControlHover] = useState(false);
  
  // Code editor text area cursor track
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const lineIndicatorRef = useRef<HTMLDivElement>(null);
  const [editorCursor, setEditorCursor] = useState({ line: 1, col: 1 });

  // Escape listener to exit fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
        showToast("Exited Fullscreen", "info");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  // Utility toast generator
  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Switch tab safely
  const selectTab = (path: string) => {
    if (!openTabs.includes(path)) {
      setOpenTabs([...openTabs, path]);
    }
    setActiveTab(path);
  };

  // Close tab
  const closeTab = (e: React.MouseEvent, path: string) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(t => t !== path);
    setOpenTabs(newTabs);
    if (activeTab === path && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
    }
  };

  // Handle live textarea editing
  const handleCodeChange = (val: string) => {
    setFiles({
      ...files,
      [activeTab]: {
        ...files[activeTab],
        content: val,
      },
    });
  };

  // Track lines & cols
  const trackCursor = () => {
    const el = editorRef.current;
    if (!el) return;
    const textBeforeCursor = el.value.substring(0, el.selectionStart);
    const lines = textBeforeCursor.split("\n");
    setEditorCursor({
      line: lines.length,
      col: lines[lines.length - 1].length + 1,
    });
  };

  // Replay code execution
  const runCode = () => {
    setIsCompiling(true);
    setCompileProgress(0);
    setPreviewActive(false);
    showToast("Compiling assets...", "info");

    const interval = setInterval(() => {
      setCompileProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setIsCompiling(false);
          setPreviewActive(true);
          showToast("Build Successful! Output loaded.", "success");
          // Append shell trigger logs
          setTerminalOutput(prev => [
            ...prev,
            { text: "$ npm run build && npm run dev", type: "input" },
            { text: "> Bundling package...", type: "system" },
            { text: "> Compiled page.tsx successfully in 420ms ✅", type: "success" },
            { text: "> Live preview loaded at http://localhost:3000", type: "success" },
          ]);
          return 100;
        }
        return p + 20;
      });
    }, 150);
  };

  // Copy code
  const handleCopyCode = () => {
    navigator.clipboard.writeText(files[activeTab].content);
    setCopied(true);
    showToast("Copied code to clipboard!", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle Terminal CLI logic
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let reply: Array<{ text: string; type: "input" | "system" | "error" | "success" }> = [
      { text: `$ ${terminalInput}`, type: "input" },
    ];

    if (cmd === "help") {
      reply.push(
        { text: "Available commands:", type: "system" },
        { text: "  ls            - List project tree", type: "system" },
        { text: "  cat <file>    - Output code of a file", type: "system" },
        { text: "  npm run build - Compile the current files", type: "system" },
        { text: "  git status    - Show local git status", type: "system" },
        { text: "  clear         - Clear terminal output", type: "system" },
      );
    } else if (cmd === "clear") {
      setTerminalOutput([]);
      setTerminalInput("");
      return;
    } else if (cmd === "ls") {
      reply.push(
        { text: "app/page.tsx", type: "system" },
        { text: "components/Hero.tsx", type: "system" },
        { text: "components/Navbar.tsx", type: "system" },
        { text: "globals.css", type: "system" },
        { text: "package.json", type: "system" },
      );
    } else if (cmd.startsWith("cat ")) {
      const target = cmd.slice(4).trim();
      // find matched key in files
      const matchKey = Object.keys(files).find(k => k.endsWith(target));
      if (matchKey) {
        reply.push({ text: files[matchKey].content, type: "system" });
      } else {
        reply.push({ text: `cat: ${target}: File not found`, type: "error" });
      }
    } else if (cmd === "git status") {
      reply.push(
        { text: "On branch main", type: "system" },
        { text: "Your branch is up to date with 'origin/main'.", type: "system" },
        { text: "nothing to commit, working tree clean", type: "success" },
      );
    } else if (cmd === "npm run build" || cmd === "npm run dev") {
      runCode();
      setTerminalInput("");
      return;
    } else {
      reply.push({ text: `bash: command not found: ${cmd}. Type 'help' for support.`, type: "error" });
    }

    setTerminalOutput(prev => [...prev, ...reply]);
    setTerminalInput("");
  };

  // Custom mock execution renderer logic
  const renderPreviewOutput = () => {
    // If compiling, show spinner
    if (isCompiling) {
      return (
        <div className="flex flex-col items-center justify-center h-full bg-slate-50 text-slate-600 p-8">
          <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin mb-3" />
          <p className="text-xs font-bold font-mono">Building project bundle...</p>
          <div className="w-48 bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
            <div className="bg-indigo-600 h-full transition-all duration-150" style={{ width: `${compileProgress}%` }} />
          </div>
        </div>
      );
    }

    // Default static fallback or compiled page state
    if (!previewActive) {
      return (
        <div className="flex flex-col items-center justify-center h-full bg-slate-50 text-slate-500 p-8 text-center">
          <Code2 className="w-8 h-8 text-slate-400 mb-2" />
          <p className="text-xs font-bold">Sandbox Offline</p>
          <p className="text-[11px] text-slate-400 mt-1">Click the "▶ Run" button top-right to compile code.</p>
        </div>
      );
    }

    // Simple React Mock Simulator
    const pageCode = files["app/page.tsx"].content;
    const likesMatch = pageCode.match(/likes\s*,\s*setLikes/);
    const likeButton = !!likesMatch;

    return (
      <div className="h-full bg-slate-50 flex flex-col">
        {/* Mock browser Address bar */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border-b border-slate-200 text-[10px] text-slate-400 select-none">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-slate-200" />
            <span className="w-2 h-2 rounded-full bg-slate-200" />
            <span className="w-2 h-2 rounded-full bg-slate-200" />
          </div>
          <div className="flex-1 bg-slate-100 rounded px-2 py-0.5 text-center text-slate-600 font-mono text-[9px] truncate">
            localhost:3000/
          </div>
          <RefreshCw className="w-3 h-3 text-slate-400 cursor-pointer hover:text-slate-600" onClick={runCode} />
        </div>

        {/* Dynamic preview rendered dynamically */}
        <div className="flex-1 overflow-auto p-6 flex flex-col items-center justify-center text-center">
          <div className="space-y-4">
            <h1 className="text-2xl font-black text-indigo-600 tracking-tight">
              Hello ajitdev.com! 🚀
            </h1>
            <p className="text-xs text-slate-600 max-w-[280px]">
              Build high-performance Cloud, DevOps, and Full-Stack web products.
            </p>
            {likeButton ? (
              <MockLikeContainer />
            ) : (
              <p className="text-[10px] text-red-500 font-semibold italic">Code modified — click Run to update logic.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Toast Notifications */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-20 right-4 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl border bg-white shadow-xl text-xs font-semibold"
            style={{
              borderColor: toast.type === "success" ? "#bbf7d0" : toast.type === "error" ? "#fecaca" : "#e2e8f0",
              color: toast.type === "success" ? "#15803d" : toast.type === "error" ? "#b91c1c" : "#334155",
            }}
          >
            {toast.type === "success" && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
            {toast.type === "error" && <span className="w-2 h-2 rounded-full bg-red-500" />}
            {toast.type === "info" && <span className="w-2 h-2 rounded-full bg-indigo-500" />}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isClosed ? (
          <motion.div
            key="ide-workspace"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              width: isFullscreen ? "100%" : "auto",
              height: isFullscreen ? "100%" : "auto",
              position: isFullscreen ? "fixed" : "relative",
              top: isFullscreen ? 0 : "auto",
              left: isFullscreen ? 0 : "auto",
              zIndex: isFullscreen ? 1000 : 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: -20,
              rotateX: -10,
              transition: { duration: 0.25, ease: "easeIn" },
            }}
            transition={{ type: "spring", damping: 25, stiffness: 150 }}
            className={`
              w-full border border-slate-200 bg-white shadow-2xl flex flex-col overflow-hidden
              ${isFullscreen ? "h-screen" : "rounded-3xl"}
              ${isMinimized ? "h-[42px]" : "h-[620px]"}
            `}
          >
            {/* ════ TOP CHROME BAR ════ */}
            <div 
              className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200 select-none shrink-0"
              onMouseEnter={() => setControlHover(true)}
              onMouseLeave={() => setControlHover(false)}
            >
              {/* macOS Dots */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsClosed(true);
                    showToast("Editor Workspace Closed", "info");
                  }}
                  className="w-3 h-3 bg-red-400 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors cursor-pointer border-0 p-0 text-[8px] text-red-950 font-bold"
                >
                  {controlHover && "×"}
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-3 h-3 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors cursor-pointer border-0 p-0 text-[8px] text-yellow-955 font-bold"
                >
                  {controlHover && "-"}
                </button>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="w-3 h-3 bg-green-400 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors cursor-pointer border-0 p-0 text-[6px] text-green-950 font-bold"
                >
                  {controlHover && "+"}
                </button>
              </div>

              {/* Title & Branch status */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 font-mono">
                <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-400">main</span>
                <span className="text-slate-300">/</span>
                <span>{activeTab}</span>
              </div>

              {/* Actions Right */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-700 transition-colors cursor-pointer border border-transparent hover:border-slate-200"
                  title="Copy current file contents"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={runCode}
                  disabled={isCompiling}
                  className="flex items-center gap-1.5 px-3 py-1 bg-indigo-650 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer hover:shadow-md active:scale-95"
                >
                  <Play className="w-3 h-3 fill-white" />
                  Run
                </button>
              </div>
            </div>

            {/* ════ MAIN WRAPPER ════ */}
            {!isMinimized && (
              <div className="flex-1 flex overflow-hidden min-h-0 bg-white">
                {/* ─ EXPLORER SIDEBAR ─ */}
                {explorerOpen && (
                  <div className="w-[180px] bg-slate-50 border-r border-slate-200 flex flex-col select-none shrink-0 text-slate-600 font-sans text-xs">
                    <div className="px-3 py-2 text-[10px] uppercase font-black tracking-widest text-slate-400 border-b border-slate-200 flex justify-between items-center">
                      <span>Explorer</span>
                      <FolderOpen className="w-3 h-3 text-slate-400" />
                    </div>

                    <div className="p-2 space-y-1">
                      {/* folder 1: app */}
                      <div>
                        <div
                          onClick={() => setExplorerFolders(f => ({ ...f, app: !f.app }))}
                          className="flex items-center gap-1 px-1.5 py-1 hover:bg-slate-200/60 rounded-md cursor-pointer text-[11px] font-bold text-slate-700"
                        >
                          {explorerFolders.app ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                          <Folder className="w-3.5 h-3.5 text-indigo-400" />
                          <span>app</span>
                        </div>
                        {explorerFolders.app && (
                          <div className="pl-6 space-y-0.5 mt-0.5">
                            <div
                              onClick={() => selectTab("app/page.tsx")}
                              className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded cursor-pointer ${activeTab === "app/page.tsx" ? "bg-indigo-50 text-indigo-600 font-semibold" : "hover:bg-slate-200/50"}`}
                            >
                              <FileCode2 className="w-3 h-3" />
                              <span>page.tsx</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* folder 2: components */}
                      <div>
                        <div
                          onClick={() => setExplorerFolders(f => ({ ...f, components: !f.components }))}
                          className="flex items-center gap-1 px-1.5 py-1 hover:bg-slate-200/60 rounded-md cursor-pointer text-[11px] font-bold text-slate-700"
                        >
                          {explorerFolders.components ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                          <Folder className="w-3.5 h-3.5 text-indigo-400" />
                          <span>components</span>
                        </div>
                        {explorerFolders.components && (
                          <div className="pl-6 space-y-0.5 mt-0.5">
                            {["Hero.tsx", "Navbar.tsx"].map(f => {
                              const path = `components/${f}`;
                              return (
                                <div
                                  key={f}
                                  onClick={() => selectTab(path)}
                                  className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded cursor-pointer ${activeTab === path ? "bg-indigo-50 text-indigo-600 font-semibold" : "hover:bg-slate-200/50"}`}
                                >
                                  <FileCode2 className="w-3 h-3" />
                                  <span>{f}</span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* root level files */}
                      {["globals.css", "package.json"].map(f => (
                        <div
                          key={f}
                          onClick={() => selectTab(f)}
                          className={`flex items-center gap-1.5 px-1.5 py-1 rounded cursor-pointer text-[11px] ${activeTab === f ? "bg-indigo-50 text-indigo-600 font-semibold" : "hover:bg-slate-200/60"}`}
                        >
                          <FileCode2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ─ MAIN EDITING + PREVIEW REGION ─ */}
                <div className="flex-1 flex flex-col min-w-0">
                  {/* File tabs row */}
                  <div className="flex items-center bg-slate-50 border-b border-slate-200 overflow-x-auto shrink-0 select-none">
                    {openTabs.map(t => (
                      <div
                        key={t}
                        onClick={() => setActiveTab(t)}
                        className={`
                          flex items-center gap-1.5 px-3 py-2 border-r border-slate-200 cursor-pointer text-xs transition-colors shrink-0
                          ${activeTab === t ? "bg-white text-slate-800 font-semibold border-b border-b-indigo-500" : "text-slate-500 hover:bg-slate-100/60"}
                        `}
                      >
                        <FileCode2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>{files[t].name}</span>
                        <button
                          onClick={(e) => closeTab(e, t)}
                          className="hover:bg-slate-200 rounded-full p-0.5 text-slate-400 hover:text-slate-600 transition-colors border-0 cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Split Pane: Code editor (Left) + Live Preview (Right) */}
                  <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0">
                    
                    {/* Editor view panel */}
                    <div className="flex-1 flex overflow-hidden relative min-w-0 bg-white">
                      {/* Lines gutter gutter */}
                      <div className="w-8 select-none text-right pr-2.5 font-mono text-[11px] text-slate-300 bg-slate-50/50 pt-4 flex flex-col border-r border-slate-100">
                        {files[activeTab].content.split("\n").map((_, i) => (
                          <span key={i} className="leading-[1.7em]">
                            {i + 1}
                          </span>
                        ))}
                      </div>

                      {/* Textarea Overlay + Highlight Layer */}
                      <div className="flex-1 relative overflow-hidden font-mono text-[12px] pt-4 px-3 bg-white leading-[1.7em] min-w-0">
                        {/* Highlights code rendered behind */}
                        <pre className="absolute inset-0 pt-4 px-3 leading-[1.7em] pointer-events-none whitespace-pre-wrap break-all overflow-hidden select-none">
                          <code>
                            {highlightSyntax(files[activeTab].content, files[activeTab].language)}
                          </code>
                        </pre>

                        {/* Interactive Editor textarea */}
                        <textarea
                          ref={editorRef}
                          value={files[activeTab].content}
                          onChange={(e) => handleCodeChange(e.target.value)}
                          onSelect={trackCursor}
                          onKeyUp={trackCursor}
                          spellCheck={false}
                          className="absolute inset-0 pt-4 px-3 bg-transparent border-0 resize-none font-mono text-[12px] leading-[1.7em] text-transparent caret-slate-800 focus:ring-0 focus:outline-none w-full h-full overflow-auto whitespace-pre-wrap break-all"
                        />
                      </div>
                    </div>

                    {/* Preview browser view panel */}
                    <div className="w-full md:w-[300px] border-t md:border-t-0 md:border-l border-slate-200 flex flex-col bg-slate-50 select-none shrink-0 min-h-[160px] md:min-h-0">
                      {/* Device switch bar */}
                      <div className="flex items-center justify-between px-3 py-1.5 bg-white border-b border-slate-200 text-xs shrink-0">
                        <span className="font-bold text-slate-600">App Preview</span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => setPreviewDevice("desktop")}
                            className={`p-1 rounded hover:bg-slate-100 text-slate-500 cursor-pointer ${previewDevice === "desktop" ? "bg-slate-150 text-indigo-600" : ""}`}
                            title="Desktop View"
                          >
                            <Monitor className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setPreviewDevice("tablet")}
                            className={`p-1 rounded hover:bg-slate-100 text-slate-500 cursor-pointer ${previewDevice === "tablet" ? "bg-slate-150 text-indigo-600" : ""}`}
                            title="Tablet View"
                          >
                            <Tablet className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setPreviewDevice("mobile")}
                            className={`p-1 rounded hover:bg-slate-100 text-slate-500 cursor-pointer ${previewDevice === "mobile" ? "bg-slate-150 text-indigo-600" : ""}`}
                            title="Mobile View"
                          >
                            <Smartphone className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Frame render */}
                      <div className="flex-1 p-3 flex justify-center items-center overflow-hidden">
                        <div
                          className="h-full bg-white rounded-xl shadow border border-slate-200 overflow-hidden transition-all duration-300"
                          style={{
                            width:
                              previewDevice === "mobile"
                                ? "180px"
                                : previewDevice === "tablet"
                                ? "240px"
                                : "100%",
                          }}
                        >
                          {renderPreviewOutput()}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* ─ BOTTOM TERMINAL CONSOLE ─ */}
                  <div className="h-[140px] border-t border-slate-200 bg-slate-50/50 flex flex-col min-h-0 shrink-0 font-mono text-[11px] text-slate-600">
                    {/* Header */}
                    <div className="px-3 py-1.5 bg-slate-100 border-b border-slate-200 flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase select-none shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-slate-400" />
                        <span>Interactive Terminal Shell</span>
                      </div>
                      <span className="text-[9px] text-indigo-500 font-normal normal-case">Try: help, ls, cat package.json</span>
                    </div>

                    {/* Output log area */}
                    <div className="flex-1 overflow-auto p-3 space-y-0.5 leading-4">
                      {terminalOutput.map((l, i) => (
                        <div
                          key={i}
                          className="whitespace-pre-wrap break-all"
                          style={{
                            color:
                              l.type === "input"
                                ? "#0ea5e9"
                                : l.type === "error"
                                ? "#ef4444"
                                : l.type === "success"
                                ? "#10b981"
                                : "#475569",
                          }}
                        >
                          {l.text}
                        </div>
                      ))}
                      {/* Interactive prompt shell input form */}
                      <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1 mt-1">
                        <span className="text-indigo-500 shrink-0 select-none">ajitdev@sandbox:~$</span>
                        <input
                          type="text"
                          value={terminalInput}
                          onChange={(e) => setTerminalInput(e.target.value)}
                          className="flex-1 bg-transparent border-0 outline-none p-0 m-0 text-slate-700 font-mono text-[11px] focus:ring-0"
                          autoFocus={false}
                        />
                      </form>
                    </div>
                  </div>

                  {/* ─ FOOTER STATUS BAR ─ */}
                  <div className="px-3 py-1 bg-indigo-600 border-t border-indigo-700 text-indigo-100 flex justify-between items-center text-[10px] font-semibold select-none shrink-0">
                    <div className="flex items-center gap-3">
                      <span>ajitdev-sandbox</span>
                      <span className="text-indigo-400">|</span>
                      <span>UTF-8</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Ln {editorCursor.line}, Col {editorCursor.col}</span>
                      <span className="text-indigo-400">|</span>
                      <span>TypeScript JSX</span>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </motion.div>
        ) : (
          /* Editor Closed Pill */
          <motion.div
            key="restore-editor-pill"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-slate-250 bg-slate-50/50 rounded-3xl text-center select-none"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-150 flex items-center justify-center text-indigo-500 mb-3 shadow-md shadow-indigo-100">
              <Code2 className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-base font-black text-slate-800">IDE Workspace Closed</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-[280px] leading-relaxed">
              Ajit dev premium interactive workspace collapsed. Feel free to restore it.
            </p>
            <button
              onClick={() => setIsClosed(false)}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-650 hover:bg-indigo-700 active:scale-[0.98] text-white text-xs font-bold rounded-xl shadow-lg hover:shadow-indigo-200 transition-all duration-150 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Restore Interactive IDE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Mock Helper: Likes button clicker component to render inside preview ──────
function MockLikeContainer() {
  const [likes, setLikes] = useState(0);
  return (
    <div className="mt-4 flex flex-col gap-3 items-center">
      <button
        onClick={() => setLikes(l => l + 1)}
        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-xl font-bold shadow-md transition-all text-xs cursor-pointer border-0"
      >
        👍 Click to Like: {likes}
      </button>
      <span className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wider">
        Live Interactive Sandbox
      </span>
    </div>
  );
}
