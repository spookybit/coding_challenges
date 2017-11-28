// create a search feature that zigzags down a binary tree and prints out the value

function Node(value, parent, leftChild, rightChild) {
  this.value: value,
  this.parent: parent,
  this.leftChild: leftChild,
  this.rightChild: rightChild
}

function zigzag(node) {
  let currentNode = node;
  let counter = 0;

  while (currentNode) {
    console.log(currentNode.value);

    if (counter % 2 === 0) {
      currentNode = currentNode.leftChild;
    } else {
      currentNode = currentNode.rightChild;
    }

    counter += 1;
  }
}
