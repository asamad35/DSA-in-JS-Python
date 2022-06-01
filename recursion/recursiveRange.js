let sum = 0;
function recursiveRange(num) {
  if (num === 1) return 1;
  return recursiveRange(num - 1) + num;
}

console.log(recursiveRange(9));
