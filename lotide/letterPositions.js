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

const letterPositions = function(sentence) {

  const results = {};
  //removeSpace(sentence);
  
  for (let position = 0; position < sentence.length; position++)
  {
    if (sentence[position] !== ' ') {
              if (results[sentence[position]]) {
      results[sentence[position]].push(position);
    } else {
      results[sentence[position]] = [position]
          }
  }
  }
  //delete results[' '];
  console.log(results);
};

const removeSpace = function(string) {
  console.log(string.replace(/\s/g, ''));
}

letterPositions("lighthouse in the house");
//console.log(assertArraysEqual(letterPositions("hello").e, [1]));