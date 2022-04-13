function SolveGraph (graph, start, end, visited = {}) {
  if (visited[start]) return false
  visited[start] = true

  for (const node of graph[start]) {
    if (node === end) return true
    if (SolveGraph(graph, node, end, visited) === true) return true
  }
  return false
}

// O(n)

module.exports = SolveGraph;
