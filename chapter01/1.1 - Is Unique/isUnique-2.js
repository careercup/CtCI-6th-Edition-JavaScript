const isUniqueCharacters = (input) => {
  if (input.length === 0) {
    return true;
  }
  // Based on ASCII string
  if (input.length > 128) {
    return false;
  }

  const uniqueCharacters = {};

  for (i = 0; i < input.length; i++) {
    const character = input[i];
    if (uniqueCharacters[character]) {
      return false;
    }

    if (!uniqueCharacters[character]) {
      uniqueCharacters[character] = 1;
    }
  }

  return true;
};

console.log(isUniqueCharacters("abcde"));
console.log(isUniqueCharacters("abcdefghh"));
console.log(isUniqueCharacters(""));
