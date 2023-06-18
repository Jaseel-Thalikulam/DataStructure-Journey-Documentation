class Node{
    constructor(element) {
        this.element = element
        this.left = null
        this.right = null
    }
}


class BSTree {
    constructor() {
        this.root = null
    }


    insert(element) {
        node = new Node(element)
        
        if (this.root==null) {
            this.root =  node
        } else {
            this.insertChild(this.root,node)
        }

    }

    insertChild(root, node) {
        if (element < root.element) {
            if (root.left == null) {
                root.left = node
            } else {
                this. insertChild(root.left,node)
            }
        } else {
            if (root.right == null) {
                root.right = node
            } else {
                this.insertChild(root.right,node)
            }
                
        }
    }


    search(root, element) {
        if (!root) {
            return false
        } else {
            if (element < root.element) {
                return this.search(root.left,element)
            } else if (element > root.element) {
                return this.search(root.right,element)
                
            } else {
                return true
            }
        }             
    }

    preorder(root) {
        console.log(root.element)
        this.preorder(root.left)
        this.preorder(root.right)
    }
    inorder(root) {
        this.preorder(root.left)
        console.log(root.element)
        this.preorder(root.right)
    }
    postorder(root) {
        this.preorder(root.left)
        this.preorder(root.right)
        console.log(root.element)
    }



}

