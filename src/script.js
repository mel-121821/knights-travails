// imports
import { Chessboard } from "./chessboard.js";
import { AdjacencyGraph } from "./node.js";

// Code

// Notes for getting started on knightMoves:
// You don't need to explicitly create a graph, you can think of it as being implicit
// The algorithm should dynamically explore all possible moves
// May need to create an adjacency list
// Will be using breadth-first search and applying it to a grid
// Will also need to use a queue

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
    // Chessboard.markCurrentPlace(this.coords);
  }

  // setPiece(x, y, newX, newY) {
  //   Chessboard.markRecentPlace(x, y);
  //   Chessboard.markCurrentPlace(newX, newY);
  // }

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
    Chessboard.markPotentials(availableMoves);
    return availableMoves;
  }

  knightMoves(coords, newCoords) {
    const root = coords;
    const adjGraph = new AdjacencyGraph();
    adjGraph.visited(root); // visit coords
    let moveCounter = 1;
    const q = [];
    q.push(root);

    while (q.length) {
      let qLen = q.length;
      // console.log(JSON.parse(JSON.stringify(q)));
      for (let i = 0; i < qLen; i++) {
        const curr = q.shift(); // 1st element is removed
        if (!adjGraph.isVisited(newCoords)) {
          // coords not yet visited
          const moves = this.getAvailableMoves(curr);
          for (const move of moves) {
            if (!adjGraph.isVisited(move)) {
              adjGraph.visited(move);
              adjGraph.addEdges(curr, move);
              q.push(move);
            }
          }
          // console.log(JSON.parse(JSON.stringify(q)));
        }
      }
      if (!adjGraph.isVisited(newCoords)) {
        moveCounter++;
      }
    }
    console.log(`You made it in ${moveCounter} moves!`);
    adjGraph.logEdges(newCoords);
    console.log(adjGraph.graph);
    return moveCounter;
  }
}

const knight = new Knight();
const adj = new AdjacencyGraph();

// console.log(Chessboard.grid);
adj.visited([7, 1]);
// console.log(adj.isVisited(7, 1));

knight.knightMoves([7, 1], [3, 3]);
// knight.knightMoves([3, 3], [4, 3]);
knight.knightMoves([0, 6], [3, 3]);
// knight.knightMoves(0, 2);

// const availableMoves = knight.getAvailableMoves(7, 1);
// console.log(availableMoves);

export { knight };
