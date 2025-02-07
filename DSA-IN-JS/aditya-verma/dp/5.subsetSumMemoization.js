// same as knapsack memoization

function subsetSumMemoization(arr, sum, n, matrix) {

  if (matrix[n][sum] !== -1) return matrix[n][sum]

  if (sum === 0) return true
  if (n === 0) return false

  if (arr[n - 1] <= sum) {
    const res1 = subsetSumMemoization(arr, sum, n - 1, matrix)
    const res2 = subsetSumMemoization(arr, sum - arr[n - 1], n - 1, matrix)
    const finalRes = res1 || res2
    matrix[n][sum] = finalRes
    return finalRes
  } else {
    const res = subsetSumMemoization(arr, sum, n - 1, matrix)
    matrix[n][sum] = res
    return res
  }

}



function main() {
  const arr = [2, 3, 7, 8, 10]
  const sum = 11
  const len = arr.length

  const matrix = Array(len + 1).fill().map(() => Array(sum + 1).fill(-1))
  const res = subsetSumMemoization(arr, sum, len, matrix)
  console.log(matrix, res)
}

main()