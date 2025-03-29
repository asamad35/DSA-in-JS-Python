var maxDepth = function (root) {
  const height = findHeight(root)
  return height;

  function findHeight(node) {
    if (node == null) return 0;

    const leftSubTreeHeight = findHeight(node.left);
    const rightSubTreeHeight = findHeight(node.right);

    const subTreeHeight = Math.max(leftSubTreeHeight, rightSubTreeHeight) + 1
    return subTreeHeight;
  }
};

const root = {
  val: 1,
  left: {
    val: 2,
    // left: {
    //   val: 4,
    //   left: null,
    //   right: null
    // },
    // right: {
    //   val: 5,
    //   left: null,
    //   right: null
    // }
    right: null,
    left: null
  },
  right: {
    val: 3,
    // left: {
    //   val: 6,
    //   left: null,
    //   right: null
    // },
    // right: {
    //   val: 7,
    //   left: null,
    //   right: null
    // }
    right: null,
    left: null
  }
};

console.log(maxDepth(root))