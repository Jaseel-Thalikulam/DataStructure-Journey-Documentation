class Node{
    constructor(element) {
        this.element = element
        this.left = null
        this.right = null
    }
}



class BSTree{
    constructor() { 
        this.root = null;
    }


    isEmpty() {
        return this.root == null
    }

    insert(element) {
      const  node = new Node(element);
        if (this.root == null) {
            this.root = node;
        } else {
            this.insertChild(this.root, node);
        }
        
    }


    insertChild(root, node) {
        if (node.element<root.element) {
           
            if (root.left == null) {
                root.left = node
            } else {
                this.insertChild(root.left, node);
            }
            
        } else {
            if (root.right == null) { 
                root.right = node
                
            } else {
                this.insertChild(root.right, node);
            }

        }
    }

    search(root, element) {
        if (!root) {
            return false
        } else {
            if (root.element === element) { 

                return true

            } else if (element < root.element){
                return this.search(root.left, element)
            } else {
                return this.search(root.right, element)
            }
        }
      
    }
   
    preorder(root) {
        if (root) {
            console.log(root.element)
            this.preorder(root.left)
            this.preorder(root.right)
       }
    }
    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.element)
            this.inorder(root.right)
       }
    }
    postorder(root){
        if (root) {
           this.inorder(root.left)
            this.inorder(root.right)
            console.log(root.element)
       }
   } 
   
 
    min(root) {
        if (!root.left) {
            return root.element

        } else {
            return this.min(root.left)
        }
    }

    max(root) { 
        if (!root.right) { 
            return root.element
        } else {
        return this.max(root.right)
        }
    }

    closestNum(target) {
        let currentNode = this.root;
        let closest = currentNode.element;

        while (currentNode) {
            if (Math.abs(target - closest) > Math.abs(target-currentNode.element)) {
                closest = currentNode.element;
            }
                
            

            if (target<currentNode.element) {
                currentNode = currentNode.left

            } else if (target>currentNode.element) {
                currentNode = currentNode.right
                
            } else {
                break;
            }
        }

        return closest;
    }
   
    delete(element) {
        this.root = this.deleteNode(this.root, element);
        console.log(this.root);
      }
      deleteNode(root, element) {
        if (root === null) {
            
          return root;
  
        } else {
          
          if (element < root.element) {
            root.left = this.deleteNode(root.left, element);
         
          } else if (element > root.element) {
            root.right = this.deleteNode(root.right, element);
          
          } else {
           
            if (!root.left && !root.right) {
              return null;
            }
  
            if (!root.left) {
              return root.right;
  
            } else if (!root.right) {
              return root.left;
              
            }
            root.element = this.min(root.right);
            root.right = this.deleteNode(root.right, root.element);
          }
          return root;
        }
      }
    

    
}

const BST = new BSTree();
BST.insert(8)
BST.insert(2)
BST.insert(12)
BST.insert(10)
BST.insert(1)
BST.insert(111)

// console.log(BST.postorder(BST.root))
console.log(BST.min(BST.root))
console.log(BST.max(BST.root))
console.log(BST.closestNum(9))
// console.log(BST.search(BST.root,2))