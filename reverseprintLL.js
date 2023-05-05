class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size == 0
    }
    GetSize() {
        return this.size;
    }
    prepend(value) {
        const node = new Node(value);

        if (this.isEmpty() == true) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head =node
        }
        this.size++;
    }



    print() {
        if (this.size == 0) {
          console.log("empty node");
        } else {
          let current = this.head;
          let stack = [];
          while (current) {
            stack.push(current.value);
            current = current.next;
          }
          let listValue = "";
          while (stack.length > 0) {
            listValue += `${stack.pop()} `;
          }
          console.log(listValue);
        }
      }
      
}


const list = new LinkedList()

list.prepend(1)
list.prepend(2)
list.prepend(3)


console.log(list.isEmpty())

list.print()