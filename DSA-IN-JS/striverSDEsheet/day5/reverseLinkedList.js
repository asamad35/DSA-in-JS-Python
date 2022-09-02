// - Iterative solution O(N) s(1)
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

// - Recursive Solution O(N) S(N)

// - If your more clearity refer to anuj bhaiya dry run (bottom to top)

function recursiveReverse(head) {
  // Base case
  if (head === null || head.next === null) return head;

  let newHead = recursiveReverse(head.next);

  // nextNode ka next points to currentNode
  // currentNode ka next points to null
  head.next.next = head;
  head.next = null;

  return newHead;
}

var reverseList = function (head) {
  let ans = recursiveReverse(head);
  return ans;
};
