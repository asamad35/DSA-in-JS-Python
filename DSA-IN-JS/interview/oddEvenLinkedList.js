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
var oddEvenList = function (head) {
    // Edge case: if list has 0 or 1 node, return as is
    if (!head || !head.next) return head;

    // Initialize pointers:
    // oddHead → first node (1st, 3rd, 5th ...)
    // evenHead → second node (2nd, 4th, 6th ...)
    let oddHead = head;
    let evenHead = oddHead.next;

    // Keep a reference to the first even node
    // so that after rearranging, we can attach all evens after the last odd
    const evenStart = head.next;

    /**
     * The while condition: (evenHead && evenHead.next)
     * ------------------------------------------------
     * We only check the 'even' pointers here because:
     * - Odd and even pointers move together.
     * - If 'evenHead' becomes null → we've reached the end (no more nodes left).
     * - If 'evenHead.next' becomes null → the next odd node doesn't exist (end of list).
     *
     * So checking (evenHead && evenHead.next) ensures both odd and even lists
     * still have nodes to process without causing a null-pointer error.
     */
    while (evenHead && evenHead.next) {
        // Connect current odd node to the next odd node (skip the even one)
        oddHead.next = oddHead.next.next;
        oddHead = oddHead.next; // move odd pointer forward

        // Connect current even node to the next even node (skip the odd one)
        evenHead.next = evenHead.next.next;
        evenHead = evenHead.next; // move even pointer forward
    }

    // After separating, attach the even list at the end of the odd list
    oddHead.next = evenStart;

    // Return the modified head (odd nodes first, then even nodes)
    return head;
};
