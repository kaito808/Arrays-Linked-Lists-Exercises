class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(values = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let value of values) this.push(value);
  }

  _getNodeAtIndex(index) {
    let current = this.head;
    let count = 0;

    while (current !== null && count != index) {
      count += 1;
      current = current.next;
    }

    return current;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (this.length === 0) this.tail = this.head;

    this.length += 1;
  }

  pop() {
    return this.removeAt(this.length - 1);
  }

  shift() {
    return this.removeAt(0);
  }

  getAt(index) {
    if (index >= this.length || index < 0) {
      throw new Error("Invalid index.");
    }

    return this._getNodeAtIndex(index).value;
  }

  setAt(index, value) {
    if (index >= this.length || index < 0) {
      throw new Error("Invalid index.");
    }

    let current = this._getNodeAtIndex(index);
    current.value = value;
  }

  insertAt(index, value) {
    if (index > this.length || index < 0) {
      throw new Error("Invalid index.");
    }

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    let previous = this._getNodeAtIndex(index - 1);

    let newNode = new Node(value);
    newNode.next = previous.next;
    previous.next = newNode;

    this.length += 1;
  }

  removeAt(index) {
    if (index >= this.length || index < 0) {
      throw new Error("Invalid index.");
    }

    if (index === 0) {
      let value = this.head.value;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return value;
    }

    let previous = this._getNodeAtIndex(index - 1);

    if (index === this.length - 1) {
      let value = previous.next.value;
      previous.next = null;
      this.tail = previous;
      this.length -= 1;
      return value;
    }

    let value = previous.next.value;
    previous.next = previous.next.next;
    this.length -= 1;
    return value;
  }

  calculateAverage() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.value;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
