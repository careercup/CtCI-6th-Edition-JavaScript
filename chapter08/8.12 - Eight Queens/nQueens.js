// BITWISE SOLUTION
// this board will make use of a hybrid of bitwise operations and array storage to store the board
// and find solutions for nqueens

// for n queens, it is given that there must be one and only one queen per row

// there will be three bit strings of n-length--center, leftDiag, and rightDiag

// the center checks for whether a column is taken
// the leftDiag checks for whether a left diagonal is taken, and shifts left bitwise per recursive step
// the rightDiag checks for whether a right diagonal is taken, and shifts right bitwise per recursive step

var changeChar = function(string, position, char) { // note: will not work for emoji
  var answer = string.split('');
  answer[position] = char;
  return answer.join('');
};

var bitwiseOp = function(binaryString, n, callback) {
  var base10 = parseInt(binaryString, 2);
  base10 = callback(base10);
  var base2 = base10.toString(2);
  if (base2.length <= n) {
    var front = '';
    for (var i = base2.length; i < n; i++) {
      front += '0';
    }
    return front + base2;
  } else {
    return base2.slice(base2.length - n);
  }
};

var leftShift = function(binaryString, n) {
  return bitwiseOp(binaryString, n, (number) => number << 1);
};

var rightShift = function(binaryString, n) {
  return bitwiseOp(binaryString, n, (number) => number >>> 1);
};

var nqueens = function(n) {
  var board = [];
  var checker = '';
  var answers = [];
  
  for (var i = 0; i < n; i++) {
    board.push(-1);
    checker += '0';
  }

  var recurse = function(currentBoard, center, leftDiag, rightDiag, currRow) {
    if (currRow === n) {
      answers.push(currentBoard);
    }
    for (var i = 0; i < n; i++) {
      if (center.charAt(i) === '0' && leftDiag.charAt(i) === '0' && rightDiag.charAt(i) === '0') {
        currentBoard[i] = currRow;
        recurse(currentBoard, changeChar(center, i, '1'), leftShift(changeChar(leftDiag, i, '1'), n), rightShift(changeChar(rightDiag, i, '1'), n), currRow + 1);
        currentBoard[i] = -1; // untoggle board to save on space complexity for arrays per recursive step
      }
    }
  };
  recurse(board, checker, checker, checker, 0);
  return answers;
};

/* TEST */
// leftShift works as expected
console.log(leftShift('0001', 4) === '0010');

// rightShift works as expected
console.log(rightShift('0100', 4) === '0010');

// there are 0 solutions to represent 2 queens
console.log(nqueens(2).length === 0);

// there are 0 solutions to represent 2 queens
console.log(nqueens(2).length === 0);

// there are 0 solutions to represent 3 queens
console.log(nqueens(3).length === 0);

// there are 2 solutions to represent 4 queens
console.log(nqueens(4).length === 2);

// there are 92 solutions to represent 8 queens
console.log(nqueens(8).length === 92);
