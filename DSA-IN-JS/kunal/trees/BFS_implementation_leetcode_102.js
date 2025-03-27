// Time complexity
/*
The time complexity of the BFS implementation is O(n), where n is the number of nodes in the tree.
Each node in the tree is processed exactly once

  For each node, we perform these constant-time operations:
  Extracting from the queue (queue.shift())
  Adding to the result array (currentLevelResult.push())
  Checking and potentially adding children to the queue
*/

// Space complexity
/*
Space complexity:
O(n) for storing the result
The queue will have at most the maximum width of the tree at any point, which in the worst case (a complete binary tree) could be n/2 nodes
*/
function BFS(root) {
  const result = []
  if (root === null) return result;  // Handle empty tree case
  const queue = [root];  // Initialize queue with root node to start BFS traversal

  // BFS processes nodes level by level using a queue data structure
  while (queue.length > 0) {

    const levelSize = queue.length;  // Number of nodes at current level
    const currentLevelResult = [];   // Array to store values at current level

    // Process all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();  // Remove the front node from queue
      currentLevelResult.push(currentNode.val);  // Add its value to current level result

      // Add children to the queue for processing in subsequent levels
      // This ensures we visit nodes in level order (breadth-first)

      // Check and enqueue left child
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      // Check and enqueue right child
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    // After processing all nodes at current level, add the level's results to final output
    result.push(currentLevelResult);
  }

  return result;  // Return 2D array where each subarray represents one tree level
}

// Example usage
const root = { "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }
console.log(BFS(root));  // Output: [[3], [9, 20], [15, 7]]