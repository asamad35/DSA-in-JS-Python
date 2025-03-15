class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0
  }

  getValue() {
    return this.value
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    this.root = this._insert(value, this.root)
  }

  _insert(value, node) {
    if (node === null) return new Node(value)

    if (value <= node.value) {
      node.left = this._insert(value, node.left)
    }

    if (value > node.value) {
      node.right = this._insert(value, node.right)
    }

    node.height = Math.max(this._getNodeHeight(node.left), this._getNodeHeight(node.right)) + 1
    return node;
  }

  _getNodeHeight(node) {
    if (node === null) return -1;
    return node.height
  }

  getTreeHeight() {
    console.log("Height of tree is ", this._getNodeHeight(this.root))
  }

  preOrderTraversal() { // Order is node value ---> left node ---> right node
    this._display("Root Node:", this.root);
  }

  _preOrderTraversal(details, node) {
    if (node === null) return;
    console.log(details, node.value);
    this._preOrderTraversal(`Left child of ${node.value} is`, node.left)
    this._preOrderTraversal(`Right child of ${node.value} is`, node.right)
  }

  inOrderTraversal() { // Order is left node ---> node value  ---> right node
    this._inOrderTraversal("Root Node:", this.root)
  }

  _inOrderTraversal(details, node) {
    if (node === null) return;
    this._inOrderTraversal(`Left child of ${node.value} is`, node.left)
    console.log(details, node.value)
    this._inOrderTraversal(`Right child of ${node.value} is`, node.right)

  }

  postOrderTraversal() { // Order is left node ---> right node ---> node value  
    this._postOrderTraversal("Root Node:", this.root)
  }

  _postOrderTraversal(details, node) {
    if (node === null) return;
    this._postOrderTraversal(`Left child of ${node.value} is`, node.left)
    this._postOrderTraversal(`Right child of ${node.value} is`, node.right)
    console.log(details, node.value)

  }


  populateTree(nums) {
    for (let i = 0; i < nums.length; i++) {
      this.insert(nums[i])
    }
  }

  populateSorted(nums, start = 0, end = nums.length - 1) {
    if (start > end) return
    const mid = Math.floor((start + end) / 2)
    this.insert(nums[mid]);
    this.populateSorted(nums, start, mid - 1)
    this.populateSorted(nums, mid + 1, end)
  }

}

const bst = new BST();
bst.populateTree([10, 5, 7, 11, 3, 2, 6])
// bst.populateSorted([1, 2, 3, 4, 5, 6])
bst.getTreeHeight()
bst.inOrderTraversal();
// bst.postOrderTraversal();