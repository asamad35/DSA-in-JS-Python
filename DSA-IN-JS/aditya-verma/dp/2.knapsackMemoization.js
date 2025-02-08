
function knapsackMemoized(wt, val, knapsakcWeight, n, matrix) {

  if (matrix[knapsakcWeight][n] !== -1) return matrix[knapsakcWeight][n]


  if (n === 0 || knapsakcWeight === 0) {
    return 0
  }

  if (wt[n - 1] <= knapsakcWeight) {
    // dont pick wt[n-1]
    const res1 = knapsackMemoized(wt, val, knapsakcWeight, n - 1, matrix);

    // pick wt[n-1]
    const res2 = val[n - 1] + knapsackMemoized(wt, val, knapsakcWeight - wt[n - 1], n - 1, matrix);
    const result = Math.max(res1, res2)
    matrix[knapsakcWeight][n] = result
    return result
  }
  else {
    const result = knapsackMemoized(wt, val, knapsakcWeight, n - 1, matrix);
    matrix[knapsakcWeight][n] = result
    return result
  }
}


function main() {
  const weight = [1, 3, 4, 5]
  const value = [11, 4, 5, 7]
  const knapsakcWeight = 7

  // create matrix for those values which are changing in the recursive function 
  // because recursive function output depends on those changing values.
  // for example in knapsackMemoized function, we are using knapsakcWeight and weight.length.
  // so we need to create a matrix for these two values.

  // NOTE MEMOIZATION DOESNT FILL-UP ALL THE CELLS SINCE IT ONLY CALCULATES THE CELL WHICH IS REQUIRED.
  // IF WE WANT TO FILL-UP ALL THE CELLS THEN USE TABULAR (BOTTOM UP) APPROACH

  // (weight.length + 1) and (knapsackWeight.length +1), +1 is added to include the base case where weight or knapsakcWeight will be 0 as they keep reducing. 
  // For example, if knapsakcWeight = 7, we need indices [0,1,2,3,4,5,6,7]
  // That's 8 positions total (7+1), not 7
  // If weight.length = 4, we need indices [0,1,2,3,4]
  // That's 5 positions total (4+1), not 4

  const matrix = Array(knapsakcWeight + 1).fill(-1).map(() => Array(weight.length + 1).fill(-1))
  console.log(knapsackMemoized(weight, value, knapsakcWeight, weight.length, matrix))
}
main() 