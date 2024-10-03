/**
 * Same as 2firstNegativeNumberInWindowOfSizeK.js
 */

function maxInSubarrayOfSizeKNaive(arr, k) {
  let start = 0, end = k - 1;
  const res = [];

  while (end < arr.length) {
    start = end - (k - 1)
    let tempMax = arr[start]
    while (start <= end) {
      if (arr[start] > tempMax) {
        tempMax = arr[start]
      }
      start++
    }
    end++
    res.push(tempMax)
  }

  return res
}
// console.log(maxInSubarrayOfSizeK([0, -1, 2, 1], 2))



/**
 * We dont repeatedly want to calculate the maximum in subarray again and again. 
 * So we will store the maximum candidates, to use it in subsequent subarrays.
 * Lets make a "temp" array to store all the possible values that can be candidate for maximum value.
 * Before pushing the maximum candidate into "temp", check whether it is greater than the last element of "temp" array.
 * Because if it is greater, then we have to discard all the smaller elements.
 * If it is not greater than the last element of "temp" array, then simply push in the "temp" array. As it could be a potential candidate in future.
 * Once window size is reached. 
 * Calculate answer, answer will always be the first element of the temp array.
 * Now move the window and update the calculations.
 * 
 * Dry run for [5,4,3,2] , k=3
 */


function maxInSubarrayOfSizeKOptimized(arr, k) {
  let start = 0, end = 0;
  const temp = []
  const res = []

  while (end < arr.length) {
    while (temp.length > 0 && arr[end] > temp[temp.length - 1]) {
      temp.pop()
    }
    temp.push(arr[end])

    if (end - start + 1 < k) {
      end++
    } else {
      res.push(temp[0])
      if (arr[start] === temp[0]) temp.shift()
      start++;
      end++;
    }
  }

  return res
}

console.log(maxInSubarrayOfSizeKOptimized([544, 745, 582, 738,], 4))