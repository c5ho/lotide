const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise returns false!

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  for (let key of Object.keys(object1)) {
    
    //if for a given key, the value is an array of values
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let eqArrayResult = eqArrays(object1[key], object2[key]);
      if (!eqArrayResult) {
        return false;
      }
    } 
    //if for a given key, the value for that key for both objects are not the same
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

