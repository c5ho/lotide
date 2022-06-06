const middle = function(array) {
  let middleArray = [];
  let middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return middleArray;
  }
  if (array.length % 2 !== 0) {
    middleArray.push(array[middleIndex]);
    return middleArray;
  }
  middleArray.push(array[middleIndex-1]);
  middleArray.push(array[middleIndex]);
  return middleArray;
}

module.exports = middle;