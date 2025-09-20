
Array.prototype.customFlat = function (depth = 1) {
  let res = [];
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) res = [...res, ...arr[i].customFlat(depth - 1)]
    else res.push(arr[i])
  }

  return res
}


const arr = [1, 2, [3, 4, [6]]]

// console.log(arr.flat())
console.log(arr.customFlat())