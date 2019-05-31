var palinPerm = function(string) {
  // create object literal to store charcount
  var chars = {};
  var currChar;
  var mulligan = false;
  var isPerm = true;
  // pump characters in, spaces not counted, all lowercase
  string.split('').forEach((char) => {
    if (char !== ' ') {
      currChar = char.toLowerCase();
      if (chars[currChar] === undefined) {
        chars[currChar] = 0;
      }
      chars[currChar]++;
    }
  });
  // check that all chars are even count, except for one exception
  Object.keys(chars).forEach((char) => {
    if (chars[char] % 2 > 0) {
      // if more than one exception, return false
      if (mulligan) {
        isPerm = false;  // return in a forEach statment doesn't flow out of
                         // function scope
      } else {
        mulligan = true;
      }
    }
  });
  // if not return true
  return isPerm;
};

// TESTS
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');



/**
 * If you find more than one character odd, the string is not palindrome
 * This algorithm takes O ( N) time, where N is the length of the string.
 */
var palinPerm2 = function(string) {
  var table = buildTable(string);
  return checkOneOdd(table);

  function checkOneOdd(table) {
    isOneOdd = false;

    for (var i of table) {
      if (i % 2 == 1) {
        if (isOneOdd) return false;
        isOneOdd = true
      }
    }
    return true;
  }

  function getCharacterCode(item) {
    var a = (new String('a')).charCodeAt(0);
    var z = (new String('z')).charCodeAt(0);
    var currentValue = (new String(item)).charCodeAt(0);

    if ((a <= currentValue) && (currentValue <= z)) {
      return currentValue - a;
    }
    return -1;
  }

  function buildTable(string) {
    var arr = [];
    for (var i = 0; i < string.length; i++) {
      var position = getCharacterCode(string[i]);
      if (position !== -1) {
        if (arr[position] === undefined) {
          arr[position] = 1
        } else {
          arr[position] += 1;
        }
      }
    }
    return arr;
  }
};

console.log('----');
console.log(palinPerm2('abc'), false);
console.log(palinPerm2('abcab'), true);
console.log(palinPerm2('abcdabc'), true);
