/**
 * variation 7.countSubsetWithGivenSum question
 * 
 * HERE WE NEED TO FIND THE COUNT OF POSSIBLE SUBSETS WITH GIVEN DIFFERENCE
 * EXAMPLE: ARR[1,2,3] , DIFF = 0
 * RESULT: 2 BECAUSE WE HAVE 2 PAIRS {1,2} {3} AND {3} {1,2}
 * 
 * INSTEAD OF FINDING DIFFERENCE B/W S1 AND S2 CAN WE FIND THE VALUE OF S1 FOR WHICH S2-S1 = DIFF?
 * YES WE CAN DO THIS.
 * 
 * s1 + s2 = range
 * s2 - s1 = diff
 * 
 * range - 2*s1 = diff
 * s1 = (range - diff)/2
 * 
 * NOW QUESTTION REDUCES TO FINDING COUNT OF SUBSETS WHERE SUM IS S1. 
 * 
 * 
 *   */


function countSubsetWithGivenSum(arr, n, sum) {
  const matrix = Array(n + 1).fill(-1).map(() => Array(sum + 1).fill(-1))

  // intialization
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (j === 0) matrix[i][j] = 1
      if (i === 0 && j !== 0) matrix[i][j] = 0
    }
  }

  // fill-up matrix
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (arr[i - 1] <= j) {
        const res1 = matrix[i - 1][j] // dont pick
        const res2 = matrix[i - 1][j - arr[i - 1]] // pick
        matrix[i][j] = res1 + res2
      } else {
        const res1 = matrix[i - 1][j] // dont pick
        matrix[i][j] = res1
      }
    }
  }

  const count = matrix[matrix.length - 1][matrix[0].length - 1]

  return count

}



function countSubsetWithGivenDiff() {
  const arr = [1, 1, 2, 3];
  const n = arr.length
  const diff = 1

  /**
   * DESIRED s1
   * s1 + s2 = range
   * s2-s1 = diff
   * 
   * range - 2*s1 = diff
 * s1 = (range - diff)/2
 */
  const range = arr.reduce((acc, curr) => acc + curr, 0)
  const s1 = (range - diff) / 2


  return countSubsetWithGivenSum(arr, n, s1)
}
console.log(countSubsetWithGivenDiff())