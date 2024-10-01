function searchInRoatedArray(arr, searchTerm) {

  // find the smallest element, refer question:4
  let searchTermIndex = -1
  const smallestElementIndex = findSmallestElementInRoatedArray(arr)

  console.log({ smallestElementIndex })

  const firstHalfSearchIndex = binarySearch(arr, 0, smallestElementIndex - 1, searchTerm)
  const secondHalfSearchIndex = binarySearch(arr, smallestElementIndex, arr.length - 1, searchTerm)
  searchTermIndex = firstHalfSearchIndex !== -1 ? firstHalfSearchIndex : secondHalfSearchIndex

  return searchTermIndex

}


function findSmallestElementInRoatedArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const circularPrev = (mid - 1 + arr.length) % arr.length;
    const circularNext = (mid + 1) % arr.length;

    if (arr[mid] < arr[circularPrev] && arr[mid] < arr[circularNext]) {
      return mid
    }
    else if (arr[mid] >= arr[0]) {
      start = mid + 1
    } else if (arr[mid] <= arr[arr.length - 1]) {
      end = mid - 1
    }
  }
}

function binarySearch(arr, startingPoint, endingPoint, searchTerm) {
  let start = startingPoint;
  let end = endingPoint;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === searchTerm) {
      return mid
    } else if (arr[mid] > searchTerm) {
      end = end - 1
    }
    else if (arr[mid] < searchTerm) {
      start = start + 1
    }
  }
  return -1
}


console.log(searchInRoatedArray([4, 5, 1, 2, 3], 1))

