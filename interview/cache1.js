function memoizedFunction(product) {
  let cache = {};
  return function (...args) {
    const argument = JSON.stringify(args);
    if (argument in cache) {
      console.log(cache);

      return cache[argument];
    } else {
      console.log("calc");

      cache[argument] = product(...args);
      return cache[argument];
    }
  };
}

function product(a, b) {
  for (let i = 0; i < 1000000000; i++) {}
  return a * b;
}

const memoizedClumsyProduct = memoizedFunction(product);

console.time();
console.log(memoizedClumsyProduct(40, 30));
console.timeEnd();

console.time();
console.log(memoizedClumsyProduct(40, 30));
console.timeEnd();
