var returnSubsets = function(set) {
  var subsets = [];
  var recurse = function(currSet, remainingSet) {
    subsets.push(currSet);
    for (var i = 0; i < remainingSet.length; i++) {
      recurse(currSet.concat([remainingSet[i]]), remainingSet.slice(i + 1));
    }
  };
  recurse([], set);
  return subsets;
};

/* TEST */
console.log(returnSubsets([1, 2, 3, 4]));