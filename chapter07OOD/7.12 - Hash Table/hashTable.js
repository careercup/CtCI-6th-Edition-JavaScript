var LinkedList = function(key, value) {
  this.keyValPair = [key, value];
  this.next = null;
};

LinkedList.prototype.insert = function(key, value) {
  if (this.next === null) {
    this.next = new LinkedList(key, value);
  } else {
    this.next.insert(key, value);
  }
};

LinkedList.prototype.find = function(key) {
  if (this.keyValPair[0] === key) {
    return this.keyValPair[1];
  } else if (this.next !== null) {
    return this.next.find(key);
  } else {
    return null;
  }
};

LinkedList.prototype.replace = function(key, value) {
  if (this.keyValPair[0] === key) {
    this.keyValPair = [key, value];
  } else if (this.next !== null) {
    this.next.replace(key);
  }
};

LinkedList.prototype.delete = function(key) {
  if (this.keyValPair[0] === key) {
    // this = this.next; // need to delete node
  } else if (this.next !== null) {
    this.next.delete(key);
  } 
};

var getHash = function(key, limit) {
  if (typeof key !== 'string') {
    throw 'error, key is not a string';
  } else {
    var answer = 0;
    for (var i = 0; i < key.length; i++) {
      answer += key[i];
    }
    return answer % limit;
  }
};

var HashTable = function() {
  this.array = [];
  this.limit = 8;
};

HashTable.prototype.insert = function(key, value) {
  var hash = getHash(key, this.limit);
  if (this.array[hash] === undefined) {
    this.array[hash] = new LinkedList(key, value);  
  } else {
    this.array[hash].insert(key, value);
  }
};

HashTable.prototype.retrieve = function(key) {
  var hash = getHash(key, this.limit);
  if (this.array[hash] === undefined) {
    throw 'key does not exist';
  } else {
    return this.array[hash].find(key);
  }
};

HashTable.prototype.delete = function(key) {
  var hash = getHash(key, this.limit);
  if (this.array[hash] === undefined) {
    throw 'key does not exist';
  } else {
    this.array[hash].delete(key);
  }
};

