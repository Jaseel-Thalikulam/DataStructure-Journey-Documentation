class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }
  prepend(value) {
    let node = new Node(value)
    if (this.head == null) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
  }
  print() {
    if (this.head == null) {
      console.log("Empty")
    } else {
      let list = ''
      let current = this.head
      while (current) {
        list += ` ${current.value}`
        current = current.next
      }
      console.log(list)
    }
  }

  delete(value) {
    if (!this.head) {
      console.log('noooo head')
      return 
    } else {
      if (this.head.value == value) {
        this.head = this.head.next
        return
         
      } else {
        let previous = null
        let current = this.head
        while (current) {
          if (current.value == value) {
            previous.next = current.next
            return
          }
          previous = current
          current = current.next
        }
      }
    }
  }
}


list = new LinkedList()
list.prepend(22)
list.prepend(27)
list.prepend(67)
list.prepend(99)
list.prepend(19)
list.prepend(779)
list.delete(67)

list.print()