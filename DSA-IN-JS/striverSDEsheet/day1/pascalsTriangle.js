var generate = function (numRows) {
  let ans = [];

  for (let i = 0; i < numRows; i++) {
    let arr = Array(i + 1).fill(1);

    // j<i because num of cols = num of rows. and last row to we have filled with 1 isliye less tha  ka sign .
    for (j = 1; j < i; j++) {
      arr[j] = ans[i - 1][j] + ans[i - 1][j - 1];
    }
    ans.push(arr);
  }
  return ans;
};

// console.log(generate(5));
// remember pascals triangle is nCr

// print any pascal row by combination
function printPascalRow(row) {
  row = row - 1;
  let ans = [];
  let res = 1;

  for (let j = 0; j <= row; j++) {
    for (let i = 0; i < row - j; i++) {
      res *= row - i;
      res /= i + 1;
    }
    ans.push(res);
    res = 1;
  }
  console.log(ans);
}

// printPascalRow(3);
