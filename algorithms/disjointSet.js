class DisjointSet {
  constructor(){
    this.edges = [];
    this.graph = {};
  }

  printGraph(){
    console.log(this.graph);
  }

  addEdge(vertexA, vertexB){
    this.edges.push([vertexA, vertexB])
  }

  findParent(vertex){
    let parent = this.graph[vertex];

    if (typeof parent !== 'undefined'){
      return this.findParent(parent);
    } else {
      return vertex;
    }
  }

  unionize(vertexA, vertexB){
    let parentA = this.findParent(vertexA);
    this.graph[parentA] = vertexB;
  }

  isCyclic(){
    for (let i = 0, len = this.edges.length; i < len; i++){
      let edge = this.edges[i];
      let vertexA = edge[0];
      let vertexB = edge[1];

      let parentA = this.findParent(vertexA);
      let parentB = this.findParent(vertexB);

      if(parentA === parentB) {
        return true;
      } else {
        this.unionize(vertexA, vertexB);
      }
    }

    return false;
  }
}

let graph = new DisjointSet();
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(3, 0);
graph.addEdge(2, 5);
graph.addEdge(5, 3);

console.log(graph.isCyclic());
graph.printGraph();
