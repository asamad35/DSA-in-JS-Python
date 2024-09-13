function moveZeroesToEnd(arr) {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    while (arr[end] === 0) end--

    if (arr[start] === 0) {
      const temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp;

      while (arr[start] === 0) start++
      end--;
    }
    else
      start++
  }
  return arr
}

console.log(moveZeroesToEnd([1, 0, 0, 5, 0, 0, 10, 0, 0, 4, 3]), 's');