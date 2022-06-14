function uniquePaths(rows, cols) {
  // storing results for each block of dp, so we can use it later (DYNAMIC PROGRAMMING)
  let dp = Array(rows).fill(0);
  dp = dp.map((dpBlock) => (dpBlock = Array(cols).fill(0)));

  //Current pointer row and column number. Pointer starts form (0,0)
  function findPaths(rowNum, colNum) {
    //if row or column number is out of bound then return 0
    if (rowNum >= rows || colNum >= cols) return 0;

    // if row and col number are at end return 1
    if (rowNum === rows - 1 && colNum === cols - 1) return 1;
    if (dp[rowNum][colNum] !== 0) return dp[rowNum][colNum];
    // else call the function by incrementing row and col number.
    // As function returns the numbher of path available from the current position, hence add them.
    // when findPath function will return value it will be stored in dp and matrix will start filling from end because,
    // lastly called functions will return first. And the first function call will be contain the total path and will be returned.
    else
      return (dp[rowNum][colNum] =
        findPaths(rowNum + 1, colNum) + findPaths(rowNum, colNum + 1));
  }

  return findPaths(0, 0);
}

console.log(uniquePaths(13, 13));
