const countOnly = function(allItems, itemsToCount) {
  const results = {};
  //let counter = 0;

  for (const item of allItems) {  //for each name in the list names
    //console.log(item);
    if (itemsToCount[item]) { //using bracket notation, for each name in the list, if the name is also on the names to find as true
      if (results[item]) { //in the new results object, if the key (name) exists, increment that name by 1
        results[item] += 1;
      } else {  //in the new results object, if the key does not exist, add it and make it 1
        results[item] = 1;
      }
    }
  }
  return results;
}

module.exports = countOnly;

