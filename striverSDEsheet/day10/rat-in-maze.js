// t(4 power n*n + n (for joining))  s(n*n (matrix) + k * no of possible directions )
function findPath(m, n) {
  const ans = [];
  const visitedMatrix = Array(n)
    .fill(0)
    .map((el) => Array(n).fill(0));

  function solve(row, col, tempArr) {
    //- base case when reach at the end of matirix
    if (row === n - 1 && col === n - 1) {
      ans.push(tempArr.join(""));
      return;
    }

    /* 
     - move in DLRU order only (because we need sorted order)
     - check for boundaries.
     - update visited array
     - update tempArr
     ? recursion call
     - backtrack tempArr
     -backtrack visitedArr
     - 
     */

    //  -  go down
    if (
      row + 1 < n &&
      visitedMatrix[row + 1][col] === 0 &&
      m[row + 1][col] === 1
    ) {
      tempArr.push("D");
      visitedMatrix[row][col] = 1;
      solve(row + 1, col, tempArr);
      tempArr.pop();
      visitedMatrix[row][col] = 0;
    }

    // -  go left
    if (
      col - 1 >= 0 &&
      visitedMatrix[row][col - 1] === 0 &&
      m[row][col - 1] === 1
    ) {
      tempArr.push("L");
      visitedMatrix[row][col] = 1;
      solve(row, col - 1, tempArr);
      tempArr.pop();
      visitedMatrix[row][col] = 0;
    }

    // -  go right
    if (
      col + 1 < n &&
      visitedMatrix[row][col + 1] === 0 &&
      m[row][col + 1] === 1
    ) {
      tempArr.push("R");
      visitedMatrix[row][col] = 1;
      solve(row, col + 1, tempArr);
      tempArr.pop();
      visitedMatrix[row][col] = 0;
    }

    // -  go up
    if (
      row - 1 >= 0 &&
      visitedMatrix[row - 1][col] === 0 &&
      m[row - 1][col] === 1
    ) {
      tempArr.push("U");
      visitedMatrix[row][col] = 1;
      solve(row - 1, col, tempArr);
      tempArr.pop();
      visitedMatrix[row][col] = 0;
    }
  }

  //    - check if we can take starting move (corner case)
  if (m[0][0] === 1) solve(0, 0, []);

  return ans;
}

// - optimising 4 if statement into one for loop
function findPath(m, n) {
  const ans = [];
  const visitedMatrix = Array(n)
    .fill(0)
    .map((el) => Array(n).fill(0));

  // - finding deviation when we move down, left, right, up
  const deviationRow = [1, 0, 0, -1];
  const deviationCol = [0, -1, 1, 0];
  const moves = "DLRU";

  function solve(row, col, tempArr) {
    if (row === n - 1 && col === n - 1) {
      ans.push(tempArr.join(""));
      return;
    }

    // - moving down, left, right, upward
    for (let i = 0; i < moves.length; i++) {
      const nextRow = row + deviationRow[i];
      const nextCol = col + deviationCol[i];

      //   - checking boundaries
      if (
        nextRow < n &&
        nextRow >= 0 &&
        nextCol < n &&
        nextCol >= 0 &&
        visitedMatrix[nextRow][nextCol] === 0 &&
        m[nextRow][nextCol] === 1
      ) {
        tempArr.push(moves[i]);
        visitedMatrix[row][col] = 1;
        solve(nextRow, nextCol, tempArr);
        tempArr.pop();
        visitedMatrix[row][col] = 0;
      }
    }
  }

  if (m[0][0] === 1) solve(0, 0, []);

  return ans;
}
