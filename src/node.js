class Node {
  constructor(prevNode = null, x, y) {
    this.x = x;
    this.y = y;
    this.visited = false;
    this.prevNode = prevNode;
  }

  static getNode() {
    return Node;
  }
}

export { Node };
