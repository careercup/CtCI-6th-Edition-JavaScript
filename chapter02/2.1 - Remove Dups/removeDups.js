//O(n2) time & O(1) space with no buffer

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  appendToTail(data) {
    let node = new Node(data);
    //if empty, set new node to head
    if (this.length === 0) {
      this.head = node
    } else {
      //start at head and go through until reach null tail
      let current = this.head;
      while(current.next != null) {
        current = current.next
      }
      current.next = node;
    }
    this.length++;
  }

  printList() {
    //if empty list
    if (this.length === 0) {
      console.log('List Empty')
    } else {
      //first print head data, then loop through print until null tail
      let current = this.head;
      console.log(current.data)
      while(current.next != null) {
        console.log(current.next.data)
        current = current.next
      }
    }
  }

  removeDups() {
    //make hash map while looping through list
    let map = {}
    let current = this.head;
    map[current.data] = true
    //start at head loop through until reach null tail
    while(current != null) {
      let runner = current
      //make another runner pointer
      while(runner.next != null) {
        if (current.data === runner.next.data) {
          runner.next = runner.next.next;
          this.length--;
        } else {
          runner = runner.next;
        }
      }
      current = current.next
    }
  }
}

let linkyList = new SinglyLinkedList();
linkyList.appendToTail('a');
linkyList.appendToTail('p');
linkyList.appendToTail('p');
linkyList.appendToTail('l');
linkyList.appendToTail('e');
linkyList.printList();
console.log('Remove Duplicates')
linkyList.removeDups();
linkyList.printList();
