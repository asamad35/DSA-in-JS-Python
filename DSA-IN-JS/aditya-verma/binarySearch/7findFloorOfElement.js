/**
 * If search element floor is the search element
 * Floor of an element is defined as the greatest element but smaller than the search element.
 */

function findFloorOfAnElement(arr, searchTerm) {
  let start = 0;
  let end = arr.length - 1
  let result = -1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] === searchTerm) return mid
    if (arr[mid] < searchTerm) {
      start = mid + 1
      result = result < arr[mid] ? mid : result
    } else if (arr[mid] > searchTerm) {
      end = mid - 1
    }
  }

  return result;
}


console.log(findFloorOfAnElement([1, 2, 3, 6, 8, 15],10))