/* Helper Functions */
var checkZeros = function(matrix) {
  var matrixHeight = matrix.length;
  var matrixWidth = matrix[0].length;
  var rowsToZeroify = {}; // use hashtables to remove duplicates
  var colsToZeroify = {};

  for (var i = 0; i < matrixHeight; i++) {
    for (var j = 0; j < matrixWidth; j++) {
      if (matrix[i][j] === 0) {
        rowsToZeroify[i] = true;
        colsToZeroify[j] = true;
      }
    }
  }
  return {
    rowsToZeroify: rowsToZeroify,
    colsToZeroify: colsToZeroify
  };
};

var printMatrix = function(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
};

var zeroifyCol = function(matrix, col) {
  for (var i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
};

var zeroifyCols = function(matrix, zeroScan) {
  for (var col in zeroScan.colsToZeroify) {
    zeroifyCol(matrix, Number(col));  
  }
};

var zeroifyRow = function(matrix, row) {
  for (var i = 0; i < matrix[row].length; i++) {
    matrix[row][i] = 0;
  }
};

var zeroifyRows = function(matrix, zeroScan) {
  for (var row in zeroScan.rowsToZeroify) {
    zeroifyRow(matrix, Number(row));  
  }
};

/* Main Function */
var zeroMatrix = function(matrix) {

  if(matrix.length === 0) { return; }

  var zeroScan = checkZeros(matrix);

  zeroifyCols(matrix, zeroScan);
  zeroifyRows(matrix, zeroScan);

};

// Testing
var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

console.log('before');
printMatrix(testMatrix);

zeroMatrix(testMatrix);

console.log('after');
printMatrix(testMatrix);

// function should mutate the matrix to the following:
// [
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [0, 0, 0, 0],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1]
// ]