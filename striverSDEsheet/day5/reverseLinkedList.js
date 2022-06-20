/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
  // if head is empty return head
  if (!head) return head;

  //   Create three pointers
  let prevNode = null;
  let currentNode = head;
  let nextNode;

  //   current will be null at last when all the connection are reversed
  while (currentNode) {
    //   initialise next node
    nextNode = currentNode.next;
    // reverse connection
    currentNode.next = prevNode;

    // change previous node and currentNode for next iteration
    prevNode = currentNode;
    currentNode = nextNode;
  }

  //   at last previous is last element as currentNode will be undefined
  return prevNode;
};
