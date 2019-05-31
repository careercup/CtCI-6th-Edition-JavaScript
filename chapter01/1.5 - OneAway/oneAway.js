var oneAway = function(string1, string2) {
  // insert a char for str1 -> remove a char for str2
  var checkOneMissing = function(first, second) {
    if (first.length !== second.length - 1) {
      return false;
    } else {
      var mulligan = false;
      var fP = 0;  // first Pointer
      var sP = 0;  // second Pointer
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false;
          } else {
            mulligan = true;
            sP++;  // second length is longer
          }
        } else {
          fP++;
          sP++;
        }
      }
      return true;
    }
  };

  var checkOneDiff = function(first, second) {
    if (first.length !== second.length) {
      return false;
    } else {
      var mulligan = false;
      var fP = 0;  // first Pointer
      var sP = 0;  // second Pointer
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false;  // more than one mismatch
          } else {
            mulligan = true;  // use up mulligan
          }
        }
        fP++;
        sP++;
      }
      return true;
    }
  };
  // insert a char for str1 -> remove a char for str2
  // check one diff

  return checkOneMissing(string1, string2) ||
      checkOneMissing(string2, string1) || checkOneDiff(string1, string2);
};


// Test
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);



console.log('----------------');

// There are three types of edits that can be performed on strings: insert a
// character, remove a character, or replace a character. Given two strings,
// write a function to check if they are one edit (or zero edits) away. EXAMPLE
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bae -> false

// This algorithm (and almost any reasonable algorithm) takes O ( n) time, where
// n is the length of the shorter string.

function oneEditWay(string1, string2) {
  if (string1.length === string2.length) {
    return oneEditReplace(string1, string2);
  } else if (string1.length + 1 === string2.length) {
    return oneEditInsert(string1, string2);
  } else if (string1.length == string2.length + 1) {
    return oneEditInsert(string2, string1);
  }
}

function oneEditReplace(string1, string2) {
  foundDifference = false;

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      if (foundDifference) return false;
      foundDifference = true;
    }
  }
  return foundDifference;
}

/* Check if you can insert a character into sl to make s2. */
function oneEditInsert(string1, string2) {
  var indexS1, indexS2 = 0;

  while (indexS1 < string1.length && indexS2 < string2.length) {
    if (string1[indexS1] !== string2[indexS2]) {
      if (indexS1 != indexS2) {
        return false;
      }
      indexS2++
    } else {
      indexS1++;
      indexS2++;
    }
  }
  return true;
}


// Test
console.log(oneEditWay('pale', 'ple'), true);
console.log(oneEditWay('pales', 'pale'), true);
console.log(oneEditWay('pale', 'bale'), true);
console.log(oneEditWay('pale', 'bake'), false);
