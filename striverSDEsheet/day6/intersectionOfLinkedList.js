// we have to return the node with common address not the value
var getIntersectionNode = function (headA, headB) {
  const list2 = headB;
  while (headA) {
    while (headB) {
      // comparing common address (not value)
      if (headB === headA) return headB;
      headB = headB.next;
    }
    headB = list2;
    headA = headA.next;
  }
  return null;
};
