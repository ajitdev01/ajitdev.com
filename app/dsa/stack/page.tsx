import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Stack Data Structures Study Notes & LeetCode Practice | Ajit Dev",
  description: "LIFO queue memory arrays, matching nested parentheses, and monotonic stack evaluation in C++. Master class notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/stack",
  },
};

export default function DsaStackPage() {
  return (
    <MuiTopicPage
      topicKey="stack"
      topicName="Stack Data Structures"
      category="Linear Data Structures"
      description="Stacks enforce Last-In, First-Out (LIFO) access ordering. Master call stack evaluation, nested parentheses matching, infix-to-postfix conversion, and monotonic stack patterns for Next Greater Element problems in C++."
      timeComplexity="Push / Pop / Top: O(1)"
      spaceComplexity="O(N) Vector Buffer"
      solvedCount={22}
      totalTarget={25}
      codeTemplate={`// C++ Monotonic Increasing Stack Template (Next Greater Element)\n#include <iostream>\n#include <vector>\n#include <stack>\nusing namespace std;\n\nvector<int> nextGreaterElement(const vector<int>& nums) {\n    int n = nums.size();\n    vector<int> res(n, -1);\n    stack<int> st; // Stores array indices\n    \n    for (int i = 0; i < n; ++i) {\n        while (!st.empty() && nums[st.top()] < nums[i]) {\n            res[st.top()] = nums[i];\n            st.pop();\n        }\n        st.push(i);\n    }\n    return res;\n}`}
      concepts={[
        "LIFO Discipline: Elements pushed last are popped first, making stacks ideal for recursive call modeling.",
        "Monotonic Stacks: Maintains elements in strictly increasing or decreasing order to solve range query limits in O(N).",
        "Parentheses Parsing: Validates nested brackets by matching opening braces against popped stack tops.",
        "Min/Max Stack: Tracks minimum or maximum elements in O(1) time using auxiliary min stacks.",
      ]}
      proTips={[
        "Always check 'st.empty()' before calling 'st.top()' or 'st.pop()' to avoid segmentation faults.",
        "Store indices rather than raw values inside monotonic stacks for distance computation.",
        "In histogram problems, push dummy zero-height elements to trigger remaining stack flushes.",
      ]}
      curatedProblems={[
        { id: 20, title: "Valid Parentheses", difficulty: "Easy", tags: ["Stack", "String"], link: "https://leetcode.com/problems/valid-parentheses/" },
        { id: 739, title: "Daily Temperatures", difficulty: "Medium", tags: ["Monotonic Stack"], link: "https://leetcode.com/problems/daily-temperatures/" },
        { id: 155, title: "Min Stack", difficulty: "Medium", tags: ["Stack", "Design"], link: "https://leetcode.com/problems/min-stack/" },
        { id: 84, title: "Largest Rectangle in Histogram", difficulty: "Hard", tags: ["Monotonic Stack"], link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
      ]}
      faqItems={[
        {
          question: "How does a Monotonic Stack achieve O(N) overall time complexity?",
          answer: "Even though there is a nested while loop inside the iteration, each element index is pushed onto the stack exactly once and popped at most once across the entire algorithm execution.",
        },
        {
          question: "What is the difference between std::stack and std::vector in C++?",
          answer: "std::stack is a container adapter (default container std::deque). It restricts interface access strictly to top(), push(), and pop() operations.",
        },
      ]}
    />
  );
}
