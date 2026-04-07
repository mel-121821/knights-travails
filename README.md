# The ODIN Project

## [Testing Practice](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice)

---

### Instructions

Write tests for the following, and then make the tests pass!

1. A `capitalize` function that takes a string and returns it with the first character capitalized.

- [x] Test
- [x] Code

2. A `reverseString` function that takes a string and returns it reversed.

- [x] Test
- [x] Code

3. A `calculator` object that contains functions for the basic operations: `add`, `subtract`, `divide`, and `multiply`. Each of these functions should take two numbers and return the correct calculation.

- [x] Test
- [x] Code

4. A `caesarCipher` function that takes a string and a shift factor and returns it with each character “shifted”.
   - Don’t forget to test wrapping from `z` to `a`. For example, `caesarCipher('xyz', 3)` should return `'abc'`.
   - Don’t forget to test case preservation. The shifted lettercase should follow the original lettercase. For example, `caesarCipher('HeLLo', 3)` should return `'KhOOr'`.
   - Don’t forget to test punctuation. Punctuation, spaces, and other non-alphabetical characters should remain unchanged. For example, `caesarCipher('Hello, World!', 3)` should return `'Khoor, Zruog!'`.
   - For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final `caesarCipher` function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

- [x] Test
- [x] Code

5. An `analyzeArray` function that takes an array of numbers and returns an object with the following properties: `average`, `min`, `max`, and `length`.

```
const object = analyzeArray([1,8,3,4,2,6]);

object == {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};

```

- [x] Test
- [x] Code

---

### Resources:

If you forget to add gitignore when creating a repo:
https://docs.github.com/en/get-started/git-basics/ignoring-files
(in this case, I copied an existing gitignore file from the weather app)

Shifting letters with charCodeAt():
https://stackoverflow.com/questions/33084862/js-how-to-shift-each-letter-in-the-given-string-n-places-down-in-the-alphabet

List of ASCII Values:
https://www.geeksforgeeks.org/dsa/ascii-table/

.test() to compare a string to a regex:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

Test matchers:
https://jestjs.io/docs/using-matchers

Jest docs (expect): test if an obj has a property --> .toHaveProperty()
https://jestjs.io/docs/expect
