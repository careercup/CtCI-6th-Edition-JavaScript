var allUniqueChars = function(string) {
  // O(n^2) approach, no additional data structures used
  // for each character, check remaining characters for duplicates
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true; // if no match, return true
};

const everyCharUnique = (str, indexOffset = 'a'.charCodeAt()) => {
    let counterTable = Number();
    for(let index of [...str].map(c => c.charCodeAt() - indexOffset)) {
        const mask = 1 << index;
        if(counterTable & mask)
            return false;
        counterTable |= mask;
    }
    return true;
};

function everyCharUnique(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] && obj[str[i]] >= 1) {
      return false;
    } else {
      obj[str[i]] = 1;
    }
  }
  return true;
}

/**
 Sorting solution
 Time O(n log n)
 Space O(n) [for recursion]

 We can also sort the input string as an array
 Then iterate over the input string
 If we find a duplicate character return false

 Otherwise if we get through the entire string return true

 **/

function everyCharUnique(string) {
  const str = string.split('').sort()
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false
    }
  }
  return true
}

/**
  HashSet Solution
  Time & Space O(n)

 The Hashing function can also be reduced to two lines
 Utilizing a HashSet function, we only keep track of unique elements
 Then compare the length / size of both string & set respectively
 **/

function everyCharUnique(string) {
  const set = new Set(string.split(''))
  return string.length === set.size
}


/* TESTS */
console.log(everyCharUnique('abcd'), 'true');
console.log(everyCharUnique('abccd'), 'false');
console.log(everyCharUnique('bhjjb'), 'false');
console.log(everyCharUnique('mdjq'), 'true');
