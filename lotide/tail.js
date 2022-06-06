const assertEqual =require('./assertEqual')

const tail = function(array) {
  let arrayTail = array.slice(1, array.length);
  //if (array.length = 1)
  return arrayTail;
};

module.exports = tail;