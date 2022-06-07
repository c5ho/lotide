const without = function(sourceArray, itemsToRemove) {
  let subsetArray = []
  for (let element of sourceArray) {
    if (!itemsToRemove.includes(element)) { //if the array element is not in the arry of items to remove
      subsetArray.push(element); //add that element to the new subset array
    }
  }
  console.log(subsetArray);
};

module.exports = without;

