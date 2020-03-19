var insertion = function(N, M, i, j) {
  var n = N.split('');
  var m = M.split('');
  var nlength = n.length - 1;
  var mlength = m.length - 1;
  for (var a = 0; a < j - i + 1; a++) {
    console.log(m[mlength - a]);
    n[nlength - (i + a)] = m[mlength - a];
  }
  return n.join('');
};

/* TEST */
console.log(insertion('10000000000', '10011', 2, 6), '10001001100');