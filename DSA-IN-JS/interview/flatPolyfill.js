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