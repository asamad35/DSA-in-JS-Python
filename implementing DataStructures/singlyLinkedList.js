//  A node contains 1)value 2)next pointer
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// A singly linked list contains 1) Head pointer 2) Tail pointee 3) Nodes
class SinglyLinkedList {
  constructor() {
    //  define head and tail pointers
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // *  METHOD NUMBER 1
  //  push nodes to Liniked List
  push(value) {
    //   create new node
    var newNode = new Node(value, null);

    // if list is empty then initialise head and tail pointing to the first node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // If there is/are node/nodes present then tail pointer is pointing towards last node.
    // ? So by using tail pointer set last node next pointer to the node that is to be inserted.
    // ? And then move tail pointer to the inserted node because now it is the last node.
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    //? My popping algorithm
    /* 
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = this.tail = null;
      this.length--;
      return;
    }
    let current = this.head;
    // checking value of "current node ke aage wale node ka nextPointer" null he ya ni 
    while (current.next.next) {
      current = current.next;
    }
    // now "current" represents second last node. So for better readibiltiy declaring secondLastNode
    let secondLastNode = current;
    secondLastNode.next = null;
    this.tail = secondLastNode;
    this.length--;
    */

    //* Colt's popping algorithm

    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = this.tail = null;
      this.length--;
      return;
    }
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
  }
}

var list = new SinglyLinkedList();
list.push("hi");
list.push("there");
list.push("heloo");
list.push("heloo");
list.pop();
list.pop();
console.log(list);
