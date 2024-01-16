class StackOfPlates {
  constructor(size) {
      this.size = size;
      this.stacks = [[]];
  }

  push(val) {
      let lastStack = this.stacks.at(-1);
      if (this.stacks.length === 0 || lastStack.length >= this.size) {
          this.stacks.push([val]);
      } else {
          lastStack.push(val);
      }
  }
  pop() {
      let lastStack = this.stacks.at(-1);
      let ele = lastStack.pop();
      if (lastStack.length === 0) {
          this.stacks.pop();
      }
      return ele;
  }

  popAt(index) {
      let stack = this.stacks.at(index);
      if (stack == null) return -1;
      let ele = stack.pop();
      if (stack?.length === 0) {
          this.stacks.splice(index, 1);
      }
      return ele;
  }

  peek() {
      let lastStack = this.stacks.at(-1);
      return lastStack?.at(-1);
  }
}

let plates = new StackOfPlates(3);
plates.push(1);
plates.push(2);
plates.push(3);
plates.push(4);
plates.push(5);
plates.push(6);
plates.push(7);
plates.push(8);
plates.push(9);
plates.push(10);
plates.push(11);
plates.pop();
plates.pop();
plates.pop();
plates.popAt(0);
plates.popAt(0);
plates.popAt(0);
plates.popAt(0);
console.log(plates);
