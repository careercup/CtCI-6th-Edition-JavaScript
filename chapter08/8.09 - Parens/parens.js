var parens = function(n) {
 var answers = [];
  var recurse = function(n, m=0, currStr='') {
	if (n===0 && m===0) {
		answers.push(currStr);
	}
	else if (n!==0) {
		recurse(n-1, m+1, currStr + '(');
		
		if (m>0) {
			recurse(n-1, m-1, currStr + ')');
		}
	}
  };
  recurse(n*2);
  return answers;
};

/* TEST */
var testn = 3;
console.log(parens(testn));

