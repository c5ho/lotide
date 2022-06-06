const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`👍✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return (`👎❌Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  //let counter = 0;

  for (const item of allItems) {  //for each name in the list names
    //console.log(item);
    if (itemsToCount[item]) { //using bracket notation, for each name in the list, if the name is also on the names to find as true
      if (results[item]) { //in the new results object, if the key (name) exists, increment that name by 1
        results[item] += 1;
      } else {  //in the new results object, if the key does not exist, add it and make it 1
        results[item] = 1;
      }
    }
  }
  return results;
}

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