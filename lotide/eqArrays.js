const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`👍✅ Assertion Passed: ${actual} === ${expected}`);
  }
    return (`👎❌Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  for (let element = 0; element < array1.length; element++) {
    if (array1[element] !== array2[element]) {
      return false
    }
  }
  return true;
};

//TEST CODE

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); // => should PASS
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => should PASS
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => should PASS

console.log(assertEqual(eqArrays([1, 2, 'blah'], [1, 2, 'blah']), false)); // => should FAIL
