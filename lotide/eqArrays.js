//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`👍✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`👎❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let output1 ='';
  let output2 = '';

  if (array1.length === array2.length) {
    for (let element of array1) {
      output1 += String(element);
    }
    for (let element of array2) {
      output2 += String(element);
    }
    console.log(output1, output2);
    if (output1 === output2) {
    //  console.log(true);
      return true;
    } else
      return false;
      //  console.log(false);
  } else 
      console.log("size not the same")
      return false;
      //console.log(false);
}

//TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
