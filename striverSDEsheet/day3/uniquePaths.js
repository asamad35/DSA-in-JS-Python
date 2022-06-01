// Recursion
/*
 var uniquePaths = function(m, n) {
    
    var uniquePathsHelper = function (i, j) {
  if (i >= m || j >= n) return 0;
  if (i === m - 1 && j === n - 1) {
    i++;
    j++;
    return 1;
  } else return uniquePathsHelper(i + 1, j) + uniquePathsHelper(i, j + 1);
};
    
    return  uniquePathsHelper(0,0,m,n)
};
*/

// DP
/*
function uniquePaths(m, n) {
  let dp = Array(m).fill(0);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(n).fill(0);
  }

  var uniquePathsHelper = function (i, j) {
    if (i >= m || j >= n) return 0;
    if (i === m - 1 && j === n - 1) return 1;
    if (dp[i][j] !== 0) return dp[i][j];
    else
      return (dp[i][j] =
        uniquePathsHelper(i + 1, j) + uniquePathsHelper(i, j + 1));
  };

  return uniquePathsHelper(0, 0);
}
*/

// Best approach
var uniquePaths = function (m, n) {
  let N = m + n - 2;
  let R = m - 1;
  let res = 1;

  for (let i = 1; i <= R; i++) {
    res = (res * (N - R + i)) / i;
  }
  return res;
};

console.log(uniquePaths(2, 3));
