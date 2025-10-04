/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function reverse(head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next
  }
  return prev
}

var isPalindrome = function (head) {
  let slow = head, fast = head;

  // Step 1: Find the middle of the list
  // For even-length lists, last stop for 'fast' should be at second last node, so slow is at M1 and not M2.
  // For odd-length lists, 'fast' stops at the last node and 'slow' stops at the exact middle node.
  // Hence, we get this condition fast.next && fast.next.next.

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse after 2nd half
  const secondHalfHead = slow.next;
  let newHead = reverse(secondHalfHead);

  // compare both the linked lists
  while (newHead) {
    if (head.val !== newHead.val) return false
    newHead = newHead.next;
    head = head.next;
  }
  return true

};