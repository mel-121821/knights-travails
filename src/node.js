class Node {
  constructor(x, y) {
    this.nodeCoords = [x, y];
    this.visited = false;
    this.prevNode = null;
    this.nextNodes = [];
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
        graph[i].push(new Node(i, j));
      }
    }
    return graph;
  }

  addEdges(curr, next) {
    this.graph[curr[0]][curr[1]].nextNodes.push(next);
    this.graph[next[0]][next[1]].prevNode = this.graph[curr[0]][curr[1]];
  }

  logEdges(coords) {
    let curr = this.graph[coords[0]][coords[1]];
    const path = [];
    while (curr.prevNode !== null) {
      path.push(curr.prevNode.nodeCoords);
      curr = curr.prevNode;
    }
    path.reverse().push(coords);
    console.log("Here is your path:");
    console.log(path);
  }

  visited(coords) {
    this.graph[coords[0]][coords[1]].visited = true;
  }

  isVisited(coords) {
    return this.graph[coords[0]][coords[1]].visited;
  }
}

export { Node, AdjacencyGraph };
