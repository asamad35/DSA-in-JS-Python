function bfsNextSuccessor(root, key) {
  if (root === null) return null;

  const queue = [root];

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode.left !== null) {
      queue.push(currentNode.left)
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right)
    }

    if (currentNode.val === key) {
      break
    }
  }

  return queue[0] ? queue[0].val : null
}



// Example usage
const root = { "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }
console.log(bfsNextSuccessor(root, 7));  