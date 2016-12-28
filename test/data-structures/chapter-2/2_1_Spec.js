require('../../test_helper');

describe('2.1 #removeDups', function () {
  describe('remove duplicate from linkedlist', function () {
    var sll;
    beforeEach(function() {
      sll = new MyLinkedList();
      for(var i=1; i < 6; i++) {
        sll.addNode( i + 'Node', null);
      }
      //create duplicate in linkedlist
      sll.addNode('5Node', null);
    });

    afterEach(function() {
      sll = null;
    });

    it('should delete duplicate node from SLL', function () {
      sll.removeDups(sll.head);
      expect(sll).length.to.be(5);
    });
  });
});
