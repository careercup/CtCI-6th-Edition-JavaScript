var flipBitToWin = function(number) {
  var binaryString = number.toString(2);
  var arrOnes = binaryString.split('0');
  var longest = 0;
  for (var i = 0; i < arrOnes.length - 1; i++) {
    if (arrOnes[i].length + arrOnes[i + 1].length > longest) {
      longest = arrOnes[i].length + arrOnes[i + 1].length;
    }
  }
  longest++; // add one representing the flipped bit
  return longest;
};

/* TEST */
console.log(flipBitToWin(1775), 8);