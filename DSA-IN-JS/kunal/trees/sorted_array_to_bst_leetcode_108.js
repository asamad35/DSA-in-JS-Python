// start building bst recursively from middle value

var sortedArrayToBST = function (nums) {
  return populateSorted(nums);

  function populateSorted(nums, start = 0, end = nums.length - 1) {
    if (start > end) return null
    const mid = Math.floor((start + end) / 2)
    const currentNode = { val: nums[mid], left: null, right: null }

    currentNode.left = populateSorted(nums, start, mid - 1)
    currentNode.right = populateSorted(nums, mid + 1, end)

    return currentNode
  }

};

const nums = [-3, 0, 5]
console.log(sortedArrayToBST(nums))