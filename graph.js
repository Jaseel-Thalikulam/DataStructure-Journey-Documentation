class graph {
    constructor() {
      this.map = new Map();
    }
    addVertex(element) {
      this.map.set(element, new Array());
    }
  
    insert(vertex, edge, isBiDirectional) {
      if (!this.map.has(vertex)) {
        this.addVertex(vertex);
      }
  
      if (!this.map.has(edge)) {
        this.addVertex(edge);
      }
  
      this.map.get(vertex).push(edge);
      if (isBiDirectional) {
        this.map.get(edge).push(vertex);
      }
    }
    delete(vertex){
      if (this.map.has(vertex)) {
        
          let edges = this.map.get(vertex);
          
        for (let edge of edges) {
            
              this.map.get(edge).splice(this.map.get(edge).indexOf(vertex), 1);
            
          }
          this.map.delete(vertex);  
      }
  }
  

  
  display() {
      for (let vertex of this.map.keys()) {
          let edge = this.map.get(vertex);
          console.log(vertex, edge);
      }
  }
  
  bfs(start){
   
    let visited = new Set()
    let queue = [start]

    while(queue.length > 0){
      let node = queue.shift()
      if(!visited.has(node)){
        visited.add(node)
        console.log(node);
        for(let neighber of this.map.get(node)){
          queue.push(neighber)
        }
      }
    }
  }

  dfs(start,visited =new Set()){
    visited.add(start)
    console.log(start);
    for(let neighber of this.map.get(start)){
      if(!visited.has(neighber)){
        this.dfs(neighber,visited)
      }
    }
  }
  
}
  

  
  
  
  const gr = new graph()
  
  gr.insert(3,5,true)
  gr.insert(3,4,true)
  gr.insert(5,6,false)
  // gr.delete(3)
// gr.display()
  
// gr.dfs(3);
gr.bfs(3)
