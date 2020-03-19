var findMagic = function(array, start, end) {
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = array.length - 1;
  }

  var mid = Math.floor(start + (end - start) / 2);
  
  if (mid === start && array[mid] !== mid) {
    return -1;
  } else if (array[mid] === mid) {
    return mid;
  } else if (mid < array[mid]) {
    return findMagic(array, start, mid);
  } else {
    return findMagic(array, mid, end);
  }
};

/* TEST */
console.log(findMagic([-1, 0, 1, 3, 9, 100]), 3);
console.log(findMagic([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700]), 5);
console.log(findMagic([5, 5, 5, 5, 5, 5]), 5); // would need to be in linear runtime if values are not distinct
