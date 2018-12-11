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

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');

// ONE MORE SOLUTION

function urlify(string, length) {
  var arr = string.split('');
  for ( char of arr ) {
    if ( char === ' ') {
      //replacing ' ' with '%20' 
      var update = arr.splice(arr.indexOf(char), 1, '%20');
    }
  }
  if (string.length !== length) {
    var remove = (string.length - length);
    arr.splice ( - 1 * remove);
  }
  return arr.join('');
}
