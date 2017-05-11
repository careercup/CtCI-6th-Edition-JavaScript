require('../../test_helper');

describe('2.8 #findBeginning', function () {
  describe('find loop in Singly Linkedlist', function () {
    var sll;
    beforeEach(function() {
      sll = new MyLinkedList();
      for(var i=1; i < 6; i++) {
        sll.addNode( i + 'Node', null);
      }
      //create loop in linkedlist 
      sll.addNode('6Node', sll.head.next.next.next);
    });

    afterEach(function() {
      sll = null;
    });

    it('should return loop start (node) in SLL', function () {
      var loopPoint = sll.findBeginning(sll.head);
      expect(loopPoint).not.be.null;
      expect(loopPoint).to.have.property('data').and.be.equal('4Node');
    });
  });
});
