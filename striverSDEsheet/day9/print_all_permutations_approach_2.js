// striver video
/*
- we will not use any extra space to keep track of used and unused numbers.
- instead we will generate all possible combinations by swapping elements.
- create tree for better understanding. 
*/

var permute = function (nums) {
  const ans = [];
  const len = nums.length;

  //   swap fucntion
  function swap(index1, index2, tempArr) {
    const temp = tempArr[index1];
    tempArr[index1] = tempArr[index2];
    tempArr[index2] = temp;
  }

  function getPermutations(index, tempArr) {
    // base case when we reach end of array (no more swappings can be done)
    if (index === len) {
      ans.push([...tempArr]);
      return;
    }

    // for loop for making multiple recursion calls, as there can be more than 2 calls.
    for (let i = index; i < len; i++) {
      // swap to generate diff combinations
      swap(index, i, tempArr);

      // now swap from (index + 1) to generate more combinations.
      getPermutations(index + 1, tempArr);

      //         backtrack (swap back)
      swap(i, index, tempArr);
    }
  }

  getPermutations(0, nums);
  return ans;
};
