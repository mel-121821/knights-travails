// imports
import { AdjacencyGraph } from "./graph.js";

// Code
class Knight {
  constructor() {
    this.moveVariations = [
      [-2, 1],
      [-2, -1],
      [2, 1],
      [2, -1],
      [-1, 2],
      [-1, -2],
      [1, 2],
      [1, -2],
    ];
  }

  checkMoveValidity(arr) {
    const filtered = arr.filter((subArr) => {
      if (subArr[0] < 0 || subArr[0] > 7 || subArr[1] < 0 || subArr[1] > 7) {
        return false;
      } else {
        return true;
      }
    });
    return filtered;
  }

  getAvailableMoves(coords) {
    const potentialMoves = [];
    for (const option of this.moveVariations) {
      const newCoords = [coords[0] + option[0], coords[1] + option[1]];
      potentialMoves.push(newCoords);
    }
    const availableMoves = this.checkMoveValidity(potentialMoves);
    return availableMoves;
  }

  knightMoves(coords, newCoords) {
    const adjGraph = new AdjacencyGraph();
    const q = [];
    let moveCount = 1;
    adjGraph.visited(coords);
    q.push(coords);

    while (q.length) {
      let qLen = q.length;
      for (let i = 0; i < qLen; i++) {
        const curr = q.shift(); // 1st element is removed
        if (!adjGraph.isVisited(newCoords)) {
          const moves = this.getAvailableMoves(curr);
          for (const move of moves) {
            if (!adjGraph.isVisited(move)) {
              adjGraph.visited(move);
              adjGraph.addEdges(curr, move);
              q.push(move);
            }
          }
        }
      }
      if (!adjGraph.isVisited(newCoords)) {
        moveCount++;
      }
    }
    const path = adjGraph.logEdges(newCoords);
    console.log(`You made it in ${moveCount} moves!`);
    console.log(path);
    return path;
  }
}

const knight = new Knight();
knight.knightMoves([7, 1], [3, 3]);
knight.knightMoves([3, 3], [4, 3]);
knight.knightMoves([0, 6], [3, 3]);

export { knight };
