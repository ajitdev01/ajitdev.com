import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Greedy Algorithms Study Notes & LeetCode Practice | Ajit Dev",
  description: "Optimal localized decisions, minimizing paths, coin change solutions, and interval scheduling in C++. Master class notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/greedy",
  },
};

export default function DsaGreedyPage() {
  return (
    <MuiTopicPage
      topicKey="greedy"
      topicName="Greedy Algorithms"
      category="Algorithmic Techniques"
      description="Greedy algorithms make locally optimal decisions at each step with the goal of finding a global optimum. Master interval scheduling, jump game reachability, coin change bounds, and gas station loops in C++."
      timeComplexity="Sorting: O(N log N) + Single Pass: O(N)"
      spaceComplexity="O(1) Auxiliary Space"
      solvedCount={12}
      totalTarget={25}
      codeTemplate={`// C++ Greedy Interval Scheduling (Non-overlapping Intervals) Template\n#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint eraseOverlapIntervals(vector<vector<int>>& intervals) {\n    if (intervals.empty()) return 0;\n    // Sort by end time\n    sort(intervals.begin(), intervals.end(), [](const auto& a, const auto& b) {\n        return a[1] < b[1];\n    });\n    \n    int count = 0;\n    int prevEnd = intervals[0][1];\n    for (size_t i = 1; i < intervals.size(); ++i) {\n        if (intervals[i][0] < prevEnd) {\n            count++; // Overlap detected, remove current interval\n        } else {\n            prevEnd = intervals[i][1]; // Update non-overlapping end time\n        }\n    }\n    return count;\n}`}
      concepts={[
        "Greedy Choice Property: A locally optimal choice can lead to a globally optimal solution.",
        "Interval End Sorting: Sorting intervals by finish time maximizes non-overlapping selections.",
        "Exchange Argument Proof: Proving that replacing optimal choices with greedy choices preserves feasibility.",
        "Reachability Bounds: Tracking maximum reachable index in single linear passes.",
      ]}
      proTips={[
        "Always verify whether the greedy choice is provably optimal before implementation.",
        "Most greedy problems require sorting input vectors first (O(N log N)).",
        "If greedy choices fail on small counter-examples, switch to Dynamic Programming.",
      ]}
      curatedProblems={[
        { id: 55, title: "Jump Game", difficulty: "Medium", tags: ["Greedy", "Array"], link: "https://leetcode.com/problems/jump-game/" },
        { id: 435, title: "Non-overlapping Intervals", difficulty: "Medium", tags: ["Greedy", "Sorting"], link: "https://leetcode.com/problems/non-overlapping-intervals/" },
        { id: 134, title: "Gas Station", difficulty: "Medium", tags: ["Greedy", "Array"], link: "https://leetcode.com/problems/gas-station/" },
        { id: 135, title: "Candy", difficulty: "Hard", tags: ["Greedy", "Array"], link: "https://leetcode.com/problems/candy/" },
      ]}
      faqItems={[
        {
          question: "How do I know if a problem should be solved with Greedy vs Dynamic Programming?",
          answer: "Greedy algorithms make a non-reversible local choice at each step without looking back. Dynamic Programming considers all subproblem choices and memoizes them.",
        },
        {
          question: "Why do we sort intervals by end time in non-overlapping interval problems?",
          answer: "Sorting by end time leaves as much remaining room as possible for future intervals, maximizing the total count of non-overlapping selections.",
        },
      ]}
    />
  );
}
