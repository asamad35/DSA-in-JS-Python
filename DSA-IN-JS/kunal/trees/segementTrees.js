class treeNode {
  constructor(startInterval, endInterval) {
    this.left = null;
    this.right = null;
    this.data = 0;
    this.startInterval = startInterval;
    this.endInterval = endInterval;
  }
}


class SegementTree {
  constructor(arr) {
    this.root = null;
    this.constructTree(arr)
  }

  constructTree(arr) {
    this.root = this._constructTree(arr, 0, arr.length - 1)
  }


  _constructTree(arr, start, end) {
    // base condition (leaf node)
    if (start === end) {
      const leaf = new treeNode(start, end);
      leaf.data = arr[start];
      return leaf
    }

    // create new node with start and end index you are currently at
    const node = new treeNode(start, end);
    const mid = Math.floor((start + end) / 2);
    // create left and right subtrees recursively.
    node.left = this._constructTree(arr, start, mid);
    node.right = this._constructTree(arr, mid + 1, end);

    node.data = node.left.data + node.right.data;
    return node;
  }

  display() {
    this._display(this.root);
  }

  _display(node) {
    if (node.left === null && node.right === null) return;

    const leftData = `Interval=[${node.left.startInterval},${node.left.endInterval}] with data ${node.left.data} `
    const currentData = `Interval=[${node.startInterval},${node.endInterval}] with data ${node.data} `
    const rightData = `Interval=[${node.right.startInterval},${node.right.endInterval}] with data ${node.right.data} `
    console.log(`${leftData} ==> ${currentData} ==> ${rightData}`)

    this._display(node.left)
    this._display(node.right)
  }

  query(qsi, qei) {
    return this._query(this.root, qsi, qei)
  }

  _query(node, qsi, qei) { // queryStartIndex, queryEndIndex
    // if queryIndex is valid (inside root index)
    if (node.startInterval >= qsi && node.endInterval <= qei) {
      return node.data
    }
    // completely outside
    else if (node.startInterval > qei || node.endInterval < qsi) {
      return 0
    }
    // overlapping, hence find recursively
    else {
      return this._query(node.left, qsi, qei) + this._query(node.right, qsi, qei)
    }
  }

  update(index, value) {
    this.root.data = this._update(this.root, index, value)
  }

  _update(node, index, value) {
    // Return node.data without change if index doesnt lie in node interval
    if (index < node.startInterval || index > node.endInterval) return node.data;

    // if start and end interval is same, hence it is a leaf node, so update the node.data and return
    if (index === node.startInterval && index === node.endInterval) {
      node.data = value;
      return node.data
    }

    // If not leaf node, find recursively, update value and reutrn updated node.data
    else {
      const leftValue = this._update(node.left, index, value)
      const rightValue = this._update(node.right, index, value);

      // value of node.data is sum of value of its children.
      node.data = leftValue + rightValue;
      return node.data;
    }
  }
}


const segementTree = new SegementTree([3, 8, 6, 7, -2, -8, 4, 9])
// console.log(segementTree.query(0, 2))
segementTree.update(0, 10)
segementTree.display()