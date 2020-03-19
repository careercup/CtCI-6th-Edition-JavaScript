/* helper function - sum of an array */
var SumArr = function(arr) {
  return arr.reduce((total, num) => total + num, 0);
};

var BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.countPathsWithRoot = function(value, path) {
  var pathCount = 0;
  if (path === undefined) {
    path = [this.value];
  } else {
    path = [...path, this.value];
  }
  if (SumArr(path) === value) {
    pathCount++;
  }
  if (this.left !== null) {
    pathCount += this.left.countPathsWithRoot(value, path);
  }
  if (this.right !== null) {
    pathCount += this.right.countPathsWithRoot(value, path);
  }
  return pathCount;
};

BinaryTree.prototype.pathsWithSum = function(value) {
  var pathCount = 0;
  pathCount += this.countPathsWithRoot(value);
  if (this.left !== null) {
    pathCount += this.left.countPathsWithRoot(value);
  }
  if (this.right !== null) {
    pathCount += this.right.countPathsWithRoot(value);
  }
  return pathCount;
};

/* TEST */
var a = new BinaryTree(1);
var b = new BinaryTree(1);
var c = new BinaryTree(1);
var d = new BinaryTree(10);

a.left = b;
a.right = c;
c.left = d;

console.log(a.pathsWithSum(12), 1);
console.log(a.pathsWithSum(2), 2);
console.log(a.pathsWithSum(1), 3);