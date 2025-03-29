// Diameter is the number of edges b/w 2 nodes of a tree.


var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  height(root);
  return diameter;

  function height(node) {
    if (node === null) return 0;

    // Here we go from left ---> right ---> root (Hence post-order traversal)
    const leftSubTreeHeight = height(node.left);
    const rightSubTreeHeight = height(node.right);

    // Calculate diameter for each node/subtree and track max diameter.
    const subTreeDiameter = leftSubTreeHeight + rightSubTreeHeight
    diameter = Math.max(subTreeDiameter, diameter)

    // height is number of max edges in right/left subtree.
    const subTreeHeight = Math.max(leftSubTreeHeight, rightSubTreeHeight) + 1
    return subTreeHeight
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
      right: {
        val: 7,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
};
console.log(diameterOfBinaryTree(root))