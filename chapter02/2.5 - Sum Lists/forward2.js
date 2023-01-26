const LinkedList = require('../util/LinkedList')
const printList = require('../util/printList')

function Node(data) {
    this.data = data
    this.next = null
  }
  

function addLists(l1, l2) {
    let dummy = new Node(0);
    let current = dummy; // 1
    let carry = 0;

    while (l1 || l2) {
        let x = l1 ? l1.data : 0;
        let y = l2 ? l2.data : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10); // 0
        current.next = new Node(sum % 10); //7
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new Node(carry);
    }

    return dummy.next;
}

// First linked list (representing the number 543)
let l1 = new Node(3);
l1.next = new Node(4);

// Second linked list (representing the number 678)
let l2 = new Node(8);
l2.next = new Node(2);

// Add the two linked lists
let sum = addLists(l1, l2);

// Print the sum
let current = sum;
while (current) {
    console.log(current.data);
    current = current.next;
}