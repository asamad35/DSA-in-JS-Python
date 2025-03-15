/**
 * Create a function that efficiently finds the square of a number at a given index position from a large dataset (0 to 9,999,999).
 * The function should be optimized to handle repeated queries without recalculating the entire dataset each time.
 * Example:
 * myFind(9)  // Output: 81  (because 9 * 9 = 81)
 * myFind(4)  // Output: 16  (because 4 * 4 = 16)
 * myFind(9)  // Output: 81  (should be faster on repeated queries)
*/


// First approach
/*
function optimizedFind(fn) {
  let arr = {};
  return function (num) {
    if (num in arr) {
      return arr[num];
    } else {
      const result = fn(num);
      arr[num] = result;
      return arr[num];
    }
  };
}

function find(index) {
  let a = [];
  for (let i = 0; i < 10000000; i++) {
    a[i] = i * i;
  }
  return a[index];
}

const myFind = optimizedFind(find);

console.time();
console.log(myFind(9));
console.timeEnd();

console.time();
console.log(myFind(9));
console.timeEnd();
*/

// second approach
function find() {
  let a = [];
  for (let i = 0; i < 10000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    return a[index];
  };
}

const myFind = find();

console.time();
console.log(myFind(9));
console.timeEnd();

console.time();
console.log(myFind(9));
console.timeEnd();
