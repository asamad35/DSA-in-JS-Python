/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const sortedNums = nums.sort((a, b) => a - b)

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue

    let target = sortedNums[i];
    let start = i + 1;
    let end = sortedNums.length - 1

    while (start < end) {
      const sum = target + sortedNums[start] + sortedNums[end];
      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[start], sortedNums[end]])
        start++
        end--
      }
      else if (sum < 0) start++
      else if (sum > 0) end--
      
      
    }
  }

  return result
};


console.log(threeSum([-1, 0, 1, 2, -1, -4]))