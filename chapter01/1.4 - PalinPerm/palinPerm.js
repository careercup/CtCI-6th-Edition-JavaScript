var palinPerm = function(string) {
  // create object literal to store charcount
  var chars = {};
  var currChar;
  var mulligan = false;
  var isPerm = true;
  // pump characters in, spaces not counted, all lowercase
  string.split('').forEach((char) => {
    if (char !== ' ') {
      currChar = char.toLowerCase();
      if (chars[currChar] === undefined) {
        chars[currChar] = 0;
      }
      chars[currChar]++;
    }
  });
  // check that all chars are even count, except for one exception
  Object.keys(chars).forEach((char) => {
    if (chars[char] % 2 > 0) {
    // if more than one exception, return false
      if (mulligan) {
        isPerm = false; // return in a forEach statment doesn't flow out of function scope
      } else {
        mulligan = true;
      }
    }
  });
  // if not return true
  return isPerm;
};

const getCharCode = (c, min = 'a'.charCodeAt(), max = 'z'.charCodeAt()) => {
    cCharCode = c.charCodeAt();
    return min <= cCharCode && cCharCode <= max
           ? cCharCode - min : -1;
};

const toggleBit = (bitVector, index) => {
    if(index < 0) return bitVector;
    return bitVector ^ (1 << index);
};

const getBitVector = str => {
    let bitVector = 0;
    for(let c of str) {
        bitVector = toggleBit(bitVector, getCharCode(c));
    }
    return bitVector;
};

const palinPermBitVector = str => {
    const bitVector = getBitVector(str);
    return !(bitVector && (bitVector & (bitVector - 1)));
};

// TESTS
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
console.log(palinPermBitVector('cviic'), 'true');
console.log(palinPermBitVector('civie'), 'false');
console.log(palinPermBitVector('damma'), 'true');
console.log(palinPermBitVector('aadmn'), 'false');
