import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Dynamic Programming (DP) Study Notes & LeetCode Practice | Ajit Dev",
  description: "Subproblem optimal substructure, 1D/2D memoization arrays, 0/1 knapsack, and state transitions in C++. Master class implementation notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/dynamic-programming",
  },
};

export default function DsaDynamicProgrammingPage() {
  return (
    <MuiTopicPage
      topicKey="dynamic-programming"
      topicName="Dynamic Programming (DP)"
      category="Advanced Optimization"
      description="Dynamic Programming optimizes exponential recursive solutions by storing subproblem results in memoization tables. Master 1D state transitions, 2D grid DP, 0/1 Knapsack variants, and space compression."
      timeComplexity="States × Transitions per State"
      spaceComplexity="O(N) 1D Array or O(N×M) 2D Matrix"
      solvedCount={6}
      totalTarget={40}
      codeTemplate={`// C++ 2D DP Grid / Knapsack State Transition Template\n#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint knapsack(int W, const vector<int>& wt, const vector<int>& val) {\n    int n = wt.size();\n    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));\n    \n    for (int i = 1; i <= n; ++i) {\n        for (int w = 1; w <= W; ++w) {\n            if (wt[i-1] <= w) {\n                dp[i][w] = max(dp[i-1][w], val[i-1] + dp[i-1][w - wt[i-1]]);\n            } else {\n                dp[i][w] = dp[i-1][w];\n            }\n        }\n    }\n    return dp[n][W];\n}`}
      concepts={[
        "Optimal Substructure: An optimal solution to a problem contains optimal solutions to its subproblems.",
        "Overlapping Subproblems: Recursion repeatedly evaluates identical parameters; memoization caches results.",
        "Top-Down (Memoization) vs Bottom-Up (Tabulation): Recursion + cache vs iterative state array filling.",
        "Space Optimization: Compress 2D matrices to 1D vectors when states only depend on previous rows.",
      ]}
      proTips={[
        "Identify the DP State: Define what dp[i] or dp[i][j] represents clearly before writing code.",
        "Formulate Base Cases: Initialize dp[0] or boundary cells carefully to avoid index errors.",
        "Check State Constraints: If constraints are small (N <= 1000), O(N^2) tabulation is optimal.",
      ]}
      curatedProblems={[
        { id: 70, title: "Climbing Stairs", difficulty: "Easy", tags: ["1D DP"], link: "https://leetcode.com/problems/climbing-stairs/" },
        { id: 322, title: "Coin Change", difficulty: "Medium", tags: ["Unbounded Knapsack"], link: "https://leetcode.com/problems/coin-change/" },
        { id: 1143, title: "Longest Common Subsequence", difficulty: "Medium", tags: ["2D DP", "Strings"], link: "https://leetcode.com/problems/longest-common-subsequence/" },
        { id: 72, title: "Edit Distance", difficulty: "Hard", tags: ["2D DP", "Matrix"], link: "https://leetcode.com/problems/edit-distance/" },
      ]}
      faqItems={[
        {
          question: "When should I use Top-Down Memoization vs Bottom-Up Tabulation?",
          answer: "Top-Down (recursion + hash/array) is easier to implement when subproblems are selective. Bottom-Up tabulation avoids recursion call stack overhead and makes space compression straightforward.",
        },
        {
          question: "How do I optimize space from O(N*M) to O(M) in 2D DP?",
          answer: "If the state transition dp[i][j] only depends on dp[i-1][j], replace the 2D grid with two 1D rows (prev and curr), updating them iteratively.",
        },
      ]}
    />
  );
}
