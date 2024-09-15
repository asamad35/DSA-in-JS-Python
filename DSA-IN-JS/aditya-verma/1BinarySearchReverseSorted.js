function binarySearchOnReversedSortedArray(arr, searchNumber) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] === searchNumber) return mid
    else if (arr[mid] > searchNumber) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}


console.log(binarySearchOnReversedSortedArray([5, 4, 3, 2, 1], 1))