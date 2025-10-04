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

/**
Iterative
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = null;

    while(curr){
        next = curr.next;
        curr.next = prev
        prev = curr;
        curr = next;
    }

    return prev
    
};
 */

//  RECURSIVE
var reverseList = function (head) {
  if (!head || !head.next) return head;

  let newHead = reverseList(head.next);

  let front = head.next;
  front.next = head
  head.next = null;
  return newHead
}