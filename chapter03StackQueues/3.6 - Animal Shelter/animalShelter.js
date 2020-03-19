var Queue = require('./../util/Queue');

Queue.prototype.enqueue = Queue.prototype.add;

var AnimalShelter = function() {
  this.dogQ = new Queue();
  this.catQ = new Queue();
  this.allQ = new Queue();
  this.tempQ = new Queue();
};

AnimalShelter.prototype.enqueue = function(animal) {
  if (animal.type === 'dog') {
    this.dogQ.enqueue(animal);
  } else if (animal.type === 'vat') {
    this.catQ.enqueue(animal);
  }
  this.allQ.enqueue(animal);
};

AnimalShelter.prototype.dequeueAny = function() {
  if (this.allQ.peek() === this.dogQ.peek()) {
    this.dogQ.remove();
  } else if (this.allQ.peek() === this.catQ.peek()) {
    this.catQ.remove();
  }
  return this.allQ.remove();
};

AnimalShelter.prototype.dequeueByType = function(type) {
  var yesQ;
  if (type === 'dog') {
    yesQ = this.dogQ;
  } else if (type === 'cat') {
    yesQ = this.catQ;
  }
  while (!this.allQ.isEmpty() && this.allQ.peek().type !== type) {
    this.tempQ.enqueue(this.allQ.remove());
  }
  var animal = this.allQ.remove();
  yesQ.remove();

  while(!this.allQ.isEmpty()) {
    this.tempQ.enqueue(this.allQ.remove());
  }

  while(!this.tempQ.isEmpty()) {
    this.allQ.enqueue(this.tempQ.remove());
  }
  return animal;
};

AnimalShelter.prototype.dequeueDog = function() {
  return this.dequeueByType('dog');
};

AnimalShelter.prototype.dequeueCat = function() {
  return this.dequeueByType('cat');
};

/* TESTS */

var a = new AnimalShelter();
a.enqueue({type:'dog', name:'machi'});
a.enqueue({type:'dog', name:'daisy'});
a.enqueue({type:'cat', name:'peanuts'});
a.enqueue({type:'dog', name:'miso'});
a.enqueue({type:'cat', name:'dada'});
a.enqueue({type:'cat', name:'xiaoxiao'});

console.log(a.dequeueAny(), 'dog machi');

console.log(a.dequeueCat(), 'cat peanuts');

console.log(a.dequeueAny(), 'dog daisy');

console.log(a.dequeueAny(), 'dog miso');



