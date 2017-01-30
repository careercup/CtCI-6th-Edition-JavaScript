const sortedMatrixSearch = (matrix, value, front, back) => {
  if (matrix === undefined) {
    return 'where is your matrix?';
  }
  const m = matrix.length;
  const n = matrix[0].length;
  
  if (front === undefined && back === undefined) {
    front = 0;
    back = m * n;
  }
  console.log(front, back);
  
  if (front > back) { return -1; }
  
  let mid = Math.floor((front + back) / 2);
  const row = Math.floor(mid / n);
  const col = mid % n;
  
  if (matrix[row][col] === value) {
    return [row, col];
  } else if (value < matrix[row][col]) {
    return sortedMatrixSearch(matrix, value, front, mid);
  } else {
    return sortedMatrixSearch(matrix, value, mid + 1, back);
  }
};

// sortedMatrixSearch can be called
console.log(sortedMatrixSearch() === 'where is your matrix?');

// sortedMatrixSearch finds existing values
console.log(JSON.stringify(sortedMatrixSearch([[1, 2], [3, 4]], 3)) === JSON.stringify([1, 0]));
console.log(JSON.stringify(sortedMatrixSearch([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9)) === JSON.stringify([2, 2]));
console.log(JSON.stringify(sortedMatrixSearch([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)) === JSON.stringify([0, 0]));
console.log(JSON.stringify(sortedMatrixSearch([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5)) === JSON.stringify([1, 1]));

// sortedMatrixSearch returns -1 for value greater than range
console.log(sortedMatrixSearch([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 100) === -1);

// sortedMatrixSearch returns -1 for value absent from range
console.log(sortedMatrixSearch([[1, 2, 3], [5, 6, 7], [8, 9, 10]], 4) === -1);

// sortedMatrixSearch returns -1 for value lower than range
console.log(sortedMatrixSearch([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0) === -1);
