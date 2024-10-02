/** 
 * In naive approach we run a nested loop. 
 * First loop is till end is less than array length. 
 * Second loop starts with "start = end - (k+1)" because we want to go k positions back from end. 
 * Now in second loop we check if element is negative. 
 * If yes we push in result and break. 
 * If no we check if current element is last element of secondary array. 
 * If yes then we push 0 to resultant array as no negative element is found. 
 * 
*/

function firstNegativeInSizeKNaive(arr, k) {

  if (k > arr.length) return -1 // edge case

  const result = []
  let start = 0, end = k - 1;

  while (end < arr.length) {
    start = end - (k - 1);
    while (start <= end) {
      if (arr[start] < 0) {
        result.push(arr[start])
        break
      } else if (start === end)
        result.push(0)
      start++
    }
    end++
  }
  return result
}
console.log(firstNegativeInSizeKNaive([12, -1, -7, 8, -15, 30, 16, 28], 3))

/**
 * This is actually simple. 
 * We need to loop and push negative elements in an array (negativesArr).
 * When window size is reached. Check if element at start pointer is negative
 * If yes it must be the first element in negativesArr.
 * Now remove it from this array and add this to the resultant array (result).
 * And that's it!
 */

function firstNegativeInSizeKOptimized(arr, k) {
  let start = 0, end = 0;
  const result = []
  const negativesArr = []

  while (end < arr.length) {
    if (arr[end] < 0) negativesArr.push(arr[end])

    if (end - start + 1 < k) {
      end++
    } else {
      result.push(negativesArr[0] || 0)
      if (arr[start] < 0) negativesArr.shift()
      start++
      end++
    }
  }
  return result
}


// console.log(firstNegativeInSizeKOptimized([12, -1, -7, 8, -15, 30, 16, 28], 3))