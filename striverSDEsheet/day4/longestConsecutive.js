var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let count = 1;
  let max = 0;

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

// Naive approach
/*
function longestConsecutive(arr) {
  arr.sort((a, b) => a - b);
  let [start, end] = [0, 0];
  let ans = 0;

  //   loop untill end < arr.length
  while (end < arr.length) {
    if (arr[end + 1] === arr[end] + 1) {
      end++;
      //   store the answer
      ans = Math.max(ans, end - start + 1);
    } else {
      end++;
      //   start and end are same when the consecutive sequence breaks to find the next sequence.
      start = end;
    }
  }

  return ans;
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
*/
