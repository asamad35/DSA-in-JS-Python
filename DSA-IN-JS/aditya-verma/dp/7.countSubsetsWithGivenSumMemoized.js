/**
 * same as subsetSum, only difference instead of returning true or false we need return count.
 */


function countSubsetWithGivenSumMemoized(arr, n, sum, matrix) {

  if (matrix[n][sum] !== -1) return matrix[n][sum]

  // base case

  if (sum === 0) return 1
  if (n === 0) return 0

  if (arr[n - 1] <= sum) {
    const res1 = countSubsetWithGivenSumMemoized(arr, n - 1, sum - arr[n - 1], matrix)
    const res2 = countSubsetWithGivenSumMemoized(arr, n - 1, sum, matrix)
    const finalRes = res1 + res2
    matrix[n][sum] = finalRes
    return finalRes
  } else {
    const res = countSubsetWithGivenSumMemoized(arr, n - 1, sum, matrix)
    matrix[n][sum] = res
    return res
  }
}


function main() {
  const arr = [2, 3, 5, 6, 8, 10]
  const sum = 10
  const n = arr.length

  const matrix = Array(n + 1).fill().map(() => Array(sum + 1).fill(-1))

  console.log(countSubsetWithGivenSumMemoized(arr, n, sum, matrix))
}

main()