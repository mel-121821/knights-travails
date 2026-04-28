// imports
import { Chessboard } from "./chessboard.js";
import { Node } from "./node.js";
import { AdjacencyGraph } from "./node.js";

// Code

// Notes for getting started on knightMoves:
// You don't need to explicitly create a graph, you can think of it as being implicit
// The algorithm should dynamically explore all possible moves
// May need to create an adjacency list
// Will be using breadth-first search and applying it to a grid
// Will also need to use a queue

class Knight {
  constructor(x = 7, y = 1) {
    this.x = x;
    this.y = y;
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
    Chessboard.markCurrentPlace(x, y);
  }

  setPiece(x, y, newX, newY) {
    Chessboard.markRecentPlace(x, y);
    Chessboard.markCurrentPlace(newX, newY);
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

  getAvailableMoves(x, y) {
    const potentialMoves = [];
    for (const option of this.moveVariations) {
      const newCoords = [x + option[0], y + option[1]];
      potentialMoves.push(newCoords);
    }
    const availableMoves = this.checkMoveValidity(potentialMoves);
    Chessboard.markPotentials(availableMoves);
    return availableMoves;
  }

  knightMoves(newX, newY) {
    const root = [this.x, this.y];
    const adjGraph = new AdjacencyGraph();
    adjGraph.visited(root[0], root[1]); // visit coords
    let moveCounter = 1;
    const q = [];
    q.push(root);

    while (q.length) {
      let qLen = q.length;
      console.log(`while loop q reset. qLen = ${qLen}`);
      console.log(JSON.parse(JSON.stringify(q)));
      for (let i = 0; i < qLen; i++) {
        const curr = q.shift(); // 1st element is removed
        if (adjGraph.isVisited(newX, newY)) {
          // stop adding to q when the correct coords are reached
          // do not add new moves to the q as the shortest path has been found.
          // do finish the q as there may be multiple shortest paths
          // do nothing -
        } else {
          const moves = this.getAvailableMoves(curr[0], curr[1]); // arr of valid moves
          for (const move of moves) {
            // if move coords in graph are not visited, mark them as such and then push to q
            if (adjGraph.isVisited(move[0], move[1]) !== true) {
              adjGraph.visited(move[0], move[1]);
              q.push(move);
            }
          }
          console.log(JSON.parse(JSON.stringify(q)));
        }
      }
      if (!adjGraph.isVisited(newX, newY)) {
        moveCounter++;
      }

      console.log(moveCounter);
    }
    console.log(moveCounter);
    console.log(adjGraph.graph);
    return moveCounter;
  }
}

const knight = new Knight(7, 1);

console.log(Chessboard.grid);

// knight.knightMoves(3, 3);
knight.knightMoves(0, 2);

// const availableMoves = knight.getAvailableMoves(7, 1);
// console.log(availableMoves);

export { Knight, knight };
