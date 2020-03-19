// (p = 1 / 2)           => 0 boy 1 girl
// (p = 1 / 4)           => 1 boy 1 girl 
// (p = 1 / 8)           => 2 boy 1 girl 
// (p = 1 / 16)          => 3 boy 1 girl 
// (p = 1 / 32)          => 4 boy 1 girl 
// (p = 1 / 64)          => 5 boy 1 girl 
//                ...
// (p = 1 / 2 ^ (n - 1)) => n boys 1 girl

// 0 / 2 ^ 1 + 1 / 2^2 + 2 / 2^3 ... geometric + arimetric series sum

var findRatio = function(n) {
  var answer = 0;
  for (var i = 1; i < n; i++) {
    answer += (i - 1) / Math.pow(2, i);
  }
  return answer;
};

console.log(findRatio(100));
console.log(findRatio(1000));
console.log(findRatio(10000));
console.log(findRatio(100000));

// the ratio seems to tend to 1