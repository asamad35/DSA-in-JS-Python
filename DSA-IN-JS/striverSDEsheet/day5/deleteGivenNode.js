// Only Node value is given, delete that node. Head is not given

// copy next node value to the given node.
// Connect current node with the next to next node. i.e breaking connection to the next node.
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
