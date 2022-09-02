Array.prototype.myReduce = function (cb, intitialVal = 0) {
  let accumulator = intitialVal;

  // for (let i = 0; i < this.length; i++) {
  //   accumulator = cb(accumulator, this[i]);
  // }
  this.forEach((el) => {
    accumulator = cb(accumulator, el);
  });
  return accumulator;
};

const arr = [1, 2, 3, 4];

const res = arr.myReduce((acc, el) => acc + el, 0);

console.log(res);
