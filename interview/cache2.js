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
