function setMatrixZero(matrix) {
  let x = false;
  let y = false;

  // 1. check if first row is zero
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) x = true;
  }

  // 2. check if first col is zero
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) y = true;
  }

  // 3. check if row length is 1
  if (matrix[0].length === 1)
    if (x === true || y === true) {
      for (let i = 0; i < matrix.length; i++) matrix[i][0] = 0;
      return matrix;
    }

  // 4. traverse inner matrix and for every zero, mark the corresponding element zero in first row and column

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // 5. make every row and column zero according to 0 present in first row and column

  // making col 0
  for (let i = 1; i < matrix[0].length; i++)
    if (matrix[0][i] === 0)
      for (let j = 0; j < matrix.length; j++) matrix[j][i] = 0;

  // making row 0
  for (let i = 1; i < matrix.length; i++)
    if (matrix[i][0] === 0)
      for (let j = 0; j < matrix[0].length; j++) matrix[i][j] = 0;

  // 6. making 1st row 0
  if (x === true) for (let i = 0; i < matrix[0].length; i++) matrix[0][i] = 0;

  // 7. making 1st col 0
  if (y === true) for (let i = 0; i < matrix[0].length; i++) matrix[i][0] = 0;

  return matrix;
}

console.log(
  setMatrixZero([
    [1, 2, 3, 4],
    [5, 0, 7, 8],
    [0, 10, 11, 12],
    [13, 14, 15, 0],
  ])
);
