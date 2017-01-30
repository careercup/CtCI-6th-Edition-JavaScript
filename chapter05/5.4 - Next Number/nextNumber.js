var countOnes = function(string) {
  var strArray = string.split('');
  return strArray.reduce((count, char) => {
    return char === '1' ? count + 1 : count;
  }, 0);
};

var next = function(number, numOnes, iterator) {
  var currNum = iterator(number);
  while (countOnes(currNum.toString(2)) !== numOnes) {
    currNum = iterator(currNum);
  }
  return currNum;
};

var nextSmallest = function(number, numOnes) {
  return next(number, numOnes, currNum => currNum - 1);
};

var nextLargest = function(number, numOnes) {
  return next(number, numOnes, currNum => currNum + 1);
};

var nextNumber = function(number) {
  var binary = number.toString(2);
  var numOnes = countOnes(binary);
  console.log('number', number.toString(2));
  console.log('nextSmallest', nextSmallest(number, numOnes).toString(2));
  console.log('nextLargest', nextLargest(number, numOnes).toString(2));
};

// shift right most bit front for next largest, back for next smallest

nextNumber(10000000000000000);
