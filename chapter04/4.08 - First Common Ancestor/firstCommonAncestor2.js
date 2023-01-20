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