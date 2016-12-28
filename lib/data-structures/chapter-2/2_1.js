var SLL = require('./helper.js');

  SLL.prototype.removeDups = function(head) {

   if (head === null || head.next === null) {
      return null;
    }

   var current = head;

   while(current !== null) {
      var runner = current;
      while (runner.next !== null) {
        if (runner.next.data === current.data) {
          runner.next = runner.next.next;
          this.length--;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  };
