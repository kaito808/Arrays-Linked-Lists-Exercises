class CircularArray {
    constructor() {
      this.items = [];
      this.rotation = 0;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    printArray() {
      for (const item of this.items) {
        console.log(item);
      }
    }
  
    getByIndex(index) {
      if (index < 0 || index >= this.items.length) {
        return null;
      }
  
      const rotatedIndex = (index + this.rotation) % this.items.length;
      if (rotatedIndex < 0) {
        return this.items[this.items.length + rotatedIndex];
      }
  
      return this.items[rotatedIndex];
    }
  
    rotate(offset) {
      this.rotation = (this.rotation + offset) % this.items.length;
    }
  }
  
  // Example usage:
  const circ = new CircularArray();
  circ.addItem('harry');
  circ.addItem('hermione');
  circ.addItem('ginny');
  circ.addItem('ron');
  
  circ.printArray();
  console.log(circ.getByIndex(2));  // ginny
  
  circ.rotate(1);
  circ.printArray();
  console.log(circ.getByIndex(2));  // ron
  
  circ.rotate(-1);
  circ.printArray();
  console.log(circ.getByIndex(2));  // hermione
  
  circ.rotate(-17);
  console.log(circ.getByIndex(1));  // harry
  
  circ.rotate(-2);
  circ.addItem('dobby');
  circ.printArray();
  