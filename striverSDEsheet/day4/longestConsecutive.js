var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let count = 1;
  let max = 0;

  console.log(set.values(), set.keys());

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let number = nums[i];
      while (set.has(number + 1)) {
        count++;
        number++;
      }
      max = Math.max(max, count);
      count = 1;
    }
  }
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
