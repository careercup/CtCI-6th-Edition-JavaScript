var numWays = function(N) {
  var answer = 0;
  var recurse = function(number) {
    if (number === 0) {
      answer++;
    } else if (number > 0) {
      recurse(number - 1);
      recurse(number - 2);
      recurse(number - 3);
    }
  };
  recurse(N);
  return answer;
};

/* TEST */

console.log(numWays(1), 1);
console.log(numWays(2), 2);
console.log(numWays(3), 4);
