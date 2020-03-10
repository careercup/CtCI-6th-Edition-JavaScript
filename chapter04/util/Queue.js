// implement a queue using linkedLists
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const node = new LinkedListNode(value);
    if (this.front === null) {
      this.front = node;
      this.back = node;
    } else {
      var prevBack = this.back;
      this.back = node;
      prevBack.next = this.back;
    }
  }

  dequeue() {
    const removed = this.front;
    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
    return removed !== null ? removed.value : null;
  }

  peek() {
    return this.front !== null ? this.front.value : null;
  }

  isEmpty() {
    return this.front === null;
  }
}

// alias
Queue.prototype.add = Queue.prototype.enqueue;
Queue.prototype.remove = Queue.prototype.dequeue;


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
