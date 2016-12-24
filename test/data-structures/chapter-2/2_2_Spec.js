require('../../test_helper');

describe('2.2 #nthToLast', function () {
  describe('return Kth element to last', function () {
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

    it('should return Kth element to last', function () {
      var kthNode = sll.nthToLast(sll.head, 3);
      expect(kthNode).to.not.be.null;
      expect(kthNode).to.have.property('data').and.be.equal('3Node');
    });
  });
});
