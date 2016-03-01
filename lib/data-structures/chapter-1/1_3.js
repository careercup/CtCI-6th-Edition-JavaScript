module.exports = Strings_1_3 = (function() {
  return {
    // Generate URL freindly strings of a specified length
    // Solution #3 from the book.
    // @param {String} s - Standard string with potential trailing whitespace
    // @param {Number} l - The "true" length of the string
    // @retuns {String} - A URL freindly string of the specified length
    URLify: function(s, l) {
      var newString = '';
      for (var i = 0; i < l; i++) {
        if (s.charAt(i) === ' '){
          newString += '%20';
        }else{
          newString += s.charAt(i);
        }
      }
      return newString;
    }
  };
}());
