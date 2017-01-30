/*
 * Tests to see if string contains all unique chars.
 * @param {String} str - The string to be checked for uniqueness
 * @returns {Boolean} true if string has only unique chars. False if a duplicate exists
 */
module.exports = Strings_1_1 = (function () {
  return {

    // using a boolean array as storage
    hasUniqueChars1: function (str) {
      if (str.length > 256) {
        return false;
      }
      var char_set = Array.apply(null, Array(256)).map(Boolean.prototype.valueOf, false);
      for (var i = 0; i < str.length; i++) {
        if (char_set[str[i].charCodeAt(0)]) {
          return false;
        }
        char_set[str[i].charCodeAt(0)] = true;
      }
      return true;
    },

    // using a boolean array as storage
    hasUniqueChars2: function (str) {
      if (str.length > 256) {
        return false;
      }
      const char_set = Array(256).fill(false);
      for (const ch of str) {
        if (char_set[ch.codePointAt(0)]) {
          return false;
        }
        char_set[ch.codePointAt(0)] = true;
      }
      return true;
    },

    // using a Set as storage
    hasUniqueChars3: function (str) {
      const char_set = new Set();
      for (const ch of str) {
        if (char_set.has(ch)) {
          return false;
        }
        char_set.add(ch);
      }
      return true;
    },

    // sorting the string first
    hasUniqueChars4: function (str) {
      const sorted = [...str].sort();
      for (let i = 1; i < sorted.length; i++) {
        if (sorted[i - 1] === sorted[i]) {
          return false;
        }
      }
      return true;
    }
  };
}());