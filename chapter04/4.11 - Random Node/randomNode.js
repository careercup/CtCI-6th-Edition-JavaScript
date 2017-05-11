var Queue = require('./../util/Queue');

var BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.insert = function(value) {
  if (this.value === undefined) {
    this.value = value;
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = new BinaryTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new BinaryTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinaryTree.prototype.find = function(value) {
  if (value === this.value) {
    return this;
  } else {
    if (value < this.value) {
      if (this.left === null) {
        return null;
      } else {
        this.left.find(value);        
      }
    } else {
      if (this.right === null) {
        return null;
      } else {
        this.right.find(value);        
      }
    }
  }
};

BinaryTree.prototype.rebuild = function() {
  if (this.left === null && this.right === null) {
    return null;
  }
  var newBt = new BinaryTree();
  var q = new Queue();
  if (this.left !== null) {
    q.add(this.left);
  }
  if (this.right !== null) {
    q.add(this.right);
  }
  var node;
  while (!q.isEmpty) {
    node = q.remove();
    newBt.insert(node.value);
    if (node.left !== null) {
      q.add(node.left);
    }
    if (this.right !== null) {
      q.add(node.right);
    }
  }
  return newBt;
};

BinaryTree.prototype.delete = function(value) {
  if (value === this.value) {
    var reb = this.rebuild();
    this.value = reb.value;
    this.left = reb.left;
    this.right = reb.right;
  } else {
    var q = new Queue();
    var built = false;
    var node;
    q.add(this);
    while(!q.isEmpty() && !built) {
      node = q.remove();
      if (node.left !== null) {
        if (node.left.value === value) {
          node.left = node.left.rebuild();
          built = true;
        } else {
          q.add(node.left);
        }
      } 
      if (node.right !== null) {
        if (node.right.value === value) {
          node.right = node.right.rebuild();
          built = true;
        } else {
          q.add(node.right);
        }
      }
    }
    if (!built) {
      return null;
    }
  }
};

BinaryTree.prototype.count = function() {
  var q = new Queue();
  q.add(this);
  var node;
  var count = 0;
  while (!q.isEmpty()) {
    node = q.remove();
    count++;
    if (node.left !== null) {
      q.add(node.left);
    }
    if (node.right !== null) {
      q.add(node.right);
    }
  }
  return count;
};

BinaryTree.prototype.iterateToN = function(n) {
  var q = new Queue();
  q.add(this);
  var node;
  var count = 0;
  while (!q.isEmpty()) {
    node = q.remove();
    count++;
    if (count === n) {
      return node;
    }
    if (node.left !== null) {
      q.add(node.left);
    }
    if (node.right !== null) {
      q.add(node.right);
    }
  }
  return undefined;
};

BinaryTree.prototype.getRandomNode = function() {
  // do a BFS count
  var count = this.count();
  // use BFS to iterate random node
  var random = Math.floor(Math.random() * count) + 1;
  return this.iterateToN(random);
};

/* TEST */
var bt = new BinaryTree();
bt.insert(4);
bt.insert(2);
bt.insert(6);
bt.insert(1);
bt.insert(3);
bt.insert(5);
bt.insert(7);
console.log(bt);
bt.delete(5);
console.log(bt);
var counts = {};
var randomnum;
for (var i = 0; i < 100000; i++) {
  randomnum = bt.getRandomNode().value;
  if (counts[randomnum] === undefined) {
    counts[randomnum] = 1;
  } else {
    counts[randomnum]++;
  }
}
for (var num in counts) {
  console.log(`${num}: ${counts[num] / 100000}%`); // random enough
}
