var majorityElement = function (nums) {
  // get two most occuring numbers
  let [count1, count2, num1, num2] = [0, 0, Infinity, Infinity];
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num1) count1++;
    else if (nums[i] === num2) count2++;
    else if (count1 === 0) {
      num1 = nums[i];
      count1 = 1;
    } else if (count2 === 0) {
      num2 = nums[i];
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = 0;
  count2 = 0;

  //   check if its more than n/3
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num1) count1++;
    if (nums[i] === num2) count2++;
  }
  if (count1 > nums.length / 3) ans.push(num1);
  if (count2 > nums.length / 3) ans.push(num2);

  return ans;
};

console.log(majorityElement([2, 2, 3, 5, 4, 5, 6, 7]));
