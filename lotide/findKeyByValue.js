const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`👍✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return (`👎❌Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(listOfStuff, valueToFind) {
  for (let key in listOfStuff) {
    if (listOfStuff[key] === valueToFind)
    return key;
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//findKeyByValue(bestTVShowsByGenre, "The Wire");

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));