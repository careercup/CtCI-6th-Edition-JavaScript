var recurseMult = function(a, b) {
  if (a < 0 || b < 0) {
    throw 'error: a and b should only be positive integers';
  }
  if (b === 0) {
    return 0;
  } else if (b === 1) {
    return a;
  } else {
    return a + recurseMult(a, b - 1);
  }
};

/* TEST */

console.log(recurseMult(2, 3));
