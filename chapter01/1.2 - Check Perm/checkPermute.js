// Time O(n log n) for Sorting
// Space O(n) for sorting
var checkPermute = function(stringOne, stringTwo) {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
  // else sort and compare 
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    var sortedStringOne = stringOne.split('').sort().join('');
    var sortedStringTwo = stringTwo.split('').sort().join('');
    return sortedStringOne === sortedStringTwo;
  }
};

/**
* @param: {string} str1
* @param: {string} str2
* @return: {boolean}

Time O(n) & Space O(n)

Iterate over the initial input string
Throw all of the elements into a frequency counter
Iterate over the second input string

Then subtract 1 from each element
Iterate over the hashTable and make sure all of the values are zero

**/

const checkPermute = function(str1, str2) {
  const freq = str1.split('').reduce((a,c) => {
    a[c] = (a[c] || 0 ) + 1
    return a
  }, {})

  for (let chr of str2) {
    freq[chr]--
  }

  for (let key in freq) {
    if (freq[key] !== 0) {
      return false
    }
  }

  return true  
}

// Tests
console.log(checkPermute('aba', 'aab'), true);
console.log(checkPermute('aba', 'aaba'), false);
console.log(checkPermute('aba', 'aa'), false);

console.log(checkPermute('', ''), true)
console.log(checkPermute('abc', 'cba'), true)
console.log(checkPermute('', 'abc'), false)
console.log(checkPermute('aaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaa'), true)
console.log(checkPermute('aaaaaaa1aaaaaaaaaa', 'aaaaaaaaaaaaaaaaaa'), false)
