Array.prototype.myMap = function (cb) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
};

const arr = [1, 2, 3, 4];
const res = arr.myMap((el) => el * 2);

console.log(res);
