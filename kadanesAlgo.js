function kadanesAlgo(arr) {
  let maxSum = -Infinity;
  let tempSum = 0;

  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    maxSum = Math.max(maxSum, tempSum);
    if (tempSum < 0) {
      tempSum = 0;
    }
  }
  return maxSum;
}

console.log(kadanesAlgo([-2, -3, 4, -1, -2, 1, 5]));
