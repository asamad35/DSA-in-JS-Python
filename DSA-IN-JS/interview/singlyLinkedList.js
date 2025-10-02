class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.next = null;
  }

  append(value) {
    const newNode = new Node(value)
    if (this.head === null) {
      this.head = newNode
      return
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode;
  }

  delete(value) {
    if (this.head === null) return; // linkedlist is empty;
    if (this.head.value === value) {
      this.head = this.head.next
      return
    }
    let prevNode = null;
    let currentNode = this.head;

    while (currentNode.value !== value && currentNode) {
      prevNode = currentNode;
      currentNode = currentNode.next
    }

    if (currentNode === null) {
      return; // node not found
    }

    // delete node
    prevNode.next = currentNode.next
  }

  print() {
    let currentNode = this.head
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;

    }
  }

  length() {
    let length = 0;
    let currentNode = this.head;

    while (currentNode) {
      length++;
      currentNode = currentNode.next
    }

    console.log(length)
  }
}

const LinkedList1 = new LinkedList();
LinkedList1.append(1)
LinkedList1.append(2)
LinkedList1.append(3)
LinkedList1.append(4)
LinkedList1.delete(1)
LinkedList1.print()
LinkedList1.length()