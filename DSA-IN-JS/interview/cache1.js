function product(a, b) {
  for (let i = 0; i < 1000000000; i++) { }
  return a * b;
}

function memoizedFunction(functionToBeMemoized) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    else {
      cache[key] = functionToBeMemoized(...args)
      return cache[key]
    }
  }
}









const memoizedClumsyProduct = memoizedFunction(product);

console.time();
console.log(memoizedClumsyProduct(40, 30));
console.timeEnd();

console.time();
console.log(memoizedClumsyProduct(40, 30));
console.timeEnd();
