function add(a) {
  return a + 5;
}

function sub(a) {
  return a - 5;
}

function mul(a) {
  return a * 5;
}

function div(a) {
  return a / 5;
}

function compose(...args) {
  return function (a) {
    const val = [];
    args.forEach((func) => val.push(func(a)));
    return val;
  };
}

const evaluate = compose(add, sub, mul, div);
console.log(evaluate(10));
