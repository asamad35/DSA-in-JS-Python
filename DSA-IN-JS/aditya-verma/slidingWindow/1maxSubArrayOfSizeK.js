function maxSubArrayOfSizeK(arr, k) {
  let [start, end, maxSum, tempSum] = [0, 0, 0, 0];

  while (end < arr.length) {
    tempSum += arr[end];
    if (end - start + 1 < k) { // end - start + 1 this gives size of window
      end++
    } else {
      maxSum = Math.max(tempSum, maxSum)
      tempSum -= arr[start]
      start++
      end++
    }
  }
  return maxSum;
}



console.log(maxSubArrayOfSizeK([1, 2, 3, 4, 5, 6], 3))