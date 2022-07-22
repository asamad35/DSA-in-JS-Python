// Optimised O(N)
/* 
- 1) We create an object that holds each value count.
- 2) Loop over the array and store search target in object.
- 3) if found add target value in count (because arr[i] and target-arr[i] is a pair), but by doing this we will count pair twice
- suppose arr=[2,5,9,5] obj = {2:1, 5:2 ,9:1 }, target = 7,
- here 2,5 and 5,2 are the same pair.
- 4) So we will half ther count i.e count = count/2.

-5) But if arr[i] === target - arr[i]. we need to reduce count by 1 i.e count-- because it cannot be a pair with itself.
- example 1) suppose arr=[2] obj = {2:1}, target = 4, (COUNT = 0)
- example 2) suppose arr=[1,1,1,1] obj = {1:4}, target = 2, (COUNT= 6)
*/
function getPairsCount(arr, n, k) {
  let count = 0;
  const obj = {};

  // create object
  for (let i = 0; i < arr.length; i++) obj[arr[i]] = obj[arr[i]] + 1 || 1;

  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(k - arr[i])) {
      count += obj[k - arr[i]];
    }
    if (arr[i] === k - arr[i]) count--;
  }
  return count / 2;
}
