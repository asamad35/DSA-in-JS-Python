/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1

  // edge case when numsay is sorted OR rotated N number of times
  if (nums[start] <= nums[end]) return nums[start]

  while (start <= end) {

    const mid = Math.floor((start + end) / 2)
    const prev = (mid - 1 + nums.length) % nums.length // circular prev 
    const next = (mid + 1) % nums.length // circular next

    if (nums[mid] <= nums[prev] && nums[mid] <= nums[next]) {
      return nums[mid]
    }

    // if the current subnumsay is sorted then return the start index
    if (nums[start] <= nums[end]) return nums[start]

    if (nums[mid] >= nums[start]) { // this means first half is sorted, search in 2nd half
      start = mid + 1
    } else { // this means second half is sorted, search in first half
      end = mid - 1
    }
  }
};