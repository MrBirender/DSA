class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.head) return undefined
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = pre;
      pre.next = null;
    }
    this.length--;
    return temp
  }
}

const newList = new LinkedList(1);
newList.push(2);
newList.push(3);
newList.push(4);
console.log(newList.pop());
console.dir(newList, { depth: null });
console.log(newList.pop());
console.dir(newList, { depth: null });
console.log(newList.pop());
console.dir(newList, { depth: null });
console.log(newList.pop());
console.dir(newList, { depth: null });
