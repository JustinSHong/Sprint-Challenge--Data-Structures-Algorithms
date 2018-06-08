class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // pre-order traversal - start at node and explore each branch before backtracking
  depthFirstForEach(cb) {
    if (this.value === null) {
      // tree is empty
      return null;
    } else {
      const result = new Array(); // store nodes here
      function traversePreOrder(node) {
        // console.log("node: ", node);
        // add root node to the array first
        cb(node.value);
        // traverse along left branch first
        node.left && traversePreOrder(node.left);
        // traverse along right branch first
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this); // traverse at the root
      // console.log("result: ", result);
      return result;
    }
    
  }
  // level order traversal - start at node and explore neighboring nodes at the same level
  breadthFirstForEach(cb) {
    

  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;