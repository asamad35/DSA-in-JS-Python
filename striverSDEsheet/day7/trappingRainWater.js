// //  -Naive T(N square) S(1)
// // * trapped water at an index is equal to min of ( max of left and max of right from that index ) - height of that index

// var trap = function (height) {
//   let ans = 0;
//   //   looping over index
//   for (let i = 0; i < height.length; i++) {
//     let maxLeft = 0;
//     let maxRight = 0;

//     // It will start from (index - 1) or if index-1 is less than zero, then start from 0.
//     let leftPointer = i - 1 < 0 ? 0 : i - 1;

//     // Finding leftMax
//     while (leftPointer >= 0) {
//       maxLeft = Math.max(maxLeft, height[leftPointer]);
//       leftPointer--;
//     }

//     // It will start from (index + 1).
//     let rightPointer = i + 1;

//     // Finding rightMax
//     while (rightPointer < height.length) {
//       maxRight = Math.max(maxRight, height[rightPointer]);
//       rightPointer++;
//     }

//     // trapped water should be positive
//     let waterTrapped = Math.min(maxLeft, maxRight) - height[i];
//     ans += waterTrapped < 0 ? 0 : waterTrapped;
//   }
//   return ans;
// };

// - Optimised T(3N) S(1)

/*
- The gist is that we find 
- prefixSum i.e find the maximum element in array from current element left. T(N)
- And suffixSum i.e find the maximum element in array from current element right. T(N)
- Then use this for calculating ans.
*/

var trap = function (height) {
  let prefixSum = [];
  let suffixSum = Array(height.length);
  let ans = 0;

  //     finding prefix sum
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    max = Math.max(max, height[i]);
    prefixSum.push(max);
  }

  max = 0;
  //     finding suffix sum
  for (let i = height.length - 1; i >= 0; i--) {
    max = Math.max(max, height[i]);
    suffixSum[i] = max;
  }

  //   calculate ans
  for (let i = 0; i < height.length; i++) {
    let prefix = i === 0 ? prefixSum[i] : prefixSum[i - 1];
    let suffix = i === height.length - 1 ? suffixSum[i] : suffixSum[i + 1];
    let trappedWater = Math.min(prefix, suffix) - height[i];
    ans += trappedWater < 0 ? 0 : trappedWater;
  }
  return ans;
};
