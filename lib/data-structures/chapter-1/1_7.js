module.exports = Strings_1_7 = (function() {
  return {
    // Rotates a matrix 90 degrees clockwise
    // Solution #7 from the book.
    // @param {Array} img - matrix
    // @retuns {Boolean} - a rotated a matrix
    rotateMatrix: function(img) {
      var len = img.length - 1;
      for (var i1 = 0; i1 < len; i1++) {
        for (var i2 = i1; i2 < len - i1; i2++) {
          var increasing = i2;
          var decreasing = len - i2;
          var fixedMax = len - i1;
          var fixedMin = i1;
          var tmp = img[decreasing][fixedMin]; //left
          img[decreasing][fixedMin] = img[fixedMax][decreasing]; //bottom
          img[fixedMax][decreasing] = img[increasing][fixedMax]; //right
          img[increasing][fixedMax] = img[fixedMin][increasing]; // top
          img[fixedMin][increasing] = tmp;
        }
      }
      return img;
    }
  };
}());
