var solveSudoku = function (board) {
  //     loop over each row
  for (let i = 0; i < board.length; i++) {
    //     loop over each col
    for (let j = 0; j < board[0].length; j++) {
      //            check if block is empty
      if (board[i][j] === ".") {
        //                 if yes fill it by finding a valid number
        for (let k = 1; k <= 9; k++) {
          const num = k.toString();
          //                     check for valid num
          if (isNumValid(i, j, num, board)) {
            //                      update sudoku

            board[i][j] = num;

            //                         now check if the updated sudoku is valid ? by checking this sudoku using recursion.
            //                         if yes return true
            //                         if no, backtrack changes and try filling it with a different number.

            if (solveSudoku(board) === true) {
              return true;
            } else {
              //                             backtrack
              board[i][j] = ".";
            }
          }
        }
        //                 if no valid num is found return false
        return false;
      }
    }
  }
  //     Sudoku is completely filled hence return true
  return true;
};

//Helper function
function isNumValid(row, col, num, board) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;

    if (board[i][col] === num) return false;

    const currentMatrixRow = Math.floor(row / 3);
    const currentMatrixCol = Math.floor(col / 3);

    const currentRow = 3 * currentMatrixRow + Math.floor(i / 3);
    const currentCol = 3 * currentMatrixCol + (i % 3);

    if (board[currentRow][currentCol] === num) return false;
  }
  return true;
}
