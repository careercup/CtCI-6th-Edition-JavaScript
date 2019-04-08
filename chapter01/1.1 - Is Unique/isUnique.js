'use strict';

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



var allUniqueChars2 = function(string) {
  // O(n) approach and Space complexity O(1)
  // Assume to use ASCII character set (7 bit, 128 positions)
  // If we assume to use exended ASCII (8 bit), then check 256 positions.

  // If the string length exceeds the number of unique characters in the alphabet, return false
  if (string.length > 128) return false;
  const charactersArray = new Array(128);
  for (let i = 0; i < string.length; i++) {
    const val = string.charCodeAt(i);
    if (charactersArray[val]) {
      return false;
    }
    charactersArray[val] = true;
  }
  return true;
}


/* TESTS */
console.log(allUniqueChars('abcd'), true);
console.log(allUniqueChars('abab'), false);
console.log(allUniqueChars2('abcd'), true);
console.log(allUniqueChars2('abab'), false);


/* TESTS - Performance check */

var buildReadableASCII = function(){
  //Creates a string with readable ASCII characters (from position 32, and to make the code more readable we leave also the last one, 'DEL')

  let temp = '';
  for (var i = 32; i < 128; ++i) {
    temp += String.fromCharCode(i);
  }
  return temp;
}

const testString = buildReadableASCII();
console.log('Readable ASCII' + testString);

console.time('basic');
console.log(allUniqueChars(testString), true);
console.timeEnd('basic');

console.time('new');
console.log(allUniqueChars2(testString), true);
console.timeEnd('new');
