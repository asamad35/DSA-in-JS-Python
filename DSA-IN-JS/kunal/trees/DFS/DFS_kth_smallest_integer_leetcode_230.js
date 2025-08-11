// Create an sorted array by doing in-order traversal and then pick desired element.
var kthSmallest = function (root, k) {
  const sortedArr = [];

  function inOrderTraversal(node) {
    if (node === null) return null

    if (node.left)
      inOrderTraversal(node.left)

    sortedArr.push(node.val)

    if (node.right)
      inOrderTraversal(node.right)
  }
  inOrderTraversal(root)
  return sortedArr[k - 1]
};

// optimized for s(1)
// Dry run on 5,3,6 BST to get the approach.
var kthSmallest = function (root, k) {
  let count = 0;
  return helper(root).val

  function helper(node) {
    if (node === null) return node;
    const left = helper(node.left);
    if (left) return left
    count++
    if (count === k) {
      return node
    }
    return helper(node.right)
  }
}