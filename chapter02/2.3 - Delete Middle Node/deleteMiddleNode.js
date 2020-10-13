const LinkedList = require("../util/LinkedListX");
const printList = require("../util/printList");

let deleteMidNode = function(node) {

  if(node !== null && node.next !== null) {
    node.value = node.next.value;
    node.next = node.next.next;
    }
};

/* TEST */

let list = new LinkedList();
for (let item of [1, 2, 3, 4, 5, 6]) {
  list.append(item);
}

printList(list.head);
deleteMidNode(list.head.next);
printList(list.head);
