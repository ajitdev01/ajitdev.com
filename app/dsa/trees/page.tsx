import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Tree Data Structures Study Notes & LeetCode Practice | Ajit Dev",
  description: "Binary trees, DFS/BFS traversals, LCA lookups, and path sums in C++. Master class implementation notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/trees",
  },
};

export default function DsaTreesPage() {
  return (
    <MuiTopicPage
      topicKey="trees"
      topicName="Tree Data Structures"
      category="Hierarchical Structures"
      description="Trees are non-linear hierarchical data structures composed of connected parent and child nodes. Master Depth-First Search (Pre-order, In-order, Post-order) and Level-Order Breadth-First Search (BFS) traversals in C++."
      timeComplexity="Traversal: O(N) | Height Search: O(H)"
      spaceComplexity="Call Stack O(H) (H = height of tree)"
      solvedCount={12}
      totalTarget={30}
      codeTemplate={`// C++ Binary Tree DFS Path Sum & Height Template\n#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n};\n\nint maxPathSum(TreeNode* root, int& maxSum) {\n    if (!root) return 0;\n    int leftGain = max(0, maxPathSum(root->left, maxSum));\n    int rightGain = max(0, maxPathSum(root->right, maxSum));\n    \n    // Price of new path with current node as highest node\n    maxSum = max(maxSum, leftGain + rightGain + root->val);\n    \n    return root->val + max(leftGain, rightGain);\n}`}
      concepts={[
        "Depth-First Search (DFS): Explores as deep as possible down each branch before backtracking.",
        "Breadth-First Search (BFS): Level-order traversal using queue buffer for shortest path depth.",
        "Lowest Common Ancestor (LCA): Finding split ancestor node in O(N) single traversal.",
        "Tree Diameter: Finding max distance between any two leaf nodes via bottom-up recursion.",
      ]}
      proTips={[
        "Handle null tree nodes first: 'if (!root) return 0;' prevents null pointer dereference crashes.",
        "Use pass-by-reference variables for global accumulators (e.g. maxDiameter, maxSum).",
        "In skewed binary trees, recursion stack depth reaches O(N); consider iterative stack if limits are tight.",
      ]}
      curatedProblems={[
        { id: 104, title: "Maximum Depth of Binary Tree", difficulty: "Easy", tags: ["Tree", "DFS"], link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
        { id: 102, title: "Binary Tree Level Order Traversal", difficulty: "Medium", tags: ["Tree", "BFS"], link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
        { id: 236, title: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium", tags: ["Tree", "Recursion"], link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
        { id: 124, title: "Binary Tree Maximum Path Sum", difficulty: "Hard", tags: ["Tree", "DFS"], link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
      ]}
      faqItems={[
        {
          question: "When should I use BFS instead of DFS for tree traversals?",
          answer: "BFS is preferred for level-order processing, finding minimum depth or nearest targets, and scenarios where processing nodes layer by layer is required.",
        },
        {
          question: "What is In-Order traversal used for in Binary Search Trees?",
          answer: "In-Order traversal (Left -> Node -> Right) visits BST nodes in strictly sorted ascending order.",
        },
      ]}
    />
  );
}
