class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  
   
  class Queue{
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
  
    Enqueue(element) { 
      const node = new Node(element);
      if (!this.front) {
        this.front=this.rear=node
      } else {
        this.rear.next = node;
        this.rear = node;
      }
    }
  
    Dequeue() {
      if (!this.front) {
        
        console.log("Dequeueing nothing");
  
      } else {
        this.front = this.front.next
        if (this.front == null) {
          this.rear = null;
  
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