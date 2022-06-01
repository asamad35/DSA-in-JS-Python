var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let size = nums.length;
  let res = [];

  if (nums.length === 0) return res;

  //   loop1
  for (let i = 0; i < size; i++) {
    //   loop2
    for (let j = i + 1; j < size; j++) {
      let twoTarget = target - nums[i] - nums[j];
      let start = j + 1;
      let end = size - 1;
      //   loop3
      while (start < end) {
        let twoSum = nums[start] + nums[end];
        if (twoSum < twoTarget) ++start;
        else if (twoSum > twoTarget) --end;
        else {
          let numsStart = nums[start];
          let numsEnd = nums[end];
          res.push([nums[i], nums[j], nums[start], nums[end]]);
          while (start < end && numsStart === nums[start]) ++start;
          while (start > end && numsEnd === nums[end]) ++end;
        }
      }
      while (j + 1 < size && nums[j + 1] === nums[j]) ++j;
    }
    while (i + 1 < size && nums[i + 1] === nums[i]) ++i;
  }
  return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
