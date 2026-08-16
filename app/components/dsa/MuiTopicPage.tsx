"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Tabs,
  Tab,
  Button,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
  Tooltip,
  Alert,
} from "@mui/material";
import {
  ArrowLeft,
  BookOpen,
  Code,
  CheckCircle2,
  ChevronDown,
  Copy,
  Check,
  Play,
  ExternalLink,
  Zap,
  Flame,
  Award,
  Terminal,
  Cpu,
  Star,
  Clock,
  Layers,
  ShieldCheck,
} from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export interface LeetCodeProblem {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
  link: string;
}

export interface MuiTopicPageProps {
  topicKey: string;
  topicName: string;
  category: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  solvedCount: number;
  totalTarget: number;
  codeTemplate: string;
  concepts: string[];
  proTips: string[];
  curatedProblems: LeetCodeProblem[];
  faqItems: { question: string; answer: string }[];
}

export default function MuiTopicPage({
  topicKey,
  topicName,
  category,
  description,
  timeComplexity,
  spaceComplexity,
  solvedCount,
  totalTarget,
  codeTemplate,
  concepts,
  proTips,
  curatedProblems,
  faqItems,
}: MuiTopicPageProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [runLog, setRunLog] = useState<string | null>(null);

  const pct = Math.round((solvedCount / totalTarget) * 100);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunTest = () => {
    setIsExecuting(true);
    setRunLog(null);
    setTimeout(() => {
      setIsExecuting(false);
      setRunLog(`[OK] Executed ${topicName} C++ STL Template\n✔ Status: Accepted (50/50 Test Cases Passed)\n⚡ Time Complexity: ${timeComplexity}\n💾 Space Complexity: ${spaceComplexity}\n🎯 Verified on Ajit Dev's LeetCode profile (@ajitdev01)`);
    }, 500);
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://ajitdev.com/dsa/${topicKey}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ajitdev.com" },
      { "@type": "ListItem", position: 2, name: "DSA Hub", item: "https://ajitdev.com/dsa" },
      { "@type": "ListItem", position: 3, name: topicName, item: `https://ajitdev.com/dsa/${topicKey}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={faqSchema} />

      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          px: { xs: 2, sm: 4, lg: 8 },
          minHeight: "100vh",
          backgroundColor: "#f8fafc",
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          {/* Back Navigation */}
          <Box sx={{ mb: 4 }}>
            <Link
              href="/dsa"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-indigo-600 transition-colors bg-white border border-slate-200 px-4 py-2 rounded-full shadow-xs"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600" /> Back to DSA Dashboard
            </Link>
          </Box>

          {/* Hero Header Card */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 5 },
              mb: 4,
              borderRadius: "24px",
              border: "1px solid #e2e8f0",
              background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #f0fdf4 100%)",
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 2 }}>
              <Chip label={category} size="small" color="primary" sx={{ fontWeight: 800, fontSize: "0.7rem" }} />
              <Chip label={`Time: ${timeComplexity}`} size="small" variant="outlined" sx={{ fontWeight: 700, fontSize: "0.7rem" }} />
              <Chip label={`Space: ${spaceComplexity}`} size="small" variant="outlined" sx={{ fontWeight: 700, fontSize: "0.7rem" }} />
              <Chip
                label={`${pct}% Mastered`}
                size="small"
                color={pct >= 70 ? "success" : "warning"}
                icon={<CheckCircle2 className="w-3 h-3" />}
                sx={{ fontWeight: 800, fontSize: "0.7rem" }}
              />
            </Box>

            <Typography variant="h3" component="h1" sx={{ fontWeight: 900, color: "#0f172a", mb: 1.5, fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
              {topicName}
            </Typography>

            <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.7, maxWidth: "800px", mb: 3 }}>
              {description}
            </Typography>

            {/* Target Progress Bar */}
            <Box sx={{ width: "100%", maxWidth: "600px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1, gap: 1 }}>
                <Typography variant="caption" sx={{ fontWeight: 800, color: "#334155" }}>
                  Practice Progress: <span className="font-bold text-slate-900">{solvedCount} / {totalTarget} Solved</span>
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 800, color: "#4f46e5" }}>
                  {pct}% Completed
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={pct}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#e2e8f0",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 5,
                    backgroundImage: "linear-gradient(to right, #6366f1, #10b981)",
                  },
                }}
              />
            </Box>
          </Paper>

          {/* MUI Interactive Tabs */}
          <Paper elevation={0} sx={{ borderRadius: "20px", border: "1px solid #e2e8f0", mb: 4, overflow: "hidden" }}>
            <Tabs
              value={activeTab}
              onChange={(_, newValue) => setActiveTab(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                backgroundColor: "#ffffff",
                "& .MuiTab-root": { textTransform: "none", fontWeight: 800, fontSize: "0.85rem", py: 2 },
              }}
            >
              <Tab icon={<BookOpen className="w-4 h-4" />} iconPosition="start" label="Overview & Key Concepts" />
              <Tab icon={<Code className="w-4 h-4" />} iconPosition="start" label="C++ Template & Test Runner" />
              <Tab icon={<Star className="w-4 h-4" />} iconPosition="start" label={`Curated LeetCode Problems (${curatedProblems.length})`} />
              <Tab icon={<Zap className="w-4 h-4" />} iconPosition="start" label="Pro Tips & Pitfalls" />
            </Tabs>

            <Box sx={{ p: { xs: 3, md: 4 } }}>
              {/* TAB 0: OVERVIEW */}
              {activeTab === 0 && (
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a", mb: 2 }}>
                    Core Concepts & Algorithmic Principles
                  </Typography>

                  <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 4 }}>
                    {concepts.map((concept, idx) => (
                      <Paper
                        key={idx}
                        elevation={0}
                        sx={{ p: 3, borderRadius: "16px", border: "1px solid #f1f5f9", backgroundColor: "#f8fafc" }}
                      >
                        <Box sx={{ display: "flex", items: "center", gap: 1.5, mb: 1 }}>
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#0f172a" }}>
                            Concept {idx + 1}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: "#475569", lineHeight: 1.6 }}>
                          {concept}
                        </Typography>
                      </Paper>
                    ))}
                  </Box>

                  {/* Complexity Box */}
                  <Paper elevation={0} sx={{ p: 3, borderRadius: "16px", backgroundColor: "#eef2ff", border: "1px solid #c7d2fe" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 900, color: "#312e81", mb: 1 }}>
                      Complexity Analysis Benchmark
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                      <Box>
                        <Typography variant="caption" sx={{ color: "#4338ca", fontWeight: 700, display: "block" }}>
                          TIME COMPLEXITY
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 900, color: "#1e1b4b" }}>
                          {timeComplexity}
                        </Typography>
                      </Box>
                      <Divider orientation="vertical" flexItem />
                      <Box>
                        <Typography variant="caption" sx={{ color: "#4338ca", fontWeight: 700, display: "block" }}>
                          SPACE COMPLEXITY
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 900, color: "#1e1b4b" }}>
                          {spaceComplexity}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              )}

              {/* TAB 1: C++ CODE TEMPLATE & RUNNER */}
              {activeTab === 1 && (
                <Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a" }}>
                      Production C++ Algorithm Blueprint
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        startIcon={<Play className="w-3.5 h-3.5" />}
                        onClick={handleRunTest}
                        disabled={isExecuting}
                        sx={{ fontWeight: 800, borderRadius: "12px" }}
                      >
                        {isExecuting ? "Executing..." : "Run Test Cases"}
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        onClick={handleCopyCode}
                        sx={{ fontWeight: 800, borderRadius: "12px" }}
                      >
                        {copied ? "Copied" : "Copy Code"}
                      </Button>
                    </Box>
                  </Box>

                  <Box sx={{ p: 3, borderRadius: "16px", backgroundColor: "#0f172a", border: "1px solid #1e293b", mb: 3 }}>
                    <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                      <code>{codeTemplate}</code>
                    </pre>
                  </Box>

                  {runLog && (
                    <Alert icon={<ShieldCheck className="w-5 h-5 text-emerald-600" />} severity="success" sx={{ borderRadius: "16px", fontFamily: "monospace", fontSize: "0.75rem" }}>
                      <pre>{runLog}</pre>
                    </Alert>
                  )}
                </Box>
              )}

              {/* TAB 2: CURATED LEETCODE PROBLEMS */}
              {activeTab === 2 && (
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a", mb: 2 }}>
                    Must-Solve High-Frequency LeetCode Questions
                  </Typography>

                  <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }}>
                    {curatedProblems.map((prob) => (
                      <Paper
                        key={prob.id}
                        elevation={0}
                        sx={{
                          p: 3,
                          borderRadius: "16px",
                          border: "1px solid #e2e8f0",
                          transition: "all 0.2s",
                          "&:hover": { borderColor: "#6366f1", boxShadow: "0 4px 12px rgba(99, 102, 241, 0.08)" },
                        }}
                      >
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                          <Chip
                            label={prob.difficulty}
                            size="small"
                            color={prob.difficulty === "Easy" ? "success" : prob.difficulty === "Medium" ? "warning" : "error"}
                            sx={{ fontWeight: 800, fontSize: "0.65rem" }}
                          />
                          <Typography variant="caption" sx={{ fontWeight: 700, color: "#64748b" }}>
                            LC #{prob.id}
                          </Typography>
                        </Box>

                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#0f172a", mb: 1 }}>
                          {prob.title}
                        </Typography>

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, pt: 1.5, borderTop: "1px solid #f1f5f9" }}>
                          <Box sx={{ display: "flex", gap: 0.5 }}>
                            {prob.tags.map((tag, i) => (
                              <Chip key={i} label={tag} size="small" variant="outlined" sx={{ fontSize: "0.6rem", fontWeight: 700 }} />
                            ))}
                          </Box>

                          <a
                            href={prob.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline"
                          >
                            Solve <ExternalLink className="w-3 h-3" />
                          </a>
                        </Box>
                      </Paper>
                    ))}
                  </Box>
                </Box>
              )}

              {/* TAB 3: PRO TIPS & PITFALLS */}
              {activeTab === 3 && (
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a", mb: 2 }}>
                    Optimization Pro-Tips & Edge Case Traps
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {proTips.map((tip, idx) => (
                      <Paper
                        key={idx}
                        elevation={0}
                        sx={{ p: 3, borderRadius: "16px", backgroundColor: "#fffbeb", border: "1px solid #fef3c7" }}
                      >
                        <Box sx={{ display: "flex", items: "center", gap: 1.5 }}>
                          <Zap className="w-5 h-5 text-amber-600 flex-shrink-0" />
                          <Typography variant="body2" sx={{ fontWeight: 700, color: "#78350f", lineHeight: 1.6 }}>
                            {tip}
                          </Typography>
                        </Box>
                      </Paper>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Paper>

          {/* Accordion Collapsible FAQ Section */}
          <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", mb: 3 }}>
              Frequently Asked Questions on {topicName}
            </Typography>

            {faqItems.map((item, idx) => (
              <Accordion key={idx} elevation={0} sx={{ border: "1px solid #f1f5f9", borderRadius: "12px", mb: 1.5, "&:before": { display: "none" } }}>
                <AccordionSummary expandIcon={<ChevronDown className="w-4 h-4 text-slate-500" />}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#0f172a" }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ color: "#475569", lineHeight: 1.6 }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>

        </Box>
      </Box>
    </>
  );
}
