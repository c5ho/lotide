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

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (object1[key].isArray && object2[key].isArray) {
        eqArrays(object1[key], object2[key]);
      }
      if (object1[key] === object2[key])
        return true;
    }
    return false;
  }
  return false
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false