function removeDuplicatesSortedArray(arr) {
  let start = 0
  let end = 1

  // dry run to get the apporach
  while (end < arr.length) {
    if (arr[start] !== arr[end]) {
      start++
      arr[start] = arr[end]
    }
    end++
  }
  return arr.slice(0, start + 1)
}



console.log(removeDuplicatesSortedArray([0, 1, 2])) 