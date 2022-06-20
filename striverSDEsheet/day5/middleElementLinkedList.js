// - Naive appraoch
/*
var middleNode = function (head) {
  if (!head) return head;

  //   Length should atleast bne 1 if the linked list is not empty
  let length = 1;
  let currentNode = head;
  let midIndex;

  //   traversing through the linked list to calculate length
  while (currentNode.next) {
    currentNode = currentNode.next;
    length++;
  }

  //   calculating middle index accroding to length
  if (length % 2 === 0) midIndex = length / 2;

  if (length % 2 !== 0) midIndex = Math.floor(length / 2);

  //   traversing till middleIndex and returning that node
  currentNode = head;
  while (midIndex) {
    currentNode = currentNode.next;
    midIndex--;
  }

  return currentNode;
};
*/

// - Optimal Approach (Slow and Fast pointer)
var middleNode = function (head) {
  if (!head) return head;

  // Create 2 pointers fast and slow.
  // Fast will move two steps.
  // Slow will move one step.
  let slowPointer = head;
  let fastPointer = head;

  //    When fast will reach the end, slow will reach middle.
  //    stop when fast pointer is null in case of even length
  //    or when fast is not null but fast.next is null in case of odd length.

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer;
};
