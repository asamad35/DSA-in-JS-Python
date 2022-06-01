/*
Q. Will the discussed approach work with negative numbers in the array?
A. No. 
Because let's say in the given array [4,1,1,1,2,3,5] when we found the sum within the window to be greater 
than the desired value 5 (i=0, j=2 -> [4,1,1]), we started reducing the size of the window by doing i++. 
Here we assumed that once the sum of elements within the window becomes greater than 5 then increasing the window size 
will just add to the sum and hence we will not attain the sum 5 again. This is true when all the element are positive 
and hence reducing the window size by doing i++ makes sense. But this might not be true if array also contains negative 
numbers. Consider the array [4,1,1,-2,1,5], here we would have found the sum to be greater than 5 for i=0, j=2 and if we 
would have now started reducing the window size by doing i++, we would have missed the potential subarray (i=0, j=4).
In short, the discussed approach will not work with array having negative numbers.
*/

function largestSubArrayOfSumK(arr, k) {
  let sum = 0;
  let ans = 0;
  let end = 0;
  let start = 0;

  while (end < arr.length) {
    if (sum < k) {
      sum += arr[end];
      end++;
    }

    if (sum === k) {
      ans = Math.max(ans, end - start);
      sum += arr[end];
      end++;
      sum -= arr[start];
      start++;
    }

    if (sum > k) {
      sum -= arr[start];
      start++;
    }
  }
  console.log(ans);
}

largestSubArrayOfSumK([4, 1, 4, 5, 3, 2, 1, 2, 1, 1], 5);
