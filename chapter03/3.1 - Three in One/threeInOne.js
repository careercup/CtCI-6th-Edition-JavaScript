var ThreeInOne = function() {
  this.container = [];
  this.middleBottom = 0;
  this.middleTop = 0;
};

ThreeInOne.prototype.push1 = function(value) {
  this.container.unshift(value);
  this.middleBottom++;
  this.middleTop++;
};

ThreeInOne.prototype.push2 = function(value) {
  this.container.splice(this.middleTop, 0, value);
  this.middleTop++;
};

ThreeInOne.prototype.push3 = function(value) {
  this.container.push(value);
};

ThreeInOne.prototype.pop1 = function() {
  if (this.isEmpty1()) {
    return undefined;
  }
  var answer = this.container.shift();
  if (this.middleBottom > 0) {
    this.middleBottom--;
    this.middleTop--;
  }
  return answer;
};

ThreeInOne.prototype.pop2 = function() {
  if (this.isEmpty2()) {
    return undefined;
  }

  var answer = this.container[this.middleTop - 1];
  this.container.splice(this.middleTop - 1, 1);
  if (this.middleBottom < this.middleTop) {
    this.middleTop--;
  }
  return answer;
};

ThreeInOne.prototype.pop3 = function(value) {
  if (this.isEmpty3()) {
    return undefined;
  }

  return this.container.pop(value);
};

ThreeInOne.prototype.peek1 = function() {
  return this.isEmpty1() ?
    undefined : this.container[0];
};

ThreeInOne.prototype.peek2 = function() {
  return this.isEmpty2() ?
    undefined : this.container[this.middleTop - 1];
};

ThreeInOne.prototype.peek3 = function() {
  return this.isEmpty3() ? 
    undefined : this.container[this.container.length - 1];
};

ThreeInOne.prototype.isEmpty1 = function() {
  return this.middleBottom === 0;
};

ThreeInOne.prototype.isEmpty2 = function() {
  return this.middleBottom === this.middleTop;
};

ThreeInOne.prototype.isEmpty3 = function() {
  return this.middleTop === this.container.length;
};

/* TESTS */

var t = new ThreeInOne();
t.push1('1a');
t.push1('1b');
t.push1('1c');
t.push2('2a');
t.push2('2b');
t.push2('2c');
t.push3('3a');
t.push3('3b');
t.push3('3c');

var a1 = t.pop1();
var a2 = t.pop2();
var a3 = t.pop3();

var peek1 = t.peek1();
var peek2 = t.peek2();
var peek3 = t.peek3();

var b1 = t.pop1();
var b2 = t.pop2();
var b3 = t.pop3();

var isEmptya1 = t.isEmpty1();
var isEmptya2 = t.isEmpty2();
var isEmptya3 = t.isEmpty3();

var c1 = t.pop1();
var c2 = t.pop2();
var c3 = t.pop3();

var d1 = t.pop1();
var d2 = t.pop2();
var d3 = t.pop3();

var isEmptyb1 = t.isEmpty1();
var isEmptyb2 = t.isEmpty2();
var isEmptyb3 = t.isEmpty3();

console.log(t.container, t.middleBottom, t.middleTop);
console.log(a1, a2, a3);
console.log(peek1, peek2, peek3);
console.log(b1, b2, b3);
console.log(isEmptya1, isEmptya2, isEmptya3);
console.log(c1, c2, c3);
console.log(d1, d2, d3);
console.log(isEmptyb1, isEmptyb2, isEmptyb3);
