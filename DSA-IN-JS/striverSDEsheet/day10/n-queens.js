// (STRIVER)
// NAIVE

var solveNQueens = function (n) {
  const ans = [];

  //     Strings are immutable in javascript hence use 2d array and join it at he time of pushing in ans.
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill(".");
  }

  // check if it is a valid position for Queen
  //     1. Check at left
  //     2. Check at upward diagonal
  //     3. Check at downward diagonal

  function checkSafe(row, col, board) {
    let dupCol = col;
    let dupRow = row;

    //         check left
    while (dupCol >= 0) {
      if (board[dupRow][dupCol] === "Q") return false;
      dupCol--;
    }

    dupRow = row;
    dupCol = col;

    // check downward diagonal
    while (dupCol >= 0 && dupRow < n) {
      if (board[dupRow][dupCol] === "Q") return false;
      dupCol--;
      dupRow++;
    }

    dupRow = row;
    dupCol = col;

    // check upward diagonal
    while (dupCol >= 0 && dupRow >= 0) {
      if (board[dupRow][dupCol] === "Q") return false;
      dupCol--;
      dupRow--;
    }

    return true;
  }

  //    base case
  function solve(col, board) {
    if (col === n) {
      ans.push(board.map((el) => el.join("")));
      return;
    } else {
      //             For loop to check Queen placing possibilties at each row.
      for (let row = 0; row < n; row++) {
        if (checkSafe(row, col, board)) {
          //              if it is possible to place queen at the current position then place it and immediately jump to next column.

          //                     place queen
          board[row][col] = "Q";
          //                     jump to next col
          solve(col + 1, board);
          //                     backtrack changes
          board[row][col] = ".";
        }
      }
    }
  }

  solve(0, board);

  return ans;
};

// optimised using <hashing></hashing>

var solveNQueens = function (n) {
  const ans = [];
  const lefthas = new Array(n).fill(0);
  const lowerDiagonalHash = new Array(2 * n - 1).fill(0);
  const upperDiagonalHash = new Array(2 * n - 1).fill(0);

  //     Strings are immutable in javascript hence use 2d array and join it at he time of pushing in ans.
  const board = new Array(n);
  for (let i = 0; i < n; i++) board[i] = new Array(n).fill(".");

  //    base case
  function solve(col, board) {
    if (col === n) {
      ans.push(board.map((el) => el.join("")));
      return;
    } else {
      //             For loop to check Queen placing possibilties at each row.
      for (let row = 0; row < n; row++) {
        //                 checking in hashmaps
        if (
          lefthas[row] === 0 &&
          lowerDiagonalHash[row + col] === 0 &&
          upperDiagonalHash[n - 1 + row - col] === 0
        ) {
          //              if it is possible to place queen at the current position then place it and immediately jump to next column.

          //                     updating hashmaps
          lefthas[row] = 1;
          lowerDiagonalHash[row + col] = 1;
          upperDiagonalHash[n - 1 + row - col] = 1;

          //                     placing queen
          board[row][col] = "Q";
          //                     jump to next col
          solve(col + 1, board);

          //                     backtrack changes
          board[row][col] = ".";
          lefthas[row] = 0;
          lowerDiagonalHash[row + col] = 0;
          upperDiagonalHash[n - 1 + row - col] = 0;
        }
      }
    }
  }

  solve(0, board);

  return ans;
};
