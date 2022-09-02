// arr contains number 1 to 5 including 0. find the missing number.

function missingNumber(arr) {
  let n = arr.length;
  let sumFormula = (n * (n + 1)) / 2;

  let sum = arr.reduce((acc, curr) => acc + curr, 0);

  return sumFormula - sum;
}

console.log(missingNumber([0, 1, 2, 5, 4]));
