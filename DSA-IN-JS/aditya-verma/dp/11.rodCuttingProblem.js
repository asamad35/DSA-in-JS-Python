function recursive(rodPieces, profit, rodSize, n, matrix) {
  // if present in memoized table

  if (matrix[n][rodSize] !== -1) return matrix[n][rodSize]

  // base case
  if (n === 0 || rodSize === 0) return 0 // as no profit will be available

  if (rodPieces[n - 1] <= rodSize) {
    // pick element
    const res1 = profit[n - 1] + recursive(rodPieces, profit, rodSize - rodPieces[n - 1], n, matrix)
    const res2 = recursive(rodPieces, profit, rodSize, n - 1, matrix)
    const res = Math.max(res1, res2)
    matrix[n][rodSize] = res
    return res
  } else {
    const res = recursive(rodPieces, profit, rodSize, n - 1, matrix)
    matrix[n][rodSize] = res
    return res
  }

}

function main() {
  const rodPieces = [1, 2, 3]
  const n = rodPieces.length
  const profit = [50, 20, 30];
  const rodSize = 6

  const matrix = Array(n + 1).fill(-1).map(() => Array(rodSize + 1).fill(-1))

  // find max profit
  console.log(recursive(rodPieces, profit, rodSize, n, matrix))

}

main()