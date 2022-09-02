// same as print_all_permutations_approach_2 .
// we are using a set to skip repeated number

var permuteUnique = function (nums) {
  const ans = [];
  const len = nums.length;

  function swap(index1, index2, tempArr) {
    const temp = tempArr[index1];
    tempArr[index1] = tempArr[index2];
    tempArr[index2] = temp;
  }

  function uniquePermutations(index, tempArr) {
    if (index === len) {
      ans.push([...tempArr]);
      return;
    } else {
      // -create a set to skip swapping of repeated numbers to eliminate duplicates.
      const set = new Set();
      for (let i = index; i < len; i++) {
        //  - check if set has tempArr[i] , if yes no swapping will take place. skip iteration.
        // - if no, add tempArr[i] in set
        if (set.has(tempArr[i])) continue;
        set.add(tempArr[i]);

        swap(index, i, tempArr);
        uniquePermutations(index + 1, tempArr);
        swap(i, index, tempArr);
      }
    }
  }

  uniquePermutations(0, nums);

  return ans;
};
