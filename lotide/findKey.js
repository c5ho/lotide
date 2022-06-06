const findKey = function(obj, callback) {
  let result;

  for (let key in obj) {
    if (callback(obj[key])) {
      result = key;
      return result;
     }    
  }
  return result;
}

module.exports = findKey;
