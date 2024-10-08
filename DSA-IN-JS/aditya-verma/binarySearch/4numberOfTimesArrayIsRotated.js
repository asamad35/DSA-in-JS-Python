function numberOfTimesArrayIsRotated(arr, rotationType) {
  /*
  What is clockwise and anticlockwise rotation?
  Suppise we have an array [1,2,3,4,5]
  If we rotate it clockwise 1 time it will be [5,1,2,3,4]
  Visulaize it as a circular array. Which is pushed forward in a cicular rotation.

  If we rotate it anticlockwise 1 time it will be [1,2,3,4,5]
  Visulaize it as a circular array. Which is pulled back in a cicular rotation.

  Observation 1:
      For clockwise: Number of rotations = length of array - position of smallest element.
      For anticlockwise: Number of rotation = position of smallest element.
  Observation 2: Smallest number will be present in the unsorted half of the array.

  To find the smallest element using binary search:
    check if the mid[arr] is smaller than its prev and next element.
    If yes: then that's the smallest element.
    Otherwise: Find the unsorted half by comparing the arr[mid] with its first and last element.
                If arr[mid] < arr[first] then prev half is unsorted. Apply binary search on it.
                And if not: 
                Check if arr[mid] > arr[last] then next half is unsorted. Apply binary search on it.
  */

  let start = 0;
  let end = arr.length - 1

  // edge case when array is sorted
  if (arr[start] < arr[end]) return 0

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const prev = (mid - 1 + arr.length) % arr.length // circular prev 
    const next = (mid + 1) % arr.length // circular next

    if (arr[mid] < arr[prev] && arr[mid] < arr[next]) {
      return rotationType === 'clockwise' ? arr.length - mid : mid
    }
    else if (arr[mid] >= arr[0]) { // this means first half is sorted
      start = mid + 1
    } else if (arr[mid] <= arr[arr.length - 1]) { // this means second half is sorted
      end = mid - 1
    }
  }
}
console.log(numberOfTimesArrayIsRotated([6, 1, 2, 3, 4, 5], 'clockwise'))


