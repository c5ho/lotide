const takeUntil = function(array, callback) {
  const results1 = [];

  for (let element of array) {
    if (callback(element)) {
      return results1;
    } 
    results1.push(element);
  }
  return results1;
}

module.exports = takeUntil;