function mergeIntervals(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  let ans = [arr[0]];
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    if (ans[ans.length - 1][1] >= arr[i][0]) {
      ans[ans.length - 1] = [
        Math.min(ans[ans.length - 1][0], arr[i][0]),
        Math.max(ans[[ans.length - 1][1]], arr[i][1]),
      ];
    } else {
      ans.push(arr[i]);
    }
  }

  return ans;
}

console.log(
  mergeIntervals([
    [0, 0],
    [1, 4],
  ])
);
