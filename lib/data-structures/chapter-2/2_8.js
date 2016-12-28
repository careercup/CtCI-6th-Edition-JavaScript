var SLL = require('./helper.js');

  SLL.prototype.findBeginning = function(head) {
    var slow = head,
        fast = head;

    //find meeting point
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        break;
      }
    }
    
    // no loop
    if (fast === null || fast.next === null) {
      return null;
    }

    // move slow to head. keep fast at meeting point. if they move at the same pace, they must meet at the loop start.
    slow = head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return fast;
  };
