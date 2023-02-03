class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findCommonAncestor(root, node1, node2) {
    if (!root) return null;
    if (root === node1 || root === node2) return root;

    let left = findCommonAncestor(root.left, node1, node2);
    let right = findCommonAncestor(root.right, node1, node2);

    if (left && right) return root;

    return left ? left : right;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

let node1 = root.right.left; //6
let node2 = root.right.right; //7
console.log(findCommonAncestor(root, node1, node2).value); // Outputs: 3

node1 = root.left.left; // 4
node2 = root.left.right; // 5

console.log(findCommonAncestor(root, node1, node2).value); // Outputs: 2