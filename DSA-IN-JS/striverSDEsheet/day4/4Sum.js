function fourSum(arr, target) {
  // sort the array
  arr.sort((a, b) => a - b);
  let i, j, left, right;
  const ans = [];

  // 1st loop
  for (i = 0; i < arr.length; i++) {
    // 2nd loop
    for (j = i + 1; j < arr.length; j++) {
      left = j + 1;
      right = arr.length - 1;

      // 3rd loop till left exceeds right
      while (left < right) {
        // getting sum of pair
        const sum = arr[i] + arr[j] + arr[left] + arr[right];

        // push ans in array if conditions matches
        if (sum === target) ans.push([arr[i], arr[j], arr[left], arr[right]]);

        // skip the repeating elements from left to avoid duplicacy
        if (sum < target || sum === target) {
          while (arr[left] === arr[left + 1]) left++;
          left++;
        }
        // skip the repeating elements from right to avoid duplicacy
        if (sum > target || sum === target) {
          while (arr[right] === arr[right - 1]) right--;
          right--;
        }
      }
      // skip the repeating elements to avoid duplicacy
      while (arr[j] === arr[j + 1]) j++;
      // the for loop will do the next j++
    }
    // skip the repeating elements to avoid duplicacy
    while (arr[i] === arr[i + 1]) i++;
    // the for loop will do the next j++
  }
  return ans;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
