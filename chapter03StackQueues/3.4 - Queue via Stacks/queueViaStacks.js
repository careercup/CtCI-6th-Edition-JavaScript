var Stack = require('./../util/Stack');

class MyQueue {
  constructor() {
    this.front = new Stack();
    this.back = new Stack();
    this.backUp = true;
  }

  add(value) {
    if (!this.backUp) {
      while (!this.front.isEmpty()) {
        this.back.push(this.front.pop());
      }
      this.backUp = true;
    }
    this.back.push(value);
  }

  remove() {
    if (this.backUp) {
      while(!this.back.isEmpty()) {
        this.front.push(this.back.pop());
      }
      this.backUp = false;
    }
    return this.front.pop();
  }

  peek() {
    if (this.backUp) {
      while(!this.back.isEmpty()) {
        this.front.push(this.back.pop());
      }
      this.backUp = false;
    }
    return this.front.peek();
  }

  isEmpty() {
    return this.front.isEmpty() && this.back.isEmpty();
  }
}

/* TEST */
var m = new MyQueue();
console.log(m.isEmpty(), true);

m.add('a');
m.add('b');
m.add('c');
m.add('d');
m.add('e');
m.remove();
console.log(m.peek(), 'b');
