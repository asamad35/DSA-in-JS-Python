// stiver

// - create a freqArr to record track of used and unused choices.
// - at each recursive call loop over the freqArr to choose the element.
// - when using element, mark it as true in freqArr, when backTracking mark it as false.

var permute = function (nums) {
  const ans = [];
  const len = nums.length;
  const freqArr = new Array(len).fill(false);

  function getPermutations(tempArr) {
    // - base case is when tempArr length is equal to nums length

    if (tempArr.length === len) {
      ans.push([...tempArr]);
      return;
    }

    for (let i = 0; i < len; i++) {
      if (freqArr[i] === false) {
        tempArr.push(nums[i]);
        freqArr[i] = true;
        getPermutations(tempArr);

        // backtracking changes
        tempArr.pop();
        freqArr[i] = false;
      }
    }
  }

  getPermutations([]);
  return ans;
};
