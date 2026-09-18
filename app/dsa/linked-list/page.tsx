import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Linked Lists Nodes Study Notes & LeetCode Practice | Ajit Dev",
  description: "Singly/doubly linked chains, Floyd's cycle detection, dummy head tricks, and node reversals in C++. Master class notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/linked-list",
  },
};

export default function DsaLinkedListPage() {
  return (
    <MuiTopicPage
      topicKey="linked-list"
      topicName="Linked Lists Nodes"
      category="Linear Data Structures"
      description="Linked lists connect nodes dynamically via pointers rather than contiguous memory blocks. Master node reversals, dummy node sentinel pointers, Floyd's cycle detection algorithm, and fast/slow mid-point search in C++."
      timeComplexity="Traversal: O(N) | Insertion at Head: O(1)"
      spaceComplexity="O(1) Auxiliary Pointers"
      solvedCount={25}
      totalTarget={30}
      codeTemplate={`// C++ Iterative Linked List Node Reversal Template\n#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode *next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n\nListNode* reverseList(ListNode* head) {\n    ListNode *prev = nullptr, *curr = head;\n    while (curr) {\n        ListNode* nextNode = curr->next; // Store next\n        curr->next = prev;               // Reverse link\n        prev = curr;                     // Move prev forward\n        curr = nextNode;                 // Move curr forward\n    }\n    return prev;\n}`}
      concepts={[
        "Sentinel Dummy Nodes: Eliminates null checks when modifying list head pointers.",
        "Floyd's Fast & Slow Pointer: Detects cycles and finds list midpoints in O(N) time & O(1) space.",
        "In-Place Reversal: Reverses pointer directions iteratively without creating new nodes.",
        "Merging Sorted Lists: Uses dummy head and two pointers to interleave nodes in O(N).",
      ]}
      proTips={[
        "Always store 'curr->next' before altering pointers to prevent losing remaining node references.",
        "Use a dummy head (ListNode dummy(0); ListNode* tail = &dummy;) for clean insertion logic.",
        "Disconnect remaining tail pointers when splitting lists to prevent infinite loops.",
      ]}
      curatedProblems={[
        { id: 206, title: "Reverse Linked List", difficulty: "Easy", tags: ["Linked List"], link: "https://leetcode.com/problems/reverse-linked-list/" },
        { id: 141, title: "Linked List Cycle", difficulty: "Easy", tags: ["Two Pointers"], link: "https://leetcode.com/problems/linked-list-cycle/" },
        { id: 19, title: "Remove Nth Node From End of List", difficulty: "Medium", tags: ["Two Pointers"], link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
        { id: 25, title: "Reverse Nodes in k-Group", difficulty: "Hard", tags: ["Linked List", "Recursion"], link: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
      ]}
      faqItems={[
        {
          question: "Why is a dummy node helpful in linked list operations?",
          answer: "A dummy node acts as a permanent anchor head. It eliminates special edge-case checks for inserting or removing the first node of a linked list.",
        },
        {
          question: "How does Floyd's Tortoise and Hare algorithm detect cycle start points?",
          answer: "Fast advances 2 steps while slow advances 1. When fast and slow meet, reset slow to the head and advance both 1 step at a time; their collision point is the cycle start.",
        },
      ]}
    />
  );
}
