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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return (`👍✅ Assertion Passed: [ ${array1} ] === [ ${array2} ]`);
  }
  return (`👎❌Assertion Failed [ ${array1} ] !== [ ${array2} ]`);
};

const without = function(sourceArray, itemsToRemove) {
  let subsetArray = []
  for (let element of sourceArray) {
    if (!itemsToRemove.includes(element)) { //if the array element is not in the arry of items to remove
      subsetArray.push(element); //add that element to the new subset array
    }
  }
  console.log(subsetArray);
};



//TEST CODE

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"])); // -> should PASS
