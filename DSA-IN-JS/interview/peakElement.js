/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (arr) {
  let start = 0, end = arr.length - 1;

  while (start <= end) {
    // Pick the middle index
    const mid = Math.floor((start + end) / 2);

    // Get neighbors; treat out-of-bounds as -Infinity
    const left = (mid > 0) ? arr[mid - 1] : -Infinity;
    const right = (mid < arr.length - 1) ? arr[mid + 1] : -Infinity;

    // Case 1: current element is greater than both neighbors -> peak
    if (arr[mid] > left && arr[mid] > right) return mid;

    // Case 2: we are on an ascending slope -> peak must exist on the right
    if (arr[mid] < right) {
      start = mid + 1;
    }
    // Case 3: we are on a descending slope -> peak must exist on the left
    else {
      end = mid - 1;
    }
  }
};
