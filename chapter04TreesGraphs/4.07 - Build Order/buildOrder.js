// directed graph
var Graph = require('./../util/Graph');

Graph.prototype.findNodeWithNoChildren = function() {
  for (var node in this.nodes) {
    if (Object.keys(this.nodes[node]).length === 0) {
      return node;
    }
  }
  return undefined;
};

var buildOrder = function(projects, dependencies) {
  var graph = new Graph();
  projects.forEach(project => {
    graph.addNode(project);
  });
  dependencies.forEach(dependency => {
    graph.addEdge(dependency[1], dependency[0]);
  });
  var answer = [];
  var currNode = graph.findNodeWithNoChildren();
  while (currNode !== undefined) {
    answer.push(currNode);
    graph.removeNode(currNode);
    currNode = graph.findNodeWithNoChildren();
  }
  if (answer.length === projects.length) {
    return answer;
  } else {
    throw Error;
  }
};

/* TEST */
var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

console.log(buildOrder(projects, dependencies));
