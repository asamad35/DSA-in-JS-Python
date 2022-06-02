function maxLen(arr) {
  //  creating object to store sum: index (at which sum was calculated)
  let obj = {};
  let maxLength = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    // return index+1 (length of subarray) if sum === 0
    if (sum === 0) maxLength = i + 1;
    else {
      // check if sum exist in obj
      // if yes, return the length of subarray because it was added to the previous sum that we found in object, but doesnt effect the value of sum. Hence it's summation will be 0.
      if (sum in obj) n = Math.max(maxLength, i - obj[sum]);
      // store the sum with index in object for future comparison
      else obj[sum] = i;
    }
  }
  return n;
}
console.log(maxLen([1, -1, 3, 2, -2, -2, 1, 7, 10, 23]));
