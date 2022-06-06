const assertEqual = require('../assertEqual');
const head = require('../head');

//TEST CODE
console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([1]), 1));
console.log(assertEqual(head([]), undefined));