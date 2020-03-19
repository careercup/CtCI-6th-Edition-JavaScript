const LinkedList = require('./../util/LinkedList')
const printList = require('./../util/printList')

function sumLinkedLists(node1, node2, carry=0){
  if(!node1 && !node2 && carry===0){
    return null
  }
  let value = carry
  value += node1 ? node1.value : 0
  value += node2 ? node2.value : 0
  const node  = new LinkedList(value%10)
  node.next = sumLinkedLists(
    node1 ? node1.next : null,
    node2 ? node2.next : null,
    value > 10 ? 1 : 0)
  return node
}

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912

var a = new LinkedList(7)
var b = new LinkedList(1)
var c = new LinkedList(6)

a.next = b
b.next = c

var d = new LinkedList(5)
var e = new LinkedList(9)
var f = new LinkedList(2)

d.next = e
e.next = f

printList(sumLinkedLists(a,d))
