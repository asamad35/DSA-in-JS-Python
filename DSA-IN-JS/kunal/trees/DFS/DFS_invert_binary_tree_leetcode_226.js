// Dry run for intuition
var invertTree = function (root) {
  invert(root)
  return root

  function invert(node) {
    if (node === null) return;

    invert(node.left);
    invert(node.right);

    const temp = node.left;
    node.left = node.right;
    node.right = temp
  }

};
const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
};

console.log(invertTree(root))