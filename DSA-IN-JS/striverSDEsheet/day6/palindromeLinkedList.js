// - Naive solution T(2N) S(N)
// * push linked list values in array then check array is palindorme or not

// var isPalindrome = function (head) {
//   const arr = [];

//   if (!head) false;

//   while (head) {
//     arr.push(head.val);
//     head = head.next;
//   }

//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     if (arr[start] !== arr[end]) return false;
//     start++;
//     end--;
//   }
//   return true;
// };

// - Optimal solution T(N/2 + N/2 + N/2) S(1);

// Reverse list fucntion
function reverse(head) {
  let prev = null;
  let curr = head;
  let next = curr.next;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

var isPalindrome = function (head) {
  let [fast, slow, entry] = [head, head, head];

  if (!head) return false;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  /*
   * When fast pointer reaches end slow poiner reaches mid
   * Now reverse the second mid sectioon of list
   * Then compare first mid section and second mid section by values ( because address will be different )
   */
  slow = reverse(slow);

  while (slow) {
    if (slow.val !== entry.val) {
      return false;
    }
    slow = slow.next;
    entry = entry.next;
  }

  return true;
};
