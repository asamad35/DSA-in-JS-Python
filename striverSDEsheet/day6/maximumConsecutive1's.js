var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;

  /*
  - Gist is we are storing count and max count, when current element is not equal to count ( equal to zero ) make count 0; 
  */

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      maxCount = Math.max(count, maxCount);
      console.log(maxCount);
    } else count = 0;
  }
  return maxCount;
};
