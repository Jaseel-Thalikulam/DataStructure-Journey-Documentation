class maxHeap{
    constructor(array) {
        this.heap = []

        if (array) {
            this.buildHeap(array)
        }
    }


    buildHeap(array) { 
        this.heap = array

        for (let i = this.parent(this.heap.length - 1); i >= 0; i--){
            this.shiftDown(i)
        }
    }

    shiftDown(currentIdx) {
       let leftIdx = this.leftChild(currentIdx);
        let endIdx = this.heap.length - 1
        while (leftIdx < endIdx) {
            let rightIdx = this.rightChild(currentIdx);
            let idxToShift 

            if (rightIdx < endIdx&&this.heap[rightIdx]<this.heap[leftIdx]) { 

                idxToShift = leftIdx 

            } else {
                idxToShift = rightIdx
            }

            if (this.heap[idxToShift] > this.heap[currentIdx]) {
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
        while (currentIdx > 0 && this.heap[parentIdx]<this.heap[currentIdx]) {
            [this.heap[parentIdx], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[parentIdx]]
            currentIdx = parentIdx
            parentIdx = this.parent( currentIdx )
        
        }

    }


    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    remove() {
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length-1], this.heap[0]]
        let valueToRemove = this.heap.pop()
        this.shiftDown(0)
        return valueToRemove
    }


    peek() {
        return this.heap[0]
    }

    parent(currentIdx) { 
        return Math.floor(currentIdx -1)/2
    }

    leftChild(currentIdx) {
        return currentIdx*2+1
    }

    rightChild(currentIdx) {
        return currentIdx*2+2
    }
    
    display() {
    console.log(this.heap)
    }
}

const array = [3,2,2,1,7]
const heap = new maxHeap(array)
heap.insert(33)
heap.insert(3)
heap.insert(335)
heap.insert(2)

heap.display()