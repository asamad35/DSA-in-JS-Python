function customFlat(arr) {
  let flattenedArr = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const res = customFlat(arr[i])
      flattenedArr = flattenedArr.concat(res)
    } else {
      flattenedArr.push(arr[i])
    }
  }
  return flattenedArr
}

console.log(customFlat([1, 2, [3, 4, [5, 6, [7, 0, 9, 8]]]]))


// flatPolyfill with depth
Array.prototype.myFlat = function (depth) {
  let res = []
  for (let i = 0; i < this.length; i++) {
    if (depth > 0 && Array.isArray(this[i])) {
      depth--
      res = [...res, ...this[i].myFlat(depth)]
    } else {
      res.push(this[i])
    }
  }
  return res
}

const flattenedArr = [1, 2, [3, [4]]].myFlat(1)
console.log(flattenedArr)