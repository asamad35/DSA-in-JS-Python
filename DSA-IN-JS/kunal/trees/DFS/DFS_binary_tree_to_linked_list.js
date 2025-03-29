var flatten = function (root) {
  // If tree is empty, nothing to do
  if (!root) return;

  // Start from the root node
  let currentNode = root;

  // Process each node in the tree
  while (currentNode) {
    // If current node has a left child, we need to rearrange
    if (currentNode.left) {
      // Find the rightmost node of the left subtree
      // This will be where we attach the current right subtree
      let rightmost = currentNode.left;
      while (rightmost.right) {
        rightmost = rightmost.right;
      }

      // Connect the current right subtree to the rightmost node
      // of the left subtree
      rightmost.right = currentNode.right;

      // Move the entire left subtree to the right side
      currentNode.right = currentNode.left;

      // Set left child to null (requirement for flattened tree)
      currentNode.left = null;
    }

    // Move to the next node in the flattened structure
    currentNode = currentNode.right;
  }

  // Tree is now flattened into a right-skewed linked list
  // with all left pointers set to null
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 5,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
};

// Call the flatten function
flatten(root);

console.log(root)

