/***
 * I tried it using two pointer for [1,0,1,0,1], goal=2.
 * [_,_,1,0,1] this case was missing. 
 * This indicates this will not be solved with simple two pointers.
 * So we need to use lessThanOrEqual to approach. We use this when two pointers fails like above. 
 * Now we create a function to calculate all the subarrays in which sum is less than or equal to goal.
 * We use this function to find subArraysLessOrEqualToGoal(nums, goal) - subArraysLessOrEqualToGoal(nums, goal - 1).
 * This will give number of subarrays where sum is exactly equal to goal.
 */



function subArraysLessOrEqualToGoal(nums, goal) {
  if (goal < 0) return 0
  let start = 0, end = 0, res = 0, sum = 0;
  const len = nums.length
  while (end < len) {
    sum += nums[end]

    if (sum > goal) {
      while (sum > goal) {
        sum -= nums[start]
        start++
      }
    }
    res += end - start + 1
    end++
  }
  return res
}

var numSubarraysWithSum = function (nums, goal) {
  return subArraysLessOrEqualToGoal(nums, goal) - subArraysLessOrEqualToGoal(nums, goal - 1)
};