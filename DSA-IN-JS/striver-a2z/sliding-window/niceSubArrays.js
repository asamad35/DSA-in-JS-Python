/**
Same explanation as binarySubarrayWithSum
 */

function findSubArraysWithAtleastKOdd(nums, k) {
  let start = 0, end = 0, oddNums = 0, res = 0, len = nums.length

  while (end < len) {
    if (nums[end] % 2 === 1) oddNums += 1;

    while (oddNums > k) {
      if (nums[start] % 2 === 1) oddNums -= 1;
      start++
    }

    res += end - start + 1
    end++
  }
  return res
}

var numberOfSubarrays = function (nums, k) {
  return findSubArraysWithAtleastKOdd(nums, k) - findSubArraysWithAtleastKOdd(nums, k - 1)
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3))