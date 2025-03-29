
function bfsZigZag(root) {
  const result = []

  // Flag to determine traversal direction for current level
  let reverseFlag = false
  if (root === null) return result;
  const queue = [root];

  while (queue.length > 0) {

    const levelSize = queue.length;
    const currentLevelResult = [];

    for (let i = 0; i < levelSize; i++) {

      if (reverseFlag) {
        // For reverse order (right-to-left): pop from end of queue
        const currentNode = queue.pop()
        currentLevelResult.push(currentNode.val);

        // And add children to FRONT of the queue using unshift
        // IMPORTANT: When in reverse mode, we add children in reverse order (right then left)
        if (currentNode.right !== null) {
          queue.unshift(currentNode.right);
        }

        if (currentNode.left !== null) {
          queue.unshift(currentNode.left);
        }
      }
      else {
        // For normal order (left-to-right): remove from front of queue
        const currentNode = queue.shift();
        currentLevelResult.push(currentNode.val);

        // Add children in normal order (left then right)
        // And add them to the BACK of the queue using push
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }

        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
    }
    reverseFlag = !reverseFlag

    result.push(currentLevelResult);
  }
  return result;
}

const root = { "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }
console.log(bfsZigZag(root)); 