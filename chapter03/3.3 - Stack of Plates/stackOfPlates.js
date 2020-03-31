// implement as array of stacks

class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stackSet = [];
  }

  push(value) {
    if (this.stackSet.length === 0  || this.stackSet[this.stackSet.length - 1].length === this.capacity) {
      var newStack = [];
      newStack.push(value);
      this.stackSet.push(newStack);
    } else {
      this.stackSet[this.stackSet.length - 1].push(value);
    }
  }

  pop() {
    if (this.numStack === 0) {
      return undefined;
    }
    let value = this.stackSet[this.stackSet.length - 1].pop();
    if (this.stackSet[this.stackSet.length - 1].length === 0) {
      this.stackSet.pop();
    }
    return value;
  }

  peek() {
    var currStack = this.stackSet[this.stackSet.length - 1];
    return currStack[currStack.length - 1];
  }

  isEmpty() {
    return this.stackSet.length === 0;
  }

  popAt(index) {
    // out of range index
    if (index < 0 || index >= this.stackSet.length) return false;
    let value = this.stackSet[index].pop();
    if (this.stackSet[index].length == 0) {
      // clear the stack from the set
      this.stackSet.splice(index, 1);
    }
    return value;
  }
}

/* TESTS */

var s = new SetOfStacks(3);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
s.push(8);
s.push(9);
s.push(10);
s.push(11);
s.push(12);
s.push(13);
s.push(14);

console.log("stack set", s.stackSet);

s.popAt(2);
s.popAt(2);
s.popAt(2);

console.log("stack set", s.stackSet);

s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();

console.log("stack set", s.stackSet);
console.log(s.peek()); // 3


// Note: if stack not implemented as an array, would need to separately keep track of the depth 
// of each stack in an array
