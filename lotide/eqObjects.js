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

// Returns true if both objects have identical keys with identical values.
// Otherwise returns false!

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  for (let key of Object.keys(object1)) {
    
    //if for a given key, the value is an array of values
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let eqArrayResult = eqArrays(object1[key], object2[key]);
      if (!eqArrayResult) {
        return false;
      }
    } 
    //if for a given key, the value for that key for both objects are not the same
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// const ab = { a: "1", b: "2"};
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const ab0 = { a: "1", b: "32"};
// const ba0 = { b: "2", a: "1" };
// console.log(eqObjects(ab0, ba0)); // => false; values for key b are diff

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false; number of key/prop pairs are diff

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false