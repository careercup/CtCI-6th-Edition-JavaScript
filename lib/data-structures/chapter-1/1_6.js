module.exports = Strings_1_6 = (function() {
  return {
    // Generates a compressed string with a trailing letter count
    // Solution #6 from the book.
    // @param {String} str - The string to compress
    // @retuns {Boolean} - a compressed string with a trailing letter count, if the string does not become smaller the orginal string is returned
    stringCompression: function(str) {
      var index = 0,
        count = 1;

      var seed = str.charAt(0);
      var newStr = '';

      while (index - 1 < str.length) {
        if (seed === str.charAt(index + 1)) {
          count++;
        } else {
          newStr += (seed + count);
          count = 1;
          seed = str.charAt(index + 1);
        }
        index++;
      }
      return newStr.length < str.length ? newStr : str;
    }
  };
}());
