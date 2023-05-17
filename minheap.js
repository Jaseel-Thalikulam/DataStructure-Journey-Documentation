class MinHeap {
    constructor(array) {
        this.heap = []
        if (array) {
            this.BuildHeap(array)
        }
    }
  
    BuildHeap(array) {
        this.heap = array
        for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
            this.shiftDown(i)
            
        }
    }
  
  
  
  
    shiftDown(currentIdx) {
       
        let leftIdx = this.leftChild(currentIdx);
        let endIdx = this.heap.length - 1;
  
  
        while (leftIdx <= endIdx) {
            let rightIdx = this.rightChild(currentIdx)
            let idxToShift 
  
            if (rightIdx <= endIdx && this.heap[rightIdx] <= this.heap[leftIdx]) {
                idxToShift = rightIdx
  
            } else {
                idxToShift = leftIdx
            }
  
            if (this.heap[idxToShift] < this.heap[currentIdx]) { 
                [this.heap[idxToShift], this.heap[currentIdx] = this.heap[currentIdx], this.heap[idxToShift]]
                
  
                currentIdx = idxToShift
  
                leftIdx = this.leftChild(currentIdx)
            } else {
                return;
            }
        }
  
    }   
  
    shiftUp(currentIdx) {
        let parentIdx = this.parent(currentIdx);
        while (currentIdx > 0 && this.heap[parentIdx] > this.heap[currentIdx]) {
            this.swap(parentIdx, currentIdx);
            currentIdx = parentIdx
            parentIdx = this.parent(currentIdx);
        }
   }
    
    leftChild(currentIdx) {
  
        return currentIdx * 2 + 1
  
    }
  
    rightChild(currentIdx) {
    
        return currentIdx * 2 + 2
    
    }
  
    parent(currentIdx) { 
        return Math.floor(currentIdx - 1) / 2
        
    }
  
    swap(i, j) {
        [this.heap[i],this.heap[j] = this.heap[j], this.heap[i]]
    }
  
    peek() {
        return this.heap[0]
    }
  
    remove() {
        [this.heap[0], this.heap[this.heap.length - 1] = this.heap[this.heap.length - 1], this.heap[0]]
        
        this.heap.pop()
        this.shiftDown(0)
  
    }
  
  
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length-1)
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