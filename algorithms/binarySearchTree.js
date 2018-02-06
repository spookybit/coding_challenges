// function Node(val) {
//   this.value = val;
//   this.right = null;
//   this.left = null;
// }

function Node(val) {
  this.value = val;
  this.right = null;
  this.left = null;
}

function BST(val) {
  this.root = new Node(val)
}

BST.prototype.add = function(val) {
  if (!this.root) {
    this.root = new Node(val);
    return this.root;
  }

  let current = this.root;

  while(current) {

    if (val < current.value) {
      if (!current.left) {
        current.left = new Node(val)
        break;
      } else {
        current = current.left;
      }
    } else if (val > current.value) {
      if (!current.right) {
        current.right = new Node(val);
        break;
      } else {
        current = current.right;
      }
    }
  }
}

BST.prototype.contains = function(val) {
  let current = this.root;

  while (current) {
    if (current.value === val) {
      return true;
    } else if (current.value > val) {
      if (!current.left) {
        return false;
      } else {
        current = current.left;
      }
    } else if (current.value < val) {
      if (!current.right) {
        return false;
      } else {
        current = current.right;
      }
    }
  }
}

function dfs(node) {
  let current;
  let direction; //initial direction only

  if (node.left) {
    current = node.left;
    direction = 'left';
  } else if (node.right) {
    current = node.right;
    direction = 'right';
  } else {
    return null;
  }

  while (current) {
    if (direction === 'left') {
      if (current.right) {
        current = current.right
      } else {
        return current;
      }
    } else if (direction === 'right') {
      if (current.left) {
        current = current.left;
      } else {
        return current;
      }
    }
  }
}

BST.prototype.delete = function(val) {
  let current = this.root;
  let direction;
  let parent;

  while (current) {
    if (current.value === val) {
      if (!direction) {
        this.root = dfs(current);
      } else if (current.left) {
        direction === 'left' ? parent.left = dfs(current) : parent.right = dfs(current);
        break;
      } else if (current.right) {
        direction === 'right' ? parent.right = dfs(current) : parent.left = dfs(current);
        break;
      } else {
        direction === 'left' ? parent.left = null : parent.right = null;
        break;
      }
    } else if (current.value > val) {
      if (!current.left) {
        return false;
      } else {
        parent = current;
        direction = 'left'
        current = current.left
      }
    } else if (current.value < val) {
      if (!current.right) {
        return false;
      } else {
        parent = current;
        direction = 'right';
        current = current.right
      }
    }
  }
}
