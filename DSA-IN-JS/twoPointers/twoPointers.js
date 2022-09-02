function countUniqueValues(arr) {
  let f = 0;
  let s = 1;
  while (s < arr.length) {
    if (arr[f] == arr[s]) s++;
    else {
      f++;
      arr[f] = arr[s];
      s++;
    }
  }
  return arr.slice(0, f + 1);
}

console.log(countUniqueValues([2, 2, 3, 3, 45, 45, 45, 45, 45, 77]));
