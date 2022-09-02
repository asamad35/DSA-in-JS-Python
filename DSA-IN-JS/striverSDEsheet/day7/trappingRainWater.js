//  -Naive T(N square) S(1) (striver)
// * trapped water at an index is equal to min of ( max of left and max of right from that index ) - height of that index

var trap = function (height) {
  let ans = 0;
  //   looping over index
  // + i=1  till i = second last index because 1st and last index me water store ni ho skta
  for (let i = 1; i < height.length - 1; i++) {
    let maxLeft = 0;
    let maxRight = 0;

    // It will start from (index - 1) or if index-1 is less than zero, then start from 0.
    let leftPointer = i - 1;

    // Finding leftMax
    while (leftPointer >= 0) {
      maxLeft = Math.max(maxLeft, height[leftPointer]);
      leftPointer--;
    }

    // It will start from (index + 1).
    let rightPointer = i + 1;

    // Finding rightMax
    while (rightPointer < height.length) {
      maxRight = Math.max(maxRight, height[rightPointer]);
      rightPointer++;
    }

    // trapped water should be positive
    let waterTrapped = Math.min(maxLeft, maxRight) - height[i];
    ans += waterTrapped < 0 ? 0 : waterTrapped;
  }
  return ans;
};

// Optimised T(3N) S(1) (striver)

/*
- The gist is that we find 
- prefixSum i.e find the maximum element in array from current element left. T(N)
- And suffixSum i.e find the maximum element in array from current element right. T(N)
- Then use this for calculating ans.
*/

// var trap = function (height) {
//   let prefixSum = [];
//   let suffixSum = Array(height.length);
//   let ans = 0;

//   //     finding prefix sum
//   let max = 0;

//   for (let i = 0; i < height.length; i++) {
//     max = Math.max(max, height[i]);
//     prefixSum.push(max);
//   }

//   max = 0;
//   //     finding suffix sum
//   for (let i = height.length - 1; i >= 0; i--) {
//     max = Math.max(max, height[i]);
//     suffixSum[i] = max;
//   }

//   //   calculate ans
//   //   i=1  till i = second last index because 1st and last index me water store ni ho skta
//   for (let i = 1; i < height.length - 1; i++) {
//     let prefix = prefixSum[i - 1];
//     let suffix = suffixSum[i + 1];
//     let trappedWater = Math.min(prefix, suffix) - height[i];
//     ans += trappedWater < 0 ? 0 : trappedWater;
//   }
//   return ans;
// };

// - O(N) S(1) (Tech Dose)

/*
! Here we are not using array to store the maxleft and right instead we are just using vairaibles.
 * If we are filling from left, It is true that we cannot fill more than the maxLeft value even without checking the rightside values . Because it will overflow to left.
 * If we are filling from right, It is true that we cannot fill more than the maxRight value even without checking the leftside values.Because it will overflow to Right.
 - So we can create to variable that stores maxLeft and maxRight.
 - At each iteration we will fill water at an index whether form left (leftPointer) or right(right pointer) while maintaining the maximum values.
 - Will keep doing iteration untill all the index are filled i.e when leftPointer === rightPointer.
*/
var trap = function (height) {
  const n = height.length;
  // - initializing variables
  let [leftMax, rightMax, leftPointer, rightPointer, ans] = [
    height[0],
    height[n - 1],
    1,
    n - 2,
    0,
  ];

  // - iterating till all the index are filled.
  while (leftPointer <= rightPointer) {
    // -if leftMax is smaller fill the leftPointer and increment it.
    if (leftMax < rightMax) {
      if (leftMax > height[leftPointer]) ans += leftMax - height[leftPointer];
      // - if current index height is greater than leftMax, update leftMax
      else leftMax = height[leftPointer];
      leftPointer++;
    } else {
      // -if rightMax is smaller fill the rightPointer and decrement it.
      if (rightMax > height[rightPointer])
        ans += rightMax - height[rightPointer];
      // - if current index height is greater than rihgtMax, update rightMax
      else rightMax = height[rightPointer];
      rightPointer--;
    }
  }
  return ans;
};
