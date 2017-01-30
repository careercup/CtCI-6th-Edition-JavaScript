var CircularArray = function() {
  this.array = [];
  this.front = null;
  this.back = null;
};

CircularArray.prototype.rotate = function() {
  if (this.array.length > 0) {
    this.front = (this.front + 1) % this.array.length;
    this.back = (this.back + 1) % this.array.length;
  }
};

CircularArray.prototype.push = function(value) {
  if (this.array.length === 0) {
    this.array.push(value);
    this.front = 0;
    this.back = 0; 
  } else if (this.front <= this.back) {
    this.array.push(value);
    this.back++;
  } else {
    this.array = this.array.slice(0, this.back + 1).concat([value]).concat(this.array.slice(this.front));
    this.back++;
  }
};

CircularArray.prototype.pop = function() {
  if (this.array.length === 0) {
    return;
  } else if (this.front <= this.back) {
    var answer = this.array.pop();
    this.back--;
    return answer;
  } else {
    var answer = this.array[this.back];
    this.array = this.array.slice(0, this.back).concat(this.array.slice(this.front));
    this.back--;
    return answer;
  }
};

/* TEST */
var ca = new CircularArray();
ca.push(1);
ca.push(2);
ca.push(3);
ca.push(4);
ca.push(5);
ca.rotate();
ca.rotate();
console.log(ca.array, ca.front, ca.back, '[1, 2, 3, 4, 5], 2, 1'); // [1, 2, 3, 4, 5], 2, 1
console.log(ca.pop(), 2); // 2


