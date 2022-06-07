const countOnly = require('../countOnly');
const assertEqual = require('../assertEqual');

const firstNames = [  //list of all names (allItems)
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, //names to count, with true (itemsToCount)
  { 
    "Jason": true, 
    "Karima": true, 
    "Fang": true, 
    "Agouhanna": false 
  });

//console.log(result1);

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));