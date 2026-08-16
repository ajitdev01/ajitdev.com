import React from "react";
import { Metadata } from "next";
import MuiTopicPage from "@/app/components/dsa/MuiTopicPage";

export const metadata: Metadata = {
  title: "Graph Data Structures Study Notes & LeetCode Practice | Ajit Dev",
  description: "Adjacency lists, BFS shortest paths, DFS connected components, Dijkstra's algorithm, & Topological sort in C++. Master class notes and LeetCode solutions.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/graph",
  },
};

export default function DsaGraphPage() {
  return (
    <MuiTopicPage
      topicKey="graph"
      topicName="Graph Data Structures"
      category="Advanced Structures"
      description="Graphs consist of vertices connected by edges (directed or undirected). Master adjacency list representations, connected component traversal (DFS/BFS), topological sorting (Kahn's Algo), and shortest path routing (Dijkstra's Algo) in C++."
      timeComplexity="BFS/DFS: O(V + E) | Dijkstra: O(E log V)"
      spaceComplexity="Adjacency List O(V + E)"
      solvedCount={8}
      totalTarget={35}
      codeTemplate={`// C++ Topological Sort (Kahn's BFS Algorithm) Template\n#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nvector<int> topologicalSort(int V, const vector<vector<int>>& adj) {\n    vector<int> inDegree(V, 0);\n    for (int u = 0; u < V; ++u) {\n        for (int v : adj[u]) inDegree[v]++;\n    }\n    \n    queue<int> q;\n    for (int i = 0; i < V; ++i) if (inDegree[i] == 0) q.push(i);\n    \n    vector<int> order;\n    while (!q.empty()) {\n        int u = q.front(); q.pop();\n        order.push_back(u);\n        for (int v : adj[u]) {\n            if (--inDegree[v] == 0) q.push(v);\n        }\n    }\n    return order.size() == V ? order : vector<int>(); // Cycle check\n}`}
      concepts={[
        "Adjacency List vs Matrix: Adjacency list saves space O(V+E) for sparse graphs.",
        "Shortest Path Unweighted BFS: BFS guarantees finding minimum edge distance first.",
        "Topological Sort: Orders directed acyclic graph (DAG) vertices by prerequisites.",
        "Dijkstra's Algorithm: Min-heap priority queue for non-negative weighted shortest path.",
      ]}
      proTips={[
        "Track Visited State: Always maintain a visited set or vector to prevent infinite loops in cyclic graphs.",
        "Use 0-based indexing for graph nodes to simplify vector array offsets.",
        "Detect cycles early in DAGs by comparing topological order size with total vertices V.",
      ]}
      curatedProblems={[
        { id: 200, title: "Number of Islands", difficulty: "Medium", tags: ["Graph", "BFS/DFS"], link: "https://leetcode.com/problems/number-of-islands/" },
        { id: 207, title: "Course Schedule", difficulty: "Medium", tags: ["Graph", "Topological Sort"], link: "https://leetcode.com/problems/course-schedule/" },
        { id: 133, title: "Clone Graph", difficulty: "Medium", tags: ["Graph", "BFS"], link: "https://leetcode.com/problems/clone-graph/" },
        { id: 269, title: "Alien Dictionary", difficulty: "Hard", tags: ["Graph", "Topological Sort"], link: "https://leetcode.com/problems/alien-dictionary/" },
      ]}
      faqItems={[
        {
          question: "When should I use Dijkstra's Algorithm vs BFS?",
          answer: "Use standard BFS for unweighted graphs (all edges have weight 1). Use Dijkstra's algorithm (min-heap priority queue) when graph edges have varying non-negative weights.",
        },
        {
          question: "How does Kahn's algorithm detect cycle presence?",
          answer: "Kahn's algorithm pushes in-degree 0 nodes into a queue. If the final ordered list size is less than total vertices V, the graph contains a directed cycle.",
        },
      ]}
    />
  );
}
