var LinkedList = require('./../util/LinkedList');

var loopDetection = (head) => {
  var hare = head;
  var tortoise = head;
  while (hare !== null) {
    tortoise = tortoise.next;
    hare = hare.next;
    if (hare === tortoise && hare !== head.next) {
      return true;
    }
    if (hare !== null) {
      hare = hare.next;
      if (hare === tortoise) {
        return true;
      }
    }
  }
  return false;
};

/* TEST */
// A -> B -> C -> D -> E -> C

var a = new LinkedList();
var b = new LinkedList();
var c = new LinkedList();
var d = new LinkedList();
var e = new LinkedList();
var f = new LinkedList();

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = c;

console.log(loopDetection(a), true);

var A = new LinkedList();
var B = new LinkedList();
var C = new LinkedList();
var D = new LinkedList();
var E = new LinkedList();
var F = new LinkedList();

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

console.log(loopDetection(A), false);
