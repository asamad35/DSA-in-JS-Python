// T(N) S(N)

// var detectCycle = function (head) {
//   let set = new Set();

//   while (head) {
//     if (set.has(head)) return head;
//     else {
//       set.add(head);
//       head = head.next;
//     }
//   }
//   return null;
// };

// Optimal T(N) S(1)
var detectCycle = function (head) {
  let fast = head;
  let slow = head;
  let entry = head;

  // - Break loop when collison happens
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }

  // - Check if cycle exist
  if (!fast || !fast.next) return null;

  // - This logic comes from calculation check fraz and striver video
  /* 
  + We know that slow pointer covers half of the distance covered by fast pointers.
  
  + suppose fast pointers takes x1 loops to collide with slow pointers.
  ! total distance covers by fast pointer = l1 + x1 * loops + l2
  + l1 is distance covered till the start of loop
  + l2 is distance covered in the loop ( start of loop till collision of slow and fast pointers)

  + let slow pointers takes x2 loops to collide.
  ! total distance covered by slow pointer is = l1 + x2 * loops + l2
  
  * 2(l1 + x2 * loops + l2) = l1 + x1 * loops + l2
  * l1 = loop - l2
  * so just create a new entry pointer that points to start of list
  * and traverse slow and entry pointers till they collide because both pointer will collide at loop starting point as they will cover l1 distance.
  */
  while (slow != entry) {
    slow = slow.next;
    entry = entry.next;
  }

  return entry;
};
