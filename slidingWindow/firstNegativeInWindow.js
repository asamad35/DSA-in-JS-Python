function firstNegativeInWindow(arr, k) {
  console.log(arr);
  let start = 0;
  let end = 0;
  let negativeArr = [];

  while (end < arr.length) {
    if (arr[end] < 0) {
      negativeArr.push(arr[end]);
    }

    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      if (arr[start] < 0) {
        console.log(negativeArr[0] || 0);
        negativeArr.shift();
      } else {
        console.log(negativeArr[0]);
      }

      end++;
      start++;
    }
  }
}

firstNegativeInWindow([12, -1, 2, -2, 3], 2);
