// find duplicate in array of size n+1, where elements ranges from 1 to n.

function findDuplicate(nums) {
  let hash = new Set();
  let i = 0;
  while (i < nums.length) {
    if (hash.has(nums[i])) {
      return nums[i];
    } else {
      hash.add(nums[i]);
    }
    i++;
  }
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
