import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Binary Search Algorithms Study Notes & LeetCode Practice | Ajit Dev",
  description: "Logarithmic O(log N) search spaces, finding upper/lower bounds, and searching solution ranges in C++. Master class implementation notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/binary-search",
  },
};

export default function DsaBinarySearchPage() {
  return (
    <MuiTopicPage
      topicKey="binary-search"
      topicName="Binary Search Algorithms"
      category="Algorithmic Techniques"
      description="Binary Search repeatedly divides sorted search spaces in half, reducing time complexity from O(N) to O(log N). Learn how to search discrete arrays, rotated arrays, and continuous solution answer spaces."
      timeComplexity="Search: O(log N)"
      spaceComplexity="O(1) Auxiliary Space"
      solvedCount={28}
      totalTarget={30}
      codeTemplate={`// C++ Binary Search on Answer Space (Lower Bound Template)\n#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint binarySearch(const vector<int>& nums, int target) {\n    int low = 0, high = nums.size() - 1;\n    int ans = -1;\n    \n    while (low <= high) {\n        int mid = low + (high - low) / 2; // Prevents overflow\n        if (nums[mid] >= target) {\n            ans = mid;\n            high = mid - 1; // Try finding smaller index\n        } else {\n            low = mid + 1;\n        }\n    }\n    return ans;\n}`}
      concepts={[
        "Monotonic Invariant Property: The search range must be sorted or exhibit a monotonic true/false condition.",
        "Overflow Safety: Calculate mid using 'low + (high - low) / 2' instead of '(low + high) / 2'.",
        "Binary Search on Answer Space: When minimizing maximums, binary search over possible solution values.",
        "Rotated Sorted Arrays: Detect sorted half to determine which side to shrink.",
      ]}
      proTips={[
        "Use std::lower_bound and std::upper_bound in C++ for standard iterator binary search.",
        "Ensure termination criteria 'low <= high' vs 'low < high' matches boundary update logic.",
        "Verify base cases when array size is 1 or 2 to avoid infinite loops.",
      ]}
      curatedProblems={[
        { id: 704, title: "Binary Search", difficulty: "Easy", tags: ["Binary Search"], link: "https://leetcode.com/problems/binary-search/" },
        { id: 33, title: "Search in Rotated Sorted Array", difficulty: "Medium", tags: ["Binary Search", "Array"], link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
        { id: 875, title: "Koko Eating Bananas", difficulty: "Medium", tags: ["Binary Search", "Answer Space"], link: "https://leetcode.com/problems/koko-eating-bananas/" },
        { id: 410, title: "Split Array Largest Sum", difficulty: "Hard", tags: ["Binary Search", "DP"], link: "https://leetcode.com/problems/split-array-largest-sum/" },
      ]}
      faqItems={[
        {
          question: "How do I identify if a problem can be solved with Binary Search on Answer Space?",
          answer: "If the problem asks to find the 'minimum maximum' or 'maximum minimum' value and you can write a check(mid) function that returns true for all values above or below a threshold, binary search applies.",
        },
        {
          question: "What is the difference between lower_bound and upper_bound in C++?",
          answer: "std::lower_bound returns an iterator to the first element >= target, while std::upper_bound returns an iterator to the first element > target.",
        },
      ]}
    />
  );
}
