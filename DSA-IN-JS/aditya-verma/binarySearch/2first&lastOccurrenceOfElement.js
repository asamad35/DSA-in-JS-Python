
/* 
time complexity for binary search is o(log n) and for linear traversal it is k, where k is the number of consecutive occurrences of the searchNumber.
So total time complexity is o(log n + k)
*/
function findFirstAndLastOccurenceApproach1(arr, searchNumber) {
  let start = 0;
  let end = arr.length - 1;
  let firstOccurence, lastOccurence = null

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (arr[mid] === searchNumber) {
      let foundIndex = mid;

      while (arr[foundIndex - 1] === searchNumber) foundIndex--
      firstOccurence = foundIndex

      foundIndex = mid

      while (arr[foundIndex + 1] === searchNumber) foundIndex++
      lastOccurence = foundIndex

      return [firstOccurence, lastOccurence]
    }
    else if (arr[mid] > searchNumber) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  return -1
}

// In this method only binary search is used
function findFirstOnly(arr, searchNumber) {
  let start = 0;
  let end = arr.length - 1;
  let res = -1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] === searchNumber) {
      res = mid
      end = mid - 1
    }
    else if (arr[mid] > searchNumber) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return res
}

// console.log(findFirstAndLastOccurenceApproach1([ 3, 3, 3, 3,4,5], 3))
console.log(findFirstOnly([1, 3, 3, 3, 3, 4, 5], 3))