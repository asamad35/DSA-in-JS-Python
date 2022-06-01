// leetcode 643

function findMaxAverage(arr, k) {
  let [start, end, maxSum, tempSum] = [0, 0, -Infinity, 0];

  while (end < arr.length) {
    tempSum += arr[end];

    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      maxSum = Math.max(maxSum, tempSum);
      tempSum -= arr[start];
      start++;
      end++;
    }
  }
  return maxSum / k;
}

console.log(findMaxAverage([1, 12], 2));
