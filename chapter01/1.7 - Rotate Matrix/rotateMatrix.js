var rotateMatrix = function(matrix) {
  var edge = matrix.length - 1;

  var movePixels = function(row, col) {
    // starts at m[row][col]
    // moves to m[col][edge - row]
    var fromRow;
    var fromCol;
    var fromPixel;

    // first transformation
    var toRow = row;  // 0
    var toCol = col;  // 1
    var toPixel = matrix[row][col];

    // Do rotational transformation 4 times
    for (var i = 0; i < 4; i++) {
      fromRow = toRow;
      fromCol = toCol;
      toRow = fromCol;
      toCol = edge - fromRow;

      fromPixel = toPixel;
      toPixel = matrix[toRow][toCol];
      matrix[toRow][toCol] = fromPixel;
    }
  };

  for (var i = 0; i < matrix.length / 2; i++) {
    for (var j = i; j < edge - i; j++) {
      console.log(i, j);
      movePixels(i, j);
    }
  }
};


/* TEST */
var testMatrix = [[1, 2, 3, 4], [0, 1, 2, 3], [0, 0, 1, 2], [1, 0, 0, 1]];

console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotateMatrix(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

console.log('\n\n\n');

/*
var edge = n - 1;

pattern observed:
i) col value becomes row value
ii) row value is subtracted off edge and becomes col value

0100
0000
0000
0000

position of 1 -> m[0][1]

0000
0001
0000
0000

position of 1 -> m[1][edge]

0000
0000
0000
0010

position of 1 -> m[edge][edge - 1]

0000
0000
1000
0000

position of 1 -> m[edge-1][0]

0100
0000
0000
0000

position of 1 -> m[0][1]

flow of iteration:
i) start from top left corner and move diagonally down
ii) for each row, iterate pixels until edge - 1
(pixel at edge would have been transformed by the first pixel)
iii) at each pixel iteration, iterate through 4 sides
iv) do iteration in place, i.e. store a temp pixel for moving things around
*/


// Variant

var testMatrix =
    [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];


function rotateMatrix2(matrix) {
  var n = matrix[0].length;
  if (n <= 0) return false;

  printMatrix(matrix);

  // layers
  for (var x = 0; x < n / 2; x++) {
    var first = x;
    var last = n - 1 - x;

    for (var y = first; y < last; y++) {
      var top = matrix[x][y];

      // top = left
      matrix[x][y] = matrix[n - 1 - y][x];

      // left = bottom
      matrix[n - 1 - y][x] = matrix[n - 1 - x][n - 1 - y];

      // bottom = right
      matrix[n - 1 - x][n - 1 - y] = matrix[y][n - 1 - x];

      // right = top
      matrix[y][n - 1 - x] = top;
    }
  }
  printMatrix(matrix);
};



function printMatrix(matrix) {
  length = matrix[0].length;

  for (var x = 0; x < length; x++) {
    console.log(testMatrix[x]);
  }
};

rotateMatrix2(testMatrix);
