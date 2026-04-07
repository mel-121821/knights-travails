function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = (() => {
  const add = (a, b) => {
    return a + b;
  };

  const subtract = (a, b) => {
    return a - b;
  };

  const multiply = (a, b) => {
    return a * b;
  };

  const divide = (a, b) => {
    return a / b;
  };

  return { add, subtract, multiply, divide };
})();

function caesarCipher(str, num) {
  // charCode of [A-Z] == [65-90]
  // charCode of [a-z] == [97-122]
  if (num < 0 || num > 26) {
    throw new Error("Number cannot be negative or greater than 26");
  }
  let shifted = "";
  const regex = /[a-z]/i;
  for (let i = 0; i < str.length; i++) {
    let newChar = str[i];
    if (regex.test(str[i])) {
      let code = str[i].charCodeAt();
      let newCode = code + num;
      if ((code <= 90 && newCode > 90) || newCode > 122) {
        newCode -= 26;
      }
      newChar = String.fromCharCode(newCode);
    }
    shifted += newChar;
  }
  return shifted;
}

function analyzeArray(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  const length = arr.length;
  const min = arr[0];
  const max = arr[length - 1];
  const average =
    arr.reduce((a, b) => {
      return a + b;
    }, 0) / length;
  return { length, min, max, average };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
