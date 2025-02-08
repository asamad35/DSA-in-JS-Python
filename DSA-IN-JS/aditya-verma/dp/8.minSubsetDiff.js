/**
 * STRATEGY
 * WE NEED TO MINIMIZE THE DIFFERENCE B/W 2 SUBSETS
 * SUPPOSE [1,2,7] ---> {1,2} {7} SUBSETS WILL HAVE MINIMUM DIFFERENCE I.E 4.
 * WE NEED TO MINIMIZE S2-S1 (SUM OF SUBSET2 -  SUM OF SUBSET1)
 * 
 * NOW CAN WE SAY THAT S2 WILL BE RANGE-S1 ? YES OBVIOUSLY. RANGE MEANS SUM OF ENTIRE ARRAY.
 * SO WE NEED TO MINMIZE RANGE-S1-S1 ---> RANGE-2*S1.
 * 
 * NOW WE CAN CREATE THE TABLE (BOTTOM UP) TO FIND THE IF SUBSET SUM IS POSSIBLE FOR THE ALL NUMBERS IN RANGE.
 * EXAMPLE FOR [1,2,7] ---> RANGE=11
 * SO WE WILL FIND, IS SUBSET POSSIBLE WHEN SUM IS 0,1,2,3,4,5,6,7,8,9,10,11.
 * THIS IS ESSENTIALLY SUBSET SUM PROBLEM.
 * THE RESULT WILL BE PRESENT IN THE LAST ROW. SINCE LAST ROW INDICATES THAT WE ARE TAKING ALL THE ELEMENTS OF ARRAY TO FIND SUM
 * 
 *        Sum →    0  1  2  3  4  5  6  7  8  9  10 11
  LEN     Array↓  
    0     []       T  F  F  F  F  F  F  F  F  F  F  F
    1     [1]      T  T  F  F  F  F  F  F  F  F  F  F
    2     [1,2]    T  T  T  T  F  F  F  F  F  F  F  F
    3     [1,2,7]  T  T  T  T  F  F  F  T  T  T  T  F

 *  TABLE WILL BE LIKE THIS
 *  MATRIX[3,4] MEANS --> IS SUM ===4 POSSIBLE WHEN ARRAY LENGTH IS 3
 *  MATRIX[3,2] MEANS --> IS SUM ===2 POSSIBLE WHEN ARRAY LENGTH IS 3
 *  MATRIX[0,6] MEANS --> IS SUM ===6 POSSIBLE WHEN ARRAY LENGTH IS 0
 * 
 * NOW WE CAN PICKUP LAST ROW AND HALF IT.
 * WHY HALF? BECAUSE RANGE-S2*S1 SHOULD BE POSITIVE, HENCE S1 CANNOT BE MORE THAN HALF
 * NOW CALCULATE MIN DIFFERENCE THAT IS RANGE-2*S1 ONLY FOR TRUTHY VALUES.
 * WHY TRUTHY? BECAUSE IT INDICATES THAT SUBSET EXISTS FOR THIS SUM.
 * 
 * THATS ALL!
 * 
 * NOTE: WE CANNOT USE MEMOIZATION BECAUSE WE DONT CALCULATE FOR EACH CELL. AND BECAUSE OF THIS SOME CELL MIGHT REMAIN EMPTY.
 * 
 * 
 */




function minSubsetDiff(arr, n) {
  const sum = arr.reduce((acc, curr) => curr + acc, 0)
  const matrix = Array(n + 1).fill(-1).map(() => Array(sum + 1).fill(-1))

  // intialize matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (j === 0) matrix[i][j] = true
      if (i === 0 && j !== 0) matrix[i][j] = false
    }
  }

  // calculate table
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (arr[i - 1] <= j) {
        const res1 = matrix[i - 1][j] // dont pick
        const res2 = matrix[i - 1][j - arr[i - 1]] // pick
        matrix[i][j] = res1 || res2
      } else {
        const res1 = matrix[i - 1][j] // dont pick
        matrix[i][j] = res1
      }
    }
  }

  // pick last row, because it means we will have sum on complete array.
  // Because last row means we are finding sum on full array.

  const lastRow = matrix[matrix.length - 1]
  const firstHalfRow = lastRow.slice(0, Math.ceil(lastRow.length / 2)) // because (sum - 2S1) should be positive.
  let minDiffRes = Infinity

  for (let i = 0; i < firstHalfRow.length; i++) { // i indicates the sum.
    if (firstHalfRow[i] === true)
      minDiffRes = Math.min(minDiffRes, sum - 2 * i)
  }

  return minDiffRes

}

const arr = [1, 5, 11, 0]
const n = arr.length
console.log(minSubsetDiff(arr, n))