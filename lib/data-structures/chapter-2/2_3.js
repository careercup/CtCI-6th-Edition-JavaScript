var SLL = require('./helper.js');

  function Node(data, next) {
    this.data = data,
    this.next = next;
  }

  SLL.prototype.addNode = function(data, next) {
    var node = new Node(data, next),
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
  SLL.prototype.findMiddleAndRemove = function(head) {
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
  SLL.prototype.removeMiddleNode = function(currentNode) {
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

  //return MyLinkedList;
