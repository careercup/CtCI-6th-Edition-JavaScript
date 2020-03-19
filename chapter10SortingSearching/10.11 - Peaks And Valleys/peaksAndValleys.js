// sorting algorithm

// one pass

// for each member, do a comparison with left and right

// alternately check if it is a peak or a valley

// time complexity: O(N)
// space complexity: O(1)

function swap(array, i, j) {
  const valueI = array[i];
  const valueJ = array[j];
  array[i] = valueJ;
  array[j] = valueI;
}

function peaksAndValleys(array) {
  if (!Array.isArray(array)) { return 'where is your array?';  }
  let isPeak = true;
  let curr;
  let right;
  for (let i = 0; i < array.length - 1; i++) {
    curr = array[i];
    right = array[i+1];
    if (isPeak) {
      if (curr < right) {
        swap(array, i, i+1);
      }
    } else {
      if (curr > right) {
        swap(array, i, i+1);
      }
    }
    isPeak = !isPeak;
  }
  return array;
}

/* TEST */
// function can be called
console.log(peaksAndValleys() === 'where is your array?');

// more tests needed
