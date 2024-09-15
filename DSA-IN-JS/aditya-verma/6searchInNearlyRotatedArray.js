/*
Question: Nearly sorted array means element that should exist at position "i" an exist
at position "i-1", "i" or "i+1".
*/

function binarySearchInNearlySortedArray(arr, searchTerm) {
  let start = 0;
  let end = arr.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (arr[mid] === searchTerm) return mid;
    if (mid - 1 > 0 && arr[mid - 1] === searchTerm) return mid - 1
    if (mid + 1 < arr.length && arr[mid + 1] === searchTerm) return mid + 1

    if (arr[mid - 2] < searchTerm) {
      start = mid + 1
    } else if (arr[mid + 2] > searchTerm) {
      end = mid - 1
    }
  }

  return -1

}


console.log(binarySearchInNearlySortedArray([1, 2, 3, 4, 6, 5, 7], 5))