function maxLen(arr) {
  let obj = {};
  let n = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) n = i + 1;
    else {
      if (obj.hasOwnProperty(sum)) n = Math.max(n, i - obj[sum]);
      else obj[sum] = i;
    }
  }
  return n;
}
console.log(maxLen([1, -1, 3, 2, -2, -2, 1, 7, 10, 23]));
