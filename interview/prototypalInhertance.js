// 1) passing obj1 as a prototype to obj2
/*const obj1 = {
  name: "abdus",
};

const obj2 = {
  age: "22",
  __proto__: obj1,
};

console.log(obj2.name);
*/

// 2) accessing function and using 'this'
const obj1 = {
  name: "abdus",
  getName: function () {
    return this.name;
  },
};

const obj2 = {
  age: 22,
  name: "Samad",
  __proto__: obj1,
};

const obj3 = {
  course: "BCA",
  name: "shivam",
  __proto__: obj2,
};
// obj3 inherits obj2, obj2 inherits object1
console.log(obj3.getName());

// 3) adding methods to prototype
// const cities = ["delhi", "kolkata", "mumbai"];
// Array.prototype.arrToObj = function () {
//   const obj = {};
//   for (let i = 0; i < this.length; i++)
//     if (!(this[i] in obj)) obj[this[i]] = this[i];

//   return obj;
// };

// console.log(cities.arrToObj());
