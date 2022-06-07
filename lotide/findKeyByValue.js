const findKeyByValue = function(listOfStuff, valueToFind) {
  for (let key in listOfStuff) {
    if (listOfStuff[key] === valueToFind)
    return key;
  }
}

module.exports = findKeyByValue;
