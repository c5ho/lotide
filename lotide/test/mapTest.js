const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

//TEST CODE
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));









//Aside from Mentor help:

/*const funcName = (num) => num * num;

const result1 = map(words, funcName());
console.log(result1);

const result2 = map(words, (num) => num * num);
console.log(result2);*/

