function twoSum(arr, target) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if ([target - arr[i]] in obj) {
      return [obj[target - arr[i]], i];
    } else {
      obj[arr[i]] = i;
    }
  }
}

console.log(twoSum([3, 2, 3], 6));
