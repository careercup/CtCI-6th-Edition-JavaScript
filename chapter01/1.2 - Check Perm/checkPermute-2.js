const checkPermute = (stringA, stringB) => {
  if (stringA.length !== stringB.length) {
    return false;
  }
  const letters = {};
  for (i = 0; i < stringA.length; i++) {
    const letter = stringA[i];
    if (!letters[letter]) {
      letters[letter] = 1;
    } else {
      letters[letter] += 1;
    }
  }

  for (i = 0; i < stringB.length; i++) {
    const letter = stringB[i];
    if (!letters[letter]) {
      return false;
    }
    letters[letter] -= 1;

    if (letters[letter] < 0) {
      return false;
    }
  }

  return true;
};

console.log(checkPermute("a", "bbbb"));
console.log(checkPermute("aba", "baa"));
console.log(checkPermute("aaaa", "bbbb"));
console.log(checkPermute("  a", "a  "));
