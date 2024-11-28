
function knapsackMemoized(wt, val, w, n, matrix) {

  if (matrix[w][n] !== -1) return matrix[w][n]


  if (n === 0 || w === 0) {
    return 0
  }

  if (wt[n - 1] <= w) {
    // dont pick w[n-1]
    const res1 = knapsackMemoized(wt, val, w, n - 1, matrix);

    // pick w[n-1]
    const res2 = val[n - 1] + knapsackMemoized(wt, val, w - wt[n - 1], n - 1, matrix);
    const result = Math.max(res1, res2)
    matrix[w][n] = result
    return result
  }
  else {
    const result = knapsackMemoized(wt, val, w, n - 1, matrix);
    matrix[w][n] = result
    return result
  }
}


function main() {
  const weight = [1, 3, 4, 5]
  const value = [11, 4, 5, 7]
  const knapsakcWeight = 7

  // (weight.length + 1) and (knapsackWeight.length +1) +1 is added to include the base case where weight or knapsakcWeight will be 0 as they keep reducing. 
  const matrix = Array(knapsakcWeight + 1).fill(-1).map(() => Array(weight.length + 1).fill(-1))
  console.log(knapsackMemoized(weight, value, knapsakcWeight, weight.length, matrix))
}
main()