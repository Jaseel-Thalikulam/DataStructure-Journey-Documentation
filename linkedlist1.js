class Node {
    constructor(element){
      this.element = element
      this.next = null
    }
  }
  
  class Linkedlist {
    constructor(){
      this.head = null
      this.tail = null
    }
  
    addFirst(element){
      const node = new Node(element)
      if(!this.head){
        this.head = node
        this.tail = node
      }
      else{
        node.next = this.head
        this.head = node
      }
    }
    
    addPosBefore(element,pos){
      const node = new Node(element)
      if(!this.head){
        this.head = node
        this.tail = node
      }
      else if(this.head.element == pos){
        node.next = this.head
        this.head = node
      }else{
      let  temp = this.head
        while(temp){
          if(temp.next.element == pos){
            node.next = temp.next
            temp.next = node
            return
          }
          temp = temp.next
        }
      }
    }
  
  addPosAfter(element,pos){
    const node = new Node(element)
    if(!this.head){
      this.head = node
      this.tail = node
    }else if(this.head.element == pos){
      node.next = this.head.next 
      this.head.next = node
      }
      else{
        let temp = this.head
        while(temp){
          if(temp.next.element ==  pos){
            node.next = temp.next.next
            temp.next.next = node
            return
          }
          temp = temp.next
        }
      }
  }
  
  
  addLast(element){
    const node = new Node(element)
    if(!this.head){
      this.head = node
      this.tail = node
    }
    else{
      this.tail.next = node
      this.tail = node
    }
  }
  
  
  deleteFirst (){
    if(!this.head){
      return null
    }else{
      this.head = this.head.next
    }
  }
  
  deletePos(pos){
    if(!this.head){
      return null
    }else if(this.head.element == pos){
      this.head = this.head.next
    }else{
      let temp = this.head
      while(temp.next){
        if(temp.next.element == pos){
          temp.next = temp.next.next
        }
        temp = temp.next
      }
    }
  }
  
    
  
  deleteLast(){
    if(!this.head){
      return null
    }else{
     let temp = this.head
      while(temp.next.next){
        temp = temp.next
      }
      temp.next = null
      this.tail = temp
    }
  }
    print(){
      if(!this.head){
        return "no macthes found"
      }else{
       let temp = this.head
        while(temp){
          console.log(temp.element);
          temp = temp.next
        }
      }
  
    }
  
  }
  
  
  const list = new Linkedlist()
  
  list.addFirst(22)
  list.addFirst(88)
  list.addFirst(99)
  // list.deleteFirst()
  list.addLast(11)
  list.deletePos(88)
  list.addPosBefore(33,11)
  list.addPosAfter(123,22)
  // list.deleteLast()
  
  list.print()