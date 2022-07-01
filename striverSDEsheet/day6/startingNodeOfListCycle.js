// T(N) S(N)

var detectCycle = function (head) {
  let set = new Set();

  while (head) {
    if (set.has(head)) return head;
    else {
      set.add(head);
      head = head.next;
    }
  }
  return null;
};
