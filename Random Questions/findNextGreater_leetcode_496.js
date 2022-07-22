var nextGreaterElement = function (nums1, nums2) {
  const nums2Obj = {};
  const ans = [];
  let greaterElFound = false;

  //   make object with value:index pair
  for (let i = 0; i < nums2.length; i++) {
    nums2Obj[nums2[i]] = i;
  }

  //   check greater value in nums2 from after the index of current element in nums2.
  for (let i = 0; i < nums1.length; i++) {
    for (let j = nums2Obj[nums1[i]]; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        ans.push(nums2[j]);
        greaterElFound = true;
        break;
      }
    }
    if (greaterElFound === false) ans.push(-1);
    greaterElFound = false;
  }

  return ans;
};
