"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { Terminal, RefreshCw, Code2 } from "lucide-react";

// ── Icons ─────────────────────────────────────────────────────────────────────
const FiCommand = ({ className }: { className?: string }) => (
  <svg className={className || "w-3.5 h-3.5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
  </svg>
);

// ── Types ─────────────────────────────────────────────────────────────────────
interface TextLine {
  text: string;
  color: string;
}

// ── Data Configs ──────────────────────────────────────────────────────────────
const CODE_LINES: TextLine[] = [
  { text: "const Success = async (developer) => {", color: "text-indigo-600" },
  { text: '  await developer.learn("MERN + Next.js + TypeScript");', color: "text-emerald-705 font-medium" },
  { text: '  await developer.build("5+ Production Apps");', color: "text-emerald-750 font-medium" },
  { text: '  await developer.deploy("Cloud Native Solutions");', color: "text-emerald-750 font-medium" },
  { text: '  return "CAREER_GROWTH 🚀";', color: "text-purple-600 font-semibold" },
  { text: "};", color: "text-indigo-600" },
  { text: "", color: "" },
  { text: "// 3000+ hours of coding", color: "text-slate-400 italic" },
  { text: "// 99% client satisfaction", color: "text-slate-400 italic" },
];

const TERMINAL_LINES: TextLine[] = [
  { text: "$ npm run deploy", color: "text-cyan-600 font-semibold" },
  { text: "> System Online: 100%", color: "text-emerald-650" },
  { text: "> Full Stack Mode Activated", color: "text-emerald-650" },
  { text: "> Deploying Projects...", color: "text-indigo-650" },
  { text: "> Build Complete: 0 Errors ✨", color: "text-emerald-650 font-bold" },
];

export default function CodeSpace3D() {
  const [key, setKey] = useState(0); // For restarting animation
  const [isClosed, setIsClosed] = useState(false);
  const [controlHover, setControlHover] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // States to hold typed characters
  const [typedCode, setTypedCode] = useState<string[]>(Array(CODE_LINES.length).fill(""));
  const [typedTerminal, setTypedTerminal] = useState<string[]>(Array(TERMINAL_LINES.length).fill(""));
  
  // Current typing coordinates
  const [activeCodeLine, setActiveCodeLine] = useState(0);
  const [activeTermLine, setActiveTermLine] = useState(-1);

  // 3D Card Tilt effects
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-100, 100], [12, -12]);
  const rotateY = useTransform(mx, [-100, 100], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      mx.set(e.clientX - rect.left - rect.width / 2);
      my.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  // ── Character-by-Character Typewriter Engine ─────────────────────────────────
  useEffect(() => {
    if (isClosed) return;

    let isCancelled = false;
    let codeIndex = 0;
    let charIndex = 0;
    let termIndex = 0;
    let termCharIndex = 0;

    // Reset states
    setTypedCode(Array(CODE_LINES.length).fill(""));
    setTypedTerminal(Array(TERMINAL_LINES.length).fill(""));
    setActiveCodeLine(0);
    setActiveTermLine(-1);
    setIsRunning(true);

    const typeNextCodeChar = () => {
      if (isCancelled) return;

      if (codeIndex < CODE_LINES.length) {
        const currentLine = CODE_LINES[codeIndex];
        
        // Blank line handling
        if (currentLine.text === "") {
          setTypedCode(prev => {
            const next = [...prev];
            next[codeIndex] = "";
            return next;
          });
          codeIndex++;
          charIndex = 0;
          setActiveCodeLine(codeIndex);
          setTimeout(typeNextCodeChar, 100);
          return;
        }

        // Type char
        if (charIndex < currentLine.text.length) {
          setTypedCode(prev => {
            const next = [...prev];
            next[codeIndex] = currentLine.text.substring(0, charIndex + 1);
            return next;
          });
          charIndex++;
          // Pause slightly on punctuation/spacing
          const delay = /[{};()"]/.test(currentLine.text[charIndex - 1]) ? 70 : 25;
          setTimeout(typeNextCodeChar, delay);
        } else {
          // Line finished, go to next
          codeIndex++;
          charIndex = 0;
          setActiveCodeLine(codeIndex);
          setTimeout(typeNextCodeChar, 180);
        }
      } else {
        // Code fully finished typing, start terminal sequence
        setActiveCodeLine(-1);
        setActiveTermLine(0);
        setTimeout(typeNextTermChar, 300);
      }
    };

    const typeNextTermChar = () => {
      if (isCancelled) return;

      if (termIndex < TERMINAL_LINES.length) {
        const currentLine = TERMINAL_LINES[termIndex];

        if (termCharIndex < currentLine.text.length) {
          setTypedTerminal(prev => {
            const next = [...prev];
            next[termIndex] = currentLine.text.substring(0, termCharIndex + 1);
            return next;
          });
          termCharIndex++;
          setTimeout(typeNextTermChar, 20);
        } else {
          termIndex++;
          termCharIndex = 0;
          setActiveTermLine(termIndex);
          setTimeout(typeNextTermChar, 250);
        }
      } else {
        // Complete
        setIsRunning(false);
      }
    };

    // Kick off code typing
    setTimeout(typeNextCodeChar, 300);

    return () => {
      isCancelled = true;
    };
  }, [key, isClosed]);

  const handleReplay = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      <AnimatePresence mode="wait">
        {!isClosed ? (
          <motion.div
            key="workspace-card"
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: -15,
              transition: { duration: 0.2 },
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              animate(mx, 0, { duration: 0.5 });
              animate(my, 0, { duration: 0.5 });
            }}
            style={{
              rotateX: isHovered ? 0 : rotateX,
              rotateY: isHovered ? 0 : rotateY,
              transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full select-none"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              {/* ── Window chrome header bar ── */}
              <div 
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-200"
                onMouseEnter={() => setControlHover(true)}
                onMouseLeave={() => setControlHover(false)}
              >
                {/* Red close dot */}
                <button
                  onClick={() => setIsClosed(true)}
                  className="w-3 h-3 bg-red-400 hover:bg-red-500 rounded-full flex items-center justify-center border-0 p-0 cursor-pointer text-[8px] text-red-950 font-bold leading-none"
                >
                  {controlHover && "×"}
                </button>
                {/* Yellow dot */}
                <div className="w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center text-[8px] text-yellow-955 font-bold leading-none">
                  {controlHover && "-"}
                </div>
                {/* Green dot */}
                <div className="w-3 h-3 bg-green-400 rounded-full flex items-center justify-center text-[6px] text-green-950 font-bold leading-none">
                  {controlHover && "+"}
                </div>

                <span className="ml-3 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <span className="w-2 h-2 rounded-sm bg-indigo-400 inline-block" />
                  ajitdev_success.ts
                </span>
                
                <button
                  onClick={handleReplay}
                  disabled={isRunning}
                  className="ml-auto px-2.5 py-0.5 text-[10px] font-mono bg-indigo-50 hover:bg-indigo-100 text-indigo-600 border border-indigo-200 rounded-md transition-all duration-150 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isRunning ? "Running..." : "▶ Replay"}
                </button>
              </div>

              {/* ── Code Editor Area ── */}
              <div className="p-5 font-mono text-[13px] leading-6 bg-white min-h-[210px] space-y-0.5">
                {CODE_LINES.map((line, idx) => {
                  const content = typedCode[idx];
                  const isActive = activeCodeLine === idx;
                  const isVisible = content.length > 0 || isActive || idx < activeCodeLine || activeCodeLine === -1;

                  if (!isVisible) return null;

                  return (
                    <div key={idx} className="flex">
                      {/* Line Gutter */}
                      <span className="w-7 shrink-0 text-slate-300 text-[11px] text-right pr-3 pt-[1px] select-none">
                        {idx + 1}
                      </span>
                      {/* Code string */}
                      <span className={line.color}>
                        {content}
                        {isActive && (
                          <span className="inline-block w-[2px] h-[13px] bg-indigo-500 align-middle ml-px animate-blink" />
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* ── Terminal Area ── */}
              <div className="border-t border-slate-200 bg-slate-50 p-3 font-mono text-[12px] min-h-[120px]">
                <div className="flex items-center gap-2 text-slate-400 text-[10px] font-semibold mb-2 uppercase tracking-widest">
                  <FiCommand />
                  Terminal Output
                </div>

                {TERMINAL_LINES.map((line, idx) => {
                  const content = typedTerminal[idx];
                  const isActive = activeTermLine === idx;
                  const isVisible = content.length > 0 || isActive || (activeTermLine === -1 && activeCodeLine === -1 && idx < activeTermLine);

                  if (!isVisible && activeTermLine < idx) return null;

                  return (
                    <div key={idx} className={`leading-5 ${line.color}`}>
                      {content}
                      {isActive && (
                        <span className="inline-block w-[2px] h-[12px] bg-emerald-500 align-middle ml-px animate-blink" />
                      )}
                    </div>
                  );
                })}

                {/* Complete Status Line */}
                {!isRunning && activeTermLine >= TERMINAL_LINES.length - 1 && (
                  <div className="flex items-center gap-2 mt-2.5 pt-2 border-t border-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    <span className="text-emerald-600 text-[10px] font-bold tracking-wide">Ready for opportunities</span>
                  </div>
                )}
              </div>
            </div>

            {/* Ambient glow background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100/40 via-violet-100/30 to-pink-100/30 blur-3xl -z-10 rounded-full opacity-50" />
          </motion.div>
        ) : (
          /* Restoration Action card */
          <motion.div
            key="restore-card"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-3xl text-center select-none"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-150 flex items-center justify-center text-indigo-500 mb-3 shadow-md shadow-indigo-100">
              <Terminal className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-base font-black text-slate-800">Workspace Closed</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-[280px] leading-relaxed">
              Interactive terminal success story code animation closed. Click below to restore.
            </p>
            <button
              onClick={() => setIsClosed(false)}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-650 hover:bg-indigo-700 active:scale-[0.98] text-white text-xs font-bold rounded-xl shadow-lg hover:shadow-indigo-200 transition-all duration-150 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Restore Code Window
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
