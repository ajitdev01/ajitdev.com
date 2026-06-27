'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const FiCommand = ({ className }: { className?: string }) => (
  <svg className={className || "w-3.5 h-3.5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
  </svg>
);

export default function CodeSpace3D() {
  const [typedLines, setTypedLines] = useState<Array<{ text: string; color: string; delay: number }>>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<Array<{ text: string; color: string; delay: number }>>([]);
  const [isHovered, setIsHovered] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isHovered) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    }
  };

  const codeLines = [
    { text: "const Success = async (developer) => {", color: "text-indigo-400", delay: 0 },
    { text: '  await developer.learn("MERN + Next.js + TypeScript");', color: "text-emerald-400", delay: 400 },
    { text: '  await developer.build("5+ Production Apps");', color: "text-emerald-400", delay: 800 },
    { text: '  await developer.deploy("Cloud Native Solutions");', color: "text-emerald-400", delay: 1200 },
    { text: '  return "CAREER_GROWTH 🚀";', color: "text-purple-400", delay: 1600 },
    { text: "};", color: "text-indigo-400", delay: 1900 },
    { text: "", color: "", delay: 2100 },
    { text: "// 3000+ hours of coding", color: "text-slate-500", delay: 2300 },
    { text: "// 99% client satisfaction", color: "text-slate-500", delay: 2500 },
  ];

  const terminalLines = [
    { text: "$ npm run deploy", color: "text-cyan-400", delay: 2800 },
    { text: "> System Online: 100%", color: "text-emerald-400", delay: 3200 },
    { text: "> Full Stack Mode Activated", color: "text-emerald-400", delay: 3500 },
    { text: "> Deploying Projects...", color: "text-indigo-400", delay: 3800 },
    { text: "> Build Complete: 0 Errors ✨", color: "text-emerald-400", delay: 4200 },
  ];

  useEffect(() => {
    const timeouts = codeLines.map((line) => {
      return setTimeout(() => {
        if (line.text) {
          setTypedLines(prev => [...prev, line]);
        }
      }, line.delay);
    });

    const terminalTimeouts = terminalLines.map((line) => {
      return setTimeout(() => {
        setOutput(prev => [...prev, line]);
      }, line.delay);
    });

    return () => {
      timeouts.forEach(t => clearTimeout(t));
      terminalTimeouts.forEach(t => clearTimeout(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput([]);
    setTypedLines([]);

    const allLines = [...codeLines, ...terminalLines];
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < allLines.length) {
        const line = allLines[currentIndex];
        if (line.text) {
          if (currentIndex < codeLines.length) {
            setTypedLines(prev => [...prev, line]);
          } else {
            setOutput(prev => [...prev, line]);
          }
        }
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 300);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        animate(x, 0, { duration: 0.5 });
        animate(y, 0, { duration: 0.5 });
      }}
      style={{
        rotateX: isHovered ? 0 : rotateX,
        rotateY: isHovered ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative w-full max-w-lg mx-auto lg:mx-0"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950/80 backdrop-blur-md">
        {/* Header Bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border-b border-white/5">
          <span className="w-3 h-3 bg-red-500/80 rounded-full shadow-sm" />
          <span className="w-3 h-3 bg-yellow-500/80 rounded-full shadow-sm" />
          <span className="w-3 h-3 bg-green-500/80 rounded-full shadow-sm" />
          <span className="ml-auto text-xs text-slate-400 font-mono">ajitdev_success.ts</span>
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="ml-2 px-2 py-0.5 text-[10px] font-mono bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/20 rounded transition-all duration-200 disabled:opacity-50"
          >
            {isRunning ? "Running..." : "▶ Run"}
          </button>
        </div>

        {/* Code Editor Area */}
        <div className="p-5 font-mono text-sm space-y-1.5 bg-slate-950/20">
          {codeLines.map((line, idx) => {
            const isTyped = typedLines.some(t => t.text === line.text && t.delay === line.delay);
            return (
              <div key={idx} className={line.color}>
                {isTyped ? line.text : (idx === 0 && typedLines.length === 0 ? (
                  <span className="opacity-0 transition-opacity duration-100">
                    {line.text}
                  </span>
                ) : null)}
                {idx === typedLines.length - 1 && typedLines.length < codeLines.length && typedLines.length > 0 && (
                  <span className="inline-block w-2 h-4 bg-indigo-500 ml-0.5 align-middle animate-blink" />
                )}
              </div>
            );
          })}
        </div>

        {/* Terminal Area */}
        <div className="border-t border-white/5 p-3 text-xs font-mono bg-slate-950/60 space-y-0.5">
          <div className="text-slate-500 text-[10px] mb-1 flex items-center gap-2">
            <FiCommand />
            TERMINAL OUTPUT
          </div>
          {output.map((line, idx) => (
            <div
              key={idx}
              className={`transition-all duration-200 ${line.color}`}
            >
              {line.text}
            </div>
          ))}
          {output.length === terminalLines.length && (
            <div className="flex items-center gap-2 mt-2 pt-1 border-t border-white/5">
              <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-[10px] font-medium">Ready for opportunities</span>
            </div>
          )}
          {output.length < terminalLines.length && output.length > 0 && (
            <span className="inline-block w-1.5 h-3 bg-emerald-500 ml-1 align-middle animate-blink" />
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200/40 via-purple-200/40 to-pink-200/40 blur-3xl -z-10 rounded-full opacity-50" />
    </motion.div>
  );
}
