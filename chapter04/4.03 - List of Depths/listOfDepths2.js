class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(node) {
        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }
}

const createLinkedLists = (root) => {
    let lists = [];
    createLinkedListsHelper(root, lists, 0);
    return lists;
};

const createLinkedListsHelper = (root, lists, level) => {
    if (!root) return;
    let list;
    if (lists.length === level) {
        list = new LinkedList();
        lists.push(list);
    } else {
        list = lists[level];
    }
    list.addNode(root);
    createLinkedListsHelper(root.left, lists, level + 1);
    createLinkedListsHelper(root.right, lists, level + 1);
};

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(createLinkedLists(root));

/*

This algorithm uses a depth-first traversal approach, it creates a new linked list for each level of the tree and 
uses recursion to traverse through the tree. It starts by initializing an empty array called lists that will hold 
the linked lists for each level of the tree. Then, it calls the helper function createLinkedListsHelper to traverse 
through the tree and create the linked lists.

In the helper function, first it checks if the current node is null, if so it returns. Then, it checks if the current 
level of the tree is already in the lists array. If it is not, it creates a new linked list, otherwise, it gets the 
current linked list. Then it adds the current node to the current linked list. Finally, it recursively calls the 
helper function on the left and right children of the current node, and increments the level by 1.

The time complexity of this algorithm is O(n) where n is the number of nodes in the tree, and space complexity is O(d) 
where d is the depth of the tree, because it creates a linked list for each level of the tree.

*/