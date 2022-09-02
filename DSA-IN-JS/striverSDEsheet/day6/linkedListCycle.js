// hashing
var hasCycle = function (head) {
  const set = new Set();

  while (head) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }

  return false;
};

// two pointer approach ( optimized 0(N) s(1) )
// pointers will collide when cycle exist.
var hasCycle = function (head) {
  const slowPointer = head;
  const fastPointer = head;

  while (fastPointer) {
    if (fastPointer === slowPointer) return true;
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  return false;
};
