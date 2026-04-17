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

console.log(Chessboard.grid);
