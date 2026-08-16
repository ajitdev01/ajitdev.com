import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Heap & Priority Queues Study Notes & LeetCode Practice | Ajit Dev",
  description: "Min/Max binary heaps, bubble operations, top-K elements extraction, and K-way merges in C++. Master class notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/heap",
  },
};

export default function DsaHeapPage() {
  return (
    <MuiTopicPage
      topicKey="heap"
      topicName="Heap & Priority Queues"
      category="Hierarchical Structures"
      description="Binary Heaps are complete binary trees where parent nodes satisfy min-heap or max-heap invariants. Master std::priority_queue, top-K elements extraction, median finding streams, and K-way sorted merges in C++."
      timeComplexity="Push / Pop: O(log K) | Top Access: O(1)"
      spaceComplexity="O(K) Heap Memory"
      solvedCount={8}
      totalTarget={20}
      codeTemplate={`// C++ Min-Heap Priority Queue for Top K Elements Template\n#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nvector<int> findTopK(const vector<int>& nums, int k) {\n    // Min-heap keeps top K largest elements\n    priority_queue<int, vector<int>, greater<int>> minHeap;\n    for (int num : nums) {\n        minHeap.push(num);\n        if (minHeap.size() > k) {\n            minHeap.pop(); // Evict smallest element\n        }\n    }\n    \n    vector<int> res;\n    while (!minHeap.empty()) {\n        res.push_back(minHeap.top());\n        minHeap.pop();\n    }\n    return res;\n}`}
      concepts={[
        "Heap Property: Max-heap keeps root largest; Min-heap keeps root smallest.",
        "Top-K Optimization: Use min-heap of size K to find K largest elements in O(N log K).",
        "Dual-Heap Median Stream: Combines max-heap (lower half) and min-heap (upper half) for O(1) median access.",
        "K-Way Array Merge: Min-heap of size K merges K sorted arrays in O(N log K).",
      ]}
      proTips={[
        "Remember C++ std::priority_queue defaults to MAX-HEAP. Use 'greater<T>' comparator for MIN-HEAP.",
        "Use custom comparator structs 'struct Compare' for priority queue custom sorting rules.",
        "Build heaps from arrays in O(N) using std::make_heap or passing vectors directly.",
      ]}
      curatedProblems={[
        { id: 215, title: "Kth Largest Element in an Array", difficulty: "Medium", tags: ["Heap", "Quickselect"], link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        { id: 347, title: "Top K Frequent Elements", difficulty: "Medium", tags: ["Heap", "Hash Table"], link: "https://leetcode.com/problems/top-k-frequent-elements/" },
        { id: 295, title: "Find Median from Data Stream", difficulty: "Hard", tags: ["Dual Heap"], link: "https://leetcode.com/problems/find-median-from-data-stream/" },
        { id: 23, title: "Merge k Sorted Lists", difficulty: "Hard", tags: ["Min-Heap", "Linked List"], link: "https://leetcode.com/problems/merge-k-sorted-lists/" },
      ]}
      faqItems={[
        {
          question: "Why does a Min-Heap find K largest elements instead of a Max-Heap?",
          answer: "By keeping a Min-Heap of size K, the smallest element among top candidates is always at the root. When size exceeds K, popping removes the smallest, leaving the K largest elements in the heap.",
        },
        {
          question: "What is the time complexity of building a heap from an unsorted vector?",
          answer: "Floyd's Heap Construction algorithm builds a heap bottom-up in O(N) linear time, whereas pushing N elements one by one takes O(N log N).",
        },
      ]}
    />
  );
}
