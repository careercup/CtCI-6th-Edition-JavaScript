var Tree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var isSame = function(tree1, tree2) {
  var answer = tree1.value === tree2.value;
  if (!answer) { return answer; }

  if (tree1.left !== null && tree2.left !== null) {
    answer = answer && isSame(tree1.left, tree2.left);
  } else if ((tree1.left === null && tree2.left !== null) ||
             (tree1.left !== null && tree2.left === null)) {
    answer = answer && false;
  }

  if (tree1.right !== null && tree2.right !== null) {
    answer = answer && isSame(tree1.right, tree2.right);
  } else if ((tree1.right === null && tree2.right !== null) ||
             (tree1.right !== null && tree2.right === null)) {
    answer = answer && false;
  }

  return answer;
};

Tree.prototype.isSubtree = function(tree2) {
  if (isSame(this, tree2)) {
    return true;
  } else {
    var answer = false;
    if (this.left !== null) { answer = answer || this.left.isSubtree(tree2); }
    if (this.right !== null) { answer = answer || this.right.isSubtree(tree2); }
    return answer;
  }
};

/* TEST */
var a1 = new Tree(1);
var a2 = new Tree(2);
var a3 = new Tree(3);
var a4 = new Tree(4);
var a5 = new Tree(5);
var a6 = new Tree(6);
var a7 = new Tree(7);

var b3 = new Tree(3);
var b6 = new Tree(6);
var b7 = new Tree(7);

var c3 = new Tree(3);
var c6 = new Tree(6);
var c8 = new Tree(8);

a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;
a3.right = a7;

b3.left = b6;
b3.right = b7;

c3.left = c6;
c3.right = c8;

console.log(a1.isSubtree(b3), true);
console.log(a1.isSubtree(c3), false);