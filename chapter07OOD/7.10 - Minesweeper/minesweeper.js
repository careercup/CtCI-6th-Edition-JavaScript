var Minesweeper = function(N, B) {
  this.board = null;
  this.init(N, B);
};

Minesweeper.prototype.init = function(N, B) {
  this.board = this.createBoard(N);
  this.insertBombs(B);
  this.computeCells();
  console.log('now let\' start playing minesweeper!');
};

Minesweeper.prototype.createBoard = function(N) {
  var board = [];
  for (var i = 0; i < N; i++) {
    board.push([]);
    for (var j = 0; j < N; j++) {
      board[i].push({ isBomb: false, reveal: false, display: null });
    }
  }
  return board;
};

Minesweeper.prototype.insertBombs = function(B) {
  var count = 0;
  var n = this.board.length;
  var row;
  var col;
  while (count < B) {
    row = Math.floor(Math.random() * n);
    col = Math.floor(Math.random() * n);
    if (!this.board[row][col].isBomb) {
      this.board[row][col].isBomb = true;
      count++;
    }
  }
};

Minesweeper.prototype.check = function(row, col) {
  if (this.board[row][col].isBomb) {
    console.log(`boom! ${row}, ${col} is a mine`);
    this._printBoard();
  } else {
    this.explore(row, col);
    console.log('not bad! now check your next spot');
    this.printBoard();
  }
};

Minesweeper.prototype.explore = function(row, col) {
  if (this.board[row] !== undefined && this.board[row][col] !== undefined &&
      !this.board[row][col].isBomb && !this.board[row][col].reveal) {
    this.board[row][col].reveal = true;
    if (this.board[row][col].display === 0) {
      this.explore(row - 1, col - 1);
      this.explore(row - 1, col);
      this.explore(row - 1, col + 1);
      this.explore(row, col - 1);
      this.explore(row, col + 1);     
      this.explore(row + 1, col - 1);
      this.explore(row + 1, col);
      this.explore(row + 1, col + 1);     
    }
  }
};

Minesweeper.prototype.computeCells = function() {
  var n = this.board.length;
  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
      this.computeCell(row, col, n);
    }
  }
};

Minesweeper.prototype.computeCell = function(row, col, n) {
  if (this.board[row][col].isBomb) {
    this.board[row][col].display = 'B';
    return;
  }
  var count = 0;
  // up row - 1, col
  if (row !== 0) {
    count += this.board[row - 1][col].isBomb ? 1 : 0;
  }
  // down row + 1, col
  if (row !== n - 1) { 
    count += this.board[row + 1][col].isBomb ? 1 : 0;
  } 
  // left row, col - 1
  if (col !== 0) {
    count += this.board[row][col - 1].isBomb ? 1 : 0;
  }
  // right row, col + 1
  if (col !== n - 1) {
    count += this.board[row][col + 1].isBomb ? 1 : 0;
  }
  // upleft row - 1, col - 1
  if (col !== 0 && row !== 0) {
    count += this.board[row - 1][col - 1].isBomb ? 1 : 0;
  }
  // upright row - 1, col + 1
  if (row !== 0 && col !== n - 1) {
    count += this.board[row - 1][col + 1].isBomb ? 1 : 0;
  }
  // downleft row + 1, col - 1
  if (row !== n - 1 && col !== 0) {
    count += this.board[row + 1][col - 1].isBomb ? 1 : 0;
  }
  // downright row + 1, col + 1
  if (row !== n - 1 && col !== n - 1) {
    count += this.board[row + 1][col + 1].isBomb ? 1 : 0;
  }
  this.board[row][col].display = count.toString();
};

Minesweeper.prototype._printBoard = function() {
  var n = this.board.length;
  for (var i = 0; i < n; i++) {
    console.log(this.board[i].map((cell) => {
      return cell.display;
    }).join('|'));
  }
};

Minesweeper.prototype.printBoard = function() {
  var n = this.board.length;
  for (var i = 0; i < n; i++) {
    console.log(this.board[i].map((cell) => {
      return cell.reveal ? cell.display : 'x';
    }).join('|'));
  }
};

/* TEST */
var ms = new Minesweeper(10, 20);
ms._printBoard();
console.log();
ms.printBoard();
