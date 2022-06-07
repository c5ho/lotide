const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('should return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
  it('should return [] for ["Calvin"]', () => {
    assert.deepEqual(tail(['Calvin']), []);
  })
  it('should return undefined for []', () => {
    assert.deepEqual(tail([]), []);
  })
});

//OLD TEST CASES
// Test Case 1: Check the returned array
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(assertEqual(result.length, 2));
// console.log(assertEqual(result[0], "Lighthouse"));
// console.log(assertEqual(result[1], "Labs"));

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// console.log(assertEqual(words.length, 3));

// // Test Case: An array with one element
// const names = ["Calvin"];
// console.log(assertEqual(tail(names).length, 0));

// // Test Case: An array with no element
// const empty = [];
// //console.log(tail(empty));
// console.log(assertEqual(tail(empty).length, 0));