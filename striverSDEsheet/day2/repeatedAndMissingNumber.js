// Naive approach

/*
function repeateAndMissingNumber(arr) {
  let set = new Set();
  let ans = [];

  for (let i = 1; i <= arr.length; i++) {
    set.add(i);
  }
  for (i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      set.delete(arr[i]);
    } else {
      ans.push(arr[i]);
    }
  }

  //   if ([...set][0] > ans[0]) {
  //     ans.push([...set][0]);
  //   } else {
  //     ans.unshift([...set][0]);
  //   }

  ans.push([...set][0]);
  return ans;
}
*/

//

// optimized
function repeateAndMissingNumber(arr) {
  let tempArr = Array(arr.length + 1).fill(0);
  let ans = [];
  for (i = 0; i < arr.length; i++) {
    tempArr[arr[i]]++;
  }
  for (let i = 1; i < tempArr.length; i++) {
    if (tempArr[i] === 0) {
      ans.push(i);
    }
    if (tempArr[i] === 2) {
      if (ans.length === 1) ans.unshift(i);
      else ans.push(i);
    }
  }
  return ans;
}

console.log(repeateAndMissingNumber([5, 2, 2, 3, 4]));
