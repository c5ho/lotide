const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => should FAIL
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => should PASS
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => should FAIL