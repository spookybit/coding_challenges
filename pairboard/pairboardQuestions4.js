function allBSTPaths(rootNode){
  if (!rootNode.left && !rootNode.right){
    return [rootNode.val];
  }

  let paths = [];

  if (rootNode.left){
    allBSTPaths(rootNode.left).forEach(function(path){
      paths.push(rootNode.val + "->" + path);
    })
  }

  if (rootNode.right) {
    allBSTPaths(rootNode.right).forEach(function(path){
      paths.push(rootNode.val + "->" + path);
    })
  }

  return paths;
}

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let node1 = new Node(5);
let node2 = new Node(3);
let node3 = new Node(7);
let node4 = new Node(11);
let node5 = new Node(23);
let node6 = new Node(14);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node2.left = node5;
node2.right = node6;

allBSTPaths(node1);
