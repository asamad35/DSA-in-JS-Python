//  dry run to get a better understanding ( easy he!! https://www.youtube.com/watch?v=P1Ic85RarKY)

function mergeTwoSortedArrays(nums1, len1, nums2, len2) {
  //  create three pointers

  let p1 = len1 - 1; // pointing at nums1 last positive number
  let p2 = len2 - 1; // pointing at nums2 last index
  let p1end = len1 + len2 - 1; // pointing at nums1 last index

  // pointing at end of arays because array is sorted, taking advantage.

  while (p2 >= 0) {
    // till p2 poinitng at nums2 last index
    if (nums2[p2] >= nums1[p1]) {
      // if true, insert element
      nums1[p1end] = nums2[p2];
      p2--;
    } else {
      // if false p1end me number at p1 daldo. [1,2,2,3,0,5,6] --> [1,2,2,3,3,5,6] (duplicating "3" moving part of
      // array forward untill nums2[p2] gets equal or greater than nums1[p1] )
      nums1[p1end] = nums1[p1];
      p1--;
    }
    p1end--;
  }
  return nums1;
}

console.log(mergeTwoSortedArrays([1, 2, 2, 3, 0, 0, 0], 4, [1, 5, 6], 3));
