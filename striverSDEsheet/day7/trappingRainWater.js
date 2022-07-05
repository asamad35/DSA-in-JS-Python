// Optimised T(3N) S(1)

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
