/*
Recursion and Dynamic Programming (4 steps)
1. start with the recursive backtracking solution (brute force)
2. Optimize by using a memoization table (top-down dynamic programming)
3. Remove the need for recursion (bottom-up dynamic programming)
4. Apply final tricks to reduce the time / memory complexity
*/

// Recursive Backtracking
// Time & Space O(n!)
function tripleStep(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
}

// Top Down Memoization
// Time & Space O(n)
function tripleStep(n, i = 3, memo = [1, 1, 2, 4]) {
  if (n < 0) return 0
  if (n < i) return memo[n];
  memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  return tripleStep(n, i + 1, memo);
}

// Bottom Up memoization
// Time & Space O(n)
function tripleStep(n, memo = [1, 1, 2, 4]) {
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }

  return memo[memo.length - 1];
}

// Constant Space
// Time O(n) & Space O(1)
function tripleStep(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1;
  let b = 1;
  let c = 2;

  for (let i = 3; i < n; i++) {
    let d = a + b + c;
    a = b;
    b = c;
    c = d;
  }
  return a + b + c;
}

/* TEST */
console.log(tripleStep(1), 1);
console.log(tripleStep(2), 2);
console.log(tripleStep(3), 4);
console.log(tripleStep(5), 13);
console.log(tripleStep(7), 44);
console.log(tripleStep(10), 274);
