function totalFruits(arr) {
  let start = 0, end = 0, count = 0, obj = {}, res = 0, len = arr.length;

  while (end < len) {
    const inObj = arr[end] in obj
    if (!inObj) count++
    obj[arr[end]] = (obj[arr[end]] || 0) + 1;

    if (count > 2) {
      while (count > 2) {
        obj[arr[start]]--
        if (obj[arr[start]] === 0) {
          delete obj[arr[start]]
          count--
        }
        start++
      }
    }

    res = Math.max(res, end - start + 1);
    end++
  }
  return res;
}

console.log(totalFruits([1, 2, 3, 3,3,3]))