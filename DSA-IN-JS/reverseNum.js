var reverse = function (x) {
  let num = x < 0 ? -x : x;
  let ans = 0;
  let digit = 0;
  while (num > 0) {
    digit = num % 10;
    if (ans === 0 && digit === 0) {
      num = num / 10;
      continue;
    }
    ans = ans * 10 + digit;
    num = Math.floor(num / 10);
  }

  return ans;
};

console.log(reverse(12304123));
