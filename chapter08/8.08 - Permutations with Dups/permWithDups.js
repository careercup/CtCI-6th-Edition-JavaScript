var permNoDups = function(string) {
  var answers = [];
  var recurse = function(currPerm, remainingChars) {
    if (remainingChars.length === 0) {
      answers.push(currPerm);
    } else {
      var usedChars = {};
      for (var i = 0; i < remainingChars.length; i++) {
        if (!usedChars[remainingChars.charAt(i)]) {
          usedChars[remainingChars.charAt(i)] = true;
          recurse(currPerm + remainingChars.charAt(i), remainingChars.slice(0, i) + remainingChars.slice(i+1));
        }
      }
    }
  };
  recurse('', string);
  return answers;
};

/* TEST */

var test1 = 'aaa';
var test2 = 'abc';
var test3 = 'aba';

console.log(permNoDups(test1));
console.log(permNoDups(test2));
console.log(permNoDups(test3));
