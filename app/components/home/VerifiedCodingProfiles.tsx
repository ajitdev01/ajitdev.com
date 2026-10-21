import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Flame, Trophy, Award, GitBranch, Code2, ArrowRight } from "lucide-react";
import { CODING_STATS, BRAINZIMA } from "@/lib/seo";

export default function VerifiedCodingProfiles() {
  const profiles = [
    {
      name: "LeetCode",
      handle: `@${CODING_STATS.leetCodeHandle}`,
      url: "https://leetcode.com/u/ajitdev01/",
      metric: `${CODING_STATS.leetCodeSolved} Solved`,
      submetric: `${CODING_STATS.activeStreakDays} Day Streak`,
      accent: "text-amber-600 bg-amber-50 border-amber-200",
      badgeText: CODING_STATS.leetCodeRank,
      description: "Array, Tree, Graph, Dynamic Programming and Algorithm Complexity optimizations.",
      icon: Trophy,
    },
    {
      name: "GitHub",
      handle: `@${CODING_STATS.githubHandle}`,
      url: "https://github.com/ajitdev01",
      metric: `${CODING_STATS.githubContributions} Contribs`,
      submetric: "17+ Repositories",
      accent: "text-slate-900 bg-slate-100 border-slate-300",
      badgeText: "Active Maintainer",
      description: "Production Next.js, MERN repositories, DevOps automation scripts, and full-stack systems.",
      icon: GitBranch,
    },
    {
      name: "Codeforces",
      handle: `@${CODING_STATS.codeforcesHandle}`,
      url: "https://codeforces.com/profile/ajitdev01",
      metric: "Contest Participant",
      submetric: "Competitive Programming",
      accent: "text-blue-600 bg-blue-50 border-blue-200",
      badgeText: "Algorithmic Logic",
      description: "Speed coding, number theory, greedy algorithms, and data structure contest challenges.",
      icon: Code2,
    },
    {
      name: "CodeChef",
      handle: `@${CODING_STATS.codeChefHandle}`,
      url: "https://www.codechef.com/users/ajitdev01/",
      metric: "Division 3 Coder",
      submetric: "Problem Solving",
      accent: "text-yellow-700 bg-yellow-50 border-yellow-200",
      badgeText: "DSA Practice",
      description: "Consistent problem solver tackling monthly challenges and algorithmic problem sets.",
      icon: Award,
    },
  ];

  return (
    <section className="mt-16 md:mt-24">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Verified Developer Identity
            </span>
            <Badge variant="outline" className="text-[11px] font-bold gap-1 text-slate-600">
              Snapshot: {CODING_STATS.snapshotDate}
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Verified Coding Profiles &amp; Leadership
          </h2>
          <p className="text-sm font-medium text-slate-600 mt-1 max-w-2xl">
            Direct links to verified competitive coding handles, repository contributions, and executive technical leadership at Brainzima.
          </p>
        </div>

        <Link href="/dsa" className="no-underline shrink-0">
          <Button variant="outline" size="sm" className="gap-1.5 font-extrabold text-indigo-600 border-indigo-200 hover:bg-indigo-50">
            Open Full DSA Dashboard <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {profiles.map((p) => {
          const IconComp = p.icon;
          return (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline block group"
              title={`Visit verified profile: ${p.name} (${p.handle})`}
            >
              <Card className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-black text-slate-900 text-base group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                      <IconComp className="w-4 h-4 text-indigo-600" />
                      {p.name}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-indigo-600 flex items-center gap-1">
                      {p.handle} <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  <div className="mb-3">
                    <div className="text-xl font-black text-slate-900">{p.metric}</div>
                    <div className="text-xs font-bold text-slate-500 mt-0.5">{p.submetric}</div>
                  </div>

                  <span className={`inline-block text-[10px] font-extrabold px-2.5 py-0.5 rounded-md border ${p.accent} mb-3`}>
                    {p.badgeText}
                  </span>

                  <p className="text-xs font-medium text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                  <span>View Verified Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </Card>
            </a>
          );
        })}
      </div>

      {/* BRAINZIMA INNOVATION INSTITUTE LEADERSHIP CALLOUT */}
      <div className="mt-4 p-5 rounded-2xl border border-purple-200 bg-gradient-to-r from-purple-50 via-indigo-50 to-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-base shrink-0">
            CTO
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-purple-700 uppercase tracking-wider">
                Confirmed Executive Leadership
              </span>
              <span className="text-[10px] font-bold px-2 py-0.2 bg-purple-100 text-purple-800 rounded-full">
                Katihar, Bihar
              </span>
            </div>
            <h3 className="text-base font-black text-slate-900">
              Chief Technology Officer (CTO) @ {BRAINZIMA.name} 🚀
            </h3>
            <p className="text-xs font-medium text-slate-600 mt-0.5">
              Directing technical engineering strategy, developer mentorship, and modern software architectures.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={BRAINZIMA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Button variant="outline" size="sm" className="gap-1.5 font-bold border-purple-200 text-purple-700 hover:bg-purple-100">
              Instagram @brainzima <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </a>
          <a
            href={BRAINZIMA.url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Button variant="default" size="sm" className="gap-1.5 font-bold bg-purple-600 hover:bg-purple-700 text-white">
              Visit Website <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
