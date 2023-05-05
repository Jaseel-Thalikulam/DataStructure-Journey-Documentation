class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function arrayToLinkedList(arr) {
    if (!arr || arr.length === 0) {
      return null;
    }
    const head = new Node(arr[0]);
    let currentNode = head;
    for (let i = 1; i < arr.length; i++) {
      currentNode.next = new Node(arr[i]);
      currentNode = currentNode.next;
    }
    return head;
  }
  

  const arr = [1, 2, 3, 4, 5];
const headNode = arrayToLinkedList(arr);
console.log(headNode.value); // 1
console.log(headNode.next.value); // 2
console.log(headNode.next.next.value);