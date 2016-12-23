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

  MyLinkedList.prototype.findMiddle = function(head) {
    ( head === null || head.next === null ) ? null : head;

    var slowPointer = head,
        fastPointer = head;

    while(fastPointer.next !== null && fastPointer.next.next !== null) {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
    }
    return slowPointer;
  };
  return MyLinkedList;
})();
