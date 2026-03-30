/**
Time O(log n) & Space O(1)
 * @params: { number[] }
 * @params: { number }
 * @results: { number }
 
 First Binary Search:
  find out where the array was shifted 
  perform a binary search on the left and right shifted arrays
 
 Second Binary Search:
  See if we can find the element in this subarray
  if not return -1
**/

const searchSorted = function (arr, val) {
  let left = 0;
  let right = arr.length;

  const binarySearch = function (l, r) {
    while (l < r) {
      const m = Math.floor(Math.abs((l + r) / 2));

      if (arr[m] === val) {
        return m;
      } else if (arr[m] > val) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    return -1;
  };

  while (left < right) {
    const mid = Math.floor(Math.abs((left + right) / 2));

    if (arr[mid] > arr[mid + 1]) {
      return binarySearch(0, mid + 1) === -1
        ? binarySearch(mid + 1, arr.length)
        : binarySearch(0, mid + 1);
    } else if (arr[mid] < arr[0] && arr[mid] < arr[arr.length - 1]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

//  indexes =  0,  1,  2,  3,  4, 5, 6, 7, 8, 9, 10, 11
const arr1 = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

console.log(searchSorted(arr1, 5), 8);
console.log(searchSorted(arr1, 15), 0);
console.log(searchSorted(arr1, 14), 11);

console.log(searchSorted(arr1, 25), 4);
console.log(searchSorted(arr1, 1), 5);
console.log(searchSorted(arr1, 22), -1);

