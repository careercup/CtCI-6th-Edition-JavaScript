/*
A Trie (Prefix Tree) is a tree-like data structure that is used to store an associative array where the keys are sequences, usually strings. Here's a simple example where a Trie could be used:

Let's say we have a list of words: "apple", "banana", "cherry", "orange" and "pear"

We can use a Trie to efficiently store and search for these words. Each character in a word is inserted as a new node in the Trie.

To search for a word, we start at the root and follow the edges corresponding to each character in the word. If we reach a null edge (indicating that the word is not in the Trie), we know that the word is not present. If we reach a leaf node (indicating the end of a word), we know that the word is present in the Trie.

For example, to search for the word "cherry", we start at the root and follow the edges corresponding to 'c', 'h', 'e', 'r', 'r' and 'y'. We reach a leaf node, indicating that the word "cherry" is present in the Trie.

In summary, Trie is a tree-based data structure that is used to store a dynamic set or associative array where the keys are sequences, usually strings. It is used in many word processing application for efficient searching of words and prefixes.
*/

class Trie {
    constructor() {
        this.root = {};
    }

    //insert takes a word and adds it to the Trie by iterating through each character 
    // and creating a new node for each character if it doesn't already exist.
    insert(word) {
        let current = this.root;

        for (let char of word) {
            if (!current[char]) {
                current[char] = {};
            }
            current = current[char];
        }

        current.isEnd = true;
    }

    //search method takes a word and checks if it exists in the Trie by iterating 
    // through each character and checking if it exists in the Trie.
    search(word) {
        let current = this.root;

        for (let char of word) {
            if (!current[char]) {
                return false;
            }
            current = current[char];
        }

        return current.isEnd === true;
    }

    // startsWith method takes a prefix and checks if it exists in the Trie by 
    // iterating through each character and checking if it exists in the Trie
    startsWith(prefix) {
        let current = this.root;

        for (let char of prefix) {
            if (!current[char]) {
                return false;
            }
            current = current[char];
        }

        return true;
    }
}

let trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("cherry");
console.log(trie.search("cherry")); // true
console.log(trie.startsWith("che")); // true
console.log(trie.search("app")); // false
