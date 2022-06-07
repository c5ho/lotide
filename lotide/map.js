const map = function(array, callback) {
  
  const results = [];

  for (let word of array) {
     results.push(callback(word));
   }

   return results;
}

module.exports = map;