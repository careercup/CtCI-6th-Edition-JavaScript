var Queue = require('./Queue');

var BST = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BST.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BST(value);
    } else {
      this.left.insert(value);      
    }
  } else {
    if (this.right === null) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
};

BST.prototype.printLevelOrder = function() {
  var level = [];
  var q = new Queue();
  var nextq = new Queue();
  var currNode;

  q.add(this);
  while (!q.isEmpty()) {
    currNode = q.remove();
    level.push(currNode.value);
    if (currNode.left !== null) {
      nextq.add(currNode.left);
    }
    if (currNode.right !== null) {
      nextq.add(currNode.right);
    }
    if (q.isEmpty()) {
      console.log(level.join(','));
      level = [];
      q = nextq;
      nextq = new Queue();
    }
  }
};

module.exports = BST;

/* TEST */
// 1, 2, 3, 4, 5, 6, 7
// var bst = new BST();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);

// bst.printLevelOrder();
