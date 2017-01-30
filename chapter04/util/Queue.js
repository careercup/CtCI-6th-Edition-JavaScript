// implement a queue using linkedLists
var LinkedList = require('./LinkedList');

var Queue = function() {
  this.front = null;
  this.back = null;
};

Queue.prototype.add = function(value) {
  var node = new LinkedList(value);
  if (this.front === null) {
    this.front = node;
    this.back = node;
  } else {
    var prevBack = this.back;
    this.back = node;
    prevBack.next = this.back;
  }
};

Queue.prototype.remove = function() {
  var removed = this.front;
  if (this.front === this.back) {
    this.front = null;
    this.back = null;
  } else {
    this.front = this.front.next;
  }
  return removed !== null ? removed.value : null;
};

Queue.prototype.peek = function() {
  return this.front !== null ? this.front.value : null;
};

Queue.prototype.isEmpty = function() {
  return this.front === null;
};

module.exports = Queue;

/* TEST */
// var q = new Queue();
// q.add('a');
// q.add('b');
// q.add('c');
// console.log(q.remove(), 'a');
// console.log(q.peek(), 'b');
// console.log(q.remove(), 'b');
// console.log(q.remove(), 'c');
// console.log(q.isEmpty(), true);
