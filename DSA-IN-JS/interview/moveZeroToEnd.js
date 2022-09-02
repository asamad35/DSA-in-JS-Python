function moveZeroesToEnd(arr) {
  let [start, end] = [0, arr.length - 1];

  while (start < end) {
    while (arr[end] === 0) end--;

    if (arr[start] === 0) {
      // swap start and end
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      end--;
      while (arr[start] === 0) start++;
    } else start++;
  }
  return arr;
}

console.log(moveZeroesToEnd([1, 0, 0, 5, 0, 4, 3]));
