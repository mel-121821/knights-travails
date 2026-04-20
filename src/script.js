// imports
import { Chessboard } from "./chessboard.js";

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

  // pseudocode for knightMoves()

  // start with knight coords - will act as the root - ex. [7, 1]
  // using the coords, create a node obj that contains the coordinates and whether or not the node is visited
  // create a q -> q = []
  // dynamically calculate all available moves ->
  // add all available coords to the q -> q = [[5, 2], [5, 0], [6, 3]]
  // visit next item in q
  // get the next coords and add to q
  // Need to also create an adjacency graph
  // for each Node that is created, an adjacency arr is created
  // Nodes may appear in the graph multiple times
  // this way you can ensure that a node can be visited multiple times from different paths but not multiple times from the same path
}

const knight = new Knight(7, 1);

console.log(Chessboard.grid);

const availableMoves = knight.getAvailableMoves(7, 1);
console.log(availableMoves);

export { Knight, knight };
