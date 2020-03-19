// if doubly - move to middle, and then extend front and back to check
// if singly - make a reversed linkedlist from the first half

var LinkedList = require('./../util/LinkedList');

var palindrome = function(head) {
  var mid = head;
  var end = head;
  var isEven = true;
  var firstHalf = null;
  var frontNode = null;

  while (end.next !== null) {
    isEven = true;
    if (firstHalf === null) {
      firstHalf = new LinkedList(mid.value);
    } else {
      frontNode = firstHalf;
      firstHalf = new LinkedList(mid.value);
      firstHalf.next = frontNode;
    }
    mid = mid.next;
    end = end.next;
    if (end.next !== null) {
      end = end.next;
      isEven = false;
    }
  }

  if (!isEven) {
    mid = mid.next;
  }

  while(mid !== null) {
    // console.log(mid.value, firstHalf.value);
    if (mid.value !== firstHalf.value) {
      return false;
    }
    mid = mid.next;
    if (firstHalf!== null) {
      firstHalf = firstHalf.next;
    }
  }
  return true;

};

/* TEST */

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('c');
var f = new LinkedList('b');
var g = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(palindrome(a));
