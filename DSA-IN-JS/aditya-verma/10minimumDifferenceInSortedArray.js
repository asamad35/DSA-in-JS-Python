/**
 * Question: Find minimum absolute difference in a sorted array.
 * Example: 
 * 1. [1,2,6,12,14,20]
 * Minimize difference for 14
 * Here difference can be minimized when 14-14 =0 
 * 
 * 2. [1,2,6,12,14,20]
 * Minimize difference for 16
 * Here 16 is not present. So take the floor and ceiling value of 16 that is 14 and 20
 * 16-14 = 2
 * 16-20 = -4
 * 
 * 2 is the minimum absolute difference.
 * 
 * Hint: to find floor and ceiling refer to Question 7findFloorOfElement
 */


function findMinimumAbsoluteDifference(arr, searchTerm) {
  const floor = findFloorOrCeilingElement(arr, searchTerm, 'floor')
  const ceiling = findFloorOrCeilingElement(arr, searchTerm, 'ceiling')

  const absoluteFloorDifference = Math.abs(floor - searchTerm)
  const absoluteCeilingDifference = Math.abs(ceiling - searchTerm)

  return absoluteFloorDifference < absoluteCeilingDifference ? absoluteFloorDifference : absoluteCeilingDifference
}

function findFloorOrCeilingElement(arr, searchTerm, type) {
  let start = 0;
  let end = arr.length - 1
  let result = -1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (arr[mid] === searchTerm) return arr[mid]

    if (arr[mid] < searchTerm) {
      start = mid + 1
      type === 'floor' && (result = arr[mid])
    } else if (arr[mid] > searchTerm) {
      end = mid - 1
      type === 'ceiling' && (result = arr[mid])
    }
  }
  return result

}


console.log(findMinimumAbsoluteDifference([1, 2, 6, 12, 14, 20], 14))