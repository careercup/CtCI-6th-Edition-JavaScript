var checkPermute = function(stringOne, stringTwo) {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
  // else sort and compare 
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    var sortedStringOne = stringOne.split('').sort().join('');
    var sortedStringTwo = stringTwo.split('').sort().join('');
    return sortedStringOne === sortedStringTwo;
  }
};

// Tests
console.log(checkPermute('aba', 'aab'), true);

console.log(checkPermute('aba', 'aaba'), false);

console.log(checkPermute('aba', 'aa'), false);

// Same function as a one line solution

checkPermuteOneLine = (a, b) => {
    return (a.length === b.length && (a.split("").sort().join("") === b.split("").sort().join("")))
}

// Tests
console.log(checkPermuteOneLine('aba', 'baa'), true);
console.log(checkPermuteOneLine('aba', 'aa'), false);

// HashMap Solution

isPermutation = (a, b) => {

    if (a.length !== b.length) return false;

    let map = new Map();

    for (let i = 0; i < a.length; i++) {
        if (!map.get(a[i])) map.set(a[i], 0);
        map.set(a[i], map.get(a[i]) + 1);
    }
    for (let i = 0; i < b.length; i++) {
        map.set(b[i], map.get(b[i]) - 1);
        if (map.get(b[i]) < 0) {
            return false;
        }
    }
    return true;
}

console.log(isPermutation("damla", "almad"), true);
console.log(isPermutation("damla", "dmla"), false);
console.log(isPermutation("damla", "daala"), false);
