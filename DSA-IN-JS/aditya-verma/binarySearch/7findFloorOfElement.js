/**
 * Floor of an element is defined as the greatest element but smaller than the search element.
 * If mid element is smaller than search element, it means it is potential candidate for floor element.
 * Hence we update result with mid.
 * We keep doing this untill loop is completed.
 * 
 * Similarly we can find ceil of an element.
 * If mid element is greater than search element, it means it is potential candidate for ceil element.
 * Hence we update result with mid.
 * We keep doing this untill loop is completed.
 *  
 */



function findFloorOfAnElement(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let res = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] <= target) {
      res = mid
      start = mid + 1
    }
    else {
      end = mid - 1
    }
  }
  return res
}

console.log(findFloorOfAnElement([1, 3, 5, 6], 10))