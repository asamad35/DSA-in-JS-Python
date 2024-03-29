/* (FARAZ VIDEO)
-Same as previous question subsets_sum.
-We just to sort the array.
-Skip those elements which are repeating only when we choose skip element option. This is done to eliminate repeated elements.
-For better understanding create recursion tree og [1,2,2] 

*/

var subsetsWithDup = function (nums) {
  // sorting
  nums.sort((a, b) => a - b);

  const n = nums.length;
  let ans = [];

  // recursive function
  function findingSubsets(index, tempArr, nums) {
    // edge case
    if (index >= n) {
      ans.push(tempArr);
      return;
    }

    // Picking element option
    // [...tempArr, nums[index]] passing new array reference, so elements will get pushed ot new array
    findingSubsets(index + 1, [...tempArr, nums[index]], nums);

    // skipping repeating elements
    while (nums[index] === nums[index + 1]) {
      index++;
    }
    // skip element option
    findingSubsets(index + 1, tempArr, nums);
  }
  findingSubsets(0, [], nums);

  return ans;
};

// optimised
// -Same as previous question subsets_sum.
// -We just to sort the array.
// -Skip those elements which are repeating only when we choose skip element option. This is done to eliminate repeated elements.
// -For better understanding create recursion tree og [1,2,2]

// t((2 power n)*k + nlogn) s((2 power n)*k (k is space taken by 1 combination))
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [];
  const len = nums.length;

  function allUniqueSubsets(index, tempArr) {
    if (index === len) {
      ans.push([...tempArr]);
      return;
    }

    //         picking elements
    tempArr.push(nums[index]);
    allUniqueSubsets(index + 1, tempArr);
    tempArr.pop();

    //         skipping element then calling recursion
    while (nums[index] === nums[index + 1]) index++;
    allUniqueSubsets(index + 1, tempArr);
  }

  allUniqueSubsets(0, []);

  return ans;
};
