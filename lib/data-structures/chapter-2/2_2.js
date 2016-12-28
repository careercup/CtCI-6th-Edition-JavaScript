var SLL = require('./helper.js');

  SLL.prototype.nthToLast = function(head, k) {
    var p1 = head,
        p2 = head;

    for (var i = 0; i < k; i++) {
      if (p1 === null) {
        return null;
      }
      p1 = p1.next;
    }

    while(p1 !== null) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p2;
  };
