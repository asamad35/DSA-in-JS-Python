function recursive(arr, sum, n, matrix) {
  // check matrix
  if (matrix[n][sum] !== -1) return matrix[n][sum]

  // base case 
  // When sum is 0 we need 0 coins 
  if (sum === 0) return 0
  // When array is empty we need infinite coins
  if (n === 0) return Infinity

  if (arr[n - 1] <= sum) {

    // Adding "1" to include the current coin
    const res1 = 1 + recursive(arr, sum - arr[n - 1], n, matrix)

    // Not adding "1" because we are not picking the coin
    const res2 = recursive(arr, sum, n - 1, matrix)
    const res = Math.min(res1, res2)
    matrix[n][sum] = res
    return res
  } else {
    const res = recursive(arr, sum, n - 1, matrix)
    matrix[n][sum] = res
    return res
  }
}


// Question: Find minimum number of coins which can be added to make a given sum.

function main() {
  const arr = [638, 414, 105, 0, 325, 315, 209, 24, 68, 409, 611]
  const sum = 845;

  // Filtering 0 from array is imp. Why?
  // When we pick 0, sum will not change and array wont change as well for the next choice because it is an unbounded knapsack.
  // Hence we will do infinite recursion operation and max call-stack size will be exceeded.
  const filteredArr = arr.filter((el) => el !== 0)
  const matrix = Array(filteredArr.length + 1).fill(-1).map(() => Array(sum + 1).fill(-1))

  console.log(recursive(filteredArr, sum, filteredArr.length, matrix))
}

main()