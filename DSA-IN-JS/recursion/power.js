function power(base, exp) {
  if (exp <= 1) return base;
  return power(base, exp - 1) * base;
}

console.log(power(2, 4));
