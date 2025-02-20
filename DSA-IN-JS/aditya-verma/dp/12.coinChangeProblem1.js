function recursive(arr, sum, n, matrix) {
  // check matrix
  if (matrix[n][sum] !== -1) return matrix[n][sum]

  // base case 
  if (sum === 0) return 1
  if (n === 0) return 0

  if (arr[n - 1] <= sum) {
    const res1 = recursive(arr, sum - arr[n - 1], n, matrix)
    const res2 = recursive(arr, sum, n - 1, matrix)
    const res = res1 + res2
    matrix[n][sum] = res
    return res
  } else {
    const res = recursive(arr, sum, n - 1, matrix)
    matrix[n][sum] = res
    return res
  }
}


// Question: Find number of ways in which coins can be added to make a given sum
function main() {
  const arr = [1, 2, 3]
  const sum = 5;
  const matrix = Array(arr.length + 1).fill(-1).map(() => Array(sum + 1).fill(-1))

  console.log(recursive(arr, sum, arr.length, matrix))
}

main()