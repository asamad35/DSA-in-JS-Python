class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value)
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode
  }

  delete(value) {

    if (this.head === null) return // empty list

    if (this.head.value === value) {
      this.head = this.head.next
      if (this.head === null) { // if list has only one node
        this.tail = null
      } else {
        this.head.prev = null
      }
      return
    }

    let currentNode = this.head;

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode === null) return; // no matching value found.

    if (currentNode.next === null) { // delete last node
      this.tail = currentNode.prev;
      this.tail.next = null
    } else { // remove in b/w node
      currentNode.prev.next = currentNode.next
      currentNode.next.prev = currentNode.prev

    }
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next
    }
  }
}

const LinkedList1 = new DoublyLinkedList()
LinkedList1.append(1)
LinkedList1.append(2)
LinkedList1.append(3)
LinkedList1.append(4)
LinkedList1.append(5)
LinkedList1.delete(1)
LinkedList1.print()