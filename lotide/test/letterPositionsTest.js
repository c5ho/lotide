const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const removeSpace = function(string) {
  console.log(string.replace(/\s/g, ''));
}

letterPositions("lighthouse in the house");
console.log(assertArraysEqual(letterPositions("hello").e, [1]));