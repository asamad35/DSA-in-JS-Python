// function flattenArray(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArr = newArr.concat(flattenArray(arr[i]));
//     } else {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }

console.log(flattenArray([1, [5, [6]], 2, [3, 4]]));

// USING REDUCER
function flattenArray(arr) {
  const newArr = arr.reduce((acc, el, idx) => {
    if (Array.isArray(el)) {
      acc = acc.concat(flattenArray(el));
    } else {
      acc.push(el);
    }
    return acc;
  }, []);

  return newArr;
}
