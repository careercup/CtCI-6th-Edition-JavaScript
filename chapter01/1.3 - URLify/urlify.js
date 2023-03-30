var urlify = function(str, length) {
  // have a pointer to check from start to end
  var strArr = str.split('');
  var pointer = 0;
  while (pointer < str.length) {
    if (strArr[pointer] === ' ') {
      // *** needs more work here, a little wierd
      // not handling trailing spaces properly
      for (var i = str.length - 1; i > pointer + 3; i--) {
        strArr[i] = str[i - 2];
      }
      strArr[pointer] = '%';
      strArr[pointer+1] = '2';
      strArr[pointer+2] = '0';
      console.log(strArr, strArr.length);
    }
    pointer++;
  }
  // if character is a space, move remainder chars by two
  // replace following three chars with '%20'
  return strArr.join('');
};

// takes 2 arguments a string and length of true strin
function URLify2(str, len) {
    // setup i to be 0, use to iterate
    // newStr will be use to concat character from str
    let i = 0, newStr = '';

    // while i is less than the len
    while(i<len) {
        // checks every character if str if its a space, if true
        if(str[i] === ' ') {
            // concat the newStr with '%20'
            newStr += '%20';
        } else {
            // if condition is false or its not space concat characters from str to newStr
            newStr += str[i];
        }
        // increment i
        i++;
    }
    // return newStr
    return newStr;
}
console.log(URLify2('Mr John Smith    ', 13), 'Mr%20John%20Smith');
