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


class AVL {
  constructor() {
    this.root = null
  }

  insert(value) {
    this.root = this._insert(value, this.root)
  }

  _insert(value, node) {
    if (node === null) {
      return new Node(value)
    }

    if (value <= node.value) {
      node.left = this._insert(value, node.left)
    }

    if (value > node.value) {
      node.right = this._insert(value, node.right)
    }

    node.height = Math.max(this._nodeHeight(node.left), this._nodeHeight(node.right)) + 1

    // when we insert the actual rotation is done only on the last node if required. Becasue at each insertion we are checking for rotations.
    return this.rotate(node); // each recursive call return the node on which recursive function (_insert) was called.
    // Now when we checking if the the return node is balanced, if not balanced rotate if and return.
  }

  rotate(node) {
    if (this._nodeHeight(node.left) - this._nodeHeight(node.right) > 1) {
      // left heavy
      if (this._nodeHeight(node.left.left) - this._nodeHeight(node.left.right) > 0) {
        // left left case
        return this.rightRotate(node)
      }

      if (this._nodeHeight(node.left.left) - this._nodeHeight(node.left.right) < 0) {
        //  left right case
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node)
      }
    }

    if (this._nodeHeight(node.left) - this._nodeHeight(node.right) < -1) {
      // right heavy
      if (this._nodeHeight(node.right.left) - this._nodeHeight(node.right.right) < 0) {
        // right right case
        return this.leftRotate(node)
      }

      if (this._nodeHeight(node.right.right) - this._nodeHeight(node.right.left) < 0) {
        // right left case
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node)
      }
    }
    return node
  }

  rightRotate(p) {
    // see diagram and its very simples
    let c = p.left;
    let t = c.right;

    c.right = p;
    p.left = t

    c.height = Math.max(this._nodeHeight(c.left), this._nodeHeight(c.right)) + 1
    p.height = Math.max(this._nodeHeight(p.left), this._nodeHeight(p.right)) + 1
    return c
  }

  leftRotate(c) {
    // see diagram and its very simples
    let p = c.right;
    let t = p.left;

    p.left = c
    c.right = t;

    c.height = Math.max(this._nodeHeight(c.left), this._nodeHeight(c.right)) + 1
    p.height = Math.max(this._nodeHeight(p.left), this._nodeHeight(p.right)) + 1
    return p
  }

  _nodeHeight(node) {
    if (node === null) return -1

    return node.height
  }

  getTreeHeight() {
    console.log(this._nodeHeight(this.root))
  }

  populateTree(nums) {
    for (let i = 0; i < nums.length; i++) {
      this.insert(nums[i])
    }
  }

  isTreeBalanced(node = this.root) {
    if (node === null) return true
    return (Math.abs(this._nodeHeight(node.left) - this._nodeHeight(node.right)) <= 1 && this.isTreeBalanced(node.left) && this.isTreeBalanced(node.right))
  }
}

const avlTree = new AVL()
avlTree.populateTree(Array.from({ length: 6 }, (_, i) => i + 1))
avlTree.getTreeHeight()
console.log(avlTree.isTreeBalanced())