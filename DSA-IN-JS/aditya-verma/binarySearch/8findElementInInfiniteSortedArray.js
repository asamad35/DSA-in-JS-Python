function findElementInAnInfinteSortedArray(arr, searchTerm) {
  let start = 0
  let end = 1

  // find the the end index by checking the value at end and searchTerm. 
  while (arr[end] < searchTerm) {
    end = end * 2
  }

  // Now simple binary search
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (arr[mid] === searchTerm) return mid
    if (arr[mid] < searchTerm) {
      start = mid + 1
    } else if (arr[mid] > searchTerm) {
      end = mid - 1
    }
  }
  return -1
}



console.log(findElementInAnInfinteSortedArray([2, 4, 6, 8, 10, 12, 14, 16, 18], 10))