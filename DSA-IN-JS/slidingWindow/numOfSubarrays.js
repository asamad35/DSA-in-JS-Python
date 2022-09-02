// leetcode 1343

function numOfSubarrays(arr, k, threshold) {
  let [start, end, ans, sum] = [0, 0, 0, 0];

  while (end < arr.length) {
    sum += arr[end];
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      if (sum / k >= threshold) ans++;
      sum -= arr[start];
      start++;
      end++;
    }
  }
  return ans;
}

console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));
