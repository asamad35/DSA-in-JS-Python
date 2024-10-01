const matrix =
  [
    [1, 2, 3],
    [4, 5, 6],
    [8, 9, 10]
  ]


/**
 * Matrix is sorted both row and cloumn wise.
 * To find a element start from top right because if we go down element increases, 
 * if we go left element decreases.
 * 
 * But check the bound the pointer should not exceed matrix.
 */


function findInSortedMatrix(arr, searchTerm) {
  let row = 0
  let col = arr[0].length - 1

  while (row >= 0 && row < arr.length && col >= 0 && col < arr[0].length) {
    if (arr[row][col] === searchTerm) return [row, col]

    if (searchTerm < arr[row][col]) col--
    else row++
  }

  return -1
}

console.log(findInSortedMatrix(matrix, 10))