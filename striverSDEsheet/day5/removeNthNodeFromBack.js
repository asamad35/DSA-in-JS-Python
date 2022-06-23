// Naive approach

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
