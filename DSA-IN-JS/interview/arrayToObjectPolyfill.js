const cities = ["delhi", "kolkata", "mumbai"];

Array.prototype.arrToObj = function () {
  const obj = {};
  for (let i = 0; i < this.length; i++)
    if (!(this[i] in obj)) obj[this[i]] = this[i];

  return obj;
};

console.log(cities.arrToObj());
