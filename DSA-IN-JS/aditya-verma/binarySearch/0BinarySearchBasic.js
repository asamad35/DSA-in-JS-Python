function binarySearch(arr, numberToSearch) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (arr[mid] === numberToSearch) return mid
    else if (numberToSearch < arr[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  return -1
}


console.log(binarySearch([1, 2, 3,], 1))