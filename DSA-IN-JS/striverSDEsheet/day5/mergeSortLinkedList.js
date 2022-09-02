// - Naive aprpoach t(n) s(n)

var mergeTwoLists = function (list1, list2) {
  // edge Case
  if (!list2) return list1;
  if (!list1) return list2;

  let list3 = new ListNode(0);
  let head = list3;

  //   loop untill both are non null
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      const newNode = new ListNode(list1.val);
      list3.next = newNode;
      //   initialise list 3 as its last node for further insertions.
      list3 = newNode;
      list1 = list1.next;
    } else {
      const newNode = new ListNode(list2.val);
      list3.next = newNode;
      //   initialise list 3 as its last node for further insertions.
      list3 = newNode;
      list2 = list2.next;
      console.log(head);
    }

    // if list1 is null then insert the remaining list2 as its already in ascending order
    if (!list1) list3.next = list2;
    // if list2 is null then insert the remaining list1 as its already in ascending order
    if (!list2) list3.next = list1;
  }

  return head.next;
};
