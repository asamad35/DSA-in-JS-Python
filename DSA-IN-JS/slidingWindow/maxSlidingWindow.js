function maxSlidingWindow(arr, k) {
  let [start, end] = [0, 0];
  let tempArr = [];
  let ans = [];

  while (end < arr.length) {
    //   push and pop from temp array
    while (tempArr[tempArr.length - 1] < arr[end] && tempArr.length > 0) {
      tempArr.pop();
    }
    tempArr.push(arr[end]);

    //  general format
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      ans.push(tempArr[0]);
      end++;
      if (tempArr[0] === arr[start]) tempArr.shift();
      start++;
    }
  }
  return ans;
}

console.log(maxSlidingWindow([1, -1], 1));
