var addTwoNumbers = function (list1, list2) {
  let carry = 0;
  let prevNode = new ListNode();
  let head = prevNode;

  //  keep adding node untill all three are null (carry 0) dry run on 978, 456
  //  - when dry running focus on the digits being added.
  while (list1 || list2 || carry) {
    let val1 = 0;
    let val2 = 0;

    if (list1) {
      val1 = list1.val;
      list1 = list1.next;
    }

    if (list2) {
      val2 = list2.val;
      list2 = list2.next;
    }

    //   Finding sum of nodes of current interval
    let sum = val1 + val2 + carry;
    let digit = sum % 10;
    carry = Math.floor(sum / 10);

    //  adding node
    let currentNode = new ListNode(digit);
    prevNode.next = currentNode;
    prevNode = currentNode;
  }
  return head.next;
};
