function sortColors(arr) {
  let [start, mid, end] = [0, 0, arr.length - 1];
  let temp = 0;
  while (mid <= end) {
    if (arr[mid] === 0) {
      temp = arr[start];
      arr[start] = arr[mid];
      arr[mid] = temp;
      mid++;
      start++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      temp = arr[mid];
      arr[mid] = arr[end];
      arr[end] = temp;
      end--;
    }
  }
  return arr;
}

console.log(sortColors([1, 0, 0, 0, 1, 2, 2, 0]));
