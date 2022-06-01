var merge = function (arr) {
  arr.sort((a, b) => a[0] - b[0]);
  const n = arr.length;
  //   put first array to ans
  let ans = [arr[0]];
  for (let i = 1; i < n; i++) {
    // compare if ans ka last array ka end point is more than arr[i] ka start point. if yes then ans[last] ka end point will be maximum of ans[last][end] and arr[i][end].
    // If no, then ans me push krdo arr[i]
    if (ans[ans.length - 1][1] >= arr[i][0]) {
      ans[ans.length - 1][1] = Math.max(arr[i][1], ans[ans.length - 1][1]);
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
};

console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);
