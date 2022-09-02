function minSubArrayLen(arr, sum) {
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  let total = 0;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([4, 3, 3, 8, 12], 5));
