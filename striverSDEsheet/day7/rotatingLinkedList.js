// - Naive approach T(k*N) S(1)
// // ! It will not work on leetCode because of time limit

// var rotateRight = function (head, k) {
//   let pointer = head;
//   let start = head;
//   let prev;

//   if (k === 0) return start;
//   if (!start || !start.next) return start;

//   for (let i = 0; i < k; i++) {
//     // * Rotating linked list
//     while (pointer && pointer.next) {
//       prev = pointer;
//       pointer = pointer.next;
//     }

//     // * Last node points to starting Node
//     pointer.next = start;
//     // * second last node points to null (connection break)
//     prev.next = null;
//     // * updating start as the first node for the further loops
//     start = pointer;
//   }
//   return pointer;
// };

// -optimised

// - Optimised approach T(N + N * (k % length))  S(1)
// ! It will not work on leetCode because of time limit

var rotateRight = function (head, k) {
  let pointer = head;
  let start = head;
  let prev;
  let len = 0;

  if (!start || !start.next) return start;

  while (head) {
    len++;
    head = head.next;
  }

  /*
    + if a list has k nodes then after rotating it k times it will same as inital list.
    + suppose list has 5 nodes. And we have to rotate it 8 times.
    + The  after 5 rotations it will be same. 
    + So we have to do just 3 rotations.  //! i.e (length of list % k) times
    */
  k = k % len;
  if (k === 0) return start;

  for (let i = 0; i < k; i++) {
    // * Rotating linked list
    while (pointer && pointer.next) {
      prev = pointer;
      pointer = pointer.next;
    }

    // * Last node points to starting Node
    pointer.next = start;
    // * second last node points to null (connection break)
    prev.next = null;
    // * updating start as the first node for the further loops
    start = pointer;
  }
  return pointer;
};
