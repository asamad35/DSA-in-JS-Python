function minSubArrayLen(arr, k) {
  let [start, end, sum, ans] = [0, 0, 0, Infinity];

  while (end < arr.length) {
    if (sum < k) {
      sum += arr[end];
    } else {
      ans = Math.min(ans, end - start + 1);
      sum -= arr[start];
      start++;
    }
    if (sum < k) end++;
  }
  return ans;
}

console.log(minSubArrayLen([2, 3, 1, 2, 2, 4], 5));
