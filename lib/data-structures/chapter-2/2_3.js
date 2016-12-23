module.exports = MyLinkedList = (function(){

  function MyLinkedList() {
     this.head = null;
     this.length = 0;
  }

  function Node(data) {
    this.data = data,
    this.next = null;
  }

  MyLinkedList.prototype.addNode = function(data) {
    var node = new Node(data),
        current = this.head;

    if (this.head === null) {
      this.head = node;
      this.length++;
      return;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.length++;
  };

  //solution for delete middle node with access to the head of LinkedList
  MyLinkedList.prototype.findMiddleAndRemove = function(head) {
    ( head === null || head.next === null ) ? null : head;

    var slowPointer = head,
        fastPointer = head,
        previous = null;

    while(fastPointer.next !== null && fastPointer.next.next !== null) {
      fastPointer = fastPointer.next.next;
      previous = slowPointer;
      slowPointer = slowPointer.next;
    }

    previous.next = slowPointer.next;
    this.length--;
  };

  //solution for delete middle node with access to the node ( middle node ) not the head of LinkedList
  MyLinkedList.prototype.removeMiddleNode = function(currentNode) {
    if ( currentNode === null || currentNode.next === null) {
      return false;
    }
    //copy next node data to current node
    var nextNode = currentNode.next;
    currentNode.data = nextNode.data;
    currentNode.next = nextNode.next;

    //remove next node
    currentNode.next = nextNode.next;
    this.length--;
  };

  return MyLinkedList;
})();
