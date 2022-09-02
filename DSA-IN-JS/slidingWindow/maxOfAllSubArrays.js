function maxOfAllSubArrays(arr, k) {
  let [start, end] = [0, 0];
  let storeVal = [];

  while (end < arr.length) {
    while (storeVal.length > 0 && arr[end] > storeVal[storeVal.length - 1]) {
      storeVal.pop();
    }
    storeVal.push(arr[end]);

    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      console.log(storeVal[0]);

      if (arr[start] === storeVal[0]) {
        storeVal.shift();
      }
      start++;
      end++;
    }
  }
}

maxOfAllSubArrays([1, 3, -1, -3, 5, 3, 6, 7], 3);
