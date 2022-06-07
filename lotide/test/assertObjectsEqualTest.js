const assertObjectsEqual = require('../assertObjectsEqual');

//TEST CODE:
console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));
console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '2' }));