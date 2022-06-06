const assertEqual = require('../assertEqual');

//TEST CODE
console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs")); // => should PASS
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));      // => should FAIL
console.log(assertEqual(1, 1));                             // => should PASS
console.log(assertEqual(1, 1.1));                           // => should FAIL
