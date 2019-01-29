//O(N)

var urlify = function(str, trueLength) {
  str = str.split("") //split string to array, as JS strings are immutable
  index = str.length
  for (i = trueLength-1; i>=0; i--){
    if(str[i] === ' '){
      str[index-1] = '0'
      str[index-2] = '2'
      str[index-3] = '%'
      index = index-3
    }
    else{
        str[index-1] = str[i]
        index = index-1
    }
  }
  return str.join("") //join character array back into a string
};

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
console.log(urlify('much ado about nothing      ', 22), 'much%20ado%20about%20nothing')
