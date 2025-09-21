/**
 * @param {number[][]} intervals
 * @return {number[][]}
 *
 * Problem: Merge overlapping intervals.
 * Approach:
 *   1. Sort intervals by start time.
 *   2. Keep a "current interval" (currStart, currEnd).
 *   3. Traverse the list:
 *        - If the next interval overlaps → extend currEnd.
 *        - If it doesn’t overlap → push current interval into result and start a new one.
 *   4. Push the last current interval into result at the end.
 * Time: O(n log n) due to sort, Space: O(n) for result.
 */
var merge = function (intervals) {
  // Step 1: sort intervals by start value
  const arr = intervals.sort((a, b) => a[0] - b[0]);

  const res = [];

  // Step 2: initialize current interval with the first one
  let [currStart, currEnd] = arr[0];

  // Step 3: iterate over the rest of intervals
  for (let i = 1; i < arr.length; i++) {
    const [start, end] = arr[i];

    if (start <= currEnd) {
      // Overlap case: extend current interval
      currEnd = Math.max(currEnd, end);
    } else {
      // No overlap: push current and reset to new interval
      res.push([currStart, currEnd]);
      [currStart, currEnd] = [start, end];
    }
  }

  // Step 4: push the last interval
  res.push([currStart, currEnd]);

  return res;
};
