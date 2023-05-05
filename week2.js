//bubble sort
function bubbleSorting(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1.length - i - 1; j++) {
        if (arr1[j] > arr1[j + 1]) {
          [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]];
        }
      }
    }
    console.log("Sorted by bubble sort : "+arr1);
  }
  
  let arr1 = [33, 2, 255, 6, 7, 88, 4, 32, 6, 33, 2];
  bubbleSorting(arr1);

//   //Insertion sorting
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  console.log("insertion sort : "+arr);
}

let arr = [100, 2, 44, 5, 3, 21, 1, 16, 7, 2];
insertionSort(arr); 

//Selection sort

function selectionSort(arr2) {
  for (let i = 0; i < arr2.length; i++) {
    let minValue = arr2[i];
    let minIndex = i;
    for (let j = i + 1; j < arr2.length; j++) {
      if (arr2[j] < minValue) {
        minValue = arr2[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      arr2[minIndex] = arr2[i];
      arr2[i] = minValue;
    }
  }
  console.log("Selection sort : "+arr2);
}
let arr2 = [221,44, 444, 33, 2, 6, 7878, 54, 6];
selectionSort(arr2);


function selectionsortof(arr){
  for(i=0;i<arr.length-1;i++){
      for(j=i+1;j<arr.length;j++){
          if(arr[i]>arr[j]){
              [arr[i],arr[j]]=[arr[j],arr[i]]
          }
      }
  }
  console.log(arr);
}
selectionsortof(arr19)


// //quick sort
const arr5 = [2, 33, 10, 1, 4, 5, 44, 3, 50]

function quickSort(arr) {
    if(arr.length<=1){
      return arr
    }else{
      let pivot = arr[0]
      let leftArray = []
      let rightArray = []
      for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
           leftArray.push(arr[i])
        }else{
          rightArray.push(arr[i])
        }
      }
      return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
    }
}

console.log(quickSort(arr5));

// //merge sort
const arr8 = [2, 33, 2, 1, 4, 5, 44, 3, 2]

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    } else {
        const mid = Math.floor(arr.length / 2)
        const leftArray = arr.slice(0, mid)
        const rightArray = arr.slice(mid)
        return merge(mergeSort(leftArray), mergeSort(rightArray))
    }
}
function merge(leftArray, rightArray) {
    const sortedArray = []
    while (leftArray.length && rightArray.length) {
        if(leftArray[0]<=rightArray[0]){
            sortedArray.push(leftArray.shift())
        }else{
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray,...leftArray,...rightArray]
}

console.log(mergeSort(arr8));

//queue
class Node {
  constructor(element){
      this.element = element
      this.next  = null
  }
}

class Queue {
  constructor (){
      this.front  = null
      this.rear = null
  }   

  Enqueue (element){
      const node  =new Node(element)
      if(!this.front){
          this.front = this.rear = node
      }else{
          this.rear.next = node 
          this.rear = node
      }
  }


  Dequeue (){
      if(!this.front){
          console.log("empty Queue");
      }else{
          this.front = this.front.next
          if(this.front ==null){
              this.rear = null
          }
      }
  }


  print (){
      if(!this.front){
          console.log("empty queue");
      }else{
          let temp = this.front
          while(temp){
              console.log(temp.element);
              temp = temp.next
          }
      }
  }
}

let list1  = new Queue()

list1.Enqueue(2)
list1.Enqueue(2)
list1.Enqueue(2)
list1.Enqueue(2)
// list1.Dequeue()
list1.print()


//stacks
class Node {
  constructor(element){
    this.element = element
    this.next  = null
  }
}

class Stack{
  constructor(){
    this.top = null
  }
  push (element){
    const node = new Node (element)
    if(!this.top){
      this.top = node
    }else{
      node.next = this.top
      this.top = node
    }
  }

  pop(){
    if(!this.top){
      console.log("stack underflow");
    }else{
      this.top = this.top.next
    }
  }

  print (){
    if(!this.top){
      console.log("stack underflow");
    }else{
      let temp = this.top
      while(temp){
        console.log(temp.element);
        temp = temp.next 
      }
    }
  }
}

let list = new Stack ()

list.push(19)
list.push(20)
list.push(21)
list.pop()
list.print()