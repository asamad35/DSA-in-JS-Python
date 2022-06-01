var myPow = function (x, n) {
  let ans = 1.0;
  let power = n < 0 ? -n : n;
  while (power > 0) {
    if (power % 2 !== 0) {
      ans = ans * x;
      power--;
    } else {
      x = x * x;
      power = power / 2;
    }
  }
  return n > 0 ? ans : 1 / ans;
};

console.log(myPow(3, 2));
