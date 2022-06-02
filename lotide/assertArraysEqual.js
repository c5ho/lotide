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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return (`👍✅ Assertion Passed: [ ${actual} ] === [ ${expected} ]`);
  }
  return (`👎❌Assertion Failed [ ${actual} ] !== [ ${expected} ]`);
};

//TEST CODE
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => should FAIL
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => should PASS
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => should FAIL