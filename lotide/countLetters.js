const assertEqual =require('./assertEqual')

const removeSpace = function(string) {
  console.log(string.replace(/\s/g, ''));
}

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

module.exports = countLetters

