// write the quickSort algorithm

const swap = (array, left, right) => {
  const temp1 = array[left];
  const temp2 = array[right];
  array[left] = temp2;
  array[right] = temp1;
};

const partition = (array, left, right) => {
  const pivotIndex = Math.floor((left + right) / 2);
  const pivot = array[pivotIndex]; 
  while(left <= right) {
    while(array[left] < pivot) {
      left++;
    }
    while(pivot < array[right]) {
      right--;
    }
    if (left <= right) {
      console.log(`swap ${array[left]} and ${array[right]}`);
      swap(array, left, right);
      console.log(array);
      left++;
      right--;
    }
  }
  return left;
};

const quickSort = (array, left, right) => {
  const index = partition(array, left, right);
  if (left < index - 1) {
    quickSort(array, left, index - 1);
  }
  if (index < right) {
    quickSort(array, index, right);
  }
};

let array = [4, 7, 1, 9, 3, 8, 0, 2];
quickSort(array, 0, array.length - 1);
console.log('quicksorted array is', array);
