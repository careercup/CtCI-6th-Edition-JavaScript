require('../../test_helper');

describe('2.3 #FindMiddle', function () {
  describe('return middle Node', function () {
    var sll;
    beforeEach(function() {
      sll = new MyLinkedList();
      sll.addNode('1Node');
      sll.addNode('2Node');
      sll.addNode('3Node');
      sll.addNode('4Node');
      sll.addNode('5Node');
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
