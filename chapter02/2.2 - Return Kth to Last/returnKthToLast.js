const LinkedList = require("../util/LinkedListX");

var findKthToLast = function(k, list) {
  // do iteratively
  //define two pointers , fast and slow pointer
  let fast = list.head
  let slow = list.head

  //Move fast pointer k steps in the linkedlist while slow remains at head
  for(let i=0;i<k;i++){
    if(fast === null) return null //k is larger than length of linked list
    fast = fast.next
  }
  // move both pointers at the same time, slow pointer will exit at kth node from the end
  while(fast !== null){
    fast =fast.next
    slow=slow.next

  }
  return slow

};
/* TESTS */
let l = new LinkedList();
l.append(1)
l.append(2)
l.append(3)
l.append(4)
l.append(5)



console.log(findKthToLast(3, l));

console.log(findKthToLast(10, l));

console.log(findKthToLast(-1, l));

console.log(findKthToLast(0, l));

console.log(findKthToLast(1, l));
