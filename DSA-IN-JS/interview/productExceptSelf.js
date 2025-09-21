/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Problem: Return an array where result[i] = product of all nums[j] except nums[i],
 *          without using division and in O(n) time.
 */
var productExceptSelf = function(nums) {
  const leftProduct = [];   // leftProduct[i] = product of all elements to the LEFT of i
  const rightProduct = [];  // rightProduct[i] = product of all elements to the RIGHT of i

  // Initialize boundaries: nothing to the left of index 0 → 1
  // nothing to the right of last index → 1
  leftProduct[0] = 1;
  rightProduct[nums.length - 1] = 1;

  // Build prefix products (left to right)
  // Each index gets product of everything before it
  for (let i = 1; i < nums.length; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
  }

  // Build suffix products (right to left)
  // Each index gets product of everything after it
  for (let i = nums.length - 2; i >= 0; i--) {
    rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
  }

  // Final result: multiply prefix * suffix for each index
  // nums[i] is safe to overwrite since we no longer need the original value
  for (let i = 0; i < nums.length; i++) {
    nums[i] = leftProduct[i] * rightProduct[i];
  }

  return nums;
};
