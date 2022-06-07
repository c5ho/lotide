const letterPositions = function(sentence) {

  const results = {};
  
  for (let position = 0; position < sentence.length; position++)
  {
    if (sentence[position] !== ' ') {   //if character is not a space
      if (results[sentence[position]]) {  //if position array for a letter exists, add position
        results[sentence[position]].push(position);
      } else {
      results[sentence[position]] = [position] //add position of current letter at position
      }
    }
  }
  return results;
};

module.exports = letterPositions;