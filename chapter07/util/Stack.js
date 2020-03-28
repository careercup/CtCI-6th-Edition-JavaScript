// simple implementation of a stack 
// using an Array

/*
Interface:
- push(value)
- pop()
- peek()
- isEmpty()
- size()
*/
class Stack {
  constructor() {
    this._data = [];
  }

  size() {
    return this._data.length;
  }

  isEmpty() {
    return this.size() == 0;
  }

  push(value) {
    this._data.push(value);
  }

  pop() {
    return this._data.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this._data[this.size() - 1];
  }
}

module.exports = Stack;

/* TEST */

// var s = new Stack();
// s.push('a');
// s.push('b');
// s.push('c');
// console.log(s.pop(), 'c');
// console.log(s.peek(), 'b');
// console.log(s.pop(), 'b');
// console.log(s.pop(), 'a');
// console.log(s.isEmpty(), true);
