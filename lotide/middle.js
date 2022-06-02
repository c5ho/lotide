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

const middle = function(array) {
  let middleArray = [];
  let middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return middleArray;
  }
  if (array.length % 2 !== 0) {
    middleArray.push(array[middleIndex]);
    return middleArray;
  }
  middleArray.push(array[middleIndex-1]);
  middleArray.push(array[middleIndex]);
  return middleArray;
}

//For arrays with one or two elements, there is no middle. Return an empty array.
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
//For arrays with odd number of elements, an array containing a single middle element should be returned.
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

console.log(assertArraysEqual(middle([1]), [])); // => PASS
console.log(assertArraysEqual(middle([1, 2]), [])); // => PASS
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => PASS
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // => PASS
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // => PASS
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [2])); // => FAIL