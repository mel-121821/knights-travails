class Node {
  constructor(x, y, prevNode = null) {
    this.x = x;
    this.y = y;
    this.visited = false;
    this.prevNode = prevNode;
    this.nextNodes = [];
  }

  static getNode(x, y) {
    return Node;
  }
}

class AdjacencyGraph {
  constructor() {
    this.rows = 8;
    this.columns = 8;
    this.graph = this.makeGraph();
  }

  makeGraph() {
    const graph = [];
    for (let i = 0; i < this.rows; i++) {
      graph[i] = [];
      for (let j = 0; j < this.columns; j++) {
        graph[i].push("");
      }
    }
    return graph;
  }

  addAdj(x, y, arr) {
    this.graph[x][y] = arr;
  }

  visited(x, y) {
    this.graph[x][y] = true;
  }

  isVisited(x, y) {
    return this.graph[x][y];
  }
}

export { Node, AdjacencyGraph };
