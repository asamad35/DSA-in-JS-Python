/**
 * Question: Find a peak element
 * An element is called a peak element if its value is greater than the value of its adjacent elements(if they exists).
 * The array may contain multiple peak elements, in that case you can return any of the peak elements.
 * 
 * Solution:
 * Step 1. Handle edge cases:
 *      - Check if 1st or last element is peak element, by comparing with its only one neighbour.
 * Step 2. Use binary search:
 *      - If mid element is greater than its next element, then we need to check in left half. 
 *      - Because we need go where the slope is increasing. This will guarantee that we will find a peak element.
 *      - If slope keeps increasing, then the peak element will be the last element of the array.
 *      - If slope drops in b/w, then it will create a local maxima. And that local maxima will be our peak element.
 *       
 *      - If mid element is lesser than both of its neighbours, then we can go at any half.
 *      - As both halves has increasing slope. So peak element will be present guranteed in both halves.
 */


function peakElement(arr) {
  let start = 0;
  let end = arr.length - 1;

  // Edge cases
  if (arr.length === 1) return arr[0]
  if (arr[0] > arr[1]) return arr[0]
  if (arr[arr.length - 1] > arr[arr.length - 2]) return arr[arr.length - 1]


  // we have already checked the edge case, if we dont do this then mid-1 or mid+1 might go out of bound.
  start = 1;
  end = arr.length - 2

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (arr[mid] >= arr[mid - 1] && arr[mid] >= arr[mid + 1]) return arr[mid]
    if (arr[mid] >= arr[mid - 1]) start = mid + 1;
    else end = mid - 1
  }
}


console.log(peakElement([3, 4, 3, 2, 1]))