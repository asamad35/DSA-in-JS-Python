/***
 * Rule for recrusion, assumes that the function works.
 * Assumes that sort function sorts arr of length "n", so it will also sort arr of length "n-1". 
 * 
 * For sort function
 * Base condition will be when length of arr is 1. Because then the arr is considered sorted.
 * If array length is not 1, then we pop the last element to reduce the array size and call sort again.
 * After this is sorted we need to insert the popped element to the right place. 
 * Then return the array.
 * 
 * For insert function
 * Base condition is, if length of array is 0 or last element of array is less or equal to element to be inserted. Then insert the element.
 * Otherwise pop the last element and try to insert in the new reduced arr. 
 * Once element is inserted, push back the popped out element. 
 */


function sort(arr) {
  if (arr.length === 1) return

  const lastElement = arr.pop()
  sort(arr)
  insert(arr, lastElement)
  return arr

}

function insert(arr, element) {
  if (arr.length === 0 || element >= arr[arr.length - 1]) {
    arr.push(element);
    return
  }
  const lastElement = arr.pop()
  insert(arr, element);
  arr.push(lastElement)
}

const arr = [1, 5, 0, 2, 6, 5, -1, -10]
console.log(sort(arr))