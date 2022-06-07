const assertEqual = require('../assertEqual');
const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3,]), 1);
  });
  it('returns Hello for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('returns 5 for [5]', () => {
    assert.strictEqual(head([5]), 5);
  });
  it('returns undefined for []', () => {
    assert.strictEqual(head([]), undefined);
  });
});
//OLD TEST CODE
// console.log(assertEqual(head([5, 6, 7]), 5));
// console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
// console.log(assertEqual(head([1]), 1));
// console.log(assertEqual(head([]), undefined));