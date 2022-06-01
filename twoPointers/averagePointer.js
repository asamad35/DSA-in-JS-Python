function averagePointer(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  if (!arr.length) return false;

  while (j > i) {
    if ((arr[i] + arr[j]) / 2 === target) return true;
    else if ((arr[i] + arr[j]) / 2 > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

console.log(averagePointer([1, 2, 4], 4.1));
