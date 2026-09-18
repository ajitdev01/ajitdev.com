import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Backtracking Algorithms Study Notes & LeetCode Practice | Ajit Dev",
  description: "Recursive path finding, state restorations, N-Queens placement, and constraint puzzle solving in C++. Master class notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/backtracking",
  },
};

export default function DsaBacktrackingPage() {
  return (
    <MuiTopicPage
      topicKey="backtracking"
      topicName="Backtracking Algorithms"
      category="Recursive Search"
      description="Backtracking systematically explores solution decision trees recursively, pruning invalid state paths as soon as constraints are violated. Master Permutations, Combinations, Sudoku Solvers, and N-Queens in C++."
      timeComplexity="Combinatorial O(2^N) or O(N!)"
      spaceComplexity="O(N) Recursion Stack Depth"
      solvedCount={18}
      totalTarget={20}
      codeTemplate={`// C++ N-Queens Backtracking State Exploration Template\n#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvoid solveNQueens(int row, int n, vector<string>& board, vector<vector<string>>& res,\n                 vector<bool>& cols, vector<bool>& diag1, vector<bool>& diag2) {\n    if (row == n) { res.push_back(board); return; }\n    for (int col = 0; col < n; ++col) {\n        if (cols[col] || diag1[row + col] || diag2[row - col + n]) continue;\n        board[row][col] = 'Q';\n        cols[col] = diag1[row + col] = diag2[row - col + n] = true;\n        \n        solveNQueens(row + 1, n, board, res, cols, diag1, diag2);\n        \n        board[row][col] = '.'; // Backtrack state restoration\n        cols[col] = diag1[row + col] = diag2[row - col + n] = false;\n    }\n}`}
      concepts={[
        "Choose -> Explore -> Un-choose: Make a choice, make recursive call, then restore state (pop_back / unflag).",
        "Constraint Pruning: Abort recursive branches early if validity conditions fail.",
        "Permutations vs Subsets: Permutations order elements (used vector), Subsets pick combinations (index offset).",
        "O(1) Diagonal Check: Represent diagonal attacks via 'row + col' and 'row - col + N' lookup arrays.",
      ]}
      proTips={[
        "Always restore modified state back to its original value immediately after the recursive call finishes.",
        "Use boolean vectors for O(1) validity checks rather than nested validation loops.",
        "Pass accumulator vectors by reference (vector<int>& path) to avoid deep vector copy overhead.",
      ]}
      curatedProblems={[
        { id: 46, title: "Permutations", difficulty: "Medium", tags: ["Backtracking"], link: "https://leetcode.com/problems/permutations/" },
        { id: 78, title: "Subsets", difficulty: "Medium", tags: ["Backtracking", "Bitmask"], link: "https://leetcode.com/problems/subsets/" },
        { id: 79, title: "Word Search", difficulty: "Medium", tags: ["Backtracking", "Grid"], link: "https://leetcode.com/problems/word-search/" },
        { id: 51, title: "N-Queens", difficulty: "Hard", tags: ["Backtracking", "Recursion"], link: "https://leetcode.com/problems/n-queens/" },
      ]}
      faqItems={[
        {
          question: "What is the key difference between Backtracking and standard DFS?",
          answer: "DFS explores graph nodes to find reachability. Backtracking explores solution state spaces and explicitly reverts state (un-choosing decisions) after returning from subproblems.",
        },
        {
          question: "How do diagonal check arrays work in N-Queens?",
          answer: "In an N x N chessboard, all cells on the same main diagonal share equal 'row - col + N' values, while all cells on the anti-diagonal share equal 'row + col' values.",
        },
      ]}
    />
  );
}
