/* Question: Find the index of first 1.
Example: [0,0,0,1,1,1]
First 1 at index: 3 
*/


function searchInBinaryInfiniteSortedArray(arr) {
  let start = 0
  let end = 1
  let result = -1

  while (arr[end] === 0) {
    end = end * 2
  }

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)


    if (arr[mid] === 1) {
      result = mid
    }

    if (arr[mid] === 0) {
      start = mid + 1
    } else if (arr[mid] === 1) {
      end = mid - 1;
      result = mid
    }
  }

  return result

}


console.log(searchInBinaryInfiniteSortedArray([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]))