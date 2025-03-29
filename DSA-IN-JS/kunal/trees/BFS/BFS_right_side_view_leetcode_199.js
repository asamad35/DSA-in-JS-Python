function treeRightSideView(root) {
  const result = [];

  if (!root) return []
  const queue = [root];

  while (queue.length > 0) {
    const currentLevelSize = queue.length;
    for (let i = 0; i < currentLevelSize; i++) {
      const currentNode = queue.shift();
      if (i === currentLevelSize - 1) { // last element in current level
        result.push(currentNode.val)
      }
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
  }
  return result;
}

// Example usage
const root = { "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }
console.log(treeRightSideView(root));  // Output: [[3], [9, 20], [15, 7]]