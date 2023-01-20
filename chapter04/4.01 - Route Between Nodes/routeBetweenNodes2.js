const Graph = require('./../util/Graph');

Graph.prototype.hasRoute = function(startNode, endNode) {
    if (!this.hasNode(startNode) || !this.hasNode(endNode)) {
        return 'One or both of the nodes do not exist in the graph';
    }
    let queue = [startNode];
    let visited = new Set();
    while (queue.length > 0) {
        let currentNode = queue.shift();
        visited.add(currentNode);
        for (let edge in this.findEdges(currentNode)) {
            if (edge === endNode) {
                return true;
            }
            if (!visited.has(edge)) {
                queue.push(edge);
            }
        }
    }
    return false;
};

/* TEST */
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

graph.addEdge('D', 'E');


console.log(graph.hasRoute('A', 'C', graph), true);
console.log(graph.hasRoute('A', 'E', graph), false);
console.log(graph.hasRoute('B', 'A', graph), true);
console.log(graph.hasRoute('D', 'E', graph), true);