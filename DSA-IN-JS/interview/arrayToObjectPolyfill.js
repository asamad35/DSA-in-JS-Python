const cities = ["delhi", "kolkata", "mumbai", "delhi"];

Array.prototype.arrToObj = function () {
  const obj = {};
  for (let i = 0; i < this.length; i++)
    obj[this[i]] = this[i];

  return obj;
};

console.log(cities.arrToObj());
