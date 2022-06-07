const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');

//TEST CODE
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const ab0 = { a: "1", b: "32"};
const ba0 = { b: "2", a: "1" };
console.log(eqObjects(ab0, ba0)); // => false; values for key b are diff

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false; number of key/prop pairs are diff

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false