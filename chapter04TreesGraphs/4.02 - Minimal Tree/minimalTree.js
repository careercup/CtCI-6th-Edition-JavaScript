// Approach: divide and conquer, array and insert into tree
var Queue = require('./../util/Queue');
var BST = require('./../util/BST');

var insertBalanced = function(array) {
  var bst = new BST();
  var q = new Queue();
  var currArr;
  var floor = Math.floor;
  q.add(array);
  while (!q.isEmpty()) {
    currArr = q.remove();
    bst.insert(currArr[floor(currArr.length/2)]);
    if (currArr.slice(0, floor(currArr.length/2)).length > 0) {
      q.add(currArr.slice(0, floor(currArr.length/2)));
    }
    if (currArr.slice(floor(currArr.length/2) + 1).length > 0) {
      q.add(currArr.slice(floor(currArr.length/2) + 1));
    }
  }
  return bst;
};

/* TEST */
var arr1 = [1, 2, 3, 4, 5, 6];
var tree1 = insertBalanced(arr1);
tree1.printLevelOrder();

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var tree2 = insertBalanced(arr2);
tree2.printLevelOrder();