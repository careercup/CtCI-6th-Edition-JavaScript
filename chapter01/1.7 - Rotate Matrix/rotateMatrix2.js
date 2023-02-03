function rotateMatrix(matrix) {
    // Create a new matrix with the same dimensions as the original
    const n = matrix.length;
    const rotatedMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

    // Iterate through the original matrix's rows
    for (let i = 0; i < matrix.length; i++) {
        // Iterate through the original matrix's columns
        for (let j = 0; j < matrix[i].length; j++) {
            // Rotate the matrix by placing the original matrix's column in the new matrix's row
            rotatedMatrix[j][matrix.length - 1 - i] = matrix[i][j];
        }
    }
    return rotatedMatrix;
}

const testMatrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log('initial matrix:') 
console.log(testMatrix);
const rotatedMatrix = rotateMatrix(testMatrix);
console.log('rotated matrix:')
console.log(rotatedMatrix);