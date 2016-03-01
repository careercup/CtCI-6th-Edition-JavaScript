module.exports = Strings_1_5 = (function() {
  return {
    // Checks if a string can converted to another string with a single edit
    // Solution #5 from the book.
    // @param {String} first - first string
    // @param {String} second - second string
    // @retuns {Boolean} - true if a string can converted to another string with a single edit
    oneAway: function(first, second) {

      var skip = true;
      var s1 = first.length > second.length ? first : second;
      var s2 = first.length > second.length ? second : first;
      var diff = s1.length - s2.length;
      var i1 = 0,
        i2 = 0;

      if (diff > 1) {
        return false;
      }
      while (i1 < s2.length) {
        var i2 = i1 + (!skip ? diff : 0);
        if (s1.charCodeAt(i2) !== s2.charCodeAt(i1)) {
          if (skip) {
            i1 = i1 - diff;
            skip = false;
          } else {
            return false;
          }
        }
        i1++;
      }
      return true;
    }
  };
}());
