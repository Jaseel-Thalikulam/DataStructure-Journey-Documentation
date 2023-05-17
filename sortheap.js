class HeapSort{
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


    parent(currentidx) {
        return Math.floor((currentidx -1)/2)
    }

    shiftDown(currentidx) {
        let endIdx = this.heap.length - 1
        let leftIdx = this.leftChild(currentidx)

        while (leftIdx <= endIdx) { 
            let rightIdx = this.rightChild(currentidx)
            let idxToShift
            if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]) { 
                idxToShift = rightIdx
            } else {
                idxToShift = leftIdx
            }

            if (this.heap[idxToShift] < this.heap[currentidx]) {
               [this.heap[idxToShift],this.heap[currentidx]] = [this.heap[currentidx],this.heap[idxToShift]]
                currentidx = idxToShift;
                leftIdx = this.leftChild(currentidx)
            } else {
                return 
            }

            
        }
    }

    sort() {
        for (let i = this.heap.length - 1; i >= 0; i--){
            this.sorting(i)
        }
    }

    sorting(currentIdx) {
        [this.heap[0], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[0]];
        console.log(this.heap[currentIdx]);
        this.heap.pop();
        this.shiftDown(0);
    }
    

    leftChild(currentidx) { 
        return currentidx * 2 + 1;

    }

    rightChild(currentidx) { 
        return currentidx * 2 + 2;

    }

    display() {
        console.log(this.heap);
       
    }
  
}

const array = [33,2,11,5,77,4]
const heap = new HeapSort (array)

heap.sort()
heap.display()
