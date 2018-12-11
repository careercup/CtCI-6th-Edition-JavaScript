var strComp = function(string) {
  var compressed = '';
  var currChar = '';
  var currCount = '';
  var maxCount = 1;
  for (var i = 0; i < string.length; i++) {
    if (currChar !== string[i]) {
      console.log(currChar, string[i], i);
      compressed = compressed + currChar + currCount;
      maxCount = Math.max(maxCount, currCount);
      currChar = string[i];
      currCount = 1;
    } else {
      currCount++;
    }
  }
  compressed = compressed + currChar + currCount;
  maxCount = Math.max(maxCount, currCount);

  return maxCount === 1 ? string : compressed;
};

// Test
console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');

//Another solution

function compression(str) {
  var counter = 1;
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      counter+=1;
    } else {
      result += str.charAt(i) + counter.toString();
      counter = 1;
    }
  }

  if (result.length < str.length ) {
    return result;
  } else {
    return str;
  } 
}
