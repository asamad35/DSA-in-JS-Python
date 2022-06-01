// naive approach nLOg(n)
/*
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
  return nums1;
};
*/

// O(N) (two pointer)
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let k = m + n - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[k] = nums1[p1];
      p1--;
      k--;
    } else {
      nums1[k] = nums2[p2];
      k--;
      p2--;
    }
  }
};
console.log(merge([1, 2, 8, 0, 0, 0], 3, [2, 5, 6], 3));
