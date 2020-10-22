// Recursive BackTracking 
// Time & Space O(n!)
var tripleStep = function(n, res=0) {
  if (n < 0) return 0
  if (n === 0)  {
    res++
    return res
  }
  return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3)
}

// Top Down Memoization
// Time & Space O(n)
/*
var tripleStep = function(n, i=3, memo = [1, 1, 2, 4]) {
  if (n < 0) return memo[0]
  if (n === 1) return memo[n]
  if (i > n ) return memo[memo.length - 1]
  memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3]
  return tripleStep(n, i+1, memo)
}
*/

// Bottom Up memoization
// Time & Space O(n) 
/*
var tripleStep = function(n, memo=[1,1,2,4]) {

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3]
  }

  return memo[memo.length - 1]
}
*/

/* TEST */
console.log(tripleStep(1), 1);
console.log(tripleStep(2), 2);
console.log(tripleStep(3), 4);
console.log(tripleStep(5), 13)
console.log(tripleStep(7), 44)
console.log(tripleStep(10), 274);

