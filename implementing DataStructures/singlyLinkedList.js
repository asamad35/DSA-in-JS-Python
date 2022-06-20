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
    return current 
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
    return current;
  }

  shift() {
    //- if head is not present
    if (!this.head) return undefined;

    //- storing old head
    const oldHead = this.head;

    // - initializing head pointer with the second node
    this.head = this.head.next;
    this.length--;
    // if length is 0 head and tail pointer will be null
    // head is already null as head is intitialized as 2nd node which is null in case of 0 length.
    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  unshift(value) {
    // create a new node
    const newNode = new Node(value);

    // - if length is 0 then we can use pop method which is already defined
    if (this.length === 0) {
      this.push(value);
    } else {
      // - just add ther new node as head
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this;
  }

  get(index) {
    // - if index is 0 or more than length (counting from 0 index)
    if (index < 0 || index > this.length - 1) return undefined;

    // - get the target node
    let targetNode = this.head;
    let i = 0;
    while (i < index) {
      targetNode = targetNode.next;
      i++;
    }
    return targetNode;
  }

  set(index, value) {
    const targetNode = this.get(index);
    if (targetNode === undefined) return undefined;
    else targetNode.value = value;

    return targetNode;
  }

  insert(index, value) {
    // - if index is 0 or more than length
    if (index < 0 || index > this.length) return undefined;

    // - if index is equal to length then insert at end
    if (index === this.length) {
      this.push(value);
      return this;
    }
    // - if index is equal to 0 then insert at start

    if (index === 0) {
      this.unshift(value);
      return this;
    }

    // - if  none of the above condition true then insert at middle,

    const prevNode = this.get(index - 1);
    const insertNode = new Node(value);
    const afterNode = this.get(index);

    prevNode.next = insertNode;
    insertNode.next = afterNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index > this.length - 1 || index < 0) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    // - if node is in in middle
    const prevNode = this.get(index - 1);
    const removeNode = this.get(index);
    const afterNode = this.get(index + 1);

    prevNode.next = afterNode;
    this.length--;

    return removeNode;
  }

  reverse() {
    // swap head and tail
    let temp = null;
    temp = this.tail;
    this.tail = this.head;
    this.head = temp;

    // make three var to keep record, currentNode is tail because it is linked to further nodes
    let prevNode = null;
    let currentNode = this.tail;
    let nextNode;

    // directing currentNode to point towards previousNode. And then changing value of previousNode to currentNode and currentNode to nextNode
    for (let i = 0; i < this.length; i++) {
      // Dry Run to make it clear
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
  }
}

var list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");

list.reverse();

console.log(list);
