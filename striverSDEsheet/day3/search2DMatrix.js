/*
var searchMatrix = function (matrix, target) {
  let i = 0;
  let j = matrix[0].length - 1;

  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) return true;
    else if (matrix[i][j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};
*/

// better approach
var searchMatrix = function (matrix, target) {
  let row = matrix.length;
  let col = matrix[0].length;
  let low = 0;
  let high = row * col - 1;
  let mid;

  while (low <= high) {
    mid = ~~((low + high) / 2);

    if (matrix[~~(mid / col)][~~(mid % col)] === target) {
      return true;
    } else if (matrix[~~(mid / col)][~~(mid % col)] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    30
  )
);
