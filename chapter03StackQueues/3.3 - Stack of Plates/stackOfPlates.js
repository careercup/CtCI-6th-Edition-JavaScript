var SetOfStacks = function(capacity) {
  // implement as an array of stacks
  this.capacity = capacity;
  this.stackSet = [];
};

SetOfStacks.prototype.push = function(value) {
  if (this.stackSet.length === 0  || this.stackSet[this.stackSet.length - 1].length === this.capacity) {
    var newStack = [];
    newStack.push(value);
    this.stackSet.push(newStack);
  } else {
    this.stackSet[this.stackSet.length - 1].push(value);
  }
};

SetOfStacks.prototype.pop = function() {
  if (this.numStack === 0) {
    return undefined;
  } else if (this.stackSet[this.stackSet.length - 1].length === 0) {
    this.stackSet.pop();
  } 
  return this.stackSet[this.stackSet.length - 1].pop();
};

SetOfStacks.prototype.peek = function() {
  var currStack = this.stackSet[this.stackSet.length - 1];
  return currStack[currStack.length - 1];
};

SetOfStacks.prototype.isEmpty = function() {
  return this.stackSet.length === 0;
};

SetOfStacks.prototype.popAt = function(index) {
  return this.stackSet[index].pop();
};

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

console.log(s.stackSet);

s.popAt(2);

console.log(s.stackSet);

s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();

console.log(s.stackSet);


// Note: if stack not implemented as an array, would need to separately keep track of the depth 
// of each stack in an array
