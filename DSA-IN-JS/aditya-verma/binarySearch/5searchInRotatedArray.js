/***
 * In below explanaition unsorted half means if we include arr[mid] then only it is unsorted.
 * Example: [4,5,1,2,3]
 * [4,5] is sorted but [4,5,1] is not sorted
 * so we can also use binary search on the unsorted half if we exclude the mid element.
 * 
 * 
 * Check if arr[mid] === searchTerm, if yes then return mid
 * When array is rotated, we get two halves, one sorted and one unsorted.
 * We pick the sorted half by comparing arr[mid] to arr[start] or arr[end].
 * Then we check if searchTerm is present in the sorted half.
 * If present we continue search until searchElement is found.
 * Otherwise we discard the sorted half and continue search in the unsorted half.
 */

function searchInRoatedArrayOptimized(arr, searchTerm) {
  let start = 0;
  let end = arr.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (arr[mid] === searchTerm) {
      return mid
    }
    else if (arr[start] <= arr[mid]) {  // if first half is sorted
      if (arr[start] <= searchTerm && searchTerm <= arr[mid]) {
        // element exists 
        end = mid - 1
      } else {
        // element does not exists 
        start = mid + 1
      }
    }
    else { // if second half is sorted
      if (arr[end] >= searchTerm && searchTerm >= arr[mid]) {
        // element exists 
        start = mid + 1
      } else {
        // element does not exists 
        end = mid - 1
      }

    }
  }
  return -1
}

// console.log(searchInRoatedArrayOptimized([6, 1, 2, 3, 4, 5], 0))





// This is my own approach and not much efficient.

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

    if (arr[mid] <= arr[circularPrev] && arr[mid] <= arr[circularNext]) {
      return mid
    }
    else if (arr[mid] >= arr[0] && arr[mid] <= arr[arr.length - 1]) { // If number of rotations === length of array, then both half of array is sorted.
      // hence it will be monotonic and there will be no local minima.
      return arr[0]
    }
    else if (arr[mid] >= arr[0]) {
      start = mid + 1
    } else if (arr[mid] <= arr[arr.length - 1]) {
      end = mid - 1
    }
  }
}

console.log(findSmallestElementInRoatedArray([11, 13, 15, 17]))

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


// console.log(searchInRoatedArray([4, 5, 1, 2, 3], 1))


