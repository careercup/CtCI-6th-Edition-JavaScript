var urlify = function(str, length) {
  var strArr = [];
  for(var i = 0; i < length; i++) {
     strArr[i] = str[i] == ' ' ? '%20' : str[i]; 
  }
  return strArr.join('');
};

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
