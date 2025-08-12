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
    sum += arr[end];

    // shrink window until sum <= k
    while (sum > k) {
      sum -= arr[start];
      start++;
    }

    // check if sum matches k
    if (sum === k) {
      ans = Math.max(ans, end - start + 1);
    }

    end++;
  }
  console.log(ans);
}

// Test case 1: Basic example with subarray sum equals k
largestSubArrayOfSumK([1, 2, 1, 1], 5);
// Expected output: 4 (subarray [1, 2, 1, 1])

// Test case 2: Multiple possible subarrays with sum k
largestSubArrayOfSumK([1, 2, 3, 2, 1], 5);
// Expected output: 2 (subarrays [2, 3] and [3, 2])

// Test case 3: Entire array sums to k
largestSubArrayOfSumK([2, 2, 2], 6);
// Expected output: 3

// Test case 4: No subarray sums to k
largestSubArrayOfSumK([1, 2, 3], 7);
// Expected output: 0

// Test case 5: Single element equals k
largestSubArrayOfSumK([5, 1, 2], 5);
// Expected output: 1

// Test case 6: Array with zeros
largestSubArrayOfSumK([0, 0, 0, 5], 5);
// Expected output: 4 (subarray [0,0,0,5])

// Test case 7: Array with repeated elements
largestSubArrayOfSumK([1, 1, 1, 1, 1, 1], 3);
// Expected output: 3 (subarray [1,1,1])
