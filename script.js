// imports

// Code

const Chessboard = (function () {
  const rows = 8;
  const columns = 8;
  const marker = "0";
  const recent = "X";
  const potential = "?";
  const grid = makeGrid();

  function makeGrid() {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      grid[i] = [];
      for (let j = 0; j < columns; j++) {
        grid[i].push("");
      }
    }
    return grid;
  }

  function markCurrentPlace(x, y) {
    grid[x][y] = marker;
  }

  function markRecentPlace(x, y) {
    grid[x][y] = recent;
  }

  function markPotentials(coordsList) {
    for (let coords of coordsList) {
      grid[coords[0]][coords[1]] = potential;
    }
  }

  function clearGrid() {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        grid[j] = "";
      }
    }
  }
  return { grid, markCurrentPlace, markRecentPlace, markPotentials, clearGrid };
})();

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
}

const knight = new Knight(3, 3);

console.log(Chessboard.grid);

const availableMoves = knight.getAvailableMoves(3, 3);
console.log(availableMoves);

export { Knight, knight };
