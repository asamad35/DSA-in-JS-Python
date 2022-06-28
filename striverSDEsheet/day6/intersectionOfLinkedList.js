// ? we have to return the node with common address not the value

// NAIVE t(o(n*m))
/*
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
*/

// NAIVE t(o(m+n)) s(m)
/*
var getIntersectionNode = function (headA, headB) {
  // 1. create a set to store address of node of first list
  // 2. loop over the secondNodeList and check if secondListNode exist in set.

  let set = new Set();

  while (headA) {
    set.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (set.has(headB)) return headB;
    headB = headB.next;
  }

  return null;
};
*/

// optimized o((m+x) + (n+x)) , s(1)  m,n are length different nodes and x is length of common node.

// - Gist is to traverse both the listNodes synchronisely.
// - To achieve this make 2 pointers pointing towards head of list1 and list2.

// - Then traverse list1 (m+x) and list2 (n+x) when list1 is null, initalized pointer1 by head of list2.
// - When list2 is null, initialized pointer2 ny head of list1

// - By doing this we will synchronise both the pointers. And then check both the values of pointer.

var getIntersectionNode = function (headA, headB) {
  let list1 = headA;
  let list2 = headB;

  while (list1 || list2) {
    if (list1 === null) list1 = headB;
    if (list2 === null) list2 = headA;

    if (list1 === list2) return list2;
    list1 = list1.next;
    list2 = list2.next;
  }

  return null;
};
