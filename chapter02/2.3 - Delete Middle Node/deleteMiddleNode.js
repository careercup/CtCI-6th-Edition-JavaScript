//delete node in the middle of linked list
class linkedList {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

const deleteNode = (nodeDel) => {
  nodeDel.data = nodeDel.next.data
  nodeDel.next = nodeDel.next.next
  //delete next node from emmory

}


const printList = (headNode) => {
  let current = headNode;
  while(current != null) {
    console.log(current.data)
    current = current.next
  }
}

// create new LL nodes
let a = new linkedList('1');
let b = new linkedList('2');
let c = new linkedList('3');
let d = new linkedList('4');
let e = new linkedList('5');

//link nodes
a.next = b
b.next = c
c.next = d
d.next = e

deleteNode(d, a)
printList(a)