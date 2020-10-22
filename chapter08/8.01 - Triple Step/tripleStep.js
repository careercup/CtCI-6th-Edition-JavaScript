/*
Recursion and Dynamic Programming (4 steps)
1. Start with the recursive backtracking solution 
2. Optimize by using a memoization table (top-down dynamic programming) 
3. Remove the need for recursion (bottom-up dynamic programming) 
4. Apply final tricks to reduce the time / memory complexity
*/

/*
Triple Step: 
A child is running up a staircase with n steps and 
can hop either 1 step, 2 steps, or 3 steps at a time. 

Implement a method to count how many possible ways 
the child can run up the stairs.
 */


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

// Recursive BackTracking 
// Time & Space O(n!)
/*
var numWays = function(n, res=0) {
  if (n < 0) return 0
  if (n === 0)  {
    res++
    return res
  }
  return numWays(n - 1) + numWays(n - 2) + numWays(n - 3)
}
*/

// Top Down Memoization
// Time & Space O(n)
/*
var numWays = function(n, i=3, memo = [1, 1, 2, 4]) {
  if (n < 0) return memo[0]
  if (n === 1) return memo[n]
  if (i > n ) return memo[memo.length - 1]
  memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3]
  return numWays(n, i+1, memo)
}
*/

// Bottom Up memoization
// Time & Space O(n) 
/*
var numWays = function(n, memo=[1,1,2,4]) {

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3]
  }

  return memo[memo.length - 1]
}
*/


/* TEST */

console.log(numWays(1), 1);
console.log(numWays(2), 2);
console.log(numWays(3), 4);
console.log(numWays(5), 13)
console.log(numWays(7), 44)
console.log(numWays(10), 274);

