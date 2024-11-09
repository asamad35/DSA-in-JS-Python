function fib(n) {
  if (n <= 0) return 0
  if (n === 1) return 1

  return (fib(n - 1) + fib(n - 2))
}

// because fib function includes 0th index
const calcFib = (n) => fib(n - 1)

console.log(calcFib(2))