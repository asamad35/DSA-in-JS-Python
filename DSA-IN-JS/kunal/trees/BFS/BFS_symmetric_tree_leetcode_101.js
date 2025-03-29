/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


// each level must be a palindrome in order to be a mirror image. 

var isSymmetric = function (root) {
  function isArrayPalindrome(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      if (arr[start] !== arr[end]) return false
      start++;
      end--;
    }

    return true
  }
  const queue = [root]

  while (queue.length > 0) {
    const currentLevelSize = queue.length
    const currentLevel = [];

    for (let i = 0; i < currentLevelSize; i++) {
      const currentNode = queue.shift();

      if (currentNode)
        currentLevel.push(currentNode.val);
      else
        currentLevel.push(null);

      if (currentNode) {
        queue.push(currentNode.left)
        queue.push(currentNode.right)
      }

    }
    const isPalindrome = isArrayPalindrome(currentLevel)
    // console.log(currentLevel, isPalindrome)
    if (!isPalindrome) return false
  }
  return true
};