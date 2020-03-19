const findStartEnd = (array, front, back) => {
  front = front || 0;
  back = back || array.length;
  if (array[front] < array[back - 1]) {
    return {
      start: front,
      end: back - 1
    };
  } else {
    let mid = Math.floor( (back - front) / 2);
    if (array[mid - 1] > array[mid]) {
      return {
        start: mid,
        end: mid - 1
      };
    } else {
      if (array[front] < array[mid]) {
        return findStartEnd(array, mid, back);
      } else {
        return findStartEnd(array, front, mid);
      }
    }
  }
};

const searchInRotatedArray = (array, value, start, end) => {
  if (array === undefined) {
    return 'where is the array?';
  }
  if (start === undefined && end === undefined) {
    const startEnd = findStartEnd(array);
    start = startEnd.start;
    end = startEnd.end;
  }
  let mid;
  if (start === end) {
    return array[start] === value ? start : -1;
  } else if (start > end) {
    const half = Math.floor((array.length - (start - end - 1)) / 2);
    mid = (start + half) % array.length;
  } else {
    mid = start + Math.floor((end - start) / 2);
  }
  if (array[mid] === value) {
    return mid;
  } else {
    if (value < array[mid]) {
      return searchInRotatedArray(array, value, start, mid);
    } else {
      if (start === mid) {
        return searchInRotatedArray(array, value, end, end); // does end check if start === mid
      } else {
        return searchInRotatedArray(array, value, mid, end);
      }
    }
  }
};

/* TEST */

// findStartEnd works
console.log(JSON.stringify(findStartEnd([5, 6, 7, 8, 1, 2, 3, 4])) === JSON.stringify({ start: 4, end: 3 }));

// searchInRotatedArray can be called
console.log(searchInRotatedArray() === 'where is the array?');

// find in unrotated array
console.log(searchInRotatedArray([1, 2, 3, 4], 3) === 2);

// find in rotated array
console.log(searchInRotatedArray([3, 4, 1, 2], 1) === 2);

// find last item in rotated array
console.log(searchInRotatedArray([3, 4, 1, 2], 4) === 1);

// return -1 for values not in array
console.log(searchInRotatedArray([3, 4, 1, 2], 10) === -1);
