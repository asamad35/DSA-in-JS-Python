/**
 * Intuition:
 * -----------
 * Goal: Remove the n-th node from the end of the linked list in one pass.
 *
 * The trick: use two pointers — 'fast' and 'slow'.
 *
 * 1. Start both pointers at the head.
 *
 * 2. Move 'fast' n steps ahead.
 *    -----------------------------------------------------
 *    Why this works:
 *    - By moving 'fast' n steps ahead, we create a fixed gap of n nodes between 'fast' and 'slow'.
 *    - After that, when both move together one step at a time:
 *         → When 'fast' reaches the **last node** (so fast.next becomes null),
 *         → 'slow' will be exactly one node before the node that needs to be deleted.
 *    - So we can easily skip (delete) the n-th node from the end using:
 *         slow.next = slow.next.next
 *
 *    Think of it like this:
 *    Example: [1, 2, 3, 4, 5], n = 2
 *      Step 1: Move fast 2 steps → fast at node(3)
 *      Step 2: Move both together until fast reaches the **last node** (node 5)
 *               → slow stops at node(3)
 *      Now 'slow' is right before the node to delete (node 4)
 *      So remove it: slow.next = slow.next.next
 *
 * 3. Then move both pointers together until 'fast' reaches the last node.
 *    At that point, 'slow' will be right before the target node.
 *
 * 4. Edge case:
 *    - If 'fast' becomes null after initial n steps,
 *      that means the list length == n → delete the head node.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head; // fast pointer will move 'n' steps ahead first
  let slow = head; // slow pointer will lag behind and finally point to (n-th node from end - 1)
  let fastStart = n; // counter to move fast pointer n steps ahead

  // Step 1: Move the fast pointer n steps ahead
  // After this loop, 'fast' is n nodes ahead of 'slow'
  while (fastStart) {
    fast = fast.next;
    fastStart--;
  }

  // Step 2: Move both fast and slow together until fast reaches the last node
  // When 'fast' is at the last node (fast.next = null), 'slow' will be right before the node to delete
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Step 3: Handle special case - if 'fast' is null after moving n steps,
  // it means we need to delete the head node itself.
  //
  // Example:
  // List = [1, 2, 3, 4, 5], n = 5
  // After moving 'fast' 5 steps ahead → fast = null (end of list)
  // This means the node to delete is the 1st node itself.
  // So we simply move head to the next node.
  if (!fast) {
    head = head.next; // remove the head
    return head;
  }

  // Step 4: Remove the n-th node from end
  // 'slow.next' is the node to be deleted
  slow.next = slow.next.next;

  // Step 5: Return the modified list
  return head;
};
