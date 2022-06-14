// Recursion
// function uniquePaths(rows, cols) {
//   //Current pointer row and column number. Pointer starts form (0,0)
//   function findPaths(rowNum, colNum) {
//     //if row or column number is out of bound then return 0
//     if (rowNum >= rows || colNum >= cols) return 0;

//     // if row and col number are at end return 1
//     if (rowNum === rows - 1 && colNum === cols - 1) return 1;
//     /* else call the function by incrementing row and col number.
//      As function returns the number of path available from the current position, hence add them.
//     */ else
//       return findPaths(rowNum + 1, colNum) + findPaths(rowNum, colNum + 1);
//   }

//   return findPaths(0, 0);
// }

///////////////////////////////////////////////////////////////////////////////////////////

// DP
// function uniquePaths(rows, cols) {
//   // storing results for each block of dp(2d matrix), so we can use it later (DYNAMIC PROGRAMMING)
//   let dp = Array(rows).fill(0);
//   dp = dp.map((dpBlock) => (dpBlock = Array(cols).fill(0)));

//   //Current pointer row and column number. Pointer starts form (0,0)
//   function findPaths(rowNum, colNum) {
//     //if row or column number is out of bound then return 0
//     if (rowNum >= rows || colNum >= cols) return 0;

//     // if row and col number are at end return 1
//     if (rowNum === rows - 1 && colNum === cols - 1) return 1;
//     // check in dp matrix if result is already calculated
//     if (dp[rowNum][colNum] !== 0) return dp[rowNum][colNum];
//     /* else call the function by incrementing row and col number.
//      As function returns the number of path available from the current position, hence add them.
//     */
//     /* when findPath function will return value it will be stored in dp and matrix will start filling from end because,
//      lastly called functions will return first. And the first function call will be contain the total path and will be returned.
//     */ else
//       return (dp[rowNum][colNum] =
//         findPaths(rowNum + 1, colNum) + findPaths(rowNum, colNum + 1));
//   }

//   return findPaths(0, 0);
// }

////////////////////////////////////////////////////////////////////////

// Best approach
var uniquePaths = function (rows, cols) {
  // total num of paths we need take to reach the end is alwasy rows+cols-2.
  // rows-1 in right direction and cols-1 in downward direction.
  let N = rows + cols - 2;

  // we need to fill up rows-1 places or cols-1 places in rows+cols-2 choices.
  let R = rows - 1;

  // combination formula
  let res = 1;
  for (let i = 0; i < R; i++) {
    res *= N - i;
    res /= i + 1;
  }
  return res;
};

console.log(uniquePaths(5, 5));
