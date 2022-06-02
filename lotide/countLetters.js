const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`👍✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return (`👎❌Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  
  removeSpace(string);

  const letterCount = {}

  for (let letter of string) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;  
    }    
  }
  return letterCount;
}

const removeSpace = function(string) {
  console.log(string.replace(/\s/g, ''));
}

console.log(countLetters('lighthouse in the house'));