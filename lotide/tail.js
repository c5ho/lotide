const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`👍✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`👎❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let arrayTail = array.slice(1, array.length);
  //if (array.length = 1)
  return arrayTail;
};

// Test Case 1: Check the returned array
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2));
console.log(assertEqual(result[0], "Lighthouse"));
console.log(assertEqual(result[1], "Labs"));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
console.log(assertEqual(words.length, 3));

// Test Case: An array with one element
const names = ["Calvin"];
console.log(assertEqual(tail(names).length, 0));

// Test Case: An array with one element
const empty = [];
console.log(tail(empty));
console.log(assertEqual(tail(empty).length, 0));