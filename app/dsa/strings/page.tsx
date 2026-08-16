import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Strings Manipulation Study Notes & LeetCode Practice | Ajit Dev",
  description: "Pattern matching algorithms (KMP, Rabin-Karp), rolling hashes, and palindrome checks in C++. Master class notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/strings",
  },
};

export default function DsaStringsPage() {
  return (
    <MuiTopicPage
      topicKey="strings"
      topicName="Strings Manipulation"
      category="Linear Data Structures"
      description="Strings are character sequences. Master sliding window substring search, string matching algorithms (KMP, Rabin-Karp rolling hash), palindrome verification, and frequency map hashing in C++."
      timeComplexity="Access: O(1) | Pattern Search: O(N + M)"
      spaceComplexity="O(N) Character Allocation"
      solvedCount={38}
      totalTarget={40}
      codeTemplate={`// C++ String Frequency Matching & Anagram Check Template\n#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nbool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    vector<int> count(26, 0);\n    for (int i = 0; i < s.length(); ++i) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int c : count) if (c != 0) return false;\n    return true;\n}`}
      concepts={[
        "Frequency Array Vector: Uses 26-size integer array 'vector<int> count(26, 0)' for O(1) space ASCII hashing.",
        "Sliding Window Substring: Solves longest substring without repeating characters in linear time.",
        "KMP Pattern Search: Computes Longest Prefix Suffix (LPS) table to achieve O(N + M) substring matching.",
        "Rabin-Karp Rolling Hash: Hashes pattern and text windows using polynomial rolling hash functions.",
      ]}
      proTips={[
        "Prefer 'vector<int> count(26)' over std::unordered_map<char, int> when dealing strictly with lowercase English letters for O(1) stack speed.",
        "Use std::string::reserve() when building large strings in loops to minimize re-allocations.",
        "Beware of string concatenation 's += c' inside loops; it creates temporary string copies if not passed by reference.",
      ]}
      curatedProblems={[
        { id: 125, title: "Valid Palindrome", difficulty: "Easy", tags: ["Two Pointers", "String"], link: "https://leetcode.com/problems/valid-palindrome/" },
        { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", tags: ["Sliding Window", "String"], link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", tags: ["DP", "Two Pointers"], link: "https://leetcode.com/problems/longest-palindromic-substring/" },
        { id: 214, title: "Shortest Palindrome (KMP LPS)", difficulty: "Hard", tags: ["KMP Algorithm", "String"], link: "https://leetcode.com/problems/shortest-palindrome/" },
      ]}
      faqItems={[
        {
          question: "How does the KMP algorithm eliminate redundant string comparisons?",
          answer: "KMP precomputes an LPS (Longest Prefix Suffix) array. When a character mismatch occurs, KMP shifts the pattern using the LPS value instead of resetting the text index back.",
        },
        {
          question: "Why is string immutability significant across programming languages?",
          answer: "In languages like Java or Python, strings are immutable, making concatenation inside loops O(N^2). In C++, std::string is mutable and supports fast O(1) push_back operations.",
        },
      ]}
    />
  );
}
