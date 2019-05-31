var strComp = function(string) {
  var compressed = '';
  var currChar = '';
  var currCount = '';
  var maxCount = 1;
  for (var i = 0; i < string.length; i++) {
    if (currChar !== string[i]) {
      // console.log(currChar, string[i], i);
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

// variant

function compress(inputString) {
  if (inputString.length <= checkCompressionLength(inputString))
    return inputString;

  function doCompression(inputString) {
    countConsecutive = 0;
    compressString = '';
    for (var i = 0; i < inputString.length; i++) {
      countConsecutive++;
      if (inputString[i] !== inputString[i + 1]) {
        compressString += inputString[i];
        compressString += countConsecutive;
        countConsecutive = 0;
      }
    }
    return compressString;
  }


  function checkCompressionLength(inputString) {
    countCompressedLength = 0;
    countConsecutive = 0;

    for (var i = 0; i < inputString.length; i++) {
      countConsecutive++;
      if (inputString[i] !== inputString[i + 1]) {
        countConsecutive = 0;
        countCompressedLength += (1 + countConsecutive.toString().length);
      }
    }
    return countCompressedLength;
  }
  return doCompression(inputString);
}


console.log('aaaaaa', compress('aaaaaa'), 'a6');
console.log('abc', compress('abc'), 'abc');
console.log('aabcccccaaa', compress('aabcccccaaa'), 'a2b1c5a3');
