import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Binary Search Trees (BST) Study Notes & LeetCode Practice | Ajit Dev",
  description: "Ordered tree nodes, balance conditions, AVL models, successor queries, and BST invariants in C++. Master class notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/bst",
  },
};

export default function DsaBstPage() {
  return (
    <MuiTopicPage
      topicKey="bst"
      topicName="Binary Search Trees (BST)"
      category="Hierarchical Structures"
      description="Binary Search Trees maintain an ordered invariant: for every node, left child values are strictly smaller and right child values are strictly greater. Master search, insertion, node deletion, and BST validation in C++."
      timeComplexity="Search / Insert / Delete: O(H) (Balanced O(log N))"
      spaceComplexity="O(H) Call Stack"
      solvedCount={10}
      totalTarget={25}
      codeTemplate={`// C++ Validate Binary Search Tree Invariant Template\n#include <iostream>\n#include <climits>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left, *right;\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n};\n\nbool isValidBST(TreeNode* root, long minVal = LONG_MIN, long maxVal = LONG_MAX) {\n    if (!root) return true;\n    if (root->val <= minVal || root->val >= maxVal) return false;\n    return isValidBST(root->left, minVal, root->val) && isValidBST(root->right, root->val, maxVal);\n}`}
      concepts={[
        "BST Invariant: Left subtree values < Node value < Right subtree values.",
        "In-Order Sort Property: Traversing a valid BST in-order produces elements in strictly ascending sorted order.",
        "Node Deletion (3 Cases): Leaf node (remove), single child (bypass), two children (replace with in-order successor).",
        "Balanced BSTs: AVL and Red-Black trees auto-rotate to enforce O(log N) height limits.",
      ]}
      proTips={[
        "Do not just check immediate left/right children; validate entire subtree range bounds [minVal, maxVal].",
        "In-order traversal with a 'prev' node pointer is an elegant way to detect BST violations in O(N).",
        "When deleting nodes with 2 children, find the smallest node in the right subtree (in-order successor).",
      ]}
      curatedProblems={[
        { id: 98, title: "Validate Binary Search Tree", difficulty: "Medium", tags: ["BST", "DFS"], link: "https://leetcode.com/problems/validate-binary-search-tree/" },
        { id: 700, title: "Search in a Binary Search Tree", difficulty: "Easy", tags: ["BST"], link: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
        { id: 230, title: "Kth Smallest Element in a BST", difficulty: "Medium", tags: ["BST", "In-Order"], link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
        { id: 450, title: "Delete Node in a BST", difficulty: "Medium", tags: ["BST", "Recursion"], link: "https://leetcode.com/problems/delete-node-in-a-bst/" },
      ]}
      faqItems={[
        {
          question: "Why can a naive BST degrade to O(N) time complexity?",
          answer: "If elements are inserted in strictly sorted or reverse order, the tree degenerates into a linear linked list of height N, turning search operations into O(N).",
        },
        {
          question: "How do I find the Kth smallest element in a BST in O(H + K)?",
          answer: "Perform iterative in-order traversal using a stack. Decrement K at each visited node; when K reaches 0, the current node is the Kth smallest element.",
        },
      ]}
    />
  );
}
