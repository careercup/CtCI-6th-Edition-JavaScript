// moved from chapter 2 (/util/LinkedListX.js)

class Node {
  constructor(value) {
      this.value = value
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  append(value) {
      let node = new Node(value);
      // if list is empty
      if (!this.head) {
          this.head = node;
          this.tail = node;
      }
      else {
          this.tail.next = node;
          this.tail = node;
      }
  }

  prepend(value) {
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
  }

  pop() {
      let cur = this.head;

      // only one or no item exists
      if (!cur) return null;
      if (!cur.next) {
          this.head = null;
          return cur;
      }
      // move till the 2nd last
      while (cur.next.next)
          cur = cur.next;
      
      let last = this.tail;
      this.tail = cur;
      this.tail.next = null;
      return last;
  }

  popFirst() {
      let first = this.head;
      if (this.head && this.head.next) {
          this.head = this.head.next;
          first.next = null;
      }
      else this.head = null;
      return first;
  }

  head() {
      return this.head;
  }

  tail() {
      return this.tail;
  }

  _toArray() {
      let arr = [];
      let cur = this.head;
      while (cur) {
          arr.push(cur.value);
          cur = cur.next;
      }

      return arr;
  }
}

module.exports = LinkedList;
