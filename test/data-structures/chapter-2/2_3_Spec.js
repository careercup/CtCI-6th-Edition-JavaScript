require('../../test_helper');

describe('2.3 #FindMiddle', function () {
  describe('return middle Node', function () {
      var sll = new MyLinkedList();
      sll.addNode('1Node');
      sll.addNode('2Node');
      sll.addNode('3Node');
      sll.addNode('4Node');
      sll.addNode('5Node');

    it('should return correct length of LinkedList', function () {
      expect(sll).length.to.be(5);
    });

    it('should return the middle node', function () {
      var middleNode = sll.findMiddle(sll.head);
      expect(middleNode).not.be.null;
      expect(middleNode).to.have.property('data');
      expect(middleNode.data).be.equal('3Node');
    });
  });
});
