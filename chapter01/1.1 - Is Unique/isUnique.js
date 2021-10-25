var allUniqueChars = function(string) {
  
  // O(n^2) approach, no additional data structures used
  // for each character, check remaining characters for duplicates
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true; // if no match, return true
};

const everyCharUnique = (str, indexOffset = 'a'.charCodeAt()) => {
    let counterTable = Number();
    for(let index of [...str].map(c => c.charCodeAt() - indexOffset)) {
        const mask = 1 << index;
        if(counterTable & mask)
            return false;
        counterTable |= mask;
    }
    return true;
};

function everyCharUniques(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] && obj[str[i]] >= 1) {
      return false;
    } else {
      obj[str[i]] = 1;
    }
  }
  return true;
}

// So we have two methods to one by creating extra space annd without creating extra space
// with extra spaces
  let uniqueChars = (str) =>{
    // creating a empty variable to map
    let characters = {};
    // iterate through all characters of the string and start inserting them one by one characters tabole
      for(var i = 0; i < str.length; i++){
        // check if string already present in characters variable
        if(characters[str[i]] != null) {
          // if present repetation of character than return false
        characters[str[i]] = 1;
        return false;
      }else{
        // !present duplicate characters than return true
        characters[str[i]] = 0;

      }

      }
      return true;
  }
// Since we are iterating trough each element of string only once string of length 1 average and worst case time complexity is O(n)
// without extra spaces

  let uniqueChar = (str) => {
    // iterate through string
    for(let i =0; i< str.length; i++){
      // checking against the subsequent characters & iterating through them
      for(let j = i+1; j <=str.length-1; j++){
        if(str[i] == str[j]){
          return false;
        }
      }
    }
    return true;
  }

/* TESTS */
console.log(everyCharUnique('abcd'), 'true');
console.log(everyCharUnique('abccd'), 'false');
console.log(everyCharUnique('bhjjb'), 'false');
console.log(everyCharUniques('mdjq'), 'true');
console.log(uniqueChars('hello'), 'false');
console.log(uniqueChars('anish'), 'true');
console.log(uniqueChar('hello'), 'false');
console.log(uniqueChar('anish'), 'true');


