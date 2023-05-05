
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