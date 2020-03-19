var dp = {};

var coins = function(value, currCoin) {
  if (currCoin === undefined) {
    currCoin = 1;
  }
  if (value < 0) {
    return 0;
  } else {
    var key = `${value}:${currCoin}`;
    if (dp[key] === undefined) {
      if (value === 0) {
        dp[key] = 1;
      } else {
        var ways = 0;
        if (currCoin <= 1) {
          ways += coins(value - 1, 1);
        }
        if (currCoin <= 5) {
          ways += coins(value - 5, 5);
        }
        if (currCoin <= 10) {
          ways += coins(value - 10, 10);
        }
        if (currCoin <= 25) {
          ways += coins(value - 25, 25);
        }
        /* 

          added provision if half dollars and dollar coins are added,
          but that would be unamerican.

          if (currCoin <= 50) {
            ways += coins(value - 50, 50);
          }
          if (currCoin <= 100) {
            ways += coins(value - 100, 100);
          }

        */
        dp[key] = ways;
      }
    }
    return dp[key];
  }
};

/* TEST */
// there is 1 way to represent 0 cents
console.log(coins(0) === 1);

// there is 1 way to represent 1 cent
console.log(coins(1) === 1);

// there is 1 way to represent 2 cents
console.log(coins(2) === 1);

// there is 1 way to represent 3 cents
console.log(coins(3) === 1);

// there is 1 way to represent 4 cents
console.log(coins(4) === 1);

// there are 2 ways to represent 5 cents
console.log(coins(5) === 2);

// there are 6 ways to represent 17 cents
console.log(coins(17) === 6);

// there are 242 ways to represent 100 cents
console.log(coins(100) === 242);
