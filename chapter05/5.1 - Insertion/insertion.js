const insertion = (N, M, i, j) => {
  const bitMask = (-1 << (j + 1)) | ((1 << i) - 1);
  const clearedN = N & bitMask;
  const shiftedM = M << i;
  return clearedN | shiftedM;
};

/* TEST */
const N = parseInt(10000000000, 2);
const M = parseInt(10011, 2);
console.log(insertion(M, N, 2, 6).toString(2), 10001001100);
