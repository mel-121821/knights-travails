//imports
import { Knight } from "./script";
import { knight } from "./script";

// tests
test("Knight class exists", () => {
  expect(Knight).toBeDefined();
});

test("knight at [7, 1] has the following potential coords: [5, 2], [5, 0], [6, 3]", () => {
  expect(knight.getAvailableMoves(7, 1)).toContainEqual([5, 2]);
  expect(knight.getAvailableMoves(7, 1)).toContainEqual([5, 0]);
  expect(knight.getAvailableMoves(7, 1)).toContainEqual([6, 3]);
});

test("knight at [3, 3] has the following potential coords: [1, 4], [1, 2], [5, 4], [5, 2], [2, 5], [2, 1], [4, 5], [4, 1]", () => {
  expect(knight.getAvailableMoves(3, 3)).toContainEqual([1, 4]);
  expect(knight.getAvailableMoves(3, 3)).toContainEqual([1, 2]);
  expect(knight.getAvailableMoves(3, 3)).toContainEqual([5, 4]);
  expect(knight.getAvailableMoves(3, 3)).toContainEqual([5, 2]);
  expect(knight.getAvailableMoves(3, 3)).toContainEqual([2, 5]);
  expect(knight.getAvailableMoves(3, 3)).toContainEqual([2, 1]);
  expect(knight.getAvailableMoves(3, 3)).toContainEqual([4, 5]);
  expect(knight.getAvailableMoves(3, 3)).toContainEqual([4, 1]);
});
