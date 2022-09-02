// NAIVE APPROACH USING SECONDARY MATRIX

/*var rotate = function (matrixF) {
  let matrixS = JSON.parse(JSON.stringify(matrixF));
  const length = matrixF.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      matrixS[j][length - 1 - i] = matrixF[i][j];
    }
  }
  return matrixS;
};
*/

var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      // swap
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }

  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
