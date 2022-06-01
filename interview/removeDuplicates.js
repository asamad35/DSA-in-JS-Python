let arr = [1, 2, 4, 3, 9, 6, 8, 2, 5, 6, 8];

// function removeDuplicates() {
//   let res = [];
//   arr.forEach((element) => {
//     if (!res.find((el) => el === element)) res.push(element);
//   });
//   return res;
// }
// console.log(removeDuplicates(arr));

let bSet = new Set(arr);
bSet.add({ alphabet: "a" });
console.log(bSet);
