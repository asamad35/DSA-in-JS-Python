// faraz video

// - push elements when going in every recursion depth.
// - pop elements when backtracking.
// - by doing this we can create different comibination within same array.

// t((2 power n) * k (time for insertion) ) s((2 power n)*k ( k is space taken by one combinations))
var subsets = function (nums) {
  const ans = [];
  const len = nums.length;

  function allSubsets(index, tempArr) {
    if (index === len) {
      ans.push([...tempArr]);
      return;
    }

    //         picking elements
    tempArr.push(nums[index]);
    allSubsets(index + 1, tempArr);
    tempArr.pop();

    //         skipping element
    allSubsets(index + 1, tempArr);
  }

  allSubsets(0, []);

  return ans;
};
