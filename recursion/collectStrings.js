const arr = [];
function collectStrings(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object") collectStrings(obj[key]);
    else arr.push(obj[key]);
  }
}
const obj2 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
collectStrings(obj2);
console.log(arr);

// function collectStrings(obj) {
//   let arr = [];
//   for (const key in obj) {
//     if (typeof obj[key] === "object")
//       arr = arr.concat(collectStrings(obj[key]));
//     else arr.push(obj[key]);
//   }
//   return arr;
// }
// const obj2 = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz"
//           }
//         }
//       }
//     }
//   },
//   stand: "zfoo"
// };

// console.log(collectStrings(obj2));
