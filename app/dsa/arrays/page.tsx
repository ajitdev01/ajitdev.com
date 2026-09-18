import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Arrays Data Structure Study Notes & LeetCode Practice | Ajit Dev",
  description: "Contiguous memory lists, sliding windows, prefix sums, and two-pointer operations in C++. Master class implementation notes, tradeoffs analysis, and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/arrays",
  },
};

export default function DsaArraysPage() {
  return (
    <MuiTopicPage
      topicKey="arrays"
      topicName="Arrays Data Structure"
      category="Linear Data Structures"
      description="Arrays store elements in contiguous memory locations, providing O(1) random access by index. Master sliding window subsegments, prefix sum range queries, and two-pointer space optimizations in C++."
      timeComplexity="Access: O(1) | Search: O(N) | Insertion: O(N)"
      spaceComplexity="O(N) contiguous allocation"
      solvedCount={45}
      totalTarget={50}
      codeTemplate={`// C++ Array Prefix Sum & Sliding Window Template\n#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\n// Prefix Sum Setup for O(1) Range Queries\nvector<int> buildPrefixSum(const vector<int>& nums) {\n    int n = nums.size();\n    vector<int> pref(n + 1, 0);\n    for (int i = 0; i < n; ++i) {\n        pref[i + 1] = pref[i] + nums[i];\n    }\n    return pref;\n}\n\n// Query sum in range [L, R] inclusive\nint queryRange(const vector<int>& pref, int L, int R) {\n    return pref[R + 1] - pref[L];\n}`}
      concepts={[
        "Contiguous Memory Layout: Fast cache locality and instant O(1) index offset arithmetic.",
        "Prefix Sum Arrays: Precomputing cumulative totals enables O(1) subarray sum queries.",
        "Sliding Window Subsegments: Expands/contracts boundaries to solve min/max subsegments in O(N).",
        "Two Pointers Technique: Eliminates nested loops by converging pointers from array ends.",
      ]}
      proTips={[
        "Always handle out-of-bounds indexing by validating vector bounds (i >= 0 && i < n).",
        "Use std::vector::reserve() when dynamically appending elements to prevent repeated reallocation overhead.",
        "Prefer prefix sum over repeated loops when handling multiple range query constraints.",
      ]}
      curatedProblems={[
        { id: 1, title: "Two Sum", difficulty: "Easy", tags: ["Array", "Hash Table"], link: "https://leetcode.com/problems/two-sum/" },
        { id: 53, title: "Maximum Subarray (Kadane's Algo)", difficulty: "Medium", tags: ["Array", "DP"], link: "https://leetcode.com/problems/maximum-subarray/" },
        { id: 238, title: "Product of Array Except Self", difficulty: "Medium", tags: ["Array", "Prefix Sum"], link: "https://leetcode.com/problems/product-of-array-except-self/" },
        { id: 410, title: "Split Array Largest Sum", difficulty: "Hard", tags: ["Binary Search", "DP"], link: "https://leetcode.com/problems/split-array-largest-sum/" },
      ]}
      faqItems={[
        {
          question: "Why are arrays preferred for cache-heavy algorithms?",
          answer: "Arrays store elements contiguously in memory. When the CPU accesses an array index, neighboring elements are loaded into L1/L2 cache lines simultaneously, resulting in minimal cache misses compared to node pointer lists.",
        },
        {
          question: "How does Kadane's Algorithm optimize subarray search to O(N)?",
          answer: "Kadane's algorithm maintains a current running sum and max sum. At each element, it decides whether to add the element to the current subarray or start a new subarray if the current sum becomes negative.",
        },
      ]}
    />
  );
}
