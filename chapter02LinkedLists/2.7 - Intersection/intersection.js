var LinkedList = require('./../util/LinkedList');

var peek = function(stack) {
  return stack[stack.length - 1];
};

var intersection = function(head1, head2) {
  var stack1 = [];
  var stack2 = [];
  
  while (head1 !== null) {
    stack1.push(head1);
    head1 = head1.next;
  }

  while (head2 !== null) {
    stack2.push(head2);
    head2 = head2.next;
  }

  // if not intersecting return undefined.
  if (stack1.length === 0 || stack2.length === 0) {
    return undefined;
  } else if (peek(stack1) !== peek(stack2)) {
    return undefined;
  } else {
    var intersect;
    while (peek(stack1) === peek(stack2)) {
      intersect = peek(stack1);
      stack1.pop();
      stack2.pop();
    }
    return intersect;
  }
  // if intersecting, return intersecting node.
};

/* TEST */

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('h');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

var a1 = new LinkedList('a1');
var b1 = new LinkedList('b1');
var c1 = new LinkedList('c1');

a1.next = b1;
b1.next = c1;
c1.next = d;

var intersectNode = intersection(a, a1);

console.log(intersectNode.value);