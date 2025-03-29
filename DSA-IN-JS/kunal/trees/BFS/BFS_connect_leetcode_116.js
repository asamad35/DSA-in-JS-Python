/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */

// Return type is important




// USING O(N) and S(N/2) ≈ S(N)
var bfsConnect = function (root) {
  if (root === null) return root
  const queue = [root];

  while (queue.length > 0) {
    const currentLevelSize = queue.length;

    for (let i = 0; i < currentLevelSize; i++) {
      const currentNode = queue.shift(); // queue size will be reduced by 1
      if (i < currentLevelSize - 1) { // currenetLevelSize-1 because last node will be connected to null, so i ranges from 0 ---> 2nd last node.
        currentNode.next = queue[0]
      } else {
        currentNode.next = null
      }

      if (currentNode.left !== null) queue.push(currentNode.left)
      if (currentNode.right !== null) queue.push(currentNode.right)
    }
  }
  return root
};


// Example usage
// const root = { "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }
// console.log(bfsConnect(root));  // Output: [[3], [9, 20], [15, 7]]



// using O(N) and S(1)
function bfsConnectRecusrive(node) {
  if (node === null || node.left === null || node.right === null) return node;

  /**
   * # Intuition
   * It is given what they are asking to do. So i simply did it.
   * 
   * currentNode.left.next = currentNode.right
   * currentNode.right = currentNode.next.left
   * 
   * call saem function for children subtrees
   * 
   */


  node.left.next = node.right;
  if (node.next) node.right.next = node.next.left

  bfsConnectRecusrive(node.left)
  bfsConnectRecusrive(node.right)

  return node
}

const root = { "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }
console.log(bfsConnectRecusrive(root));  // Output: [[3], [9, 20], [15, 7]]
