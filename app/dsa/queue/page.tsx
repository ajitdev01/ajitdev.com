import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Queue Data Structures Study Notes & LeetCode Practice | Ajit Dev",
  description: "FIFO buffers, double-ended queues (deque) for sliding window maximums, and level order buffers in C++. Master class notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/queue",
  },
};

export default function DsaQueuePage() {
  return (
    <MuiTopicPage
      topicKey="queue"
      topicName="Queue Data Structures"
      category="Linear Data Structures"
      description="Queues operate on First-In, First-Out (FIFO) access order. Master level-order BFS tree traversals, double-ended queues (std::deque), and monotonic deques for sliding window maximum problems in C++."
      timeComplexity="Push / Pop / Front: O(1)"
      spaceComplexity="O(N) Queue Buffer"
      solvedCount={15}
      totalTarget={20}
      codeTemplate={`// C++ Monotonic Deque Sliding Window Maximum Template\n#include <iostream>\n#include <vector>\n#include <deque>\nusing namespace std;\n\nvector<int> maxSlidingWindow(const vector<int>& nums, int k) {\n    deque<int> dq;\n    vector<int> res;\n    for (int i = 0; i < nums.size(); ++i) {\n        if (!dq.empty() && dq.front() == i - k) dq.pop_front(); // Evict stale index\n        while (!dq.empty() && nums[dq.back()] < nums[i]) dq.pop_back(); // Maintain monotonic order\n        dq.push_back(i);\n        if (i >= k - 1) res.push_back(nums[dq.front()]);\n    }\n    return res;\n}`}
      concepts={[
        "FIFO Discipline: First elements added are processed first, ideal for BFS shortest path exploration.",
        "Double-Ended Queue (std::deque): Allows O(1) push and pop at both head and tail ends.",
        "Monotonic Deque: Evicts stale indices and smaller values to extract max/min in sliding windows in O(1).",
        "Circular Buffer Queue: Implements bounded memory queues with fixed array wrap-around pointers.",
      ]}
      proTips={[
        "Store indices inside std::deque rather than raw values to easily verify window eviction criteria 'dq.front() == i - k'.",
        "Use std::queue for standard BFS tree/graph traversals.",
        "Ensure queue non-empty check before accessing q.front() or q.back().",
      ]}
      curatedProblems={[
        { id: 225, title: "Implement Stack using Queues", difficulty: "Easy", tags: ["Queue", "Design"], link: "https://leetcode.com/problems/implement-stack-using-queues/" },
        { id: 239, title: "Sliding Window Maximum", difficulty: "Hard", tags: ["Monotonic Deque"], link: "https://leetcode.com/problems/sliding-window-maximum/" },
        { id: 622, title: "Design Circular Queue", difficulty: "Medium", tags: ["Queue", "Array"], link: "https://leetcode.com/problems/design-circular-queue/" },
        { id: 994, title: "Rotting Oranges", difficulty: "Medium", tags: ["BFS", "Queue"], link: "https://leetcode.com/problems/rotting-oranges/" },
      ]}
      faqItems={[
        {
          question: "Why is std::deque preferred over std::vector for queues?",
          answer: "std::vector popping from the front takes O(N) shift time. std::deque allocates chunked memory blocks allowing O(1) insertions and deletions at both ends.",
        },
        {
          question: "How does Monotonic Deque achieve linear O(N) sliding window max?",
          answer: "Each element is pushed once to the back of the deque and popped at most once from either front or back, guaranteeing linear total steps.",
        },
      ]}
    />
  );
}
