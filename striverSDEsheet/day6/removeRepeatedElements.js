// - Naive T(N) S(N)

// var removeDuplicates = function (nums) {
//   const set = new Set([...nums]);

//   let k = 0;

//   //   for set there is no index so idx in foreach (2nd argument) is also element.
//   set.forEach((el) => {
//     nums[k] = el;
//     k++;
//   });

//   return k;
// };

// - optimised T(N) S(1)
var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;

  /*
    - create two pointers, one will be at the position to be changed.
    - second will loop through array.
    - when second pointer is equal to first pointer, increment second pointer.
    - when both are diff inc first pointer and then put second pointer value in first pointer.
    ! Dry run for better understanding
    */

  while (j < nums.length) {
    if (nums[i] === nums[j]) j++;
    else {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};
