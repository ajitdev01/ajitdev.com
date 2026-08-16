import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Hashing & Hash Tables Study Notes & LeetCode Practice | Ajit Dev",
  description: "O(1) average lookup maps, collision resolution, custom hash functions, and frequency sets in C++. Master class notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/hashing",
  },
};

export default function DsaHashingPage() {
  return (
    <MuiTopicPage
      topicKey="hashing"
      topicName="Hashing & Hash Tables"
      category="Linear Data Structures"
      description="Hash tables convert keys into array indices using hash functions, offering O(1) expected time key-value lookups. Master std::unordered_map, custom hash functions for pair keys, collision handling, and frequency set indexing in C++."
      timeComplexity="Average Access / Insert: O(1) | Worst Case: O(N)"
      spaceComplexity="O(N) Hash Table Space"
      solvedCount={30}
      totalTarget={32}
      codeTemplate={`// C++ Custom Hash Function for Unordered Map Pairs\n#include <iostream>\n#include <unordered_map>\nusing namespace std;\n\nstruct PairHash {\n    size_t operator()(const pair<int, int>& p) const {\n        return hash<int>()(p.first) ^ (hash<int>()(p.second) << 1);\n    }\n};\n\nvoid demoCustomHash() {\n    unordered_map<pair<int, int>, int, PairHash> gridMap;\n    gridMap[{0, 1}] = 42;\n}`}
      concepts={[
        "O(1) Average Lookup: Directly computes bucket index from key hash value.",
        "Collision Resolution: Uses chaining (linked lists/vectors) or open addressing (linear probing).",
        "Custom Pair Hashes: Requires explicit hash functor when using std::pair or custom structs in std::unordered_map.",
        "Set Invariant: std::unordered_set guarantees O(1) element uniqueness verification.",
      ]}
      proTips={[
        "Use 'map.reserve(N)' when inserting known element quantities to avoid rehashing overhead.",
        "Prefer 'map.find(key) != map.end()' or 'map.count(key)' over 'map[key]' for read-only lookup.",
        "When key order matters, use std::map (Red-Black Tree O(log N)) instead of std::unordered_map.",
      ]}
      curatedProblems={[
        { id: 1, title: "Two Sum", difficulty: "Easy", tags: ["Hash Table", "Array"], link: "https://leetcode.com/problems/two-sum/" },
        { id: 49, title: "Group Anagrams", difficulty: "Medium", tags: ["Hash Table", "String"], link: "https://leetcode.com/problems/group-anagrams/" },
        { id: 128, title: "Longest Consecutive Sequence", difficulty: "Medium", tags: ["Hash Table", "Set"], link: "https://leetcode.com/problems/longest-consecutive-sequence/" },
        { id: 146, title: "LRU Cache", difficulty: "Medium", tags: ["Hash Table", "Linked List"], link: "https://leetcode.com/problems/lru-cache/" },
      ]}
      faqItems={[
        {
          question: "Why does std::unordered_map have O(N) worst-case time complexity?",
          answer: "If the hash function maps all keys to the same bucket index (hash collisions), the bucket degrades into a linear linked list requiring O(N) traversal.",
        },
        {
          question: "How does an LRU Cache use Hashing and Doubly Linked Lists together?",
          answer: "The hash table provides O(1) node lookup by key, while the doubly linked list maintains O(1) recent access ordering by moving accessed nodes to the head.",
        },
      ]}
    />
  );
}
