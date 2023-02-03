const BST = require('./../util/BST');

const createMinimalBST = (arr) => {
    return createMinimalBSTHelper(arr, 0, arr.length - 1);
};

const createMinimalBSTHelper = (arr, start, end) => {
    if (end < start) {
        return null;
    }
    let mid = Math.floor((start + end) / 2);
    let bst = new BST(arr[mid]);
    bst.left = createMinimalBSTHelper(arr, start, mid - 1);
    bst.right = createMinimalBSTHelper(arr, mid + 1, end);
    return bst;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let root = createMinimalBST(arr);
root.printLevelOrder();

const arr2 = [1, 2, 3, 4, 5, 6, 7];
root = createMinimalBST(arr2);
root.printLevelOrder();

// This algorithm uses a divide and conquer approach to create the binary search tree, 
//similar to the previous example. It starts by finding the middle element in the array 
//and creating a new BST object with that value. Then it recursively creates the left and 
// right subtrees by calling the same function on the left and right halves of the original array.

// The key idea is that by choosing the middle element of the array as the root, we ensure that the tree 
//is balanced and the height is minimal. Because the array is sorted and it's unique, the left and right 
//subtrees will also be balanced and the tree will be a minimal height binary search tree.

// This algorithm has a time complexity of O(n) and a space complexity of O(n) where n is the number of elements 
//in the array because it uses a recursive call for each element of the array and constructs a new BST object for 
// each element.
