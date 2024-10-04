/**
 * Find all the subarrays sum.
 * Check if the sum is equal to k and subarray length is more than result length.
 * If yes update the result with new subarray length.
 */

function largestSubArrayOfSumKNaive(arr, k) {
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    let tempSum = 0
    for (let j = i; j < arr.length; j++) {
      tempSum += arr[j]
      if (tempSum === k && j - i + 1 > result) {
        result = j - i + 1
      }
    }
  }
  return result
}
// console.log(largestSubArrayOfSumKNaive([4, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 3, 5], 5))



/**
 * Create a dynamic window with sum as K. Start with a window with default element as arr[0].
 * 
 * Do the below steps in order.
 * If sum of elements of window is greater than K, reduce window size till sum is smaller or equal to k
 * Then check if window sum is equal to K. If yes update the result.
 * Now increment the end pointer of window and and also update the window sum.
 * 
 */
function largestSubArrayOfSumKOptimized(arr, k) {
  let start = 0, end = 0, res = 0, tempSum = arr[0]

  while (end < arr.length) {
    while (tempSum > k) {
      tempSum -= arr[start]
      start++
    }
    if (tempSum === k) {
      res = Math.max(end - start + 1, res)
    }
    end++
    tempSum += arr[end]
  }
  return res

}
console.log(largestSubArrayOfSumKOptimized([10, 2, 1, 3], 2))