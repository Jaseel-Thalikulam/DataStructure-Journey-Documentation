class Node {
    constructor(element) {
      this.element = element;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    isEmpty() {
      return this.root == null;
    }
  
    insert(element) {
      const node = new Node(element);
      if (this.root === null) {
        this.root = node;
      } else {
        this.insertNode(this.root, node);
      }
    }
    insertNode(root, node) {
      if (node.element < root.element) {
        if (root.left === null) {
          root.left = node;
        } else {
          this.insertNode(root.left, node);
        }
      } else {
        if (root.right === null) {
          root.right = node;
        } else {
          this.insertNode(root.right, node);
        }
      }
    }
  
    //kili
    insertion(element) {
      let currentNode = this.root;
      const node = new Node(element);
      if (currentNode === null) {
        this.root = node;
        return;
      }
      while (true) {
        if (node.element < currentNode.element) {
          if (currentNode.left === null) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = node;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
    //search
    search(root, element) {
      if (!root) {
        return false;
      } else {
        if (root.element === element) {
          return true;
        } else if (element < root.element) {
          return this.search(root.left, element);
        } else {
          return this.search(root.right, element);
        }
      }
    }
  
    //kili contains
    contains(element) {
      let currentNode = this.root;
      while (currentNode != null) {
        if (element < currentNode.element) {
          currentNode = currentNode.left;
        } else if (element > currentNode.element) {
          currentNode = currentNode.right;
        } else {
          return true;
        }
      }
      return false;
    }
  
    preorder(root) {
      if (root) {
        console.log(root.element);
        this.preorder(root.left);
        this.preorder(root.right);
      }
    }
    inorder(root) {
      if (root) {
        this.inorder(root.left);
        console.log(root.element);
        this.inorder(root.right);
      }
    }
  
    postOrder(root) {
      if (root) {
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.element);
      }
    }
  
    isBST(root) {
      if (root === null) {
        return true;
      }
      if (root.left !== null && root.left.data > root.data) {
        return false;
      }
      if (root.right !== null && root.right.data < root.data) {
        return false;
      }
      if (!this.isBST(root.left) || !this.isBST(root.right)) {
        return false;
      }
      return true;
    }
  
  
  
    min(root) {
      if (!root.left) {
        return root.value;
      } else {
        return this.min(root.left);
      }
    }
  
    max(root) {
      if (!root.right) {
        return root.value;
      } else {
        return this.max(root.right);
      }
    }
  
    delete(element) {
      this.root = this.deleteNode(this.root, element);
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
          root.right = this.deleteNode(root.right, root.value);
        }
        return root;
      }
    }
  
    closestNum(target) {
      let currentNode = this.root;
      let closest = currentNode.element;
      while (currentNode) {
        if (Math.abs(target - closest) > Math.abs(target - currentNode.element)) {
          closest = currentNode.element;
        }
        if (target < currentNode.element) {
          currentNode = currentNode.left;
        } else if (target > currentNode.element) {
          currentNode = currentNode.right;
        } else {
          break;
        }
      }
      return closest;
    }
  
    isBinaryTree(node) {}
  }
  
  const Bst = new BinarySearchTree();
  Bst.insert(90);
  Bst.insert(89);
  Bst.insert(97);
  Bst.insert(96);
  Bst.insertion(98);
  Bst.insert(9);
  Bst.insert(7);
  Bst.insert(8);
  Bst.insert(13);
  Bst.insert(15);
  Bst.insert(120);
  console.log("is the value in:",Bst.search(Bst.root,7));
  console.log("tree is empty:-" + Bst.isEmpty());
  
  // console.log(Bst.contains(35));
  // Bst.delete(3);
  // console.log(Bst.closestNum(14));
  let n;
  console.log("its is a bst:",Bst.isBST(Bst.root));
  
  Bst.postOrder(Bst.root);








  class MinHeap {
    constructor(array) {
      this.heap = [];
      if (array) {
        this.buildHeap(array);
      }
    }
  
    buildHeap(array) {
      this.heap = array;
      for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
        this.shiftDown(i);      
      }
    }
  
    shiftDown(currentIdx) {
      let endIdx = this.heap.length - 1;
      let leftIdx = this.leftChild(currentIdx);
      while(leftIdx<=endIdx){
        let rightIdx = this.rightChild(currentIdx)
        let idxToShift;
        if(rightIdx<= endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
            idxToShift = rightIdx

        }else{
            idxToShift = leftIdx
        }
        if(this.heap[currentIdx]>this.heap[idxToShift] ){
            [this.heap[currentIdx],this.heap[idxToShift]]=[this.heap[idxToShift],this.heap[currentIdx]]
            // this.swap(currentIdx,idxToShift)
            currentIdx =  idxToShift
            leftIdx = this.leftChild(currentIdx)
        }else{
            return;
        }
      }
     
    }
  
    shiftUp(currentIdx) {
      let parentIdx = this.parent(currentIdx);
      while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
        this.swap(currentIdx, parentIdx);
        [ this.heap[currentIdx],this.heap[parentIdx]] = [ this.heap[parentIdx], this.heap[currentIdx]]
        currentIdx = parentIdx;
        parentIdx = this.parent(currentIdx);
      }
    }
  
    peek() {
      return this.heap[0];
    }
  
    remove() {
        [this.heap[0],this.heap[this.heap.length-1]] = [this.heap [this.heap.length -1],this.heap[0]]
    //   this.swap(0, this.heap.length - 1);
      const valueToRemove = this.heap.pop();
      this.shiftDown(0);
      return valueToRemove;
    }
  
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
  
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
  
    leftChild(i) {
      return i * 2 + 1;
    }
  
    rightChild(i) {
      return i * 2 + 2;
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    display() {
      console.log(this.heap);
    }
  }
  
  const array = [2, 1, 2];
  const heap = new MinHeap(array);
heap.insert(3)
heap.insert(3)
heap.insert(3)
heap.insert(3)
heap.remove()
heap.remove()
heap.remove()
heap.display()
  



