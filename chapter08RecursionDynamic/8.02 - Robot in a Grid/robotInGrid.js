var findPaths = function(grid) {
  var paths = [];
  var endRow = grid.length - 1;
  var endCol = grid[0].length - 1;
  var recurse = function(row, col, currPath) {
    if (row === endRow && col === endCol) {
      paths.push(currPath.concat([[row, col]]));
    } else if (row <= endRow && col <= endCol) {
      if (row < endRow && grid[row+1][col] !== 'x') {
        recurse(row + 1, col, currPath.concat([[row, col]]));
      }
      if (col < endCol && grid[row][col+1] !== 'x') {
        recurse(row, col + 1, currPath.concat([[row, col]]));
      }
    }
  };
  recurse(0, 0, []);
  return paths;
};

/* TEST */

var grid = [
  ['0', '0', '0', '0'],
  ['0', 'x', '0', 'x'],
  ['x', '0', '0', '0'],
];

console.log(findPaths(grid));

