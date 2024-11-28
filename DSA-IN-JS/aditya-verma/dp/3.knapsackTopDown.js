function main() {
  const weight = [1, 3, 4, 5]
  const value = [11, 4, 5, 7]
  const knapsakcWeight = 7
  const n = weight.length

  // to create matrix, check which parameters keeps changing in knapsack recursive approach
  const matrix = Array(knapsakcWeight + 1).fill(-1).map(() => Array(weight.length + 1).fill(-1))

  // initialize matrix with base condition of recursive approach.
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // now solve iteratively for other matrix rows and cols with the same recursive logic
  // Firstly solve for smaller input, so i and j will start with 0, and grow with each iteration.
  // For 0 we have already results from base case. 
  // We will take the previous result to solve for the greater input

  // change w(knapsack weight in recursive approach) with i(rows representing current knapsack weight).
  // change n(length of weight array in recursive approach) with j(col represents weight array).

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (weight[j - 1] <= i) {
        const res1 = matrix[i][j - 1];
        const res2 = value[j - 1] + matrix[i - weight[j - 1]][j - 1];
        const res = Math.max(res1, res2)
        matrix[i][j] = res
      } else {
        const res = matrix[i][j - 1];
        matrix[i][j] = res;
      }
    }
  }


  console.log(matrix[knapsakcWeight][weight.length])
}


main()