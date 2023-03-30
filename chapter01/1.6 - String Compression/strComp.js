const stringCompression = (string) => {
  let compressed = '';
  let currentCharacter = '';
  let currentCount = '';
  let maxCount = 1;
  for(var i = 0; i < string.length; i++) {
    if(currentCharacter !== string[i]) {
      compressed = compressed + currentCharacter + currentCount;
      maxCount = Math.max(maxCount, currentCount);
      currentCharacter = string[i];
      currentCount = 1;
    } else {
      currentCount++;
    }
  }
  
  compressed = compressed + currentCharacter + currentCount;
  maxCount = Math.max(maxCount, currentCount);
  
  if(string.length < compressed.length) {
    return string;
  }
  
  return maxCount === 1 ? string : compressed;
}

console.log('aaaaaa', stringCompression('aabcdef')); // aabcdef
console.log('aaaaaa', stringCompression('aabbcc')); // a2b2c2
