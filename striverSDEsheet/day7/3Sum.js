// Brute force T(N cube + Nlog(N)) S(no of triplets * 3)

var threeSum = function (nums) {
  let ans = [];
  nums = nums.sort((a, b) => a - b);
  for (let start = 0; start < nums.length; start++) {
    for (let mid = start + 1; mid < nums.length; mid++) {
      for (let end = mid + 1; end < nums.length; end++) {
        if (nums[start] + nums[mid] + nums[end] === 0)
          ans.push([nums[start], nums[mid], nums[end]]);
        // - skipping same element
        while (nums[end] === nums[end + 1]) end++;
      }
      // - skipping same element
      while (nums[mid] === nums[mid + 1]) mid++;
    }
    // - skipping same element
    while (nums[start] === nums[start + 1]) start++;
  }
  return ans;
};

// optimised (same as 4sum problem) T(Nlog(N) + N square) S(no of triplets * 3)

// var threeSum = function (nums) {
//   // - create 3 pointers
//   let start, mid, end;
//   let ans = [];

//   // - sort the array
//   nums = nums.sort((a, b) => a - b);

//   for (start = 0; start < nums.length; start++) {
//     mid = start + 1;
//     end = nums.length - 1;

//     while (mid < end) {
//       if (nums[start] + nums[mid] + nums[end] === 0) {
//         ans.push([nums[start], nums[mid], nums[end]]);
//         while (nums[mid] === nums[mid + 1]) {
//           mid++;
//         }
//         mid++;
//         while (nums[end] === nums[end - 1]) {
//           end--;
//         }
//         end--;
//       } else if (nums[start] + nums[mid] + nums[end] > 0) {
//         while (nums[end] === nums[end - 1]) {
//           end--;
//         }
//         end--;
//       } else {
//         while (nums[mid] === nums[mid + 1]) {
//           mid++;
//         }
//         mid++;
//       }
//     }
//     while (nums[start] === nums[start + 1]) {
//       start++;
//     }
//   }
//   console.log(ans);
//   return ans;
// };
