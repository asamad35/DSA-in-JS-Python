// - we can take an element multiple times.
// - So we can either pick and not move forward (so we can take that element multiple times) , or not pick and move forward.

// * t(2 power n)  s((2 power n)*k (for every recursive call we are creating new array of length k) + m*x (for ans array , m is number of combination of x avg length ))
var combinationSum = function (candidates, target) {
  const ans = [];
  const length = candidates.length - 1;

  function findCombinations(index, tempArr, sum) {
    console.log("tempArr:", tempArr, "sum:", sum, "index:", index);

    if (sum === 0) {
      ans.push(tempArr);
      return;
    }
    if (sum < 0 || index > length) return;

    //     Picking element and not moving to next index because element can be repeated
    findCombinations(
      index,
      [...tempArr, candidates[index]],
      sum - candidates[index]
    );

    //     skipping element and moving forward
    findCombinations(index + 1, [...tempArr], sum);
  }
  findCombinations(0, [], target);
  console.log(ans);

  return ans;
};

// - optimised
// - we are not creating new array for each recursion call, instead only one array is used to manage all the combinations.
// - push in temp array when candidates[idx] <=target
// - pop from when recursion backtracks.

// t(2 power n)  s(m*x) (m combination of avg length of x)
var combinationSum = function (candidates, target) {
  const ans = [];
  const len = candidates.length;

  function combinationSum(idx, tempArr, target) {
    console.log(tempArr, idx, target);
    if (target === 0) {
      // create new array dont pass refrence
      ans.push([...tempArr]);
      return;
    }
    if (idx === len) return;

    //             pick element
    if (candidates[idx] <= target) {
      tempArr.push(candidates[idx]);
      combinationSum(idx, tempArr, target - candidates[idx]);
      //   pop when recursion backtracks
      tempArr.pop();
    }

    //             skip element
    combinationSum(idx + 1, tempArr, target);
  }

  combinationSum(0, [], target);
  return ans;
};
