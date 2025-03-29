function bfsLevelAverage(root) {
  const result = [];
  if (root === null) return result;
  const queue = [root];

  while (queue.length > 0) {
    const currentLevelSize = queue.length;
    let currentLevelSum = 0;

    for (let i = 0; i < currentLevelSize; i++) {
      const currentNode = queue.shift();
      currentLevelSum += currentNode.val;

      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
    }

    result.push(currentLevelSum / currentLevelSize)
  }
  return result
}




// Example usage
const root = { "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }
console.log(bfsLevelAverage(root));  