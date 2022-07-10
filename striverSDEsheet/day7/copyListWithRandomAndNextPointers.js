var copyRandomList = function (head) {
  // - Create a map to store key value pair with refrence.
  let map = new Map([[null, null]]);
  //
  let start = head;
  // - In first iteration create new node with given node value and set it to map
  while (start) {
    const newNode = new ListNode(start.val);
    map.set(start, newNode);
    start = start.next;
  }
  start = head;

  // - In second iteration make connections in the copied NodeList
  while (start) {
    const mappedNode = map.get(start);
    mappedNode.next = map.get(start.next);
    mappedNode.random = map.get(start.random);
    start = start.next;
  }
  return map.get(head);
};
