var strComp = function(string) {
  if (!string || string === '') {
    return string;
  }

  // O(S) time where S is length of string;
  // O(S) space, for array will go up to S when string has no consecutive chars

  var compressed = [];
  var currChar;
  var compressedChar;
  var compressedCount;
  for (var i = 0; i < string.length; i++) {
    currChar = string.charAt(i);
    if (!compressedChar) {
      compressedChar = currChar;
      compressedCount = 1;
    } else if (compressedChar === currChar) {
      compressedCount++;
    } else {
      compressed.push([compressedChar, compressedCount]);
      compressedChar = currChar;
      compressedCount = 1;
    }
  }
  compressed.push([compressedChar, compressedCount]);

  var answer = compressed.reduce(function(unit) {
    return unit + unit[0] + unit[1];
  }, '');

  return answer.length < string.length ? answer : string;
};

// Test
console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');