// Approach each jigsaw pieces as a graph node with 4 edges 
// with the puzzle as a graph
 
var JigsawPiece = function(row, col) {
  this._position = { row: row, col: col };
  this.name = Math.random().toString(36).substring(7); // generate random hash 
  this.up = null;
  this.down = null;
  this.left = null;
  this.right = null;
};

var JigsawPuzzle = function(N) {
  this.jigsawGraph = this.genPieces(N);
  this.N = N;
};

JigsawPuzzle.prototype.genPieces = function(N) {
  var graph = {};
  var array = [];
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
      array.push(new JigsawPiece(i, j));
    }
  }
  array.sort(() => Math.random() < 0.5 ? 1 : -1);
  array.forEach((piece) => {
    graph[piece.name] = piece;
  });
  return graph;
};

JigsawPuzzle.prototype.match = function(piece1, piece2, direction) {
  if (piece1 === null || piece2 === null) {
    return false;
  } else if (direction === 'up') {
    return (piece1._position.row === piece2._position.row + 1) && 
           (piece1._position.col === piece2._position.col);
  } else if (direction === 'down') {
    return (piece1._position.row === piece2._position.row - 1) && 
           (piece1._position.col === piece2._position.col);
  } else if (direction === 'left') {
    return (piece1._position.row === piece2._position.row) && 
           (piece1._position.col === piece2._position.col + 1);
  } else if (direction === 'right') {
    return (piece1._position.row === piece2._position.row) && 
           (piece1._position.col === piece2._position.col - 1);
  } else {
    throw 'error, no direction';
  }
};

JigsawPuzzle.prototype.checkPiece = function(piece) {
  // check up
  // check null if at top row
  if (piece._position.row === 0 && piece.up !== null) {
    return false;
  // match otherwise
  } else if (piece._position.row !== 0 && !this.match(piece, piece.up, 'up')) {
    return false;
  }

  // check down
  // check null if at bottom row
  if (piece._position.row === this.N - 1 && piece.down !== null) {
    return false;
  // match otherwise
  } else if (piece._position.row !== this.N - 1 && !this.match(piece, piece.down, 'down')) {
    return false;
  }

  // check left
  // check null if at first col
  if (piece._position.col === 0 && piece.left !== null) {
    return false;
  // match otherwise
  } else if (piece._position.col !== 0 && !this.match(piece, piece.left, 'left')) {
    return false;
  }

  // check right
  // check null if at last col
  if (piece._position.col === this.N - 1 && piece.right !== null) {
    return false;
  // match otherwise
  } else if (piece._position.col !== this.N - 1 && !this.match(piece, piece.right, 'right')) {
    return false;
  }

  return true;
};

JigsawPuzzle.prototype.checkDone = function() {
  for (var piece in this.jigsawGraph) {
    if (!this.checkPiece(this.jigsawGraph[piece])) {
      return false;
    }
  }
  return true;
};

JigsawPuzzle.prototype.fitPuzzle = function() {
  for (var piece1 in this.jigsawGraph) {
    for (var piece2 in this.jigsawGraph) {
      if (this.match(this.jigsawGraph[piece1], this.jigsawGraph[piece2], 'up')) {
        this.jigsawGraph[piece1].up = this.jigsawGraph[piece2];
        this.jigsawGraph[piece2].down = this.jigsawGraph[piece1];
      } else if (this.match(this.jigsawGraph[piece1], this.jigsawGraph[piece2], 'down')) {
        this.jigsawGraph[piece1].down = this.jigsawGraph[piece2];
        this.jigsawGraph[piece2].up = this.jigsawGraph[piece1];
      } else if (this.match(this.jigsawGraph[piece1], this.jigsawGraph[piece2], 'left')) {
        this.jigsawGraph[piece1].left = this.jigsawGraph[piece2];
        this.jigsawGraph[piece2].right = this.jigsawGraph[piece1];
      } else if (this.match(this.jigsawGraph[piece1], this.jigsawGraph[piece2], 'right')) {
        this.jigsawGraph[piece1].right = this.jigsawGraph[piece2];
        this.jigsawGraph[piece2].left = this.jigsawGraph[piece1];
      }
    }
  }
};

/* TEST */
var jz = new JigsawPuzzle(2);
console.log(jz.jigsawGraph);

console.log(jz.checkDone(), false);

jz.fitPuzzle();
console.log(jz.jigsawGraph);

console.log(jz.checkDone(), true);
