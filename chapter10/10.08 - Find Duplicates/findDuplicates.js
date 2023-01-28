// We're given 4 kilobytes (4 * 2^10 * 8 = 32*2^10 bits) of main memory(RAM) to write a program to print all duplicate entries in an array 
// from 1 to N where N is at most 32,000 (32*2^10).

// We can use an Int8Array that uses 1 Byte per element to store 0's if we haven't seen it and 1's if we have seen it. 
// The Int8Array typed array represents an array of twos-complement 8-bit signed integers.
// 4 KB > 32,000 bits

// Time Complexity - O(n)
// Space Complexity - O(n)

// Let's have a JavaScript Solution of this program:

function FindDuplicates(arr, range = 32000) {
  // Initialize integer 8 bit array with 0's at every index
  const numbersSeen = new Int8Array(range);
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (numbersSeen[arr[i]] === 0) {
      numbersSeen[arr[i]] = 1;
    } else {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
}

 const arr = [
      0,
      1,
      1,
      2,
      4,
      6,
      7,
      9,
      9,
      34,
      56,
      78,
      90,
      101,
      345,
      789,
      999,
      999,
      11000
    ];
    FindDuplicates(arr);
// [1, 9, 999]
