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

function moveZeroesToEndInOrder(arr) {
  let start = 0
  let end = 0

  while (end < arr.length) {
    // position start to the first zero element
    while (arr[start] !== 0) start++

    end = start

    // postion end to the first non-zero element from the start postion.
    while (arr[end] === 0) end++

    // swap start and end elements
    if (arr[start] === 0 && arr[end] !== 0 && end < arr.length) {
      const temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp;
      start++
      end++
    }
  }

  return arr

}


// console.log(moveZeroesToEnd([1, 0, 0, 5, 0, 4, 3]));
console.log(moveZeroesToEndInOrder([0, 0,1, 3, 0, 0, 111, 2, 0, 5]));
