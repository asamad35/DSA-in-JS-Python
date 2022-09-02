Array.prototype.myFilter = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) newArr.push(this[i]);
  }
  return newArr;
};

const arr = [1, 2, 4, 5];

const rel = arr.myFilter((el) => el > 1);

console.log(rel);
