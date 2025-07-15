class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  printList() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.val + " -> ";
      current = current.next;
    }
    output += "null";
    console.log(output);
  }
}

// Example usage:
const ll = new LinkedList();
[1, 2, 3, 4, 5, 6].forEach(num => ll.append(num));

ll.printList();

// Now you can write your solution:
function findMiddleNode(head) {
  let pre = head
  let post = head 

  while(post != null && post.next != null){
    console.log("hi")
    post = post.next.next
    pre = pre.next
  }

  return pre
}
const middleNode = findMiddleNode(ll.head);
console.log("Middle node value:", middleNode.val);
