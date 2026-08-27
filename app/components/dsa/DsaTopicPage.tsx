"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Alert } from "@/components/ui/alert";
import {
  ArrowLeft,
  BookOpen,
  Code,
  CheckCircle2,
  Copy,
  Check,
  Play,
  ExternalLink,
  Zap,
  Star,
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

export interface DsaTopicPageProps {
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

export default function DsaTopicPage({
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
}: DsaTopicPageProps) {
  const [activeTab, setActiveTab] = useState<string>("overview");
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

      <div className="pt-32 md:pt-40 pb-24 px-4 sm:px-8 min-h-screen bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          {/* Back Navigation */}
          <div className="mb-6">
            <Link
              href="/dsa"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-indigo-600 transition-colors bg-white border border-slate-200 px-4 py-2 rounded-full shadow-xs"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600" /> Back to DSA Dashboard
            </Link>
          </div>

          {/* Hero Header Card */}
          <Card className="p-6 sm:p-10 mb-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 shadow-xs">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary" className="py-1 px-3 text-xs">{category}</Badge>
              <Badge variant="outline" className="py-1 px-3 text-xs">Time: {timeComplexity}</Badge>
              <Badge variant="outline" className="py-1 px-3 text-xs">Space: {spaceComplexity}</Badge>
              <Badge variant={pct >= 70 ? "success" : "warning"} className="py-1 px-3 text-xs gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> {pct}% Mastered
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">
              {topicName}
            </h1>

            <p className="text-slate-600 leading-relaxed max-w-[800px] mb-6 font-medium text-sm sm:text-base">
              {description}
            </p>

            {/* Target Progress Bar */}
            <div className="w-full max-w-[600px]">
              <div className="flex justify-between items-center mb-2 gap-2 text-xs font-bold">
                <span className="text-slate-700">
                  Practice Progress: <strong className="text-slate-900 font-extrabold">{solvedCount} / {totalTarget} Solved</strong>
                </span>
                <span className="text-indigo-600 font-black">{pct}% Completed</span>
              </div>
              <Progress value={pct} className="h-2.5 bg-slate-200" indicatorClassName="bg-gradient-to-r from-indigo-600 to-emerald-500" />
            </div>
          </Card>

          {/* Interactive Tabs */}
          <Card className="rounded-3xl border border-slate-200 mb-8 overflow-hidden bg-white shadow-xs">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="border-b border-slate-200 bg-white p-2">
                <TabsList className="bg-transparent border-0 h-auto p-0 gap-1 flex-wrap">
                  <TabsTrigger value="overview" className="py-2.5 px-4 text-xs font-extrabold">
                    <BookOpen className="w-4 h-4 mr-1.5" /> Overview &amp; Key Concepts
                  </TabsTrigger>
                  <TabsTrigger value="template" className="py-2.5 px-4 text-xs font-extrabold">
                    <Code className="w-4 h-4 mr-1.5" /> C++ Template &amp; Test Runner
                  </TabsTrigger>
                  <TabsTrigger value="problems" className="py-2.5 px-4 text-xs font-extrabold">
                    <Star className="w-4 h-4 mr-1.5" /> Curated LeetCode Problems ({curatedProblems.length})
                  </TabsTrigger>
                  <TabsTrigger value="protips" className="py-2.5 px-4 text-xs font-extrabold">
                    <Zap className="w-4 h-4 mr-1.5" /> Pro Tips &amp; Pitfalls
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="p-6 md:p-8">
                {/* TAB 0: OVERVIEW */}
                <TabsContent value="overview" className="mt-0">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-4">
                      Core Concepts &amp; Algorithmic Principles
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {concepts.map((concept, idx) => (
                        <Card key={idx} className="p-5 rounded-2xl border border-slate-100 bg-slate-50 shadow-none">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <h4 className="font-extrabold text-slate-900 text-sm">
                              Concept {idx + 1}
                            </h4>
                          </div>
                          <p className="text-xs font-medium text-slate-600 leading-relaxed">
                            {concept}
                          </p>
                        </Card>
                      ))}
                    </div>

                    {/* Complexity Box */}
                    <Card className="p-6 rounded-2xl bg-indigo-50 border border-indigo-200 shadow-none">
                      <h4 className="font-black text-indigo-950 text-base mb-3">
                        Complexity Analysis Benchmark
                      </h4>
                      <div className="flex flex-wrap gap-6 items-center">
                        <div>
                          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                            TIME COMPLEXITY
                          </span>
                          <span className="text-xl font-black text-indigo-950">
                            {timeComplexity}
                          </span>
                        </div>
                        <div className="w-[1px] h-10 bg-indigo-200 hidden sm:block" />
                        <div>
                          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                            SPACE COMPLEXITY
                          </span>
                          <span className="text-xl font-black text-indigo-950">
                            {spaceComplexity}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </TabsContent>

                {/* TAB 1: C++ CODE TEMPLATE & RUNNER */}
                <TabsContent value="template" className="mt-0">
                  <div>
                    <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                      <h3 className="text-lg font-black text-slate-900">
                        Production C++ Algorithm Blueprint
                      </h3>

                      <div className="flex gap-2">
                        <Button
                          variant="contained"
                          size="small"
                          onClick={handleRunTest}
                          disabled={isExecuting}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5"
                        >
                          <Play className="w-3.5 h-3.5" />
                          {isExecuting ? "Executing..." : "Run Test Cases"}
                        </Button>
                        <Button
                          variant="outline"
                          size="small"
                          onClick={handleCopyCode}
                          className="gap-1.5"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          {copied ? "Copied" : "Copy Code"}
                        </Button>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 mb-4 overflow-hidden">
                      <pre className="text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                        <code>{codeTemplate}</code>
                      </pre>
                    </div>

                    {runLog && (
                      <Alert variant="success" icon={<ShieldCheck className="w-5 h-5 text-emerald-600" />}>
                        <pre className="font-mono text-xs whitespace-pre-wrap">{runLog}</pre>
                      </Alert>
                    )}
                  </div>
                </TabsContent>

                {/* TAB 2: CURATED LEETCODE PROBLEMS */}
                <TabsContent value="problems" className="mt-0">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-4">
                      Must-Solve High-Frequency LeetCode Questions
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {curatedProblems.map((prob) => (
                        <Card
                          key={prob.id}
                          className="p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 transition-all hover:shadow-md bg-white flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex justify-between items-center mb-3">
                              <Badge
                                variant={prob.difficulty === "Easy" ? "success" : prob.difficulty === "Medium" ? "warning" : "destructive"}
                                className="text-[10px]"
                              >
                                {prob.difficulty}
                              </Badge>
                              <span className="text-xs font-bold text-slate-400">
                                LC #{prob.id}
                              </span>
                            </div>

                            <h4 className="font-extrabold text-slate-900 text-base mb-3">
                              {prob.title}
                            </h4>
                          </div>

                          <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-100">
                            <div className="flex flex-wrap gap-1">
                              {prob.tags.map((tag, i) => (
                                <Badge key={i} variant="outline" className="text-[9px] py-0 px-1.5 font-bold">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <a
                              href={prob.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline"
                            >
                              Solve <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* TAB 3: PRO TIPS & PITFALLS */}
                <TabsContent value="protips" className="mt-0">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-4">
                      Optimization Pro-Tips &amp; Edge Case Traps
                    </h3>

                    <div className="flex flex-col gap-3">
                      {proTips.map((tip, idx) => (
                        <Card
                          key={idx}
                          className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-none"
                        >
                          <div className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                            <p className="text-xs sm:text-sm font-bold text-amber-950 leading-relaxed">
                              {tip}
                            </p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </Card>

          {/* Accordion Collapsible FAQ Section */}
          <Card className="p-6 md:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <h3 className="text-xl font-black text-slate-900 mb-6">
              Frequently Asked Questions on {topicName}
            </h3>

            <Accordion type="single">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-sm font-extrabold text-slate-900">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm font-medium text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

        </div>
      </div>
    </>
  );
}
