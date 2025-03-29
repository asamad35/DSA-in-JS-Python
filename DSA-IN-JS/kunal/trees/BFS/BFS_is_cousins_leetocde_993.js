function isCousins(root, x, y) {
  const xNode = findNode(root, x);
  const yNode = findNode(root, y);
  const xLevel = findLevel(root, xNode, 0);
  const yLevel = findLevel(root, yNode, 0)
  const sibling = isSibling(root, xNode, yNode)

  return (xLevel === yLevel && !sibling)

  function findNode(node, target) {
    if (node === null) return null;
    if (node.val === target) return node;

    const leftSide = findNode(node.left, target);
    if (leftSide) return leftSide
    const rightSide = findNode(node.right, target);
    if (rightSide) return rightSide

    return null
  }

  function findLevel(node, targetNode, depth) {
    if (node === null) {
      return -1
    }

    if (node === targetNode) return depth
    const leftSubtreeResult = findLevel(node.left, targetNode, depth + 1)
    if (leftSubtreeResult !== -1) return leftSubtreeResult

    const rightSubtreeResult = findLevel(node.right, targetNode, depth + 1)
    if (rightSubtreeResult !== -1) return rightSubtreeResult

    return -1

  }

  function isSibling(node, xNode, yNode) {
    if (!node) return false;

    const res = (node.left === xNode && node.right === yNode) ||
      (node.left === yNode && node.right === xNode)

    return res || isSibling(node.left, xNode, yNode) || isSibling(node.right, xNode, yNode)
  }
}

// Example usage
const root = { "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }
console.log(isCousins(root, 15, 7));  