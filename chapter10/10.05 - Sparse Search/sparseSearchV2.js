/**
 
CTCI 10.5 Sparse Search

Brute Force Time O(n) & Space O(1)
	Iterate over the list and find the element that matches str

Binary Search Time O(log n) & Space O(1)
	Since it's sorted, we can grab the middle element
	Check the left and right elements to see if they match our input
	Otherwise, look at mid to see if it's our element, then we can return the index
	
	If not, and we hit an empty string, keep looking right until we hit a word
	If it's larger than our input string, then re-binary search right = mid
	Else if it's less than our input string, then re-binary search left = mid

	return -1 if we don't find it


**
* @params:{ string } str
* @params: { string[] } list
* @result: { number }
**/

const sparseSearch = function(str, list) {
  let left = 0
  let right = str.length - 1

  while(left < right) {
    const mid = Math.floor(Math.abs((left + right) / 2))

    while(list[mid] === "") {
      mid++ 
    } 

    if (list[mid] === str) {
      return mid
    } else if (list[mid] > str) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}

// indexes =     0,  1,  2,  3,      4,  5,  6,      7,  8,  9,    10, 11, 12
const list1 = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""]
//1     						         ^
//2                                ^


console.log(sparseSearch("ball", list1), 4)
console.log(sparseSearch("at", list1), 0)
console.log(sparseSearch("dad", list1), 10)
console.log(sparseSearch("car", list1), 7)
console.log(sparseSearch("barber", list1), -1)

