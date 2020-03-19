var parens = function(n) {
 var answers = [];
  var recurse = function(currParens, remainingPairs) {
    if (remainingPairs === 0) {
      answers.push(currParens);
    } else {
      var used = {};
      if (!used[`(${currParens})`]) {
        used[`(${currParens})`] = true;
        recurse(`(${currParens})`, remainingPairs - 1);
      }
      if (!used[`()${currParens}`]) {
        used[`()${currParens}`] = true;
        recurse(`()${currParens}`, remainingPairs - 1); 
      }
      if (!used[`${currParens}()`]) {
        used[`${currParens}()`] = true;
        recurse(`${currParens}()`, remainingPairs - 1);      
      }
    }
  };
  recurse('', n);
  return answers;
};

/* TEST */
var testn = 3;
console.log(parens(testn));

