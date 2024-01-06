class Node {
  constructor(value) { 
    this.value = value
    this.left = null
    this.right = null
  }

}



class BSTree {
  constructor() {
    this.root = null
  }


  insert(value) {
    const node = new Node(value)
    if (!this.root) {
      this.root = node
    } else {
      this.insertChild(this.root,node)
    }
  }

  insertChild(root, node) {
    if (node.value > root.value) {



      this.insertChild(root.right, node)
      


    } else if (node.value < root.value) {


      this.insertChild(root.left, node)
      

    } else if (root.element == node.value) {

      
      this.insertChild(root.right,value)
      
    }
  }
}
