/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (arr) {
  // Edge case: if array is empty, longest sequence is 0
  if (arr.length === 0) return 0;

  // Use a Set for O(1) lookups and to remove duplicates
  const set = new Set(arr);

  // Result: maximum length found so far
  let res = 1;

  // Iterate through unique numbers in the set
  for (const num of set) {
    let temp = 1; // length of current streak

    // Only try to build sequences from numbers that are "starts"
    // i.e., no smaller consecutive number exists (num - 1 not in set)
    if (!set.has(num - 1)) {
      let j = 1;

      // Keep expanding the sequence forward: num+1, num+2, ...
      while (set.has(num + j)) {
        temp++;
        j++;
      }
    }

    // Update the global maximum streak length
    res = Math.max(temp, res);
  }

  // Return the length of the longest consecutive sequence
  return res;
};
