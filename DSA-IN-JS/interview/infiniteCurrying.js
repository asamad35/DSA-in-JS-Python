function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

// for 3
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function () {
//         return a + b + c;
//       };
//     };
//   };
// }

console.log(sum(1)(2)(6)());
