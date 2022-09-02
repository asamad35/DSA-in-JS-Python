function pow(number, exponent) {
  let ans = 1.0;
  let exponentSign = exponent > 0 ? true : false;

  // making exponent positive
  exponent = exponent < 0 ? -exponent : exponent;

  while (exponent > 0) {
    // if exponent is even then, exponent half , number squared.
    //  as we are dividing exponent by 2, the time complexity will be log(n)
    if (exponent % 2 == 0) {
      number = number * number;
      exponent = exponent / 2;
    }
    //  if exponent is odd, ans * exponent, exponent -- (now exponent will be even)
    else {
      ans = ans * number;
      exponent--;
    }
  }
  return exponentSign ? ans : 1 / ans;
}

console.log(pow(2, 10));
