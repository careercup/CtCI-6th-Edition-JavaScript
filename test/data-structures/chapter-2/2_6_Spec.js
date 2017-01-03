require('../../test_helper');

describe('2.6 #isPalindrome', function () {
  describe('check if Singly Linkedlist is a palindrome', function () {
    var sll;
    beforeEach(function() {
      sll = new MyLinkedList();
      sll.addNode('1', null);
      sll.addNode('0', null);
      sll.addNode('0', null);
      sll.addNode('1', null);
    });

    afterEach(function() {
      sll = null;
    });

    it('should return true if SLL is palindrome', function () {
       var result = sll.isPalindrome(sll.head);
       expect(result).to.be.true;
    });
  });
});
