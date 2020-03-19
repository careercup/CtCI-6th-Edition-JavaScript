var Stack = require('./../util/Stack');

// Approach, keep an additional stack that keeps the mins
var stackMin = function() {
  this.stack = new Stack();
  this.minStack = new Stack();
  this.currMin = undefined;
};

stackMin.prototype.push = function(value) {
  if (this.currMin === undefined || value <= this.currMin) {
    this.minStack.push(this.currMin);
    this.currMin = value;
  }
  this.stack.push(value);
};

stackMin.prototype.pop = function() {
  var answer = this.stack.pop();
  if (answer === this.currMin) {
    this.currMin = this.minStack.pop();
  }
  return answer;
};

stackMin.prototype.peek = function() {
  return this.stack.peek();
};

stackMin.prototype.isEmpty = function() {
  return this.stack.isEmpty();
};

stackMin.prototype.min = function() {
  return this.currMin;
};

/* TEST */

var s = new stackMin();
s.push(9);
s.push(8);
s.push(1);
s.push(2);
s.push(1);
s.push(9);

console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 2);
console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 8);
console.log(s.min(), 8);
s.pop();
s.pop();
console.log(s.isEmpty(), true);
console.log(s.min(), undefined);
