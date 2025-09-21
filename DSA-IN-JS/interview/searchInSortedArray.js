/**
 * @param {number[]} arr - rotated sorted array
 * @param {number} target - value to search
 * @return {number} index of target, or -1 if not found
 *
 * Approach: Modified binary search
 *   - At each step, one half of the array is guaranteed to be sorted.
 *   - Check if target lies in the sorted half → shrink search space.
 *   - Otherwise → search in the other half.
 * Time: O(log n), Space: O(1)
 */
var search = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    // Found target
    if (arr[mid] === target) return mid;

    // Case 1: left half [start..mid] is sorted
    if (arr[mid] >= arr[start]) {
      if (target >= arr[start] && target < arr[mid]) {
        // Target lies in left half → shrink right
        end = mid - 1;
      } else {
        // Target lies in right half
        start = mid + 1;
      }
    }
    // Case 2: right half [mid..end] is sorted
    else {
      if (target <= arr[end] && target > arr[mid]) {
        // Target lies in right half → shrink left
        start = mid + 1;
      } else {
        // Target lies in left half
        end = mid - 1;
      }
    }
  }

  return -1; // not found
};
