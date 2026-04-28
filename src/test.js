//imports
import { Knight } from "./script";
import { knight } from "./script";

// tests
test("Knight class exists", () => {
  expect(Knight).toBeDefined();
});

test("knight at [7, 1] has the following potential coords: [5, 2], [5, 0], [6, 3]", () => {
  expect(knight.getAvailableMoves(7, 1)).toMatchObject([
    [5, 2],
    [5, 0],
    [6, 3],
  ]);
});

test("knight at [3, 3] has the following potential coords: [1, 4], [1, 2], [5, 4], [5, 2], [2, 5], [2, 1], [4, 5], [4, 1]", () => {
  expect(knight.getAvailableMoves(3, 3)).toMatchObject([
    [1, 4],
    [1, 2],
    [5, 4],
    [5, 2],
    [2, 5],
    [2, 1],
    [4, 5],
    [4, 1],
  ]);
});

test("knightMoves exists", () => {
  expect(knight.knightMoves).toBeDefined();
});

test("knightMoves(3, 3) with starting point [7, 1] returns 2 moves", () => {
  expect(knight.knightMoves(3, 3)).toBe(2);
});

test("knightMoves(1, 4) with starting point [7, 1] returns 3 moves", () => {
  expect(knight.knightMoves(1, 4)).toBe(3);
});

test("knightMoves(0, 2) with starting point [7, 1] returns 4 moves", () => {
  expect(knight.knightMoves(0, 2)).toBe(4);
});

// test("knightMoves");
