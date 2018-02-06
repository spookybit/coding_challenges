// function Node(val) {
//   this.value = val;
//   this.right = null;
//   this.left = null;
// }

function BST(val) {
  this.value = val;
  this.right = null;
  this.left = null;

  return this.value;
}

BST.prototype.add = function(val) {
  if (val <= this.value) {
    if (!this.left) {
      this.left = new BST(val)
    } else {
      this.left.add(val)
    }
  } else if (val > this.value) {
    if (!this.right) {
      this.right = new BST(val);
    } else {
      this.right.add(val)
    }
  }
}

BST.prototype.contains = function(val) {
  if (this.value === val) {
    return true
  } else if (this.value > val) {
    if (!this.left) {
      return false
    } else {
      return this.left.contains(val)
    }
  } else if (this.value < val) {
    if (!this.right) {
      return false
    } else {
      return this.right.contains(val)
    }
  }
}

BST.prototype.delete = function(val) {
  if (this.value === val) {
    if (this.left) {

    } else if (this.right) {

    } else {

    }
  } else if (this.value > val) {
    this.left.delete(val);
  } else if (this.value < val) {
    this.right.delete(val);
  }
}
