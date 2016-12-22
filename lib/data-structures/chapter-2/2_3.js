module.exports = function(){

  function SLL() {
    this.head = null;
  }

  SLL.prototype.findMiddle = function(head) {
     ( head === null || head.next === null ) ? null : head;

    var slowPointer = head,
        fastPointer = head;

    while(fastPointer.next !== null && fastPointer.next.next !== null) {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
    }
    return slowPointer;
  };
};
