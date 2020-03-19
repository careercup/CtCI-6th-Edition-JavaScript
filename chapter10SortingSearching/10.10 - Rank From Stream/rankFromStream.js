// use a heap (cheap insertion)
// get rank => keep ejecting until find item, and then put back

class Heap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.floatUp();
  }

  remove() {
    const front = 0;
    const back = this.values.length - 1;
    this.swap(front, back);  
    let removed = this.values.pop();
    this.sinkDown();
    return removed;
  }

  sinkDown(index) {
    let currIndex = index || 0;
    let left = currIndex * 2 + 1;
    let right = currIndex * 2 + 2;
    let sinkTo = this.values[left] < this.values[right] ? left : right;
    if (sinkTo < this.values.length && this.values[currIndex] > this.values[sinkTo]) {
      this.swap(currIndex, sinkTo);
      this.sinkDown(sinkTo);
    }
  }

  floatUp(index) {
    let currIndex = index || this.values.length - 1;
    let parent = Math.floor((currIndex - 1) / 2);
    if (parent >= 0 && this.values[parent] > this.values[currIndex]) {
      this.swap(parent, currIndex);
      this.floatUp(parent);
    }
  }

  swap(index1, index2) {
    const temp1 = this.values[index1];
    const temp2 = this.values[index2];
    this.values[index1] = temp2;
    this.values[index2] = temp1;
  }

  isEmpty() {
    return this.values.length === 0;
  }

  peek() {
    return this.values[0];
  }
} 

const heap = new Heap();

function getRankOfNumber(x) {
  const stack = [];
  let rank = 0;
  let value;
  while (!heap.isEmpty()) {
    value = heap.remove();
    if (value === x && heap.peek() !== x) {
      heap.insert(value);
      while (stack.length > 0) {
        heap.insert(stack.pop());
      }
      return rank;
    } else {
      rank++;
      stack.push(value);
    }
  }
  while (stack.length > 0) {
    heap.insert(stack.pop());
  }
  return -1;
}

function track(x) {
  heap.insert(x);
}

/* TEST */
// insert 5, 1, 4, 4, 5, 9, 13, 7, 3  
track(5);
track(1);
track(4);
track(4);
track(5);
track(9);
track(13);
track(7);
track(3);

// getRankOfNumber(1) = 0
// getRankOfNumber(3) = 1
// getRankOfNumber(4) = 3
console.log(getRankOfNumber(1) === 0);
console.log(getRankOfNumber(3) === 1);
console.log(getRankOfNumber(4) === 3);  
