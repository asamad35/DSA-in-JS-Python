// - Naive approach

/*
var removeNthFromEnd = function (head, n) {
  // if list is empty
  if (!head.next) return null;

  let count = 0;
  let tempHead = head;

  // calc length of list
  while (tempHead) {
    count++;
    tempHead = tempHead.next;
  }
  tempHead = head;

  // Handle edge when first node is to be removed
  if (n === count) return head.next;

  // traverse till (n-1)th node
  while (count - n - 1 > 0) {
    tempHead = tempHead.next;
    count--;
  }
  tempHead.next = tempHead.next.next;
  return head;
};
*/

// - optimal
var removeNthFromEnd = function (head, n) {
  // ! Gist is we have to move slow pointer to (lengthOfList - n) times.
  //  For this we will first move fastPointers n times. It will cover the n length and //- (lengthOfList - total) will be pending.
  // So we will simply move fastPointer and slowPointer till fast pointer reaches end. That is we will move (lengthOfList - total) times.

  // if empty return null
  if (!head.next) return null;

  let fastPointer = new ListNode(0);
  let slowPointer = new ListNode(0);

  fastPointer.next = head;
  slowPointer.next = head;
  fastPointer;
  while (n) {
    fastPointer = fastPointer.next;
    n--;
  }

  // Handling edge case (if node to be removed is the first node)
  if (!fastPointer.next) return head.next;

  while (fastPointer.next) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }
  // deleting node
  slowPointer.next = slowPointer.next.next;

  return head;
};
