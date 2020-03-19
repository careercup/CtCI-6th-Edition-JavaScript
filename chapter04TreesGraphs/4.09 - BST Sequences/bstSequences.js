var BST = require('./../util/BST');

var bstSequences = function(bst) {
  var sequences = [];
  var recurse = function(nodes, travelled) {
    var noChild = true;
    nodes.forEach((node) => {
      if (node.left !== null && travelled[node.left.value] === undefined) {
        noChild = false;
        travelled[node.left.value] = true;
        recurse(nodes.concat([node.left]), travelled);
        delete travelled[node.left.value];
      }
      if (node.right !== null && travelled[node.right.value] === undefined) {
        noChild = false;
        travelled[node.right.value] = true;
        recurse(nodes.concat([node.right]), travelled);
        delete travelled[node.right.value];
      }
    });
    if (noChild) {
      sequences.push(nodes.map(node => node.value));
    }
  };
  var startTravelled = {};
  startTravelled[bst.value] = true;
  recurse([bst], startTravelled);
  return sequences;
};

/* TEST */

/* 1, 2, 3, 4, 5, 6, 7 */

var b = new BST(4);
b.insert(2);
b.insert(6);
b.insert(1);
b.insert(3);
b.insert(5);
b.insert(7);

console.log(bstSequences(b));
