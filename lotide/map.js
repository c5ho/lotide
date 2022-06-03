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

const map = function(array, callback) {
  
  const results = [];

  for (let word of array) {
     results.push(callback(word));
   }

   return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

//TEST CODE
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));









/*const funcName = (num) => num * num;

const result1 = map(words, funcName());
console.log(result1);

const result2 = map(words, (num) => num * num);
console.log(result2);*/