function nextPermutation(nums) {
  let [pivot1, pivot2] = [null, null];
  let end = nums.length - 1;

  function swap(index1, index2) {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
  }

  for (let i = end; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      pivot1 = i - 1;
      break;
    }
  }

  for (let i = end; i > pivot1; i--) {
    if (nums[i] > nums[pivot1]) {
      pivot2 = i;
      break;
    }
  }

  if (pivot1 === null) return nums.reverse();
  swap(pivot1, pivot2);
  pivot1++;
  while (pivot1 < end) {
    swap(pivot1, end);
    pivot1++;
    end--;
  }

  return nums;
}

console.log(nextPermutation([7, 1, 2, 5, 8, 1]));
