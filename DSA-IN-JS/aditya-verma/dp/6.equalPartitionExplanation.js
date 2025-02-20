/**
 * We will sum up the array.
 * If array sum is odd, it means we cant find 2 subsets with same sum.
 * Example: [1,2,4] 
 * 
 * If even, then we can find subset whose sum is equal to totalSumOfArray/2 (Just like previous question).
 * And Logically remaining subarray will have equal sum as well.
 */
function main() {
  const arr = [1, 5, 11, 5]

  const sum = arr.reduce((acc, curr) => acc + curr, 0)
  const isEqualPartitionPossible = sum % 2 === 0

  if (!isEqualPartitionPossible) return false

  const target = sum / 2
  const n = arr.length
  const matrix = Array(n + 1).fill(-1).map(() => Array(target + 1).fill(-1))

  function recursive(arr, target, n, matrix) {
    if (matrix[n][target] !== -1) return matrix[n][target]
    // base case
    if (target === 0) return true
    if (target !== 0 && n === 0) return false

    if (target >= arr[n - 1]) {
      const res1 = recursive(arr, target - arr[n - 1], n - 1, matrix)
      const res2 = recursive(arr, target, n - 1, matrix)
      const res = res1 || res2
      matrix[n][target] = res
      return res
    } else {
      const res = recursive(arr, target, n - 1, matrix)
      matrix[n][target] = res
      return res
    }

  }

  console.log(recursive(arr, target, n, matrix))
}
main()