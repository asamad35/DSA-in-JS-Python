var isValidBST = function (root, min = -Infinity, max = Infinity) {
  // Base case: Empty trees are valid BSTs
  if (!root) return true

  // Check if current node's value violates BST property:
  // - Must be greater than min bound (all values from left ancestors)
  // - Must be less than max bound (all values from right ancestors)
  if (root.val <= min || root.val >= max) return false

  // Recursively validate:
  // - Left subtree: all nodes must be less than current node's value (new max)
  // - Right subtree: all nodes must be greater than current node's value (new min)
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};

const root = { val: 2, right: { val: 2, right: null, left: null }, left: { val: 2, left: null, right: null } }
// This test case creates a tree with duplicate values:
//     2
//    / \
//   2   2
// This is not a valid BST because nodes in BST must have unique values
// (no duplicates allowed in standard BST definition)
console.log(isValidBST(root))