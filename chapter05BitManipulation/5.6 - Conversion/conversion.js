var countBits = function(number) {
  var string = number.toString(2);
  return string.split('').reduce((numBits, char) => {
    return char === '1' ? numBits + 1 : numBits;
  }, 0);
};

var conversion = function(number1, number2) {
  return countBits(number1 ^ number2);
};

console.log(conversion(29, 15), 2);