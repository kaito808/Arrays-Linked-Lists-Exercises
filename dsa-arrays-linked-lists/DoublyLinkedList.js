class DoublyNode {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  

    push(val) {
        const newNode = new DoublyNode(val);
      
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
        }
      
        this.length++;
      }
      unshift(val) {
        const newNode = new DoublyNode(val);
      
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
        }
      
        this.length++;
      }
      pop() {
        if (this.length === 0) {
          throw new Error("List is empty");
        }
      
        const removedNode = this.tail;
      
        if (this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.tail = removedNode.prev;
          this.tail.next = null;
          removedNode.prev = null;
        }
      
        this.length--;
      
        return removedNode.val;
      }
      shift() {
        if (this.length === 0) {
          throw new Error("List is empty");
        }
      
        const removedNode = this.head;
      
        if (this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = removedNode.next;
          this.head.prev = null;
          removedNode.next = null;
        }
      
        this.length--;
      
        return removedNode.val;
      }
                        
      getAt(idx) {
        if (idx < 0 || idx >= this.length) {
          throw new Error("Invalid index");
        }
      
        let current = this.head;
        let count = 0;
      
        while (count < idx) {
          current = current.next;
          count++;
        }
      
        return current.val;
      }
      setAt(idx, val) {
        if (idx < 0 || idx >= this.length) {
          throw new Error("Invalid index");
        }
      
        let current = this.head;
        let count = 0;
      
        while (count < idx) {
          current = current.next;
          count++;
        }
      
        current.val = val;
      }
      insertAt(idx, val) {
        if (idx < 0 || idx > this.length) {
          throw new Error("Invalid index");
        }
      
        if (idx === 0) {
          this.unshift(val);
        } else if (idx === this.length) {
          this.push(val);
        } else {
          let current = this.head;
          let count = 0;
      
          while (count < idx) {
            current = current.next;
            count++;
          }
      
          const newNode = new DoublyNode(val);
          newNode.prev = current.prev;
          newNode.next = current;
          current.prev.next = newNode;
          current.prev = newNode;
      
          this.length++;
        }
      }
      removeAt(idx) {
        if (idx < 0 || idx >= this.length) {
          throw new Error("Invalid index");
        }
      
        if (idx === 0) {
          return this.shift();
        } else if (idx === this.length - 1) {
          return this.pop();
        } else {
          let current = this.head;
          let count = 0;
      
          while (count < idx) {
            current = current.next;
            count++;
          }
      
          current.prev.next = current.next;
          current.next.prev = current.prev;
      
          this.length--;
      
          return current.val;
        }
      }
      


      average() {
        if (this.length === 0) {
          return 0;
        }
      
        let sum = 0;
        let current = this.head;
      
        while (current) {
          sum += current.val;
          current = current.next;
        }
      
        return sum / this.length;
      }
                        
    

    reverseInPlace() {
        let current = this.head;
        let temp = null;
      
        while (current) {
          // Swap prev and next pointers
          temp = current.prev;
          current.prev = current.next;
          current.next = temp;
      
          // Move to the next node
          current = current.prev;
        }
      
        // Swap head and tail
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
      }
    
      static mergeSortedLists(listA, listB) {
        const mergedList = new DoublyLinkedList();
        let currentA = listA.head;
        let currentB = listB.head;
      
        while (currentA || currentB) {
          if (!currentA) {
            mergedList.push(currentB.val);
            currentB = currentB.next;
          } else if (!currentB) {
            mergedList.push(currentA.val);
            currentA = currentA.next;
          } else if (currentA.val < currentB.val) {
            mergedList.push(currentA.val);
            currentA = currentA.next;
          } else {
            mergedList.push(currentB.val);
            currentB = currentB.next;
          }
        }
      
        return mergedList;
      }
    
      
      pivot(value) {
        let current = this.head;
        let pivotNode = null;
        let beforePivot = new DoublyLinkedList();
        let afterPivot = new DoublyLinkedList();
      
        while (current) {
          if (current.val < value) {
            beforePivot.push(current.val);
          } else {
            afterPivot.push(current.val);
          }
      
          current = current.next;
        }
      
        this.head = beforePivot.head;
        this.tail = afterPivot.tail;
        this.head.prev = null;
        this.tail.next = null;
        this.length = beforePivot.length + afterPivot.length;
      }
      
      

}
  

