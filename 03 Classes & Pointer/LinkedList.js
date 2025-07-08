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
    if (!this.head) return undefined;
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
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    let temp = this.head;
    if (!this.head) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index){
    if(index < 0 || index >= this.length) return undefined

    let temp = this.head
    for(let i=0; i<index; i++){
        temp = temp.next
    }
    return temp

  }
}

const newList = new LinkedList(1);
newList.push(2);
newList.push(3);
newList.push(4);
// newList.pop();
// console.log(newList.pop());
// newList.unshift(5);
// console.log(newList.shift());
console.log(newList.get(2))

// console.dir(newList, { depth: null });
