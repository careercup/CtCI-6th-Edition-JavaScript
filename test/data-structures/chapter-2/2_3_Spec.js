require('../../test_helper');

describe('2.3 #FindMiddle', function () {
  describe('return middle Node', function () {
    var sll;
    beforeEach(function() {
      sll = new MyLinkedList();
      for(var i=1; i < 6; i++) {
        sll.addNode( i + 'Node', null);
      }
    });

    afterEach(function() {
      sll = null;
    });

    it('should return correct length of LinkedList', function () {
      expect(sll).length.to.be(5);
    });

    it('should remove the middle node with aceess to the head of SLL', function () {
      sll.findMiddleAndRemove(sll.head);
      expect(sll).length.to.be(4);
    });

    it('should remove the middle node with access to the middle_node not head', function () {
      sll.removeMiddleNode(sll.head.next.next);
      expect(sll).length.to.be(4);
    });

  });
});
