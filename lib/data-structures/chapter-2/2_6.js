var SLL = require('./helper.js');

  function Stack() {
    this.stack = [];
  };

  Stack.prototype.push = function (item) {
	   this.stack.push(item);
  };

  Stack.prototype.pop = function() {
  	this.stack.pop();
  };

  SLL.prototype.isPalindrome = function(head) {
    var slow = head,
        fast = head,
        stack = new Stack();

    // push elements from the half of  Linked List to the stack
    while (fast !== null && fast.next !== null) {
      stack.push(slow.data);
      slow = slow.next;
      fast = fast.next.next;
    }

    // has odd number of elements - skip the middle
    if (fast !== null) {
      slow = slow.next;
    }

    while (slow !== null) {
      var top = stack.stack.pop();
      if (top !== slow.data) {
        return false;
      }
      slow = slow.next;
    }

    return true;
  };
