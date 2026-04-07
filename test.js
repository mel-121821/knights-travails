import { capitalize } from "./script";
import { reverseString } from "./script";
import { calculator } from "./script";
import { caesarCipher } from "./script";
import { analyzeArray } from "./script";

// Step 1 tests: capitalize

test("capitalize exists", () => {
  expect(capitalize).toBeDefined();
});

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("salut")).toBe("Salut");
});

//________________________________________

// Step 2 tests: reverseString

test("reverseString exists", () => {
  expect(reverseString).toBeDefined();
});

test("reverse string", () => {
  expect(reverseString("Hello")).toBe("olleH");
  expect(reverseString("Salut")).toBe("tulaS");
});

//________________________________________

// Step 3 tests: calculator

test("calculator exists", () => {
  expect(calculator).toBeDefined();
});

test("methods exist", () => {
  expect(calculator.add).toBeDefined();
  expect(calculator.subtract).toBeDefined();
  expect(calculator.multiply).toBeDefined();
  expect(calculator.divide).toBeDefined();
});

test("add 10 + 2", () => {
  expect(calculator.add(10, 2)).toBe(12);
});

test("subtract 10 - 2", () => {
  expect(calculator.subtract(10, 2)).toBe(8);
});

test("multiply 10 * 2", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});

test("divide 10 / 2", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

//________________________________________

// Step 4 tests: caesarCipher

test("caesarCipher exists", () => {
  expect(caesarCipher).toBeDefined();
});

test("shifted", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("shifted past z", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("shifted with case preserved", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("shifted with punctuation preserved", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

// The function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.
test("throw error if num is negative", () => {
  expect(() => caesarCipher("Hello World!", -2)).toThrow();
});

test("throw error if num is greater than 26", () => {
  expect(() => caesarCipher("Hello World!", 27)).toThrow();
});
//________________________________________

// Step 5 tests: analyzeArray

test("analyzeArray exists", () => {
  expect(analyzeArray).toBeDefined();
});

test("analyzeArray obj values exist", () => {
  expect(analyzeArray([])).toHaveProperty("length");
  expect(analyzeArray([])).toHaveProperty("min");
  expect(analyzeArray([])).toHaveProperty("max");
  expect(analyzeArray([])).toHaveProperty("average");
});

test("length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

//________________________________________
